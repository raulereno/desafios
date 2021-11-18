//Creacion de la clase producto
class Producto{
    constructor(id,nombre,precio,stock){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
}
//-------------------Funciones:---------------------
//Funcion que mediante el numero elegido devuelve el precio del producto
function precioInventario(numeroDeProducto){
    return listaDeProductos[(numeroDeProducto-1)].precio
}
//Funcion que ordena los productos de mayor a menor precio.
function ordenarInventario(numero){
    if(numero == "1"){
        listaDeProductos.sort(function (a, b) {
            if (a.precio > b.precio) {
              return -1;
            }
            if (a.precio < b.precio) {
              return 1;
            }
            // a must be equal to b
            return 0;
          });
          return "La lista ordenada de MAYOR a MENOR quedo:\n"             
    }
    else if(numero == "2"){
        listaDeProductos.sort(function (a, b) {
            if (a.precio > b.precio) {
              return 1;
            }
            if (a.precio < b.precio) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
          return "La lista ordenada de MENOR a MAYOR quedo:\n"   
    }
}
//Alerta explicando simulador
alert('Este trabajo consta de : Un ingreso por parte del "dueño" de la tienda de los productos del catalogo y un mensaje que pregunta de que forma va a querer ordenar los productos.');

const listaDeProductos = []; 
//Carga de productos a un array de objetos
alert("Bienvenido. A continuacion va a cargar el catalogo de productos. Primero ingrese la cantidad de productos que va ingresar.");
//Pregunta cantidad de productos para asi tener un tope en el bucle
let cantidadDeProductos = parseInt(prompt ("Cuantos productos va a ingresar?"));
let largo;

do{
    listaDeProductos.push(new Producto(
        prompt("Ingrese el ID o codigo del producto"),
        prompt("Ingrese el NOMBRE del producto"),
        prompt("Ingrese el PRECIO del producto "),
        prompt("Ingrese el STOCK disponible")
    ));
    alert("-----------------------")
    largo = listaDeProductos.length;
    
}while(cantidadDeProductos != largo);
//Comprobacion por consola de la lista de objetos
console.log(listaDeProductos);
 
//Declaracion e iniciacion de variables, junto con un bucle. Objetivo: A traves del bucle iterar el nombre y precio de los productos para mostrarle al usuario los productos que ingreso.
let mensaje = "";
let contador = 1;

for(let i = 0; i < cantidadDeProductos ; i++){
     mensaje += contador+"."+listaDeProductos[i].nombre+" . Precio:$"+listaDeProductos[i].precio+"\n";
     contador +=1 ;
 }

//El usuario va a elegir como ordenar el array de objetos
let parametroDeOrdenamiento = prompt("La lista de producto es:\n"+mensaje+"\nDesea ordenarlas de:\n1.Mayor a menor precio\n2.Menor a mayor precio\nIngrese el numero: 1 o 2 para seleccionar las opciones");

//La funcion retorna el respectivo mensaje por esto esta almacenada en una variable
let mensaje2 = ordenarInventario(parametroDeOrdenamiento);

//"Reiniciamos" las variables a su valor original para asi utilizarlas junto con el bucle para mostrar la nueva lista ordenada
 mensaje = "";
 contador= 1

 for(let i = 0; i < cantidadDeProductos ; i++){
     mensaje += contador+"."+listaDeProductos[i].nombre+" . Precio:$"+listaDeProductos[i].precio+"\n";
     contador +=1 ;
 }
//Mensaje de alerta con la lista ordenada como el usuario requirio
alert(mensaje2+mensaje)