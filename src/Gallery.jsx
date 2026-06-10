/**
 * Gallery.jsx — arquitectura plana src/
 */

const GALLERY_ITEMS = [
  { id: 1, type: "Cartografía",    year: "ca. 1580", title: "Mapa de San Miguel y San Felipe", desc: "Manufactura indígena, AGI MP-MEXICO 560. Pintura sobre papel europeo sin texto escrito.", imageUrl: null },
  { id: 2, type: "Documento",      year: "1550–1600", title: "Registros de la Guerra Chichimeca", desc: "Fuentes del AGN y AGI sobre las campañas militares en el Bajío novohispano.", imageUrl: null },
  { id: 3, type: "Iconografía",    year: "s. XVI",    title: "Convenciones del Tlacuilo", desc: "Análisis de los elementos pictóricos mesoamericanos en documentos cartográficos coloniales.", imageUrl: null },
  { id: 4, type: "Fotografía",     year: "Actual",    title: "Territorio actual", desc: "Comparativa entre el paisaje de 1580 y la geografía contemporánea del Bajío.", imageUrl: null },
  { id: 5, type: "Fuente primaria",year: "1574",      title: "Relación de Gonzalo de Las Casas", desc: "Descripción de los grupos chichimecas y sus territorios por un testigo de la época.", imageUrl: null },
  { id: 6, type: "Bibliografía",   year: "2004",      title: "La Gran Chichimeca — P. Gerhard", desc: "Referencia fundamental para el estudio de la frontera norte de Nueva España.", imageUrl: null },
];

export default function Gallery() {
  return (
    <section id="gallery-section" className="gallery-section">
      <div className="section-header">
        <p className="section-eyebrow">Acervo Documental</p>
        <h2 className="section-title">Repositorio de Fuentes</h2>
        <div className="section-rule" />
        <p className="section-desc">
          Fragmentos de documentos, imágenes de apoyo y fuentes primarias
          para comprender el mapa y la Guerra Chichimeca.
        </p>
      </div>
      <div className="gallery-grid">
        {GALLERY_ITEMS.map((item) => (
          <article key={item.id} className="gallery-card">
            <div className="gallery-card__img">
              {item.imageUrl
                ? <img src={item.imageUrl} alt={item.title} />
                : <span className="gallery-card__img-placeholder">[ Imagen por asignar ]</span>
              }
              {item.year && <span className="gallery-card__year">{item.year}</span>}
            </div>
            <div className="gallery-card__body">
              <span className="gallery-card__type">{item.type}</span>
              <h3 className="gallery-card__title">{item.title}</h3>
              <p className="gallery-card__desc">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
