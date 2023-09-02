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

let popup = document.querySelector('#menu-popup');
let forms = document.querySelector('.popup-container');

popup.onclick = ()=>{
    popup.classList.toggle('fa-times');
    forms.classList.toggle('active')
}


window.onscroll = ()=>{
    popup.classList.remove('fa-times');
    forms.classList.remove('active')
}

