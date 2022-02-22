import{closeModal, openModal} from './modal';
import{postData} from '../services/services';

function form(formSelector,modalTimerId){
    let forms = document.querySelectorAll(formSelector);
    let message = {
        loading: 'img/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };
    
    forms.forEach(item => {
        bindPostData(item);
    });
    
    
    
    function bindPostData(form){
        console.log(form);
        form.addEventListener('submit', (e)=>{
             e.preventDefault();
    
             let statusMessage = document.createElement("img");
             statusMessage.src = message.loading;
             statusMessage.style.cssText = `
                  display: block;
                  margin: 0 auto;
             `;
             form.insertAdjacentElement('afterend', statusMessage);
             
             let formData = new FormData(form);
             let json = JSON.stringify(Object.fromEntries(formData.entries()));
            
            postData('http://localhost:3000/requests', json)
            .then(data=>{
                console.log(data);
                showThanks(message.success);
                statusMessage.remove();
    
            }).catch(()=>{
                showThanks(message.failure);
                statusMessage.remove();
            }).finally(()=>{
                form.reset();
                statusMessage.remove();
            });
    
            
        });
    }
    
    function showThanks(message){
        let prevModal = document.querySelector(".modal__dialog");
        prevModal.classList.add('hide');
        openModal('.modal', modalTimerId);
    
        let thanksModal = document.createElement('div');
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
            <div class="modal__content">
                 <div class="modal__close" data-close>×</div>
                 <div class="modal__title">${message}</div>
            </div>
        `;
    
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() =>{
             thanksModal.remove();
            
             prevModal.classList.remove('hide');
             closeModal('.modal');
        },4000);
    }
    
    
    
    
    fetch ('http://localhost:3000/menu')
       .then(data => data.json())
       .then(res => console.log(res));
    
}

export default form;