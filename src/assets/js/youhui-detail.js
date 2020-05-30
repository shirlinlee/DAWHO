import { getPosition } from './modules/utils';
(function ($) {
    const Header = {
        Init() {
            const containers = $('.grade--container');
            containers.on('click', function () {
                containers.removeClass('active');
                $(this).addClass('active');

                // $('.detail-content').hide();
                // const type = $(this).data('detail-type');
                // $(`.detail-content[data-detail-content='${type}']`).show();
            });
        },
    };
    const Channels = {
        Init() {
            const navs = $('.channels .nav-bar .nav-link');
            const contents = $('.channels .content');

            const t = $('.channels .nav-bar .nav-link a.active')
                .parent('.nav-link')
                .data('type');
            $(`.content[data-name='${t}']`).show();
            const navbar = $('.channels .nav-bar');
            const sticky = document.getElementById('channels--nav-bar')
                .offsetTop;
            const channelTitle = $('.channels-title').offset().top
            var heightHeader = $('#youhui-detail--header').height();

            // listener
            navs.on('click', function () {
                navs.find('a').removeClass('active');
                $(this).find('a').addClass('active');

                contents.hide(0);
                const type = $(this).data('type');
                $(`.channels .content[data-name='${type}']`).show();

                // scroll to 特色通路
                $([document.documentElement, document.body]).animate(
                    {
                        scrollTop: channelTitle - heightHeader,
                    },
                    0
                );
            });

            $(window).scroll(function () {
                scroll = $(window).scrollTop();
                if (scroll > sticky - heightHeader) {
                    navbar.addClass('sticky');
                } else {
                    navbar.removeClass('sticky');
                }
            });
        },
    };

    Header.Init();
    Channels.Init();
})(jQuery);
