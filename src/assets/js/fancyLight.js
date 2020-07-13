 
(function ($) {
  
    $("a.iframe").fancybox({
        autoSize: true,
        type: 'iframe',
        toolbar: false,
        smallBtn: true,
        iframe: {
            preload: false
        },
        //custom close 
        btnTpl: {
            smallBtn: '<div data-fancybox-close class="fancybox-close-small modal-close">關閉</div>'
        }
    });
 
    $("a.iframe.initOpen").trigger('click')
  
    //http://jsfiddle.net/NUBru/
})(jQuery);