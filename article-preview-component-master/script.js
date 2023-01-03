'use strict'

const shareButtom = document.getElementById("share-buttom")
const active = document.getElementById("active")
const shareButtom2 = document.getElementById("share-buttom-2")

shareButtom.addEventListener('click', ()=>{
    active.classList.toggle('active-state');
});

shareButtom2.addEventListener('click', ()=>{
    active.classList.toggle('active-state');
});