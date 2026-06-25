const tienda =
document.getElementById("tienda");



// CONTADOR

function actualizarContador(){

const carrito = JSON.parse(localStorage.getItem("carrito"))||[];

const contador = document.getElementById("contador-carrito");
if(!contador)
return;


contador.textContent = carrito.reduce((total,item)=>
total+ (item.cantidad||1),0);}

// AGREGAR
function agregarAlCarrito(producto) {

    let carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    const existe =
        carrito.find(
            p => p.nombre === producto.nombre
        );

    if (existe) {

        existe.cantidad++;

    } else {

        carrito.push({
            ...producto,
            cantidad: 1
        });

    }

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContador();
}

function actualizarContador() {

    const carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    const total = carrito.reduce(
        (acc, producto) =>
            acc + (producto.cantidad || 1),
        0
    );

    const contador =
        document.getElementById("contador-carrito");

    if (contador) {
        contador.textContent = total;
    }
}

actualizarContador();


// CATALOGO
function cargarProductos(){
if(!tienda || typeof productos ==="undefined")
return;
tienda.innerHTML="";

productos.forEach((p,i)=>{
tienda.innerHTML+=`
<div class="tarjetas">
<div class="product-image">
<img src="${p.imagen}">
</div>


<div class="info"> 
    <p class="categoria">
    ${p.nombre}
</p>


<p class="precio"> $${p.precio.toLocaleString("es-AR")}</p>

<div class="btn">
<button class="comprar" onclick=" agregarAlCarrito(productos[${i}])">Comprar</button>
</div>
</div>
</div>`;
});
}



document.addEventListener("DOMContentLoaded",()=>{actualizarContador();
cargarProductos();
});