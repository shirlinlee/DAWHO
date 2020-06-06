$(function () {
    var min = 30;
    var sec = 0;
    var Countdown = setInterval(function () {
        if (sec > 0) {
            sec = sec - 1;
        } else {
            if (min == 0) {
                clearInterval(Countdown);
                $('.count, .count_txt').addClass('end');
            } else {
                sec = 59;
                min = min - 1;
            }
        }
        if (min.toString().length == 1) {
            min = '0' + min;
        }
        if (sec.toString().length == 1) {
            sec = '0' + sec;
        }
        $('.min').html(min);
        $('.sec').html(sec);
    }, 1000);
});
