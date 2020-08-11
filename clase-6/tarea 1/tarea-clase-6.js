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

    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    errores.errorCantidadIntegrantes = validarIngresoIntegrantes(cantidadIntegrantes);

    if (cantidadIntegrantes > 0) {

        ingresoEdadesIntegrantes(cantidadIntegrantes);

    } else {

        $cantidadIntegrantes.className = 'error';
        manejarErrores(errores);

    }

}


//EDADES MÁXIMA, MÍNIMA Y PROMEDIO GENERAL

$botonCalcular.onclick = function () {

    const edades = document.querySelectorAll(".edades")

    errores.errorEdad = validarIngresoEdades(edades);

    if (errores.errorEdad !== '') {
        manejarErrores(errores);
    } else {
        mostrarResultados(edades);
    }

    event.preventDefault();

}



function manejarErrores(errores) {

    Object.keys(errores).forEach(function (key) {

        $listaError = $form.querySelector('ul');
        
        errores.$mensajeError = document.createElement('li');
        errores.$mensajeError.innerText = errores[key];

        $listaError.appendChild(errores.$mensajeError);

    });

}

function ingresoEdadesIntegrantes(cantidadIntegrantes) {

    mostrarBotonCalcular();
    crearUsuarios(cantidadIntegrantes);

}

$botonLimpiar.onclick = resetear;

function resetear() {

    limpiarErrores(errores, $cantidadIntegrantes);
    resetearResultados();
    limpiarLabels();
    limpiarInputs();
    ocultarBotonCalcular();
    limpiarResultados();

}

function mostrarResultados(edades) {

    document.querySelector('#analisis').className = '';

    mostrarMayor(calcularMayorEdad(edades));
    mostrarMenor(calcularMenorEdad(edades));
    mostrarPromedio(calcularPromEdad(edades));

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

function mostrarMayor(valor) {
    document.querySelector('#mayor-edad').textContent = valor;
}

function mostrarMenor(valor) {
    document.querySelector('#menor-edad').textContent = valor;
}

function mostrarPromedio(valor) {
    document.querySelector('#promedio-edad').textContent = valor;
}

function limpiarResultados() {
    document.querySelector('#analisis').className = 'oculto';

}

function limpiarErrores(errores, $ingresoInvalido) {

    if (errores.errorCantidadIntegrantes !== '') {
        errores.$mensajeError.remove();
        $ingresoInvalido.className = '';
    }

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