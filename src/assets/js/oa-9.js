
$(document).ready(function () {

    $(window).resize(function () {
    });
});
 

let countDown;
new Vue({
    el: '#oaIdentify',
    data: {
        countFinish: false,
        total: 5,
        duration: 3 * 1,// 2 mins
        timeMunite: null,
        timeSecond: null 
    },
    mounted() {
        const vm = this;
        this.$nextTick(() => {
            countDown = setInterval(vm.startTimer, 1000)
            //自動跳下一格//oa-9
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
        startTimer(){
            this.timeMunite = parseInt(this.duration / 60, 10)
            this.timeSecond = parseInt(this.duration % 60, 10);

            this.timeMunite = this.timeMunite < 10 ? this.timeMunite : this.timeMunite;
            this.timeSecond = this.timeSecond < 10 ? "0" + this.timeSecond : this.timeSecond;

            document.querySelector('#timer').textContent = this.timeMunite + "分" + this.timeSecond + "秒";

            if (--this.duration < 0) { 
                console.log('done')
                this.countFinish = true
                clearInterval(countDown)
                if(this.total == 0) {
                    this.total = 0
                }
                this.total--
            }
        },
        reSend() {
            if(this.total > 0 ) {
                this.countFinish = false;
                this.duration = 3 * 1;
                countDown = setInterval(this.startTimer, 1000);
            } else {
                return false
            }
        }
    }

});