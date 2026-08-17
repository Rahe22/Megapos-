
/* =========================================================
   MEGASERIGRAFICA
   CYBER-CRAFT ECOMMERCE
   JavaScript
========================================================= */


/* =========================================================
   PRODUCTOS
========================================================= */

const products = [

  {
    id: 1,
    name: "Plastisol Pro — Blanco",
    category: "textile",
    price: 285,
    desc: "Tinta plastisol de alta opacidad para prendas claras.",
    tag: "PLASTISOL",
    accent: "cyan",

    variants: {
      Fondo: [
        "Claro",
        "Oscuro"
      ],

      Curado: [
        "160°C",
        "170°C"
      ]
    }
  },


  {
    id: 2,
    name: "Plastisol Pro — Negro",
    category: "textile",
    price: 295,
    desc: "Negro intenso para máxima definición y cobertura.",
    tag: "PLASTISOL",
    accent: "magenta",

    variants: {
      Fondo: [
        "Claro",
        "Oscuro"
      ],

      Curado: [
        "160°C",
        "170°C"
      ]
    }
  },


  {
    id: 3,
    name: "Base Agua — Blanco",
    category: "textile",
    price: 260,
    desc: "Acabado suave, ideal para textiles de moda.",
    tag: "BASE AGUA",
    accent: "yellow",

    variants: {
      Fondo: [
        "Claro",
        "Oscuro"
      ],

      Curado: [
        "150°C",
        "160°C"
      ]
    }
  },


  {
    id: 4,
    name: "Vinílica Mate",
    category: "vinyl",
    price: 220,
    desc: "Acabado mate uniforme para aplicaciones técnicas.",
    tag: "VINÍLICA",
    accent: "magenta",

    variants: {
      Acabado: [
        "Mate",
        "Brillante"
      ]
    }
  },


  {
    id: 5,
    name: "Vinílica Brillante",
    category: "vinyl",
    price: 235,
    desc: "Acabado brillante con alta definición.",
    tag: "VINÍLICA",
    accent: "cyan",

    variants: {
      Acabado: [
        "Mate",
        "Brillante"
      ]
    }
  },


  {
    id: 6,
    name: "Removedor de Emulsión",
    category: "chemical",
    price: 185,
    desc: "Químico profesional para recuperar tus marcos.",
    tag: "QUÍMICO",
    accent: "yellow",

    variants: {
      Presentación: [
        "1 L",
        "4 L"
      ]
    }
  },


  {
    id: 7,
    name: "Marco Aluminio",
    category: "frame",
    price: 420,
    desc: "Marco profesional con selección de malla y medida.",
    tag: "MARCO",
    accent: "cyan",

    variants: {
      Malla: [
        "43",
        "62",
        "77",
        "90",
        "120"
      ],

      Material: [
        "Aluminio",
        "Madera"
      ]
    }
  },


  {
    id: 8,
    name: "Rasero Pro",
    category: "squeegee",
    price: 390,
    desc: "Rasero profesional con selección de dureza.",
    tag: "RASERO",
    accent: "magenta",

    variants: {
      Dureza: [
        "65 Shore A",
        "75 Shore A",
        "85 Shore A"
      ],

      Medida: [
        "20 cm",
        "30 cm",
        "40 cm"
      ]
    }
  }

];


/* =========================================================
   ESTADO
========================================================= */

let activeCategory = "all";

let cart = JSON.parse(
  localStorage.getItem("megaCart") || "[]"
);

let selectedProduct = null;

let selectedVariants = {};


/* =========================================================
   HELPERS
========================================================= */

const $ = (id) => {

  return document.getElementById(id);

};


function money(number) {

  return new Intl.NumberFormat(
    "es-MX",
    {
      style: "currency",
      currency: "MXN"
    }
  ).format(number);

}


/* =========================================================
   PRODUCTOS
========================================================= */

