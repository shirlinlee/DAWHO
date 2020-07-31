import mode from './modules/mode';
// import Vue from 'vue';
new Vue({
    el: '#appLoan',
    data: {
        listType: 'willPay',
    },
    mounted: function () {
        mode();
        this.$nextTick(() => {});
    },
    methods: {
        listHandler(type) {
            console.log(type);
            this.listType = type;
        },
    },
});
