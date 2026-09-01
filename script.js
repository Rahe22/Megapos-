/* =========================================================
   MEGASERIGRAFICA
   CATÁLOGO COMPLETO
   CATÁLOGO POR SUBCATEGORÍAS
   CARRITO + WHATSAPP
========================================================= */

"use strict";

/* =========================================================
   CONFIGURACIÓN
========================================================= */

const whatsappPedidos = "525568089314";
const whatsappDiseno = "525574472298";


/* =========================================================
   CATÁLOGO
========================================================= */

const productos = [];
let siguienteId = 1;


/* =========================================================
   AGREGAR PRODUCTO
========================================================= */

function agregarProducto(
    categoria,
    subcategoria,
    nombre,
    precio,
    presentacion,
    descripcion = "",
    extra = ""
) {

    productos.push({

        id: siguienteId++,
        categoria: categoria,
        subcategoria: subcategoria,
        nombre: nombre,
        precio: Number(precio),
        presentacion: presentacion,
        descripcion: descripcion,
        extra: extra,
        imagen: ""

    });

}


/* =========================================================
   1. TINTA AHULADA TEXTIL - FONDO CLARO
========================================================= */

const fondoClaro = [
    ["Blanco OP", 97, 40],
    ["Negro", 86, 40],
    ["Rojo Laura", 92, 40],
    ["Rojo Claro", 92, 40],
    ["Azul Marino", 92, 40],
    ["Azul Proces", 92, 40],
    ["Azul Ultra", 92, 40],
    ["Verde Bandera", 92, 40],
    ["Verde Esmeralda", 92, 40],
    ["Amarillo Cromo", 92, 40],
    ["Amarillo Limón", 92, 40],
    ["Naranja", 92, 40],
    ["Oro", 189, 60],
    ["Plata", 179, 60]
];

fondoClaro.forEach(item => {

    agregarProducto(
        "textil",
        "Fondo claro",
        "Tinta Ahulada Textil - " + item[0],
        item[1],
        "1 kilo",
        "Tinta ahulada textil para fondo claro.",
        "1/4: $" + item[2]
    );

});


/* =========================================================
   2. COLORES FLUORESCENTES TEXTIL
========================================================= */

const fluorescentesTextil = [
    ["Amarillo Fluorescente", 130],
    ["Verde Fluorescente", 130],
    ["Naranja Fluorescente", 130],
    ["Rosa Fluorescente", 130],
    ["Magenta Fluorescente", 130],
    ["Azul Fluorescente", 130]
];

fluorescentesTextil.forEach(item => {

    agregarProducto(
        "textil",
        "Fluorescentes",
        "Tinta Ahulada Textil - " + item[0],
        item[1],
        "1 kilo",
        "Tinta ahulada textil fluorescente.",
        "1/4: $60"
    );

});


/* =========================================================
   3. TINTA AHULADA TEXTIL - FONDO OSCURO
========================================================= */

agregarProducto(
    "textil",
    "Fondo oscuro",
    "Blanco 100% Poliéster Textil",
    200,
    "1 kilo",
    "Tinta especializada para impresión textil.",
    "Solo presentación de 1 kilo"
);

const fondoOscuro = [
    ["Blanco OP", 97, 55],
    ["Rojo OP", 150, 55],
    ["Azul Proces OP", 150, 55],
    ["Azul Ultra OP", 150, 55],
    ["Verde Bandera OP", 150, 55],
    ["Amarillo Cromo OP", 150, 55],
    ["Amarillo Limón OP", 150, 55],
    ["Naranja OP", 150, 55],
    ["Oro OP - Línea Caltex Sánchez", 590, 130],
    ["Plata OP - Línea Caltex Sánchez", 590, 130]
];

fondoOscuro.forEach(item => {

    agregarProducto(
        "textil",
        "Fondo oscuro",
        item[0],
        item[1],
        "1 kilo",
        "Tinta ahulada textil opaca para fondo oscuro.",
        "1/4: $" + item[2]
    );

});


/* =========================================================
   4. COLORES FLUORESCENTES TEXTIL OPACOS
========================================================= */

const fluorescentesOpacos = [
    ["Amarillo Fluorescente OP", 160],
    ["Verde Fluorescente OP", 160],
    ["Naranja Fluorescente OP", 160],
    ["Rosa Fluorescente OP", 160],
    ["Magenta Fluorescente OP", 160],
    ["Azul Fluorescente OP", 160]
];

fluorescentesOpacos.forEach(item => {

    agregarProducto(
        "textil",
        "Fluorescentes opacos",
        item[0],
        item[1],
        "1 kilo",
        "Tinta fluorescente opaca ahulada textil.",
        "1/4: $60"
    );

});


/* =========================================================
   5. BASES Y ADITIVOS AHULADOS
========================================================= */

agregarProducto(
    "textil",
    "Bases y aditivos",
    "Base Opaca",
    86,
    "1 kilo",
    "Base para tinta ahulada textil con acabado opaco.",
    "Solo kilo"
);

agregarProducto(
    "textil",
    "Bases y aditivos",
    "Base Nova",
    130,
    "1 kilo",
    "Quita lo plastificante de la tinta y proporciona un semitacto cero.",
    "Solo kilo"
);

