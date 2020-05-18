import mode from './modules/mode';
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const media = window.matchMedia("(max-width: 768px)");
let detectResize = false;



$(document).ready(function() {
    //cardSlick()

    if (!isMobile) {
        $('.custom-select').select2({
            //hide search
            minimumResultsForSearch: Infinity
        });
    } 

 
    
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
        bankArray: [],
        financial: [
            { from: '薪資所得', status: true },
            { from: '租金收入', status: false },
            { from: '退休金', status: true },
            { from: '營業收入', status: true },
            { from: '利息收入', status: false }
        ]
    },
    mounted: function () {
        mode();
        this.$nextTick(() => {
          
        });
    },
    computed: {
        financialFrom() {
            return [...this.financial].filter((item) => item.status)
        }
    },
    methods: {
        toggleBubble(i) {
            this.financial[i].status = !this.financial[i].status
        },
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



