(function(){
    const mainGallary = document.querySelector('.main-gallary');
    const gallaryContainer = mainGallary.querySelector('.main-gallary__container');
    const prev = mainGallary.querySelector('.main-gallary__prev');
    const next = mainGallary.querySelector('.main-gallary__next');


    const swiper = new Swiper(gallaryContainer, {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: next,
            prevEl: prev,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 3,
            //   spaceBetween: 10
            },
            500: {
                slidesPerView: 4,
                // spaceBetween: 10
              },
            600: {
                slidesPerView: 5,
                // spaceBetween: 10
            },
            // when window width is >= 480px
            780: {
              slidesPerView: 3,
            //   spaceBetween: 10
            },
            1000: {
                slidesPerView: 4,
              },
            1296: {
                slidesPerView: 5,
            },
            // when window width is >= 640px
            // 640: {
            //   slidesPerView: 4,
            //   spaceBetween: 40
            }
    })
})();