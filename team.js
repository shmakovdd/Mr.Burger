function accordeonTeam() {

    const workers = document.querySelectorAll('.team__item');
    const accordeon = document.querySelector('.team__accordeon');

    accordeon.addEventListener ('click', function(event) {

        const target = event.target;

        if(target.classList.contains('team__name')) {
            const worker = target.parentNode;
            const content = target.nextElementSibling;
            const contentHeight = content.firstElementChild.clientHeight;


            for (iterator of workers) {
                if (iterator !== worker) {
                    iterator.classList.remove('team__item--active');
                    iterator.lastElementChild.style.height = 0;
                }
            }

            if (worker.classList.contains('team__item--active')) {
                worker.classList.remove('team__item--active');
                content.style.height = 0;
                } else {
                    worker.classList.add('team__item--active');
                    content.style.height = contentHeight + "px";
                }
        }        
    
}) 
}

accordeonTeam();

