/**
 * Comments.jsx — arquitectura plana src/
 * Sección de comentarios (preparada para Firebase/Supabase en fase futura).
 */

import { useState } from "react";

export default function Comments() {
  const [form, setForm]       = useState({ nombre: "", correo: "", comentario: "" });
  const [submitted, setSubmitted] = useState(false);
  const [comments, setComments]   = useState([]);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.comentario.trim()) return;
    const nuevo = {
      id:   Date.now(),
      nombre: form.nombre.trim(),
      texto:  form.comentario.trim(),
      fecha:  new Date().toLocaleDateString("es-MX", { year:"numeric", month:"long", day:"numeric" }),
      inicial: form.nombre.trim()[0].toUpperCase(),
    };
    setComments((p) => [nuevo, ...p]);
    setForm({ nombre: "", correo: "", comentario: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const avatarColors = ["#2d6b5e","#8b3a0f","#c4882c","#4a4a6e","#5a7a8a"];

  return (
    <section id="comments-section" className="comments-section">
      <div className="section-header">
        <p className="section-eyebrow">Diálogo Académico</p>
        <h2 className="section-title">Comentarios y Observaciones</h2>
        <div className="section-rule" />
        <p className="section-desc">
          Comparte tu perspectiva, hallazgos o preguntas sobre el análisis cartográfico.
        </p>
      </div>

      <div className="comments-inner">
        <div className="comments-layout">

          {/* Formulario */}
          <div className="comments-form-wrap">
            <div className="cf-header">
              <span className="cf-header-title">Dejar un comentario</span>
            </div>
            {submitted && (
              <div className="cf-success">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Comentario enviado. ¡Gracias!
              </div>
            )}
            <form className="cf-form" onSubmit={handleSubmit}>
              <div className="fg">
                <label>Nombre <span className="req">*</span></label>
                <input name="nombre" className="cf-input" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required />
              </div>
              <div className="fg">
                <label>Correo <span style={{ fontSize:".7rem", fontStyle:"italic", textTransform:"none", letterSpacing:0, color:"rgba(245,234,208,.3)" }}>(opcional, no se publica)</span></label>
                <input name="correo" type="email" className="cf-input" placeholder="tu@correo.com" value={form.correo} onChange={handleChange} />
              </div>
              <div className="fg">
                <label>Comentario <span className="req">*</span></label>
                <textarea name="comentario" className="cf-textarea" rows={5}
                  placeholder="Tu observación, pregunta o aportación al análisis…"
                  value={form.comentario} onChange={handleChange} required />
              </div>
              <button type="submit" className="cf-submit">Enviar comentario</button>
            </form>
          </div>

          {/* Lista de comentarios */}
          <div>
            {comments.length === 0 ? (
              <div className="comments-empty">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <p>Aún no hay comentarios. Sé el primero en compartir tu perspectiva.</p>
              </div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                {comments.map((c, i) => (
                  <div key={c.id} style={{
                    display:"flex", gap:"1rem", padding:"1.1rem 1.3rem",
                    border:"1px solid rgba(196,136,44,.12)",
                    background:"rgba(255,255,255,.02)",
                  }}>
                    <div style={{
                      flexShrink:0, width:40, height:40, borderRadius:"50%",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontFamily:"var(--font-display)", fontSize:".78rem", fontWeight:700,
                      color:"rgba(255,255,255,.9)",
                      background: avatarColors[i % avatarColors.length],
                    }}>
                      {c.inicial}
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex", gap:".75rem", marginBottom:".45rem", alignItems:"baseline" }}>
                        <span style={{ fontFamily:"var(--font-display)", fontSize:".82rem", fontWeight:600, color:"var(--parchment)" }}>{c.nombre}</span>
                        <span style={{ fontFamily:"var(--font-body)", fontSize:".72rem", color:"rgba(245,234,208,.3)" }}>{c.fecha}</span>
                      </div>
                      <p style={{ fontFamily:"var(--font-accent)", fontSize:"1rem", fontWeight:300, lineHeight:1.7, color:"rgba(245,234,208,.72)" }}>
                        {c.texto}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
