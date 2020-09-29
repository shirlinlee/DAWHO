(function ($) {
    console.log('123');
    $('body').on('click', '.navbar .item', function () {
        $('li.item').removeClass('active');
        $(this).addClass('active');
        $('div.container').hide();
        $('div.container')[tab].show();
    });
});