agregarProducto(
    "textil",
    "Bases y aditivos",
    "Base BTE",
    130,
    "1 kilo",
    "Hace rendir más la tinta y proporciona acabado brillante.",
    "Solo kilo"
);

agregarProducto(
    "textil",
    "Bases y aditivos",
    "Base Glitter",
    130,
    "1 kilo",
    "Encapsula partículas glitter sin importar las micras.",
    "Solo kilo"
);

agregarProducto(
    "textil",
    "Bases y aditivos",
    "Base Cristal",
    150,
    "1 kilo",
    "Encapsula la impresión. Acabado brillante y elasticidad.",
    "1/4: $60"
);

agregarProducto(
    "textil",
    "Bases y aditivos",
    "Aditivo HD - Alta Densidad",
    285,
    "1 kilo",
    "Se combina con cualquier tinta ahulada textil y forma relieve cuadricular.",
    "Solo kilo"
);

agregarProducto(
    "textil",
    "Bases y aditivos",
    "Aditivo Poof",
    890,
    "1 kilo",
    "Infla la tinta para crear relieves más aglobados.",
    "1/4: $270"
);


/* =========================================================
   6. TINTA VINIL MATE
========================================================= */

const vinilMate = [
    ["Blanco",160,60],
    ["Negro",150,60],
    ["Barniz",170,60],
    ["Amarillo Cromo",155,60],
    ["Amarillo Primoroso",155,60],
    ["Azul Marino",165,60],
    ["Azul Pavo",165,60],
    ["Azul Ultra",210,60],
    ["Naranja",180,60],
    ["Verde Bandera",179,60],
    ["Verde Esmeralda",179,60],
    ["Rojo Fuego",190,60],
    ["Rojo Medio",175,60],
    ["Rojo Rubio",175,60],
    ["Magenta",230,null],
    ["Rodamina",230,85],
    ["Oro",440,150],
    ["Plata",265,90]
];

vinilMate.forEach(item => {

    agregarProducto(
        "vinil",
        "Vinil mate",
        "Tinta Vinílica Mate - " + item[0],
        item[1],
        "1 kilo",
        "Tinta vinílica mate base solvente para plásticos y superficies lisas.",
        item[2] !== null
            ? "1/4: $" + item[2]
            : "1/4 no especificado"
    );

});


/* =========================================================
   7. COLORES FLUORESCENTES VINIL MATE
========================================================= */

const vinilFluorescente = [
    ["Rosa Fluorescente",275,85],
    ["Amarillo Fluorescente",275,85],
    ["Verde Fluorescente",275,85],
    ["Naranja Fluorescente",275,85],
    ["Magenta Fluorescente",275,85]
];

vinilFluorescente.forEach(item => {

    agregarProducto(
        "vinil",
        "Fluorescentes vinil mate",
        "Tinta Vinílica Mate - " + item[0],
        item[1],
        "1 kilo",
        "Color fluorescente para tinta vinílica mate.",
        "1/4: $" + item[2]
    );

});


/* =========================================================
   8. TINTA VINIL BRILLANTE
========================================================= */

const vinilBrillante = [
    ["Blanco",215,65],
    ["Negro",200,65],
    ["Barniz",180,65],
    ["Amarillo Cromo",200,65],
    ["Amarillo Primoroso",200,65],
    ["Azul Marino",210,65],
    ["Azul Pavo",232,65],
    ["Azul Ultra",230,65],
    ["Naranja",220,65],
    ["Verde Bandera",226,65],
    ["Verde Esmeralda",226,65],
    ["Rojo Fuego",248,65],
    ["Rojo Medio",248,65],
    ["Rojo Rubio",250,65],
    ["Magenta",280,90],
    ["Rodamina",280,90],
    ["Oro",450,155],
    ["Plata",270,95]
];

vinilBrillante.forEach(item => {

    agregarProducto(
        "vinil",
        "Vinil brillante",
        "Tinta Vinílica Brillante - " + item[0],
        item[1],
        "1 kilo",
        "Tinta vinílica brillante base solvente.",
        "1/4: $" + item[2]
    );

});


/* =========================================================
   9. TINTA NON WOVEN
========================================================= */

agregarProducto(
    "especiales",
    "Non Woven",
    "Tinta Non Woven Línea Sánchez - Blanco",
    380,
    "1 kilo",
    "Tinta para tela ecológica Non Woven con adherencia y fijación extrema."
);

agregarProducto(
    "especiales",
    "Non Woven",
    "Tinta Non Woven Línea Sánchez - Negro",
    380,
    "1 kilo",
    "Tinta para tela ecológica Non Woven con adherencia y fijación extrema."
);


/* =========================================================
   10. TINTA POLICAT
========================================================= */

agregarProducto(
    "especiales",
    "Policat",
    "Tinta Policat Línea Sánchez - Blanco",
    600,
    "1 kilo",
    "Tinta epóxica especializada para adherencia sobre cristales y aluminio.",
    "1/4 de cualquier color: $190"
);

agregarProducto(
    "especiales",
    "Policat",
    "Tinta Policat Línea Sánchez - Negro",
    600,
    "1 kilo",
    "Tinta epóxica especializada para adherencia sobre cristales y aluminio.",
    "1/4 de cualquier color: $190"
);


/* =========================================================
   11. EMULSIONES
========================================================= */

