(function ($) {
    $('body').on('click', '.cw-notice-title', function () {
        $(this).toggleClass('active');
        $('.cw-notice-content').slideToggle();
    });
})(jQuery);
