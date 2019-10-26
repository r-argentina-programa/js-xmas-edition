let form = document.querySelector("#carta-a-santa");
let nombre = form.nombre.value;
let ciudad = form.ciudad.value;
let descripcion = form["descripcion-regalo"].value;

function validarNombre(nombre){
    if(nombre.length===0) return "Poco";
    if(nombre.length>=50) return "Mucho";
    const patt1 = /[0-9]|\s|[!@#$%^&*()+-,.?":{}|<>]/g;
    if(nombre.match(patt1)) return "Caracter Invalido";
    return '';
}

function validarCiudad(ciudad) {
    if(!ciudad) return "No hay ciudad"
    return ""
}

function validarDescripcionRegalo(descripcion) {
    if(!descripcion) return "No hay descripcion"
    if(descripcion.length>=250) return "Mucha descripcion"
    return ""
}