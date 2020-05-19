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

            // listener
            navs.on('click', function () {
                navs.find('a').removeClass('active');
                $(this).find('a').addClass('active');

                contents.hide(0);
                const type = $(this).data('type');
                $(`.channels .content[data-name='${type}']`).show();
            });

            const navbar = $('.channels .nav-bar');
            const sticky = getPosition(
                document.getElementById('channels--nav-bar')
            ).y;
            // const sticky = document.getElementById('channels--nav-bar').offsetTop;
            $(window).scroll(function () {
                scroll = $(window).scrollTop();
                if (scroll > sticky + navbar.height()) {
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
