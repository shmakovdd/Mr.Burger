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
        const formData = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            comment: myForm.elements.comment.value,
            to: 'test@mail.com'
        };

        const xhr = new XMLHttpRequest();
        xhr.responseType ='json';
        xhr.open ('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send (JSON.stringify(formData));
        xhr.addEventListener('load', ()=> {
            console.log(xhr.response);
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