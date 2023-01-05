const mainCard = document.getElementById("main-card")
const secondCard = document.getElementById("second-card")
const submitButtom = document.getElementById("submit-buttom")
const rating = document.getElementById("rating")
const vote = document.querySelectorAll(".botao")

submitButtom.addEventListener("click", () =>{
    secondCard.classList.remove("hide")
    mainCard.classList.add("hide")
})

vote.forEach((vote) => {
    vote.addEventListener("click", () => {
        rating.innerHTML = vote.innerHTML
    })
})