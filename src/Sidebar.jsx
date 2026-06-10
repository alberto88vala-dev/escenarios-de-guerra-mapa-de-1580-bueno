/**
 * Sidebar.jsx — arquitectura plana src/
 * Panel lateral con información del punto seleccionado.
 */

const LINK_ICONS = {
  libro: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  web: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  articulo: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  ),
  archivo: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
    </svg>
  ),
};

const CAT_COLORS = {
  1: "#2d6b5e", 2: "#8b3a0f", 3: "#c4882c",
  4: "#5a7c3a", 5: "#4a4a6e", 6: "#5a7a8a",
  7: "#8a8070", 8: "#a07040",
};
const CAT_LABELS = {
  1: "Asentamientos", 2: "Escenarios de Guerra", 3: "Cosmovisión",
  4: "Naturaleza",    5: "Infraestructura",      6: "Nodos Periféricos",
  7: "Límites",       8: "Caminos",
};
const LINK_TYPE_LABELS = { libro: "Libro", web: "Sitio web", articulo: "Artículo", archivo: "Archivo" };

export default function Sidebar({ point, onClose }) {
  const color     = point ? CAT_COLORS[point.categoryId] || "#8b3a0f" : null;
  const catLabel  = point ? CAT_LABELS[point.categoryId] || "" : null;
  const hasLinks  = point?.enlaces?.length > 0;

  return (
    <aside className={`sidebar ${point ? "sidebar--open" : ""}`}>

      {/* Estado vacío */}
      {!point && (
        <div className="sidebar__empty">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <p>Selecciona un punto en el mapa para ver su información detallada</p>
        </div>
      )}

      {/* Detalle */}
      {point && (
        <>
          <header className="sidebar__header">
            <div>
              <span className="sidebar__cat-badge" style={{ color }}>
                {catLabel}
              </span>
              <div className="sidebar__title">{point.name}</div>
            </div>
            <button className="sidebar__close" onClick={onClose} aria-label="Cerrar">✕</button>
          </header>

          <div className="sidebar__body">
            {/* Imagen */}
            <div className="sidebar__img-wrap">
              {point.imageUrl
                ? <img src={point.imageUrl} alt={point.name} className="sidebar__img" />
                : <span className="sidebar__img-placeholder">[ Imagen por asignar ]</span>
              }
            </div>

            {/* Descripción breve */}
            <div className="sidebar__content">
              <p>{point.shortDescription}</p>
              {point.historicalDesc && <p>{point.historicalDesc}</p>}
            </div>

            {/* Análisis paleográfico */}
            {point.paleographicAnalysis && (
              <div className="sidebar__content" style={{ marginTop: ".75rem" }}>
                <p style={{ fontWeight: 600, fontStyle: "normal", fontSize: ".8rem",
                            letterSpacing: ".1em", textTransform: "uppercase",
                            color: "var(--sienna)", marginBottom: ".35rem" }}>
                  Análisis pictórico
                </p>
                <p>{point.paleographicAnalysis}</p>
              </div>
            )}

            {/* Fuente */}
            {point.primarySources?.length > 0 && (
              <div className="sidebar__source">
                <span className="sidebar__source-label">Fuentes: </span>
                {point.primarySources.join(" · ")}
              </div>
            )}
            {point.agi && (
              <div className="sidebar__source">
                <span className="sidebar__source-label">AGI: </span>{point.agi}
              </div>
            )}

            {/* Recursos de apoyo */}
            {hasLinks && (
              <div className="sidebar__enlaces">
                <div className="sidebar__enlaces-header">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                  Recursos de apoyo
                </div>
                <ul className="sidebar__enlaces-list">
                  {point.enlaces.map((e, i) => (
                    <li key={i} className="sidebar__enlace-item">
                      <a href={e.url} target="_blank" rel="noopener noreferrer"
                         className="sidebar__enlace-link">
                        <span className="sidebar__enlace-icon">
                          {LINK_ICONS[e.tipo] || LINK_ICONS.web}
                        </span>
                        <span className="sidebar__enlace-body">
                          <span className="sidebar__enlace-titulo">{e.titulo}</span>
                          {e.autor && <span className="sidebar__enlace-autor">{e.autor}</span>}
                          {e.descripcion && <span className="sidebar__enlace-desc">{e.descripcion}</span>}
                        </span>
                        <span className="sidebar__enlace-badge">
                          {LINK_TYPE_LABELS[e.tipo] || "Enlace"}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Coordenadas */}
            {point.coords && (
              <div className="sidebar__coords">
                Coordenadas aprox.: {point.coords[0].toFixed(4)}° N,&nbsp;
                {Math.abs(point.coords[1]).toFixed(4)}° O
              </div>
            )}
            {point.iconographyOnly && (
              <div className="sidebar__coords">Elemento iconográfico — sin coordenadas precisas</div>
            )}
          </div>
        </>
      )}
    </aside>
  );
}
