import mode from './modules/mode';

const media = window.matchMedia("(max-width: 768px)");
let detectResize = false;



$(document).ready(function() {
    cardSlick()
    $(window).resize(function () {
        cardSlick()
    });
});

function cardSlick() {
    $('#card-slider-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

        // $('#card-slider-slick').slick({
        //     dots: true,
        //     infinite: false,
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        // });
 
      
}

new Vue({
    el: '#appOpen',
    data: {
       
    },
    mounted: function () {
        mode();
        this.$nextTick(() => {
            // $('#card-slider-slick').slick({
            //     dots: true,
            //     infinite: false,
            //     speed: 200,
            //     slidesToShow: 1,
            //     mobileFirst: true,
            //     responsive: [
            //         {
            //             breakpoint: 768,
            //             settings: 'unslick'
            //         }
            //     ]
            // });
            
        });
    },
    methods: {
       
    }
});



