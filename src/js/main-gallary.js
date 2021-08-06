(function(){
    const container = document.querySelector('.main-info__inner');
    const mainGallary = container.querySelector('.main-gallary');
    const mainImg = container.querySelector('.main-img__image');

    //выбранный элемент по умолчанию
    let currentElement = mainGallary.querySelector('.main-gallary__slide--active');
    setImgOnMain(currentElement)
    
    mainGallary.addEventListener('click', function(e){
        if(e.target.closest('.main-gallary__slide')){
            let currentElement = e.target.closest('.main-gallary__slide')
            setImgOnMain(currentElement)
        }
    })

    function setImgOnMain(element){
        if(mainGallary.querySelector('.main-gallary__slide--active')){
            mainGallary.querySelector('.main-gallary__slide--active').classList.remove('main-gallary__slide--active');
        }
        element.classList.add('main-gallary__slide--active');
        mainImg.src = element.querySelector('img').src;
    }
})();