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

        userName: validateName($form.name.value),
        userCity: validateCity($form.city.value),
        userGiftDescription: validateGiftDescription($form['gift-description'].value)

    }

    handleErrors(errors)

}


document.querySelector('#send-letter').onclick = function(event) {

    event.preventDefault()

    validateForm()

}


function handleErrors(errors) {
    let countErrors = 0



    if (errors.userName) {
        console.log(errors.userName)
        countErrors++
    }
    if (errors.userCity) {
        console.log(errors.userCity)
        countErrors++
    }
    if (errors.userGiftDescription) {
        console.log(errors.userGiftDescription)
        countErrors++
    }
    if (countErrors === 0) {
        console.log('exito')
    }

}