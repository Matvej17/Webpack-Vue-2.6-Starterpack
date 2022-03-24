function animateMenuIcon() {
    $(".mobile-menu").on("click", function() {
        $(this).toggleClass("open");
        $(".navigation").toggleClass("navigation-open")
    });

    $(".navigation").children("li").on("click", function() {
        $(this).addClass("active").siblings("li").removeClass("active")
        $(".mobile-menu").removeClass("open");
        $(".navigation").removeClass("navigation-open")
    })
}

$(document).ready( function() {
    animateMenuIcon()
})