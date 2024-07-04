$(document).ready(function () {
  $(".productsSlider__inner").each(function () {
    var $slider = $(this);
    var initialized = false;

    var sliderSettings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:
        '<button class="productsSlider__btn productsSlider__btnprev"><img src="images/ico/left.svg" loading="lazy" alt="" /></button>',
      nextArrow:
        '<button class="productsSlider__btn productsSlider__btnnext"><img src="images/ico/right.svg" loading="lazy" alt="" /></button>',
      responsive: [
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 4,
            dots: true,
            arrows: false,
          },  
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            dots: true,
            arrows: false,
            centerMode: true,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: "25%",
          },
        },
      ],
    };

    function checkAndInitializeSlider() {
      var elementCount = $slider.children(".productItem").length;

      if (
        !initialized &&
        (elementCount > 4 || (elementCount <= 4 && $(window).width() < 1001))
      ) {
        $slider.slick(sliderSettings);
        initialized = true;
      } else if (
        initialized &&
        elementCount <= 4 &&
        $(window).width() >= 1001
      ) {
        $slider.slick("unslick");
        initialized = false;
      }
    }

    checkAndInitializeSlider();

    $(window).on("resize", function () {
      checkAndInitializeSlider();
    });
  });
});
