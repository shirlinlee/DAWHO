(function ($) {
    $('body').on('click', '.cw-notice-title', function () {
        $(this).toggleClass('active');
        $('.cw-notice-content').slideToggle();
    });

    // $('.infoPwdForm')
    if ($('.infoPwdForm').length) pwdCountDown();

    $('body').on('click', '.resend', function () {
        pwdCountDown();
    });

    function pwdCountDown() {
        $('.resend').hide();
        $('.sec_area').show();
        var sec = 30;
        var Countdown = setInterval(function () {
            if (sec > 1) {
                sec = sec - 1;
                $('.sec').html(sec);
            } else {
                clearInterval(Countdown);
                $('.sec').html('');
                $('.sec_area').hide();
                $('.resend').show();
            }
        }, 1000);
    }
})(jQuery);
