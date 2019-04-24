//check if document is ready 
$(document).ready(function(){

	var doc= $(document);

	var width= doc.width() - 100;
	var height = doc.height() - 100;


	var shapes = [ $(".circle"), $(".circle2"), $(".circle3") ]

	
function randomStuff(){
	var randomShape = shapes[ Math.floor(Math.random() * shapes.length)]

	var clone = randomShape.clone().appendTo('body');

	clone.last().css('left', Math.random() * width)
	clone.last().css('top', Math.random() * height)
}
randomStuff();

setInterval(function(){

randomStuff();

},150)

	//end document ready function
})