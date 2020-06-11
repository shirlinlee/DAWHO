import mode from './modules/mode';
// import Vue from 'vue';
new Vue({
    el: '#list',
    data: {
        lev_lists: [
            { name: '', html: '1-1', ps: '點選[i]觀看1-2的動態效果' },
            { name: '', html: '1-2', ps: '' },
            { name: '', html: '2-1', ps: '點選[i]觀看2-2的動態效果' },
            { name: '', html: '2-2', ps: '' },
            {
                name: '',
                html: '3-1',
                ps: '查看完整切換效果請點 <a href="lev_3-0.html">lev_3-0</a>',
            },
            { name: '', html: '3-2', ps: '' },
            { name: '', html: '3-3', ps: '' },
            { name: '', html: '3-4', ps: '' },
            { name: '', html: '3-5', ps: '' },
            {
                name: '',
                html: '4-1',
                ps:
                    '查看上方黑色區域頁籤懸浮置頂效果請點 <a href="lev_4-0.html">lev_4-0</a>',
            },
            { name: '', html: '4-2', ps: '' },
            { name: '', html: '4-3', ps: '' },
            { name: '', html: '4-4', ps: '' },
            { name: '', html: '4-5', ps: '' },
            {
                name: '',
                html: '5-1',
                ps: '查看完整效果請點 <a href="lev_5-0.html">lev_5-0</a>',
            },
            { name: '', html: '6-1', ps: '' },
            { name: '', html: '6-2', ps: '' },
            { name: '', html: '6-3', ps: '' },
            { name: '', html: '7-1', ps: '' },
            // { name: '', html: '7-2', ps: '' },
            { name: '', html: '7-3', ps: '' },
        ],
        cw_lists: [
            { name: '', html: '1-1', ps: '' },
            { name: '', html: '1-2', ps: '' },
            { name: '', html: '1-3', ps: '' },
            { name: '', html: '1-4', ps: '' },
            { name: '', html: '1-5', ps: '' },
            {
                name: '',
                html: '1-6',
                ps:
                    '查看errorCode點 <a href="cw_1-6-errorCode.html">cw_1-6-errorCode</a>',
            },
            {
                name: '',
                html: '1-7',
                ps:
                    '切換效果在<a href="cw_1-3.html">1-3</a>，此分開畫面為靜態切版',
            },
            { name: '', html: '2-2', ps: '' },
            { name: '', html: '2-3', ps: '' },
            { name: '', html: '2-4', ps: '' },
            { name: '', html: '2-5', ps: '' },
            { name: '', html: '2-6', ps: '' },
            { name: '', html: '2-7', ps: '' },
            { name: '', html: '2-8', ps: '' },
            { name: '', html: '2-9', ps: '' },
            { name: '', html: '2-10', ps: '' },
            { name: '', html: '2-11', ps: '' },
            { name: '', html: '3-1', ps: '' },
            { name: '', html: '3-2', ps: '' },
            { name: '', html: '4-1', ps: '' },
            { name: '', html: '4-2', ps: '' },
            { name: '', html: '4-3', ps: '' },
        ],
    },
    mounted: function () {},
});
