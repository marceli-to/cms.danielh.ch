/**
 * Dependencies
 */
import Swiper from '../vendor/swiper.js';

var SwiperUi = (function() {

  var selectors = {
    html:   'html',
    body:   'body',
    swiper: '.js-swiper',
  };

  var swiper;
     
  var _initialize = function() {
    _bind();
  };

  var _bind = function() {

    swiper = new Swiper(selectors.swiper, {
      slidesPerView: 1,
      loop: true,
      effect: 'fade',
      speed: 600,
      autoplay: true,
      pagination: {
        el: '.js-swiper-pagination',
        clickable: true,
      },
      spaceBetween: 0,
      navigation: {
        nextEl: '.js-swiper-button-next',
        prevEl: '.js-swiper-button-prev',
      },
    });
  };
  
  return {
    init:  _initialize,
  };
	
})();

// Initialize
$(function() {
  if ($('body').find('.swiper-container').length) {
    SwiperUi.init();
  }
});