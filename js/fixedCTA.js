(function ($) {
  
  // checkTopped funtion will hide the CTA on inital page load and must be called with the window.scroll
  var checkTopped = function () {
    //Adding a cookie to keep the banner hidden when the close button is clicked
    $('.fixed-cta').removeClass('hidden');
    if ($(window).scrollTop() < 200) {
      $('.fixed-cta').addClass('topped');
    }
    else {
      $('.fixed-cta').removeClass('topped');
    }
  };
  
  checkTopped();  
        
}(jQuery));