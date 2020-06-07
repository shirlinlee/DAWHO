(function ($) {
    $('.cw-notice-title a').on('click', function () {
        $(this).toggleClass('active');
        $('.cw-notice-content').slideToggle();
    });
})(jQuery);
