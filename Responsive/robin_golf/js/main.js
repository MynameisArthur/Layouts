const body = document.querySelector('body');
const navContainer = document.querySelector('.nav-container');

window.addEventListener('scroll',(e)=>{
    if(window.scrollY > 150)
    {
        navContainer.classList.add('white-bg');         
    }
    else{
        navContainer.classList.remove('white-bg');  
    }
}
);