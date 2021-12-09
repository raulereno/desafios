let carrito =[];

let botonFinalizar = document.getElementById("finalizarCompra").onclick = () => finalizarCompra();
let montoTotalAPagar = document.getElementById("montoTotal");
let cantidadDeProductos = document.getElementById("cantProductos");
let cantidadDeProductos2= document.getElementById("prodTotalesVentana");

if (localStorage.length > 0) { 
    carrito=JSON.parse(localStorage.getItem("carritoPersistencia"));
    calcularTotal()
}
console.log(carrito);


function agregarAlCarro(id){
    carrito.push(listaDeProductos[id-1]);
    console.log(carrito);
    localStorage.setItem("carritoPersistencia",JSON.stringify(carrito));
    calcularTotal();    
}


function calcularTotal(){
    let total = 0;
    for(let prodEnCarro of carrito){
        total += prodEnCarro.precio
        console.log(total)
    }
    montoTotalAPagar.innerText ="$" + total;
    cantidadDeProductos.innerText = carrito.length;
    cantidadDeProductos2.innerText= carrito.length;
}

function finalizarCompra(){
    localStorage.clear();
    montoTotalAPagar.innerText ="$" + 0;
    cantidadDeProductos.innerText = 0;
    cantidadDeProductos2.innerText= 0;
}