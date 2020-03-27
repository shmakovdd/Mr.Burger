const list = document.querySelector('.bslider__list');
const widthList = document.querySelector('.bslider').clientWidth;
const controls = document.querySelector('.bslider__scroll');
var pos = 0;

function calcWidthList() {
    const itemsCount = list.children.length;
    const widthList = itemsCount * widthContainer; 

    list.style.width = `${widthList}px`;
}

controls.addEventListener ('click', function(event) {
    event.preventDefault();
    if (event.target.tagName === 'use') {
        slide(event.target);
    }
})


function slide(target) {
    const vector = target.dataset.vector;
    
    switch (vector) {
        case 'right': slideTo(vector); break;
        case 'left': slideTo(vector); break;
    }

}

function slideTo(vector) {
    const active = document.querySelector('.bslider__item--active');

    if (vector === "right") {
        var nextElement = active.nextElementSibling;
    } else {
        var prevElement = active.previousElementSibling;
    }

    if (nextElement) {
        pos -= widthList;
        active.classList.remove('bslider__item--active');
        nextElement.classList.add('bslider__item--active');
        translate(pos);
    } else if (prevElement) {
        pos += widthList;
        active.classList.remove('bslider__item--active');
        prevElement.classList.add('bslider__item--active');
        translate(pos);
    }
}

function translate(pos) {
    list.style.transform = `translateX(${pos}px)`;
}

function calcWidthList() {
    const itemLength = list.children.length;
    list.style.width = itemLength * widthList + 'px';

}



window.addEventListener ('load', calcWidthList);
