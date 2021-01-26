const $form = document.form

const userName = $form.name.value


function validateName(userName) {


    if (userName.length === 0) {
        return 'El nombre debe tener al menos 1 caracter'
    }

    if (userName.length >= 50) {
        return 'El nombre debe tener menos de 50 caracteres'
    }

    if (isValidateContainigOnlyLetters(userName)) {
        return 'El nombre solo debe contener caracteres'
    }

    return ''
}

function isValidateContainigOnlyLetters(text) {

    return (/[0-9 ]/g.test(text))
}




function validateForm() {
    const $form = document.querySelector('#letter-to-santa')

    const errors = {

        name: validateName($form.name.value),
        city: validateCity($form.city.value),
        'gift-description': validateGiftDescription($form['gift-description'].value)

    }

    handleErrors(errors)

}


document.querySelector('#send-letter').onclick = function(event) {

    event.preventDefault()

    validateForm()

}


function handleErrors(errors) {
    let countErrors = 0


    Object.keys(errors).forEach((key) => {

        if (errors[key].length !== 0) {

            showErrorStyles(key)
            showErrorMessage(errors[key])
            countErrors++

        } else {

            removeErrorStyle(key)
        }
    })


    if (countErrors === 0) {
        showSuccessMessage()
        redirectToWhishList()
    }
}

function showErrorStyles(error) {

    document.querySelector(`[name="${error}"]`).classList = 'error'
    document.querySelector(`[name="${error}"]`).value = ''
}

function showErrorMessage(error) {


    const $error = document.createElement('li')
    $error.innerHTML = error

    document.querySelector('#errors').appendChild($error)
}

function removeErrorStyle(error) {

    document.querySelector(`[name="${error}"]`).classList = ''
}

function showSuccessMessage() {

    document.querySelector('#letter-to-santa').className = 'hidden'
    document.querySelector('#success').className = ''
}

function redirectToWhishList() {
    const wishList = () => {
        window.location.href = 'wishlist.html'
    }
    setTimeout(wishList, 5000)
}