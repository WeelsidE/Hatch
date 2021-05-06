//Сполер
$(document).ready(function () {
    $('.menu__section_header').click(function (e) {
        if ($('.menu__line').hasClass('one')) {
            $('.menu__section_header').not($(this)).removeClass('_show');
            $('.menu__section_body').not($(this).next()).slideUp(600);
        }

        $(this).toggleClass('_show').next().slideToggle(600);
    });
});

if ($('.menu__section_header').hasClass('_show') == true) {
    $('.menu__section_body').addClass('_active');
} else {
    $('.menu__section_body').removeClass('_active');
}




//Меню прокрутка
let header = document.querySelector('.header');
let menuLinks = document.querySelectorAll('.menu__link[data-goto]');


if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', function (e) {
            let menuLink = e.target;

        //Закрытие при активном меню
            document.querySelector('.menu__body').classList.remove('_active');
            document.querySelector('.menu').classList.remove('_active');
            menuIcon.classList.remove('_active');

            document.querySelector('body').classList.remove('no-scroll');

            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const pageValue = document.querySelector('body').offsetHeight;

                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - header.offsetHeight;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });

                e.preventDefault();
            }  

            e.preventDefault();
        });
    });
}







//Сдайдер
$('.slider__galery').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    centerMode: true,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3
        }
    },
    {
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        }
    },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 1
        }
    }]
});



/* $(document).ready(function(){
    $('.slider_').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
    });
});
 */





//Бургер
const menuIcon = document.querySelector('.menu__icon');

menuIcon.addEventListener('click', function (e) {
    $('.menu__body').toggleClass('_active');
    $('.menu').toggleClass('_active');
    $(menuIcon).toggleClass('_active');

    $('body').toggleClass('no-scroll');

    e.preventDefault();
});