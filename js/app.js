(function($) {
    $('#awa-skills-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        asNavFor: '#awa-skills-text-slider'
    });

    $('#awa-skills-text-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        asNavFor: '#awa-skills-slider'
    });

    $('#awa-skill-prev').on('click', function(e) {
        e.preventDefault();
        $('#awa-skills-slider').slick('slickPrev');
    });

    $('#awa-skill-next').on('click', function(e) {
        e.preventDefault();
        $('#awa-skills-slider').slick('slickNext');
    });
})(jQuery);