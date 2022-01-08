
var swiper = new Swiper(".SecondSwiper", {
slidesPerView: 3,
spaceBetween: 50,
slidesPerGroup: 3,

pagination: {
            el: '.for-2-swiper-pagination',
            clickable: true,
            type: "fraction",
            },
navigation: {
            nextEl: ".for-2-swiper-next",
            prevEl: ".for-2-swiper-prev",
        },

        breakpoints: {
            1025: {
              slidesPerView: 3,
              spaceBetween: 50,
              slidesPerGroup: 3,
            },

            769: {
                slidesPerView: 2,
                spaceBetween: 50,
                slidesPerGroup: 2,
            },

            577: {
              slidesPerView: 2,
              spaceBetween: 34,
              slidesPerGroup: 2,
            },

          }
        
        });
