mkdir -p /home/claude/entrega/src
cat > /home/claude/entrega/src/MapView.jsx << 'EOF'
/**
 * MapView.jsx
 * Correcciones:
 * 1. Zoom fluido: requestAnimationFrame + evento "zoom" (no solo zoomend)
 * 2. Segunda capa de mapa redibujado con control de alternancia
 * 3. Créditos dinámicos debajo del mapa
 */

import { useState, useCallback, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { mapPoints, mapMetadata } from "./mapData";

// ── Fix íconos Leaflet + Vite ────────────────────────────────────────
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const CAT_COLORS = {
  1:"#2d6b5e", 2:"#8b3a0f", 3:"#c4882c",
  4:"#5a7c3a", 5:"#4a4a6e", 6:"#5a7a8a",
  7:"#8a8070", 8:"#a07040",
};
const CAT_LABELS = {
  1:"Asentamientos",    2:"Escenarios de Guerra",
  3:"Cosmovisión",      4:"Naturaleza",
  5:"Infraestructura",  6:"Nodos Periféricos",
  7:"Límites del Mapa", 8:"Caminos",
};

function makePinIcon(color) {
  return L.divIcon({
    className: "",
    html: `<div style="
      width:22px;height:22px;
      border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      background:${color};
      border:2px solid white;
      box-shadow:0 2px 8px rgba(0,0,0,0.4);
      cursor:pointer;
    "></div>`,
    iconSize:[22,22], iconAnchor:[11,22], popupAnchor:[0,-26],
  });
}

// ════════════════════════════════════════════════════════════════════
// CLAVE DE LA CORRECCIÓN DE ZOOM
// ─────────────────────────────────────────────────────────────────
// Problema anterior: el SVG solo se re-dibujaba en "zoomend",
// es decir DESPUÉS de que Leaflet terminaba el zoom. Durante esos
// milisegundos la imagen quedaba en su posición anterior → parpadeo.
//
// Solución: escuchar TAMBIÉN el evento "zoom" (que se dispara en
// cada frame durante la animación) y usar requestAnimationFrame
// para que el redibujado ocurra sincronizado con el render del
// navegador, igual que la propia capa de tiles de Leaflet.
// ════════════════════════════════════════════════════════════════════
function buildSVG(map, corners) {
  const lats   = corners.map(c => c[0]);
  const lngs   = corners.map(c => c[1]);
  const bounds = L.latLngBounds(
    [Math.min(...lats), Math.min(...lngs)],
    [Math.max(...lats), Math.max(...lngs)]
  );

  const nw = map.latLngToLayerPoint(bounds.getNorthWest());
  const se = map.latLngToLayerPoint(bounds.getSouthEast());
  const w  = se.x - nw.x;
  const h  = se.y - nw.y;

  const rel = corners.map(([lat, lng]) => {
    const p = map.latLngToLayerPoint(L.latLng(lat, lng));
    return { x: p.x - nw.x, y: p.y - nw.y };
  });

  // Orden: arriba-izq[0] → arriba-der[1] → abajo-der[3] → abajo-izq[2]
  const pts = [rel[0], rel[1], rel[3], rel[2]]
    .map(p => `${p.x},${p.y}`).join(" ");

  const ns  = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("xmlns",   ns);
  svg.setAttribute("width",   String(w));
  svg.setAttribute("height",  String(h));
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  svg.style.overflow = "visible";

  const defs = document.createElementNS(ns, "defs");
  const clip = document.createElementNS(ns, "clipPath");
  clip.setAttribute("id", "hist-clip");
  const poly = document.createElementNS(ns, "polygon");
  poly.setAttribute("points", pts);
  clip.appendChild(poly);
  defs.appendChild(clip);
  svg.appendChild(defs);

  const img = document.createElementNS(ns, "image");
  img.setAttribute("href",                corners._url);
  img.setAttribute("x",                   "0");
  img.setAttribute("y",                   "0");
  img.setAttribute("width",               String(w));
  img.setAttribute("height",              String(h));
  img.setAttribute("preserveAspectRatio", "none");
  img.setAttribute("clip-path",           "url(#hist-clip)");
  svg.appendChild(img);

  return { svg, bounds };
}

function HistoricalImageLayer({ opacity, activeLayer }) {
  const map      = useMap();
  const layerRef = useRef(null);
  const rafRef   = useRef(null);

  useEffect(() => {
    if (!map) return;

    // Seleccionar esquinas y URL según capa activa
    const corners = activeLayer === "original"
      ? mapMetadata.imageCorners
      : mapMetadata.imageCorners2;
    const url = activeLayer === "original"
      ? mapMetadata.imageOverlayUrl
      : mapMetadata.imageOverlayUrl2;

    if (!corners || corners.length !== 4) return;

    // Adjuntar la URL a corners para que buildSVG la use
    const cornersWithUrl  = [...corners];
    cornersWithUrl._url   = url;

    const lats   = corners.map(c => c[0]);
    const lngs   = corners.map(c => c[1]);
    const bounds = L.latLngBounds(
      [Math.min(...lats), Math.min(...lngs)],
      [Math.max(...lats), Math.max(...lngs)]
    );

    // Capa SVG nativa de Leaflet
    const emptySvg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    const layer    = L.svgOverlay(emptySvg, bounds, {
      opacity:  opacity / 100,
      zIndex:   10,
      // ─── CORRECCIÓN CLAVE ───────────────────────────────────────
      // interactive: false evita que Leaflet recalcule eventos del
      // ratón sobre la capa en cada frame, reduciendo trabajo extra.
      interactive: false,
    });
    layer.addTo(map);
    layerRef.current = layer;

    // Función de actualización con requestAnimationFrame
    function update() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!layerRef.current) return;
        const container = layerRef.current.getElement();
        if (!container) return;
        const { svg } = buildSVG(map, cornersWithUrl);
        container.innerHTML = "";
        container.appendChild(svg);
      });
    }

    // Primera renderización
    setTimeout(update, 30);

    // ─── CORRECCIÓN CLAVE ─────────────────────────────────────────
    // Escuchar "zoom" (durante animación) Y "zoomend"/"moveend"
    // "zoom" → se dispara cada frame de la animación de zoom
    // "zoomend"/"moveend" → refresco final para máxima precisión
    map.on("zoom zoomend moveend", update);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      map.off("zoom zoomend moveend", update);
      if (layerRef.current) {
        map.removeLayer(layerRef.current);
        layerRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, activeLayer]);

  // Opacidad sin re-crear la capa
  useEffect(() => {
    if (layerRef.current) layerRef.current.setOpacity(opacity / 100);
  }, [opacity]);

  return null;
}

