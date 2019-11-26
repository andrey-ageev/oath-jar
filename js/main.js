$(document).ready(function(){

    $('.about__toggle').click(function(event){
        event.preventDefault();

        $('.about-content__box').hide();

        var href = $(this).attr('href');

        $(href).fadeIn();
    });

    $(window).scroll(function(){

        console.log( $(this).scrollTop() );

        if ( $(this).scrollTop() > 1280 ) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

});