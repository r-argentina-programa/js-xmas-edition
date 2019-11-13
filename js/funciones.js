function verificarInputNoVacio(texto) { return texto.length > 1 ? true : false }
function verificarInputMenosDe50Caracteres(texto) { return texto.length < 50 ? true : false }
function verificarInputMenosDe100Caracteres(texto) { return texto.length < 100 ? true : false }
function verificarInputContieneSoloLetras(texto) { return /^[A-z]+$/.test(texto) }
function verificarInputContieneSoloLetrasYNumeros(texto) { return /^[\sA-z0-9]+$/.test(texto) }

function validarNombre() {
    let $nombre = document.formulario.nombre.value
    if (verificarInputNoVacio($nombre) === false) { return "El campo nombre debe tener al menos dos caracteres." }
    else if (verificarInputMenosDe50Caracteres($nombre) === false) { return "El campo nombre debe tener menos de cincuenta caracteres." }
    else if (verificarInputContieneSoloLetras($nombre) === false) { return "El campo nombre debe contener solo letras." }
    else {return true}
}

function validarCiudad() {
    let $ciudad = document.formulario.ciudad.value
    if (verificarInputNoVacio($ciudad) === false) { return "Debes seleccionar al menos una provincia."}
    else {return true}
}

function validarDescripcion() {
    $descripcionRegalo = document.querySelector("[name=descripcion-regalo]").value
    if (verificarInputNoVacio($descripcionRegalo) === false) { return "El campo descripcion debe tener al menos dos caracteres."}
    else if (verificarInputContieneSoloLetrasYNumeros($descripcionRegalo) === false) { return "El campo descripcion debe contener solo letras y numeros."}
    else if (verificarInputMenosDe100Caracteres($descripcionRegalo) === false) {return "El campo descripciondebe tener menos de cien caracteres."}
    else {return true}
}

function manejarErrores() {
    const errores = {
        'nombre': validarNombre(),
        'ciudad': validarCiudad(),
        'descripcion-regalo': validarDescripcion()
    }
    
    let cuentaErrores = 0;

    let $errores = document.querySelector("#errores")
    $errores.innerHTML = ""

    Object.keys(errores).forEach(function (key) {
        let $key = document.querySelector(`[name="${key}"]`)

        if (errores[key] === true) {
            $key.className = ""
        }

        else {
            cuentaErrores++
            $key.className = "error"
            $key.value = ""

            $li = document.createElement("li")
            $li.textContent = errores[key]

            $errores.appendChild($li)
        }
    });

    return cuentaErrores === 0;
}

function exito() {
    $form.className = "oculto"
    document.querySelector("#exito").className = ""
    setTimeout(function () { window.location.assign("wishlist.html") }, 5000)
}