// ── Créditos por capa ────────────────────────────────────────────────
const CREDITS = {
  original: {
    autor:  "Tlacuilo anónimo (manufactura indígena)",
    fuente: "Archivo General de Indias (AGI), Sevilla — MP-MEXICO, 560",
  },
  redibujado: {
    autor:  "Redibujo: [Tu nombre / institución]",
    fuente: "Basado en AGI, MP-MEXICO, 560 — Elaboración propia, 2024",
  },
};

// ── Componente principal ─────────────────────────────────────────────
export default function MapView({ onSelectPoint }) {
  const [opacity,          setOpacity         ] = useState(70);
  const [activeLayer,      setActiveLayer     ] = useState("original");
  const [activeCategories, setActiveCategories] = useState(
    new Set([1, 2, 3, 4, 5, 6, 7])
  );

  const toggleCat = useCallback((id) => {
    setActiveCategories(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const visiblePoints = mapPoints.filter(
    p => !p.iconographyOnly && p.coords && activeCategories.has(p.categoryId)
  );

  const credits = CREDITS[activeLayer];

  return (
    <div style={{ display:"flex", flexDirection:"column", width:"100%", height:"100%" }}>

      {/* ── Barra de controles ── */}
      <div className="map-controls-bar">
        <span className="controls-label">Opacidad:</span>
        <div className="opacity-control">
          <span style={{ fontSize:".75rem", color:"var(--ink-light)" }}>0%</span>
          <input
            type="range" className="opacity-slider"
            min={0} max={100} value={opacity}
            onChange={e => setOpacity(Number(e.target.value))}
            aria-label="Opacidad del mapa histórico"
          />
          <span style={{ fontSize:".75rem", color:"var(--ink-light)" }}>100%</span>
          <span className="opacity-value">{opacity}%</span>
        </div>

        <div className="bar-divider" />

        {/* ── Selector de capa ── */}
        <span className="controls-label">Versión:</span>
        <div style={{ display:"flex", gap:".4rem" }}>
          {[
            { key:"original",   label:"Mapa Original 1580" },
            { key:"redibujado", label:"Versión Redibujada"  },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveLayer(key)}
              style={{
                padding:".28rem .85rem",
                fontFamily:"var(--font-body)",
                fontSize:".76rem",
                letterSpacing:".05em",
                border:"1px solid",
                borderColor: activeLayer === key ? "var(--sienna)" : "rgba(139,58,15,.3)",
                background:  activeLayer === key ? "var(--sienna)" : "transparent",
                color:       activeLayer === key ? "#fff"          : "var(--sienna)",
                cursor:"pointer",
                transition:"all .2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="bar-divider" />

        <span className="controls-label">Filtrar:</span>
        <div className="filter-chips">
          {[1,2,3,4,5,6,7,8].map(id => (
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

      {/* ── Mapa ── */}
      <div style={{ flex:1, minHeight:0 }}>
        <MapContainer
          center={mapMetadata.mapCenter}
          zoom={mapMetadata.defaultZoom}
          style={{ width:"100%", height:"100%" }}
          // ─── CORRECCIÓN CLAVE ──────────────────────────────────
          // zoomAnimation: true  → permite que Leaflet anime el zoom
          //                        con CSS transform en el contenedor
          // markerZoomAnimation: true → los marcadores siguen la anim.
          // Ambas opciones evitan el "salto" que causaba el parpadeo
          zoomAnimation={true}
          markerZoomAnimation={true}
          id="map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            maxZoom={18}
          />

          <HistoricalImageLayer opacity={opacity} activeLayer={activeLayer} />

          {visiblePoints.map(point => {
            const color    = CAT_COLORS[point.categoryId] || "#666";
            const catLabel = CAT_LABELS[point.categoryId] || "";
            const excerpt  = point.shortDescription.split(" ").slice(0,18).join(" ") + "…";
            return (
              <Marker key={point.id} position={point.coords} icon={makePinIcon(color)}>
                <Popup maxWidth={275}>
                  <div className="popup-inner">
                    {point.imageUrl && (
                      <div style={{
                        width:"100%", height:"140px",
                        overflow:"hidden", marginBottom:".75rem",
                        border:"1px solid rgba(139,58,15,0.2)",
                      }}>
                        <img src={point.imageUrl} alt={point.name}
                          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                      </div>
                    )}
                    <div className="popup-cat" style={{ color }}>{catLabel}</div>
                    <div className="popup-title">{point.name}</div>
                    <div className="popup-excerpt">{excerpt}</div>
                    <button className="popup-btn" style={{ borderColor:color, color }}
                      onClick={() => onSelectPoint && onSelectPoint(point)}>
                      Ver detalle →
                    </button>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      {/* ── Créditos dinámicos ── */}
      <div style={{
        padding:".65rem 1.2rem",
        borderTop:"1px solid rgba(139,58,15,.18)",
        background:"var(--parchment-dark)",
        display:"flex",
        flexWrap:"wrap",
        gap:".35rem 2rem",
        transition:"all .3s ease",
      }}>
        <span style={{
          fontFamily:"var(--font-body)",
          fontSize:".76rem",
          color:"var(--ink-light)",
        }}>
          <span style={{ fontWeight:600, color:"var(--sienna)", marginRight:".3rem" }}>
            Autor:
          </span>
          {credits.autor}
        </span>
        <span style={{
          fontFamily:"var(--font-body)",
          fontSize:".76rem",
          color:"var(--ink-light)",
        }}>
          <span style={{ fontWeight:600, color:"var(--sienna)", marginRight:".3rem" }}>
            Fuente:
          </span>
          {credits.fuente}
        </span>
      </div>

    </div>
  );
}
EOF