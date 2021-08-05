

(function(){
    const descriptionSliderBox = document.querySelector('.description__slider');
    const descriptionSliderContainer = descriptionSliderBox.querySelector('.description__swiper-container');

    const swiper = new Swiper(descriptionSliderContainer, {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: descriptionSliderContainer.querySelector('.description__next'),
            prevEl: descriptionSliderContainer.querySelector('.description__prev'),
          },
          breakpoints: {
              
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            
            500: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            
            // 640: {
            //   slidesPerView: 4,
            //   spaceBetween: 40
            // }
          }
    })
})();