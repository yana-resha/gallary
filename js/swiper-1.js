
var swiper = new Swiper(".gallery__mySwiper", {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  slidesPerGroup: 3,
  spaceBetween: 50,
  pagination: {
    el: ".pagination-1",
    type: "fraction",
    clickable: true,
  },
  navigation: {
  nextEl: ".button-next-1",
  prevEl: ".button-prev-1",
  },

  breakpoints: {
    1401: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    1025: {
      slidesPerView: 3,
      spaceBetween: 34,
    },

    769: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    577: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1: {
      slidesPerView: 1,
      spaceBetween: 34,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
    }
  },
});

// var swiper = new Swiper(".gallery__swiper-320-adap", {
//   slidesPerView: 1,
//   spaceBetween: 50,
//   slidesPerGroup: 1,

//   pagination: {
//     el: '.pagination-1',
//     clickable: true,
//     type: "fraction",
//     },

//   navigation: {
//       nextEl: ".button-next-1",
//       prevEl: ".button-prev-1",
//   },

// });