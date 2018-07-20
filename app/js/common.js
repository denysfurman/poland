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

    //progres
    $('.install_instruction_item').each(function() {
        var percent = parseInt($(this).find('.progress-pie-chart').data('percent')),
            deg = 360 * percent / 100;
        if (percent > 50) {
            $(this).find('.progress-pie-chart').addClass('gt-50');
        }
        $(this).find('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)');
        $(this).find('.ppc-percents span').html(percent + '%');
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
