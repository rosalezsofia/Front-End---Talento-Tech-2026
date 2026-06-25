const contenedor = document.getElementById("carrito");
const total = document.getElementById("total");

function mostrarCarrito() {

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (!contenedor) return;
    contenedor.innerHTML = "";
    if (carrito.length === 0) {
        contenedor.innerHTML =
            "<h2>Tu carrito está vacío 🛒</h2>";
        if (total) {
            total.innerHTML = "";}
        return;
    }

    let suma = 0;
    carrito.forEach((producto, index) => {
        const cantidad = producto.cantidad || 1;
        suma += producto.precio * cantidad;
        contenedor.innerHTML += `

        <div class="tarjeta-combos">

            <div class="icono">
                <img src="${producto.imagen}">
            </div>

            <div class="info-pack">

                <p class="pack">
                    ${producto.nombre}
                </p>

                <p class="precio">
                    $${(producto.precio * cantidad)
                        .toLocaleString("es-AR")}
                </p>

                <p>
                    Cantidad: ${cantidad}
                </p>

                <div class="btn">

                    <button
                        class="comprar"
                        onclick="eliminarProducto(${index})">

                        Eliminar

                    </button>

                </div>

            </div>

        </div>
        `;
    });

if (total) {
    total.innerHTML = `
        <div class="total-contenedor">
            <p>Total: $${suma.toLocaleString("es-AR")}</p>
            <button class="comprar" onclick="realizarCompra()">Realizar compra</button>
        </div>
    `;
}
}

function eliminarProducto(index) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito",JSON.stringify(carrito));
    mostrarCarrito();
}

function realizarCompra() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length === 0) {
        alert("Tu carrito está vacío 🛒");
        return;}
    alert("¡Compra realizada con éxito! 🎉");
    localStorage.removeItem("carrito");
    const contador = document.getElementById("contador-carrito");
    if (contador) {
        contador.textContent = "0";}
    mostrarCarrito();
}
mostrarCarrito();
