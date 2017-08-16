$(document).ready(function () {
    const menuWrapper = $('.nav-bar-tabs');
    const input = $('#message');
    const text = $('#text');
    $('.toggle').on('click', function (e) {
        $(menuWrapper).toggleClass('showMenu');
    });
    $(menuWrapper).on('click', function (e) {
        if (e.target.tagName === 'NAV') {
            $(menuWrapper).removeClass('showMenu');
        }
    });

    $(input).on('focus',function () {
        $(text).addClass("fly-above");
    });
    $(input).on('blur',function () {
        $(text).removeClass("fly-above");
    });
});
