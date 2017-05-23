$(document).ready(function() {
	//global variables
	var targetScore = 0;
	var wins = 0;
	var losses = 0;
	// var userScore = 0;

	crystals = ["assets/images/red.png", "assets/images/blue.png", "assets/images/yellow.png", "assets/images/green.png"];



	$('#win').text(wins);
	$('#loss').text(losses);

	randScore();
	// console.log(randScore);
	newCrystals();
	newGame();

	//this function generates a random number between 1-120 for the target score
	function randScore(){
		// targetScore = (Math.floor(Math.random() * 120) + 19);
		targetScore = getRandomIntInclusive(19,120);
		console.log("Target score is : " + targetScore);
		
	}

	function getRandomIntInclusive(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	

	function newCrystals () {
		var numbers = [];
			// generate 4 random values and pushed into crystalValue still needs parse
		while(numbers.length < 4) {
			randCrystal = getRandomIntInclusive(1,12);
			var found = false;
			console.log("random crystal is : " + randCrystal);
			// crystalValue.push(randCrystal);
			// console.log(crystalValue);
			// console.log("crystal value is : " + crystalValue);
			// console.log(typeof "crystalValue is " + crystalValue);
			// console.log(typeof "crystalValue is " + crystalValue);

			for (var i = 0; i < numbers.length; i++) {
				if (numbers[i] === randCrystal) {
					found = true; 
					break
				}
			}
			if (!found) {
				numbers[numbers.length] = randCrystal;
			}	
		}
		// console.log(newCrystals);
		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	};

	function newGame() {
	
		userScore = 0;
		$("#userScore").text(userScore);

		randScore();

		$(".value").text(targetScore);

		$(".crystalImage").on("click", function() {
			userScore = userScore + parseInt($(this).data("num"));
		
			$("#userScore").text(userScore);
				checkScore();

		});
		console.log("User Score is : " + userScore);
	};
	

	
	
	//logic to test userScore vs targetScore
	function checkScore() {	
		if (userScore === targetScore) {
			$("#status").text("YOU WON!!!");
			console.log(status);
			wins++;
			$("#win").text(wins);
			console.log(wins);
			$("#crystals").empty();
			newCrystals();
			newGame();
		} else if (userScore >= targetScore) {
			$("status").text("You Lose");
			console.log(status);
			losses++;
			$("#loss").text(losses);
			console.log(losses);
			$("#crystals").empty();
			newCrystals();
			newGame();
		 } else if (userScore <= targetScore) {
		 	console.log(userScore);
		 	$("status").empty();
		 }
	};


});