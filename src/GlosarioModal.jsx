/**
 * GlosarioModal.jsx — Escenarios de Guerra
 * Modal interactivo sobre la Gramática Visual y Codicología del Tlacuilo (1580)
 */

import { useEffect } from "react";

const SYMBOLS = [
  {
    id: "soles",
    icon: "☀️",
    title: "Soles Antropomorfos",
    subtitle: "Orientación del Lienzo (Oriente - Poniente)",
    tradition: "Híbrida Novohispana",
    description:
      "Dibujados en los márgenes de la pintura con rostro humano. Indican la orientación cartesiana-cosmológica del lienzo (de oriente a poniente), reflejando la convención de la cartografía indígena novohispana.",
  },
  {
    id: "iglesia",
    icon: "⛪",
    title: "Iglesia con Cruz Coronada",
    subtitle: "Asentamientos y Villas de Españoles",
    tradition: "Hispano-Mesoamericana",
    description:
      "Glifo arquitectónico híbrido utilizado para representar a las villas de San Miguel el Grande y San Felipe. Simboliza el núcleo defensivo, la administración virreinal y la cristianización en la frontera.",
  },
  {
    id: "huellas",
    icon: "👣",
    title: "Huellas de Pies Humanos",
    subtitle: "Caminos Reales y Senderos",
    tradition: "Mesoamericana Prehispánica",
    description:
      "Convención pictórica directa de los códices prehispánicos para indicar dirección, flujo y movimiento. En el mapa marcan el trazado del Camino Real de Tierra Adentro y los senderos de incursión.",
  },
  {
    id: "martirio",
    icon: "⚔️",
    title: "Cabezas Cercenadas y Flechas",
    subtitle: "Escenarios de Guerra y Martirio",
    tradition: "Visualidad Fronteriza",
    description:
      "Iconografía que representa la violencia de la Guerra Chichimeca (1550-1600): martirios de religiosos franciscanos, ataques a caravanas de plata e incursiones de naciones guamares y guachichiles.",
  },
  {
    id: "estancias",
    icon: "🏘️",
    title: "Casas Rectangulares y Glosas",
    subtitle: "Estancias Ganaderas y Labranzas",
    tradition: "Colonial Agraria",
    description:
      "Viviendas alineadas a la ribera del río San Miguel (río Laja) acompañadas por textos explicativos en español ('estancias de vacas'), que atestiguan la apropiación del paisaje agropecuario del Bajío.",
  },
  {
    id: "molino",
    icon: "⚙️",
    title: "Círculo con Aspas (Rueda de Molino)",
    subtitle: "Ingenios Hidráulicos",
    tradition: "Tecnología Europea",
    description:
      "Representa un 'herido de molino de panmoler' aprovechando el cauce de los ríos. Señala la infraestructura de procesamiento de grano para abastecer a soldados, pobladores y transeúntes.",
  },
  {
    id: "cerros",
    icon: "⛰️",
    title: "Cerros en Perfil",
    subtitle: "Toponimia y Serranías",
    tradition: "Glífica Mesoamericana",
    description:
      "Los cerros y elevaciones del terreno están representados de perfil al estilo teocalli/códice, definiendo los límites naturales del territorio y los refugios de las naciones indomables.",
  },
  {
    id: "vegetacion",
    icon: "🌵",
    title: "Cactáceas y Nopales",
    subtitle: "Naturaleza del Gran Chichimeca",
    tradition: "Ecológico-Regional",
    description:
      "Dibujos detallados de nopales, mezquites y agaves que caracterizan el bioma semiárido de la frontera norte y los recursos de subsistencia de las naciones cazadoras-recolectoras.",
  },
];

export default function GlosarioModal({ isOpen, onClose }) {
  // Cerrar con tecla Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="glosario-title"
      >
        <header className="modal-header">
          <div>
            <span className="modal-eyebrow">Simbolismo Codicológico · Relación Geográfica 1580</span>
            <h2 id="glosario-title" className="modal-title">
              Gramática Visual del Tlacuilo
            </h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar glosario">
            ✕
          </button>
        </header>

        <div className="modal-body">
          <p className="modal-intro">
            El mapa de <em>San Miguel y San Felipe de los Chichimecas (1580)</em> es un documento maestro de tradición mestiza e híbrida. Combina el lenguaje visual de los tlacuilos (escribanos-pintores indígenas) con glosas en español y convenciones de la cartografía virreinal.
          </p>

          <div className="glosario-grid">
            {SYMBOLS.map((s) => (
              <div key={s.id} className="glosario-card">
                <div className="glosario-card__header">
                  <span className="glosario-card__icon">{s.icon}</span>
                  <div>
                    <h3 className="glosario-card__title">{s.title}</h3>
                    <span className="glosario-card__subtitle">{s.subtitle}</span>
                  </div>
                </div>
                <span className="glosario-card__badge">{s.tradition}</span>
                <p className="glosario-card__desc">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="modal-footer">
          <p className="modal-footer-note">
            Fuente: Archivo General de Indias (Sevilla), MP-MEXICO, 560 · Análisis codicológico para la Tesina UNAM 2026.
          </p>
          <button className="btn-primary" onClick={onClose}>
            Entendido · Volver al Mapa
          </button>
        </footer>
      </div>
    </div>
  );
}
