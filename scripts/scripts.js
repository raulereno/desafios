//Creacion de la clase producto
class Producto{
    constructor(precio,stock,opcion){
        this.nombre = this.agregarNombre(opcion);
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
    agregarNombre(opcion){
        switch (opcion){
            case 1:
                this.nombre ="Pelota"
                break 
            case 2:
                this.nombre = "Comedero"
                break
            case 3:
                this.nombre = "Shampoo"
                break
        }
    }
}
//-------------------Funciones:---------------------
//Funcion que mediante el numero elegido devuelve el precio del producto
function precioInventario(numeroDeProducto){
    return listaDeProductos[(numeroDeProducto-1)].precio
}

//Funcion que calcula el descuento por metodo de pago en efectivo
function calcularDescuento(precio){
    let descuento = (precio*10)/100;
    return precio-descuento;
}

//Funcion que recibe el numero de producto y la cantidad de cuota, y calcula los intereses dependiendo de las cuotas
function calcularInteres(precio, cantidadDeCuotas){
    if((cantidadDeCuotas>=1) && (cantidadDeCuotas<=3)){
        let x = (precio*5)/100;
        return precio + x;
    }
    else if((cantidadDeCuotas>=4) && (cantidadDeCuotas<=8)){
        let x =(precio*10)/100;
        return precio + x;
    }
    else if(cantidadDeCuotas>=9){
        let x =(precio*15)/100;
        return precio + x;
    }
}
//Alerta explicando simulador
alert('Este trabajo consta de dos fases: Un ingreso por parte del "dueño" de la tienda de los productos del catalogo y la segunda fase: la compra de los productos ingresados calculando intereses,descuentos,etc');

const listaDeProductos = []; 
//Carga de productos a un array de objetos
alert("Bienvenido. A continuacion va a cargar el catalogo de productos.");

//let card = document.createElement("div")
let pregunta;
let productoElegido;
let divPadreCards = document.getElementById("cards_productos");

do{
    productoElegido=prompt("Que producto desea agregar:\n1.Pelota de juguete\n2.Comedero\n3.Shampoo");
    
    listaDeProductos.push(new Producto(
        prompt("Ingrese el PRECIO del producto "),
        prompt("Ingrese el STOCK disponible"),
        productoElegido
    ));
    
    
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("style","width: 18rem;");
    divPadreCards.appendChild(card);

    card.innerHTML =` <img src="../images/${productoElegido}.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${listaDeProductos[0].nombre}</h5>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-primary">Agregar al carrito</a>
                    </div>`;

    alert("-----------------------");
    console.log(listaDeProductos);
    pregunta = prompt("Desea agregar otro producto? Si/No");
    
}while(pregunta.toLowerCase() == "si");

console.log(listaDeProductos);
 
let mensaje = "Bienvenido a la tienda. Elija que producto desea comprar:\n"
let contador = 1;

for(let i = 0; i < 3 ; i++){
     mensaje += contador+"."+listaDeProductos[i].nombre+" . Precio:$"+listaDeProductos[i].precio+"\n";
     contador +=1 ;
 }

console.log(mensaje);

//Declaracion de metodo de pago
let metodoDePago;
//Seleccion de producto
let producto =prompt(mensaje)

//Alerta para informar de que se procedera al metodo de pago
alert("Ahora pasaremos al metodo de pago del producto seleccionado:");

//Bucle para seleccionar correctamente los metodos de pago
do{
    //Variable para guardar el precio final con descuento o intereses
    let precioFinal;

    metodoDePago = parseInt(prompt("Ustedes pagara con: \n1.Efectivo. Esta opcion tiene un descuento del 10% \n2.Debito. No posee ni intereses ni descuento \n3.Credito. Dependiendo de la cantidad de cuotas aumenta el interes\n4.Salir"));

    if(metodoDePago == 1){
        precioFinal = calcularDescuento(precioInventario(producto));
        alert("El total a pagar es: $"+precioFinal+" .Muchas gracias por su compra");
    }
    else if(metodoDePago == 2) {
        precioFinal = precioInventario(producto);
        alert("El total a pagar es: $"+precioFinal+" .Muchas gracias por su compra");
    }
    else if(metodoDePago == 3){
        let cuotas = parseInt(prompt("En cuantas cuotas desea abonar? A continuacion lo intereses:\n*De 1 a 3 cuotas el interes es de 5%\n*De 4 a 8 el interes es de 10%\n*De 9 para adelante el interes es de 15%"));
        precioFinal = calcularInteres(precioInventario(producto), cuotas);
        alert("El precio final en "+cuotas+" cuotas es de: $"+precioFinal+" .Muchas gracias por su compra");
    }
    else if(metodoDePago == 4){
        alert("Muchas gracias por el interes vuelva cuando guste");
        break
    }

    descontarStock(producto)
}while((metodoDePago < 1) || (metodoDePago > 3)) //Para que el usuario ingrese una opcion correcta.


