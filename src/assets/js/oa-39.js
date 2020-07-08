
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
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });
    

};