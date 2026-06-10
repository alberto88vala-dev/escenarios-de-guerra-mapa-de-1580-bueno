/**
 * MapView.jsx — arquitectura plana src/
 *
 * CORRECCIONES:
 * 1. Barra de controles FUERA del MapContainer → nunca desaparece
 * 2. Rotación real via SVGOverlay con un polígono de 4 esquinas
 *    → la imagen se queda fija al hacer zoom y paneo
 */

import { useState, useCallback, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, SVGOverlay } from "react-leaflet";
import L from "leaflet";
import { mapPoints, mapMetadata } from "./mapData";

// ── Fix íconos Leaflet con Vite ──────────────────────────────────────
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// ── Colores y etiquetas ──────────────────────────────────────────────
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
// LAS 4 ESQUINAS DEL ROMBO — aquí está todo el control
//
// Cada par [lat, lng] es una esquina de tu mapa histórico
// colocada sobre el mundo real.
//
// Basándome en tu captura, el rombo tiene:
//   Vértice NORTE (punta de arriba)  → entre Pinos y Villa de Reyes
//   Vértice SUR   (punta de abajo)   → entre Salamanca e Irapuato
//   Vértice ESTE  (punta de derecha) → cerca de San Luis de la Paz
//   Vértice OESTE (punta izquierda)  → cerca de Lagos de Moreno
//
// El orden para SVGOverlay es:
//   [0] arriba-izquierda   [1] arriba-derecha
//   [2] abajo-izquierda    [3] abajo-derecha
//
// CÓMO AJUSTAR:
//   - Pon el slider al 50% para ver ambos mapas a la vez
//   - Mueve UNA esquina a la vez, guarda (Ctrl+S) y compara
//   - Usa los pins como referencia:
//       San Miguel  [20.9142, -100.7436]
//       San Felipe  [21.4816, -101.2163]
// ═══════════════════════════════════════════════════════════════════
const ESQUINAS = [
  [22.05, -102.00],   // [0] arriba-izquierda  — vértice NORTE-OESTE
  [22.05, -100.35],   // [1] arriba-derecha    — vértice NORTE-ESTE
  [20.35, -102.00],   // [2] abajo-izquierda   — vértice SUR-OESTE
  [20.35, -100.35],   // [3] abajo-derecha     — vértice SUR-ESTE
];

// El bounding box que contiene las 4 esquinas (Leaflet lo necesita
// para saber en qué zona del mundo dibujar el SVG).
// No lo toques — se calcula automáticamente de ESQUINAS.
const BOUNDS = [
  [
    Math.min(...ESQUINAS.map(e => e[0])),  // lat mínima (sur)
    Math.min(...ESQUINAS.map(e => e[1])),  // lng mínima (oeste)
  ],
  [
    Math.max(...ESQUINAS.map(e => e[0])),  // lat máxima (norte)
    Math.max(...ESQUINAS.map(e => e[1])),  // lng máxima (este)
  ],
];

// ── Imagen histórica anclada con SVGOverlay ──────────────────────────
// SVGOverlay le dice a Leaflet exactamente qué zona del mundo ocupa,
// así la imagen se queda fija al hacer zoom y paneo.
function HistoricalMap({ opacity }) {
  const map = useMap();

  // Convertir coordenadas geográficas a posición en % dentro del SVG
  const toPercent = (lat, lng) => {
    const [[minLat, minLng], [maxLat, maxLng]] = BOUNDS;
    const x = ((lng - minLng) / (maxLng - minLng)) * 100;
    const y = ((maxLat - lat) / (maxLat - minLat)) * 100; // Y invertida
    return { x, y };
  };

  // Los 4 puntos del polígono en coordenadas % del SVG viewBox
  const p = ESQUINAS.map(([lat, lng]) => toPercent(lat, lng));

  // String de puntos para el elemento <polygon>
  const points = p.map(({ x, y }) => `${x},${y}`).join(" ");

  return (
    <SVGOverlay bounds={BOUNDS} opacity={opacity / 100}>
      <defs>
        <clipPath id="mapa-clip">
          <polygon points={points} />
        </clipPath>
      </defs>
      <image
        href={mapMetadata.imageOverlayUrl}
        x="0" y="0"
        width="100%" height="100%"
        preserveAspectRatio="none"
        clipPath="url(#mapa-clip)"
      />
    </SVGOverlay>
  );
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
    // ⚠️  IMPORTANTE: este div envuelve TANTO la barra de controles
    // COMO el mapa — pero la barra está FUERA de MapContainer,
    // así nunca la afectan los eventos de clic del mapa.
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>

      {/* ── Barra de controles — FUERA del mapa ── */}
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

      {/* ── Mapa — ocupa el espacio restante ── */}
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

          {/* ── Imagen histórica fija con forma de rombo ── */}
          <HistoricalMap opacity={opacity} />

          {/* ── Marcadores ── */}
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
