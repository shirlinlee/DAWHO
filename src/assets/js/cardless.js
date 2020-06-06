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
            $('p.money-note span.hint').hide();
        } else {
            $('p.money-note span.note').show();
        }
    });

    $('.QA').on('click', '.title', function () {
        $(this).siblings('.content').slideToggle();
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})(jQuery);