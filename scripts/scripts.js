//Creacion de la clase producto
class Producto{
    constructor(nombre,precio,stock,codigo){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.codigo = parseInt(codigo)
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

const listaDeProductos = []; 
//let card = document.createElement("div")
let pregunta;
let divPadreCards = document.getElementById("cards_productos");




listaDeProductos.push(new Producto("Pelota de Goma",300,6,1));
listaDeProductos.push(new Producto("Cepillo de Dientes",150,10,2));
listaDeProductos.push(new Producto("Hueso Grande",250,8,3));
listaDeProductos.push(new Producto("Shampoo Antiparasitario",350,10,4));
listaDeProductos.push(new Producto("Corta Uñas",500,5,0005));
listaDeProductos.push(new Producto("Collar con Cascabel",400,11,6));
listaDeProductos.push(new Producto("Espuma Seca",550,6,7));
listaDeProductos.push(new Producto("Cepillo para pelos",550,15,8));
listaDeProductos.push(new Producto("Comederos",280,18,9));

console.log(listaDeProductos)
//Utilizar una sola plantilla literal y usar un for...in o for..of? para recorrer el array de objetos e ir agregando las propiedades al objeto

//USAR UN FOR..OF
for(const producto of listaDeProductos){
    let card = document.createElement("div");
    //Agregando atributos al nuevo elemento
    card.setAttribute("class", "card");
    card.setAttribute("style","width: 15rem;");
    //Utilizacion de plantillas literales para crear la estructura interna que va a tener el elemento
    card.innerHTML =
    ` <img src="../images/${producto.codigo}.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio:$${producto.precio}<br>Stock:${producto.stock}</p>
        <button class="btn btn-primary" id="${producto.codigo}">Agregar al carrito</button>
    </div>`;

    //Asignacion del nodo hijo al nodo padre
    divPadreCards.appendChild(card);
    document.getElementById(`${producto.codigo}`).onclick = () => agregarAlCarro(`${producto.codigo}`);
}
