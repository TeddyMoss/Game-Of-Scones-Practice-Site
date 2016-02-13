//scroll to top on refresh 
$( document ).ready(function() {
    console.log( "ready!" );


$(window).unload(function() {
    $('body').scrollTop(0);
});








// go to hall of fame
$("#button3").click(function() {
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







// back to top
$("#top1").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
});


 

$('.carousel').carousel();

$('body').scrollspy({ target: '#navbar-example' });



});



