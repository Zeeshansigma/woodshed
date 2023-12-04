
$( window ).on( "load", function() {
  var $swiperSelector = $('.swiper-container');

  $swiperSelector.each(function( index) {
    var $this = $(this);
    $this.addClass('swiper-slider-' + index);

    var dragSize = 200;
    var freeMode = false;
    var loop = false;
    var slidesDesktop = 4;
    var slidesTablet = 2.5;
    var slidesMobile = 1.5;
    var spaceBetween = 15;

    var $nextButton = $this.nextAll('.image-swiper-button-next:first');
    $nextButton.addClass(`swiperc-next-${index}`);
    
    var $prevButton = $this.nextAll('.image-swiper-button-prev:first');
    $prevButton.addClass(`swiperc-prev-${index}`);
    
    //console.log("Next Btn: ", $nextButton)
    
    
    var swiper = new Swiper('.swiper-slider-' + index, {
      direction: 'horizontal',
      loop: loop,
      freeMode: freeMode,
      spaceBetween: spaceBetween,
      breakpoints: {
        1025: {
          slidesPerView: slidesDesktop
        },
        640: {
          slidesPerView: slidesTablet
        },
        320: {
          slidesPerView: slidesMobile
        }
      },
      navigation: {
        nextEl: `.swiperc-next-${index}`,
        prevEl: `.swiperc-prev-${index}`,
        disabledClass: "swiper-button-disabled"
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: dragSize
      }
    });
  });

});



