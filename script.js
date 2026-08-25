/* =========================================================
   MEGASERIGRAFICA
   SCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const WHATSAPP_PEDIDOS = "525568089314";

const WHATSAPP_DISENO = "525574472298";


/* =========================================================
   PRODUCTOS DE EJEMPLO
   Posteriormente sustituiremos estos por TODO tu catálogo
========================================================= */

const productos = [

    {
        id: 1,
        nombre: "Tinta Ahulada Textil ECO",
        categoria: "textil",
        precio: 97,
        descripcion:
            "Tinta plastisol de viscosidad media para estampados textiles de alto volumen.",
        tipo: "Plastisol",
        color: "Blanco",
        unidad: "1 kg"
    },

    {
        id: 2,
        nombre: "Tinta Vinílica Mate",
        categoria: "vinil-mate",
        precio: 160,
        descripcion:
            "Tinta vinílica de acabado mate para plásticos y materiales lisos.",
        tipo: "Vinil Mate",
        color: "Blanco",
        unidad: "1 kg"
    },

    {
        id: 3,
        nombre: "Tinta Vinílica Brillante",
        categoria: "vinil-brillante",
        precio: 215,
        descripcion:
            "Tinta vinílica de acabado brillante para aplicaciones publicitarias.",
        tipo: "Vinil Brillante",
        color: "Blanco",
        unidad: "1 kg"
    },

    {
        id: 4,
        nombre: "Solvente Xilol",
        categoria: "solventes",
        precio: 65,
        descripcion:
            "Solvente para diferentes procesos de limpieza y preparación.",
        tipo: "Solvente",
        color: "",
        unidad: "1 litro"
    },

    {
        id: 5,
        nombre: "Sericrom",
        categoria: "emulsiones",
        precio: 175,
        descripcion:
            "Emulsión para preparación de marcos de serigrafía.",
        tipo: "Emulsión",
        color: "",
        unidad: "1 litro"
    },

    {
        id: 6,
        nombre: "Racero 20 cm",
        categoria: "raceros",
        precio: 78,
        descripcion:
            "Racero para serigrafía de 20 cm.",
        tipo: "Racero",
        color: "",
        unidad: "Pieza"
    },

    {
        id: 7,
        nombre: "Marco 40 × 50 — Malla T90",
        categoria: "marcos",
        precio: 95,
        descripcion:
            "Marco para serigrafía de 40 × 50 cm con malla T90.",
        tipo: "Marco",
        color: "",
        unidad: "Pieza"
    },

    {
        id: 8,
        nombre: "Adhesivo Spray Excelink",
        categoria: "otros",
        precio: 115,
        descripcion:
            "Adhesivo en spray para aplicaciones de serigrafía.",
        tipo: "Adhesivo",
        color: "",
        unidad: "270 g"
    }

];


/* =========================================================
   CARRITO
========================================================= */

let carrito = [];


/* =========================================================
   ELEMENTOS DEL DOM
========================================================= */

const productGrid =
    document.querySelector("#productGrid");

const cartDrawer =
    document.querySelector("#cartDrawer");

const cartItems =
    document.querySelector("#cartItems");

const cartTotal =
    document.querySelector("#cartTotal");

const cartCount =
    document.querySelector("#cartCount");

const cartButton =
    document.querySelector("#cartButton");

const cartClose =
    document.querySelector("#cartClose");

const overlay =
    document.querySelector("#overlay");


/* =========================================================
   MOSTRAR PRODUCTOS
========================================================= */

function mostrarProductos(lista = productos) {

    if (!productGrid) return;

    productGrid.innerHTML = "";

    if (lista.length === 0) {

        productGrid.innerHTML = `
            <div class="no-results show">

                <div class="no-results-icon">
                    !
                </div>

                <h3>
                    No encontramos productos
                </h3>

                <p>
                    Prueba con otra categoría.
                </p>

            </div>
        `;

        return;
    }


    lista.forEach(producto => {

        const card =
            document.createElement("article");

        card.className = "product-card";

        let visualClass = "visual-cyan";

        if (
            producto.categoria === "vinil-mate" ||
            producto.categoria === "vinil-brillante"
        ) {

            visualClass = "visual-magenta";

        }

        if (
            producto.categoria === "solventes" ||
            producto.categoria === "emulsiones"
        ) {

            visualClass = "visual-yellow";

        }


        card.innerHTML = `

            <div
                class="product-visual ${visualClass}"
                data-product-id="${producto.id}"
            >

                <span class="product-tag">
                    ${producto.tipo}
                </span>

                <div class="product-shape">

                    ${producto.color || producto.tipo}

                </div>

            </div>


            <div class="product-info">

                <h3>
                    ${producto.nombre}
                </h3>

                <p>
                    ${producto.descripcion}
                </p>


                <div class="product-bottom">

                    <span class="price">
                        $${producto.precio.toFixed(2)} MXN
                    </span>


                    <button
                        class="add-btn"
                        onclick="agregarAlCarrito(${producto.id})"
                        aria-label="Agregar al carrito"
                    >
                        +
                    </button>

                </div>

            </div>

        `;


        productGrid.appendChild(card);

    });

}


