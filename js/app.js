
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	/*---Numbers---*/
  $("#guessButton").on("click", function() {
  	var randomNumber = Math.floor(math.random()*101);
  	var userNumber = parseInt($('#userGuess').val(),10);
  	var guessDifference = parseInt((randomNumber - userNumber), 10);
  	if(guessDifference === 0) {
  		alert("You Got It!");
  	} else if (guessDiffernce <= 5) {
  		alert("Very Hot!");
  	} else if (guessDifference <=10) {
  		alert("Hot!");
  	} else if (guessDifference >=11) {
  		alert("Try Again!");
  	}

  	}


  });

});


