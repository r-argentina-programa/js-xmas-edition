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
        return "El campo ciudad debe contener al menos 1 caracter";
    }

    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {

    if (descripcionRegalo.length >= 100) {
        return "Este campo debe contener menos de 100 caracteres";
    }

    if (descripcionRegalo.length === 0) {
        return "El campo descripción debe contener al menos 1 caracter";
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
        'descripcion-regalo': errorDescripcionRegalo,
    };

    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
        setTimeout(function () {
            location.href = 'wishlist.html'
        }, 5000);
    }



}

function manejarErrores(errores) {

    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;


    keys.forEach(function (key) {

        const error = errores[key];

        if (error) {

            cantidadErrores++;
            $form[key].className = "error" //Borde rojo

            const $error = document.createElement('li');
            $error.innerText = error;
            $error.id = `error-${key}`;
            
            $errores.appendChild($error);

        } else {

            $form[key].className = ''; //Opción válida
            // if ($errores.length > 0){

            //     console.log($errores.querySelectorAll(`#error-${key}`).innerText);
            // }
            //if (`error-${key}`.length === ''){
              //  console.log($errores.querySelector('li'));
            //};
            const $error = $errores.querySelector(`#error-${key}`);
            if ($error) {
                
                $error.innerText = '';
                
            }
        }


    });


    return cantidadErrores;

}


$form.onsubmit = validarFormulario;