/* =========================================================
   AGREGAR AL CARRITO
========================================================= */

function agregarAlCarrito(id) {

    const producto =
        productos.find(
            producto => producto.id === id
        );


    if (!producto) return;


    const productoExistente =
        carrito.find(
            item => item.id === id
        );


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
   ELIMINAR PRODUCTO
========================================================= */

function eliminarDelCarrito(id) {

    carrito =
        carrito.filter(
            item => item.id !== id
        );


    actualizarCarrito();

}


/* =========================================================
   CAMBIAR CANTIDAD
========================================================= */

function cambiarCantidad(id, cambio) {

    const item =
        carrito.find(
            producto => producto.id === id
        );


    if (!item) return;


    item.cantidad += cambio;


    if (item.cantidad <= 0) {

        eliminarDelCarrito(id);

        return;

    }


    actualizarCarrito();

}


/* =========================================================
   ACTUALIZAR CARRITO
========================================================= */

function actualizarCarrito() {

    if (!cartItems) return;


    cartItems.innerHTML = "";


    if (carrito.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    +
                </div>

                <h3>
                    Tu carrito está vacío
                </h3>

                <p>
                    Agrega productos para comenzar tu pedido.
                </p>

            </div>

        `;

    }


    carrito.forEach(item => {

        const subtotal =
            item.precio * item.cantidad;


        const elemento =
            document.createElement("div");


        elemento.className =
            "cart-item";


        elemento.innerHTML = `

            <div class="cart-item-info">

                <strong>
                    ${item.nombre}
                </strong>

                <small>
                    $${item.precio.toFixed(2)} MXN
                </small>

            </div>


            <div class="cart-item-controls">

                <button
                    onclick="cambiarCantidad(${item.id}, -1)"
                >
                    −
                </button>

                <span>
                    ${item.cantidad}
                </span>

                <button
                    onclick="cambiarCantidad(${item.id}, 1)"
                >
                    +
                </button>

            </div>


            <strong class="cart-item-total">

                $${subtotal.toFixed(2)}

            </strong>


            <button
                class="cart-remove"
                onclick="eliminarDelCarrito(${item.id})"
                aria-label="Eliminar producto"
            >
                ×
            </button>

        `;


        cartItems.appendChild(elemento);

    });


    const total =
        carrito.reduce(
            (suma, item) =>
                suma +
                item.precio *
                item.cantidad,
            0
        );


    const cantidad =
        carrito.reduce(
            (suma, item) =>
                suma +
                item.cantidad,
            0
        );


    if (cartTotal) {

        cartTotal.textContent =
            `$${total.toFixed(2)} MXN`;

    }


    if (cartCount) {

        cartCount.textContent =
            cantidad;

        cartCount.style.display =
            cantidad > 0
                ? "flex"
                : "none";

    }

}


/* =========================================================
   ABRIR CARRITO
========================================================= */

function abrirCarrito() {

    if (!cartDrawer) return;

    cartDrawer.classList.add("open");

    if (overlay) {

        overlay.classList.add("open");

    }

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CERRAR CARRITO
========================================================= */

function cerrarCarrito() {

    if (!cartDrawer) return;

    cartDrawer.classList.remove("open");

    if (overlay) {

        overlay.classList.remove("open");

    }

    document.body.style.overflow =
        "";

}


/* =========================================================
   PEDIDO POR WHATSAPP
========================================================= */

function pedirPorWhatsApp() {

    if (carrito.length === 0) {

        alert(
            "Agrega al menos un producto al carrito."
        );

        return;

    }


    let mensaje =
        "Hola, Megaserigrafica. 👋\n\n";

    mensaje +=
        "Me gustaría realizar el siguiente pedido:\n\n";


    carrito.forEach(item => {

        const subtotal =
            item.precio *
            item.cantidad;


        mensaje +=
            `• ${item.nombre}\n`;

        mensaje +=
            `  Cantidad: ${item.cantidad}\n`;

        mensaje +=
            `  Precio: $${item.precio.toFixed(2)}\n`;

        mensaje +=
            `  Subtotal: $${subtotal.toFixed(2)}\n\n`;

    });


    const total =
        carrito.reduce(
            (suma, item) =>
                suma +
                item.precio *
                item.cantidad,
            0
        );


    mensaje +=
        `TOTAL: $${total.toFixed(2)} MXN\n\n`;

    mensaje +=
        "¿Me pueden confirmar disponibilidad y forma de entrega?";


    const url =
        `https://wa.me/${WHATSAPP_PEDIDOS}?text=${encodeURIComponent(mensaje)}`;


    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   FILTROS
========================================================= */

function configurarFiltros() {

    const botones =
        document.querySelectorAll(
            ".category-button"
        );


    botones.forEach(boton => {

        boton.addEventListener(
            "click",
            () => {

                botones.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                boton.classList.add(
                    "active"
                );


                const categoria =
                    boton.dataset.category;


                if (
                    !categoria ||
                    categoria === "todos"
                ) {

                    mostrarProductos();

                    return;

                }


                const filtrados =
                    productos.filter(
                        producto =>
                            producto.categoria ===
                            categoria
                    );


                mostrarProductos(
                    filtrados
                );

            }
        );

    });

}


/* =========================================================
   MENÚ MÓVIL
========================================================= */

function configurarMenuMovil() {

    const menuButton =
        document.querySelector(
            ".menu-button"
        );


    const mobileMenu =
        document.querySelector(
            ".mobile-menu"
        );


    const mobileClose =
        document.querySelector(
            ".mobile-close"
        );


    if (!menuButton || !mobileMenu)
        return;


    menuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.add(
                "open"
            );

        }
    );


    if (mobileClose) {

        mobileClose.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "open"
                );

            }
        );

    }


    mobileMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "open"
                    );

                }
            );

        });

}


