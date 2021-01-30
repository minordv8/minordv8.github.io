(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*!
 * My site scripts
 */

$(function() {

// jQuery for page scrolling feature - requires jQuery Easing plugin  
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });  
  
// Owl carousel for client recommendations   
  var time = 7; // time in seconds
 
  var $progressBar,
      $bar, 
      $elem, 
      isPause, 
      tick,
      percentTime;
      
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay: 6000,
    autoplayTimeout: 8000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,     
    paginationSpeed: 300,
    onInitialized : progressBar($('#testimonials')),
    onChanged : moved,
    startDragging : pauseOnDragging
  });
  
 //Init progressBar where elem is $("#owl-demo")
  function progressBar(elem){
    $elem = elem;
    //build progress bar elements
    buildProgressBar();
    //start counting
    start();
  }         
  //create div#progressBar and div#bar then prepend to $("#owl-demo")
  function buildProgressBar(){
    $progressBar = $("<div>",{
      id:"progressBar"
    });
    $bar = $("<div>",{
      id:"bar"
    });
    $progressBar.append($bar).prependTo($elem);
  }

  //moved callback
  function moved(){
    //clear interval
    clearTimeout(tick);
    //start again
    start();
  }  
  //pause while dragging 
  function pauseOnDragging(){
    isPause = true;
  }
 function start() {
    //reset timer
    percentTime = 0;
    isPause = false;
    //run interval every 0.01 second
    tick = setInterval(interval, 10);
  };
  function interval() {
    if(isPause === false){
      percentTime += 1 / time;
      $bar.css({
         width: percentTime+"%"
       });
      //if percentTime is equal or greater than 100
      if(percentTime >= 100){
        //slide to next item 
        owl.trigger('owl.next')
      }
    }
  }

// Floating label headings for the contact form  
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
  });  

 });//$(function()

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



},{}]},{},[1]);
