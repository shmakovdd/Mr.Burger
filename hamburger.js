let hamburger = document.querySelector('.hamburger');
let body = document.querySelector('body');
let hidden = document.querySelector('.hidden');
let links = document.querySelectorAll('.hidden__link');


links.forEach(function(element) {
    element.addEventListener( "click", toggleMenu );
    }
)

function toggleMenu() {
    hamburger.classList.toggle('hamburger--active');
    body.classList.toggle('body--active');
    hidden.classList.toggle('hidden--active');
}

hamburger.addEventListener('click', toggleMenu);