agregarProducto(
    "quimicos",
    "Emulsiones",
    "Emulsión Sericrom - Línea Sánchez",
    175,
    "1 litro",
    "Emulsión para preparación de mallas."
);

agregarProducto(
    "quimicos",
    "Emulsiones",
    "Emulsión Diazol - Línea Sánchez",
    175,
    "1 litro",
    "Emulsión para preparación de mallas."
);

agregarProducto(
    "quimicos",
    "Emulsiones",
    "Bicromato",
    258,
    "1 litro",
    "Sensibilizador para preparación de emulsiones.",
    "1/4: $60"
);

agregarProducto(
    "quimicos",
    "Emulsiones",
    "Emulsión Preparada Sericrom",
    240,
    "1 litro",
    "Emulsión preparada lista para trabajar.",
    "1/4: $65"
);

agregarProducto(
    "quimicos",
    "Emulsiones",
    "Emulsión Preparada Diazol",
    240,
    "1 litro",
    "Emulsión preparada lista para trabajar.",
    "1/4: $65"
);


/* =========================================================
   12. PRODUCTOS DE RECUPERACIÓN
========================================================= */

agregarProducto(
    "quimicos",
    "Recuperación",
    "Sericlin - Línea Sánchez",
    253,
    "1 litro",
    "Producto para recuperación y limpieza de mallas."
);

agregarProducto(
    "quimicos",
    "Recuperación",
    "Serisol - Línea Sánchez",
    270,
    "1 litro",
    "Producto químico para recuperación de mallas."
);

agregarProducto(
    "quimicos",
    "Recuperación",
    "Seripasta - Línea Sánchez",
    159,
    "1 litro",
    "Producto para recuperación de mallas."
);


/* =========================================================
   13. SOLVENTES
========================================================= */

const solventes = [
    ["Adhesivo Líquido",160,"1/4: $60"],
    ["Solvente Xilol",65,""],
    ["Solvente Vinil",88,""],
    ["Isoforona",170,""],
    ["P700 - Línea Sánchez",280,""],
    ["P500 - Línea Sánchez",205,""],
    ["P400 - Línea Sánchez",205,""],
    ["P200 - Línea Sánchez",150,""],
    ["P100 - Línea Sánchez",150,""]
];

solventes.forEach(item => {

    agregarProducto(
        "quimicos",
        "Solventes",
        item[0],
        item[1],
        "1 litro",
        "Solvente para procesos de serigrafía.",
        item[2]
    );

});


/* =========================================================
   14. RACEROS PARA SERIGRAFÍA
========================================================= */

const raceros = [
    [5,30],
    [10,55],
    [15,65],
    [20,78],
    [25,105],
    [30,120],
    [35,140],
    [40,160]
];

raceros.forEach(item => {

    agregarProducto(
        "herramientas",
        "Raceros",
        "Racero " + item[0] + " cm",
        item[1],
        "1 pieza",
        "Racero profesional para serigrafía."
    );

});

agregarProducto(
    "herramientas",
    "Raceros",
    "Hule para Racero",
    4,
    "1 cm",
    "Hule para fabricación o reparación de raceros.",
    "$4 por cm"
);


/* =========================================================
   15. CATALIZADORES
========================================================= */

agregarProducto(
    "otros",
    "Catalizadores",
    "Catalizador Policat",
    760,
    "1 litro",
    "Catalizador para sistema Policat.",
    "1/4: $195"
);


/* =========================================================
   16. OTROS QUÍMICOS
========================================================= */

agregarProducto(
    "otros",
    "Químicos",
    "Sericur - Endurecedor de Mallas",
    115,
    "1 litro",
    "Endurecedor de mallas.",
    "Presentación adicional: 280 g"
);


/* =========================================================
   17. ADHESIVOS
========================================================= */

agregarProducto(
    "otros",
    "Adhesivos",
    "Adhesivo Spray Excelink",
    115,
    "270 g",
    "Adhesivo spray para procesos de serigrafía."
);

agregarProducto(
    "otros",
    "Adhesivos",
    "Adhesivo Spray Cliclon",
    97,
    "420 g",
    "Adhesivo spray para procesos de serigrafía."
);


/* =========================================================
   18. PRODUCTOS EN SPRAY
========================================================= */

agregarProducto(
    "otros",
    "Sprays",
    "Silicón Spray",
    130,
    "230 g",
    "Silicón spray para procesos de serigrafía."
);

agregarProducto(
    "otros",
    "Sprays",
    "Destapador de Mallas Spray",
    130,
    "1 pieza",
    "Producto para destapar mallas."
);


/* =========================================================
   19. ACCESORIOS PARA SERIGRAFÍA
========================================================= */

agregarProducto(
    "otros",
    "Accesorios",
    "Bisagras para Serigrafía",
    210,
    "Par",
    "Bisagras para serigrafía."
);


/* =========================================================
   20. ACCESORIOS PARA PLANCHA
========================================================= */

agregarProducto(
    "otros",
    "Planchas",
    "Teflón para Plancha 40x40",
    140,
    "1 pieza",
    "Teflón para plancha. Incluye varillas y resorte."
);

agregarProducto(
    "otros",
    "Planchas",
    "Resorte para Plancha o Pulpo",
    85,
    "1 pieza",
    "Resorte para plancha o pulpo."
);


/* =========================================================
   21. CINTAS PARA EMPAQUETAR
========================================================= */

