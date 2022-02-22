import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import form from './modules/form';
import slides from './modules/slides';
import {openModal} from './modules/modal';
document.addEventListener("DOMContentLoaded",()=>{

    let modalTimerId = setTimeout(()=> openModal('.modal',modalTimerId),5000);

    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
    modal("[data-modal]", ".modal", modalTimerId);
    timer('.timer', '2022-02-18');
    cards();
    calc();
    form('form',modalTimerId);
    slides({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: ".offer__slide",
        totalCounter: '#total',
        currentCounter: ".offer__slider-counter #current",
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

                    
                    });
    


