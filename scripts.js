//Precios alimentos
let alimento2Kg = 1000;
//Precios medicina
let vacunas = 800;
//Precio consulta general
let consultaGeneral = 700;
//Declaracion de metodo de pago
let metodoDePago;
//Seleccion de producto
let producto;
//-------------------Funciones:---------------------
//Funcion que mediante el numero elegido devuelve el precio del producto
function precioInventario(numeroDeProducto){
    switch(numeroDeProducto){
        case 1: return alimento2Kg;
        case 2: return vacunas;
        case 3: return consultaGeneral;
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
//Funcion que calculo el impuesto al valor agregado de todos los productos.  En el caso de que siempre se aplique a los productos, podria poner directamente la funcion para que los precios de los productos se inicialicen con el iva ya incluido.
function calcularIVA(precio){
    let calculo = (precio*21)/100 
    return precio+calculo
}

//Eleccion de usuario
do{
producto = parseInt(prompt("Ingrese la opción del producto a comprar:\n 1.Alimento para animales \n 2.Medicina \n 3.Consulta Veterinaria"));
}while((producto < 1)||(producto > 3))

//Alerta para informar de que se procedera al metodo de pago
alert("Ahora pasaremos a la fase de compra del producto");

do{
    //Variable para guardar el precio final con descuento o intereses
    let precioFinal;

    metodoDePago = parseInt(prompt("Ustedes pagara con: \n1.Efectivo. Esta opcion tiene un descuento del 10% \n2.Debito. No posee ni intereses ni descuento \n3.Credito. Dependiendo de la cantidad de cuotas aumenta el interes\n4.Salir"));

    if(metodoDePago == 1){
        precioFinal = calcularDescuento(calcularIVA(precioInventario(producto)));
        alert("El total a pagar es: $"+precioFinal+" .Muchas gracias por su compra");
    }
    else if(metodoDePago == 2) {
        precioFinal = calcularIVA(precioInventario(producto));
        alert("El total a pagar es: $"+precioFinal+" .Muchas gracias por su compra");
    }
    else if(metodoDePago == 3){
        let cuotas = parseInt(prompt("En cuantas cuotas desea abonar? A continuacion lo intereses:\n*De 1 a 3 cuotas el interes es de 5%\n*De 4 a 8 el interes es de 10%\n*De 9 para adelante el interes es de 15%"));
        precioFinal = calcularInteres(calcularIVA(precioInventario(producto)), cuotas);
        alert("El precio final en "+cuotas+" cuotas es de: $"+precioFinal+" .Muchas gracias por su compra");
    }
    else if(metodoDePago == 4){
        alert("Muchas gracias por el interes vuelva cuando guste");
        break
    }
}while((metodoDePago < 1) || (metodoDePago > 3)) //Para que el usuario ingrese una opcion correcta.