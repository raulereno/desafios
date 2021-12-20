$(document).ready(()=>{
    obtenerDatos();
})

const URLGET = "https://api.thedogapi.com/v1/breeds";
let razas= [];
$("#breed_select").change(()=>{
    let razaSeleccionada = $(`select[id=breed_select]`).val();
    console.log(razaSeleccionada);
    mostrarRaza(razaSeleccionada);
})

function obtenerDatos(){
    $.get(URLGET , (respuesta, estado)=>{
        if(estado == "success"){
            razas = respuesta;

            console.log(estado);
            console.log(razas);
            console.log(razas.length);

            for (const raza of razas) {
                $("#breed_select").append(
                    `<option id="${raza.id}" value="${raza.name}">${raza.name}</option>`
                )                
            }
        }
    })
}

function mostrarRaza(id){
    
    let parametro = (nombre) => nombre.name === id;
    let encontrado = razas.findIndex(parametro)
    console.log(encontrado);
    let imagen = razas[encontrado].image;
    $("#breed_image").attr(`src`, imagen.url );
}
//Para la siguiente preentrega pondre el