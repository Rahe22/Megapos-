/* =========================================================
   MEGASERIGRAFICA
   SCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const whatsappPedidos = "525568089314";
const whatsappDiseno = "525574472298";


/* =========================================================
   PRODUCTOS

   AQUÍ PODREMOS AGREGAR TODOS TUS PRODUCTOS.

   Cuando tengas las fotos simplemente cambia:

   imagen: ""

   por ejemplo:

   imagen: "images/blanco-op.jpg"

========================================================= */

const productos = [

    /* =====================
       TINTAS TEXTILES
    ====================== */

    {
        id: 1,
        categoria: "textil",
        nombre: "Tinta Ahulada Textil ECO - Blanco OP",
        precio: 97,
        descripcion: "Plastisol base PVC, alto cubrimiento y excelente resistencia.",
        imagen: ""
    },

    {
        id: 2,
        categoria: "textil",
        nombre: "Tinta Ahulada Textil ECO - Negro",
        precio: 86,
        descripcion: "Acabado ahulado tradicional, flexible y resistente.",
        imagen: ""
    },

    {
        id: 3,
        categoria: "textil",
        nombre: "Tinta Ahulada Textil ECO - Rojo Laura",
        precio: 92,
        descripcion: "Color intenso para estampados textiles profesionales.",
        imagen: ""
    },

    {
        id: 4,
        categoria: "textil",
        nombre: "Tinta Ahulada Textil ECO - Azul Marino",
        precio: 92,
        descripcion: "Tinta textil plastisol de viscosidad media.",
        imagen: ""
    },

    {
        id: 5,
        categoria: "textil",
        nombre: "Base Opaca",
        precio: 86,
        descripcion: "Base para hacer rendir más la tinta con acabado opaco.",
        imagen: ""
    },

    {
        id: 6,
        categoria: "textil",
        nombre: "Base Nova",
        precio: 130,
        descripcion: "Base para modificar el tacto de la tinta.",
        imagen: ""
    },

    {
        id: 7,
        categoria: "textil",
        nombre: "Base BTE",
        precio: 130,
        descripcion: "Base para aumentar el rendimiento y obtener acabado brillante.",
        imagen: ""
    },

    {
        id: 8,
        categoria: "textil",
        nombre: "Base Cristal",
        precio: 150,
        descripcion: "Base transparente con acabado brillante y elasticidad.",
        imagen: ""
    },

    {
        id: 9,
        categoria: "textil",
        nombre: "Aditivo HD",
        precio: 285,
        descripcion: "Aditivo de alta densidad para crear relieve.",
        imagen: ""
    },

    {
        id: 10,
        categoria: "textil",
        nombre: "Tinta Ahulada Fluorescente",
        precio: 130,
        descripcion: "Tinta textil fluorescente para estampados de alto impacto.",
        imagen: ""
    },


    /* =====================
       TINTAS VINÍLICAS
    ====================== */

    {
        id: 11,
        categoria: "vinil",
        nombre: "Tinta Vinílica Mate - Blanco",
        precio: 160,
        descripcion: "Tinta líquida base solvente para plásticos y superficies lisas.",
        imagen: ""
    },

    {
        id: 12,
        categoria: "vinil",
        nombre: "Tinta Vinílica Mate - Negro",
        precio: 150,
        descripcion: "Acabado mate y excelente adherencia.",
        imagen: ""
    },

    {
        id: 13,
        categoria: "vinil",
        nombre: "Tinta Vinílica Mate - Barniz",
        precio: 170,
        descripcion: "Barniz para acabados vinílicos.",
        imagen: ""
    },

    {
        id: 14,
        categoria: "vinil",
        nombre: "Tinta Vinílica Brillante - Blanco",
        precio: 215,
        descripcion: "Tinta vinílica con acabado brillante.",
        imagen: ""
    },

    {
        id: 15,
        categoria: "vinil",
        nombre: "Tinta Vinílica Brillante - Negro",
        precio: 200,
        descripcion: "Acabado brillante y alta adherencia.",
        imagen: ""
    },

    {
        id: 16,
        categoria: "vinil",
        nombre: "Tinta Vinílica Brillante - Magenta",
        precio: 280,
        descripcion: "Color intenso con acabado brillante.",
        imagen: ""
    },


    /* =====================
       QUÍMICOS
    ====================== */

    {
        id: 17,
        categoria: "quimicos",
        nombre: "Solvente Xilol",
        precio: 65,
        descripcion: "Solvente para procesos de serigrafía.",
        imagen: ""
    },

    {
        id: 18,
        categoria: "quimicos",
        nombre: "Solvente Vinil",
        precio: 88,
        descripcion: "Solvente especializado para tinta vinílica.",
        imagen: ""
    },

    {
        id: 19,
        categoria: "quimicos",
        nombre: "Isoforona",
        precio: 170,
        descripcion: "Solvente especializado para aplicaciones técnicas.",
        imagen: ""
    },

    {
        id: 20,
        categoria: "quimicos",
        nombre: "Emulsión Sericrom",
        precio: 175,
        descripcion: "Emulsión para preparación de mallas.",
        imagen: ""
    },

    {
        id: 21,
        categoria: "quimicos",
        nombre: "Sericlin",
        precio: 253,
        descripcion: "Producto para recuperación y limpieza.",
        imagen: ""
    },

    {
        id: 22,
        categoria: "quimicos",
        nombre: "Seripasta",
        precio: 159,
        descripcion: "Producto para recuperación de marcos.",
        imagen: ""
    },


    /* =====================
       HERRAMIENTAS
    ====================== */

    {
        id: 23,
        categoria: "herramientas",
        nombre: "Racero 20 cm",
        precio: 78,
        descripcion: "Racero profesional para serigrafía.",
        imagen: ""
    },

    {
        id: 24,
        categoria: "herramientas",
        nombre: "Racero 30 cm",
        precio: 120,
        descripcion: "Racero profesional para impresión.",
        imagen: ""
    },

    {
        id: 25,
        categoria: "herramientas",
        nombre: "Marco 20 x 30 cm",
        precio: 53,
        descripcion: "Marco para serigrafía. Precio según tipo de malla.",
        imagen: ""
    },

    {
        id: 26,
        categoria: "herramientas",
        nombre: "Marco 30 x 40 cm",
        precio: 65,
        descripcion: "Marco para serigrafía. Precio según tipo de malla.",
        imagen: ""
    },

    {
        id: 27,
        categoria: "herramientas",
        nombre: "Bisagras para Serigrafía",
        precio: 205,
        descripcion: "Par de bisagras para mesa de serigrafía.",
        imagen: ""
    }

];



