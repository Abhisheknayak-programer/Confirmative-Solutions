// MAIN PAGE CAROUSEL [SEVENTH SECTION]
$(document).ready(function () {
  $(".fifth__section .owl-carousel").owlCarousel({
    items: 5, // This Is The Number of Items You Want To show
    margin: 20, // This Is The Gap Which You Want To Shows
    loop: true, // Behaves As A Loop As The Default is False We Need To Change
    nav: true, // It Will Show THe arrows
    autoplay: true, // Playing The Carousel Automatically
    autoplayTimeout: 4000, // At What Time You Need The Carousel To scroll Automatically
    dots: false,
    // This Is For The Animation Only Occurs For Single Data
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    // rtl: true, // It Will Make The Carousel Slide from Right To left In reverse Order

    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      900: {
        items: 2,
        nav: false,
      },
      1200: {
        items: 3,
        nav: false,
        dots: true,
        // stagePadding: 50, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
      },
    },
  });
});
