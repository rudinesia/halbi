// File app.js

// Require jquery, fixing error jquery/$ not defined
window.$ = window.jQuery = require('jquery');
require('slick-carousel');
require('@fancyapps/fancybox');
// require('wowjs');

// Slick Slider settings
$('.slider1').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }
  ]
});

$('.slider2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }
  ]
});

// Fancy Box Gallery
$(".fancybox").fancybox();

