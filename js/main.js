$(document).ready(function () {
    const menuWrapper = $('.nav-bar-tabs');
    const input = $('#message');
    const text = $('#text');
    const div = document.createElement('div');
    $('.toggle').on('click', function () {
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
        if(!($(input).val())) {
            $(text).removeClass("fly-above");
        }
    });

    $('button').on('click',function () {
        $(this).append(div);
        div.className='ripple';
    })
});
