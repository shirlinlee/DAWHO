(function ($) {
    $('.cw-notice-title').on('click', function () {
        $(this).toggleClass('active');
        $('.cw-notice-content').slideToggle();
    });
})(jQuery);
