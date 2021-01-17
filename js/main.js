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

    const errors = {

        errorUserName: validateName($form.name.value),
        errorUserCity: validateCity($form.city.value),
        errorUserGiftDescription: validateGiftDescription($form['gift-description'].value)

    }

    handleErrors(errors)

}


document.querySelector('#send-letter').onclick = function(event) {

    event.preventDefault()

    validateForm()

}


function handleErrors(errors) {
    const errorUserName = errors[0]
    const errorUserCity = errors[1]
    const errorUserGiftDescription = errors[2]



    if (errorUserName) {
        console.log(errorUserName)
    }
    if (errorUserCity) {
        console.log(errorUserCity)
    }
    if (errorUserGiftDescription) {
        console.log(errorUserGiftDescription)
    }


    console.log('exito')
}