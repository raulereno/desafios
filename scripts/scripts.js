//Creacion de la clase producto
class Producto{
    constructor(precio,stock,opcion){
        this.nombre = "";
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
    agregarNombre(opcion){
        switch (opcion){
            case 1:
                this.nombre = "Pelota";
                break 
            case 2:
                this.nombre = "Comedero";
                break
            case 3:
                this.nombre = "Shampoo";
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
    productoElegido=parseInt(prompt("Que producto desea agregar:\n1.Pelota de juguete\n2.Comedero\n3.Shampoo"));
    
    listaDeProductos.push(new Producto(
        prompt("Ingrese el PRECIO del producto "),
        prompt("Ingrese el STOCK disponible"),
        productoElegido
    ));
    
    listaDeProductos[(productoElegido-1)].agregarNombre(productoElegido);
    
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("style","width: 18rem;");
    divPadreCards.appendChild(card);

    card.innerHTML =` <img src="../images/${productoElegido}.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${listaDeProductos[(productoElegido-1)].nombre}</h5>
                        <p class="card-text">Precio:$${listaDeProductos[(productoElegido-1)].precio}<br>Stock:${listaDeProductos[(productoElegido-1)].stock}</p>
                        <a href="#" class="btn btn-primary">Agregar al carrito</a>
                    </div>`;

    alert("-----------------------");
    pregunta = prompt("Desea agregar otro producto? Si/No");
    
}while(pregunta.toLowerCase() == "si");

console.log(listaDeProductos);

