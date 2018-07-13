$(function() {

    $('.menu-button').on('click', function() {

        $(this).toggleClass('active');
        $('header nav ul').slideToggle();

    });

});
