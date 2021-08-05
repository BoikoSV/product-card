
(function(){
    const adsContainer = document.querySelector('.banner__container');

    let swiper = new Swiper(adsContainer, {
        speed: 800,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        pagination: {
            el: adsContainer.querySelector('.banner__pagination'),
            type: 'bullets',
            clickable: true
          },
        
    })
})();