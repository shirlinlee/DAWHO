import mode from './modules/mode';
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const media = window.matchMedia("(max-width: 768px)");
let detectResize = false;


$(document).ready(function() {
    

    if (!isMobile) {
        $('.custom-select').select2({
            //hide search
            minimumResultsForSearch: Infinity
        });
    } 

    
    $(window).resize(function () {
    });
});




new Vue({
    el: '#appOpen',
    data: {
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
        bankNameInput: '',//oa_20
        bankEmpty: false,
        financial: [
            { from: '薪資所得', status: true },
            { from: '租金收入', status: false },
            { from: '退休金', status: true },
            { from: '營業收入', status: true },
            { from: '利息收入', status: false }
        ],
        creditCardNum: null,//oa_23
    },
    mounted: function () {
        mode();
        this.$nextTick(() => {
            //自動跳下一格//oa-36
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
        ccFormat() { //oa_23
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



