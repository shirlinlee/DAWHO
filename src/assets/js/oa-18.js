
$(document).ready(function () {
    console.log('2or4io3')
    //oa_18
    const breakpoint = window.matchMedia('(max-width:767px)');
    let mySwiper;
    const breakpointChecker = function () {
        if (breakpoint.matches === true) {
            // fire small viewport version of swiper
            return enableSwiper();
            // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {
            // clean up old instances and inline styles when available
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            // or/and do nothing
            return;
        }
    };
    const enableSwiper = function () {
        mySwiper = new Swiper('#card-slider-slick', {
            init: true,
            slidesPerView: 1.1,
            spaceBetween: 12,
            centeredSlides: true,
            navigation: {
                nextEl: '.card-arrow-prev',
                prevEl: '.card-arrow-next',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    };
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
    // var mySwiper = new Swiper('#card-slider-slick', {
    //     slidesPerView: 3,
    //     spaceBetween: 12,
    //     //init: true,
    //     navigation: {
    //         nextEl: '.swiper-button-prev',
    //         prevEl: '.swiper-button-next',
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     breakpoints: {
    //         // when window width is <= 640px     
    //         640: {
    //             init: true,
    //             slidesPerView: 1,
    //             spaceBetween: 12,
    //             centeredSlides: true,
    //             navigation: {
    //                 nextEl: '.swiper-button-prev',
    //                 prevEl: '.swiper-button-next',
    //             },
    //             pagination: {
    //                 el: '.swiper-pagination',
    //                 clickable: true,
    //             }
    //         }
    //     }
    // });
    //https://codepen.io/aaronkahlhamer/pen/GveaXP?editors=1010

});