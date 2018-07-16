$(function() {
    //mob menu
    $('.menu-button').on('click', function() {

        $(this).toggleClass('active');
        $('header nav ul').slideToggle();

    });
    //all page
    $('.all_pages').click(function() {
        $('.all_pages').toggleClass('open');
    });

    //counter
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },

                {

                    duration: 4000,
                    easing:'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });



        });
    });
});
