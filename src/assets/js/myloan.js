import mode from './modules/mode';
// import Vue from 'vue';
new Vue({
    el: '#appLoan',
    data: {
        listType: 'willPay',
    },
    mounted: function () {
        mode();
        this.$nextTick(() => {
            $('.list').on('click', 'li', function () {
                const opened = $(this).hasClass('open');
                $('.list li').removeClass('open').find('.detail').slideUp();
                if (opened) return;

                $(this).addClass('open').find('.detail').slideDown();
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

            $(window).on('scroll', function () {
                $('.tooltip_btn').tooltipster('hide');
            });

            $('.cw-notice-title').on('click', function () {
                $(this).toggleClass('active');
                $('.cw-notice-content').slideToggle();
            });

            $('.select_account').on('click', function () {
                $('.lb_wrapper').addClass('show');
                $('body').on('click', '.lb_wrapper a.f_gold', function () {
                    $('.lb_wrapper').removeClass('show');
                });
            });
        });
    },
    methods: {
        listHandler(type) {
            this.listType = type;
        },
    },
});
