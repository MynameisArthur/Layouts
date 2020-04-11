const menuToggle = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.fa-times');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');

[menuToggle,closeBtn].forEach(item=>{
    item.addEventListener('click',()=>{
        nav.classList.toggle('active');
        overlay.classList.toggle('menu-open');
    });
});
overlay.addEventListener('click',()=>{
    nav.classList.remove('active');
    overlay.classList.remove('menu-open');
});