function verificarInputNoVacio(texto) { return texto.length > 1 ? true : false }

function verificarInputMenosDe50Caracteres(texto) { return texto.length < 50 ? true : false }

function verificarInputMenosDe100Caracteres(texto) { return texto.length < 100 ? true : false }

function verificarInputContieneSoloLetras(texto) { return /[A-z]+/.test(texto) }

function verificarInputContieneSoloLetrasYNumeros(texto) { return /[A-z0-9]+/.test(texto) }

function validarNombre() {
    let $nombre = document.formulario.nombre.value
    return verificarInputNoVacio($nombre) &&
        verificarInputMenosDe50Caracteres($nombre) &&
        verificarInputContieneSoloLetras($nombre);
}

function validarCiudad() {
    let $ciudad = document.formulario.ciudad.value
    return verificarInputNoVacio($ciudad)
}

function validarDescripcion() {
    $descripcionRegalo = document.querySelector("[name=descripcion-regalo]").value
    return verificarInputNoVacio($descripcionRegalo) &&
        verificarInputContieneSoloLetrasYNumeros($descripcionRegalo) &&
        verificarInputMenosDe100Caracteres($descripcionRegalo)
}

function manejarErrores() {
    const errores = {
        'nombre': validarNombre(),
        'ciudad': validarCiudad(),
        'descripcion-regalo': validarDescripcion()
    }

    let $errores = document.querySelector("#errores")
    $errores.innerHTML = ""

    Object.keys(errores).forEach(function (key) {
        let $key = document.querySelector(`[name="${key}"]`)

        if (errores[key] === true) {
            $key.className = ""
        }

        else {
            $key.className = "error"
            $key.value = ""

            $li = document.createElement("li")
            $li.textContent = key

            $errores.appendChild($li)
        }
    });
}

function verificarTodo() { return validarNombre() && validarCiudad() && validarDescripcion() }

function exito() {
    $form.className = "oculto"
    document.querySelector("#exito").className = ""
    setTimeout(function () { window.location.assign("wishlist.html") }, 5000)
}


