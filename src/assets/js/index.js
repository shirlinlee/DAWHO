import mode from './modules/mode';
// import Vue from 'vue';
new Vue({
    el: '#appIndex',
    data: {
        message: 'Vue Installed',
        isLBOpen: false,
        isENVOpen: false,
    },
    mounted: function () {
        mode();
        $('.tooltip_btn').tooltipster({
            content: $('.tooltips_content'),
            contentCloning: true,
            animation: 'grow',
            side: 'bottom',
            arrow: false,
            animationDuration: 450,
            trigger: 'click',
            // distance: 7,
            maxWidth: '218px',
        });
    },
    methods: {
        openRights() {
            this.isLBOpen = true;
        },
        openEnv() {
            this.isENVOpen = true;
        },
    },
});
