/**
 * MapView.jsx — arquitectura plana src/
 * Lee las esquinas del rombo desde mapData.js → mapMetadata.imageCorners
 */
 
import { useState, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup, SVGOverlay } from "react-leaflet";
import L from "leaflet";
import { mapPoints, mapMetadata } from "./mapData";
 
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
 
function HistoricalMap({ opacity }) {
  const corners = mapMetadata.imageCorners || [
    [mapMetadata.imageBounds[1][0], mapMetadata.imageBounds[0][1]],
    [mapMetadata.imageBounds[1][0], mapMetadata.imageBounds[1][1]],
    [mapMetadata.imageBounds[0][0], mapMetadata.imageBounds[0][1]],
    [mapMetadata.imageBounds[0][0], mapMetadata.imageBounds[1][1]],
  ];
 
  const allLats = corners.map(c => c[0]);
  const allLngs = corners.map(c => c[1]);
  const bounds = [
    [Math.min(...allLats), Math.min(...allLngs)],
    [Math.max(...allLats), Math.max(...allLngs)],
  ];
 
  const latRange = bounds[1][0] - bounds[0][0];
  const lngRange = bounds[1][1] - bounds[0][1];
 
  const toXY = ([lat, lng]) => ({
    x: ((lng - bounds[0][1]) / lngRange) * 100,
    y: ((bounds[1][0] - lat) / latRange) * 100,
  });
 
  const pts = corners.map(toXY);
 
  // Orden correcto: arriba-izq → arriba-der → abajo-der → abajo-izq
  const polygonPoints = [
    pts[0], pts[1], pts[3], pts[2],
  ].map(p => `${p.x},${p.y}`).join(" ");
 
  return (
    <SVGOverlay bounds={bounds} opacity={opacity / 100} zIndex={10}>
      <defs>
        <clipPath id="rombo-clip">
          <polygon points={polygonPoints} />
        </clipPath>
      </defs>
      <image
        href={mapMetadata.imageOverlayUrl}
        x="0" y="0"
        width="100%" height="100%"
        preserveAspectRatio="none"
        clipPath="url(#rombo-clip)"
      />
    </SVGOverlay>
  );
}
 
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
 
          <HistoricalMap opacity={opacity} />
 
          {visiblePoints.map((point) => {
            const color    = CAT_COLORS[point.categoryId] || "#666";
            const catLabel = CAT_LABELS[point.categoryId] || "";
            const excerpt  = point.shortDescription.split(" ").slice(0, 18).join(" ") + "…";
            return (
              <Marker key={point.id} position={point.coords} icon={makePinIcon(color)}>
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
 