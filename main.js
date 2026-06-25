const contenedor = document.getElementById("carrito");
const total = document.getElementById("total");

let carrito = JSON.parse(localStorage.getItem("carrito"))||[];

function renderCarrito(){

contenedor.innerHTML="";

let suma=0;

if(carrito.length===0){contenedor.innerHTML=`<h2>Carrito vacío</h2>`;
total.innerHTML="";
return;
}


carrito.forEach((p,i)=>{suma += p.precio * (p.cantidad || 1);contenedor.innerHTML+=`<div
class="tarjeta-combos">
<div class="icono">
<img src="${p.imagen}">
</div>

<div class="info-pack">

<p class="pack">

${p.nombre}
</p>

<p>Cantidad: ${p.cantidad || 1}</p>

<p class="precio">
$${(p.precio * (p.cantidad || 1)).toLocaleString("es-AR")}
</p>

<div class="btn">

<button class="comprar" onclick=" eliminar(${i})"> Eliminar</button>5  
</div>
</div>
</div>
`;
}
);

total.innerHTML=` Total: $${suma.toLocaleString( "es-AR")}`;}
function eliminar(i){
carrito.splice( i, 1);

localStorage.setItem("carrito", JSON.stringify(carrito));
renderCarrito();}
renderCarrito();