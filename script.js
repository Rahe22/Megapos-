let totalVenta = 0;
let carrito = [];
let touchStartX = 0;

const inventarioEstatico = {
    'playeras': [
        { nombre: 'Articulo demo1', precio: 50 },
        { nombre: 'Articulo demo2', precio: 100 }
    ],
    'tintas': [
        { nombre: 'Articulo demo3', precio: 50 }
    ]
};

function irAVentas() {
    document.getElementById('pantalla-menu').classList.remove('activa');
    document.getElementById('pantalla-ventas').classList.add('activa');
    document.getElementById('titulo-header').innerText = "Venta";
}

function irAMenu() {
    document.getElementById('pantalla-ventas').classList.remove('activa');
    document.getElementById('pantalla-menu').classList.add('activa');
    document.getElementById('titulo-header').innerText = "Bienvenido";
}

function mostrarProductos(cat) {
    document.getElementById('vista-categorias').style.display = "none";
    document.getElementById('vista-articulos').style.display = "block";
    const contenedor = document.getElementById('contenedor-items');
    contenedor.innerHTML = "";
    inventarioEstatico[cat].forEach(p => {
        contenedor.innerHTML += `<div class="btn-articulo" onclick="agregarArticulo('${p.nombre}', ${p.precio})"><span>${p.nombre}</span><span style="color:red">$${p.precio}</span></div>`;
    });
}

function volverACategorias() {
    document.getElementById('vista-categorias').style.display = "block";
    document.getElementById('vista-articulos').style.display = "none";
}

function agregarArticulo(nombre, precio) {
    const existe = carrito.find(i => i.nombre === nombre);
    if (existe) existe.cantidad++;
    else carrito.push({ id: Date.now(), nombre, precio, cantidad: 1 });
    renderizarTicket();
}

function renderizarTicket() {
    const lista = document.getElementById('lista-ticket');
    lista.innerHTML = "";
    totalVenta = 0;
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        totalVenta += subtotal;
        const wrapper = document.createElement('div');
        wrapper.className = 'item-ticket-wrapper';
        wrapper.innerHTML = `
            <div class="btn-eliminar" onclick="borrarDirecto(${item.id})">Borrar</div>
            <div class="item-ticket" ontouchstart="iniciarToque(event)" ontouchend="finalizarToque(event, this)">
                <div><b>${item.nombre}</b><div class="controles-cantidad">
                    <button onclick="event.stopPropagation(); cambiarCantidad(${item.id}, -1)">-</button>
                    <span>${item.cantidad}</span>
                    <button onclick="event.stopPropagation(); cambiarCantidad(${item.id}, 1)">+</button>
                </div></div>
                <span style="color:red; font-weight:bold">$${subtotal.toFixed(2)}</span>
            </div>`;
        lista.appendChild(wrapper);
    });
    document.getElementById('txt-total').innerText = '$' + totalVenta.toFixed(2);
}

function cambiarCantidad(id, delta) {
    const item = carrito.find(i => i.id === id);
    if (item) {
        item.cantidad += delta;
        if (item.cantidad <= 0) carrito = carrito.filter(i => i.id !== id);
    }
    renderizarTicket();
}

function iniciarToque(e) { touchStartX = e.touches[0].clientX; }
function finalizarToque(e, el) {
    let touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) el.classList.add('deslizado');
    else if (touchEndX - touchStartX > 50) el.classList.remove('deslizado');
}

function borrarDirecto(id) {
    carrito = carrito.filter(i => i.id !== id);
    renderizarTicket();
}

function cobrar() {
    alert("Venta completada");
    carrito = [];
    renderizarTicket();
    irAMenu();
}
