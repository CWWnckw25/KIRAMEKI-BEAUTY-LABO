$('.voice__content--list').slick({
    autoplay: true,
    speed: 5000,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,

    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "10%",
            variableWidth: true,
        }
    }]
});