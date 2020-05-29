(function ($) {
    // Overlay 地點查詢
    $('.cw-filter-button').click(function () {
        $('#appJudianAtmOverlay').addClass('active');
        $("body").css("overflow","hidden");

    });
    $('#appJudianAtmOverlay .back, button.confirm').click(function () {
        $('#appJudianAtmOverlay').removeClass('active');
        $("body").css("overflow","");
    });
})(jQuery);
