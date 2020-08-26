 
(function ($) {

    const fancyOptions = {
        autoSize: true,
        type: 'iframe',
        toolbar: false,
        smallBtn: true,
        iframe: {
            preload: false
        },
        //custom close 
        btnTpl: {
            smallBtn: '<div data-fancybox-close class="fancybox-close-small modal-close">關閉</div>',
        }
    }

    // Create template for the button
    $("a.iframe").fancybox(fancyOptions);

    $("a.iframe-extraBtn").fancybox({
        ...fancyOptions,
        afterShow: function (opts, obj) {
            const agreeBtnHtml = '<div data-fancybox-close class="modal-footer center"><span class="btn btn-primary">我已詳閱並同意</span></div>'
            $('.fancybox-content').addClass('fancybox-content-agreeBtn').append(agreeBtnHtml);
        }}
    );
 
    $("a.iframe.initOpen, a.iframe-extraBtn.initOpen").trigger('click')
  
    //http://jsfiddle.net/NUBru/
})(jQuery);