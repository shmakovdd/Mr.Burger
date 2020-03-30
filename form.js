const myForm = document.querySelector('#form');
const sendButton = document.querySelector('#send');
const clearButton = document.querySelector('#clear');

const phone = myForm.elements.phone;

clearButton.addEventListener ('click', function(event) {
    event.preventDefault();
    let formElements = myForm.elements
    for( element of formElements) {
        element.value = '';
    }
})

phone.addEventListener ('keydown', function(event) {
    let isDigit = false;
    let isDash = false;
    let isControl = false;

    if ( event.key >=0 && event.key <=9) {
        isDigit = true;
    }  
    
    if (event.key == "-") {
        isDash = true;
    } 
    
    if (event.key == 'Backspace' || event.key == 'ArrowRight' || event.key == 'ArrowLeft') {
        isControl = true;
    }
    
    if (!isDigit && !isDash && !isControl) {
        event.preventDefault();
    }
})

sendButton.addEventListener('click', function(event) {

    if(validateForm(myForm)) {
        const data = new FormData();
        data.append("name", myForm.elements.name.value);
        data.append("phone", myForm.elements.phone.value);
        data.append("comment", myForm.elements.comment.value);
        data.append("to", "test@mail.ru");
        

        const xhr = new XMLHttpRequest();
        xhr.responseType ='json';
        xhr.open ('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send (JSON.stringify(data));
        xhr.addEventListener('load', ()=> {
            if (!xhr.response.status) {
                badMessage();    
            } else {
                goodMessage();
            }
        })
    }

    function badMessage() {
        const modalWindow = document.querySelector('.modalWindow');
        const modalText = document.querySelector('.modalWindow__text');
        modalText.textContent = 'Не удалось отправить запрос';
        modalWindow.classList.remove('modalWindow--closed');
        modalWindow.addEventListener('click', e=> {
            e.preventDefault();
            if (e.target === modalWindow) {
                modalWindow.classList.add('modalWindow--closed');
            }
        })
        modalWindow.querySelector('.modalWindow__close').addEventListener('click', e=> {
            modalWindow.classList.add('modalWindow--closed');
        })
    }

    function goodMessage() {
        const modalWindow = document.querySelector('.modalWindow');
        const modalText = document.querySelector('.modalWindow__text');
        modalText.textContent = 'Заказ отправлен';
        modalWindow.classList.remove('modalWindow--closed');
        modalWindow.addEventListener('click', e=> {
            e.preventDefault();
            if (e.target === modalWindow) {
                modalWindow.classList.add('modalWindow--closed');
            }
        })
        modalWindow.querySelector('.modalWindow__close').addEventListener('click', e=> {
            modalWindow.classList.add('modalWindow--closed');
        })
    }

    function validateForm(form) {
        let valid = true

        if (!validateField(form.elements.name)) {
            valid = false;
        }

        if (!validateField(form.elements.phone)) {
            valid = false;
        }

        if (!validateField(form.elements.comment)) {
            valid = false;
        }

        if (!validateField(form.elements.street)) {
            valid = false;
        }

        return valid;
    }

    function validateField(field) {
        if(!field.checkValidity()) {
            field.nextElementSibling.textContent = field.validationMessage;

            return false;
        } else {
            field.nextElementSibling.textContent = '';
            
            return true;
        }
    }
})