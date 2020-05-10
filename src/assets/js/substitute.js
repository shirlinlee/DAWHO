import mode from './modules/mode';
// import Vue from 'vue';
new Vue({
    el: '#appSubstitute',
    data: {
        financial: [
            { from: '薪資所得', status: false },
            { from: '租金收入', status: false },
            { from: '退休金', status: false },
            { from: '營業收入', status: false },
            { from: '利息收入', status: false }
        ]
    },
    mounted: function () {
        mode();
        this.$nextTick(() => {
            //自動跳下一格
            $(".seperate-input .form-control").keyup(function () {
                if (this.value.length == this.maxLength) {
                    var $next = $(this).next('.form-control');
                    if ($next.length)
                        $(this).next('.form-control').focus();
                    else
                        $(this).blur();
                }
            });
        });
    },
    methods: {
        toggleBubble(i) {
            this.financial[i].status = !this.financial[i].status
        }
    }
});



