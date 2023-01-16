const profile1 = document.querySelector(".profile1")
const profile2 = document.querySelector(".profile2")
const prev = document.querySelectorAll(".button1")
const next = document.querySelectorAll(".button2")

profile2.classList.add("desactive")

const change = () => {
    if(profile2.classList.contains("desactive")){
        profile2.classList.remove("desactive");
        profile1.classList.add("desactive");
    } else if (profile1.classList.contains("desactive")){
        profile1.classList.remove("desactive");
        profile2.classList.add("desactive");
    } else {
        profile2.classList.add("desactive");
    }
}

prev.forEach(item => item.addEventListener("click", change));
next.forEach(item => item.addEventListener("click", change));