const hamburgerMenu = document.querySelector('.hamburger-menu');
const toggle = document.querySelectorAll('.toggle');
const navList = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click',()=>{
    toggle.forEach(item=>item.classList.toggle('open'));
    navList.classList.toggle('open');
});