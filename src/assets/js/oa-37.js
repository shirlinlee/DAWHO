
$(document).ready(function () {

    var cardSwiper = new Swiper('#choose-card-slider', {
        slidesPerView: 1,
        spaceBetween: 12,
        centeredSlides: true,
        navigation: {
            nextEl: '.card-arrow-prev',
            prevEl: '.card-arrow-next',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 12,
                centeredSlides: false,
            },
            768: {
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