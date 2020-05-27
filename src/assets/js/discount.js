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
                slidesPerView: 1.1,
                centeredSlides: true,
                on: {
                    slideChange: () => {
                        console.log(this.status1);
                        this.status1 = !this.status1;
                    },
                },
            });
        });
    },
});
