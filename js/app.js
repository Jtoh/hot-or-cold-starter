
$(document).ready(function(){

      var randomNumber = Math.floor((Math.random()*100)+1);
      var guessCount = 1;
	
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
  	var userNumber = parseInt($('#userGuess').val(),10);
  	var guessDifference = parseInt((randomNumber - userNumber), 10);
  	if(isNaN(userNumber)) {
  		$('#feedback').text("Please enter number 1 through 100");
  	} else if (userNumber < 1 || userNumber > 100) {
      $('#feedback').text("Please enter number 1 through 100");
    } else if(guessDifference === 0) {
  		$('#feedback').text("You Got It!");
  	} else if (guessDifference <= 5) {
  		$('#feedback').text("Very Hot!");
  	} else if (guessDifference <=10) {
  		$('#feedback').text("Hot!");
  	} else if (guessDifference >=11) {
  		$('#feedback').text("Try Again!");
      }
      if(userNumber != randomNumber) {
         $('#guessList').append('<li>' + userNumber +'</li>');
          $('#count').html(guessCount++);
            }
  	
         
   
    $('#userGuess').val(' ');



  	});

});


