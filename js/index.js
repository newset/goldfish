/*!
*   goldfish-www v0.1.0
*   
*   Copyright (c) initialyear-atualyear yue ()
*   Released under the MIT license
*/

'use strict';

// JS
$(function () {
    $('#main-banner, #main-banner .slide, #main-banner .slick-slide').css({
        height: $(window).height() - 68 + 'px'
    });

    $('.banner').slick({
        autoplay: true,
        dots: true,
        fade: true,
        pauseOnHover: false,
        autoplaySpeed: 8000
    });

    $('.phone-slide').slick({
        autoplay: true,
        dots: false,
        fade: true,
        arrows: false,
        pauseOnHover: false,
        autoplaySpeed: 4500
    });

    $('.audio-list').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 4500
    });
});