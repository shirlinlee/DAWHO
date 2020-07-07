import mode from './modules/mode';
// import Vue from 'vue';
new Vue({
    el: '#appDiscount',
    data: {},
    mounted: function () {
        mode();
        this.$nextTick(() => {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                centeredSlides: true,
            });
        });
    },
});
