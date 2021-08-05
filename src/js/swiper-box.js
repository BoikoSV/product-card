(function () {
  const swiperBoxes = document.querySelectorAll(".swiper-box");

  swiperBoxes.forEach((section) => {
    let swiperContainer = section.querySelector(".swiper-container");

    new Swiper(swiperContainer, {
      navigation: {
        nextEl: section.querySelector(".swiper-button-next"),
        prevEl: section.querySelector(".swiper-button-prev"),
      },
      slidesPerView: 1,
      spaceBetween: 10,
      
      breakpoints: {
          
        370: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        
        590: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        
        770: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        960: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        1150: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
      },
    });
  });
})();
