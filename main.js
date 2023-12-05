// Input
let inputData = document.getElementById("notas");

// Botones
let boton = document.getElementById("enviarnotas");

let verNotas = document.getElementById("notasGuardadas");

// Divs
let campoResultado = document.getElementById("nota");

let notaStorage = document.getElementById("notaStorage");

// Arr
let todasLasNotas = [];
 
// Guardar notas
boton.addEventListener("click", function(){

    let inputValue = inputData.value

    let notaObjeto = {
        nota: inputValue,
        fecha: new Date().toLocaleString(),
    }
 
    todasLasNotas.push(notaObjeto)
 
    campoResultado.innerHTML = `Nota: ${notaObjeto.nota}, Fecha de la nota: ${notaObjeto.fecha}`

    localStorage.setItem("nota", JSON.stringify(todasLasNotas))

    inputData.value = ""
})

// Ver notas guardadas
verNotas.addEventListener("click", function(){
    let notasViejas = localStorage.getItem("nota");

    if (notasViejas) {
        todasLasNotas = JSON.parse(notasViejas);

        // Usar una variable para acumular las notas
        let notasAcumuladas = "";

        notaStorage.innerHTML = "</ul>"

        todasLasNotas.forEach(function(nota){
            // Acumular las notas en la variable
            notasAcumuladas += `<li>Nota: ${nota.nota}, Fecha de la nota: ${nota.fecha}<li>`;
        })
        
        notaStorage.innerHTML += "</ul>"

        // Establecer el contenido después de terminar el bucle
        notaStorage.innerHTML = notasAcumuladas;
    }
})