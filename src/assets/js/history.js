import mode from './modules/mode';
// import Vue from 'vue';
new Vue({
    el: '#appHistory',
    data: {},
    mounted: function () {
        mode();
        this.$nextTick(() => {
            $('.tooltip_btn').tooltipster({
                content: $('.tooltips_content'),
                contentCloning: true,
                animation: 'grow',
                side: 'bottom',
                arrow: false,
                animationDuration: 450,
                trigger: 'click',
            });

            $(window).on('scroll', function () {
                $('.tooltip_btn').tooltipster('hide');
            });
        });
    },
});
