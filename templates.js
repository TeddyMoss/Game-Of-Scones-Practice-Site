$( document ).ready(function() {
    console.log( "ready!" );

//catagory template
var source = $("#").html();
console.log(source);
var template = Handlebars.compile(source);
console.log(template);

//animal template
//var source = $("#animal-template").html();
//console.log(source);
//var template = Handlebars.compile(source);
//console.log(template);

// this file contains the data we need for the gallery
// The main object, "gallery" contains an array of album
// each album contains an array of photos
// (plus a name and a thumbnail image)
// The photos contain an image src and some metadata

var slidshow = {
			tagline: "Game of Scones",
			button1: "Learn the Rules",
			button2: "Get the Game"
			
		}; 


	var html = template(header);
	
	$('#content').html(html);
		console.log(header);


    });