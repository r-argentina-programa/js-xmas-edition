/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la Edades de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y 
el promedio del grupo familiar.


Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

// CREAR USUARIO



document.querySelector('#siguiente-paso').onclick = function (event) {

    const cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);

    validarIngresoIntegrantes(cantidadIntegrantes);

    if (cantidadIntegrantes > 0) {
        mostrarBotonCalcular();
        crearUsuario(cantidadIntegrantes);
    }

}


//EDADES MÁXIMA, MÍNIMA Y PROMEDIO GENERAL

document.querySelector('#calcular').onclick = function () {

    const edades = document.querySelectorAll(".edades"); //Nodelist
    
    validarIngresoEdades(edades);

    mostrarMayor("mayor", calcularMayorEdad(edades));
    mostrarMenor("menor", calcularMenorEdad(edades));
    mostrarPromedio("promedio", calcularPromEdad(edades));
    mostrarResultados();


    function mostrarMayor(texto, valor) {
        document.querySelector(`#${texto}-edad`).textContent = valor;
    }

    function mostrarMenor(texto, valor) {
        document.querySelector(`#${texto}-edad`).textContent = valor;
    }

    function mostrarPromedio(texto, valor) {
        document.querySelector(`#${texto}-edad`).textContent = valor;
    }

    event.preventDefault();

}



document.querySelector('#resetear').onclick = resetear;



function resetear() {
    resetearResultados();
    limpiarLabels();
    limpiarInputs();
    ocultarBotonCalcular();
    limpiarResultados();


}

function resetearResultados() {
    const integrantes = document.querySelectorAll('.integrante');
    //console.log(integrantes);

    for (let i = 0; i < integrantes.length; i++) {
        integrantes[i].remove();
    }
}

function limpiarLabels() {
    const labels = document.querySelectorAll('#integrantes > label');
    for (let i = 0; i < labels.length; i++) {
        labels[i].remove();
    }

}

function limpiarInputs() {
    const inputs = document.querySelectorAll('#integrantes > input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].remove();
    }
}

function mostrarBotonCalcular() {
    document.querySelector('#calcular').className = "";
}

function ocultarBotonCalcular() {
    document.querySelector('#calcular').className = "oculto";
}

function mostrarResultados() {
    document.querySelector('#analisis').className = '';
}

function limpiarResultados() {
    document.querySelector('#analisis').className = 'oculto';

}


function validarIngresoIntegrantes(valoresIngresados) {


    if (valoresIngresados <= 0) {
        return "El número ingresado es incorrecto. No puede ser menor a cero.";
    }

    return "";
}



function validarIngresoEdades(edades) {

    for (let i = 0; i < edades.length; i++){    
        
        if (edades[i].value <= 0) {

            return "La edad ingresada no es correcta."
        }

    }
    return "";
}