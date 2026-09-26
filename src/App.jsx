/**
 * App.jsx — Escenarios de Guerra
 */

import { useState, useRef, useEffect } from "react";
import "./index.css";
import MapView       from "./MapView";
import Sidebar       from "./Sidebar";
import Gallery       from "./Gallery";
import Comments      from "./Comments";
import GlosarioModal from "./GlosarioModal";
import CitaModal     from "./CitaModal";

export default function App() {
  const [selectedPoint,  setSelectedPoint ] = useState(null);
  const [isFullscreen,   setIsFullscreen  ] = useState(false);
  const [isGlosarioOpen, setIsGlosarioOpen] = useState(false);
  const [isCitaOpen,     setIsCitaOpen    ] = useState(false);
  const mapLayoutRef = useRef(null);

  const toggleFullscreen = () => {
    if (!mapLayoutRef.current) return;
    if (!document.fullscreenElement && !isFullscreen) {
      if (mapLayoutRef.current.requestFullscreen) {
        mapLayoutRef.current.requestFullscreen().catch(() => {
          setIsFullscreen(prev => !prev);
        });
      } else {
        setIsFullscreen(prev => !prev);
      }
    } else {
      if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen().catch(() => {
          setIsFullscreen(false);
        });
      } else {
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    document.addEventListener("webkitfullscreenchange", handleFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
      document.removeEventListener("webkitfullscreenchange", handleFsChange);
    };
  }, []);

  return (
    <>
      {/* ══ HERO ══ */}
      <section id="hero" className="hero">
        <div className="hero__content">
          <div className="hero__institution-badge">
            <span>Universidad Nacional Autónoma de México</span>
            <span className="bullet">·</span>
            <span>Facultad de Filosofía y Letras</span>
            <span className="bullet">·</span>
            <span>Colegio de Historia</span>
          </div>

          <span className="hero__ornament-cross">✦ ✦ ✦</span>
          
          <h1 className="hero__title">
            <span className="hero__eyebrow">San Miguel, San Felipe y Chamacuero · ca. 1579–1580</span>
            Escenarios<br />de Guerra
          </h1>
          
          <div className="hero__rule" />
          
          <p className="hero__subtitle">
            Análisis histórico-geográfico en la propuesta pedagógica de visualización WebGIS del 
            <em> "Mapa de las villas de San Miguel y San Felipe de los Chichimecas y el pueblo de San Francisco Chamacuero"</em>: 
            una plataforma interactiva para la interpretación del paisaje fronterizo novohispano.
          </p>
          
          <div className="hero__rule" />
          
          <div className="hero__credits-box">
            <p className="hero__credit-line">
              <strong>Tesista:</strong> Alberto Becerra Ortiz &nbsp;·&nbsp; <strong>Asesor:</strong> Dr. Tomás Francisco Marcelo Ramírez Ruiz
            </p>
            <p className="hero__credit-sub">
              Modalidad V: Propuesta Pedagógica de Visualización WebGIS &nbsp;·&nbsp; UNAM 2026
            </p>
          </div>

          <a href="#map-section" className="btn-explore">Explorar la Cartografía WebGIS</a>
        </div>
      </section>

      {/* ══ SECCIÓN DEL MAPA ══ */}
      <section id="map-section" style={{ background: "var(--smoke)", paddingBottom: "5rem" }}>
        <div className="section-header">
          <p className="section-eyebrow">Plataforma WebGIS de Interpretación del Paisaje</p>
          <h2 className="section-title">El Mapa de 1580 y el Camino Real</h2>
          <div className="section-rule" />
          <p className="section-desc">
            Superpone la pintura del siglo XVI sobre la geografía contemporánea. 
            Ajusta la opacidad para contrastar la visión del tlacuilo con el territorio actual.
          </p>
        </div>

        {/*
          map-layout: display flex, height 640px.
          MapView maneja la barra de controles + el mapa y soporte Fullscreen.
        */}
        <div
          ref={mapLayoutRef}
          className={`map-layout ${isFullscreen ? "map-layout--fullscreen" : ""}`}
        >
          <div className="map-container" style={{ display: "flex", flexDirection: "column" }}>
            <MapView
              onSelectPoint={setSelectedPoint}
              isFullscreen={isFullscreen}
              onToggleFullscreen={toggleFullscreen}
              onOpenGlosario={() => setIsGlosarioOpen(true)}
              onOpenCita={() => setIsCitaOpen(true)}
            />
          </div>
          <Sidebar
            point={selectedPoint}
            onClose={() => setSelectedPoint(null)}
          />
        </div>
      </section>

      {/* ══ GALERÍA ══ */}
      <Gallery />

      {/* ══ COMENTARIOS ══ */}
      <Comments />

      {/* ══ MODALES ══ */}
      <GlosarioModal
        isOpen={isGlosarioOpen}
        onClose={() => setIsGlosarioOpen(false)}
      />
      <CitaModal
        isOpen={isCitaOpen}
        onClose={() => setIsCitaOpen(false)}
      />

      {/* ══ FOOTER INSTITUCIONAL ══ */}
      <footer className="footer">
        <div className="footer__institutional">
          <p><strong>UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO</strong></p>
          <p>Facultad de Filosofía y Letras · Colegio de Historia</p>
          <p className="footer__title-formal">
            <em>Análisis histórico-geográfico en la propuesta pedagógica de visualización WebGIS del "Mapa de las villas de San Miguel y San Felipe de los Chichimecas y el pueblo de San Francisco Chamacuero (ca. 1579-1580)"</em>
          </p>
          <p><strong>Tesista:</strong> Alberto Becerra Ortiz (No. Cta. 312182667)</p>
          <p><strong>Asesor de Tesina:</strong> Dr. Tomás Francisco Marcelo Ramírez Ruiz (Profesor Titular "B" Definitivo, FFyL)</p>
          <p>Modalidad V: Diseño fundamentado de una propuesta de intervención o aplicación en ámbitos pedagógicos</p>
        </div>

        <div className="footer__divider" />

        <div className="footer__meta-links">
          <p>Fuente cartográfica original resguardada en la <strong>Real Academia de la Historia (Madrid)</strong>, Signatura: C-028-009 / AGI Sevilla (MP-MEXICO, 560).</p>
          <button className="footer__cite-btn" onClick={() => setIsCitaOpen(true)}>
            📖 Consultar Ficha de Cita Académica (Chicago / APA)
          </button>
          <p style={{ marginTop: "1rem", fontSize: ".75rem", opacity: 0.6 }}>
            Desarrollado bajo principios de Código Abierto y Humanidades Digitales · UNAM 2026.
          </p>
        </div>
      </footer>
    </>
  );
}
