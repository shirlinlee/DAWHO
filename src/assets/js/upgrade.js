import mode from './modules/mode';
// import Vue from 'vue';
new Vue({
    el: '#appUpgrade',
    mounted: function () {
        mode();
        this.$nextTick(() => {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1.16,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
            $('.tooltip_btn').tooltipster({
                content: $('.tooltips_content'),
                contentCloning: true,
                animation: 'grow',
                side: 'bottom',
                arrow: false,
                animationDuration: 450,
                trigger: 'click',
            });
        });
    },
});
