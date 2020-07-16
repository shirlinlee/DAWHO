
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
            480: {
                slidesPerView: 1.1,
                spaceBetween: 12,
                centeredSlides: true
            },
            500: {//768
                slidesPerView: 'auto',
                spaceBetween: 12,
                centeredSlides: false,
            },
            992: {
                slidesPerView: 'auto',
                spaceBetween: 12,
                centeredSlides: false,
            },
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 12,
                centeredSlides: false,
            },
        }
    });
   
});