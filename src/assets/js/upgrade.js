import mode from './modules/mode';
// import Vue from 'vue';
new Vue({
    el: '#appUpgrade',
    data: {
        ways: [
            { title: '臺幣活存', btn_href: '', btn_txt: '前往查看' },
            { title: '外幣活存', btn_href: '', btn_txt: '前往換匯' },
            { title: '臺幣定存', btn_href: '', btn_txt: '立即申請' },
            { title: '外幣定存', btn_href: '', btn_txt: '立即申請' },
            { title: '基金庫存', btn_href: '', btn_txt: '立即申購' },
            { title: 'ibrAin庫存', btn_href: '', btn_txt: '立即申購' },
        ],
        loans: [
            { title: '汽車貸款', btn_href: '', btn_txt: '前往申請' },
            { title: '信用貸款', btn_href: '', btn_txt: '前往申請' },
            { title: '人身保險', btn_href: '', btn_txt: '前往申請' },
            { title: '房屋貸款', btn_href: '', btn_txt: '前往申請' },
        ],
    },
    mounted: function () {
        mode();
        this.$nextTick(() => {
            $('.slider_wrapper').slick({
                dots: true,
                arrows: false,
                centerPadding: '40px',
            });
        });
    },
});
