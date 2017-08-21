$(document).ready(function () {
    const menuWrapper = $('.nav-bar-tabs');
    const menu = $('.menu');
    const input = $('#message');
    const text = $('#text');
    const link = $('.nav-bar-tabs li');
    const div = document.createElement('div');
    $('.toggle').on('click', function () {
            $(menu).toggleClass('showMenu');
    });

    $(link).on('click',function (e) {
        console.log(e.target.nodeName);
        if(e.target.nodeName==='A'){
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
