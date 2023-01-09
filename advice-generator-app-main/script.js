const adviceID = document.getElementById("advice-id");
const adviceText = document.getElementById("text2");
const button = document.getElementById("button");

axios.get("https://api.adviceslip.com/advice")
.then(function(response){
    const id = response.data.slip.id;
    adviceID.innerHTML = "advice " + "&num;" + id;

    let advices = response.data.slip.advice;
    adviceText.innerHTML = "&quot;" + advices + "&quot;";

    button.addEventListener("click", () => {
        refreshPage();
    })


})

.catch(function(error){
    console.log(error);
})


function refreshPage(){
    window.location.reload();
}