/* =========================================================
   BUSCADOR
========================================================= */

function configurarBuscador() {

    const searchButton =
        document.querySelector(
            "#searchButton"
        );


    const searchPanel =
        document.querySelector(
            "#searchPanel"
        );


    const searchInput =
        document.querySelector(
            "#searchInput"
        );


    if (!searchButton || !searchPanel)
        return;


    searchButton.addEventListener(
        "click",
        () => {

            searchPanel.classList.toggle(
                "open"
            );


            if (
                searchPanel.classList.contains(
                    "open"
                )
            ) {

                setTimeout(
                    () => {

                        searchInput?.focus();

                    },
                    100
                );

            }

        }
    );


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                const texto =
                    searchInput.value
                        .toLowerCase()
                        .trim();


                if (!texto) {

                    mostrarProductos();

                    return;

                }


                const resultados =
                    productos.filter(
                        producto =>

                            producto.nombre
                                .toLowerCase()
                                .includes(texto)

                            ||

                            producto.descripcion
                                .toLowerCase()
                                .includes(texto)

                            ||

                            producto.tipo
                                .toLowerCase()
                                .includes(texto)

                    );


                mostrarProductos(
                    resultados
                );

            }
        );

    }

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

function configurarScroll() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const id =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !id ||
                        id === "#"
                    )
                        return;


                    const elemento =
                        document.querySelector(
                            id
                        );


                    if (!elemento)
                        return;


                    event.preventDefault();


                    elemento.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });

}


/* =========================================================
   EVENTOS DEL CARRITO
========================================================= */

if (cartButton) {

    cartButton.addEventListener(
        "click",
        abrirCarrito
    );

}


if (cartClose) {

    cartClose.addEventListener(
        "click",
        cerrarCarrito
    );

}


if (overlay) {

    overlay.addEventListener(
        "click",
        cerrarCarrito
    );

}


/* =========================================================
   BOTÓN WHATSAPP DEL CARRITO
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                "#whatsappOrder"
            )
        ) {

            pedirPorWhatsApp();

        }

    }
);


/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        mostrarProductos();

        configurarFiltros();

        configurarMenuMovil();

        configurarBuscador();

        configurarScroll();

        actualizarCarrito();

    }
);
