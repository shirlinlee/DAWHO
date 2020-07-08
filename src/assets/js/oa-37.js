
$(document).ready(function () {
 
    var cardSwiper = new Swiper('#choose-card-slider', {
        slidesPerView: 1.1, 
        spaceBetween: 12,
        centeredSlides: true,
        navigation: {
            nextEl: '.card-arrow-next',
            prevEl: '.card-arrow-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1.1,
                spaceBetween: 12,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 12,
                centeredSlides: true,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 12,
                centeredSlides: false,
            },
        }
    });
   
});