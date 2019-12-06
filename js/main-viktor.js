const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return ('Este campo debe tener al menos 1 caracter')
    }

    if (nombre.length >= 50) {
        return ('Este campo debe tener menos de 50 caracteres')
    }

    if (!/^[a-z]+$/i.test(nombre)) {
        return "El campo nombre solo acepta letras"
    }

    return '';
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return ('Debes elegir una ciudad, porque si no, Papa Noel no sabe donde ir cabeza')
    }

    return '';
}


function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length >= 100) {
        return "El campo descripcion es muy largo";
    } else if (descripcionRegalo.length === 0) {
        return "El campo descripcion no puede estar vacio";
    } else if (!/^[a-z0-9 ]+$/i.test(descripcionRegalo)) {
        return "El campo descripcion solo puede tener numeros y letras"
    } else {
        return '';
    }

}


function validarFormulario(event) {
    const $form = document.querySelector("#carta-a-santa");

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;


    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo,
    };

   const esExito = manejarErrores(errores) === 0;
   
   if(esExito){
       $form.className = 'oculto';
       document.querySelector('#exito').className = '';
   }
   

    event.preventDefault();
}

function manejarErrores(errores) {

    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores')
    let cantidadErrores = 0;

    keys.forEach(function (key) {
        const error = errores[key];

        if (error) {    
            $form[key].className = "error"
            cantidadErrores++;

            const $error = document.createElement('li');
            $error.innerText = error; //<li>gsdagsagasdgasg</li>
            $errores.appendChild($error);

        } else {
            $form[key].className = ""
        }
    });
    return cantidadErrores;
}

