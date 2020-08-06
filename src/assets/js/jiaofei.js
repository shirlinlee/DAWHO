(function ($) {
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
            drawerBankCode: false,
            drawerCommonBankCode: false,
            numTel: '',
            numListLi: -1,
            ccNumber: '',
            ccName: '',
            ccProcessName: '',
            ccCreditNumber: '1234 － 5678 － 9011 － 1213',
            ccCreditName: '我的金卡',
            creditMoney: '',
            searchValue: '',
            searchCommonValue: '',
            valueBank: '',
            valueCommonBank: '004 台灣分行',
            BankList: [],
            jfCreditCard: false,
        },
        computed: {
            filteredBankList() {
                return this.BankList.filter(
                    (item) =>
                        (item.code + item.name).indexOf(this.searchValue) > -1
                );
            },
            filteredCommonBankList() {
                return this.BankList.filter(
                    (item) =>
                        (item.code + item.name).indexOf(
                            this.searchCommonValue
                        ) > -1
                );
            },
        },
        methods: {
            clickNumListLi(v) {
                // $('.num-list li .num-list-container.swipeleft').index('.num-list li .num-list-container')
                if (
                    $('.num-list li .num-list-container.swipeleft').length == 0
                ) {
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
            switchDrawer(target, status) {
                this[target] = status;
            },
            handlerCreditCN(event) {
                const { id, value } = event.target;
                if (value.length === 4) {
                    var next = '';
                    switch (id) {
                        case 'CN1':
                            next = 'CN2';
                            break;
                        case 'CN2':
                            next = 'CN3';
                            break;
                        case 'CN3':
                            next = 'CN4';
                            break;
                        case 'CN4':
                            break;
                    }
                    const nextInput = document.getElementById(next);
                    nextInput && nextInput.focus();
                }
            },
            handlerCreditCNFocus(event) {
                this.jfCreditCard = true;
            },
            handlerCreditCNFocusOut(event) {
                this.jfCreditCard = false;
            },
        },
        mounted: function () {
            this.BankList = _htmlBankList;
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
                if ($('.jf-credit-number').length > 0)
                    new Cleave('.jf-credit-number', {
                        delimiter: ' － ',
                        blocks: [4, 4, 4, 4],
                    });
            });
        },
    });
})(jQuery);
