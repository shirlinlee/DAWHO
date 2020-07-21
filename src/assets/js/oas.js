import mode from './modules/mode';


$(document).ready(function () {
    scrollFixedBtn();
    $(window).scroll(function () {
        scrollFixedBtn();
    });
});

//scroll fixed
function scrollFixedBtn() {
    let bottomBtn = $('.bottom-area').length;
    if (bottomBtn < 1) return false;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        $('.bottom-area-box').removeClass('fixed')
    } else {
        $('.bottom-area-box').addClass('fixed')
    }
}

// import Vue from 'vue';
new Vue({
    el: '#appOas',
    data: {
        financial: [
            { from: '薪資所得', status: true },
            { from: '租金收入', status: false },
            { from: '退休金', status: true },
            { from: '營業收入', status: true },
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
    computed: {
    },
    methods: {
        toggleBubble(i) {
            this.financial[i].status = !this.financial[i].status
        }
    }
});





