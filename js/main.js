import Swiper from '../node_modules/swiper/swiper-bundle';



new Swiper(".main-visual .swiper", {
  grabCursor: true,
  // loop: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


new Swiper('.swiper-section .swiper', {
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  slidesPerView: 2,
  spaceBetween: 20,
  centeredSlides: true,
});

new Swiper(".notice-section .swiper", {
  direction: "vertical",
  loop: true,
  simulateTouch: false,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
});