agregarProducto(
    "otros",
    "Cintas",
    "Cinta para Empaquetar 48x150",
    25,
    "1 pieza",
    "Cinta para empaquetar.",
    "Paquete de 6: $23 por pieza / $138 el paquete"
);

agregarProducto(
    "otros",
    "Cintas",
    "Cinta para Empaquetar 48x130",
    25,
    "1 pieza",
    "Cinta para empaquetar.",
    "Paquete de 6: $23 por pieza / $138 el paquete"
);


/* =========================================================
   22. MARCOS PARA SERIGRAFÍA
========================================================= */

const marcos = [

    ["20x30","T62",53],
    ["20x30","T90",55],
    ["20x30","T120",58],

    ["30x40","T62",65],
    ["30x40","T90",78],
    ["30x40","T120",88],

    ["40x50","T62",82],
    ["40x50","T90",95],
    ["40x50","T120",105],

    ["50x60","T62",165],
    ["50x60","T90",200],
    ["50x60","T120",238],

    ["60x70","T62",240],
    ["60x70","T90",260],
    ["60x70","T120",275],

    ["70x80","T62",320],
    ["70x80","T90",340],
    ["70x80","T120",410]

];

marcos.forEach(item => {

    agregarProducto(
        "marcos",
        "Marcos para serigrafía",
        "Marco para Serigrafía " + item[0] + " - Malla " + item[1],
        item[2],
        "1 pieza",
        "Marco para serigrafía.",
        "Malla " + item[1]
    );

});


/* =========================================================
   23. ELABORACIÓN DE MARCOS
========================================================= */

const preciosMarcosServicio = [
    ["20x30",13],
    ["30x40",14],
    ["40x50",15],
    ["50x60",30],
    ["60x70",50],
    ["70x80",80]
];

preciosMarcosServicio.forEach(item => {

    agregarProducto(
        "marcos",
        "Elaboración de marcos",
        "Elaboración de Marco " + item[0],
        item[1],
        "Servicio",
        "Trayendo usted el diseño físico y el marco."
    );

});


/* =========================================================
   24. RECUPERACIÓN DE MARCOS
========================================================= */

preciosMarcosServicio.forEach(item => {

    agregarProducto(
        "marcos",
        "Recuperación de marcos",
        "Recuperación de Marco " + item[0],
        item[1],
        "Servicio",
        "Trayendo el marco sin tinta ni cinta."
    );

});


/* =========================================================
   25. DISEÑO GRÁFICO
========================================================= */

agregarProducto(
    "servicios",
    "Diseño gráfico",
    "Diseño a un color sencillo",
    45,
    "Servicio",
    "Diseño gráfico para serigrafía. El precio depende del tamaño y los trazos.",
    "Rango: $45 a $60"
);

agregarProducto(
    "servicios",
    "Diseño gráfico",
    "Diseño de 2 o más colores",
    80,
    "Servicio",
    "Diseño gráfico multicolor.",
    "Rango: $80 a $200. Normalmente $40 por color."
);

agregarProducto(
    "servicios",
    "Diseño gráfico",
    "Diseño Cyan + Magenta + Amarillo + Base Blanca",
    200,
    "Servicio",
    "Selección de color para serigrafía.",
    "Precio: $200"
);


/* =========================================================
   26. MESA DE TRABAJO
========================================================= */

agregarProducto(
    "equipo",
    "Mesa de trabajo",
    "Mesa de Trabajo para Serigrafía",
    1250,
    "1 equipo",
    "Mesa de trabajo con un brazo, una paleta y posicionamiento de paleta.",
    "Tiempo de elaboración: 3 días hábiles"
);


/* =========================================================
   CARRITO
========================================================= */

let carrito = [];


/* =========================================================
   CONFIGURACIÓN VISUAL
========================================================= */

const configuracionCategorias = {

    textil: {
        nombre: "Tintas Ahuladas Textiles",
        icono: "◉",
        descripcion: "Tintas, fluorescentes, bases y aditivos"
    },

    vinil: {
        nombre: "Tintas Vinílicas",
        icono: "◆",
        descripcion: "Vinil mate y vinil brillante"
    },

    especiales: {
        nombre: "Tintas Especiales",
        icono: "✦",
        descripcion: "Non Woven y Policat"
    },

    quimicos: {
        nombre: "Emulsiones y Químicos",
        icono: "⚗",
        descripcion: "Emulsiones, recuperación y solventes"
    },

    herramientas: {
        nombre: "Raceros",
        icono: "▰",
        descripcion: "Raceros y hule"
    },

    otros: {
        nombre: "Otros Productos",
        icono: "⚙",
        descripcion: "Adhesivos, sprays y accesorios"
    }

};


/* =========================================================
   ORDEN DEL CATÁLOGO DE INSUMOS
========================================================= */

