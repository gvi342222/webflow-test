import slick from 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
import fancybox from 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js';

jQuery(document).ready(function ($) {
    fancybox.bind("[data-fancybox]", {});

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".main-header").addClass("fixed");
        }
        else {
            $(".main-header").removeClass("fixed");
        }
    })
})
