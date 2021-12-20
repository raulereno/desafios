$(document).ready(()=>{
    obtenerDatos();
})

const URLGET = "https://api.thedogapi.com/v1/breeds";
let razas= [];
$("#breed_select").change(()=>{
    let razaSeleccionada = $(`select[id=breed_select]`).val();
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
                    `<option id="${raza.id}" value="${raza.id}">${raza.name}</option>`
                )                
            }
        }
    })
}

function mostrarRaza(id){
    console.log(id);
    let imagen = razas[id-1].image;
    $("#breed_image").attr(`src`, imagen.url );
}