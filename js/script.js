const header = document.querySelector("header");
const body = document.querySelector('body');
const dark = document.querySelector('.dark');
const icon = document.querySelector('.btn_icon');

var imgAtual = "img/logo.png";
var imgAnterior = "img/logo-dark.png"


window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 130)
})

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    menulist.classList.remove('open');
}

var typed = new Typed(".input",{
    strings:["Back-end.","Front-end.","Full-stack."],
    typeSpeed: 120,
    backSpeed: 70,
    loop: true,
})

dark.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    
const logo = document.getElementById('imagem').src = imgAtual;
let aux = imgAtual;
imgAtual = imgAnterior;
imgAnterior = aux;

    if(body.classList.contains('darkmode')){
        icon.classList.remove('ri-sun-fill');
        icon.classList.add('ri-moon-fill');
        icon.classList.remove()
    }else{
        icon.classList.remove('ri-moon-fill');
        icon.classList.add('ri-sun-fill');
    }


    setTimeout( () =>{
        icon.classList.remove('animated');
    }, 500)
})