const seccionesInsumos = [

    {
        id: "tinta-ahulada-fondo-claro",
        titulo: "TINTA AHULADA TEXTIL FONDO CLARO",
        categoria: "textil",
        subcategoria: "Fondo claro"
    },

    {
        id: "colores-fluorescentes-textil",
        titulo: "COLORES FLUORESCENTES TEXTIL",
        categoria: "textil",
        subcategoria: "Fluorescentes"
    },

    {
        id: "tinta-ahulada-fondo-oscuro",
        titulo: "TINTA AHULADA TEXTIL FONDO OSCURO",
        categoria: "textil",
        subcategoria: "Fondo oscuro"
    },

    {
        id: "colores-fluorescentes-textil-opacos",
        titulo: "COLORES FLUORESCENTES TEXTIL OPACOS",
        categoria: "textil",
        subcategoria: "Fluorescentes opacos"
    },

    {
        id: "bases-aditivos-ahulados",
        titulo: "BASES Y ADITIVOS AHULADOS",
        categoria: "textil",
        subcategoria: "Bases y aditivos"
    },

    {
        id: "tinta-vinil-mate",
        titulo: "TINTA VINIL MATE",
        categoria: "vinil",
        subcategoria: "Vinil mate"
    },

    {
        id: "fluorescentes-vinil-mate",
        titulo: "COLORES FLUORESCENTES VINIL MATE",
        categoria: "vinil",
        subcategoria: "Fluorescentes vinil mate"
    },

    {
        id: "tinta-vinil-brillante",
        titulo: "TINTA VINIL BRILLANTE",
        categoria: "vinil",
        subcategoria: "Vinil brillante"
    },

    {
        id: "tinta-non-woven",
        titulo: "TINTA NON WOVEN",
        categoria: "especiales",
        subcategoria: "Non Woven"
    },

    {
        id: "tinta-policat",
        titulo: "TINTA POLICAT",
        categoria: "especiales",
        subcategoria: "Policat"
    },

    {
        id: "emulsiones",
        titulo: "EMULSIONES",
        categoria: "quimicos",
        subcategoria: "Emulsiones"
    },

    {
        id: "productos-recuperacion",
        titulo: "PRODUCTOS DE RECUPERACIÓN",
        categoria: "quimicos",
        subcategoria: "Recuperación"
    },

    {
        id: "solventes",
        titulo: "SOLVENTES",
        categoria: "quimicos",
        subcategoria: "Solventes"
    },

    {
        id: "raceros",
        titulo: "RACEROS PARA SERIGRAFÍA",
        categoria: "herramientas",
        subcategoria: "Raceros"
    },

    {
        id: "catalizadores",
        titulo: "CATALIZADORES",
        categoria: "otros",
        subcategoria: "Catalizadores"
    },

    {
        id: "otros-quimicos",
        titulo: "OTROS QUÍMICOS",
        categoria: "otros",
        subcategoria: "Químicos"
    },

    {
        id: "adhesivos",
        titulo: "ADHESIVOS",
        categoria: "otros",
        subcategoria: "Adhesivos"
    },

    {
        id: "productos-spray",
        titulo: "PRODUCTOS EN SPRAY",
        categoria: "otros",
        subcategoria: "Sprays"
    },

    {
        id: "accesorios-serigrafia",
        titulo: "ACCESORIOS PARA SERIGRAFÍA",
        categoria: "otros",
        subcategoria: "Accesorios"
    },

    {
        id: "accesorios-plancha",
        titulo: "ACCESORIOS PARA PLANCHA",
        categoria: "otros",
        subcategoria: "Planchas"
    },

    {
        id: "cintas-empaquetar",
        titulo: "CINTAS PARA EMPAQUETAR",
        categoria: "otros",
        subcategoria: "Cintas"
    }

];


/* =========================================================
   SECCIONES DE SERVICIOS
========================================================= */

const seccionesServicios = [

    {
        id: "servicio-marcos",
        titulo: "MARCOS PARA SERIGRAFÍA",
        categoria: "marcos",
        subcategoria: "Marcos para serigrafía"
    },

    {
        id: "servicio-elaboracion",
        titulo: "ELABORACIÓN DE MARCOS",
        categoria: "marcos",
        subcategoria: "Elaboración de marcos"
    },

    {
        id: "servicio-recuperacion",
        titulo: "RECUPERACIÓN DE MARCOS",
        categoria: "marcos",
        subcategoria: "Recuperación de marcos"
    },

    {
        id: "servicio-diseno",
        titulo: "DISEÑO GRÁFICO",
        categoria: "servicios",
        subcategoria: "Diseño gráfico"
    },

    {
        id: "servicio-mesa",
        titulo: "MESA DE TRABAJO",
        categoria: "equipo",
        subcategoria: "Mesa de trabajo"
    }

];


/* =========================================================
   UTILIDADES
========================================================= */

function elemento(id) {

    return document.getElementById(id);

}


/* =========================================================
   ESTILOS DEL CATÁLOGO
========================================================= */

