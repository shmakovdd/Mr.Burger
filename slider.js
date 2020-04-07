const list = document.querySelector('.bslider__list');
const widthList = document.querySelector('.bslider').clientWidth;
const controls = document.querySelector('.bslider__link');
var pos = 0;

function calcWidthList() {
    const itemsCount = list.children.length;
    const widthList = itemsCount * widthContainer; 

    list.style.width = `${widthList}px`;
}

controls.addEventListener ('click', function(event) {
    console.log(event.target);
    event.preventDefault();
    if (event.currentTarget.tagName === 'use') {
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



// $(function() {

//     const containerWidth = $('.bslider').width();
//     const items = $('.bslider').find('.bslider__item');
//     const itemCount = items.length;
//     pos = 0;

//     function calcListWidth(container, itemCount) {
//         listWidth = container * itemCount;
//         $('.bslider').find('.bslider__list').width(listWidth);
  
//     }

//     calcListWidth(containerWidth, itemCount);

//     function translate(pos) {
//         $('.bslider').find('.bslider__list').css({
//             'transform': `translateX(${pos}px)`
//         });
//     } 


//     $('.bslider__link').on('click', function(e) {
//         e.preventDefault();
//         var $this = $(this);
//         slide($this)    

//         function slide (target) {
//             const vector = target.attr('class');
//             switch (vector) {
//                 case 'bslider__link bslider__link--right': slideTo(vector); break;
//                 case 'bslider__link bslider__link--left': slideTo(vector); break;
//             }
//         };

//         function slideTo(vector) {
//             let activeItem = items.filter('.bslider__item--active'),
//                 nextElem, prevElem;
            
//             if(vector === 'bslider__link bslider__link--right') {
//                nextElem = activeItem.next(); 

//             } else {
//                 prevElem = activeItem.prev();
//             }

//             if (nextElem.length) {
//                 pos -= containerWidth;
//                 activeItem.removeClass('bslider__item--active');
//                 nextElem.addClass('bslider__item--active')
//                 translate(pos);
//                 console.log(nextElem.length)
//             } else if (prevElem.length) {
//                 pos += containerWidth;
//                 activeItem.removeClass('bslider__item--active');
//                 prevElem.addClass('bslider__item--active');
//                 translate(pos);
//             }
//         }



        
//     })
// })