function renderProducts() {

  const searchInput = $("searchInput");

  const search = searchInput
    ? searchInput.value.toLowerCase().trim()
    : "";


  let list = products
    .filter((product) => {

      return (
        activeCategory === "all" ||
        product.category === activeCategory
      );

    })
    .filter((product) => {

      return `${product.name}
              ${product.desc}
              ${product.tag}`
        .toLowerCase()
        .includes(search);

    });


  const sort = $("sortSelect").value;


  if (sort === "priceAsc") {

    list.sort(
      (a, b) => a.price - b.price
    );

  }


  if (sort === "priceDesc") {

    list.sort(
      (a, b) => b.price - a.price
    );

  }


  $("resultCount").textContent =
    `${list.length} producto${list.length !== 1 ? "s" : ""}`;


  $("productsGrid").innerHTML =
    list.map(productCard).join("");

}


/* =========================================================
   TARJETA DE PRODUCTO
========================================================= */

function productCard(product) {

  let shape = "product-shape";


  if (product.category === "frame") {

    shape = "frame-shape";

  }


  if (product.category === "squeegee") {

    shape = "squeegee-shape";

  }


  if (product.category === "chemical") {

    shape = "chemical-shape";

  }


  let shapeText = "INK";


  if (product.category === "frame") {

    shapeText = "";

  }


  if (product.category === "squeegee") {

    shapeText = "";

  }


  if (product.category === "chemical") {

    shapeText = "";

  }


  return `

    <article class="product-card">


      <div
        class="product-visual visual-${product.accent}"
        data-open="${product.id}"
      >

        <span class="product-tag">

          ${product.tag}

        </span>


        <div class="${shape}">

          ${shapeText}

        </div>

      </div>


      <div class="product-info">


        <h3>

          ${product.name}

        </h3>


        <p>

          ${product.desc}

        </p>


        <div class="product-bottom">


          <strong class="price">

            ${money(product.price)}

          </strong>


          <button
            class="add-btn"
            data-add="${product.id}"
            aria-label="Agregar ${product.name}"
          >

            +

          </button>


        </div>

      </div>


    </article>

  `;

}


/* =========================================================
   GUARDAR CARRITO
========================================================= */

function saveCart() {

  localStorage.setItem(
    "megaCart",
    JSON.stringify(cart)
  );

  renderCart();

  updateCount();

}


/* =========================================================
   CONTADOR
========================================================= */

function updateCount() {

  const totalItems =
    cart.reduce(
      (total, item) =>
        total + item.qty,
      0
    );


  $("cartCount").textContent =
    totalItems;

}


/* =========================================================
   RENDER CARRITO
========================================================= */

function renderCart() {

  const cartContainer =
    $("cartItems");


  if (!cart.length) {

    cartContainer.innerHTML = `

      <div class="empty-cart">

        Tu carrito está vacío.

        <br><br>

        Agrega materiales
        para comenzar.

      </div>

    `;


    $("cartTotal").textContent =
      money(0);


    return;

  }


  cartContainer.innerHTML =

    cart.map(
      (item, index) => `

      <div class="cart-item">


        <div class="mini-visual">

          M

        </div>


        <div>


          <h4>

            ${item.name}

          </h4>


          <small>

            ${money(item.price)}
            c/u

          </small>


          <div class="qty">


            <button
              data-dec="${index}"
            >

              −

            </button>


            <span>

              ${item.qty}

            </span>


            <button
              data-inc="${index}"
            >

              +

            </button>


          </div>


        </div>


        <button
          class="remove"
          data-remove="${index}"
        >

          Eliminar

        </button>


      </div>

    `
    ).join("");


  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
        item.qty,
      0
    );


  $("cartTotal").textContent =
    money(total);

}


/* =========================================================
   AGREGAR AL CARRITO
========================================================= */

function addToCart(
  product,
  variants = {}
) {

  const variantText =

    Object.entries(variants)

      .map(
        ([key, value]) =>
          `${key}: ${value}`
      )

      .join(" · ");


  const key =
    product.id +
    "|" +
    variantText;


  const found =
    cart.find(
      (item) =>
        item.key === key
    );


  if (found) {

    found.qty++;

  }

  else {

    cart.push({

      key,

      id: product.id,

      name:
        product.name +
        (
          variantText
            ? ` — ${variantText}`
            : ""
        ),

      price: product.price,

      qty: 1

    });

  }


  saveCart();

  openCart();

}


/* =========================================================
   ABRIR CARRITO
========================================================= */

function openCart() {

  $("cartDrawer")
    .classList
    .add("open");


  $("overlay")
    .classList
    .add("show");

}


/* =========================================================
   CERRAR CARRITO
========================================================= */

