$(document).ready(function () {
    //обращение к тэгу
    $('.column__title').click(function (event) {
        //добавление класса ----------- при нажатии открывет спойлер
        $(this).toggleClass('active').next().slideToggle(300);
    });
    $('.header__burger').click(function (event) {
        //добавление класса ----------- при нажатии открывет спойлер
        $('.header__menu').toggleClass('_active');
    });
});