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
menuToggler.addEventListener('click',openMobileMenu);

function openMobileMenu()
{
    menuToggler.classList.toggle('active');    
    if(mobileNav.classList.contains('open')){
        mobileNav.style.animation = `slide-up 0.9s forwards`;      
        menuToggler.removeEventListener('click',openMobileMenu);    
    }   
    mobileNav.classList.toggle('open');
    setTimeout(()=>{
            mobileNav.style.animation = ``;
            menuToggler.addEventListener('click',openMobileMenu);
        },900);  
}

    

