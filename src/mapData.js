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
    name:'San Miguel el Grande (San Miguel de Allende)',
    coords:[20.9142, -100.7436],
    iconographyOnly:false,
    shortDescription:'Villa protectora del Camino de la Plata, establecida para contener las incursiones chichimecas, asegurar el tránsito de mercancías hacia Zacatecas y congregar población de origen español, otomí y tarasco.',
    historicalDesc:'La congregación inicial de la población se remonta a una fundación prehispánica o de contacto hacia 1542, realizada por el franciscano fray Juan de San Miguel en el paraje indígena de Izquinapan ("perro sobre el agua"). Posteriormente, fray Bernardo Cossín trasladó el pueblo al manantial del "Chorro", en la ladera del cerro de la Moctezuma. Tras sufrir una incursión armada de la nación guamare por el cacique Carangano en 1551, el asentamiento fue refundado jurídicamente por el virrey Luis de Velasco el 15 de diciembre de 1555 (comisión a Ángel de Villafañe) y recibió el título de villa el 17 de diciembre de 1559.\n\nSan Miguel el Grande funcionó desde entonces como una "villa protectora" y "garganta" estratégica en el Camino Real de Tierra Adentro, albergando una guarnición de soldados de presidio que escoltaba las caravanas de plata y protegía las estancias agropecuarias del Bajío.',
    paleographicAnalysis:'En la pintura de la Relación Geográfica de 1580, la villa de San Miguel se ubica en el extremo derecho del lienzo (oriente). El tlacuilo la representó mediante una iglesia con una cruz en la parte superior. A un costado se observa un círculo detallado con aspas que representa un molino o ingenio hidráulico ("herido de molino de panmoler"). Junto al río San Miguel (río Laja) se plasmaron viviendas rectangulares que simbolizan las estancias ganaderas españolas, con la glosa: "todas las casas que están ribera de este río son estancias de vacas y algunas labranzas". El mapa está orientado mediante soles antropomorfos en los márgenes.',
    visualGrammar:'',
    primarySources:[
      'AGN, Ramo Mercedes, vol. 4, ff. 280v-281r — Mandamiento de Luis de Velasco (15 de diciembre de 1555)',
      'AGN, Ramo Media Anata, vol. 35, ff. 244r-249v — Título de Villa concedido a San Miguel el Grande (17 de diciembre de 1559)',
      'BNF, Espagnol 271 — Fray Guillermo de Santa María, Tratado de la Guerra de los Chichimecas (ca. 1575-1580)',
      'AGN, Ramo Tierras, vol. 1783, exp. 1, ff. 26r-32r — Códice Pedro Martín del Toro (1703)',
    ],
    bibliography:[
      'Powell, Philip Wayne. La guerra chichimeca (1550-1600). FCE, 1977',
      'Wright Carr, David Charles. La conquista del Bajío y los orígenes de San Miguel de Allende. FCE/UVM, 1999',
      'Carrillo Cázares, Alberto. El debate sobre la guerra chichimeca, 1531-1585. El Colegio de Michoacán, 2000',
      'Gerhard, Peter. Geografía histórica de la Nueva España: 1519-1821. IIH UNAM, 1986',
      'Puig Carrasco, Alberto. "Análisis codicológico del Mapa de la Relación Geográfica de San Miguel y San Felipe...". 2018',
    ],
    imageUrl:'/imagenes/1.png',
    agn:'Ramo Mercedes, vol. 4, ff. 280v-281r · Ramo Media Anata, vol. 35, ff. 244r-249v',
    agi:'MP-MEXICO, 560 (Relación Geográfica de 1580)',
    timelinePhase:'1542 (Misión) · 1555 (Villa protectora) · 1580 (Relación Geográfica)',
    enlaces:[],
  },
  {
    id:2, categoryId:1,
    name:'Villa de San Felipe (San Felipe Torres Mochas)',
    coords:[21.478, -101.214],
    iconographyOnly:false,
    shortDescription:'Villa protectora y presidio militar del Camino Real de la Plata, fundada en 1562 para contener a guamares y guachichiles, controlar los manantiales de Ojos Zarcos y asegurar la ruta México-Zacatecas.',
    historicalDesc:'La Villa de San Felipe fue fundada formalmente el 1° de enero de 1562 por don Francisco de Velasco (hermano del virrey don Luis de Velasco) para combatir el gran alzamiento de las naciones chichimecas de 1561. El asentamiento se estableció en el paraje de Ojos Zarcos, un oasis estratégico dotado de manantiales a la entrada del Tunal Grande y del valle de San Francisco. Diseñada como un poblado defensivo de frontera, la fundación estableció una estricta segregación social y territorial: al norte la villa de los europeos y al sur el Pueblo de San Francisco de Analco para los aliados otomíes y tarascos que actuaban como escudo defensivo.\n\nDurante las décadas de 1570 y 1580, bajo la administración del virrey Martín Enríquez de Almansa, San Felipe se consolidó como la principal "garganta" y baluarte militar de la Real Audiencia de México frente a guachichiles y guamares. Dotada de recinto amurallado y un fuerte interior custodiado por una guarnición fija de veinte soldados de presidio, desde San Felipe partían las expediciones de pacificación hacia el norte y se coordinaba la red de presidios de Portezuelo, Ojuelos y Las Bocas, convirtiéndose en el pivote defensivo central del Camino Real de Tierra Adentro.',
    paleographicAnalysis:'En la pintura de la Relación Geográfica de 1580, San Felipe se ubica en la sección izquierda del lienzo (poniente/norte de la ruta). El tlacuilo empleó el símbolo convencional novohispano de una iglesia con techumbre a dos aguas de tono rosáceo-ocre y una cruz en el remate de la aguja. Este glifo comparte exactamente el mismo tamaño, forma y jerarquía visual que el utilizado para la villa de San Miguel, denotando su idéntico rango jurídico como villa de españoles.\n\nA un costado de la iglesia, el glosador añadió en caligrafía de época la etiqueta manuscrita sobre un parche de papel: "villa de s. felipe". Junto a la edificación, el artista dibujó dos círculos de color azul/verde rodeados de vegetación que representan los manantiales de Ojos Zarcos y la cabecera donde nace el río San Miguel (río Laja). Desde el templo se desprende la línea de tinta roja que figura el camino a Zacatecas ("camino de san felipe a zacatecas").',
    visualGrammar:'',
    primarySources:[
      'Título de la Villa de San Felipe (1° de enero de 1562) otorgado por don Francisco de Velasco',
      'Relación de la villa y monasterio de San Felipe (1571) por fray Gregorio de Santa María',
      'BNF, Espagnol 271 — Tratado de la Guerra de los Chichimecas (ca. 1575-1580) de fray Guillermo de Santa María',
      'AGN, Ramo Mercedes, vol. 5, ff. 296v-297r — Mandamiento del virrey Luis de Velasco (1563)',
      'AGN, Ramo Planos y Mapas, no. 626 — Mapa histórico de la Villa de San Felipe y el camino a San Luis Potosí (1607)',
    ],
    bibliography:[
      'Powell, Philip Wayne. La guerra chichimeca (1550-1600). FCE, 1977',
      'Guzmán Romero, Enrique. Fundación de la Villa de San Phelipe, 21-I-1562, y Otros Documentos. 2003',
      'Puig Carrasco, Alberto. "Reconstrucción de la guerra chichimeca y sus efectos en el mapa...". Temas Americanistas, 2024',
      'Ramírez Ruiz, Marcelo. "Paisajes y cartografía del Camino Real...". En Camino Real de Tierra Adentro por Guanajuato, 2022',
      'Navarro López, América. El uso de los recursos ambientales en la región de San Miguel y San Felipe... Tesis doctoral, 2022',
    ],
    imageUrl:null,
    agn:'Ramo Mercedes, vol. 5, ff. 296v-297r · Ramo Planos y Mapas, no. 626',
    agi:'Relación Geográfica de San Felipe (1580)',
    timelinePhase:'1562 (Fundación) · 1571 (Relación de Fray Gregorio) · 1580 (Relación Geográfica)',
    enlaces:[],
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
  {
    id:28, categoryId:5,
    name:'Fuerte de los Ojuelos (Ojuelos de Jalisco)',
    coords:[21.8690, -101.5900],
    iconographyOnly:false,
    shortDescription:'Presidio estratégico del Camino de la Plata, fundado para resguardar las caravanas de carretas, vigilar las incursiones guachichiles desde el Tunal Grande y controlar los escasos recursos acuíferos de la llanura.',
    historicalDesc:'El presidio de Ojuelos fue fundado en 1569 por el capitán Pedro Carrillo Dávila (justicia mayor de la Villa de San Felipe) bajo provisión del doctor Jerónimo de Orozco (Real Audiencia de Guadalajara) y el virrey Martín Enríquez de Almansa. Ubicado en los Llanos de Ojuelos —planicie semiárida caracterizada por manantiales u "ojos de agua"—, fue concebido como un cerrojo militar para cerrar el acceso al Camino Real de Tierra Adentro a los guachichiles que salían del Tunal Grande.\n\nHacia 1582 contaba con una dotación permanente de seis soldados de escolta mantenidos por la Real Audiencia. Monopolizó el dominio visual de los escasos acuíferos y el tránsito de las conductas de plata. A diferencia de la mayoría de fortines hechos de materiales perecederos que desaparecieron tras 1600, Ojuelos subsistió al ser reconstruido en piedra y bóvedas de mampostería, convirtiéndose en sede de hacienda y en Palacio Municipal declarado Patrimonio de la Humanidad por la UNESCO en 2010.',
    paleographicAnalysis:'En la pintura de la Relación Geográfica de 1580, el Fuerte de los Ojuelos se localiza en el margen superior izquierdo sobre el Camino Real dibujado en color rojo. El tlacuilo lo representó mediante una estructura habitacional rectangular de fachada sencilla con cubierta de dos aguas. Junto a la fortificación trazó un círculo azulado que representa una laguna u "ojo de agua". En las colinas contiguas plasmó a ocho guerreros chichimecas desnudos provistos de arco, flechas y carcajes en actitud de acecho. Al pie de la estructura se conserva la glosa: "fuerte de los ojuelos".',
    visualGrammar:'',
    primarySources:[
      'AGI, Sevilla, Ramo Patronato, legajo 181, ramo 4 — Información de Pedro Carrillo Dávila sobre escoltas y guerra chichimeca (1582)',
      'Relación de la villa y monasterio de San Felipe (1571) — Mandamiento del virrey Martín Enríquez de Almansa (1569)',
      'AHMP, Milicias y Guerra, caja 2, exp. 27 — Provisión de la visita al Real Presidio sobre escoltas y cordones presidiales (1724)',
      'AGI, Contaduría 925 — Cuentas de la Real Hacienda de Nueva España sobre pago de soldados de presidios (1570-1585)',
    ],
    bibliography:[
      'Powell, Philip Wayne. Génesis del presidio como institución fronteriza, 1569-1600. UNAM, IIH, 1987',
      'Arnal Simón, Luis. El presidio en México en el siglo XVI. Facultad de Arquitectura, UNAM, 1998',
      'Puig Carrasco, Alberto y Díaz-Sánchez, Carlos. "Despoblados y fuertes: el presidio de Ojuelos...". En Arqueología, 2023',
      'Naylor, Thomas H. y Polzer, Charles W. The Presidio and Militia on the Northern Frontier of New Spain 1570-1700. 1986',
    ],
    imageUrl:null,
    agn:'Relación de San Felipe (1571)',
    agi:'AGI, Patronato 181, r. 4 (1582) · Contaduría 925',
    timelinePhase:'1569 (Fundación) · 1580 (Relación Geográfica) · 2010 (UNESCO)',
    enlaces:[],
  },
  { id:29, categoryId:5, name:'Presidio del Portezuelo', coords:[21.6481,-101.4828], iconographyOnly:false, shortDescription:'Fortín en paso de montaña; nodo de control militar de la frontera chichimeca.', historicalDesc:'', paleographicAnalysis:'', visualGrammar:'', primarySources:[], bibliography:[], imageUrl:null, agn:null, agi:null, timelinePhase:'', enlaces:[] },
  {
    id:30, categoryId:5,
    name:'Presidio de Las Bocas (Las Bocas de Gallardo / San José de Letras)',
    coords:[21.8210, -101.9960],
    iconographyOnly:false,
    shortDescription:'Presidio militar fronterizo erigido para resguardar las caravanas en el límite con Nueva Galicia, frenar los ataques guachichiles y asegurar el tramo del Camino Real entre Ojuelos y Zacatecas.',
    historicalDesc:'El presidio de Las Bocas fue fundado entre finales de la década de 1560 e inicios de 1570 por el capitán Juan Domínguez bajo instrucciones del doctor Jerónimo de Orozco (Real Audiencia de Guadalajara), siguiendo la estrategia de fortificación de pasos expuestos planteada por Pedro de Ahumada. Ubicado en el extremo noroccidental de la jurisdicción de San Miguel, Las Bocas marcaba la raya fronteriza con el Reino de la Nueva Galicia, sirviendo como el último cerrojo defensivo antes de los desiertos hacia Aguascalientes, Teocaltiche y Zacatecas.\n\nDurante los años más críticos de la Guerra Chichimeca (1570-1585), Las Bocas albergó una guarnición fija de soldados de presidio financiada por las cajas reales para escoltar las conductas de plata y convoyes de carretas. La zona era uno de los núcleos más activos de la resistencia guachichil, registrándose en el Memorial de los Estancieros de 1582 violentas emboscadas en los peñones del puerto. El fuerte quedó inmortalizado como la frontera gráfica más lejana registrada en la cartografía novohispana de 1580.',
    paleographicAnalysis:'En la pintura de la Relación Geográfica de 1580, el Fuerte de Las Bocas se localiza en el extremo superior izquierdo de la lámina (confín poniente/norte de la ruta). El tlacuilo lo representó mediante una edificación rectangular de fachada sencilla con muros claros, cubierta de dos aguas y vano de acceso en color oscuro. Sobre el Camino Real en rojo, el glosador anotó la leyenda: "las bocas con su fuerte". En las sierras amarillentas con nopaleras que rodean al presidio, el artista indígena dibujó a varios guerreros chichimecas desnudos con arcos tensados y flechas en actitud de acecho.',
    visualGrammar:'',
    primarySources:[
      'AGI, Sevilla, Audiencia de México, legajo 109 — Memorial de los estancieros y vecinos de la frontera chichimeca sobre robos en Las Bocas (1582)',
      'AGI, Sevilla, Audiencia de Guadalajara, legajo 5, r. 1 — Servicios del capitán Juan Domínguez y órdenes de Jerónimo de Orozco (ca. 1572-1576)',
      'AGI, Sevilla, Ramo Patronato, legajo 180, r. 107 — Relación y parecer de Pedro de Ahumada sobre fortificar el paso de Las Bocas (1562)',
      'AGI, Sevilla, Contaduría, legajo 925 — Cuentas de la Real Hacienda sobre sueldos de soldados en Las Bocas (1575-1585)',
    ],
    bibliography:[
      'Powell, Philip Wayne. La guerra chichimeca (1550-1600). FCE, 1977',
      'Ramírez Ruiz, Marcelo. "Paisajes y cartografía del Camino Real...". En Camino Real de Tierra Adentro por Guanajuato, 2022',
      'Puig Carrasco, Alberto. "Reconstrucción de la guerra chichimeca y sus efectos en el mapa...". En Temas Americanistas, 2024',
      'Navarro López, América. El uso de los recursos ambientales en la región de San Miguel y San Felipe... Tesis doctoral, 2022',
      'Naylor, Thomas H. y Polzer, Charles W. The Presidio and Militia on the Northern Frontier of New Spain... 1986',
    ],
    imageUrl:null,
    agn:'Relación de San Felipe (1571)',
    agi:'AGI, México 109 (1582) · Guadalajara 5 r. 1 · Patronato 180 r. 107 · Contaduría 925',
    timelinePhase:'1568 (Fundación) · 1580 (Relación Geográfica) · 1582 (Memorial Estancieros)',
    enlaces:[],
  },

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
  imageOverlayUrl: '/mapa_1580.webp',

  // ── CAPA 2: Versión redibujada ─────────────────────────────────────
  imageOverlayUrl2: '/marcelo.webp',

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
