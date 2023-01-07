const notifyMe = document.getElementById("notify")
const emailInput = document.getElementById("email")
const error = document.getElementById("error")


notifyMe.addEventListener("click", ()=>{
    emailInput.classList.remove("email-input")
    emailInput.classList.add("email-input-error")
    error.classList.remove("active")

})