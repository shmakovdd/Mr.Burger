// const myForm = document.querySelector('#form');
// const sendButton = document.querySelector('#send');
// const clearButton = document.querySelector('#clear');

// const phone = myForm.elements.phone;

// clearButton.addEventListener ('click', function(event) {
//     event.preventDefault();
//     let formElements = myForm.elements
//     for( element of formElements) {
//         element.value = '';
//     }
// })

// phone.addEventListener ('keydown', function(event) {
//     let isDigit = false;
//     let isDash = false;
//     let isControl = false;

//     if ( event.key >=0 && event.key <=9) {
//         isDigit = true;
//     }  
    
//     if (event.key == "-") {
//         isDash = true;
//     } 
    
//     if (event.key == 'Backspace' || event.key == 'ArrowRight' || event.key == 'ArrowLeft') {
//         isControl = true;
//     }
    
//     if (!isDigit && !isDash && !isControl) {
//         event.preventDefault();
//     }
// })

// sendButton.addEventListener('click', function(event) {

//     if(!validateForm(myForm)) {
//         const data = new FormData();
//         data.append("name", myForm.elements.name.value);
//         data.append("phone", myForm.elements.phone.value);
//         data.append("comment", myForm.elements.comment.value);
//         data.append("to", "test@mail.ru");
        

//         const xhr = new XMLHttpRequest();
//         xhr.responseType ='json';
//         xhr.open ('POST', 'https://webdev-api.loftschool.com/sendmail');
//         xhr.send (JSON.stringify(data));
//         xhr.addEventListener('load', ()=> {
//             if (!xhr.response.status) {
//                 badMessage();    
//             } else {
//                 goodMessage();
//             }
//         })
//     }

//     function badMessage() {
//         const modalWindow = document.querySelector('.modalWindow');
//         const modalText = document.querySelector('.modalWindow__text');
//         modalText.textContent = 'Не удалось отправить запрос';
//         modalWindow.classList.remove('modalWindow--closed');
//         modalWindow.addEventListener('click', e=> {
//             e.preventDefault();
//             if (e.target === modalWindow) {
//                 modalWindow.classList.add('modalWindow--closed');
//             }
//         })
//         modalWindow.querySelector('.modalWindow__close').addEventListener('click', e=> {
//             modalWindow.classList.add('modalWindow--closed');
//         })
//     }

//     function goodMessage() {
//         const modalWindow = document.querySelector('.modalWindow');
//         const modalText = document.querySelector('.modalWindow__text');
//         modalText.textContent = 'Заказ отправлен';
//         modalWindow.classList.remove('modalWindow--closed');
//         modalWindow.addEventListener('click', e=> {
//             e.preventDefault();
//             if (e.target === modalWindow) {
//                 modalWindow.classList.add('modalWindow--closed');
//             }
//         })
//         modalWindow.querySelector('.modalWindow__close').addEventListener('click', e=> {
//             modalWindow.classList.add('modalWindow--closed');
//         })
//     }

//     function validateForm(form) {
//         let valid = true

//         if (!validateField(form.elements.name)) {
//             valid = false;
//         }

//         if (!validateField(form.elements.phone)) {
//             valid = false;
//         }

//         if (!validateField(form.elements.comment)) {
//             valid = false;
//         }

//         if (!validateField(form.elements.street)) {
//             valid = false;
//         }

//         return valid;
//     }

//     function validateField(field) {
//         if(!field.checkValidity()) {
//             field.nextElementSibling.textContent = field.validationMessage;

//             return false;
//         } else {
//             field.nextElementSibling.textContent = '';
            
//             return true;
//         }
//     }
// })

const deliveryForm = document.querySelector('#form');
const deliverySubmit = document.querySelector('#send');
    deliverySubmit.addEventListener ('click', e => {
        e.preventDefault();
        if(!validateForm(deliveryForm)){
            var formData = new FormData(deliveryForm);
            formData.append("name", "deliveryForm.elements.name.value");
            formData.append("phone", "delivery.elements.phone.value");
            formData.append("comment", "deliveryForm.elements.comment.value");
            formData.append("to", "test@test.ru");

            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open("POST", "https://webdev-api.loftschool.com/sendmail/");
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.send(formData);
            xhr.addEventListener('load', ()=> {
                if (!xhr.response.status) {
                    let name = 'Ошибка';
                    let text = ''
                    renderPopup(name, text); 
                } else {
                    let name = 'Заказ отправлен';
                    let text = '';
                    renderPopup(name, text) ;
                }
            })
        }
    
      
        
    });
    function validateForm(form){
        let valid =true;
    
        if(!validateField(deliveryForm.elements.name)){
            valid = false;
        }
        if(!validateField(deliveryForm.elements.phone)){
            valid = false;
        }
        if(!validateField(deliveryForm.elements.comment)){
            valid = false;
        }
    }
    
    function validateField(field){
        field.nextElementSibling.textContent = field.validationMessage;
        return field.checkValidity();
    }

// const deliveryForm = document.querySelector('#deliveryForm');
// const deliverySubmit = document.querySelector('#deliverySubmit');
//     deliverySubmit.addEventListener ('click', e => {
//         e.preventDefault();
//         if(!validateForm(deliveryForm)){
//             var formData = new FormData(deliveryForm);
//             formData.append("to", "test@test.ru");
//             var xhr = new XMLHttpRequest();
//             xhr.responseType = 'json';
//             xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
//             xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
//             xhr.send(formData);
//             xhr.addEventListener('load', ()=> {

//             })
//         }
//     });
//     function validateForm(form){
//         let valid =true;
    
//         if(!validateField(deliveryForm.elements.name)){
//             valid = false;
//         }
//         if(!validateField(deliveryForm.elements.phone)){
//             valid = false;
//         }
//         if(!validateField(deliveryForm.elements.comment)){
//             valid = false;
//         }
//     }
    
//     function validateField(field){
//         field.nextElementSibling.textContent = field.validationMessage;
//         return field.checkValidity();
//     }

// const deliveryForm = document.querySelector('#form');
// const deliverySubmit = document.querySelector('#send');
//     deliverySubmit.addEventListener ('click', e => {
//         e.preventDefault();
//         if(!validateForm(deliveryForm)){
//             var formData = new FormData(deliveryForm);
//             formData.append("name", "deliveryForm.elements.name.value");
//             formData.append("phone", "delivery.elements.phone.value");
//             formData.append("comment", "deliveryForm.elements.comment.value");
//             formData.append("to", "test@test.ru");

//             var xhr = new XMLHttpRequest();
//             xhr.responseType = 'json';
//             xhr.open("POST", "https://webdev-api.loftschool.com/sendmail/fail");
//             xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
//             xhr.send(formData);
//             xhr.addEventListener('load', ()=> {
//                 if(xhr.response.status) {
//                     reviewTitle = "Заявка";
//                     reviewText = xhr.response.message;
//                     renderPopup(reviewTitle, reviewText);
//                 } else {
//                     reviewTitle = "Ошибка";
//                     reviewText = xhr.response.message;
//                     renderPopup(reviewTitle, reviewText);
//                 };
//             })
//         }
    
      
        
//     });
//     function validateForm(form){
//         let valid =true;
    
//         if(!validateField(deliveryForm.elements.name)){
//             valid = false;
//         }
//         if(!validateField(deliveryForm.elements.phone)){
//             valid = false;
//         }
//         if(!validateField(deliveryForm.elements.comment)){
//             valid = false;
//         }
//     }
    
//     function validateField(field){
//         field.nextElementSibling.textContent = field.validationMessage;
//         return field.checkValidity();
//     }