function closeCart() {

  $("cartDrawer")
    .classList
    .remove("open");


  $("overlay")
    .classList
    .remove("show");

}


/* =========================================================
   MODAL DE PRODUCTO
========================================================= */

function openModal(id) {

  selectedProduct =
    products.find(
      product =>
        product.id === id
    );


  selectedVariants = {};


  const product =
    selectedProduct;


  $("modalContent").innerHTML = `

    <div class="modal-product">


      <div
        class="
          product-visual
          visual-${product.accent}
        "
      >

        <div class="product-shape">

          INK

        </div>

      </div>


      <div>


        <p class="eyebrow">

          <span></span>

          ${product.tag}

        </p>


        <h2>

          ${product.name}

        </h2>


        <p>

          ${product.desc}

        </p>


        ${
          Object.entries(
            product.variants || {}
          )
          .map(
            ([key, values]) => `

              <div class="variant-group">


                <label>

                  ${key}

                </label>


                <div
                  class="variant-buttons"
                >

                  ${values.map(
                    (value, index) => `

                      <button
                        class="
                          ${index === 0
                            ? "active"
                            : ""
                          }
                        "
                        data-variant="${key}"
                        data-value="${value}"
                      >

                        ${value}

                      </button>

                  `).join("")}

                </div>

              </div>

            `
          ).join("")
        }


        <strong
          class="price"
          style="
            display:block;
            margin-top:20px;
          "
        >

          ${money(product.price)}

        </strong>


        <button
          class="
            btn
            btn-primary
            modal-add
          "
          id="modalAdd"
        >

          Agregar al carrito

          <span>
            ＋
          </span>

        </button>


      </div>


    </div>

  `;


  Object.entries(
    product.variants || {}
  ).forEach(
    ([key, values]) => {

      selectedVariants[key] =
        values[0];

    }
  );


  $("productModal")
    .classList
    .add("show");

}


/* =========================================================
   CERRAR MODAL
========================================================= */

function closeModal() {

  $("productModal")
    .classList
    .remove("show");

}


/* =========================================================
   EVENTOS GENERALES
========================================================= */

document.addEventListener(
  "click",
  (event) => {


    /* -------------------------
       AGREGAR PRODUCTO
    ------------------------- */

    const addButton =
      event.target.closest(
        "[data-add]"
      );


    if (addButton) {

      const product =
        products.find(
          product =>
            product.id ==
            addButton.dataset.add
        );


      addToCart(product);

      return;

    }


    /* -------------------------
       ABRIR PRODUCTO
    ------------------------- */

    const productVisual =
      event.target.closest(
        "[data-open]"
      );


    if (productVisual) {

      openModal(
        Number(
          productVisual.dataset.open
        )
      );

      return;

    }


    /* -------------------------
       CATEGORÍA
    ------------------------- */

    const categoryButton =
      event.target.closest(
        ".category"
      );


    if (categoryButton) {

      document
        .querySelectorAll(
          ".category"
        )
        .forEach(
          button =>
            button.classList
              .remove("active")
        );


      categoryButton
        .classList
        .add("active");


      activeCategory =
        categoryButton.dataset.category;


      renderProducts();

      return;

    }


    /* -------------------------
       VARIANTES
    ------------------------- */

    const variantButton =
      event.target.closest(
        "[data-variant]"
      );


    if (variantButton) {

      const variantName =
        variantButton.dataset.variant;


      document
        .querySelectorAll(
          `[data-variant="${variantName}"]`
        )
        .forEach(
          button =>
            button.classList
              .remove("active")
        );


      variantButton
        .classList
        .add("active");


      selectedVariants[
        variantName
      ] =
        variantButton.dataset.value;


      return;

    }


    /* -------------------------
       AGREGAR DESDE MODAL
    ------------------------- */

    if (
      event.target.id ===
      "modalAdd"
    ) {

      addToCart(
        selectedProduct,
        selectedVariants
      );

      closeModal();

      return;

    }


    /* -------------------------
       AUMENTAR CANTIDAD
    ------------------------- */

    if (
      event.target.matches(
        "[data-inc]"
      )
    ) {

      const index =
        Number(
          event.target.dataset.inc
        );


      cart[index].qty++;

      saveCart();

      return;

    }


    /* -------------------------
       DISMINUIR CANTIDAD
    ------------------------- */

    if (
      event.target.matches(
        "[data-dec]"
      )
    ) {

      const index =
        Number(
          event.target.dataset.dec
        );


      cart[index].qty--;


      if (
        cart[index].qty <= 0
      ) {

        cart.splice(
          index,
          1
        );

      }


      saveCart();

      return;

    }


    /* -------------------------
       ELIMINAR
    ------------------------- */

    if (
      event.target.matches(
        "[data-remove]"
      )
    ) {

      const index =
        Number(
          event.target.dataset.remove
        );


      cart.splice(
        index,
        1
      );


      saveCart();

      return;

    }

  }
);


