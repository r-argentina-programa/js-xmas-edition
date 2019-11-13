function string(cantidad) {
    let texto = ""
    for (let i = cantidad; i > 0; i--) { texto = texto.concat("i") }
    return texto
}

function pruebasCampoNombre() {
    console.assert(verificarInputNoVacio("") === false, 'la verificacion de input vacio no dio false')
    console.assert(verificarInputMenosDe50Caracteres(string(50)) === false, 'la verificacion de la funcion con menos de 50 cantidad de caracteres no dio false');
    console.assert(verificarInputContieneSoloLetras("sd3 14 %,.") === false, "la verificacion de input conteniendo solo letras no dio false!")

    console.assert(verificarInputNoVacio("Juan") === true, 'la verificacion de input vacio no dio true con un nombre valido')
    console.assert(verificarInputMenosDe50Caracteres(string(49)) === true, 'la verificacion de la funcion con menos de 50 caracteres dio false con menos de 50 caracteres')
    console.assert(verificarInputContieneSoloLetras("Juan") === true, "la verificacion del campo nombre con solo letras dio false con un nombre valido")
}

function pruebasCampoCiudad() {
    console.assert(verificarInputNoVacio("") === false, 'la verificacion de input vacio no dio false')
}

function pruebasCampoDescripcion() {
    console.assert(verificarInputMenosDe100Caracteres(string(100)) === false, 'la verificaciones del input con menos de 100 caracteres no dio false!')
    console.assert(verificarInputContieneSoloLetrasYNumeros("aSDSA123!&*(@&*") === false, 'la verificacion de que el input contenga solo letras y numeros no dio false!')

    console.assert(verificarInputMenosDe100Caracteres(string(99)) === true, 'la verificacion del input con menos de 100 caracteres fallo con 99 caracteres')
    console.assert(verificarInputContieneSoloLetrasYNumeros("aSDSA123") === true, 'la verificacoin del input con letras y numeros fallo con una descripcion valida')
}






console.assert(verificarInputContieneSoloLetras("!@#$!@!@#>> <><asd314>") === false, "la verificacion de input conteniendo solo letras no dio false!")



pruebasCampoNombre()
pruebasCampoCiudad()
pruebasCampoDescripcion()