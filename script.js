//html elements
const menu = document.querySelector(".menuIcon")
const menuItems = document.querySelector(".navContainer")
const exit = document.querySelector(".exitIcon")

//variables
let clicked = false

//menu icon click event
menu.onclick = () => {
    menuItems.style.display = "inline"
    exit.style.display = "inline"
    menu.style.display = "none"

}

//exit icon click event
exit.onclick = () => {
    menuItems.style.display = "none"
    exit.style.display = "none"
    menu.style.display = "inline"
}