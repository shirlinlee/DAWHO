(function ($) {
    $('.money').on('focus', function () {
        $(this).removeClass('hint');
        $('p.money-note span.hint').hide();

        $('p.money-note span.note').show();
        $('div.quick').show();
    });
    $('.money').on('focusout', function () {
        $('p.money-note span.note').hide();
        $('div.quick').hide();
        $('p.money-note span.hint').hide();
        var min = parseInt($(this).attr('min'), 10);
        if (this.value < min) {
            $(this).addClass('hint');
            $('p.money-note span.hint').show();
        } else {
            $(this).removeClass('hint');
            $('p.money-note span.hint').hide();
        }
        if (!this.value) {
            $(this).removeClass('hint');
            // $('p.money-note span.hint').hide();
        } else {
            // $('p.money-note span.note').show();
        }
    });

    $('.QA').on('click', '.title', function () {
        $(this).toggleClass('open').siblings('.content').slideToggle();
    });

    $('.account').on('click', '.account-info', function () {
        $('.lb_wrapper').addClass('show');
    });

    $('body').on('click', '.head .f_gold, .lb a', function () {
        $('.lb_wrapper').removeClass('show');
    });

    $('body').on('click', '.infos li', function () {
        $('body').find('.infos li').removeClass('accountDetail');
        $(this).addClass('accountDetail');
    });

    $('.quick button').on('mousedown touchstart click', function () {
        $('input.money').val(parseInt($(this).data('price'), 10));
    });
})(jQuery);
