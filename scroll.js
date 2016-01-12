//scroll to top on refresh 
$( document ).ready(function() {
    console.log( "ready!" );


$(window).unload(function() {
    $('body').scrollTop(0);
});





// script to build autoscroll 

// click rules and scroll there 

$("#section2").click(function() {
    $('html,body').animate({
        scrollTop: $("#rules").offset().top},
        'slow');
});

// click buy and scroll there 

$("#section3").click(function() {
    $('html,body').animate({
        scrollTop: $("#buy").offset().top},
        'slow');
});

// click home and go back to top
$("#section1").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
});

// go to hall of fame
$("#section4").click(function() {
    $('html,body').animate({
        scrollTop: $("#feedback").offset().top},
        'slow');
});


//button to rules 
$("#button1").click(function() {
    $('html,body').animate({
        scrollTop: $("#rules").offset().top},
        'slow');
});



//button to get the game 
$("#button2").click(function() {
    $('html,body').animate({
        scrollTop: $("#buy").offset().top},
        'slow');
});



// back to top
$("#top1").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
});


 

$('.carousel').carousel();

$('body').scrollspy({ target: '#navbar-example' });



});



