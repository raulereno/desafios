let carrito =[];


let botonFinalizar = document.getElementById("finalizarCompra");
let montoTotalAPagar = document.getElementById("montoTotal");
let cantidadDeProductos = document.getElementById("cantProductos")
let cantidadDeProductos2= document.getElementById("prodTotalesVentana")

function agregarAlCarro(id){
    carrito.push(listaDeProductos[id-1]);
    console.log(carrito)
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
    cantidadDeProductos2.innerText=carrito.length;
}