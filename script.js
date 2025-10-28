const burgerMenu = document.querySelector(".burger")
const burgerItems = document.querySelector(".burgerItems")
let shown = false

burgerMenu.onclick = () => {
    shown ? burgerItems.style.display = "none" : burgerItems.style.display = "flex"  
    shown = !shown
}