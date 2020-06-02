// console.log(nombre);
// console.log(ciudad);
// console.log(comportamiento);
// console.log(descripcionRegalo);

const $form = document.querySelector('#carta-a-santa');
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const descripcionRegalo = $form['descripcion-regalo'].value;


function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo debe tener al menos 1 caracter";
    }

    if (nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres";
    }


    if (!/^[a-z]+$/i.test(nombre)) {
        return "El campo nombre sólo acepta letras";
    }

    return "";
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "Este campo debe contener al menos 1 caracter";
    }

    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {

    if (descripcionRegalo.length >= 100) {
        return "Este campo debe contener menos de 100 caracteres";
    }

    if (descripcionRegalo.length === 0) {
        return "Este campo debe contener al menos 1 caracter";
    }

    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return "El campo descripción sólo puede tener números y letras";
    }

    return "";
}

validarNombre(nombre);
validarCiudad(ciudad);
validarDescripcionRegalo(descripcionRegalo);


function validarFormulario(event) {

    event.preventDefault();

    const $form = document.querySelector('#carta-a-santa');

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        descripcionRegalo: errorDescripcionRegalo,
    };

    manejarErrores(errores);



}

function manejarErrores(errores) {

    errorNombre = errores.nombre;
    errorCiudad = errores.ciudad;
    errorDescripcionRegalo = errores.descripcionRegalo;

    if (errorNombre) {
        $form.nombre.className = 'error';
    } else {
        $form.nombre.className = '';
    }

    if (errorCiudad) {
        $form.ciudad.className = 'error';
    } else {
        $form.ciudad.className = '';
    }

    if (errorDescripcionRegalo) {
        $form['descripcion-regalo'].className = 'error';
    } else {
        $form['descripcion-regalo'].className = '';
    }

}

$form.onsubmit = validarFormulario;