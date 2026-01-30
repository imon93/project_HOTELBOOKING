$(document).ready(function() {

    $(window).on("load", function() {
        $(".preloader_area").fadeOut(1000)
    });

    $(".back_to_top").click(function() {
        $("html, body").animate({scrollTop: 0}, 500)
    });

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            $(".back_to_top").fadeIn(500)
        }
        else{
            $(".back_to_top").fadeOut(500)
        }
    });
});