function inyectarEstilosCatalogo() {

    if (document.getElementById("megaserigraficaCatalogoStyles")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "megaserigraficaCatalogoStyles";

    style.textContent = `

        .catalog-section {
            width: 100%;
            margin: 0 0 42px;
        }

        .catalog-section-header {
            position: relative;
            display: flex;
            align-items: center;
            gap: 14px;
            margin: 0 0 22px;
            padding: 16px 18px;
            border-left: 4px solid #00e5ff;
            border-bottom: 1px solid rgba(0,229,255,.25);
            background: rgba(0,229,255,.045);
            border-radius: 10px;
            box-shadow: 0 0 22px rgba(0,229,255,.07);
        }

        .catalog-section-header::before {
            content: "";
            width: 8px;
            height: 8px;
            min-width: 8px;
            border-radius: 50%;
            background: #00e5ff;
            box-shadow:
                0 0 8px #00e5ff,
                0 0 18px #00e5ff;
        }

        .catalog-section-title {
            margin: 0;
            color: #ffffff;
            font-size: clamp(16px, 2vw, 23px);
            font-weight: 800;
            letter-spacing: .8px;
            line-height: 1.2;
        }

        .catalog-section-count {
            margin-left: auto;
            color: #00e5ff;
            font-size: 12px;
            white-space: nowrap;
            font-weight: 700;
        }

        .catalog-section .products-grid {
            width: 100%;
        }

        .catalog-empty {
            padding: 25px;
            text-align: center;
            opacity: .65;
        }

        .catalog-nav {
            display: flex;
            gap: 8px;
            overflow-x: auto;
            padding: 4px 0 16px;
            margin-bottom: 10px;
            scrollbar-width: thin;
        }

        .catalog-nav button {
            flex: 0 0 auto;
            border: 1px solid rgba(0,229,255,.25);
            background: rgba(0,229,255,.05);
            color: #00e5ff;
            border-radius: 999px;
            padding: 9px 13px;
            font-size: 11px;
            font-weight: 700;
            cursor: pointer;
        }

        .catalog-nav button:hover {
            background: rgba(0,229,255,.12);
        }

        .services-catalog {
            width: 100%;
        }

    `;

    document.head.appendChild(style);

}


/* =========================================================
   CREAR TARJETA DE PRODUCTO
========================================================= */

function crearTarjetaProducto(producto) {

    const tarjeta = document.createElement("article");

    tarjeta.className = "product-card";


    let imagenHTML = "";

    if (
        producto.imagen &&
        producto.imagen.trim() !== ""
    ) {

        imagenHTML = `
            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
                loading="lazy"
            >
        `;

    } else {

        imagenHTML = `
            <div class="product-placeholder">
                ${obtenerIconoProducto(producto.categoria)}
            </div>
        `;

    }


    const extra = producto.extra
        ? `
            <small class="product-extra">
                ${producto.extra}
            </small>
          `
        : "";


    tarjeta.innerHTML = `

        <div class="product-image">

            ${imagenHTML}

        </div>

        <div class="product-info">

            <span class="product-category">
                ${producto.subcategoria}
            </span>

            <h3>
                ${producto.nombre}
            </h3>

            <p>
                ${producto.descripcion}
            </p>

            <div class="product-presentation">
                ${producto.presentacion}
            </div>

            ${extra}

            <div class="product-bottom">

                <span class="product-price">
                    $${producto.precio.toFixed(2)}
                </span>

                <button
                    class="add-button"
                    type="button"
                    onclick="agregarAlCarrito(${producto.id})"
                    aria-label="Agregar ${producto.nombre}"
                >
                    +
                </button>

            </div>

        </div>

    `;

    return tarjeta;

}


/* =========================================================
   CREAR SECCIÓN DE CATÁLOGO
========================================================= */

function crearSeccionCatalogo(seccion) {

    const productosSeccion = productos.filter(producto => {

        return (
            producto.categoria === seccion.categoria &&
            producto.subcategoria === seccion.subcategoria
        );

    });


    if (productosSeccion.length === 0) {
        return null;
    }


    const section = document.createElement("section");

    section.className = "catalog-section";

    section.id = seccion.id;


    const header = document.createElement("div");

    header.className = "catalog-section-header";

    header.innerHTML = `

        <h2 class="catalog-section-title">
            ${seccion.titulo}
        </h2>

        <span class="catalog-section-count">
            ${productosSeccion.length} productos
        </span>

    `;


    section.appendChild(header);


    const grid = document.createElement("div");

    grid.className = "products-grid";


    productosSeccion.forEach(producto => {

        grid.appendChild(
            crearTarjetaProducto(producto)
        );

    });


    section.appendChild(grid);


    return section;

}


/* =========================================================
   GENERAR NAVEGACIÓN RÁPIDA
========================================================= */

function generarNavegacionCatalogo() {

    const contenedor = elemento("categoriesGrid");

    if (!contenedor) {
        return;
    }


    contenedor.innerHTML = "";

    contenedor.className =
        "catalog-nav";


    seccionesInsumos.forEach(seccion => {

        const boton =
            document.createElement("button");

        boton.type = "button";

        boton.textContent =
            seccion.titulo;


        boton.addEventListener(
            "click",
            function() {

                const destino =
                    elemento(seccion.id);

                if (destino) {

                    destino.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );


        contenedor.appendChild(boton);

    });

}


/* =========================================================
   MOSTRAR CATÁLOGO COMPLETO DE INSUMOS
========================================================= */

function mostrarCatalogoInsumos() {

    const productGrid =
        elemento("productGrid");

    if (!productGrid) {
        return;
    }


    productGrid.innerHTML = "";


    const contenedorCatalogo =
        document.createElement("div");

    contenedorCatalogo.className =
        "catalog-container";


    seccionesInsumos.forEach(seccion => {

        const bloque =
            crearSeccionCatalogo(seccion);

        if (bloque) {

            contenedorCatalogo.appendChild(bloque);

        }

    });


    productGrid.appendChild(
        contenedorCatalogo
    );


    generarNavegacionCatalogo();

}


/* =========================================================
   MOSTRAR PRODUCTOS
========================================================= */

function mostrarProductos(listaProductos) {

    const productGrid =
        elemento("productGrid");


    if (!productGrid) {
        return;
    }


    productGrid.innerHTML = "";


    if (
        !listaProductos ||
        listaProductos.length === 0
    ) {

        productGrid.innerHTML = `

            <div class="catalog-empty">

                <h3>
                    No hay productos
                </h3>

                <p>
                    No encontramos productos en esta sección.
                </p>

            </div>

        `;

        return;

    }


    const grid =
        document.createElement("div");

    grid.className =
        "products-grid";


    listaProductos.forEach(producto => {

        grid.appendChild(
            crearTarjetaProducto(producto)
        );

    });


    productGrid.appendChild(grid);

}


/* =========================================================
   MOSTRAR CATÁLOGO DE SERVICIOS
========================================================= */

function mostrarCatalogoServicios() {

    const contenedor =
        document.querySelector(
            "#servicios .service-list"
        );


    if (!contenedor) {
        return;
    }


    contenedor.innerHTML = "";

    contenedor.className =
        "services-catalog";


    seccionesServicios.forEach(seccion => {

        const bloque =
            crearSeccionCatalogo(seccion);

        if (bloque) {

            contenedor.appendChild(bloque);

        }

    });

}


/* =========================================================
   ICONOS
========================================================= */

function obtenerIconoProducto(categoria) {

    const iconos = {

        textil: "◉",
        vinil: "◆",
        especiales: "✦",
        quimicos: "⚗",
        marcos: "▣",
        herramientas: "▰",
        servicios: "✎",
        otros: "⚙",
        equipo: "◈"

    };


    return iconos[categoria] || "•";

}


/* =========================================================
   FILTRAR CATEGORÍA
========================================================= */

function filtrarCategoria(categoria) {

    const categoriaProductos =
        productos.filter(producto => {

            return producto.categoria === categoria;

        });


    const config =
        configuracionCategorias[categoria];


    const categoryTitle =
        elemento("categoryTitle");


    if (categoryTitle) {

        categoryTitle.textContent =
            config
                ? config.nombre
                : "Productos";

    }


    mostrarProductos(
        categoriaProductos
    );


    const productGrid =
        elemento("productGrid");


    if (productGrid) {

        setTimeout(() => {

            productGrid.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }, 100);

    }

}


/* =========================================================
   FILTRAR SUBCATEGORÍA
========================================================= */

function filtrarSubcategoria(
    categoria,
    subcategoria
) {

    const filtrados =
        productos.filter(producto => {

            return (
                producto.categoria === categoria &&
                producto.subcategoria === subcategoria
            );

        });


    const categoryTitle =
        elemento("categoryTitle");


    if (categoryTitle) {

        categoryTitle.textContent =
            subcategoria;

    }


    mostrarProductos(filtrados);

}


/* =========================================================
   MOSTRAR TODOS
========================================================= */

function mostrarTodosProductos() {

    const categoryTitle =
        elemento("categoryTitle");


    if (categoryTitle) {

        categoryTitle.textContent =
            "Todos los productos";

    }


    mostrarCatalogoInsumos();

}


/* =========================================================
   GENERAR CATEGORÍAS
========================================================= */

function generarCategorias() {

    generarNavegacionCatalogo();

}


/* =========================================================
   CARRITO - AGREGAR
========================================================= */

function agregarAlCarrito(idProducto) {

    const producto =
        productos.find(item => {

            return item.id === idProducto;

        });


    if (!producto) {
        return;
    }


    const existente =
        carrito.find(item => {

            return item.id === idProducto;

        });


    if (existente) {

        existente.cantidad += 1;

    } else {

        carrito.push({

            id: producto.id,
            categoria: producto.categoria,
            subcategoria: producto.subcategoria,
            nombre: producto.nombre,
            precio: producto.precio,
            presentacion: producto.presentacion,
            descripcion: producto.descripcion,
            imagen: producto.imagen,
            cantidad: 1

        });

    }


    actualizarCarrito();

    abrirCarrito();

}


/* =========================================================
   ACTUALIZAR CARRITO
========================================================= */

function actualizarCarrito() {

    const cartItems =
        elemento("cartItems");

    const cartCount =
        elemento("cartCount");

    const cartTotal =
        elemento("cartTotal");


    if (!cartItems) {
        return;
    }


    cartItems.innerHTML = "";


    if (carrito.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <h3>
                    Tu carrito está vacío
                </h3>

                <p>
                    Agrega productos para comenzar tu pedido.
                </p>

            </div>

        `;

    } else {

        carrito.forEach(producto => {

            const item =
                document.createElement("div");


            item.className =
                "cart-item";


            item.innerHTML = `

                <div class="cart-item-name">

                    ${producto.nombre}

                    <small>
                        ${producto.presentacion}
                    </small>

                </div>


                <div class="cart-item-price">

                    $${producto.precio.toFixed(2)}

                </div>


                <div class="cart-item-actions">

                    <div class="quantity-control">

                        <button
                            type="button"
                            onclick="cambiarCantidad(${producto.id}, -1)"
                        >
                            −
                        </button>

                        <span>
                            ${producto.cantidad}
                        </span>

                        <button
                            type="button"
                            onclick="cambiarCantidad(${producto.id}, 1)"
                        >
                            +
                        </button>

                    </div>


                    <button
                        type="button"
                        class="remove-button"
                        onclick="eliminarDelCarrito(${producto.id})"
                    >
                        ELIMINAR
                    </button>

                </div>

            `;


            cartItems.appendChild(item);

        });

    }


    const cantidadTotal =
        carrito.reduce(

            (total, producto) => {

                return total +
                    producto.cantidad;

            },

            0

        );


    const precioTotal =
        carrito.reduce(

            (total, producto) => {

                return total +
                    producto.precio *
                    producto.cantidad;

            },

            0

        );


    if (cartCount) {

        cartCount.textContent =
            cantidadTotal;

        cartCount.style.display =
            cantidadTotal > 0
                ? "flex"
                : "none";

    }


    if (cartTotal) {

        cartTotal.textContent =
            `$${precioTotal.toFixed(2)} MXN`;

    }

}


/* =========================================================
   CAMBIAR CANTIDAD
========================================================= */

function cambiarCantidad(
    idProducto,
    cambio
) {

    const producto =
        carrito.find(item => {

            return item.id === idProducto;

        });


    if (!producto) {
        return;
    }


    producto.cantidad += cambio;


    if (producto.cantidad <= 0) {

        eliminarDelCarrito(idProducto);

        return;

    }


    actualizarCarrito();

}


/* =========================================================
   ELIMINAR DEL CARRITO
========================================================= */

function eliminarDelCarrito(idProducto) {

    carrito =
        carrito.filter(producto => {

            return producto.id !== idProducto;

        });


    actualizarCarrito();

}


/* =========================================================
   ABRIR CARRITO
========================================================= */

function abrirCarrito() {

    const cartDrawer =
        elemento("cartDrawer");

    const overlay =
        elemento("overlay");


    if (cartDrawer) {

        cartDrawer.classList.add("open");

    }


    if (overlay) {

        overlay.classList.add("open");

    }

}


/* =========================================================
   CERRAR CARRITO
========================================================= */

function cerrarCarrito() {

    const cartDrawer =
        elemento("cartDrawer");

    const overlay =
        elemento("overlay");


    if (cartDrawer) {

        cartDrawer.classList.remove("open");

    }


    if (overlay) {

        overlay.classList.remove("open");

    }

}


/* =========================================================
   NAVEGACIÓN ENTRE SECCIONES
========================================================= */

function mostrarSeccion(id) {

    const secciones =
        document.querySelectorAll(
            ".page-section"
        );


    secciones.forEach(seccion => {

        seccion.classList.remove("active");

    });


    const seccionActiva =
        elemento(id);


    if (seccionActiva) {

        seccionActiva.classList.add("active");

    }


    /*
       Si entramos a INSUMOS:
       mostramos el catálogo completo.
    */

    if (id === "insumos") {

        const categoryTitle =
            elemento("categoryTitle");

        if (categoryTitle) {

            categoryTitle.textContent =
                "Todos los productos";

        }

        mostrarCatalogoInsumos();

    }


    /*
       Si entramos a SERVICIOS:
       mostramos Marcos + Elaboración +
       Recuperación + Diseño + Mesa.
    */

    if (id === "servicios") {

        mostrarCatalogoServicios();

    }


    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}


/* =========================================================
   WHATSAPP PEDIDOS
========================================================= */

function pedirPorWhatsApp() {

    if (carrito.length === 0) {

        alert(
            "Tu carrito está vacío. Agrega productos antes de hacer tu pedido."
        );

        return;

    }


    let mensaje =
        "Hola, quiero realizar el siguiente pedido en Megaserigrafica:\n\n";


    carrito.forEach(producto => {

        const subtotal =
            producto.precio *
            producto.cantidad;


        mensaje +=

            `• ${producto.nombre}\n` +

            `Presentación: ${producto.presentacion}\n` +

            `Cantidad: ${producto.cantidad}\n` +

            `Subtotal: $${subtotal.toFixed(2)}\n\n`;

    });


    const total =
        carrito.reduce(

            (suma, producto) => {

                return suma +
                    producto.precio *
                    producto.cantidad;

            },

            0

        );


    mensaje +=

        `TOTAL: $${total.toFixed(2)} MXN\n\n` +

        "Quedo atento a la confirmación de disponibilidad.";


    const url =
        `https://wa.me/${whatsappPedidos}?text=${encodeURIComponent(mensaje)}`;


    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   WHATSAPP DISEÑO
========================================================= */

function contactarDiseno() {

    const mensaje =
        "Hola, me gustaría solicitar información sobre un diseño para serigrafía.";


    const url =
        `https://wa.me/${whatsappDiseno}?text=${encodeURIComponent(mensaje)}`;


    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   WHATSAPP SERVICIOS
========================================================= */

function contactarPedidos() {

    const mensaje =
        "Hola, me gustaría solicitar información sobre los servicios de Megaserigrafica.";


    const url =
        `https://wa.me/${whatsappPedidos}?text=${encodeURIComponent(mensaje)}`;


    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        inyectarEstilosCatalogo();

        generarCategorias();

        mostrarCatalogoInsumos();

        mostrarCatalogoServicios();

        actualizarCarrito();


        console.log(
            "MEGASERIGRAFICA: JavaScript cargado correctamente."
        );


        console.log(
            "Productos cargados:",
            productos.length
        );

    }
);
