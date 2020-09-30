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

const errores = {
    edades: [],
};

//let esExito;

let cantidadErrores = 0;


$botonSiguiente.onclick = function () {

    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    const errorCantidadIntegrantes = validarIngresoIntegrantes(cantidadIntegrantes);


    if (errorCantidadIntegrantes === '') {

        limpiarMensajeError();
        ingresoEdadesIntegrantes(cantidadIntegrantes);
        
    } else if (cantidadErrores === 0) {
        
        $form["cantidad-integrantes"].className = 'error';
        mostrarMensajeError(errorCantidadIntegrantes);
        cantidadErrores++;
               
    }
    

}

function mostrarMensajeError (errorCantidadIntegrantes) {
    
    const $listaErrores = document.querySelector('#lista-errores');
    const $errorCantidadIntegrantes = document.createElement('li');

    $errorCantidadIntegrantes.innerText = errorCantidadIntegrantes;

    $listaErrores.appendChild($errorCantidadIntegrantes);
    
}


function limpiarMensajeError () {
   
    $form["cantidad-integrantes"].className = "";
    const $mensajeError = document.querySelector('li');
    
    if ($mensajeError !== null) {
        $mensajeError.remove();
    }

}


//EDADES MÁXIMA, MÍNIMA Y PROMEDIO GENERAL

$botonCalcular.onclick = function () {

     const edades = document.querySelectorAll(".edades")

     

        errores.edades.push(validarIngresoEdades(edades));
        
        
    
        manejarErrores(errores);
                  
         console.log (errores.edad)
           // (Number(edades[i].value))
    //      
    //     errores["cantidad-integrantes"] = '';
     

    // if (comprobarExistenciaErrores(esExito)) {
    //     resetear();
    //     mostrarResultados(edades);
    //     mostrarBotonLimpiar();
    // } 

    event.preventDefault();

}



function manejarErrores(errores) {


    const keys = Object.keys(errores);
    const $errores = document.querySelector('#lista-errores');


    keys.forEach(function (key) {

    const error = errores[key];

        if (error) {

            $form[key].className = 'error';

            const $error = document.createElement('li');
            $error.innerText = error;

            $errores.appendChild($error);

        } else {

            $form[key].className = '';

        }

    });


}

function comprobarExistenciaErrores(esExito) {

    esExito = manejarErrores(errores) === true;

    return esExito;
}

function ingresoEdadesIntegrantes(cantidadIntegrantes) {

    mostrarBotonCalcular();
    crearUsuarios(cantidadIntegrantes);

}

$botonLimpiar.onclick = resetear;

function resetear() {

    resetearResultados();
    limpiarLabels();
    limpiarInputs();
    ocultarBotonCalcular();
    limpiarResultados();
    ocultarBotonLimpiar();

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

function mostrarBotonLimpiar() {
    document.querySelector('#resetear').className = '';
}

function ocultarBotonLimpiar() {
    document.querySelector('#resetear').className = 'oculto';
}



// function limpiarErrores(errores, $ingresoInvalido) {

//     if (errores.$mensajeError !== '') {
//         errores.$mensajeError.remove();
//         $ingresoInvalido.className = '';
//     }

// }


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