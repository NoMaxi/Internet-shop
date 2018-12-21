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

    (function () {
        // sibedar
        let sidebar = $('.left');
        let close = $('.left__close-icon');

        // .menu-btn - кнопка
        $('.items__mobile-btn').click(function() {
            if(sidebar.hasClass('left--active')) {
                sidebar.removeClass('left--active');
            }
            else {
                sidebar.addClass('left--active');
            }
        });

        $(close).click(function() {
            sidebar.removeClass('left--active');
        });
    }());

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

    $("#modal").iziModal({
        width: 730,
        radius: 0,
    });

    $(document).on('click', '.btn-login-form', function (event) {
        event.preventDefault();
        // $('#modal').iziModal('setZindex', 99999);
        // $('#modal').iziModal('open', { zindex: 99999 });
        $('#modal').iziModal('open');
    });

    $(document).on('click', '.login__close', function (event) {
        $('#modal').iziModal('close');
    });
});