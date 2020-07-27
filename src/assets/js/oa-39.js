
window.onload = function () {
    const sliderCount = $('.swiper-slide').length;
    //detect sliders count
    if (sliderCount <= 2) {
        $('#continue-choose-card-slider').addClass('only-two-slider');
        $('.only-two-slider').slick({
            //dots: true,
            centerMode: true,
            centerPadding: '2%',
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: '80px',
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        infinite: true
                    }
                }
            ]
        });
    } else {
        $('#continue-choose-card-slider').slick({
             //dots: true,
                centerMode: true,
                centerPadding: '2%',
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: '0',
                        //centerPadding: '80px',
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: true,
                        infinite: true
                    }
                }
            ]
        });
    }
  
    

};