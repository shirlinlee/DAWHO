import mode from './modules/mode';
// import Vue from 'vue';
new Vue({
    el: '#appDiscount',
    data: {
        status1: true,
    },
    mounted: function () {
        mode();
        this.$nextTick(() => {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1.16,
                centeredSlides: true,
                on: {
                    slideChange: () => {
                        this.status1 = !this.status1;
                    },
                },
            });
        });
    },
});
