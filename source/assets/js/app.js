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






//Меню прокрутка
let header = document.querySelector('.header');
let menuLinks = document.querySelectorAll('.menu__link[data-goto]');


if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', function (e) {
            let menuLink = e.target;

            //console.log(document.querySelector(document.querySelector(menuLink.dataset.goto)));

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
    slidesToShow:5,
    dots: false,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    centerMode: true
});

$('.slider__tt').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
        }
    },{
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
    },{
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    }]
});
