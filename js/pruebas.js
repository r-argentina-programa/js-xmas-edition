function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );

    console.assert(validarNombre('fabricio') === '', 'validar nombre falló con un nombre valido')
}

probarValidarNombre();

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Debes elegir una ciudad, porque si no, Papa Noel no sabe donde ir cabeza',
        'Validar ciudad no validó que el cuadro este vacio'
    );
}

probarValidarCiudad();

function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo('') === '¿No queres pedirle nada de Papa Noel?',
        'Validar descripción regalo no validó que la descripción este vacia'
    );

    console.assert(validarDescripcionRegalo('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'No te sarpes',
        'Validar descripción regalo no validó que la descripción este muy llena'
    );

}

probarValidarDescripcionRegalo();