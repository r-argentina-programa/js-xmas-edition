function displayWishes() {

    const $wishList = document.querySelector('.wish-list')

    for (i = 0; i < localStorage.length; i++) {

        const $wishOfAUser = document.createElement('li')
        let userKey = 'user' + i
        let userData = JSON.parse(localStorage.getItem(userKey))

        $wishOfAUser.appendChild(document.createTextNode(userData.giftDescription))
        $wishList.appendChild($wishOfAUser)
    }
}