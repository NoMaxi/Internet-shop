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
        margin: 15,
        items: 4,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            480: {
                items: 2
            },
            720: {
                items: 3
            },
            1200: {
                items: 4
            },
        }
    });

    $('.upload-form select').styler();
    $('.upload-form .upload-form__type-file').styler();
});