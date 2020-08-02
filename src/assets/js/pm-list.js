import mode from './modules/mode';
// import Vue from 'vue';
new Vue({
    el: '#list',
    data: {
        cw_lists: [
            { name: '', html: '1-1', ps: '' },
            { name: '', html: '1-2', ps: '' },
            { name: '', html: '1-2-1', ps: '輸入完成後按鈕顯示為金色可點選樣式' },
            { name: '', html: '1-3', ps: '' },
            { name: '', html: '1-4', ps: '*所提樣式皆同一頁面做執行：『1-7已選常用號碼』選取狀態、『1-7刪除常用號碼＿完成刪除』刪除' },
            { name: '', html: '1-5', ps: '*所提樣式皆同一頁面做執行：直接參考wireframe新增常用號碼『1-5新增常用號碼』' },
            { name: '', html: '1-6', ps: '' },
            { name: '', html: '1-6-1', ps: '餘額不足樣式『1-2選擇電信帳單_餘額不足』' },

            { name: '', html: '1-7', ps: '' },
            { name: '', html: '1-8', ps: '' },
            { name: '', html: '1-9', ps: '' },
            { name: '', html: '1-10', ps: '*所提樣式皆同一頁面做執行：直接參考wireframe新增常用號碼『1-6新增常用』' },
            { name: '', html: '2-1', ps: '完成輸入樣式『2-1完成編號輸入_完成輸入』' },
            { name: '', html: '2-1-1', ps: '編號錯誤樣式『2-1完成編號輸入_編號錯誤』' },
            { name: '', html: '2-1-2', ps: '餘額不足樣式『2-1完成編號輸入_完成輸入_餘額不足』' },
            { name: '', html: '2-1-3', ps: '' },
            { name: '', html: '2-2', ps: '' },
            { name: '', html: '2-3', ps: '*所提樣式皆同一頁面做執行：『2_6常用信用卡』、『2_6選擇常用信用卡』選取狀態、『2_8刪除常用信用卡』刪除' },
            { name: '', html: '2-4', ps: '' },
            { name: '', html: '2-5', ps: '' },
            { name: '', html: '2-6', ps: '' },
            { name: '', html: '2-7', ps: '' },
            { name: '', html: '2-8', ps: '參考wireframe：『2_5新增常用』輸入框裝態' },
        ],
    },
    mounted: function () {},
});
