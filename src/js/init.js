$(function() {
    $('.release-products__tabs').tabs();
    
    (function () {
        // .menu__nav -  навигация
        let nav = $('.menu__nav');

        // .menu-btn - кнопка меню
        $('.menu__btn').click(function() {
            if(nav.hasClass('menu__nav--active')) {
                nav.removeClass('menu__nav--active');
            }
            else {
                nav.addClass('menu__nav--active');
            }
        });
    }());

    $('.owl-carousel').owlCarousel({
        loop:true,
        dots: true,
        // margin: 15,
        items: 4,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            620: {
                items: 2
            },
            950: {
                items: 3
            },
            1370: {
                items: 4
            },
        }
    });

    if($("div").is(".upload-page-wrap")) {
        $('.upload-form select').styler();
        $('.upload-form .upload-form__type-file').styler();
    }

    if($('div').is('.price-range__wrapper')){
        $(".js-range-slider").ionRangeSlider({
            type: "double",
            skin: "round",
            min: 0,
            max: 4000,
            from: 0,
            to: 2000,
            grid: false,
            hide_min_max: true,
            prefix: '$'
        });
    }

    if($('div').is('.prod__price')) {
        $('.prod__price-wrapper select').styler();
    }
});