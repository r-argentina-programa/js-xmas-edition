function displayWishes() {

    const $wishList = document.querySelector('.wish-list')

    const $wishOfAUser = document.createElement('li')

    for (i = 0; i < localStorage.length; i++) {
        let userKey = 'user' + i

        let userData = JSON.parse(localStorage.getItem(userKey))


        $wishOfAUser.appendChild(document.createTextNode(userData.giftDescription))

        $wishList.appendChild($wishOfAUser)

    }


}

displayWishes()