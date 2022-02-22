function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activClass){

    let tabs= document.querySelectorAll(tabsSelector);
    let tabsContent = document.querySelectorAll(tabsContentSelector);
    let tabHeader = document.querySelector(tabsParentSelector);


    function hideTabs(){
        tabsContent.forEach(item=>{
            item.classList.remove("show");
           item.classList.add("hide");
        });
        tabs.forEach(item=>{
           item.classList.remove(activClass);
        });
    }

    function showTab(i=0){
       tabsContent[i].classList.add('show');
       tabs[i].classList.add(activClass);
       tabsContent[i].classList.add('fade');
    }
    hideTabs();
    showTab();

    tabHeader.addEventListener('click',(event)=>{
         let target= event.target;
         if(target && target.classList.contains(tabsSelector.slice(1))){
             tabs.forEach((item,i)=>{
                if(item == target){
                    hideTabs();
                    showTab(i);
                }
             });
         }
    });
}

export default tabs;