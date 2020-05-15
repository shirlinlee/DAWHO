import mode from './modules/mode';

const media = window.matchMedia("(max-width: 768px)");
let detectResize = false;



$(document).ready(function() {
    //cardSlick()
    $(window).resize(function () {
        //cardSlick()
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
}




new Vue({
    el: '#appOpen',
    data: {
        bankArray: []
    },
    mounted: function () {
        mode();
        this.$nextTick(() => {
          
        });
    },
    computed: {
       
    },
    methods: {
        openModal(id){
            console.log(id)
            $('.modal-backdrop').addClass('show');
            $(id).addClass('show');
        },
        closeModal(id) {
            $('.modal-backdrop').removeClass('show');
            $(id).removeClass('show');
        }
    }
});



