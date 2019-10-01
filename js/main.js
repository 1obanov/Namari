/*--------- PreLoader init ---------*/
function initPreLoader() {
    jQuery('.loader-container').delay(400).fadeOut();
}
jQuery(window).on('load', function () {
    "use strict";
    initPreLoader();
});

/*--------- Fixed menu ---------*/
$(window).scroll(function () {
    var bodyScroll = $(window).scrollTop(),
        header = $(".home__header");
    row = $(".home__header .row");
    if (bodyScroll > 500) {
        header.addClass("fixed fadeInDown animated");
        row.addClass("center");
    } else {
        header.removeClass("fixed fadeInDown animated");
        row.removeClass("center");
    }
});

/*--------- Menu Scroller ---------*/
$(".scroller").on("click", function () {
    "use strict";
    var the_id = $(this).attr("href");
    $("html, body").animate({
            scrollTop: $(the_id).offset().top + 1
        },
        "slow"
    );
    return false;
});

/*--------- Navbar Scrolling  ---------*/
$(".home__menu").singlePageNav({
    speed: 1e3,
    currentClass: "active",
    offset: 80
});

/*--------- Mobile menu ---------*/
$('#hamburger, .home__menu a').on("click", function () {
    $(".hamburger").toggleClass("is-active");
    $(".home__menu ul").toggleClass("active");
});

/*--------- Animation on Scrolling ---------*/
new WOW().init();