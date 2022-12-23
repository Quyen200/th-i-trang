$(document).ready(function() {
    $('.content-shops').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='icon fa fa-long-arrow-right' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='icon fa fa-long-arrow-left' aria-hidden='true'></i></button>",
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ]
    });
});