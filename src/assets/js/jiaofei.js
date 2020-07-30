(function ($) {})(jQuery);

import mode from './modules/mode';
new Vue({
    el: '#appJiaofei',
    data: {
        drawerTel: false,
        drawerCommon: false,
        drawerCommonCreate: false,
        drawerProcessCommonCreate: false,
        drawerCreditCommon: false,
        drawerCreditCommonCreate: false,
        drawerCreditIDCard: false,
        drawerCreditCommonCreate2: false,
        numTel: '',
        numListLi: -1,
        ccNumber: '',
        ccName: '',
        ccProcessName: '',
        ccCreditNumber: '1234 － 5678 － 9011 － 1213',
        ccCreditName: '我的金卡',
        creditMoney: '',
    },
    methods: {
        clickNumListLi(v) {
            // $('.num-list li .num-list-container.swipeleft').index('.num-list li .num-list-container')
            if ($('.num-list li .num-list-container.swipeleft').length == 0) {
                if (this.numListLi == v) {
                    this.numListLi = -1;
                } else {
                    this.numListLi = v;
                }
            }
        },
        openEnv() {
            this.isENVOpen = true;
        },
    },
    mounted: function () {
        this.$nextTick(() => {
            // 電信公司 - 選擇
            $('#item-select > select').on('change', function (e) {
                $('#item-tel').hide();
                $('#item-mobile').hide();
                switch ($(this).val()) {
                    case '遠傳電信':
                        $('#item-mobile').show();
                        break;
                    case '中華電信':
                        $('#item-tel').show();
                        break;
                    default:
                }
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

            var numListDelete = $('.num-list-delete');
            numListDelete.on('click', function () {
                $(this).parent().hide();
            });

            // 信用卡卡號
            var cleave = new Cleave('.jf-credit-number', {
                delimiter: ' － ',
                blocks: [4, 4, 4, 4],
            });
        });
    },
});
