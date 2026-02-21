const menuBtn = document.querySelector(".menuImg")
const burgerMenu = document.querySelector(".burgerItems")
const menuImg = document.querySelector(".menuImg")

const form = document.getElementById("contactForm")
const publicKey = "huqCR8EwTkgK94aWK"
const templateID = "template_gpxuvo5"
const serviceID = "service_ixm37zr"

const menuIcon = "./assets/icons8-menu-50 (1).png"
const xIcon = "./assets/icons8-close-50.png"

menuBtn.onclick = () => {
    burgerMenu.classList.toggle("show")
    
    if(burgerMenu.classList.contains("show")){
        menuImg.src = xIcon
    } else{
        menuImg.src = menuIcon
    }
}

emailjs.init(publicKey)

form.addEventListener("submit", function(e){
    e.preventDefault()

    emailjs.sendForm(
        serviceID,
        templateID,
        this
    ).then(() => {
        alert("message sent")
        form.reset()
    }).catch((err) => {
        alert("message failed to send")
        console.error(err)
    })
})