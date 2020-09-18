(function ($) {
    $('.cw-notice-title').on('click', function () {
        console.log('123');
        $(this).toggleClass('active');
        $('.cw-notice-content').slideToggle();
    });
})(jQuery);
