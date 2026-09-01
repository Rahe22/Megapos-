/* =========================================================
   MEGASERIGRAFICA
   CATÁLOGO COMPLETO + CARRITO + WHATSAPP
   VERSIÓN ACTUALIZADA
========================================================= */

"use strict";

/* =========================================================
   CONFIGURACIÓN
========================================================= */

const whatsappPedidos = "525568089314";
const whatsappDiseno = "525574472298";


/* =========================================================
   PRODUCTOS
========================================================= */

const productos = [

/* =========================================================
   1. TINTAS AHULADAS TEXTIL - FONDO CLARO
========================================================= */

{
    id: 1,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Blanco OP",
    precio: 97,
    precioCuarto: 40,
    descripcion: "Tinta ahulada textil para fondo claro.",
    imagen: ""
},

{
    id: 2,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Negro",
    precio: 86,
    precioCuarto: 40,
    descripcion: "Tinta ahulada textil para fondo claro.",
    imagen: ""
},

{
    id: 3,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Rojo Laura",
    precio: 92,
    precioCuarto: 40,
    descripcion: "Tinta ahulada textil para fondo claro.",
    imagen: ""
},

{
    id: 4,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Rojo Claro",
    precio: 92,
    precioCuarto: 40,
    descripcion: "Tinta ahulada textil para fondo claro.",
    imagen: ""
},

{
    id: 5,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Azul Marino",
    precio: 92,
    precioCuarto: 40,
    descripcion: "Tinta ahulada textil para fondo claro.",
    imagen: ""
},

{
    id: 6,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Azul Process",
    precio: 92,
    precioCuarto: 40,
    descripcion: "Tinta ahulada textil para fondo claro.",
    imagen: ""
},

{
    id: 7,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Azul Ultra",
    precio: 92,
    precioCuarto: 40,
    descripcion: "Tinta ahulada textil para fondo claro.",
    imagen: ""
},

{
    id: 8,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Verde Bandera",
    precio: 92,
    precioCuarto: 40,
    descripcion: "Tinta ahulada textil para fondo claro.",
    imagen: ""
},

{
    id: 9,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Verde Esmeralda",
    precio: 92,
    precioCuarto: 40,
    descripcion: "Tinta ahulada textil para fondo claro.",
    imagen: ""
},

{
    id: 10,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Amarillo Cromo",
    precio: 92,
    precioCuarto: 40,
    descripcion: "Tinta ahulada textil para fondo claro.",
    imagen: ""
},

{
    id: 11,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Amarillo Limón",
    precio: 92,
    precioCuarto: 40,
    descripcion: "Tinta ahulada textil para fondo claro.",
    imagen: ""
},

{
    id: 12,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Naranja",
    precio: 92,
    precioCuarto: 40,
    descripcion: "Tinta ahulada textil para fondo claro.",
    imagen: ""
},

{
    id: 13,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Oro",
    precio: 189,
    precioCuarto: 60,
    descripcion: "Tinta ahulada textil metálica.",
    imagen: ""
},

{
    id: 14,
    categoria: "textil",
    subcategoria: "Fondo claro",
    nombre: "Tinta Ahulada Textil - Plata",
    precio: 179,
    precioCuarto: 60,
    descripcion: "Tinta ahulada textil metálica.",
    imagen: ""
},


/* =========================================================
   2. FLUORESCENTES TEXTIL
========================================================= */

{
    id: 15,
    categoria: "textil",
    subcategoria: "Fluorescentes",
    nombre: "Ahulada Textil - Amarillo Fluorescente",
    precio: 130,
    precioCuarto: 60,
    descripcion: "Tinta ahulada textil fluorescente.",
    imagen: ""
},

{
    id: 16,
    categoria: "textil",
    subcategoria: "Fluorescentes",
    nombre: "Ahulada Textil - Verde Fluorescente",
    precio: 130,
    precioCuarto: 60,
    descripcion: "Tinta ahulada textil fluorescente.",
    imagen: ""
},

{
    id: 17,
    categoria: "textil",
    subcategoria: "Fluorescentes",
    nombre: "Ahulada Textil - Naranja Fluorescente",
    precio: 130,
    precioCuarto: 60,
    descripcion: "Tinta ahulada textil fluorescente.",
    imagen: ""
},

{
    id: 18,
    categoria: "textil",
    subcategoria: "Fluorescentes",
    nombre: "Ahulada Textil - Rosa Fluorescente",
    precio: 130,
    precioCuarto: 60,
    descripcion: "Tinta ahulada textil fluorescente.",
    imagen: ""
},

{
    id: 19,
    categoria: "textil",
    subcategoria: "Fluorescentes",
    nombre: "Ahulada Textil - Magenta Fluorescente",
    precio: 130,
    precioCuarto: 60,
    descripcion: "Tinta ahulada textil fluorescente.",
    imagen: ""
},

{
    id: 20,
    categoria: "textil",
    subcategoria: "Fluorescentes",
    nombre: "Ahulada Textil - Azul Fluorescente",
    precio: 130,
    precioCuarto: 60,
    descripcion: "Tinta ahulada textil fluorescente.",
    imagen: ""
},


/* =========================================================
   3. TINTAS AHULADAS TEXTIL - FONDO OSCURO
========================================================= */

{
    id: 21,
    categoria: "textil",
    subcategoria: "Fondo oscuro",
    nombre: "Ahulada Textil Fondo Oscuro - Blanco 100% Poliéster",
    precio: 200,
    precioCuarto: null,
    descripcion: "Tinta especial para textiles 100% poliéster.",
    imagen: ""
},

{
    id: 22,
    categoria: "textil",
    subcategoria: "Fondo oscuro",
    nombre: "Ahulada Textil Fondo Oscuro - Blanco OP",
    precio: 97,
    precioCuarto: 55,
    descripcion: "Tinta opaca para fondo oscuro.",
    imagen: ""
},

{
    id: 23,
    categoria: "textil",
    subcategoria: "Fondo oscuro",
    nombre: "Ahulada Textil Fondo Oscuro - Rojo OP",
    precio: 150,
    precioCuarto: 55,
    descripcion: "Tinta opaca para fondo oscuro.",
    imagen: ""
},

{
    id: 24,
    categoria: "textil",
    subcategoria: "Fondo oscuro",
    nombre: "Ahulada Textil Fondo Oscuro - Azul Process OP",
    precio: 150,
    precioCuarto: 55,
    descripcion: "Tinta opaca para fondo oscuro.",
    imagen: ""
},

{
    id: 25,
    categoria: "textil",
    subcategoria: "Fondo oscuro",
    nombre: "Ahulada Textil Fondo Oscuro - Azul Ultra OP",
    precio: 150,
    precioCuarto: 55,
    descripcion: "Tinta opaca para fondo oscuro.",
    imagen: ""
},

{
    id: 26,
    categoria: "textil",
    subcategoria: "Fondo oscuro",
    nombre: "Ahulada Textil Fondo Oscuro - Verde Bandera OP",
    precio: 150,
    precioCuarto: 55,
    descripcion: "Tinta opaca para fondo oscuro.",
    imagen: ""
},

{
    id: 27,
    categoria: "textil",
    subcategoria: "Fondo oscuro",
    nombre: "Ahulada Textil Fondo Oscuro - Amarillo Cromo OP",
    precio: 150,
    precioCuarto: 55,
    descripcion: "Tinta opaca para fondo oscuro.",
    imagen: ""
},

{
    id: 28,
    categoria: "textil",
    subcategoria: "Fondo oscuro",
    nombre: "Ahulada Textil Fondo Oscuro - Amarillo Limón OP",
    precio: 150,
    precioCuarto: 55,
    descripcion: "Tinta opaca para fondo oscuro.",
    imagen: ""
},

{
    id: 29,
    categoria: "textil",
    subcategoria: "Fondo oscuro",
    nombre: "Ahulada Textil Fondo Oscuro - Naranja OP",
    precio: 150,
    precioCuarto: 55,
    descripcion: "Tinta opaca para fondo oscuro.",
    imagen: ""
},

{
    id: 30,
    categoria: "textil",
    subcategoria: "Fondo oscuro",
    nombre: "Ahulada Textil Fondo Oscuro - Oro OP Línea Caltex Sánchez",
    precio: 590,
    precioCuarto: 130,
    descripcion: "Tinta metálica opaca línea Caltex Sánchez.",
    imagen: ""
},

{
    id: 31,
    categoria: "textil",
    subcategoria: "Fondo oscuro",
    nombre: "Ahulada Textil Fondo Oscuro - Plata OP Línea Caltex Sánchez",
    precio: 590,
    precioCuarto: 130,
    descripcion: "Tinta metálica opaca línea Caltex Sánchez.",
    imagen: ""
},


/* =========================================================
   4. FLUORESCENTES OPACOS
========================================================= */

{
    id: 32,
    categoria: "textil",
    subcategoria: "Fluorescentes opacos",
    nombre: "Ahulada Textil OP - Amarillo Fluorescente",
    precio: 160,
    precioCuarto: 60,
    descripcion: "Tinta fluorescente opaca para fondo oscuro.",
    imagen: ""
},

{
    id: 33,
    categoria: "textil",
    subcategoria: "Fluorescentes opacos",
    nombre: "Ahulada Textil OP - Verde Fluorescente",
    precio: 160,
    precioCuarto: 60,
    descripcion: "Tinta fluorescente opaca para fondo oscuro.",
    imagen: ""
},

{
    id: 34,
    categoria: "textil",
    subcategoria: "Fluorescentes opacos",
    nombre: "Ahulada Textil OP - Naranja Fluorescente",
    precio: 160,
    precioCuarto: 60,
    descripcion: "Tinta fluorescente opaca para fondo oscuro.",
    imagen: ""
},

{
    id: 35,
    categoria: "textil",
    subcategoria: "Fluorescentes opacos",
    nombre: "Ahulada Textil OP - Rosa Fluorescente",
    precio: 160,
    precioCuarto: 60,
    descripcion: "Tinta fluorescente opaca para fondo oscuro.",
    imagen: ""
},

{
    id: 36,
    categoria: "textil",
    subcategoria: "Fluorescentes opacos",
    nombre: "Ahulada Textil OP - Magenta Fluorescente",
    precio: 160,
    precioCuarto: 60,
    descripcion: "Tinta fluorescente opaca para fondo oscuro.",
    imagen: ""
},

{
    id: 37,
    categoria: "textil",
    subcategoria: "Fluorescentes opacos",
    nombre: "Ahulada Textil OP - Azul Fluorescente",
    precio: 160,
    precioCuarto: 60,
    descripcion: "Tinta fluorescente opaca para fondo oscuro.",
    imagen: ""
},


/* =========================================================
   5. BASES Y ADITIVOS
========================================================= */

{
    id: 38,
    categoria: "textil",
    subcategoria: "Bases y aditivos",
    nombre: "Base Opaca",
    precio: 86,
    precioCuarto: null,
    descripcion: "Hace rendir más la tinta ahulada textil y proporciona acabado opaco.",
    imagen: ""
},

{
    id: 39,
    categoria: "textil",
    subcategoria: "Bases y aditivos",
    nombre: "Base Nova",
    precio: 130,
    precioCuarto: null,
    descripcion: "Reduce el plastificante y proporciona un semi tacto cero.",
    imagen: ""
},

{
    id: 40,
    categoria: "textil",
    subcategoria: "Bases y aditivos",
    nombre: "Base BTE",
    precio: 130,
    precioCuarto: null,
    descripcion: "Aumenta el rendimiento y proporciona acabado brillante.",
    imagen: ""
},

{
    id: 41,
    categoria: "textil",
    subcategoria: "Bases y aditivos",
    nombre: "Base Glitter",
    precio: 130,
    precioCuarto: null,
    descripcion: "Base especializada para encapsular partículas glitter.",
    imagen: ""
},

{
    id: 42,
    categoria: "textil",
    subcategoria: "Bases y aditivos",
    nombre: "Base Cristal",
    precio: 150,
    precioCuarto: 60,
    descripcion: "Base brillante que encapsula la impresión y proporciona elasticidad.",
    imagen: ""
},

{
    id: 43,
    categoria: "textil",
    subcategoria: "Bases y aditivos",
    nombre: "Aditivo HD - Alta Densidad",
    precio: 285,
    precioCuarto: null,
    descripcion: "Aditivo para formar relieve cuadricular en la impresión.",
    imagen: ""
},

{
    id: 44,
    categoria: "textil",
    subcategoria: "Bases y aditivos",
    nombre: "Aditivo Poof",
    precio: 890,
    precioCuarto: 270,
    descripcion: "Aditivo que permite inflar la tinta para formar relieves abultados.",
    imagen: ""
},


/* =========================================================
   6. TINTAS VINÍLICAS MATE
========================================================= */

{
    id: 45,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Blanco",
    precio: 160,
    precioCuarto: 60,
    descripcion: "Tinta vinílica mate base solvente.",
    imagen: ""
},

{
    id: 46,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Negro",
    precio: 150,
    precioCuarto: 60,
    descripcion: "Tinta vinílica mate base solvente.",
    imagen: ""
},

{
    id: 47,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Barniz",
    precio: 170,
    precioCuarto: 60,
    descripcion: "Barniz vinílico mate.",
    imagen: ""
},

{
    id: 48,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Amarillo Cromo",
    precio: 155,
    precioCuarto: 60,
    descripcion: "Tinta vinílica mate.",
    imagen: ""
},

{
    id: 49,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Amarillo Primoroso",
    precio: 155,
    precioCuarto: 60,
    descripcion: "Tinta vinílica mate.",
    imagen: ""
},

{
    id: 50,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Azul Marino",
    precio: 165,
    precioCuarto: 60,
    descripcion: "Tinta vinílica mate.",
    imagen: ""
},

{
    id: 51,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Azul Pavo",
    precio: 165,
    precioCuarto: 60,
    descripcion: "Tinta vinílica mate.",
    imagen: ""
},

{
    id: 52,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Azul Ultra",
    precio: 210,
    precioCuarto: 60,
    descripcion: "Tinta vinílica mate.",
    imagen: ""
},

{
    id: 53,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Naranja",
    precio: 180,
    precioCuarto: 60,
    descripcion: "Tinta vinílica mate.",
    imagen: ""
},

{
    id: 54,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Verde Bandera",
    precio: 179,
    precioCuarto: 60,
    descripcion: "Tinta vinílica mate.",
    imagen: ""
},

{
    id: 55,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Verde Esmeralda",
    precio: 179,
    precioCuarto: 60,
    descripcion: "Tinta vinílica mate.",
    imagen: ""
},

{
    id: 56,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Rojo Fuego",
    precio: 190,
    precioCuarto: 60,
    descripcion: "Tinta vinílica mate.",
    imagen: ""
},

{
    id: 57,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Rojo Medio",
    precio: 175,
    precioCuarto: 60,
    descripcion: "Tinta vinílica mate.",
    imagen: ""
},

{
    id: 58,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Rojo Rubio",
    precio: 175,
    precioCuarto: 60,
    descripcion: "Tinta vinílica mate.",
    imagen: ""
},

{
    id: 59,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Magenta",
    precio: 230,
    precioCuarto: 85,
    descripcion: "Tinta vinílica mate.",
    imagen: ""
},

{
    id: 60,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Rodamina",
    precio: 230,
    precioCuarto: 85,
    descripcion: "Tinta vinílica mate.",
    imagen: ""
},

{
    id: 61,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Oro",
    precio: 440,
    precioCuarto: 150,
    descripcion: "Tinta vinílica mate metálica.",
    imagen: ""
},

{
    id: 62,
    categoria: "vinil",
    subcategoria: "Vinil Mate",
    nombre: "Vinil Mate - Plata",
    precio: 265,
    precioCuarto: 90,
    descripcion: "Tinta vinílica mate metálica.",
    imagen: ""
},


/* =========================================================
   7. FLUORESCENTES VINIL MATE
========================================================= */

{
    id: 63,
    categoria: "vinil",
    subcategoria: "Fluorescentes Mate",
    nombre: "Vinil Mate - Rosa Fluorescente",
    precio: 275,
    precioCuarto: 85,
    descripcion: "Tinta vinílica mate fluorescente.",
    imagen: ""
},

{
    id: 64,
    categoria: "vinil",
    subcategoria: "Fluorescentes Mate",
    nombre: "Vinil Mate - Amarillo Fluorescente",
    precio: 275,
    precioCuarto: 85,
    descripcion: "Tinta vinílica mate fluorescente.",
    imagen: ""
},

{
    id: 65,
    categoria: "vinil",
    subcategoria: "Fluorescentes Mate",
    nombre: "Vinil Mate - Verde Fluorescente",
    precio: 275,
    precioCuarto: 85,
    descripcion: "Tinta vinílica mate fluorescente.",
    imagen: ""
},

{
    id: 66,
    categoria: "vinil",
    subcategoria: "Fluorescentes Mate",
    nombre: "Vinil Mate - Naranja Fluorescente",
    precio: 275,
    precioCuarto: 85,
    descripcion: "Tinta vinílica mate fluorescente.",
    imagen: ""
},

{
    id: 67,
    categoria: "vinil",
    subcategoria: "Fluorescentes Mate",
    nombre: "Vinil Mate - Magenta Fluorescente",
    precio: 275,
    precioCuarto: 85,
    descripcion: "Tinta vinílica mate fluorescente.",
    imagen: ""
},


/* =========================================================
   8. TINTAS VINÍLICAS BRILLANTES
========================================================= */

{
    id: 68,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Blanco",
    precio: 215,
    precioCuarto: 65,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 69,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Negro",
    precio: 200,
    precioCuarto: 65,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 70,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Barniz",
    precio: 180,
    precioCuarto: 65,
    descripcion: "Barniz vinílico brillante.",
    imagen: ""
},

{
    id: 71,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Amarillo Cromo",
    precio: 200,
    precioCuarto: 65,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 72,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Amarillo Primoroso",
    precio: 200,
    precioCuarto: 65,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 73,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Azul Marino",
    precio: 210,
    precioCuarto: 65,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 74,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Azul Pavo",
    precio: 232,
    precioCuarto: 65,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 75,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Azul Ultra",
    precio: 230,
    precioCuarto: 65,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 76,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Naranja",
    precio: 220,
    precioCuarto: 65,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 77,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Verde Bandera",
    precio: 226,
    precioCuarto: 65,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 78,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Verde Esmeralda",
    precio: 226,
    precioCuarto: 65,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 79,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Rojo Fuego",
    precio: 248,
    precioCuarto: 65,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 80,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Rojo Medio",
    precio: 248,
    precioCuarto: 65,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 81,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Rojo Rubio",
    precio: 250,
    precioCuarto: 65,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 82,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Magenta",
    precio: 280,
    precioCuarto: 90,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 83,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Rodamina",
    precio: 280,
    precioCuarto: 90,
    descripcion: "Tinta vinílica brillante.",
    imagen: ""
},

{
    id: 84,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Oro",
    precio: 450,
    precioCuarto: 155,
    descripcion: "Tinta vinílica brillante metálica.",
    imagen: ""
},

{
    id: 85,
    categoria: "vinil",
    subcategoria: "Vinil Brillante",
    nombre: "Vinil Brillante - Plata",
    precio: 270,
    precioCuarto: 95,
    descripcion: "Tinta vinílica brillante metálica.",
    imagen: ""
},


/* =========================================================
   9. TINTAS ESPECIALIDADES
========================================================= */

{
    id: 86,
    categoria: "especialidades",
    subcategoria: "Non Woven",
    nombre: "Tinta Non Woven Línea Sánchez - Blanco",
    precio: 380,
    precioCuarto: null,
    descripcion: "Tinta de adherencia extrema para tela ecológica.",
    imagen: ""
},

{
    id: 87,
    categoria: "especialidades",
    subcategoria: "Non Woven",
    nombre: "Tinta Non Woven Línea Sánchez - Negro",
    precio: 380,
    precioCuarto: null,
    descripcion: "Tinta de adherencia extrema para tela ecológica.",
    imagen: ""
},

{
    id: 88,
    categoria: "especialidades",
    subcategoria: "Policat",
    nombre: "Tinta Policat Línea Sánchez - Blanco",
    precio: 600,
    precioCuarto: 190,
    descripcion: "Tinta epóxica para cristales y aluminio.",
    imagen: ""
},

{
    id: 89,
    categoria: "especialidades",
    subcategoria: "Policat",
    nombre: "Tinta Policat Línea Sánchez - Negro",
    precio: 600,
    precioCuarto: 190,
    descripcion: "Tinta epóxica para cristales y aluminio.",
    imagen: ""
},


/* =========================================================
   10. EMULSIONES
========================================================= */

{
    id: 90,
    categoria: "quimicos",
    subcategoria: "Emulsiones",
    nombre: "Emulsión Sericrom Línea Sánchez",
    precio: 175,
    precioCuarto: null,
    descripcion: "Emulsión para preparación de mallas.",
    imagen: ""
},

{
    id: 91,
    categoria: "quimicos",
    subcategoria: "Emulsiones",
    nombre: "Emulsión Diazol Línea Sánchez",
    precio: 175,
    precioCuarto: null,
    descripcion: "Emulsión para preparación de mallas.",
    imagen: ""
},

{
    id: 92,
    categoria: "quimicos",
    subcategoria: "Emulsiones",
    nombre: "Bicromato",
    precio: 258,
    precioCuarto: 60,
    descripcion: "Producto para preparación de emulsión.",
    imagen: ""
},

{
    id: 93,
    categoria: "quimicos",
    subcategoria: "Emulsiones",
    nombre: "Emulsión Preparada Sericrom",
    precio: 240,
    precioCuarto: 65,
    descripcion: "Emulsión preparada lista para aplicación.",
    imagen: ""
},

{
    id: 94,
    categoria: "quimicos",
    subcategoria: "Emulsiones",
    nombre: "Emulsión Preparada Diazol",
    precio: 240,
    precioCuarto: 65,
    descripcion: "Emulsión preparada lista para aplicación.",
    imagen: ""
},


/* =========================================================
   11. RECUPERACIÓN
========================================================= */

{
    id: 95,
    categoria: "quimicos",
    subcategoria: "Recuperación",
    nombre: "Sericlin Línea Sánchez",
    precio: 253,
    precioCuarto: null,
    descripcion: "Producto para recuperación y limpieza de mallas.",
    imagen: ""
},

{
    id: 96,
    categoria: "quimicos",
    subcategoria: "Recuperación",
    nombre: "Serisol Línea Sánchez",
    precio: 270,
    precioCuarto: null,
    descripcion: "Producto químico para recuperación.",
    imagen: ""
},

{
    id: 97,
    categoria: "quimicos",
    subcategoria: "Recuperación",
    nombre: "Seripasta Línea Sánchez",
    precio: 159,
    precioCuarto: null,
    descripcion: "Pasta para recuperación de mallas. Presentación de 1 litro.",
    imagen: ""
},


/* =========================================================
   12. SOLVENTES
========================================================= */

{
    id: 98,
    categoria: "quimicos",
    subcategoria: "Solventes",
    nombre: "Adhesivo Líquido",
    precio: 160,
    precioCuarto: 60,
    descripcion: "Adhesivo líquido para procesos de serigrafía.",
    imagen: ""
},

{
    id: 99,
    categoria: "quimicos",
    subcategoria: "Solventes",
    nombre: "Solvente Xilol",
    precio: 65,
    precioCuarto: null,
    descripcion: "Solvente para serigrafía.",
    imagen: ""
},

{
    id: 100,
    categoria: "quimicos",
    subcategoria: "Solventes",
    nombre: "Solvente Vinil",
    precio: 88,
    precioCuarto: null,
    descripcion: "Solvente especializado para tintas vinílicas.",
    imagen: ""
},

{
    id: 101,
    categoria: "quimicos",
    subcategoria: "Solventes",
    nombre: "Isoforona",
    precio: 170,
    precioCuarto: null,
    descripcion: "Solvente para aplicaciones de serigrafía.",
    imagen: ""
},

{
    id: 102,
    categoria: "quimicos",
    subcategoria: "Solventes",
    nombre: "P700 Línea Sánchez",
    precio: 280,
    precioCuarto: null,
    descripcion: "Solvente Línea Sánchez.",
    imagen: ""
},

{
    id: 103,
    categoria: "quimicos",
    subcategoria: "Solventes",
    nombre: "P500 Línea Sánchez",
    precio: 205,
    precioCuarto: null,
    descripcion: "Solvente Línea Sánchez.",
    imagen: ""
},

{
    id: 104,
    categoria: "quimicos",
    subcategoria: "Solventes",
    nombre: "P400 Línea Sánchez",
    precio: 205,
    precioCuarto: null,
    descripcion: "Solvente Línea Sánchez.",
    imagen: ""
},

{
    id: 105,
    categoria: "quimicos",
    subcategoria: "Solventes",
    nombre: "P200 Línea Sánchez",
    precio: 150,
    precioCuarto: null,
    descripcion: "Solvente Línea Sánchez.",
    imagen: ""
},

{
    id: 106,
    categoria: "quimicos",
    subcategoria: "Solventes",
    nombre: "P100 Línea Sánchez",
    precio: 150,
    precioCuarto: null,
    descripcion: "Solvente Línea Sánchez.",
    imagen: ""
},


/* =========================================================
   13. MARCOS
========================================================= */

{
    id: 107,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 20x30 - Malla T62",
    precio: 53,
    descripcion: "Marco para serigrafía con malla T62.",
    imagen: ""
},

{
    id: 108,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 20x30 - Malla T90",
    precio: 55,
    descripcion: "Marco para serigrafía con malla T90.",
    imagen: ""
},

{
    id: 109,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 20x30 - Malla T120",
    precio: 58,
    descripcion: "Marco para serigrafía con malla T120.",
    imagen: ""
},

{
    id: 110,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 30x40 - Malla T62",
    precio: 65,
    descripcion: "Marco para serigrafía con malla T62.",
    imagen: ""
},

{
    id: 111,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 30x40 - Malla T90",
    precio: 78,
    descripcion: "Marco para serigrafía con malla T90.",
    imagen: ""
},

{
    id: 112,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 30x40 - Malla T120",
    precio: 88,
    descripcion: "Marco para serigrafía con malla T120.",
    imagen: ""
},

{
    id: 113,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 40x50 - Malla T62",
    precio: 82,
    descripcion: "Marco para serigrafía con malla T62.",
    imagen: ""
},

{
    id: 114,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 40x50 - Malla T90",
    precio: 95,
    descripcion: "Marco para serigrafía con malla T90.",
    imagen: ""
},

{
    id: 115,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 40x50 - Malla T120",
    precio: 105,
    descripcion: "Marco para serigrafía con malla T120.",
    imagen: ""
},

{
    id: 116,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 50x60 - Malla T62",
    precio: 165,
    descripcion: "Marco para serigrafía con malla T62.",
    imagen: ""
},

{
    id: 117,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 50x60 - Malla T90",
    precio: 200,
    descripcion: "Marco para serigrafía con malla T90.",
    imagen: ""
},

{
    id: 118,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 50x60 - Malla T120",
    precio: 238,
    descripcion: "Marco para serigrafía con malla T120.",
    imagen: ""
},

{
    id: 119,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 60x70 - Malla T62",
    precio: 240,
    descripcion: "Marco para serigrafía con malla T62.",
    imagen: ""
},

{
    id: 120,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 60x70 - Malla T90",
    precio: 260,
    descripcion: "Marco para serigrafía con malla T90.",
    imagen: ""
},

{
    id: 121,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 60x70 - Malla T120",
    precio: 275,
    descripcion: "Marco para serigrafía con malla T120.",
    imagen: ""
},

{
    id: 122,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 70x80 - Malla T62",
    precio: 320,
    descripcion: "Marco para serigrafía con malla T62.",
    imagen: ""
},

{
    id: 123,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 70x80 - Malla T90",
    precio: 340,
    descripcion: "Marco para serigrafía con malla T90.",
    imagen: ""
},

{
    id: 124,
    categoria: "marcos",
    subcategoria: "Marcos",
    nombre: "Marco 70x80 - Malla T120",
    precio: 410,
    descripcion: "Marco para serigrafía con malla T120.",
    imagen: ""
},


/* =========================================================
   14. SERVICIO DE MARCOS
========================================================= */

{
    id: 125,
    categoria: "marcos",
    subcategoria: "Elaboración",
    nombre: "Elaboración de Marco 20x30",
    precio: 13,
    descripcion: "Trayendo usted el diseño físico y el marco.",
    imagen: ""
},

{
    id: 126,
    categoria: "marcos",
    subcategoria: "Elaboración",
    nombre: "Elaboración de Marco 30x40",
    precio: 14,
    descripcion: "Trayendo usted el diseño físico y el marco.",
    imagen: ""
},

{
    id: 127,
    categoria: "marcos",
    subcategoria: "Elaboración",
    nombre: "Elaboración de Marco 40x50",
    precio: 15,
    descripcion: "Trayendo usted el diseño físico y el marco.",
    imagen: ""
},

{
    id: 128,
    categoria: "marcos",
    subcategoria: "Elaboración",
    nombre: "Elaboración de Marco 50x60",
    precio: 30,
    descripcion: "Trayendo usted el diseño físico y el marco.",
    imagen: ""
},

{
    id: 129,
    categoria: "marcos",
    subcategoria: "Elaboración",
    nombre: "Elaboración de Marco 60x70",
    precio: 50,
    descripcion: "Trayendo usted el diseño físico y el marco.",
    imagen: ""
},

{
    id: 130,
    categoria: "marcos",
    subcategoria: "Elaboración",
    nombre: "Elaboración de Marco 70x80",
    precio: 80,
    descripcion: "Trayendo usted el diseño físico y el marco.",
    imagen: ""
},

{
    id: 131,
    categoria: "marcos",
    subcategoria: "Recuperación",
    nombre: "Recuperación de Marco 20x30",
    precio: 13,
    descripcion: "Trayendo el marco sin tinta ni cinta.",
    imagen: ""
},

{
    id: 132,
    categoria: "marcos",
    subcategoria: "Recuperación",
    nombre: "Recuperación de Marco 30x40",
    precio: 14,
    descripcion: "Trayendo el marco sin tinta ni cinta.",
    imagen: ""
},

{
    id: 133,
    categoria: "marcos",
    subcategoria: "Recuperación",
    nombre: "Recuperación de Marco 40x50",
    precio: 15,
    descripcion: "Trayendo el marco sin tinta ni cinta.",
    imagen: ""
},

{
    id: 134,
    categoria: "marcos",
    subcategoria: "Recuperación",
    nombre: "Recuperación de Marco 50x60",
    precio: 30,
    descripcion: "Trayendo el marco sin tinta ni cinta.",
    imagen: ""
},

{
    id: 135,
    categoria: "marcos",
    subcategoria: "Recuperación",
    nombre: "Recuperación de Marco 60x70",
    precio: 50,
    descripcion: "Trayendo el marco sin tinta ni cinta.",
    imagen: ""
},

{
    id: 136,
    categoria: "marcos",
    subcategoria: "Recuperación",
    nombre: "Recuperación de Marco 70x80",
    precio: 80,
    descripcion: "Trayendo el marco sin tinta ni cinta.",
    imagen: ""
},


/* =========================================================
   15. RACEROS
========================================================= */

{
    id: 137,
    categoria: "raceros",
    subcategoria: "Raceros",
    nombre: "Racero 5 cm",
    precio: 30,
    descripcion: "Racero para serigrafía.",
    imagen: ""
},

{
    id: 138,
    categoria: "raceros",
    subcategoria: "Raceros",
    nombre: "Racero 10 cm",
    precio: 55,
    descripcion: "Racero para serigrafía.",
    imagen: ""
},

{
    id: 139,
    categoria: "raceros",
    subcategoria: "Raceros",
    nombre: "Racero 15 cm",
    precio: 65,
    descripcion: "Racero para serigrafía.",
    imagen: ""
},

{
    id: 140,
    categoria: "raceros",
    subcategoria: "Raceros",
    nombre: "Racero 20 cm",
    precio: 78,
    descripcion: "Racero para serigrafía.",
    imagen: ""
},

{
    id: 141,
    categoria: "raceros",
    subcategoria: "Raceros",
    nombre: "Racero 25 cm",
    precio: 105,
    descripcion: "Racero para serigrafía.",
    imagen: ""
},

{
    id: 142,
    categoria: "raceros",
    subcategoria: "Raceros",
    nombre: "Racero 30 cm",
    precio: 120,
    descripcion: "Racero para serigrafía.",
    imagen: ""
},

{
    id: 143,
    categoria: "raceros",
    subcategoria: "Raceros",
    nombre: "Racero 35 cm",
    precio: 140,
    descripcion: "Racero para serigrafía.",
    imagen: ""
},

{
    id: 144,
    categoria: "raceros",
    subcategoria: "Raceros",
    nombre: "Racero 40 cm",
    precio: 160,
    descripcion: "Racero para serigrafía.",
    imagen: ""
},

{
    id: 145,
    categoria: "raceros",
    subcategoria: "Hule",
    nombre: "Hule para Racero",
    precio: 4,
    descripcion: "Precio por centímetro de hule para racero.",
    imagen: ""
},


/* =========================================================
   16. DISEÑO GRÁFICO
========================================================= */

{
    id: 146,
    categoria: "diseno",
    subcategoria: "Diseño gráfico",
    nombre: "Diseño a un color sencillo",
    precio: 45,
    precioMaximo: 60,
    descripcion: "Diseño a un color. El precio depende del tamaño y cantidad de trazos.",
    imagen: ""
},

{
    id: 147,
    categoria: "diseno",
    subcategoria: "Diseño gráfico",
    nombre: "Diseño de 2 o más colores",
    precio: 80,
    precioMaximo: 200,
    descripcion: "Diseños de 2 o más colores. Normalmente $40 por color.",
    imagen: ""
},

{
    id: 148,
    categoria: "diseno",
    subcategoria: "Diseño gráfico",
    nombre: "Diseño CYAN + MAGENTA + AMARILLO + Blanco",
    precio: 200,
    descripcion: "Diseño a selección de color con base blanca.",
    imagen: ""
},


/* =========================================================
   17. OTROS PRODUCTOS
========================================================= */

{
    id: 149,
    categoria: "otros",
    subcategoria: "Accesorios",
    nombre: "Catalizador Policat",
    precio: 760,
    precioCuarto: 195,
    descripcion: "Catalizador para tinta Policat. Línea Sánchez.",
    imagen: ""
},

{
    id: 150,
    categoria: "otros",
    subcategoria: "Accesorios",
    nombre: "Sericur - Endurecedor de Mallas",
    precio: 115,
    descripcion: "Endurecedor de mallas. Presentación 280 g.",
    imagen: ""
},

{
    id: 151,
    categoria: "otros",
    subcategoria: "Adhesivos",
    nombre: "Adhesivo Spray Excelink 270 g",
    precio: 115,
    descripcion: "Adhesivo spray para procesos de serigrafía.",
    imagen: ""
},

{
    id: 152,
    categoria: "otros",
    subcategoria: "Adhesivos",
    nombre: "Adhesivo Spray Cliclon 420 g",
    precio: 97,
    descripcion: "Adhesivo spray para procesos de serigrafía.",
    imagen: ""
},

{
    id: 153,
    categoria: "otros",
    subcategoria: "Sprays",
    nombre: "Silicón Spray 230 g",
    precio: 130,
    descripcion: "Silicón spray.",
    imagen: ""
},

{
    id: 154,
    categoria: "otros",
    subcategoria: "Sprays",
    nombre: "Destapador de Mallas Spray",
    precio: 130,
    descripcion: "Producto para destapar mallas.",
    imagen: ""
},

{
    id: 155,
    categoria: "otros",
    subcategoria: "Accesorios",
    nombre: "Bisagras para Serigrafía - Par",
    precio: 210,
    descripcion: "Par de bisagras para serigrafía.",
    imagen: ""
},

{
    id: 156,
    categoria: "otros",
    subcategoria: "Plancha",
    nombre: "Teflón para Plancha 40x40",
    precio: 140,
    descripcion: "Incluye varillas y resorte.",
    imagen: ""
},

{
    id: 157,
    categoria: "otros",
    subcategoria: "Plancha",
    nombre: "Resorte para Plancha o Pulpo",
    precio: 85,
    descripcion: "Precio por pieza.",
    imagen: ""
},


/* =========================================================
   18. CINTAS
========================================================= */

{
    id: 158,
    categoria: "cintas",
    subcategoria: "Empaque",
    nombre: "Cinta para Empaquetar 48x150",
    precio: 25,
    descripcion: "Cinta para empaquetar. Precio por pieza.",
    imagen: ""
},

{
    id: 159,
    categoria: "cintas",
    subcategoria: "Empaque",
    nombre: "Cinta para Empaquetar 48x130",
    precio: 25,
    descripcion: "Cinta para empaquetar. Precio por pieza.",
    imagen: ""
},

{
    id: 160,
    categoria: "cintas",
    subcategoria: "Empaque",
    nombre: "Cinta para Empaquetar - Paquete de 6",
    precio: 23,
    descripcion: "Paquete de 6 cintas. Precio por pieza: $23. Total del paquete: $138.",
    imagen: ""
},


/* =========================================================
   19. EQUIPO / MESA
========================================================= */

{
    id: 161,
    categoria: "equipo",
    subcategoria: "Mesa de trabajo",
    nombre: "Mesa de Trabajo - 1 Brazo / 1 Paleta / Posicionamiento",
    precio: 1250,
    descripcion: "Mesa de trabajo con un brazo, una paleta y posicionamiento de paleta. Tiempo de entrega: 3 días hábiles.",
    imagen: ""
}

];


