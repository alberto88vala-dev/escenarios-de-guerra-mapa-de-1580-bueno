/**
 * mapData.js — Escenarios de Guerra
 * Mapa de San Miguel y San Felipe de los Chichimecas (ca. 1579-1580)
 */

export const CATEGORIES = {
  ASENTAMIENTOS: { id:1, label:'Asentamientos',             color:'#c9952e', icon:'MapPin'    },
  ESCENARIOS:    { id:2, label:'Escenarios y Actores',      color:'#8b1a1a', icon:'Swords'    },
  COSMOVISION:   { id:3, label:'Símbolos de Cosmovisión',   color:'#7c5cbf', icon:'Sun'       },
  NATURALEZA:    { id:4, label:'Naturaleza y Recursos',     color:'#3a5a2a', icon:'Leaf'      },
  DEFENSIVA:     { id:5, label:'Infraestructura Defensiva', color:'#4a3a2a', icon:'Shield'    },
  NODOS:         { id:6, label:'Nodos Periféricos',         color:'#5a7a8a', icon:'Building2' },
  LIMITES:       { id:7, label:'Dentro de los Límites',     color:'#8a8070', icon:'Landmark'  },
  CAMINOS:       { id:8, label:'Caminos',                   color:'#a07040', icon:'Route'     },
};

