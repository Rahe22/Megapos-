/* =========================================================
   MEGASERIGRAFICA
   CATÁLOGO COMPLETO + CATEGORÍAS + CARRITO + WHATSAPP
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
   FUNCIÓN PARA AGREGAR PRODUCTOS
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
   1. TINTAS AHULADAS TEXTILES
   FONDO CLARO
========================================================= */

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Blanco OP",
    97, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $40");

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Negro",
    86, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $40");

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Rojo Laura",
    92, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $40");

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Rojo Claro",
    92, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $40");

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Azul Marino",
    92, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $40");

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Azul Proces",
    92, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $40");

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Azul Ultra",
    92, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $40");

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Verde Bandera",
    92, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $40");

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Verde Esmeralda",
    92, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $40");

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Amarillo Cromo",
    92, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $40");

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Amarillo Limón",
    92, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $40");

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Naranja",
    92, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $40");

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Oro",
    189, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $60");

agregarProducto("textil", "Fondo claro",
    "Tinta Ahulada Textil - Plata",
    179, "1 kilo",
    "Tinta ahulada textil para fondo claro.",
    "1/4: $60");


/* =========================================================
   2. FLUORESCENTES TEXTILES
========================================================= */

const fluorescentesClaros = [
    ["Amarillo Fluorescente", 130],
    ["Verde Fluorescente", 130],
    ["Naranja Fluorescente", 130],
    ["Rosa Fluorescente", 130],
    ["Magenta Fluorescente", 130],
    ["Azul Fluorescente", 130]
];

