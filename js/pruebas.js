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

    console.assert(
        validarNombre(
            '1234') === "El campo nombre sólo acepta letras",
        "Validar nombre no validó que el nombre sólo tenga letras"
    );


    console.assert(
        validarNombre('Juan') === '',
        "Validar nombre falló con un nombre válido",
    );
}



function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'El campo ciudad debe contener al menos 1 caracter',
        'Validar ciudad no validó que la ciudad tenga al menos 1 caracter',
    );

    console.assert(
        validarCiudad('Corrientes') === '',
        "Validar ciudad falló con una ciudad válida",
    );
};

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'El campo descripción debe contener al menos 1 caracter',
        'Validar descripcion regalo no validó que la descripción del regalo tenga al menos 1 caracter',
    );

    console.assert(
        validarDescripcionRegalo('asdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwerty') ===
        'Este campo debe contener menos de 100 caracteres',
        'Validar descripcion regalo no validó que la descripción del regalo tenga menos de 100 caracteres',
    );

    console.assert(
        validarDescripcionRegalo('Triciclo') === '',
        "Validar descripción regalo falló con una descripción válida",
    );

    console.assert(
        validarDescripcionRegalo (",,,..|") === "El campo descripción sólo puede tener números y letras",
        "Validar descripción regalo no validó que el campo sólo contenga números y letras",
    );
};

probarValidarCiudad();
probarValidarNombre();
probarValidarDescripcionRegalo();