export const mapPoints = [

  // ══════════════════════════════════════════════════════════════════
  // 1. ASENTAMIENTOS
  // ══════════════════════════════════════════════════════════════════
  {
    id:1, categoryId:1,
    name:'San Miguel el Grande',
    coords:[20.9142, -100.7436],
    iconographyOnly:false,
    shortDescription:'Villa fundada ca. 1555, núcleo hispano en la frontera chichimeca.',
    historicalDesc:'Considerada la "Puerta de la Tierra Adentro" y la "garganta" por la que transitaban las mercancías hacia el norte, fue el primer asentamiento defensivo de gran escala en la región. Tuvo un origen doble: una fundación primitiva como "San Miguel de los Chichimecas" hacia 1542, destinada a la congregación de indios, y una refundación jurídica en 1555 como villa de españoles. Esta última fue ordenada por el virrey Luis de Velasco específicamente para servir como "villa protectora" ante los asaltos de guamares y guachichiles, asegurando el flujo de plata en el Camino Real.',
    paleographicAnalysis:'Muestra una iglesia con una cruz coronándola.',
    visualGrammar:'',
    primarySources:[
      'AGN, Ramo Tierras, vol. 1783, exp. 1 — Títulos de las Villas de San Miguel y San Felipe, 1559-1562 [1-3]',
      'AGN, Ramo Mercedes, vol. 4, f. 280v — Mandamiento de Luis de Velasco I, 15 de diciembre de 1555 [3-5]',
      'RAH, Madrid, Secc. Cartografía — Mapa de la Relación Geográfica de San Miguel y San Felipe, 1580 [6-8]',
      'BNF, Espagnol 271 — Santa María, Fray Guillermo de, Guerra de los Chichimecas, 1575-1580 [2, 9-11]',
      'AGI, México, leg. 2547 — Parecer de los teólogos de México sobre la justicia de la guerra, 1570 [12, 13]',
      'Velázquez, Juan Alonso — Relación del clérigo beneficiado de la villa de San Miguel, 1582 [14, 15]',
      'Ciudad Real, Antonio de — Tratado curioso y docto de las grandezas de la Nueva España, 1588 [16, 17]',
      'Mendieta, Fray Gerónimo de — Historia eclesiástica indiana, 1596 [18, 19]',
      'Rea, Fray Alonso de la — Crónica de la Orden de N. Seráfico P. S. Francisco de Michoacán, 1639 [20, 21]',
      'Villaseñor y Sánchez, Joseph Antonio — Teatro Americano, 1746 [22]',
    ],
    bibliography:[
      'Powell, Philip Wayne. La Guerra Chichimeca (1550-1600). FCE, 1977 [23-27]',
      'Wright Carr, David Charles. La conquista del Bajío y los orígenes de San Miguel de Allende. FCE, 1999 [2, 28-30]',
      'Carrillo Cázares, Alberto. El debate sobre la Guerra Chichimeca (1531-1585). El Colegio de Michoacán, 2000 [31-35]',
      'Maza, Francisco de la. San Miguel de Allende: su historia, sus monumentos. UNAM, 1939 [36, 37]',
      'Puig Carrasco, Alberto. Análisis codicológico del Mapa de la Relación Geográfica. Distinta Tinta, 2018 [38-41]',
      'Gerhard, Peter. Geografía histórica de la Nueva España. UNAM, 1996 [42-45]',
      'Jiménez Moreno, Wigberto. Estudios de Historia Colonial. INAH, 1958 [46-49]',
      'Santos Salinas, Miguel. La consolidación de la frontera norte del Obispado de Michoacán. El Colegio de Michoacán, 2012 [50-52]',
    ],
    imageUrl:'/imagenes/1.png',
    agn:null, agi:null, timelinePhase:'', enlaces:[],
  },
  {
    id:2, categoryId:1,
    name:'Villa de San Felipe',
    coords:[21.4816, -101.2163],
    iconographyOnly:false,
    shortDescription:'Villa de frontera, punto estratégico al norte del camino a Zacatecas.',
    historicalDesc:'', paleographicAnalysis:'', visualGrammar:'',
    primarySources:[], bibliography:[],
    imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[],
  },
  {
    id:3, categoryId:1,
    name:'San Francisco Chamacuero',
    coords:[20.7231, -100.7584],
    iconographyOnly:false,
    shortDescription:'Pueblo indígena al sur del área cartografiada, referido en el título del mapa.',
    historicalDesc:'', paleographicAnalysis:'', visualGrammar:'',
    primarySources:[], bibliography:[],
    imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[],
  },
  {
    id:4, categoryId:1,
    name:'Puerto de Nieto',
    coords:[20.8906, -100.5367],
    iconographyOnly:false,
    shortDescription:'Paso o puerto en el camino real; punto de paso entre los asentamientos.',
    historicalDesc:'', paleographicAnalysis:'', visualGrammar:'',
    primarySources:[], bibliography:[],
    imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[],
  },
  {
    id:5, categoryId:1,
    name:'Llano de la Mohina',
    coords:[21.1313, -100.6232],
    iconographyOnly:false,
    shortDescription:'Llanura mencionada en documentos del período; escenario de incursiones.',
    historicalDesc:'', paleographicAnalysis:'', visualGrammar:'',
    primarySources:[], bibliography:[],
    imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[],
  },

  // ══════════════════════════════════════════════════════════════════
  // 2. ESCENARIOS Y ACTORES DE GUERRA
  // ══════════════════════════════════════════════════════════════════
  { id:6,  categoryId:2, name:'Las Cabezas de los Frailes (Paso de Chamacuero)', coords:null, iconographyOnly:true, shortDescription:'Iconografía de cabezas decapitadas de frailes; representación del martirio en el paisaje fronterizo.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:7,  categoryId:2, name:'Guerreros Chichimecas (Desnudez y Arco)',         coords:null, iconographyOnly:true, shortDescription:'Figura del guerrero chichimeca caracterizado por desnudez ritual y arco; convención pictórica del tlacuilo.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:8,  categoryId:2, name:'Guachichiles',  coords:null, iconographyOnly:true, shortDescription:'Grupo chichimeca más numeroso y belicoso; representación pictórica en el mapa.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:9,  categoryId:2, name:'Zacatecos',     coords:null, iconographyOnly:true, shortDescription:'Grupo chichimeca del norte; representación pictórica en el mapa.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:10, categoryId:2, name:'Guamares',      coords:null, iconographyOnly:true, shortDescription:'Grupo chichimeca del Bajío; conocidos por su resistencia a la conquista.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:11, categoryId:2, name:'Pames',         coords:null, iconographyOnly:true, shortDescription:'Grupo chichimeca del oriente; representación pictórica en el mapa.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  {
    id:12, categoryId:2,
    name:'Soldados de Presidio y Escolta',
    coords:[21.1313, -100.6232],
    iconographyOnly:false,
    shortDescription:'Representación de soldados de presidio; figura del poder militar colonial en la frontera.',
    historicalDesc:'', paleographicAnalysis:'', visualGrammar:'',
    primarySources:[], bibliography:[],
    imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[],
  },
  { id:13, categoryId:2, name:'Carros-Fortaleza',  coords:null, iconographyOnly:true, shortDescription:'Carros defensivos usados en las escoltas del Camino Real; convención pictórica.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:14, categoryId:2, name:'Indio Ahorcado',     coords:null, iconographyOnly:true, shortDescription:'Representación del castigo colonial; elemento de violencia visible en el paisaje cartográfico.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:15, categoryId:2, name:'Español Asesinado',  coords:null, iconographyOnly:true, shortDescription:'Figura de víctima hispana; narrativa visual del peligro de la frontera chichimeca.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },

  // ══════════════════════════════════════════════════════════════════
  // 3. COSMOVISIÓN
  // ══════════════════════════════════════════════════════════════════
  { id:16, categoryId:3, name:'El Glifo del Altépetl',          coords:[20.8521,-100.9192], iconographyOnly:false, shortDescription:'Glifo mesoamericano de la ciudad/cerro-agua; marca identitaria del tlacuilo en el documento.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:17, categoryId:3, name:'Soles Antropomorfos — Oriente',  coords:[20.5888,-100.3899], iconographyOnly:false, shortDescription:'Sol con rostro humano en el extremo oriente del mapa; convención cosmológica mesoamericana.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:18, categoryId:3, name:'Soles Antropomorfos — Poniente', coords:[21.1222,-101.6606], iconographyOnly:false, shortDescription:'Sol con rostro humano en el extremo poniente del mapa; eje cosmológico del documento.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:19, categoryId:3, name:'La Mojonera de los Indios',      coords:[20.9142,-100.7436], iconographyOnly:false, shortDescription:'Marca territorial indígena; límite simbólico y jurídico representado en el mapa.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },

  // ══════════════════════════════════════════════════════════════════
  // 4. NATURALEZA
  // ══════════════════════════════════════════════════════════════════
  { id:20, categoryId:4, name:'Las Siete Nopaleras', coords:[21.7850,-101.1250], iconographyOnly:false, shortDescription:'Agrupación de nopales; elemento de flora semiárida con valor alimenticio y simbólico.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:21, categoryId:4, name:'El Tunal Grande',     coords:[22.1565,-100.9855], iconographyOnly:false, shortDescription:'Gran formación de nopal; recurso ecológico y alimenticio del paisaje chichimeca.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:22, categoryId:4, name:'El Mezquital',        coords:[21.2500,-101.9000], iconographyOnly:false, shortDescription:'Zona de mezquites; recurso maderable y de subsistencia en el semidesierto.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:23, categoryId:4, name:'Fauna Inducida',      coords:[21.0500,-101.1000], iconographyOnly:false, shortDescription:'Animales introducidos por la presencia colonial (ganado, caballos); transformación del ecosistema.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:24, categoryId:4, name:'Río Laja',            coords:[21.2500,-101.9000], iconographyOnly:false, shortDescription:'Curso fluvial representado en el mapa; eje hidrográfico del territorio cartografiado.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:25, categoryId:4, name:'Fauna Local',         coords:[21.0500,-101.1000], iconographyOnly:false, shortDescription:'Fauna nativa representada por el tlacuilo; animales del ecosistema semiárido.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:26, categoryId:4, name:'Árboles',  coords:null, iconographyOnly:true, shortDescription:'Representaciones arbóreas en el mapa; convención pictórica del paisaje.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:27, categoryId:4, name:'Magueyes', coords:null, iconographyOnly:true, shortDescription:'Agave representado en el mapa; planta de múltiples usos en la economía chichimeca.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },

  // ══════════════════════════════════════════════════════════════════
  // 5. INFRAESTRUCTURA DEFENSIVA
  // ══════════════════════════════════════════════════════════════════
  { id:28, categoryId:5, name:'Fuerte de los Ojuelos',   coords:[21.8681,-101.5903], iconographyOnly:false, shortDescription:'Presidio estratégico en el camino a Zacatecas; construido ca. 1569 para proteger el Camino Real.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:29, categoryId:5, name:'Presidio del Portezuelo', coords:[21.6481,-101.4828], iconographyOnly:false, shortDescription:'Fortín en paso de montaña; nodo de control militar de la frontera chichimeca.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:30, categoryId:5, name:'Presidio de Las Bocas',   coords:[21.9333,-102.1000], iconographyOnly:false, shortDescription:'Presidio en el límite norte del territorio cartografiado; defensa del acceso a tierras chichimecas.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },

  // ══════════════════════════════════════════════════════════════════
  // 6. NODOS PERIFÉRICOS
  // ══════════════════════════════════════════════════════════════════
  { id:31, categoryId:6, name:'Aguascalientes',      coords:[21.8853,-102.2916], iconographyOnly:false, shortDescription:'Villa fundada en 1575 como presidio; nodo de la red defensiva colonial.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:32, categoryId:6, name:'Zacatecas',           coords:[22.7709,-102.5832], iconographyOnly:false, shortDescription:'Principal centro minero novohispano; destino del Camino Real y motivo de la expansión.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:33, categoryId:6, name:'San Luis Potosí',     coords:[22.1565,-100.9855], iconographyOnly:false, shortDescription:'Centro minero y administrativo al norte; relevante en la fase tardía del conflicto.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:34, categoryId:6, name:'León',                coords:[21.1222,-101.6606], iconographyOnly:false, shortDescription:'Villa del Bajío; punto de abasto y retaguardia en la guerra chichimeca.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:35, categoryId:6, name:'Celaya',              coords:[20.5218,-100.8140], iconographyOnly:false, shortDescription:'Villa del Bajío; nodo comercial y agrícola en la retaguardia del frente chichimeca.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:36, categoryId:6, name:'Salamanca',           coords:[20.5719,-101.1921], iconographyOnly:false, shortDescription:'Pueblo del Bajío; referencia geográfica en el contexto del mapa.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:37, categoryId:6, name:'Michoacán (Valladolid)', coords:[19.7006,-101.1863], iconographyOnly:false, shortDescription:'Región de Valladolid; flanco suroeste del territorio novohispano en expansión.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:38, categoryId:6, name:'Querétaro',           coords:[20.5888,-100.3899], iconographyOnly:false, shortDescription:'Ciudad aliada otomí; puerta de entrada al territorio chichimeca desde el sur.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:39, categoryId:6, name:'Ciudad de México',    coords:[19.4326,-99.1332],  iconographyOnly:false, shortDescription:'Capital virreinal; centro de poder administrativo que ordena la cartografía.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },

  // ══════════════════════════════════════════════════════════════════
  // 7. DENTRO DE LOS LÍMITES
  // ══════════════════════════════════════════════════════════════════
  { id:40, categoryId:7, name:'Ciudad de Guanajuato', coords:[21.0190,-101.2574], iconographyOnly:false, shortDescription:'Centro minero dentro del área cartografiada; pieza clave de la economía novohispana.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:41, categoryId:7, name:'Atotonilco',           coords:[20.9886,-100.7955], iconographyOnly:false, shortDescription:'Pueblo entre San Miguel y Dolores; referencia en el itinerario del Camino Real.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:42, categoryId:7, name:'Dolores Hidalgo',      coords:[21.1561,-100.9308], iconographyOnly:false, shortDescription:'Pueblo dentro del área del mapa; referencia geográfica del territorio estudiado.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  { id:43, categoryId:7, name:'Ocampo',               coords:[21.6481,-101.5000], iconographyOnly:false, shortDescription:'Localidad en el límite norte del mapa; coordenadas pendientes de precisar.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:'NOTA: coordenada de longitud pendiente de verificación', timelinePhase:'', enlaces:[] },

  // ══════════════════════════════════════════════════════════════════
  // 8. CAMINOS
  // ══════════════════════════════════════════════════════════════════
  { id:44, categoryId:8, name:'Hacia México',         coords:null, iconographyOnly:true, shortDescription:'Trazo del Camino Real hacia la Ciudad de México; dirección sur del documento.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', routeCoords:[], enlaces:[] },
  { id:45, categoryId:8, name:'Hacia Zacatecas',      coords:null, iconographyOnly:true, shortDescription:'Trazo del Camino Real hacia Zacatecas; dirección norte, eje principal del documento.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', routeCoords:[], enlaces:[] },
  { id:46, categoryId:8, name:'Hacia Michoacán',      coords:null, iconographyOnly:true, shortDescription:'Ramal suroccidental del Camino Real hacia la provincia de Michoacán.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', routeCoords:[], enlaces:[] },
  { id:47, categoryId:8, name:'Hacia San Luis Potosí',coords:null, iconographyOnly:true, shortDescription:'Ramal nororiental del Camino Real hacia San Luis Potosí.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', routeCoords:[], enlaces:[] },
  { id:48, categoryId:8, name:'Hacia Guanajuato',     coords:null, iconographyOnly:true, shortDescription:'Ramal occidental del Camino Real hacia la ciudad minera de Guanajuato.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', routeCoords:[], enlaces:[] },
  { id:49, categoryId:8, name:'Hacia Apaxco',         coords:null, iconographyOnly:true, shortDescription:'Ramal hacia Apaxco; dirección sureste del territorio cartografiado.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', routeCoords:[], enlaces:[] },
];

// ─── METADATOS DEL MAPA HISTÓRICO ────────────────────────────────────────────
export const mapMetadata = {
  title:     'Mapa de las villas de San Miguel y San Felipe de los Chichimecas y el pueblo de San Francisco Chamacuero',
  date:      'ca. 1579–1580',
  author:    'Tlacuilo anónimo (manufactura indígena)',
  custody:   'Archivo General de Indias (AGI), Sevilla',
  reference: 'MP-MEXICO, 560',
  dimensions:'Por definir (cm)',
  technique: 'Pintura sobre papel europeo; convenciones pictóricas mesoamericanas',
  language:  'Sin texto escrito (pictórico)',

  // ── CAPA 1: Mapa original de 1580 ─────────────────────────────────
  imageOverlayUrl: '/mapa_1580.jpg',

  // ── CAPA 2: Versión redibujada ─────────────────────────────────────
  // Coloca tu imagen en /public/1580-Marcelo.jpg
  // Si aún no la tienes, deja este valor y el botón no causará errores
  imageOverlayUrl2: '/1580-Marcelo.jpg',

  // ── Bounding box general (calculado desde imageCorners) ───────────
  imageBounds: [
    [20.30, -102.20],
    [22.15, -100.20],
  ],

  // ════════════════════════════════════════════════════════════════════
  // ESQUINAS DEL MAPA ORIGINAL (capa 1)
  // Orden: [0] arriba-izq  [1] arriba-der  [2] abajo-izq  [3] abajo-der
  // ════════════════════════════════════════════════════════════════════
  imageCorners: [
    [21.70, -101.95],   // [0] arriba-izquierda
    [22.10, -100.60],   // [1] arriba-derecha
    [20.30, -102.20],   // [2] abajo-izquierda
    [20.75, -100.25],   // [3] abajo-derecha
  ],

  // ════════════════════════════════════════════════════════════════════
  // ESQUINAS DEL MAPA REDIBUJADO (capa 2)
  // Si tu redibujo cubre exactamente la misma área, copia las mismas
  // esquinas de arriba. Si cubre un área diferente, ajústalas aquí.
  // ════════════════════════════════════════════════════════════════════
  imageCorners2: [
    [21.70, -101.95],   // [0] arriba-izquierda
    [22.10, -100.60],   // [1] arriba-derecha
    [20.30, -102.20],   // [2] abajo-izquierda
    [20.75, -100.25],   // [3] abajo-derecha
  ],

  mapCenter:   [21.2000, -100.9000],
  defaultZoom: 8,
};
