//Alerta de inicio del cuestionario

let alerta = prompt("Ahora vamos a probar sus conocimientos basicos de HTML y CSS.\n Le hare tres preguntas basicas, sobre el lenguaje de etiquetas y el de cascadas. No podra salir de la pregunta hasta que la responda bien, por si necesita ayuda las respuestas se dan por consola. Empezamos? si/no");

if(alerta.toLowerCase() == "si" ){
    
    //Pregunta nº1
    let question1 = 0;
    do{
        console.log("La respuesta es: 6")
        question1 = parseInt(prompt("Cuantas etiquetas h , existen en HTML?"));
    }while(question1 != 6)
    
    //Pregunta nº2
    let question2;
    do{
        console.log("La respuesta es: padding ")
        question2 = prompt("Como se le llama a la propiedad usada en CSS para determinar el espacio entre el contenido de una etiqueta y los bordes de las misma?")
    }while(question2.toLowerCase() != "padding")
    
    //Pregunta nº3
    alert("Ahora una pregunta mas general")
    let question3;
    do{
        console.log("La respuesta es: git")
        question3= prompt("Cual es sistema de control de versiones mas popular en la comunidad IT")
    }while(question3.toLowerCase() != "git")

    alert("Ahora su puntaje aparecera en..")

    for(let i = 3 ; i > 0; i--){
        if(i == 2){
            continue
        }
        alert(i)
    }
    
    alert("Uh que paso se perdio el 2, disculpe ahi va la cuenta otra vez..")
    for(let i = 3 ; i > 0; i--){
        alert(i)
    }
    alert("Y si todas correctas porque no podias salir del bucle sino respondias bien :)")
}

else{
    alert("Que tenga un buen dia.")
}

