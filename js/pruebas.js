function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '11111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );

    console.assert(
        validarNombre("123456") === "El campo nombre solo acepta letras",
        "Validar nombre no valido que el nombre solo tenga letras"
    )



    console.assert(validarNombre('fabricio') === '', 'validar nombre falló con un nombre valido')
}



function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Debes elegir una ciudad, porque si no, Papa Noel no sabe donde ir cabeza',
        'Validar ciudad no validó que el cuadro este vacio'
    );
}



function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'El campo descripcion no puede estar vacio',
        'Validar descripción regalo no validó que la descripción este vacia'
    );

    console.assert
    (validarDescripcionRegalo('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'El campo descripcion es muy largo',
        'Validar descripción regalo no validó que la descripción este muy llena'
    );

    console.assert(
        validarDescripcionRegalo('Regalo') === "",
        "La funcion validarDescripcionRegalo no funciono con una descripción correcta"

    );

    console.assert(
        validarDescripcionRegalo('^^*^*^+`+') === "El campo descripcion solo puede tener numeros y letras",
        "La funcion validarDescripcionRegalo no valido que el campo solo tenga numeros y letras"
    );
}



probarValidarDescripcionRegalo();
probarValidarCiudad();
probarValidarNombre();