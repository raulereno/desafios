//Creacion de la clase producto
class Producto{
    constructor(nombre,precio,stock,codigo,nombreFoto){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.codigo = parseInt(codigo);
        this.nombreFoto = nombreFoto;
        this.cantidad = 1 ;
    }
}
//Comprobacion de que el DOM esta listo para usarse
$( document ).ready(function() 
{
   console.log( "El DOM esta listo" );
});

//Lista de productos
const listaDeProductos = []; 
//Tomando elemento padre
let divPadreCards = document.getElementById("cards_productos");
//Creacion de lo productos
listaDeProductos.push(new Producto("Pelota de Goma",300,6,1,"pelotaDeGoma.jpg"));
listaDeProductos.push(new Producto("Cepillo de Dientes",150,10,2,"cepilloDeDientes.jpg"));
listaDeProductos.push(new Producto("Hueso Grande",250,8,3,"huesoGrande.jpg"));
listaDeProductos.push(new Producto("Shampoo Antiparasitario",350,10,4,"shampooAntip.jpg"));
listaDeProductos.push(new Producto("Corta Uñas",500,5,5,"cortaUñas.jpg"));
listaDeProductos.push(new Producto("Collar con Cascabel",400,11,6,"collarConCascabel.jpg"));
listaDeProductos.push(new Producto("Espuma Seca",550,6,7,"espumaSeca.jpg"));
listaDeProductos.push(new Producto("Cepillo para pelos",550,15,8,"cepilloParaPelos.jpg"));
listaDeProductos.push(new Producto("Comederos",280,18,9,"comederos.jpg"));

console.log(listaDeProductos)

//For...of que recorre la lista de objetos y va creando las cards correspondientes
for(const producto of listaDeProductos){
    let card = document.createElement("div");
    //Agregando atributos al nuevo elemento
    card.setAttribute("class", "card");
    card.setAttribute("style","width: 15rem;");
    //Utilizacion de plantillas literales para crear la estructura interna que va a tener el elemento
    card.innerHTML =
    ` <img src="../images/${producto.nombreFoto}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio:$${producto.precio}<br>Stock: ${producto.stock}</p>
        <button class="btn btn-primary" id="${producto.codigo}">Agregar a carrito</button>
    </div>`;
    //Asignacion del nodo hijo al nodo padre
    divPadreCards.appendChild(card);
    //Tomo el elemento por codigo y le ponemos un evento onClick para agregar al carro
    $(`#${producto.codigo}`).click((e) => {agregarAlCarro(producto);});
}