function validateForm() {
    const $form = document.querySelector('#letter-to-santa')

    const errors = {

        name: validateName($form.name.value),
        city: validateCity($form.city.value),
        'gift-description': validateGiftDescription($form['gift-description'].value)

    }

    handleErrors(errors)

}

document.querySelector('#send-letter').onclick = (event) => {

    event.preventDefault()

    validateForm()

}

//---------------------Local-Storage--------------------------




function saveDataToLocalStorage() {

    const userName = document.form.name.value
    const userGiftDescription = document.form['gift-description'].value

    const key = 'user' + localStorageIndex


    localStorage.setItem(key, JSON.stringify({

        userName: userName,
        giftDescription: userGiftDescription
    }))

    localStorageIndex++
    console.log(key)
    return key

}