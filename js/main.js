const $form = document.form

const userName = $form.name.value


function validateName(userName) {


    if (userName.length === 0) {
        return 'Este campo debe tener al menos 1 caracter'
    }

    if (userName.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres'
    }

    if (isValidateContainigOnlyLetters(userName)) {
        return 'Este campo solo debe contener caracteres'
    }

    return ''
}

function isValidateContainigOnlyLetters(text) {

    return (/[0-9 ]/g.test(text))
}




function validateForm() {
    const $form = document.querySelector('#letter-to-santa')
    const errorName = validateName($form.name.value)

    handleErrors([errorName])

}


document.querySelector('#send-letter').onclick = function(event) {

    event.preventDefault()

    validateForm()

}


function handleErrors(errors) {
    const errorName = errors[0]

    if (errorName) {
        console.log(errorName)
    } else {
        console.log('exito')
    }

}