const navContainer = document.querySelector('.nav-container');
const menuToggler = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const slider = document.querySelector('.slider');
const roundBtns = slider.querySelectorAll('.round-btn');


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

roundBtns.forEach(btn=>btn.addEventListener('click',(e)=>{
    const current = slider.querySelector('.current-slide');
    const slides = slider.querySelectorAll('.slider-container_item');
    let currentIndex = [...slides].indexOf(current);
    current.classList.remove('current-slide');
    if(e.target.classList.contains('go-left'))
    {
         if(currentIndex === 0)   
         {
             currentIndex = 3;
         }
         slides[currentIndex - 1].classList.add('current-slide');
    }
    else if(e.target.classList.contains('go-right'))
    {
        if(currentIndex === 2)   
        {
            currentIndex = -1;
        }       
        slides[currentIndex + 1].classList.add('current-slide');
    }
}));
