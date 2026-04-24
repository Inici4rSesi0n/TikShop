const productos = [
    {id: 1, nombre: "Top Corto de Cuello Alto", precio: "S/ 25.00", img: "images/shein_1.jpg"},
    {id: 2, nombre: "Pantalón Cargo de Cintura Alta", precio: "S/ 65.00", img: "images/shein_2.jpg"},
    {id: 3, nombre: "Vestido Ajustado Negro", precio: "S/ 45.00", img: "images/shein_3.jpg"},
    {id: 4, nombre: "Chaqueta Oversize", precio: "S/ 85.00", img: "images/shein_4.jpg"}
];

const contenedor = document.getElementById('contenedor-productos');

// Renderizado dinámico Vanilla JS
function cargarCatalogo() {
    contenedor.innerHTML = '';
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}</p>
            <button class="btn" style="width: 100%;" onclick="agregarBolsa(${producto.id})">Añadir a la bolsa</button>
        `;
        contenedor.appendChild(div);
    });
}

function agregarBolsa(id) {
    alert(`Producto ${id} añadido a tu bolsa de compras.`);
}

// Inicializar
cargarCatalogo();