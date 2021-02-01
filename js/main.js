let localStorageIndex = localStorage.length
console.log(localStorage.length)


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

    saveDataToLocalStorage()
    setTimeout(wishList, 5000)
}


//---------------------Local Storage-----------------------------------------



function displayWishes() {

    const $wishList = document.querySelector('#wish-list')

    const $wishOfAUser = document.createElement('li')

    const userKey = 'key'

    console.log(typeof(userKey))


    const userData = JSON.parse(localStorage.getItem(userKey))

    console.log(userData)
    console.log(typeof(userData))


    $wishOfAUser.appendChild(document.createTextNode(userData.giftDescription))

    $wishList.appendChild($wishOfAUser)
}