function probarValidarNombre() {
    console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'validarNombre() no validó que el nombre no sea un string vacío'
    )
    console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'validarNombre() no validó que el nombre tenga menos de 50 caracteres'
    )
    console.assert(
        validarNombre('3z3qui3L') === 'Este campo solo puede contener letras',
        'validarNombre() no valido que el nombre no contenga numeros'
    )
    console.assert(
        validarNombre('Iñaki') === '',
        'validarNombre() no acepto un nombre valido (Iñaki)'
    )
}

probarValidarNombre();

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'No se ha ingresado ninguna ciudad',
        'validarCiudad() no validó que se haya elegido una ciudad'
    )
}

probarValidarCiudad();

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'validarDescripcionRegalo() no validó que la descripcion no sea un string vacío'
    )

    console.assert(
        validarDescripcionRegalo('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
        === 'Este campo posee un máximo de 100 caracteres',
        'validarDescripcionRegalo() no valido que la descripcion no posea mas de 100 caracteres'
    )
    console.assert(
        validarDescripcionRegalo (' .,:¡!¿?')
        === 'Este campo sólo admite letras, numeros y espacios',
        'validarDescripcionRegalo() no acepto como valido un texto formado por simbolos validos ( .,:¡!¿?)'
    )
    console.assert(
        validarDescripcionRegalo ('AaBbCcDdEeFfGgHhIiJjKkLlMmNnÑñOoPpQqRrSsTtUuVvWwXxYyZz 0123456789')
        === '',
        'validarDescripcionRegalo() no acepto como valido un texto formado solo por letras, numeros y espacios'
    )
}

probarValidarDescripcionRegalo()


