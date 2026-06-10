/**
 * OpacitySlider.jsx
 * Control de opacidad para el ImageOverlay del mapa histórico.
 */

import { Layers } from 'lucide-react';

export default function OpacitySlider({ opacity, onChange }) {
  return (
    <div
      className="rounded-sm px-3 py-2"
      style={{
        background: 'rgba(26,18,8,0.92)',
        border: '1px solid #c9952e44',
        backdropFilter: 'blur(8px)',
        minWidth: '220px',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Layers size={14} color="#c9952e" />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: '#c9952e', fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Mapa de 1580
          </span>
        </div>
        <span
          className="text-xs tabular-nums"
          style={{ color: '#f9efd888', fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {Math.round(opacity * 100)}%
        </span>
      </div>

      {/* Slider */}
      <input
        type="range"
        className="opacity-slider w-full"
        min={0}
        max={1}
        step={0.01}
        value={opacity}
        onChange={e => onChange(parseFloat(e.target.value))}
        aria-label="Opacidad del mapa histórico"
      />

      {/* Etiquetas */}
      <div className="flex justify-between mt-1">
        <span className="text-xs" style={{ color: '#f9efd844', fontFamily: "'IBM Plex Mono', monospace" }}>
          Oculto
        </span>
        <span className="text-xs" style={{ color: '#f9efd844', fontFamily: "'IBM Plex Mono', monospace" }}>
          Visible
        </span>
      </div>
    </div>
  );
}
