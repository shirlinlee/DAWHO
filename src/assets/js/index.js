import mode from './modules/mode';
// import Vue from 'vue';
new Vue({
    el: '#appIndex',
    data: {
        message: 'Vue Installed',
        openLB: false,
    },
    mounted: function () {
        mode();
    },
    methods: {
        openRights() {
            this.openLB = true;
        },
    },
});
