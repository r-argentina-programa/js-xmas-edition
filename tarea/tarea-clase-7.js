/*
 * Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
 * Escribir pruebas para esas funciones.
 *
 * Adicional: Escribir pruebas para las funciones de tareas anteriores.
 *
 * */

const userCity = $form.city.value
const userGiftDescription = $form['gift-description'].value


function validateCity(userCity) {
    if (userCity.length === 0) {
        return 'Seleccione una ciudad'
    }

    return ''
}

function validateGiftDescription(userGiftDescription) {
    if (userGiftDescription.length === 0) {
        return 'La descripcion del regalo debe tener al menos 1 caracter'
    }

    if (userGiftDescription.length >= 100) {
        return 'La descripcion del regalo tiene que tener al menos 100 caracteres'
    }
    if (isValidateContainigOnlyLettersAndNumbers(userGiftDescription)) {
        return 'La descripcion del regalo solo debe contener letras y numeros'
    }
    return ''
}

function isValidateContainigOnlyLettersAndNumbers(text) {
    return !(/\w+/g.test(text))
}