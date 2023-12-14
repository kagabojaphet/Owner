let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active')
}


window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    header.classList.remove('active')
}


const openpopupbutton=document.getElementById("open-popup")
const closepopupbutton=document.getElementById("close-popup")
const popupcontainer=document.getElementById("popup-container")

function openpopup(){
    popupcontainer.style.display ="block";
}

function closepopup(){
    popupcontainer.style.display ="none";
}

openpopupbutton.addEventListener("click",openpopup);
closepopupbutton.addEventListener("click",closepopup);