import mode from './modules/mode';
//import { IgnorePlugin } from 'webpack';
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const deviceMedia = window.matchMedia("(max-device-width: 767px)");
let detectResize = false;

new Vue({
    el: '#appOpen',
    data: {
        birthDate: null,//oa-7
        bankObj: [//oa_20
            { bankCode: '004', bankName: '台灣銀行' },
            { bankCode: '005', bankName: '土地銀行' },
            { bankCode: '006', bankName: '合作金庫' },
            { bankCode: '007', bankName: '第一銀行' },
            { bankCode: '008', bankName: '華南銀行' },
            { bankCode: '009', bankName: '彰化銀行' },
            { bankCode: '010', bankName: '華僑銀行' },
            { bankCode: '011', bankName: '上海商銀' },
            { bankCode: '012', bankName: '台北富邦' },
            { bankCode: '013', bankName: '國泰世華' },
            { bankCode: '016', bankName: '高雄銀行' },
            { bankCode: '017', bankName: '兆豐商銀' },
            { bankCode: '021', bankName: '花旗銀行' }
        ],
        typing: false,
        otherReason: '',
        bankNameInput: '',//oa_20
        currentBankNameInput: '',
        bankEmpty: false,
        financial: [
            { from: '薪資所得', status: true, input: false },
            { from: '租金收入', status: false, input: false },
            { from: '退休金', status: true, input: false },
            { from: '營業收入', status: false, input: false },
            { from: '經營收入', status: true, input: false },
            { from: '投資收益', status: true, input: false },
            { from: '利息收入', status: false, input: false },
            { from: '不動產買賣', status: false, input: false },
            { from: '繼承贈與', status: false, input: false },
            { from: '理財投資', status: false, input: false },
            { from: '其他', status: false, input: true }
        ],
        creditCardNum: null,//oa_23
        expiredDate: null, //oa-24
        currentNum: 0,// oa_27
        otherCardSelect: 1,
        currentAddress: 'currentAddress1',//oa-32
        currentTel: 'currentTel2'//oa-32
    },
    mounted: function () {
        mode();
        this.$nextTick(() => {
            //自動跳下一格//9//36/24/25
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
        financialFrom() {
            return [...this.financial].filter((item) => item.status)
        },
        filterBank() {
            const vm = this;
            let result = this.bankObj.filter((bank) => {
                return bank.bankCode.match(vm.bankNameInput) || bank.bankName.match(vm.bankNameInput)
            })
            if (result.length > 0) {
                vm.bankEmpty = false
            } else {
                vm.bankEmpty = true
            }
            return result;
        }
    },
    methods: {
        pickBank(openID) {
            this.bankNameInput = '';
            this.openModal(openID);
        },
        selectedBank(bank, closeID) {
            this.bankNameInput = bank;
            this.currentBankNameInput = this.bankNameInput;
            this.closeModal(closeID);
        },
        closeBankModal(closeID) {
            this.bankNameInput = this.currentBankNameInput;
            this.closeModal(closeID);
        },
        toggleBubble(i) {
            this.financial[i].status = !this.financial[i].status
        },
        //
        openModal(id){
            console.log(id)
            $('.modal-backdrop').addClass('show');
            $(id).addClass('show');
        },
        closeModal(id) {
            $('.modal-backdrop').removeClass('show');
            $(id).removeClass('show');
        },
        //
        openModalDark(id) {
            $('.modal-backdrop-dark').addClass('show');
            $(id).addClass('show');
        },
        closeModalDark(id) {
            $('.modal-backdrop-dark').removeClass('show');
            $(id).removeClass('show');
        },
        outsideClose(id) {
            $(event.target).removeClass('show');
            if ($('.modal-backdrop-dark').length > 0) {
                $('.modal-backdrop-dark').removeClass('show');
            }
            if ($('.modal-backdrop').length > 0) {
                $('.modal-backdrop').removeClass('show');
            }
        },
        ccFormat() { //oa_24
            console.log(this.creditCardNum)
            if (this.creditCardNum == null || this.creditCardNum == '' || this.creditCardNum == 'undefined') return;
            var v = this.creditCardNum.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
            var matches = v.match(/\d{4,16}/g);

            var match = matches && matches[0] || ''
            var creditCardArray = []
            for (let i = 0, len = match.length; i < len; i += 4) {
                creditCardArray.push(match.substring(i, i + 4))
                console.log('1',creditCardArray)
            }
            if (creditCardArray.length) {
                console.log('2',creditCardArray)
                return this.creditCardNum = creditCardArray.join('  -  ')
            } else {
                return this.creditCardNum
            }
        },
        expiredDateFormate(e) {
            let value = this.expiredDate
            if (e.key != 'Backspace' ) { //BackSpace
                switch (this.expiredDate.length) {
                    case 2:
                        this.expiredDate = value + "/"
                        break;
                }
            } 
            //let x = this.expiredDate.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})/);
            // console.log(x[1], x[2], x[0])
            //this.expiredDate = !x[2] ? x[1] : x[1] + '/' + x[2] + (x[3] ? '/' + x[3] : '');
        },
        triggerChange(){ 
            this.currentNum ++;
            if (this.currentNum > 2) this.currentNum = 0 
            if (this.currentNum === 1) $(this.$refs.fileLabel).attr("for", "step-1")
            if (this.currentNum === 2) $(this.$refs.fileLabel).attr("for", "step-2")
        } 
    },
    filters: {
        ccFormat: function (value) {
            if (value == null || value == '' || value == 'undefined' ) return;
            var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
            var matches = v.match(/\d{4,16}/g);
            var match = matches && matches[0] || ''
            var parts = []
            for (let i = 0, len = match.length; i < len; i += 4) {
                parts.push(match.substring(i, i + 4))
            }
            if (parts.length) {
                return parts.join('-')
            } else {
                return value
            }
        }
    }
});






$(document).ready(function (e) {


    if (!isMobile) {
        $('.custom-select').select2({
            //hide search
            minimumResultsForSearch: Infinity
        });
    }
    //select all oa-9
    $('#selectAll').click(function (event) {
        $('input[type="checkbox"]').prop('checked', this.checked)
    });

    //tooltip
    let eevent = isMobile ? 'touchstart' : 'click';
    $('.tooltip').on(eevent, function () {
        $(this).toggleClass('active')
    });
    //戶籍電話 oa-32
    $(".tel-group input").focus(function () {
        $(this).parent('.tel-group').addClass('addBorder');
    });
    $(".tel-group input").blur(function () {
        $(this).parent('.tel-group').removeClass('addBorder');
    });

    // detectFixedBtn();
    // $(window).resize(function () {
    //     detectFixedBtn();
    // });
    scrollFixedBtn();
    $(window).scroll(function () {
        scrollFixedBtn();
    });






    Date.prototype.toShortDateString = function () {
        return this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate();
    }
    //#region CUSTOM FUNCTIONS FOR DATEPICKERS
    function isTextSelected(input) {
        if (typeof input.selectionStart == "number" && input.selectionStart != input.value.length && input.selectionStart != input.selectionEnd) {
            return true;
        } else if (typeof document.selection != "undefined") {
            input.focus();
            return document.selection.createRange().text == input.value;
        }
        return false;
    }
    function isNumber(e) {
        var allowedKeys = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
        if ($.inArray(e.keyCode, allowedKeys) != -1 && !e.originalEvent.shiftKey) {
            return true;
        }
        return false;
    }
    function isBackspace(keyCode) {
        var allowedKeys = [8];
        if ($.inArray(keyCode, allowedKeys) != -1) {
            return true;
        }
        return false;
    }
    function isAllowedKey(keyCode) {
        var allowedKeys = [9, 13, 16, 37, 38, 39, 40];//191,111];
        if ($.inArray(keyCode, allowedKeys) != -1) {
            return true;
        }
        return false;
    }
    //#endregion
    $.fn.extend({
        allowMMDDYYYY: function (validate) {
            $(this).keydown(function (e) {
                var that = this;
                if (!isNumber(e) && !isBackspace(e.keyCode) && !isAllowedKey(e.keyCode)) {
                    e.preventDefault();
                } else if ($(that).val().length == 10 && !isBackspace(e.keyCode) && !isAllowedKey(e.keyCode)) {// && !isTextSelected(e.target) && isNumber(e.keyCode)) {
                    if (!isTextSelected(e.target) && isNumber(e))
                        e.preventDefault();
                }
            });
            $(this).keyup(function (e) {
                var that = this;
                var value = $(that).val();
                if (e.keyCode != 8 && !isAllowedKey(e.keyCode)) {
                    switch (value.length) {
                        case 4:
                            $(that).val(value + "/");
                            break;
                        case 5:
                            if (value.indexOf("/") == -1) {
                                $(that).val(value.substr(0, 4) + "/" + value.substr(4, 1));
                            }
                            break;
                        case 6:
                            if (value.substr(0, 5).indexOf("/") == -1) {
                                $(that).val(value.substr(0, 4) + "/" + value.substr(4, 2));
                            }
                            break;
                        case 7:
                            if (e.target.selectionStart == value.length) {
                                if (e.target.selectionStart != 1) {
                                    $(that).val(value + "/");
                                }
                            }
                            break;
                    }
                }
            });
        }
    });
    //#endregion
    $("input[data-role='datepicker']").each(function (i, o) {
        var jqueryElement = $(o);
        jqueryElement.allowMMDDYYYY(function () { });
    });
    //https://stackoverflow.com/questions/44137998/auto-slash-for-date-input-using-javascript



});

//fixed btn
function detectFixedBtn() {
    let bottomBtn = $('.bottom-area').length;
    if (bottomBtn < 1) return false;
    console.log(bottomBtn)
    if (deviceMedia) {
        $('body').addClass('btn-fixed')
    } else {
        $('body').removeClass('btn-fixed')
    }
}
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


