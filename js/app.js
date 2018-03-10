// var pathObj = {
//     "awa-logo-design-phase-1": {
//         "strokepath": [
//             {
//                 "path": "M 511.246 191.016 L 119.646 550.61",
//                 "duration": 600
//             },
//             {
//                 "path": "M600.837,375.652 c0,139.322-123.056,251.564-274.849,252.266c-40.217,0.186-80.701-4.011-112.153-16.504 C107.271,569.084,54.968,486.215,51.141,375.652c-4.87-140.734,124.335-248.068,276.13-248.068 C479.065,127.583,600.837,236.329,600.837,375.652z",
//                 "duration": 600
//             },
//             {
//                 "path": "M 327.271 127.583 L 327.271 626.588",
//                 "duration": 600
//             },
//             {
//                 "path": "M 51.141 361.061 L 600.543 361.061",
//                 "duration": 600
//             },
//             {
//                 "path": "M576.287,196.653 c-16.375-33.533-38.136-62.462-65.272-86.827c-27.148-24.345-58.493-43.303-94.014-56.887 c-35.53-13.562-72.866-20.36-111.974-20.36c-35.928,0-69.869,5.992-101.795,17.967c-31.945,11.977-60.685,28.35-86.23,49.1 l88.623,50.3c-45.507,19.163-82.631,49.1-111.377,89.821c-28.744,40.714-43.107,87.031-43.107,138.926 c0,34.332,6.581,66.461,19.752,96.406c13.177,29.935,30.936,56.096,53.297,78.438c22.344,22.363,48.503,40.119,78.441,53.292 c29.939,13.179,62.072,19.76,96.406,19.76h301.8V305.634C600.838,266.527,592.645,230.186,576.287,196.653z",
//                 "duration": 1000
//             }
//         ],
//         "dimensions": {
//             "width": 722,
//             "height": 722
//         }
//     }
// };

(function($) {
    // Menu
    $("#awa-menu-toggle").on("click", function(e) {
        $("body").toggleClass("large-menu");
    });

    // Initialized skills slider for icons
    $("#awa-skills-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        asNavFor: "#awa-skills-text-slider",
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Initialized slick slider for skills description
    $("#awa-skills-text-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        cssEase: "linear",
        asNavFor: "#awa-skills-slider"
    });

    // Skills slider arrow navigation - Preview
    $("#awa-skill-prev").on("click", function(e) {
        e.preventDefault();
        $("#awa-skills-slider").slick("slickPrev");
    });

    // Skills slider arrow navigation - Next
    $("#awa-skill-next").on("click", function(e) {
        e.preventDefault();
        $("#awa-skills-slider").slick("slickNext");
    });

    // Portfolio masonry
    $(".awa-folio-grid").masonry({
        itemSelector: ".awa-folio-item-wrap"
    });

    // CIRCLE ANIMATION
    function circleAnimation() {
        $(
            ".revealOnScroll:not(.animated) .awa-skill-math-circle[data-progress]"
        ).each(function() {
            var el = $(this),
                pr = el.attr("data-progress");

            setTimeout(function() {
                el.attr("stroke-dashoffset", 100 - pr);
            }, 0);
        });
    }

    // Reveal Animation on Scroll
    var $window = $(window),
        win_height_padded = $window.height() * 1.1,
        isTouch = Modernizr.touchevents;

    if (isTouch) $(".revealOnScroll").addClass("animated");
    $window.on("scroll", revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() * 1.1;

        $(".revealOnScroll:not(.animated)").each(function() {
            var $this = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + win_height_padded > offsetTop) {
                circleAnimation();
                $this.addClass("animated");
            }
        });
    }
    revealOnScroll();

    $(".awa-menu-item").on("click", function(e) {
        e.preventDefault();
        var el = $(this),
            target = el.attr("href");

        $("html, body").animate(
            {
                scrollTop: $(target).offset().top
            },
            3000
        );
    });

    // $('.awa-logo-design-phase').on('click', function(e) {
    //     alert(1);
    //     $('#awa-logo-design-phase-1').lazylinepainter({
    //         "svgData": pathObj,
    //         "strokeWidth": 3,
    //         "strokeColor": "#0000ff"
    //     }).lazylinepainter('paint');
    // });
})(jQuery);