/* =========================================================
   CARRITO
========================================================= */

$("cartBtn").onclick =
  openCart;


$("closeCart").onclick =
  closeCart;


$("overlay").onclick =
  closeCart;


/* =========================================================
   MODAL
========================================================= */

$("closeModal").onclick =
  closeModal;


$("productModal").addEventListener(
  "click",
  (event) => {

    if (
      event.target.id ===
      "productModal"
    ) {

      closeModal();

    }

  }
);


/* =========================================================
   VACIAR CARRITO
========================================================= */

$("clearCart").onclick =
  () => {

    cart = [];

    saveCart();

  };


/* =========================================================
   ORDENAR PRODUCTOS
========================================================= */

$("sortSelect").onchange =
  renderProducts;


/* =========================================================
   BUSCADOR
========================================================= */

$("searchBtn").onclick =
  () => {

    $("searchBox")
      .classList
      .toggle("hidden");


    $("searchInput").focus();

  };


$("searchInput").oninput =
  renderProducts;


/* =========================================================
   FILTROS MOBILE
========================================================= */

$("mobileFilterBtn").onclick =
  () => {

    const filters =
      document.querySelector(
        ".filters-panel"
      );


    filters.classList.toggle(
      "mobile-open"
    );

  };


/* =========================================================
   SERVICIOS DE DISEÑO
========================================================= */

document
  .querySelectorAll(
    ".service"
  )
  .forEach(
    button => {

      button.onclick =
        () => {

          document
            .querySelectorAll(
              ".service"
            )
            .forEach(
              item =>
                item.classList
                  .remove("active")
            );


          button
            .classList
            .add("active");

        };

    }
  );


/* =========================================================
   SUBIR ARCHIVO
========================================================= */

$("fileInput").onchange =
  (event) => {

    const file =
      event.target.files[0];


    if (!file) {

      $("fileName")
        .textContent =
        "Ningún archivo seleccionado";

      return;

    }


    $("fileName")
      .textContent =
      file.name;

  };


/* =========================================================
   WHATSAPP
========================================================= */

$("whatsappBtn").onclick =
  () => {


    if (!cart.length) {

      alert(
        "Agrega al menos un producto al carrito."
      );

      return;

    }


    const delivery =
      document.querySelector(
        'input[name="delivery"]:checked'
      ).value;


    const lines =
      cart
        .map(
          item =>

            `• ${item.qty} × ${item.name} — ${money(
              item.price * item.qty
            )}`

        )
        .join("\n");


    const total =
      cart.reduce(
        (sum, item) =>
          sum +
          item.price *
          item.qty,
        0
      );


    const message =

      `Hola Megaserigrafica, quiero realizar este pedido:

${lines}

Total: ${money(total)}

Entrega: ${delivery}

¿Me pueden confirmar disponibilidad y forma de pago?`;


    /*
      ==========================================
      IMPORTANTE

      CAMBIA ESTE NÚMERO POR EL WHATSAPP REAL
      DE MEGASERIGRAFICA.

      FORMATO:

      52 + LADA + NÚMERO

      SIN +, ESPACIOS NI GUIONES.

      EJEMPLO:

      525536557693
      ==========================================
    */


    const phone =
      "525500000000";


    const whatsappURL =
      `https://wa.me/${phone}?text=${encodeURIComponent(
        message
      )}`;


    window.open(
      whatsappURL,
      "_blank"
    );

  };


/* =========================================================
   AÑO DEL FOOTER
========================================================= */

$("year").textContent =
  new Date().getFullYear();


/* =========================================================
   INICIALIZAR
========================================================= */

renderProducts();

renderCart();

updateCount();
