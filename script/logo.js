$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 10) {
        $('header').addClass("header2");
    } else {
        $('header').removeClass("header2");
    }
});