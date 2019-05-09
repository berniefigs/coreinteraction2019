//check if document ready
$(document).ready(function(){


audio.onended = function() {
     $("#play-pause-button").removeClass('fa-pause');
     $("#play-pause-button").addClass('fa-play');
};


		var shapeWidth = $('#shape').width();
		var shapeWidth = $('#shape2').width();
		var shapeWidth = $('#shape3').width();
		var shapeWidth = $('#shape4').width();
		var shapeWidth = $('#ok').width();
		var shapeWidth = $('#wow').width();
			var shapeWidth = $('#haha').width();
			var shapeWidth = $('#lmao').width();
			var shapeWidth = $('#sure').width();
		var shapeWidth = $('#shape5').width();
	
			//get document size
			var width = $(document).width() - shapeWidth;
			var height = $(document).height() - shapeWidth;

			//speed and direction of animation
			

			var speedA = 3;
			

			//variables to move css
			
			
			var positionRight = 0;
		
			

//60 frames per second
function step(timestamp) {
		//update css variable
		
		positionRight += speedA;
		
		
		//change direction and speed variable if the ball hits the edge of the screen
		
	
		if( positionRight > width ){
			speedA = speedA * -1 ;
		}

		if( positionRight < 0 ){
			speedA = speedA * -1 ;
		}
		
	

	

		

		//edit css

	
		$('#shape3').css("right", positionRight)
		$('#ok').css("right", positionRight)
		$('#haha').css("right", positionRight)
		$('#sure').css("right", positionRight)
		$('#fuck').css("right", positionRight)
		$('#lls').css("right", positionRight)


		
		

		window.requestAnimationFrame(step);
	}
		window.requestAnimationFrame(step);

		//end document ready function

	
	})


