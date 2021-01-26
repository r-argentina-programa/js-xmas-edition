function testValidateName() {
    console.assert(
        validateName('') === 'El nombre debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío'
    );

    console.assert(
        validateName('111111111111111111111111111111111111111111111111111111111111111') ===
        'El nombre debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres'
    );

    console.assert(
        validateName('6454 ') === 'El nombre solo debe contener caracteres',
        'No se valido que solo contenga letras'
    );
}

function testValidateCity() {
    console.assert(
        validateCity('') === 'Seleccione una ciudad', 'No se valido que la ciudad este completa'
    )
}

function testValidateGiftDescription() {
    console.assert(
        validateGiftDescription('') === 'La descripcion del regalo debe tener al menos 1 caracter'
    )
    console.assert(
        validateGiftDescription('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'La descripcion del regalo tiene que tener al menos 100 caracteres', 'No se pudo colocar el comportamiento, es vacio'
    )
    console.assert(
        validateGiftDescription('&/(%&(') === 'La descripcion del regalo solo debe contener letras y numeros', 'No se pudo validar que la descripcion del regalo tenga solo letras y numeros'
    )
}

testValidateName();
testValidateCity();
testValidateGiftDescription();