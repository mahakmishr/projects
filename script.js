
const header = document.querySelector('header');

function changeHeaderBackground() {
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#333'; 
    } else {
        header.style.backgroundColor = 'transparent'; // 
    }
}

window.addEventListener('scroll', changeHeaderBackground);