/* =========================================================
   ESTADO
========================================================= */

let carrito = [];



/* =========================================================
   INICIO
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    mostrarTodosProductos();

});



/* =========================================================
   NAVEGACIÓN ENTRE SECCIONES
========================================================= */

function mostrarSeccion(id) {

    const secciones =
        document.querySelectorAll(".page-section");


    secciones.forEach(function (seccion) {

        seccion.classList.remove("active");

    });


    const seccionActiva =
        document.getElementById(id);


    if (seccionActiva) {

        seccionActiva.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =========================================================
   PRODUCTOS
========================================================= */

function mostrarProductos(listaProductos) {

    const productGrid =
        document.getElementById("productGrid");


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
                >
            `;

        } else {

            imagenHTML = `
                <div class="product-placeholder">
                    FOTO
                </div>
            `;

        }


        tarjeta.innerHTML = `

            <div class="product-image">

                ${imagenHTML}

            </div>


            <div class="product-info">

                <h3>
                    ${producto.nombre}
                </h3>


                <p>
                    ${producto.descripcion}
                </p>


                <div class="product-bottom">

                    <span class="product-price">
                        $${producto.precio.toFixed(2)}
                    </span>


                    <button
                        class="add-button"
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


    const categoryTitle =
        document.getElementById("categoryTitle");


    const nombresCategorias = {

        textil:
            "Tintas Textiles",

        vinil:
            "Tintas Vinílicas",

        quimicos:
            "Químicos y Recuperación",

        herramientas:
            "Herramientas y Marcos"

    };


    categoryTitle.textContent =
        nombresCategorias[categoria];


    mostrarProductos(filtrados);


    setTimeout(function () {

        document
            .getElementById("productGrid")
            .scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

    }, 100);

}



function mostrarTodosProductos() {

    const categoryTitle =
        document.getElementById("categoryTitle");


    categoryTitle.textContent =
        "Productos destacados";


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
        return;
    }


    const productoExistente =
        carrito.find(function (item) {

            return item.id === idProducto;

        });


    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({

            ...producto,

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
        document.getElementById("cartItems");


    const cartCount =
        document.getElementById("cartCount");


    const cartTotal =
        document.getElementById("cartTotal");


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

                    $${producto.precio.toFixed(2)}

                </div>


                <div class="cart-item-actions">


                    <div class="quantity-control">

                        <button
                            onclick="cambiarCantidad(${producto.id}, -1)"
                        >
                            −
                        </button>


                        <span>

                            ${producto.cantidad}

                        </span>


                        <button
                            onclick="cambiarCantidad(${producto.id}, 1)"
                        >
                            +

                        </button>

                    </div>


                    <button
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
        carrito.reduce(function (total, producto) {

            return total + producto.cantidad;

        }, 0);



    const precioTotal =
        carrito.reduce(function (total, producto) {

            return total +
                (
                    producto.precio *
                    producto.cantidad
                );

        }, 0);



    cartCount.textContent =
        cantidadTotal;


    cartTotal.textContent =
        `$${precioTotal.toFixed(2)} MXN`;


    if (cantidadTotal > 0) {

        cartCount.style.display =
            "flex";

    } else {

        cartCount.style.display =
            "none";

    }

}



/* =========================================================
   CANTIDAD
========================================================= */

function cambiarCantidad(idProducto, cambio) {

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
   ABRIR / CERRAR CARRITO
========================================================= */

function abrirCarrito() {

    document
        .getElementById("cartDrawer")
        .classList
        .add("open");


    document
        .getElementById("overlay")
        .classList
        .add("open");

}



function cerrarCarrito() {

    document
        .getElementById("cartDrawer")
        .classList
        .remove("open");


    document
        .getElementById("overlay")
        .classList
        .remove("open");

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
        "Hola, quiero realizar el siguiente pedido en Megaserigrafica:%0A%0A";


    carrito.forEach(function (producto) {

        const subtotal =
            producto.precio *
            producto.cantidad;


        mensaje +=
            `• ${producto.nombre}%0A` +
            `Cantidad: ${producto.cantidad}%0A` +
            `Subtotal: $${subtotal.toFixed(2)}%0A%0A`;

    });


    const total =
        carrito.reduce(function (suma, producto) {

            return suma +
                (
                    producto.precio *
                    producto.cantidad
                );

        }, 0);


    mensaje +=
        `TOTAL: $${total.toFixed(2)} MXN%0A%0A` +
        "Quedo atento a la confirmación de disponibilidad.";


    const url =
        `https://wa.me/${whatsappPedidos}?text=${mensaje}`;


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
