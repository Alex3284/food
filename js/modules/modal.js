function closeModal(modalSelector){
    const getWindow = document.querySelector(modalSelector);

    getWindow.classList.remove("show");
    getWindow.classList.add("hide");
    document.body.style.overflow = "";
}


function openModal(modalSelector, modalTimerId){
    const getWindow = document.querySelector(modalSelector);

    getWindow.classList.remove("hide");
    getWindow.classList.add("show");
    document.body.style.overflow = "hidden";
    
    if(modalTimerId){
    clearInterval(modalTimerId);
    }
}

function modal(triggerSelector, modalSelector, modalTimerId){
    
    let getBut = document.querySelectorAll(triggerSelector);
    const getWindow = document.querySelector(modalSelector);
   
    getBut.forEach(item=>{
        item.addEventListener("click", ()=> openModal(modalSelector, modalTimerId));
    });
    
    getWindow.addEventListener("click",(e)=>{
    if(e.target===getWindow || e.target.getAttribute('data-close')=="" ){
        closeModal(modalSelector);
        
    }
    });
    
    document.addEventListener("keydown",(e)=>{
        if(e.code === "Escape" && getWindow.classList.contains("show")){
            closeModal(modalSelector);
            
        }
    });
    
    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight>=
            document.documentElement.scrollHeight -1){
               openModal(modalSelector, modalTimerId);
               window.removeEventListener("scroll", showModalByScroll);
            }
    
    }
    window.addEventListener("scroll",showModalByScroll);
    
}

export default modal;
export {closeModal};
export {openModal};