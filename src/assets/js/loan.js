import mode from './modules/mode';
// import Vue from 'vue';
new Vue({
    el: '#appLoan',
    data: {},
    mounted: function () {
        mode();
        this.$nextTick(() => {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1.24,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        });
    },
    methods: {},
});
