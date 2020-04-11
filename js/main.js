const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);


function validarNombre(nombre){
    if(nombre.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    } 

    if(nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres";
    }

    return "";
}

function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return "Este campo debe contener al menos 1 caracter";
    }

    return "";
}

function validarDescripcionRegalo(descripcionRegalo){
    
    if(descripcionRegalo.length >= 100){
        return "Este campo debe contener menos de 100 caracteres";
    }

    if(descripcionRegalo.length === 0){
        return "Este campo debe contener al menos 1 caracter";
    }

    //sólo tenga letras y números

    return "";
}

validarNombre(nombre);
validarCiudad(ciudad);
validarDescripcionRegalo(descripcionRegalo);

