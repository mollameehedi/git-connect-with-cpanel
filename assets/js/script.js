$(function () {
  'use strict';


  // WoW Js
  var wow = new WOW({
    offset: 2,
    mobile: false
  })
  wow.init();



  $('.actors-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  });


  $('.single-item').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    fade: true,
  });

});