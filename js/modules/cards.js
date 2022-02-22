import {getResource} from '../services/services';
function cards(){
    // let k = document.querySelector('.menu__field .container');

    class addElementMenu {
        constructor(src,alt,h,text,price,parentSelector, ...clases){
           this.src = src;
           this.alt = alt;
           this.h = h;
           this.text = text;
           this.price = price;
           this.clases = clases;
           this.parent = document.querySelector(parentSelector);
           this.transfer = 2.50;
           this.changeToBYN();
        }
    
        changeToBYN(){
            this.price = this.price * this.transfer;
        }
    
        addEl(){
            let  element = document.createElement("div");
            if(this.clases.length === 0){
                this.element = 'menu__item';
                element.classList.add('menu__item');
            } else{
                this.clases.forEach(className =>element.classList.add(className));
            }
            
            element.innerHTML += `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.h}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>
        `;
        this.parent.append(element);
        }
    }
    
   
    
    getResource('http://localhost:3000/menu')
       .catch(e =>{
         e = document.createElement("div");
         e.textContent = 'This card created no dynamically. Enable JSON-server';
     
         e.style.textAlign = 'center';
         e.classList.add('menu__item');
         document.querySelector(".menu .container").append(e);
         e.innerHTML += `
        <img src="img/tabs/vegy.jpg" alt=>
        <h3 class="menu__item-subtitle">Меню 'Фитнес'</h3>
        <div class="menu__item-descr">Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>9</span> руб/день</div>
        </div>
    `;
    

       })
         .then(data =>{
             data.forEach(({img, altimg, title, descr, price}) =>{
                 new addElementMenu(img, altimg, title, descr, price, ".menu .container").addEl();
             });
         });
         
}

export default cards;