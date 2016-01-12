

var main = function() {



//event handler for clicking forward button 
$('.arrow-next').click(function() {
  var currentSlide = $('.active-slide');
  var nextSlide = currentSlide.next();
  // ^to switch to next slide 

  var currentDot = $('.active-dot');
  var nextDot = currentDot.next();
  // ^to move dot to next 

  if(nextSlide.length == 0) {
    nextSlide = $('.slide').first();
  }
  // ^to move slide from last to first 

 if(nextDot.length == 0) {
     nextDot = $('.dot').first();
  }
  // ^to move dot from last to first 

  currentSlide.fadeOut(600).removeClass('active-slide');
  nextSlide.fadeIn(600).addClass('active-slide');
  //change the slide CSS class 

  currentDot.removeClass('active-dot');
  nextDot.addClass('active-dot');
  // change the Dot CSS class 
});

  // event handler for previos click button 
  $('.arrow-prev').click(function() {

    //move slide back 
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    
    // move dot back 
    var currentDot = $('.active-dot');
  var prevDot = currentDot.prev();
     
     // go from first to last slide first and dot second 
    if(prevSlide.length == 0) {
    prevSlide = $('.slide').last();
  }
   if(prevDot.length == 0) {
     prevDot = $('.dot').last();
  }

// change css class 
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');
    
    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });
}
console.log(main);
