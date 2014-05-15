
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
  $("#guessButton").click(function(e) {
    e.preventDefault();
  	var randomNumber = Math.floor((Math.random()*100)+1);
  	var userNumber = parseInt($('#userGuess').val(),10);
  	var guessDifference = parseInt((randomNumber - userNumber), 10);
  	if(isNaN(userNumber)) {
  		alert("Please enter number 1 through 100");
  	} else if (userNumber < 1 || userNumber > 100) {
      alert("Please enter number 1 through 100");
    } else if(guessDifference === 0) {
  		alert("You Got It!");
  	} else if (guessDifference <= 5) {
  		alert("Very Hot!");
  	} else if (guessDifference <=10) {
  		alert("Hot!");
  	} else if (guessDifference >=11) {
  		alert("Try Again!");
  	};
    $('#userGuess').val(' ');



  	});

});


