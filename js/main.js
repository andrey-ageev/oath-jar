$(document).ready(function(){
    
    /* делаем табы */
    $('.about__toggle').click(function(event){
        event.preventDefault();

        $('.about-content__box').hide();

        var href = $(this).attr('href');

        $(href).fadeIn();
    });

    var windowHeight = $(window).height();
    /* console.log(windowHeight); */

    /* Следим за скроллом и показываем / скрываем кнопку */
    $(window).scroll(function(){
        /* console.log( $(this).scrollTop() ); */

        if ($(this).scrollTop() > windowHeight * 1.5 ) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

    /* При клике на кнопку - делаем прокрутку страницы вверх */
    $('#scrollUp').click(function(event) {
        /* console.log(111); */
        event.preventDefault();
        $('html').animate({scrollTop: 0}, 800);
    });

    /* При клике на кнопку - делаем прокрутку вниз */
    $('#scrollDown').click(function(event){
        console.log('click!');
        event.preventDefault();
        
    });

});