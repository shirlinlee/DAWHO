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
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
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
        });
    },
});
