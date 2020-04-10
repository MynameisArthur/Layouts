const menuToggler = document.querySelector('.menu-toggle');


menuToggler.addEventListener('click',()=>{
    document.body.classList.toggle('open');
});