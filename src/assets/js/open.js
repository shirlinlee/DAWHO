import mode from './modules/mode';

const media = window.matchMedia("(max-width: 768px)")

new Vue({
    el: '#appOpen',
    data: {
       
    },
    mounted: function () {
        mode();
        this.$nextTick(() => {
            this.cardSlick()
            
        });
    },
    methods: {
       cardSlick() {
            if (media.matches) {
                $('#card-slider-slick').slick({
                    dots: true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
            }
       }
    }
});



