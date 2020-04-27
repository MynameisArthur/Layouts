const navContainer = document.querySelector('.nav-container');
const menuToggler = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

window.addEventListener('scroll',(e)=>{
    if(window.scrollY > 150)
    {
        navContainer.classList.add('white-bg');         
    }
    else{
        navContainer.classList.remove('white-bg');  
    }
});
menuToggler.addEventListener('click',()=>{
    menuToggler.classList.toggle('active');    
    mobileNav.classList.toggle('open');
});