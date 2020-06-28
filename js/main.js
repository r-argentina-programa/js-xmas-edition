// TAREA CLASE 7:
// Crear las funciones validarCiudad y validarDescripcionRegalo.
// Realizarle pruebas unitarias.
// Hacer lo mismo para las tareas 5 y 6.

const $form = document.formulario;
$form.onsubmit = validarFormulario;

function validarFormulario(event){
    event.preventDefault();
    removerErrores();
    const $form = document.formulario;

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    errorNombre = validarNombre(nombre);
    errorCiudad = validarCiudad(ciudad);
    errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }

    const esExito = (manejarErrores(errores) === 0);

    if (esExito) {
       $form.className = "oculto";
       document.querySelector("#exito").className = '';

       setTimeout(redirigir, 5000);

       function redirigir(){
        window.location.href = "wishlist.html";
       }
    }
}
 
function validarNombre(nombre){
    if (nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }
    else if (nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres"
    }
    else if (! /^[a-zñ]+$/i.test (nombre)){
        return "Este campo solo puede contener letras"
    }
    else{
        return '';
    }
}

function validarCiudad (ciudad){
    if (ciudad === ''){
        return 'No se ha ingresado ninguna ciudad';
    }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }
    else if (descripcionRegalo.length > 100){
        return "Este campo posee un máximo de 100 caracteres"
    }
    else if (! /^[0-9a-zñ\s]+$/i.test (descripcionRegalo)) {
        return "Este campo sólo admite letras, numeros y espacios";
    }
    else{
    return '';
    }
}

function manejarErrores(errores){

    const keys = Object.keys(errores);
    const $listaErrores = document.querySelector("#errores");

    let cantidadErrores = 0;

    keys.forEach (function(key){
        const error = errores[key];
        if (error){
            cantidadErrores++;
            document.formulario[key].className = "error";

            const $error = document.createElement("li");
            $error.innerText = error;

            $listaErrores.appendChild($error);
        }
        else {
            document.formulario[key].className = '';
        }
    } );

    return cantidadErrores;
}

function removerErrores(){
    const $listaErrores = document.querySelector ('#errores');
    $listaErrores.innerText = '';

    return;
}
