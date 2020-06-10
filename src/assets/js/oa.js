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

    

    //oa-28.html
    //makeResizableDiv('.resizable') 
    
    $(window).resize(function () {
    });
});



/*Make resizable div by Hung Nguyen*/
function makeResizableDiv(div) {
    const element = document.querySelector(div);
    const parent_elem = document.querySelector('.upload-card-box .upload-photo-bg');
    const resizers = document.querySelectorAll(div + ' .resizer') 
   
    let parent_x = parent_elem.getBoundingClientRect().left;
    let parent_y = parent_elem.getBoundingClientRect().top;

    const minimum_size = 150;
    const maxmun_size = 240;
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;

    
    for (let i = 0; i < resizers.length; i++) {
        const currentResizer = resizers[i];
        currentResizer.addEventListener('mousedown', function (e) {
            e.preventDefault()
            original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
            original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
            console.log('original_width', original_width)
            original_x = element.getBoundingClientRect().left;
            original_y = element.getBoundingClientRect().top; 
            original_mouse_x = e.pageX + parent_x;
            original_mouse_y = e.pageY + parent_y;
            window.addEventListener('mousemove', resize)
            window.addEventListener('mouseup', stopResize)
        })

        function resize(e) {
           
            if (currentResizer.classList.contains('bottom-right')) {
                const width = original_width + (e.pageX - original_mouse_x);
                const height = original_height + (e.pageY - original_mouse_y)
                if (width > minimum_size) {
                    element.style.width = width + 'px'
                }
                if (height > minimum_size) {
                    element.style.height = height + 'px'
                }
            }
            else if (currentResizer.classList.contains('bottom-left')) {
                const height = original_height + (e.pageY - original_mouse_y)
                const width = original_width - (e.pageX - original_mouse_x)
                if (height > minimum_size) {
                    element.style.height = height + 'px'
                }
                if (width > minimum_size) {
                    element.style.width = width + 'px'
                    element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
                }
            }
            else if (currentResizer.classList.contains('top-right')) {
                const width = original_width + (e.pageX - original_mouse_x)
                const height = original_height - (e.pageY - original_mouse_y)
                if (width > minimum_size) {
                    element.style.width = width + 'px'
                }
                if (height > minimum_size) {
                    element.style.height = height + 'px'
                    element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
                }
                console.log('width', width)
                if ( width > maxmun_size ) {
                    element.style.width = maxmun_size + 'px'
                }
            }
            else {
                const width = original_width - (e.pageX - original_mouse_x)
                const height = original_height - (e.pageY - original_mouse_y)
                if (width > minimum_size) {
                    element.style.width = width + 'px'
                    element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
                }
                if (height > minimum_size) {
                    element.style.height = height + 'px'
                    element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
                }
                if (width > maxmun_size) {
                    element.style.width = maxmun_size + 'px'
                }
            }
        }

        function stopResize() {
            window.removeEventListener('mousemove', resize)
        }
    }
}





new Vue({
    el: '#appOpen',
    data: {
        bankObj: [
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
            let tempArray = []
            return [...this.bankObj].filter((bank)=> {
                console.log(bank.bankCode.indexOf(vm.bankNameInput), bank.bankName.indexOf(vm.bankNameInput))
              
                if (vm.bankNameInput == '') { 
                    vm.bankEmpty = false
                    return tempArray.push(this.bankObj) 
                }
                if (vm.bankNameInput !== '' && bank.bankCode.indexOf(vm.bankNameInput) == -1 && bank.bankName.indexOf(vm.bankNameInput) == -1) {
                    vm.bankEmpty = true
                    tempArray = []
                    return null
                } else {
                    vm.bankEmpty = false
                    return bank.bankCode.includes(vm.bankNameInput) || bank.bankName.includes(vm.bankNameInput)
                }
                
            })
            
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



