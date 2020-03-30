function accordMenu() {

    const menulist = document.querySelector('.menu__list');
    const menuItem = document.querySelectorAll('.menu__item');


    menulist.addEventListener('click', e=> {
        e.preventDefault();
        let target = e.target.parentNode; // ссылка 
        let item = target.parentNode; // лишка
        let content = target.nextElementSibling; // контент
        if (e.target.classList.contains('menu__subtitle')) {
            console.log(e.target);
            moveMenu();
        }
        
        target = e.target;
        item = target.parentNode;
        content = target.nextElementSibling;

        if (e.target.classList.contains('menu__link')) {
            console.log(e.target);
            moveMenu();
        }

        function moveMenu() {
            for (iterator of menuItem) {
                if (iterator != item) {
                    iterator.classList.remove('menu__item--active');
                }
            }

            if (item.classList.contains('menu__item--active')) {
                item.classList.remove('menu__item--active')
            }   else {
                item.classList.add('menu__item--active');
            }
        }
    
    })

    

}

accordMenu();