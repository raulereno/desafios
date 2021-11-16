class Producto{
    constructor(nombre,precio,stock){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
    calcularIVA(){
        this.precio = this.precio * 1.21;
    }
    ventaProducto() {
        this.stock = this.stock - 1;
    }
}
//Instacia de objetos literales
let alimento2Kg = new Producto("Alimento 2KG","1000","5");
alimento2Kg.calcularIVA();

let vacunas = new Producto("Vacuna","800","3");
vacunas.calcularIVA();

let consultaGeneral = new Producto("Consulta General","700","9999")

//Instancia de la clase Producto por parte del usuario
alert("Mensaje para el dueño de la tienda. A continuacion ingrese el nombre del producto que desea agregar a su tienda. Debe ingresar nombre del producto, precio y stock");

let productoNuevo = new Producto(
    prompt("Ingrese el NOMBRE del producto"),
    prompt("Ingrese el PRECIO del nuevo producto"),
    prompt("Ingrese el STOCK disponible")
);

//Declaracion de metodo de pago
let metodoDePago;
//Seleccion de producto
let producto;
//-------------------Funciones:---------------------
//Funcion que mediante el numero elegido devuelve el precio del producto
function precioInventario(numeroDeProducto){
    switch(numeroDeProducto){
        case 1: 
        alimento2Kg.ventaProducto();
            return alimento2Kg.precio;
        case 2: 
            vacunas.ventaProducto();
            return vacunas.precio;
            case 3: 
            return consultaGeneral.precio;
        case 4: 
            productoNuevo.ventaProducto();
            return productoNuevo.precio;
    }
}
//Funcion que descuenta el producto seleccionado
function descontarStock(numeroDeProducto){
    switch (numeroDeProducto){
        case 1: 
            alimento2Kg.ventaProducto;
            break
        case 2: 
            vacunas.ventaProducto;
            break
        case 4: 
            productoNuevo.ventaProducto;
            break
    }
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

//Eleccion de usuario
do{
producto = parseInt(prompt("Ingrese la opción del producto a comprar:\n 1.Alimento para animales \n 2.Medicina \n 3.Consulta Veterinaria\n 4."+productoNuevo.nombre));
}while((producto < 1)||(producto > 4))

//Alerta para informar de que se procedera al metodo de pago
alert("Ahora pasaremos a la fase de compra del producto");

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

//Comprobacion si se reduce el stock
console.log(alimento2Kg.stock);
console.log(vacunas.stock);
console.log(productoNuevo.stock);
