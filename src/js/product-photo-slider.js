/* eslint no-undef: "off" */

// Product thumbnails slider
const thumbsSlider = new Swiper(".swiper.js-product-thumbs-swiper", {
  slidesPerView: "auto",

  a11y: {
    slideLabelMessage: "Миниатюра фото товара {{index}} из {{slidesLength}}",
    prevSlideMessage: "Предыдущие миниатюры",
    nextSlideMessage: "Следующие миниатюры",
  },

  breakpoints: {
    320: {
      spaceBetween: 38,
      direction: "horizontal",
    },

    768: {
      spaceBetween: 18,
      direction: "vertical",
    },

    1024: {
      spaceBetween: 38,
      direction: "horizontal",
    },
  },
});

// Product photos slider
new Swiper(".swiper.js-product-photos-swiper", {
  spaceBetween: 16,

  thumbs: {
    swiper: thumbsSlider,
  },

  a11y: {
    slideLabelMessage: "Фото товара {{index}} из {{slidesLength}}",
    prevSlideMessage: "Предыдущее фото",
    nextSlideMessage: "Следующее фото",
  },
});
