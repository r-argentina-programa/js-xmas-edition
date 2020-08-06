/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la Edades de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y 
el promedio del grupo familiar.


Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $form = document.querySelector('#calculador-edades');

const $botonSiguiente = $form.querySelector('#siguiente-paso');
const $botonCalcular = $form.querySelector('#calcular');
const $botonLimpiar = $form.querySelector('#resetear');
const $cantidadIntegrantes = $form.querySelector('#cantidad-integrantes');


const errores = {}

$botonSiguiente.onclick = function () {


    const cantidadIntegrantes = $cantidadIntegrantes.value;

    if (validarIngresoIntegrantes(cantidadIntegrantes) !== '') {

        $cantidadIntegrantes.className = 'error';

        errores.errorCantidadIntegrantes = validarIngresoIntegrantes(cantidadIntegrantes);

        mostrarError(cantidadIntegrantes);

    } else {
        resetear();
        mostrarBotonCalcular();
        crearUsuarios(cantidadIntegrantes);
    }

}


//EDADES MÁXIMA, MÍNIMA Y PROMEDIO GENERAL

$botonCalcular.onclick = function () {

    const edades = document.querySelectorAll(".edades");
    const mensajeError = true;

    const ingresoIntegrantesValido = manejarErroresIngresoEdad(edades,mensajeError);

    if (!!ingresoIntegrantesValido) {
        mostrarResultados(edades);
    }
    
    event.preventDefault();

}

function manejarErroresIngresoEdad(edades,mensajeError) { //Ésta función chequea que cada edad ingresada por el usuario, sea válida.
    
    edades.forEach(function (input) {

        if (Number(input.value) < 0) {

            input.className = 'error';

        }

    });

    const $listaErrores = document.querySelector('ul');
    const $errorEdad = document.createElement('li');
    $errorEdad.innerText = validarIngresoEdades(edades);

    errores.errorIngresoEdad = validarIngresoEdades(edades);

    return mensajeError;
}


$botonLimpiar.onclick = resetear;

function resetear($cantidadIntegrantes) {
    resetearResultados();
    limpiarLabels();
    limpiarInputs();
    ocultarBotonCalcular();
    limpiarResultados();
    limpiarErrores($cantidadIntegrantes);

}

function mostrarResultados(edades) {

    document.querySelector('#analisis').className = '';

    mostrarMayor("mayor", calcularMayorEdad(edades));
    mostrarMenor("menor", calcularMenorEdad(edades));
    mostrarPromedio("promedio", calcularPromEdad(edades));

}


function resetearResultados() {
    const integrantes = document.querySelectorAll('.integrante');

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

function mostrarMayor(texto, valor) {
    document.querySelector(`#${texto}-edad`).textContent = valor;
}

function mostrarMenor(texto, valor) {
    document.querySelector(`#${texto}-edad`).textContent = valor;
}

function mostrarPromedio(texto, valor) {
    document.querySelector(`#${texto}-edad`).textContent = valor;
}

function limpiarResultados() {
    document.querySelector('#analisis').className = 'oculto';

}

function limpiarErrores($cantidadIntegrantes) {

    const $mensajesError = document.querySelectorAll('li');

    console.log ($cantidadIntegrantes.className)//Esto devuelve undefined. ¿Por qué?

    for (let i = 0; i < $mensajesError.length; i++) {
        $mensajesError[i].remove();
        $cantidadIntegrantes.className = '';
    }
}

function mostrarError(cantidadIntegrantes) {

    const $listaErrores = document.querySelector('ul');
    const $errorIntegrante = document.createElement('li');
    $errorIntegrante.innerText = validarIngresoIntegrantes(cantidadIntegrantes);
    
    $listaErrores.appendChild($errorIntegrante);

}

function validarIngresoIntegrantes(valoresIngresados) {

    if (valoresIngresados <= 0) {
        return "El número ingresado es incorrecto. No puede ser menor a cero.";
    }
    return "";
}

function validarIngresoEdades(edades) {

    for (let i = 0; i < edades.length; i++) {
        if (Number(edades[i].value) <= 0) {
            return "La edad ingresada no es correcta."
        }
    }
    return "";
}