
//Quickly made game designed to teach you the powers of 2 up to a certain value.



function resetValues() {
	//Define how high the numbers will go
	highNumber = 20;


//Empty array to be filled by the correctly answered questions
	correctArr = [];

//Empty array to be filled by all the sample numbers
	sampleArray = [];

//Fill array with numbers from sample range ie: 1-20
//then get it's length
var i;

for (i = 1; i <= highNumber; i++) {
	sampleArray.push(i);
}

	sampleLen = sampleArray.length;

//Define a random number between 1 and a higher number (20 for this example)
	arrRand = Math.floor(Math.random() * sampleLen);




	powRand = sampleArray[arrRand];
}

// //Define how high the numbers will go
// var highNumber = 3;


// //Empty array to be filled by the correctly answered questions
// var correctArr = [];

// //Empty array to be filled by all the sample numbers
// var sampleArray = [];

// //Fill array with numbers from sample range ie: 1-20
// //then get it's length
// var i;

// for (i = 1; i <= highNumber; i++) {
// 	sampleArray.push(i);
// }

// var sampleLen = sampleArray.length;

// //Define a random number between 1 and a higher number (20 for this example)
// var arrRand = Math.floor(Math.random() * sampleLen);




// var powRand = sampleArray[arrRand];


resetValues();

//Add a p element to the DOM asking for the answer of 2 to the power of the randomly generated number.
$('div#question').html('<p>What is 2 to the power of ' + powRand + '?</p>');
	


//Event listener for submition of the form

$('.guessForm').on('submit', function(e){

	//disable default action on submit
	e.preventDefault();
	

	
	
	//function to get 2 to the power of the random number
	var pow2 =  Math.pow(2, powRand);



	
	//Retrieving the users guess
	var usr = $(this).find("#guess").val();


	
//If the user enters the right number they get affirmation
//Also that number gets logged to correctArr if it's not already there
//For ease of use the array is then sorted

	
		if (usr == pow2) {
			$('#answers').prepend('<li>Congrats Hieu, 2 to the power of ' + powRand 
				+ ' IS ' + pow2 + '!!!</li>');



			if (correctArr.indexOf(powRand) < 0){
				correctArr.push(powRand);
				correctArr.sort(function(a, b){return a-b});
				sampleArray.splice((arrRand), 1);
				sampleLen = sampleArray.length;
				arrRand = Math.floor(Math.random() * sampleLen );
				powRand = sampleArray[arrRand];


			




				//The correct answers are pushed on screen 
				if (correctArr.length > 1) {
					var len = correctArr.length;
					var lastItem = correctArr.slice(len -1, len);
					var restItems = correctArr.slice(0, len - 1);

				
					$('.correctAnswers').html("<li>So far you've got: " + restItems.toString() + " and " 
						+ lastItem.toString() + "</li><li>" +
					"That's " + len + " out of " + highNumber + "</li>");
				
				} else {
					$('.correctAnswers').html("<li>So far you've only got: " + correctArr.toString() 
						+ "</li><li>" +
					"That's only " + correctArr.length + " out of " + highNumber + "</li>");
					
				}

				

				}
		

			//If all have been answered correctly, print congrats reveal play again button 
			//while hiding the original form

			if (correctArr.length == highNumber) {
					console.log('all answered correctly');

					$('div#question').html('<p>Congrats! You answered them all correctly!</p>');

					$('#playAgain').show();
					$('.guessForm').hide();

					} else {


			//Otherwise the the number is randomly generated again
			//and the question is posted with the new number
						
						$('div#question').html('<p>What is 2 to the power of ' + powRand + '?</p>');
					}

			
			//If they get it wrong they're mocked brutally
			//and the number is randomly generated again and another question asked
		} 
		else {
			

			$('#answers').prepend("<li>How are you ever going to get a job in Google if you don't know 2 to the power of " 
				+ powRand + " is " + pow2 + "?</li>");
			powRand = sampleArray[Math.floor(Math.random() * sampleLen )];

			$('div#question').html('<p>What is 2 to the power of ' + powRand + '?</p>');
		}


//The placeholder is reset as well

	console.log(powRand + ' at end of click function')
	console.log('sampleArray is ' + sampleArray + ' at end of click function')
	$("#guess").val('');
});



//Hide the play again button until game is complete
$('#playAgain').hide();


//On clicking Play Again delete all the previous answers and reset the counter

$('#playAgain').on('click', function(){
	console.log('clicked');
	$(this).hide();
	$('.guessForm').show();
	$('.correctAnswers').html("<li>So far you've got: ...NOTHING! COME ON!</li>");

	// //Empty array to be filled by the correctly answered questions
	// var correctArr = [];

	// //Empty array to be filled by all the sample numbers
	// var sampleArray = [];

	// //Fill array with numbers from sample range ie: 1-20
	// var i;

	// for (i = 1; i <= highNumber; i++) {
	// 	sampleArray.push(i);
	// }

	// var sampleLen = sampleArray.length;

	// var arrRand = Math.floor(Math.random() * sampleLen);

	// //Define a random number between 1 and a higher number (20 for this example)
	// var powRand = sampleArray[Math.floor(Math.random() * sampleLen)];

	resetValues();
	
	$('div#question').html('<p>What is 2 to the power of ' + powRand + '?</p>');
	$('#answers').html('');
});



