//Creacion de la clase producto
class Producto{
    constructor(precio,stock){
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
    //Eleccion de producto
    productoElegido=parseInt(prompt("Que producto desea agregar:\n1.Pelota de juguete\n2.Comedero\n3.Shampoo"));
    //Creacion de objeto nuevo, enviando por parametro el precio y el stock
    listaDeProductos.push(new Producto(
        prompt("Ingrese el PRECIO del producto "),
        prompt("Ingrese el STOCK disponible"),
        productoElegido
    ));
    //Llamado a la funcion de metodo agregar nombre para establecer el nombre del nuevo objeto. El metodo pertenece a la clase Producto
    listaDeProductos[(productoElegido-1)].agregarNombre(productoElegido);
    
    //Creacion de un elemento en el html
    let card = document.createElement("div");
    //Agregando atributos al nuevo elemento
    card.setAttribute("class", "card");
    card.setAttribute("style","width: 18rem;");
    //Asignacion del nodo hijo al nodo padre
    divPadreCards.appendChild(card);

    //Utilizacion de plantillas literales para crear la estructura interna que va a tener el elemento
    card.innerHTML =` <img src="../images/${productoElegido}.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${listaDeProductos[(productoElegido-1)].nombre}</h5>
                        <p class="card-text">Precio:$${listaDeProductos[(productoElegido-1)].precio}<br>Stock:${listaDeProductos[(productoElegido-1)].stock}</p>
                        <a href="#" class="btn btn-primary">Agregar al carrito</a>
                    </div>`;

    alert("-----------------------");
    //Condicion para salir del bucle do...while
    pregunta = prompt("Desea agregar otro producto? Si/No");
    
}while(pregunta.toLowerCase() == "si");
//console log para testear funcionamiento del bucle y las iteraciones que va agregando objetos nuevos
console.log(listaDeProductos);

