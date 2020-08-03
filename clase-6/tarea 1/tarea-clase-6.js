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

const errores = new Object() //{Objeto para almacenar mensajes de error

$botonSiguiente.onclick = function () {


    const cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);

    if (validarIngresoIntegrantes(cantidadIntegrantes) != '') {


        $form.querySelector('#cantidad-integrantes').className = 'error';

        errores.errorCantInt = validarIngresoIntegrantes(cantidadIntegrantes);

        //------------Agrega mensaje error a la interfaz de usuario------------
        const $listaErrores = document.querySelector('ul');
        const $errorIntegrante = document.createElement('li');
        $errorIntegrante.innerText = (validarIngresoIntegrantes(cantidadIntegrantes));

        $listaErrores.appendChild($errorIntegrante);
        //---------------------------------------------------------------------

    } else {
        resetear();
        mostrarBotonCalcular();
        crearUsuario(cantidadIntegrantes);
    }

}


//EDADES MÁXIMA, MÍNIMA Y PROMEDIO GENERAL

$botonCalcular.onclick = function () {

    const edades = document.querySelectorAll(".edades"); //Nodelist  

    // Si no hay errores, hacer cálculos correspondientes 

    if (!manejarErroresIngresoEdad()) {

        mostrarMayor("mayor", calcularMayorEdad(edades));
        mostrarMenor("menor", calcularMenorEdad(edades));
        mostrarPromedio("promedio", calcularPromEdad(edades));
        mostrarResultados();

    }


    function manejarErroresIngresoEdad() { //Ésta función chequea que cada edad ingresada por el usuario, sea válida.
        //Caso contrario, muestra con un borde rojo dónde está  
        //y cuál fue el error cometido 

        let mensajeError = true;

        edades.forEach(function (index) {

            if (Number(index.value) < 0) {

                index.className = 'error';

            }

        });

        const $listaErrores = document.querySelector('ul');
        const $errorEdad = document.createElement('li');
        $errorEdad.innerText = validarIngresoEdades(edades);

        $listaErrores.appendChild($errorEdad);

        errores.errorIngresoEdad = validarIngresoEdades(edades);

        return mensajeError;
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


    event.preventDefault();

}


$botonLimpiar.onclick = resetear;

function resetear() {
    resetearResultados();
    limpiarLabels();
    limpiarInputs();
    ocultarBotonCalcular();
    limpiarResultados();
    limpiarErrores();

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

function mostrarResultados() {
    document.querySelector('#analisis').className = '';
}

function limpiarResultados() {
    document.querySelector('#analisis').className = 'oculto';

}

function limpiarErrores() {
    const mensajesError = document.querySelectorAll('li');

    for (let i = 0; i < mensajesError.length; i++) {
        mensajesError[i].remove();
        document.querySelector('#cantidad-integrantes').className = '';
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


