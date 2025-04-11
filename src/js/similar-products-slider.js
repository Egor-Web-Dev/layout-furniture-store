const swiperOptions = {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  a11y: {
    slideLabelMessage: "Похожий товар {{index}} из {{slidesLength}}",
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
  },

  breakpoints: {
    320: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 16,
    },

    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 32,
    },

    1024: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 32,
    },

    1400: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
};

new Swiper(".swiper.js-similar-swiper", swiperOptions);
