function validarNoVacio(input){
    if (input.length===0){
        return 'Este campo no puede estar vacío';
    }
    return '';    
}

function validarMax50Caracteres(input){
    if (input.length>50){
        return 'Este campo debe tener menos de 50 caracteres';
    }
    return '';
}

function validarMax250Caracteres(input){
    if (input.length>250){
        return 'Este campo debe tener menos de 250 caracteres';
    }
    return '';
}

function validarSoloLetras(input){
    const contieneSoloLetras = /^[A-z]+$/.test(input);
    if(!contieneSoloLetras){
        return 'Este campo debe contener solo letras';
    }
    return '';
}

function validarNombre(nombre){
    if (validarNoVacio(nombre)!==''){
        return validarNoVacio(nombre);
    }
    if (validarMax50Caracteres(nombre)!==''){
        return validarMax50Caracteres(nombre);
    }    
    if (validarSoloLetras(nombre)!==''){
        return validarSoloLetras(nombre);
    }
    return 'éxito';     
}

function validarCiudad(ciudad){
    if (validarNoVacio(ciudad)!==''){
        return validarNoVacio(ciudad);
    }
    return 'éxito';  
}

function validarDescripcionRegalo(descrpcionRegalo){
    if (validarNoVacio(descrpcionRegalo)!==''){
        return validarNoVacio(descrpcionRegalo);
    }
    if (validarMax250Caracteres(descrpcionRegalo)!==''){
        return validarMax250Caracteres(descrpcionRegalo);
    }
    return 'éxito';
}

function validarFormulario(){
    const nombre = document.formulario.nombre.value;
    const ciudad = document.formulario.ciudad.value;
    const descrpcionRegalo = document.formulario['descripcion-regalo'].value;
    console.log(`Nombre : ${validarNombre(nombre)}`);
    console.log(`Ciudad : ${validarCiudad(ciudad)}`);
    console.log(`Descripcion regalo : ${validarDescripcionRegalo(descrpcionRegalo)}`);
}


document.formulario.onsubmit= function (event) {
    validarFormulario();
    event.preventDefault();
}
