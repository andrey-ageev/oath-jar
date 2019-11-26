$(document).ready(function(){

    $('.about__toggle').click(function(event){
        event.preventDefault();

        $('.about-content__box').hide();

        var href = $(this).attr('href');

        $(href).fadeIn();
    });

});