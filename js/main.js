$(document).ready(function () {
    const menuWrapper = $('.nav-bar-tabs');
    const menu = $('.menu');
    const input = $('#message');
    const text = $('#text');
    const div = document.createElement('div');
    $('.toggle').on('click', function () {
            $(menu).toggleClass('showMenu');
    });

    $(menuWrapper>'li').on('click',function () {
        $(menuWrapper).addClass('active-item');
    },false);

    $(input).on('focus', function () {
        $(text).addClass("fly-above");
    });

    $(input).on('blur', function () {
        if (!($(input).val())) {
            $(text).removeClass("fly-above");
        }
    });

    $('button').on('click', function () {
        $(this).append(div);
        div.className = 'ripple';
    })
});
