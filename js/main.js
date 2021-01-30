let localStorageIndex = localStorage.length
console.log(localStorage.length)


function getUserName() {
    return document.querySelector('#letter-to-santa').name.value
}

const userName = getUserName()

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
        saveDataToLocalStorage()
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
    saveDataToLocalStorage()
}


//---------------------Local Storage-----------------------------------------

function saveDataToLocalStorage() {

    const userName = document.form.name.value
    const userGiftDescription = document.form['gift-description'].value

    const key = 'user' + localStorageIndex


    localStorage.setItem(key, JSON.stringify({

        userName: userName,
        giftDescription: userGiftDescription
    }))

    localStorageIndex++

    return key

}

function showDataTheLocalStorage(userData) {

    return JSON.parse(localStorage.getItem(userData))
}

function displayWishes() {

    const $wishList = document.querySelector('#wish-list')

    const $wishOfAUser = document.createElement('li')

    const userData = saveDataToLocalStorage()

    $wishOfAUser.appendChild(userData.giftDescription)

    $wishList.appendChild($wishOfAUser)







}