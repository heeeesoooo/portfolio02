$(function () {
    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.visual_slide').slick({
        arrows: false,
        dots: false
    });
    $('.car_models .inner').slick({
        slidesToShow: 5,
        arrows: false,
        dots: false
    });


    $('.visual_area .arrows .prev').on('click', function () {
        $('.visual_slide').slick('slickPrev')
    })

    $('.visual_area .arrows .next').on('click', function () {
        $('.visual_slide').slick('slickNext')
    })


    $('.main').fullpage({
        anchors: ['sec01', 'sec02', 'sec03', 'sec04', 'sec05'],
        afterLoad: function (anchorLink, index) {
            console.log(anchorLink, index);
        }
    });

})

$(window).on('scroll', function () {
    console.log('스크롤 : ', $(window).scrollTop());
    if ($(window).scrollTop() > 0) {
        $('.header').addClass('on');
    } else {
        $('.header').removeClass('on');
    }
})

