/**
 * MapView.jsx — arquitectura plana src/
 * CORRECCIÓN DEFINITIVA:
 * - Usa L.SVG nativo de Leaflet (sin SVGOverlay de React) → imagen fija al hacer zoom
 * - Controles FUERA del MapContainer → nunca desaparecen
 */
 
import { useState, useCallback, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { mapPoints, mapMetadata } from "./mapData";
 
// ── Fix íconos Leaflet con Vite ──────────────────────────────────────
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
 
const CAT_COLORS = {
  1: "#2d6b5e", 2: "#8b3a0f", 3: "#c4882c",
  4: "#5a7c3a", 5: "#4a4a6e", 6: "#5a7a8a",
  7: "#8a8070", 8: "#a07040",
};
const CAT_LABELS = {
  1: "Asentamientos",    2: "Escenarios de Guerra",
  3: "Cosmovisión",      4: "Naturaleza",
  5: "Infraestructura",  6: "Nodos Periféricos",
  7: "Límites del Mapa", 8: "Caminos",
};
 
function makePinIcon(color) {
  return L.divIcon({
    className: "",
    html: `<div style="
      width:22px; height:22px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      background: ${color};
      border: 2px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      cursor: pointer;
    "></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 22],
    popupAnchor: [0, -26],
  });
}
 
// ═══════════════════════════════════════════════════════════════════
// COMPONENTE IMAGEN HISTÓRICA
// Usa la API nativa de Leaflet (no SVGOverlay de React-Leaflet)
// Esto garantiza que la imagen quede FIJA al hacer zoom y paneo.
//
// Lee las coordenadas desde mapData.js → mapMetadata.imageCorners
// Orden de las 4 esquinas:
//   [0] arriba-izquierda   [1] arriba-derecha
//   [2] abajo-izquierda    [3] abajo-derecha
// ═══════════════════════════════════════════════════════════════════
function HistoricalImageLayer({ opacity }) {
  const map = useMap();
  const overlayRef = useRef(null);
  const svgRef     = useRef(null);
 
  useEffect(() => {
    if (!map) return;
 
    const corners = mapMetadata.imageCorners;
    if (!corners || corners.length !== 4) return;
 
    // Bounding box que contiene todas las esquinas
    const lats = corners.map(c => c[0]);
    const lngs = corners.map(c => c[1]);
    const bounds = L.latLngBounds(
      [Math.min(...lats), Math.min(...lngs)],
      [Math.max(...lats), Math.max(...lngs)]
    );
 
    // Crear capa SVG nativa de Leaflet anclada al bounds
    const svgLayer = L.svgOverlay(
      document.createElementNS("http://www.w3.org/2000/svg", "svg"),
      bounds,
      { opacity: opacity / 100, zIndex: 10 }
    );
 
    // Construir el SVG con clipPath en forma de rombo
    function buildSVG() {
      // Proyectar las 4 esquinas geográficas a píxeles en el mapa actual
      const projected = corners.map(([lat, lng]) =>
        map.latLngToLayerPoint(L.latLng(lat, lng))
      );
      const boundsPoint = {
        topLeft:     map.latLngToLayerPoint(bounds.getNorthWest()),
        bottomRight: map.latLngToLayerPoint(bounds.getSouthEast()),
      };
      const w = boundsPoint.bottomRight.x - boundsPoint.topLeft.x;
      const h = boundsPoint.bottomRight.y - boundsPoint.topLeft.y;
 
      // Convertir puntos absolutos a relativos dentro del SVG
      const rel = projected.map(p => ({
        x: p.x - boundsPoint.topLeft.x,
        y: p.y - boundsPoint.topLeft.y,
      }));
 
      // Orden: arriba-izq [0] → arriba-der [1] → abajo-der [3] → abajo-izq [2]
      const polyPoints = [rel[0], rel[1], rel[3], rel[2]]
        .map(p => `${p.x},${p.y}`)
        .join(" ");
 
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("xmlns",   svgNS);
      svg.setAttribute("width",   String(w));
      svg.setAttribute("height",  String(h));
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      svg.style.overflow = "visible";
 
      const defs = document.createElementNS(svgNS, "defs");
      const clip = document.createElementNS(svgNS, "clipPath");
      clip.setAttribute("id", "hist-clip");
      const poly = document.createElementNS(svgNS, "polygon");
      poly.setAttribute("points", polyPoints);
      clip.appendChild(poly);
      defs.appendChild(clip);
      svg.appendChild(defs);
 
      const img = document.createElementNS(svgNS, "image");
      img.setAttribute("href",               mapMetadata.imageOverlayUrl);
      img.setAttribute("x",                  "0");
      img.setAttribute("y",                  "0");
      img.setAttribute("width",              String(w));
      img.setAttribute("height",             String(h));
      img.setAttribute("preserveAspectRatio","none");
      img.setAttribute("clip-path",          "url(#hist-clip)");
      svg.appendChild(img);
 
      return svg;
    }
 
    // Actualizar el SVG cada vez que el mapa se mueve/zoom
    function update() {
      if (!overlayRef.current) return;
      const newSvg = buildSVG();
      const container = overlayRef.current.getElement();
      if (container) {
        container.innerHTML = "";
        container.appendChild(newSvg);
      }
      svgRef.current = newSvg;
    }
 
    svgLayer.addTo(map);
    overlayRef.current = svgLayer;
 
    // Construir SVG inicial después de que Leaflet renderice la capa
    setTimeout(() => {
      update();
    }, 50);
 
    // Re-dibujar en cada zoom y movimiento
    map.on("zoomend moveend", update);
 
    return () => {
      map.off("zoomend moveend", update);
      if (overlayRef.current) {
        map.removeLayer(overlayRef.current);
        overlayRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
 
  // Actualizar opacidad sin re-crear la capa
  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.setOpacity(opacity / 100);
    }
  }, [opacity]);
 
  return null;
}
 
// ── Componente principal ─────────────────────────────────────────────
export default function MapView({ onSelectPoint }) {
  const [opacity, setOpacity] = useState(70);
  const [activeCategories, setActiveCategories] = useState(
    new Set([1, 2, 3, 4, 5, 6, 7])
  );
 
  const toggleCat = useCallback((id) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);
 
  const visiblePoints = mapPoints.filter(
    (p) => !p.iconographyOnly && p.coords && activeCategories.has(p.categoryId)
  );
 
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
 
      {/* ── Barra de controles — FUERA del MapContainer ── */}
      <div className="map-controls-bar">
        <span className="controls-label">Opacidad:</span>
        <div className="opacity-control">
          <span style={{ fontSize: ".75rem", color: "var(--ink-light)" }}>0%</span>
          <input
            type="range"
            className="opacity-slider"
            min={0} max={100} value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            aria-label="Opacidad del mapa histórico"
          />
          <span style={{ fontSize: ".75rem", color: "var(--ink-light)" }}>100%</span>
          <span className="opacity-value">{opacity}%</span>
        </div>
        <div className="bar-divider" />
        <span className="controls-label">Filtrar:</span>
        <div className="filter-chips">
          {[1,2,3,4,5,6,7,8].map((id) => (
            <button
              key={id}
              className={`chip ${activeCategories.has(id) ? "active" : ""}`}
              data-cat={id}
              onClick={() => toggleCat(id)}
            >
              {CAT_LABELS[id]}
            </button>
          ))}
        </div>
      </div>
 
      {/* ── Contenedor del mapa ── */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <MapContainer
          center={mapMetadata.mapCenter}
          zoom={mapMetadata.defaultZoom}
          style={{ width: "100%", height: "100%" }}
          id="map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            maxZoom={18}
          />
 
          {/* Imagen histórica — fija al hacer zoom y paneo */}
          <HistoricalImageLayer opacity={opacity} />
 
          {/* Marcadores */}
          {visiblePoints.map((point) => {
            const color    = CAT_COLORS[point.categoryId] || "#666";
            const catLabel = CAT_LABELS[point.categoryId] || "";
            const excerpt  = point.shortDescription.split(" ").slice(0, 18).join(" ") + "…";
 
            return (
              <Marker
                key={point.id}
                position={point.coords}
                icon={makePinIcon(color)}
              >
                <Popup maxWidth={275}>
                  <div className="popup-inner">
                    {point.imageUrl && (
                      <div style={{
                        width: "100%", height: "140px",
                        overflow: "hidden", marginBottom: ".75rem",
                        border: "1px solid rgba(139,58,15,0.2)",
                      }}>
                        <img
                          src={point.imageUrl}
                          alt={point.name}
                          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
                        />
                      </div>
                    )}
                    <div className="popup-cat" style={{ color }}>{catLabel}</div>
                    <div className="popup-title">{point.name}</div>
                    <div className="popup-excerpt">{excerpt}</div>
                    <button
                      className="popup-btn"
                      style={{ borderColor: color, color }}
                      onClick={() => onSelectPoint && onSelectPoint(point)}
                    >
                      Ver detalle →
                    </button>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}
 