
$(document).ready(function () {
    //oa_37
    cardSwiper = new Swiper('#choose-card-slider', {
        init: true,
        slidesPerView: 'auto',
        spaceBetween: 12,
        //centeredSlides: true,
        navigation: {
            nextEl: '.card-arrow-prev',
            prevEl: '.card-arrow-next',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
});