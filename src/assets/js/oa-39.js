
$(document).ready(function () {

    var cardSwiper = new Swiper('#continue-choose-card-slider', {
        slidesPerView: 1, 
        spaceBetween: 16,
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
                spaceBetween: 16,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 16,
                centeredSlides: false,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 0,
                centeredSlides: true,
                loop: true
            },
        }
    });

});