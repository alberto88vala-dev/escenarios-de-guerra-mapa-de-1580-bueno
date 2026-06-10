/**
 * App.jsx — Escenarios de Guerra
 */

import { useState } from "react";
import "./index.css";
import MapView  from "./MapView";
import Sidebar  from "./Sidebar";
import Gallery  from "./Gallery";
import Comments from "./Comments";

export default function App() {
  const [selectedPoint, setSelectedPoint] = useState(null);

  return (
    <>
      {/* ══ HERO ══ */}
      <section id="hero" className="hero">
        <div className="hero__content">
          <span className="hero__ornament-cross">✦ ✦ ✦</span>
          <h1 className="hero__title">
            <span className="hero__eyebrow">San Miguel y San Felipe · 1580</span>
            Escenarios<br />de Guerra
          </h1>
          <div className="hero__rule" />
          <p className="hero__subtitle">
             La vision del Cartografo. Un análisis geográfico e histórico del mapa
            de San Miguel y San Felipe de los Chichimecas de 1580, en el contexto de la Guerra Chichimeca
          </p>
          <div className="hero__rule" />
          <a href="#map-section" className="btn-explore">Explorar el Mapa</a>
          <p className="hero__meta">Tesina de Licenciatura · Análisis Cartográfico · UNAM · 2026</p>
        </div>
      </section>

      {/* ══ SECCIÓN DEL MAPA ══ */}
      <section id="map-section" style={{ background: "var(--smoke)", paddingBottom: "5rem" }}>
        <div className="section-header">
          <p className="section-eyebrow">Cartografía Interactiva</p>
          <h2 className="section-title">El Mapa de 1580</h2>
          <div className="section-rule" />
          <p className="section-desc">
            Sobrepone la pintura sobre la geografía contemporánea.
            Ajusta la opacidad para revelar el paisaje bajo la mirada del pasado.
          </p>
        </div>

        {/*
          map-layout: display flex, height 640px.
          MapView ahora maneja internamente su barra de controles + el mapa,
          así que map-container solo necesita dar el espacio disponible.
        */}
        <div className="map-layout">
          <div className="map-container" style={{ display: "flex", flexDirection: "column" }}>
            <MapView onSelectPoint={setSelectedPoint} />
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

      {/* ══ FOOTER ══ */}
      <footer className="footer">
        <p><strong>Escenarios de Guerra: La Visión del Tlacuilo</strong></p>
        <p>Mapa de «San Miguel y San Felipe de los Chichimecas» · ca. 1579–1580</p>
        <p>Tesina de Licenciatura · Historia · UNAM · 2026</p>
        <p style={{ marginTop: "1rem", fontSize: ".75rem" }}>
          Todas las imágenes históricas son reproducción de dominio público o con fines académicos.
        </p>
      </footer>
    </>
  );
}
