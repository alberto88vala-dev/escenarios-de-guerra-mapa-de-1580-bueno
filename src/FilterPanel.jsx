/**
 * FilterPanel.jsx
 * Menú de filtros: activa/desactiva categorías de marcadores.
 */

import { useState } from 'react';
import { SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';

export default function FilterPanel({ categories, activeCategories, onToggle }) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Conteo de activas
  const totalActive = Object.values(activeCategories).filter(Boolean).length;
  const total       = Object.keys(categories).length;

  return (
    <div
      className="rounded-sm overflow-hidden"
      style={{
        background: 'rgba(26,18,8,0.92)',
        border: '1px solid #c9952e44',
        backdropFilter: 'blur(8px)',
        maxWidth: '240px',
      }}
    >
      {/* Header toggle */}
      <button
        className="w-full flex items-center justify-between px-3 py-2 transition-colors"
        onClick={() => setIsExpanded(v => !v)}
        style={{ cursor: 'pointer', background: 'transparent', border: 'none' }}
        aria-expanded={isExpanded}
        aria-label="Mostrar/ocultar filtros de categorías"
      >
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={14} color="#c9952e" />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: '#c9952e', fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Categorías
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-xs tabular-nums"
            style={{ color: '#f9efd866', fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {totalActive}/{total}
          </span>
          {isExpanded
            ? <ChevronUp size={12} color="#c9952e" />
            : <ChevronDown size={12} color="#c9952e" />
          }
        </div>
      </button>

      {/* Lista de categorías */}
      {isExpanded && (
        <div className="pb-2">
          <div
            className="mx-3 mb-2"
            style={{ height: '1px', background: '#c9952e22' }}
          />
          {Object.entries(categories).map(([key, cat]) => {
            const isActive = activeCategories[key];
            return (
              <button
                key={key}
                onClick={() => onToggle(key)}
                className="w-full flex items-center gap-2 px-3 py-1.5 transition-colors text-left"
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  opacity: isActive ? 1 : 0.45,
                }}
              >
                {/* Dot indicador */}
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: isActive ? cat.color : 'transparent',
                    border: `1.5px solid ${cat.color}`,
                    flexShrink: 0,
                    transition: 'background 0.2s',
                  }}
                />
                <span
                  className="text-xs leading-tight"
                  style={{
                    color: '#f9efd8cc',
                    fontFamily: "'Crimson Text', serif",
                    fontSize: '0.8rem',
                  }}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
