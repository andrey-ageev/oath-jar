$(document).ready(function(){

    $('.about__toggle').click(function(event){
        event.preventDefault();
        console.log('click');

        $('.about-content__box').hide();

        var href = $(this).attr('href');
        console.log(href);

        $(href).show();
    });

});