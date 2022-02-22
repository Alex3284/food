function slides({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    const getOffer = document.querySelector(container);
    const NumSlide = document.querySelector(currentCounter);
    const allSlide = document.querySelectorAll(slide);
    const total = document.querySelector(totalCounter);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow);
    const slidesWrapper = document.querySelector(wrapper);
    const slidesField = document.querySelector(field);
    const width = window.getComputedStyle(slidesWrapper).width;
    const points = [];
    
    
    let slideIndex = 1;
    let offset = 0;
    
    if(allSlide.length<10){
        total.textContent = `0${allSlide.length}`;
        NumSlide.textContent = `0${slideIndex}`;
    
    } else{
        total.textContent = `${allSlide.length}`;
        NumSlide.textContent = slideIndex;
    }
    
    
    
    slidesField.style.width = 100 * allSlide.length + '%';
    slidesField.style.display= 'flex';
    slidesField.style.transition = '0.5s all';
    
    slidesWrapper.style.overflow = 'hidden';
    
    allSlide.forEach(slide =>{
        slide.style.width = width;
    });
    
    next.addEventListener('click',()=>{
        if(offset == +width.replace(/\D/g, '') * (allSlide.length-1)){
    offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }
        console.log(slideIndex);
    
        slidesField.style.transform = `translateX(-${offset}px)`;
        if(slideIndex == allSlide.length){
            slideIndex=1;
        }else{
            slideIndex++;
        }
        points.forEach(i=>{i.style.opacity='0.5';});
    points[slideIndex-1].style.opacity = '1';
    
        
        swNumSlide(slideIndex);
       
        
    });
    
    prev.addEventListener('click',()=>{
        if(offset == 0){
    offset = +width.replace(/\D/g, '') * (allSlide.length-1);
        } else {
            offset -= +width.replace(/\D/g, '');
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        
    
        if(slideIndex == 1){
            slideIndex=allSlide.length;
        }else{
            slideIndex--;
        }
    swNumSlide(slideIndex);
    points.forEach(i=>{i.style.opacity='0.5';});
    points[slideIndex-1].style.opacity = '1';
        
    });
    
    function swNumSlide(num){
        if(allSlide.length<10){
            NumSlide.textContent = `0${num}`;
        }else{
            NumSlide.textContent = num;
        }
    }
    
    // points
    
    
    
    
    getOffer.style.position='relative';
    const divForOffer = document.createElement('div');
    divForOffer.classList.add('carousel-indicators');
    getOffer.append(divForOffer);
    
    function createPoints(){
        const getDiv = document.querySelector('.carousel-indicators');
        for(let i=1;i<=allSlide.length;i++){
            let createEl=document.createElement('div');
            createEl.classList.add('dot');
            createEl.setAttribute('data-point',`${i}`);
            getDiv.append(createEl);  
            points.push(createEl) ;    
        }
    }
    createPoints();
    
    
    points.forEach((item)=>{
      
            item.addEventListener('click',(e)=>{
                        let getPoint = e.target;
                        let data = getPoint.dataset.point;
                        slideIndex = data;
                        console.log(data);
                        
    
                            offset = +width.replace(/\D/g, '')*(data-1);
                            slidesField.style.transform = `translateX(-${offset}px)`;
                            swNumSlide(data);
                            points.forEach(i=>{i.style.opacity='0.5';});
                            points[slideIndex-1].style.opacity = '1';
                        });
}
    );
}
export default slides;