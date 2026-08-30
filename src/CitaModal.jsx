/**
 * CitaModal.jsx — Escenarios de Guerra
 * Modal de Cita Académica Formal (UNAM / Chicago Deusto & APA 7)
 */

import { useState, useEffect } from "react";

export default function CitaModal({ isOpen, onClose }) {
  const [copiedChicago, setCopiedChicago] = useState(false);
  const [copiedApa,     setCopiedApa    ] = useState(false);

  const chicagoText =
    'Valadez, Alberto. "Escenarios de Guerra: La visión del cartógrafo. Un análisis geográfico e histórico del mapa de San Miguel y San Felipe de los Chichimecas de 1580". Tesina de Licenciatura en Historia, Facultad de Filosofía y Letras, Universidad Nacional Autónoma de México (UNAM), 2026. Cartografía digital interactiva en línea.';

  const apaText =
    'Valadez, A. (2026). Escenarios de Guerra: La visión del cartógrafo [Tesina de Licenciatura en Historia, Universidad Nacional Autónoma de México]. Cartografía digital interactiva.';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === "chicago") {
        setCopiedChicago(true);
        setTimeout(() => setCopiedChicago(false), 2200);
      } else {
        setCopiedApa(true);
        setTimeout(() => setCopiedApa(false), 2200);
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        style={{ maxWidth: "720px" }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cita-title"
      >
        <header className="modal-header">
          <div>
            <span className="modal-eyebrow">Referencia Institucional · UNAM</span>
            <h2 id="cita-title" className="modal-title">
              Cómo Citar esta Investigación
            </h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
            ✕
          </button>
        </header>

        <div className="modal-body">
          <p className="modal-intro">
            Si estás consultando este mapa interactivo o citando el análisis cartográfico e histórico para fines académicos o de investigación, puedes utilizar los siguientes formatos oficiales:
          </p>

          {/* Formato Chicago Deusto (Estándar FFyL UNAM) */}
          <div className="cita-card">
            <div className="cita-card__header">
              <span className="cita-card__badge">Estándar Historia UNAM</span>
              <h3 className="cita-card__title">Formato Chicago Deusto (Notas y Bibliografía)</h3>
            </div>
            <p className="cita-card__text">{chicagoText}</p>
            <button
              className="btn-copy"
              onClick={() => copyToClipboard(chicagoText, "chicago")}
            >
              {copiedChicago ? "✓ ¡Copiado al portapapeles!" : "📋 Copiar Cita Chicago"}
            </button>
          </div>

          {/* Formato APA 7mo */}
          <div className="cita-card" style={{ marginTop: "1.2rem" }}>
            <div className="cita-card__header">
              <span className="cita-card__badge">Formato APA 7ª Edición</span>
              <h3 className="cita-card__title">Formato APA 7</h3>
            </div>
            <p className="cita-card__text">{apaText}</p>
            <button
              className="btn-copy"
              onClick={() => copyToClipboard(apaText, "apa")}
            >
              {copiedApa ? "✓ ¡Copiado al portapapeles!" : "📋 Copiar Cita APA 7"}
            </button>
          </div>
        </div>

        <footer className="modal-footer">
          <p className="modal-footer-note">
            Licenciatura en Historia · Facultad de Filosofía y Letras · UNAM 2026
          </p>
          <button className="btn-primary" onClick={onClose}>
            Cerrar
          </button>
        </footer>
      </div>
    </div>
  );
}
