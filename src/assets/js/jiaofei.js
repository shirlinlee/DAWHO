(function ($) {})(jQuery);

import mode from './modules/mode';
new Vue({
    el: '#appJiaofei',
    data: {
        drawerTel: false,
        drawerCommon: false,
        drawerCommonCreate: false,
        numTel: '',
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
        });
    },
});
