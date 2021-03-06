import mode from './modules/mode';
// import Vue from 'vue';
var vm = new Vue({
    el: '#re',
    data: {
        amount: '',
        quantity: '',
        price: '',
        amount_error: false,
        quantity_error: false,
        price_error: false,
    },
    watch: {
        amount: (val) => {
            vm.price = Number(val) * Number(vm.quantity);
        },
        quantity: (val) => {
            vm.price = Number(val) * Number(vm.amount);
            // if (Number(val) > 20) vm.quantity_error = true;
        },
    },
    mounted: function () {
        mode();
        this.$nextTick(() => {
            //  輪播
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1.13,
                centeredSlides: true,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            // 刪除swipe init
            var numListContainer = $('.num-list-container');
            numListContainer
                .hammer()
                .bind('swipeleft', function (e) {
                    numListContainer.removeClass('swipeleft');
                    numListContainer
                        .siblings('.num-list-delete')
                        .removeClass('swipeleft');

                    $(this).addClass('swipeleft');
                    setTimeout(() => {
                        $(this)
                            .siblings('.num-list-delete')
                            .addClass('swipeleft');
                    }, 300);
                })
                .bind('swiperight', function (e) {
                    setTimeout(() => {
                        $(this)
                            .siblings('.num-list-delete')
                            .removeClass('swipeleft');
                    }, 0);
                    $(this).removeClass('swipeleft');
                });

            // 常用號碼打開燈箱+點擊功能
            $('.swiper-slide').on('click', 'img', function () {
                const $TEXT = $(this).parents('.text');
                $TEXT.addClass('edit').find('input').focus();
                $TEXT.find('input').blur(function () {
                    $TEXT.removeClass('edit');
                });
            });

            // 常用號碼打開燈箱+點擊功能
            $('.receive-info').on('click', 'a.regular', function () {
                $('.lb_wrapper').addClass('show');
            });

            $('.lb_wrapper').on('click', '.head a', function () {
                $('.lb_wrapper').removeClass('show');
            });

            $('.receive-info').on('click', 'li', function () {
                $(this).toggleClass('active');
            });
        });
    },
});
