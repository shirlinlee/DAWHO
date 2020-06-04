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
