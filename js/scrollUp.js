var Btn = document.getElementById('Scroll_up');
window.addEventListener('scroll',()=> {
    if(window.scrollY > 300) {
        Btn.style.visibility = 'visible';
        Btn.style.opacity = '1';
    }
    else {
        Btn.style.visibility = 'hidden';
        Btn.style.opacity = '0'; 
    }
})