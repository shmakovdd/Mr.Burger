function reviewsPopup() {
    const review = document.querySelector('.reviews__list');
    const popup = document.querySelector('.popup');

    popup.addEventListener('click', e=> {
        e.preventDefault();
        if (e.target === popup) {
            popup.classList.add('popup--closed');
        }
    })

    review.addEventListener('click', function(e) {
        const target = e.target;

        if (e.target.classList.contains('btn')) {
            const name = target.parentNode.querySelector('.review__name').textContent;

            const text = target.parentNode.querySelector('.review__text').textContent;

            renderPopup(name, text)

        }

        function renderPopup(name, text) {



            popup.classList.remove('popup--closed');

            popup.querySelector('.popup__name').textContent = name;
            popup.querySelector('.popup__text').textContent = text;

            popup.querySelector('.popup__close').addEventListener('click', function(e) {
                e.preventDefault();
                popup.classList.add('popup--closed');
            })

        }

    })

}

reviewsPopup();