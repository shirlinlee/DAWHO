(function ($) {
    $('.status-nav li').on('click', function () {
        $('.status-nav li').removeClass('active');
        $(this).addClass('active');
    });
})(jQuery);
