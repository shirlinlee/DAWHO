
window.onload = function () {
    // console.log("window loaded")
    $('#continue-choose-card-slider').on('init', function (event, slick) {
        if (slick.$slides.length == 2) {
            $(this).addClass('only-two')
        } 
    });
    $('#continue-choose-card-slider').slick({
        //dots: true,
        centerMode: true,
        centerPadding: '4%',
        slidesToShow: 3,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '80px',
                    slidesToShow: 1
                }
            }
        ]
    });
    
    // var cardSwiper = new Swiper('#continue-choose-card-slider', {
    //     slidesPerView: 1, 
    //     spaceBetween: 16,
    //     centeredSlides: true,
    //     navigation: {
    //         nextEl: '.card-arrow-prev',
    //         prevEl: '.card-arrow-next',
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     breakpoints: {
    //         640: {
    //             slidesPerView: 2,
    //             spaceBetween: 16,
    //             centeredSlides: false,
    //         },
    //         768: {
    //             slidesPerView: 3,
    //             spaceBetween: 16,
    //             centeredSlides: false,
    //         },
    //         1024: {
    //             slidesPerView: 'auto',
    //             spaceBetween: 0,
    //             //centeredSlides: true,
    //             // loop: true
    //         },
    //     }
    // });

};