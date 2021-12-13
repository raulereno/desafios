//Defino variable carrito y la inicio como array vacio 
let carrito =[];
console.log(carrito);
//Variables que toman elementos del DOM
let botonFinalizar = $("#finalizarCompra").click((e) => {finalizarCompra();})
let montoTotalAPagar = $("#montoTotal");
let cantidadDeProductos = $("#cantProductos");
let cantidadDeProductos2= $("#prodTotalesVentana");

let cantidad=0;

//Comprobacion para ver si el localStorage tiene algun producto guardado
if (localStorage.getItem("carritoPersistencia") != null) { 
    carrito=JSON.parse(localStorage.getItem("carritoPersistencia"));
    calcularTotal()
}

//Funcion que agrega productos al carrito, es llamada desde el archivo scripts linea 72. 
function agregarAlCarro(producto){
    let encontrado = carrito.find( e=>e.codigo == producto.codigo);
    console.log(encontrado);
    cantidad++;
    
    if(encontrado == undefined){
        carrito.push(producto);
        console.log(carrito);
        localStorage.setItem("carritoPersistencia",JSON.stringify(carrito));
        
        $("#tablaBody").append(`
        <tr id="fila${carrito.codigo}"> 
        <th scope="row"><img src="../images/${producto.nombreFoto}" class="imgCarrito"></th> 
        <td>${producto.nombre}</td> 
        <td>$${producto.precio}</td> 
        <td id="cantidad${producto.codigo}">${producto.cantidad}</td> 
        <td><button class="btn btn-light"><img src="../images/trash.png" class="basureroCarrito"></button></td> </tr>`);
    }
    else{
        let posicion = carrito.findIndex(e => e.codigo == producto.codigo);
        console.log(posicion);
        carrito[posicion].cantidad +=1;
        $(`#cantidad${producto.codigo}`).html(carrito[posicion].cantidad);
    }  
    montoTotalAPagar.html(`$${calcularTotal()}`)    
    cantidadDeProductos.html (cantidad);
    cantidadDeProductos2.html(cantidad);
    console.log(cantidad);
}

//Función que calcula el total de los precios
function calcularTotal(){
    let total = 0;
    for(let prodEnCarro of carrito){
        total += (prodEnCarro.precio*prodEnCarro.cantidad);
        console.log(total)
    } 
    return total;
}
//Funcion que limpia el localStorage y reestablece los valores de precio total, y cantidad de productos
function finalizarCompra(){
    localStorage.clear();
    montoTotalAPagar.html ("$" + 0);
    cantidadDeProductos.html ( 0 );
    cantidadDeProductos2.html( 0 );
    cantidad=0;
}