fluorescentesClaros.forEach(function(item) {

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
   3. TINTAS AHULADAS FONDO OSCURO
========================================================= */

agregarProducto("textil", "Fondo oscuro",
    "Blanco 100% Poliéster Textil",
    200, "1 kilo",
    "Tinta especializada para impresión textil.",
    "Solo presentación de 1 kilo");

agregarProducto("textil", "Fondo oscuro",
    "Blanco OP",
    97, "1 kilo",
    "Tinta ahulada textil para fondo oscuro.",
    "1/4: $55");

agregarProducto("textil", "Fondo oscuro",
    "Rojo OP",
    150, "1 kilo",
    "Tinta ahulada textil opaca.",
    "1/4: $55");

agregarProducto("textil", "Fondo oscuro",
    "Azul Proces OP",
    150, "1 kilo",
    "Tinta ahulada textil opaca.",
    "1/4: $55");

agregarProducto("textil", "Fondo oscuro",
    "Azul Ultra OP",
    150, "1 kilo",
    "Tinta ahulada textil opaca.",
    "1/4: $55");

agregarProducto("textil", "Fondo oscuro",
    "Verde Bandera OP",
    150, "1 kilo",
    "Tinta ahulada textil opaca.",
    "1/4: $55");

agregarProducto("textil", "Fondo oscuro",
    "Amarillo Cromo OP",
    150, "1 kilo",
    "Tinta ahulada textil opaca.",
    "1/4: $55");

agregarProducto("textil", "Fondo oscuro",
    "Amarillo Limón OP",
    150, "1 kilo",
    "Tinta ahulada textil opaca.",
    "1/4: $55");

agregarProducto("textil", "Fondo oscuro",
    "Naranja OP",
    150, "1 kilo",
    "Tinta ahulada textil opaca.",
    "1/4: $55");

agregarProducto("textil", "Fondo oscuro",
    "Oro OP - Línea Caltex Sánchez",
    590, "1 kilo",
    "Tinta ahulada opaca para fondo oscuro.",
    "1/4: $130");

agregarProducto("textil", "Fondo oscuro",
    "Plata OP - Línea Caltex Sánchez",
    590, "1 kilo",
    "Tinta ahulada opaca para fondo oscuro.",
    "1/4: $130");


/* =========================================================
   4. FLUORESCENTES OPACOS
========================================================= */

const fluorescentesOpacos = [
    ["Amarillo Fluorescente OP", 160],
    ["Verde Fluorescente OP", 160],
    ["Naranja Fluorescente OP", 160],
    ["Rosa Fluorescente OP", 160],
    ["Magenta Fluorescente OP", 160],
    ["Azul Fluorescente OP", 160]
];

fluorescentesOpacos.forEach(function(item) {

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
   5. BASES Y ADITIVOS TEXTILES
========================================================= */

agregarProducto("textil", "Bases y aditivos",
    "Base Opaca",
    86, "1 kilo",
    "Base para hacer rendir más la tinta ahulada textil con acabado opaco.",
    "Solo kilo");

agregarProducto("textil", "Bases y aditivos",
    "Base Nova",
    130, "1 kilo",
    "Quita lo plastificante de la tinta y proporciona un semitacto cero.",
    "Solo kilo");

agregarProducto("textil", "Bases y aditivos",
    "Base BTE",
    130, "1 kilo",
    "Base para hacer rendir más la tinta ahulada textil con acabado brillante.",
    "Solo kilo");

agregarProducto("textil", "Bases y aditivos",
    "Base Glitter",
    130, "1 kilo",
    "Base especializada para encapsular partículas glitter sin importar las micras.",
    "Solo kilo");

agregarProducto("textil", "Bases y aditivos",
    "Base Cristal",
    150, "1 kilo",
    "Base especializada para encapsular la impresión. Acabado brillante y elasticidad.",
    "1/4: $60");

agregarProducto("textil", "Bases y aditivos",
    "Aditivo HD - Alta Densidad",
    285, "1 kilo",
    "Aditivo que se combina con tinta ahulada para formar relieve cuadricular.",
    "Solo kilo");

agregarProducto("textil", "Bases y aditivos",
    "Aditivo Poof",
    890, "1 kilo",
    "Aditivo especializado para inflar la tinta y formar relieves más abombados.",
    "1/4: $270");


/* =========================================================
   6. VINIL MATE
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

vinilMate.forEach(function(item) {

    agregarProducto(
        "vinil",
        "Vinil mate",
        "Tinta Vinílica Mate - " + item[0],
        item[1],
        "1 kilo",
        "Tinta vinílica mate base solvente para plásticos y superficies lisas.",
        item[2] ? "1/4: $" + item[2] : "1/4 no especificado"
    );

});


/* =========================================================
   7. FLUORESCENTES VINIL MATE
========================================================= */

const vinilFluo = [
    ["Rosa Fluorescente",275,85],
    ["Amarillo Fluorescente",275,85],
    ["Verde Fluorescente",275,85],
    ["Naranja Fluorescente",275,85],
    ["Magenta Fluorescente",275,85]
];

vinilFluo.forEach(function(item) {

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
   8. VINIL BRILLANTE
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

vinilBrillante.forEach(function(item) {

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
   9. TINTAS ESPECIALES
========================================================= */

agregarProducto(
    "especiales",
    "Non Woven",
    "Tinta Non Woven Línea Sánchez - Blanco",
    380,
    "1 kilo",
    "Tinta especializada para tela ecológica Non Woven con fijación extrema."
);

agregarProducto(
    "especiales",
    "Non Woven",
    "Tinta Non Woven Línea Sánchez - Negro",
    380,
    "1 kilo",
    "Tinta especializada para tela ecológica Non Woven con fijación extrema."
);

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
   10. EMULSIONES
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
   11. RECUPERACIÓN
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
   12. SOLVENTES
========================================================= */

agregarProducto(
    "quimicos",
    "Solventes",
    "Adhesivo Líquido",
    160,
    "1 litro",
    "Adhesivo líquido para procesos de serigrafía.",
    "1/4: $60"
);

agregarProducto(
    "quimicos",
    "Solventes",
    "Solvente Xilol",
    65,
    "1 litro",
    "Solvente para procesos de serigrafía."
);

agregarProducto(
    "quimicos",
    "Solventes",
    "Solvente Vinil",
    88,
    "1 litro",
    "Solvente especializado para tintas vinílicas."
);

agregarProducto(
    "quimicos",
    "Solventes",
    "Isoforona",
    170,
    "1 litro",
    "Solvente especializado para aplicaciones técnicas."
);

agregarProducto(
    "quimicos",
    "Solventes",
    "P700 - Línea Sánchez",
    280,
    "1 litro",
    "Solvente Línea Sánchez."
);

agregarProducto(
    "quimicos",
    "Solventes",
    "P500 - Línea Sánchez",
    205,
    "1 litro",
    "Solvente Línea Sánchez."
);

agregarProducto(
    "quimicos",
    "Solventes",
    "P400 - Línea Sánchez",
    205,
    "1 litro",
    "Solvente Línea Sánchez."
);

agregarProducto(
    "quimicos",
    "Solventes",
    "P200 - Línea Sánchez",
    150,
    "1 litro",
    "Solvente Línea Sánchez."
);

agregarProducto(
    "quimicos",
    "Solventes",
    "P100 - Línea Sánchez",
    150,
    "1 litro",
    "Solvente Línea Sánchez."
);


/* =========================================================
   13. MARCOS
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

marcos.forEach(function(item) {

    agregarProducto(
        "marcos",
        item[0],
        "Marco para Serigrafía " + item[0] + " - Malla " + item[1],
        item[2],
        "1 pieza",
        "Marco para serigrafía.",
        "Malla " + item[1]
    );

});


/* =========================================================
   14. ELABORACIÓN DE MARCOS
========================================================= */

const elaboracion = [
    ["20x30",13],
    ["30x40",14],
    ["40x50",15],
    ["50x60",30],
    ["60x70",50],
    ["70x80",80]
];

elaboracion.forEach(function(item) {

    agregarProducto(
        "marcos",
        "Elaboración",
        "Elaboración de Marco " + item[0],
        item[1],
        "Servicio",
        "Trayendo usted el diseño físico y el marco."
    );

});


/* =========================================================
   15. RECUPERACIÓN DE MARCOS
========================================================= */

elaboracion.forEach(function(item) {

    agregarProducto(
        "marcos",
        "Recuperación",
        "Recuperación de Marco " + item[0],
        item[1],
        "Servicio",
        "Trayendo el marco sin tinta ni cinta."
    );

});


/* =========================================================
   16. RACEROS
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

raceros.forEach(function(item) {

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
   17. DISEÑO GRÁFICO
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
   18. OTROS PRODUCTOS
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

agregarProducto(
    "otros",
    "Químicos",
    "Sericur - Endurecedor de Mallas",
    115,
    "1 litro",
    "Endurecedor de mallas.",
    "Presentación adicional: 280 g"
);

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

agregarProducto(
    "otros",
    "Accesorios",
    "Bisagras para Serigrafía",
    210,
    "Par",
    "Bisagras para serigrafía."
);

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
   19. CINTAS
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
   20. EQUIPO
========================================================= */

agregarProducto(
    "equipo",
    "Mesas",
    "Mesa de Trabajo para Serigrafía",
    1250,
    "1 equipo",
    "Mesa de trabajo con un brazo, una paleta y posicionamiento de paleta.",
    "Tiempo de elaboración: 3 días hábiles"
);


/* =========================================================
   ESTADO DEL CARRITO
========================================================= */

let carrito = [];


/* =========================================================
   NOMBRES Y CONFIGURACIÓN DE CATEGORÍAS
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

    marcos: {
        nombre: "Marcos",
        icono: "▣",
        descripcion: "Marcos, elaboración y recuperación"
    },

    herramientas: {
        nombre: "Raceros",
        icono: "▰",
        descripcion: "Raceros y hule"
    },

    servicios: {
        nombre: "Diseño Gráfico",
        icono: "✎",
        descripcion: "Diseños para serigrafía"
    },

    otros: {
        nombre: "Otros Productos",
        icono: "⚙",
        descripcion: "Adhesivos, sprays y accesorios"
    },

    equipo: {
        nombre: "Equipo",
        icono: "◈",
        descripcion: "Mesas y equipo para serigrafía"
    }

};


/* =========================================================
   UTILIDADES
========================================================= */

function elemento(id) {

    return document.getElementById(id);

}


/* =========================================================
   INICIO
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    generarCategorias();

    mostrarTodosProductos();

    actualizarCarrito();

    console.log(
        "MEGASERIGRAFICA: " +
        productos.length +
        " productos cargados."
    );

});


/* =========================================================
   GENERAR CATEGORÍAS
========================================================= */

function generarCategorias() {

    const contenedor = elemento("categoriesGrid");

    if (!contenedor) {

        console.warn(
            "No existe #categoriesGrid en el HTML."
        );

        return;

    }

    contenedor.innerHTML = "";

    Object.keys(configuracionCategorias).forEach(function(categoria) {

        const config =
            configuracionCategorias[categoria];

        const cantidad =
            productos.filter(function(producto) {

                return producto.categoria === categoria;

            }).length;


        const boton =
            document.createElement("button");

        boton.type = "button";

        boton.className =
            "category-card";


        boton.innerHTML = `

            <span class="category-icon">
                ${config.icono}
            </span>

            <div class="category-content">

                <strong>
                    ${config.nombre}
                </strong>

                <span>
                    ${config.descripcion}
                </span>

                <small>
                    ${cantidad} productos
                </small>

            </div>

            <span class="category-arrow">
                →
            </span>

        `;


        boton.addEventListener(
            "click",
            function() {

                filtrarCategoria(categoria);

            }
        );


        contenedor.appendChild(boton);

    });

}


/* =========================================================
   MOSTRAR PRODUCTOS
========================================================= */

function mostrarProductos(listaProductos) {

    const productGrid =
        elemento("productGrid");


    if (!productGrid) {

        console.warn(
            "No existe #productGrid en el HTML."
        );

        return;

    }


    productGrid.innerHTML = "";


    if (listaProductos.length === 0) {

        productGrid.innerHTML = `

            <div class="empty-cart">

                <h3>
                    No hay productos
                </h3>

                <p>
                    No encontramos productos en esta categoría.
                </p>

            </div>

        `;

        return;

    }


    listaProductos.forEach(function(producto) {

        const tarjeta =
            document.createElement("article");


        tarjeta.className =
            "product-card";


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


        const precioPrincipal =
            `$${producto.precio.toFixed(2)}`;


        const presentacion =
            producto.presentacion
            ? producto.presentacion
            : "";


        const extra =
            producto.extra
            ? `<small class="product-extra">
                    ${producto.extra}
               </small>`
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

                    ${presentacion}

                </div>


                ${extra}


                <div class="product-bottom">

                    <span class="product-price">

                        ${precioPrincipal}

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


        productGrid.appendChild(tarjeta);

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

    const filtrados =
        productos.filter(function(producto) {

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


    mostrarProductos(filtrados);


    const productGrid =
        elemento("productGrid");


    if (productGrid) {

        setTimeout(function() {

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
        productos.filter(function(producto) {

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
   MOSTRAR TODO
========================================================= */

function mostrarTodosProductos() {

    const categoryTitle =
        elemento("categoryTitle");


    if (categoryTitle) {

        categoryTitle.textContent =
            "Todos los productos";

    }


    mostrarProductos(productos);

}


/* =========================================================
   CARRITO
========================================================= */

function agregarAlCarrito(idProducto) {

    const producto =
        productos.find(function(item) {

            return item.id === idProducto;

        });


    if (!producto) {

        return;

    }


    const productoExistente =
        carrito.find(function(item) {

            return item.id === idProducto;

        });


    if (productoExistente) {

        productoExistente.cantidad += 1;

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


        carrito.forEach(function(producto) {

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
                            onclick="cambiarCantidad(
                                ${producto.id},
                                -1
                            )"
                        >
                            −
                        </button>


                        <span>
                            ${producto.cantidad}
                        </span>


                        <button
                            type="button"
                            onclick="cambiarCantidad(
                                ${producto.id},
                                1
                            )"
                        >
                            +
                        </button>

                    </div>


                    <button
                        type="button"
                        class="remove-button"
                        onclick="eliminarDelCarrito(
                            ${producto.id}
                        )"
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

            function(total, producto) {

                return total +
                    producto.cantidad;

            },

            0

        );


    const precioTotal =
        carrito.reduce(

            function(total, producto) {

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
        carrito.find(function(item) {

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
   ELIMINAR
========================================================= */

function eliminarDelCarrito(idProducto) {

    carrito =
        carrito.filter(function(producto) {

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
   NAVEGACIÓN
========================================================= */

function mostrarSeccion(id) {

    const secciones =
        document.querySelectorAll(
            ".page-section"
        );


    secciones.forEach(function(seccion) {

        seccion.classList.remove("active");

    });


    const seccionActiva =
        elemento(id);


    if (seccionActiva) {

        seccionActiva.classList.add("active");

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


    carrito.forEach(function(producto) {

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

            function(suma, producto) {

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
   CONTACTO DISEÑO
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
   CONTACTO PEDIDOS
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
   DIAGNÓSTICO
========================================================= */

console.log(
    "MEGASERIGRAFICA: JavaScript cargado correctamente."
);

console.log(
    "Productos cargados:",
    productos.length
);
