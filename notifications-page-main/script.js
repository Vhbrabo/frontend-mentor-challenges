const msgNaoLidas = document.querySelectorAll(".naolido");
const naoLer = document.getElementById("notifications");
const lerTudo = document.getElementById("lertudo");

naoLer.innerText = msgNaoLidas.length;

msgNaoLidas.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("naolido");
        const novasNaoLidas  = document.querySelectorAll(".naolido");
        naoLer.innerText = novasNaoLidas.length;
    })
})

lerTudo.addEventListener("click", () => {
    msgNaoLidas.forEach((message) => {
        message.classList.remove("naolido")
    })
    const novasNaoLidas = document.querySelectorAll(".naolido");
    naoLer.innerText = novasNaoLidas.length;
})