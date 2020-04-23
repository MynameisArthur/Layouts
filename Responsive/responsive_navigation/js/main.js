const menuIcons = document.querySelector('.menu-icons');
const nav = document.querySelector('nav');

menuIcons.addEventListener('click',()=>{
    nav.classList.toggle('active');
});

