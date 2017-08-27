$(document).ready(function () {
    const menuWrapper = $('.nav-bar-tabs'),
        menu = $('.menu'),
        input = $('#message'),
        text = $('#text'),
        link = $('.nav-bar-tabs li'),
        div = document.createElement('div'),
        container = $('.container');

    $('.toggle').on('click', function () {
        $(menu).toggleClass('toggleMenu');
        $(container).toggleClass('togglePadding');
    });

    $(link).on('click', function (e) {
        let Point = {
            x:e.pageX-$(this).offset().top,
            y:e.pageY-$(this).offset().left
        };
        console.log(Point);

        if (e.target.nodeName === 'A') {
            $(this).siblings().removeClass('active-item');
            $(this).addClass('active-item');
        }
    });

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
