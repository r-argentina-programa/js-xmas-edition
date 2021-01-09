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

function isValidateContainigOnlyLetters(string) {

    return (/[0-9]/g.test(string))
}




function validateForm() {
    const userName = document.form.name.value
    console.log(validateName(userName))
}

validateForm()