/* =========================================================
   ESTADO DEL CARRITO
========================================================= */

let carrito = [];


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

    mostrarTodosProductos();

    actualizarCarrito();

    console.log(
        "MEGASERIGRAFICA: JavaScript cargado correctamente."
    );

});


/* =========================================================
   NAVEGACIÓN
========================================================= */

function mostrarSeccion(id) {

    const secciones =
        document.querySelectorAll(".page-section");

    secciones.forEach(function (seccion) {

        seccion.classList.remove("active");

    });

    const seccionActiva = elemento(id);

    if (seccionActiva) {

        seccionActiva.classList.add("active");

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
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

    listaProductos.forEach(function (producto) {

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
                    FOTO
                </div>
            `;

        }


        let preciosHTML = `
            <div class="product-price">
                $${Number(producto.precio).toFixed(2)}
                <small>/ kilo o presentación principal</small>
            </div>
        `;


        if (
            producto.precioCuarto !== null &&
            producto.precioCuarto !== undefined
        ) {

            preciosHTML += `
                <div class="product-secondary-price">
                    1/4 kg:
                    $${Number(producto.precioCuarto).toFixed(2)}
                </div>
            `;

        }


        if (
            producto.precioMaximo !== undefined
        ) {

            preciosHTML += `
                <div class="product-secondary-price">
                    Precio según trabajo:
                    hasta $${Number(producto.precioMaximo).toFixed(2)}
                </div>
            `;

        }


        tarjeta.innerHTML = `

            <div class="product-image">
                ${imagenHTML}
            </div>

            <div class="product-info">

                <span class="product-category">
                    ${producto.subcategoria || ""}
                </span>

                <h3>
                    ${producto.nombre}
                </h3>

                <p>
                    ${producto.descripcion}
                </p>

                ${preciosHTML}

                <div class="product-bottom">

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
   FILTROS
========================================================= */

function filtrarCategoria(categoria) {

    const filtrados =
        productos.filter(function (producto) {

            return producto.categoria === categoria;

        });


    const nombresCategorias = {

        textil:
            "Tintas Ahuladas Textiles",

        vinil:
            "Tintas Vinílicas",

        especialidades:
            "Tintas Especiales",

        quimicos:
            "Emulsiones y Químicos",

        marcos:
            "Marcos y Servicios",

        raceros:
            "Raceros",

        diseno:
            "Diseño Gráfico",

        otros:
            "Otros Productos",

        cintas:
            "Cintas",

        equipo:
            "Equipo"

    };


    const categoryTitle =
        elemento("categoryTitle");


    if (categoryTitle) {

        categoryTitle.textContent =
            nombresCategorias[categoria] ||
            "Productos";

    }


    mostrarProductos(filtrados);


    const productGrid =
        elemento("productGrid");


    if (productGrid) {

        setTimeout(function () {

            productGrid.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }

}


/* =========================================================
   MOSTRAR TODO
========================================================= */

function mostrarTodosProductos() {

    const categoryTitle =
        elemento("categoryTitle");


    if (categoryTitle) {

        categoryTitle.textContent =
            "Todos nuestros productos";

    }


    mostrarProductos(productos);

}


/* =========================================================
   CARRITO
========================================================= */

function agregarAlCarrito(idProducto) {

    const producto =
        productos.find(function (item) {

            return item.id === idProducto;

        });


    if (!producto) {

        console.warn(
            "Producto no encontrado:",
            idProducto
        );

        return;

    }


    const productoExistente =
        carrito.find(function (item) {

            return item.id === idProducto;

        });


    if (productoExistente) {

        productoExistente.cantidad += 1;

    } else {

        carrito.push({

            id: producto.id,

            categoria:
                producto.categoria,

            subcategoria:
                producto.subcategoria,

            nombre:
                producto.nombre,

            precio:
                producto.precio,

            precioCuarto:
                producto.precioCuarto,

            descripcion:
                producto.descripcion,

            imagen:
                producto.imagen,

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

        console.warn(
            "No existe #cartItems."
        );

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

        carrito.forEach(function (producto) {

            const item =
                document.createElement("div");

            item.className =
                "cart-item";


            item.innerHTML = `

                <div class="cart-item-name">
                    ${producto.nombre}
                </div>

                <div class="cart-item-price">
                    $${Number(producto.precio).toFixed(2)}
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
            function (total, producto) {

                return total +
                    producto.cantidad;

            },
            0
        );


    const precioTotal =
        carrito.reduce(
            function (total, producto) {

                return total +
                    (
                        producto.precio *
                        producto.cantidad
                    );

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
        carrito.find(function (item) {

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
   ELIMINAR PRODUCTO
========================================================= */

function eliminarDelCarrito(idProducto) {

    carrito =
        carrito.filter(function (producto) {

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


    carrito.forEach(function (producto) {

        const subtotal =
            producto.precio *
            producto.cantidad;


        mensaje +=
            `• ${producto.nombre}\n` +
            `Cantidad: ${producto.cantidad}\n` +
            `Subtotal: $${subtotal.toFixed(2)}\n\n`;

    });


    const total =
        carrito.reduce(
            function (suma, producto) {

                return suma +
                    (
                        producto.precio *
                        producto.cantidad
                    );

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
    "MEGASERIGRAFICA: catálogo completo cargado correctamente."
);

console.log(
    "Total de productos:",
    productos.length
);
