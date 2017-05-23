$(document).ready(function() {
//global variables

var targetScore = [];
var userSCore = [];
// var crystals = [red, blue, green, yellow];
var score = 0;
var wins = 0;
var losses = 0;
var counter = 0;

    // //moves
    // $('#win').text(wins);
    // $('#loss').text(losses);

// generate random target score
    var randScore = function(){

       // targetScore = (Math.floor(Math.random() * 120) + 19);
        targetScore = getRandomIntInclusive(19,120);
        console.log("Target score is : " + targetScore);
    }

   function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

// generate random crystals value
   crystals = ["assets/images/red.png", "assets/images/blue.png", "assets/images/yellow.png", "assets/images/green.png"];

   randScore();
   randomArray();
   newGame();

   
  function randomArray () {
        var numbers = [];
        while(numbers.length < 4){
            var randomnumber = getRandomIntInclusive(1,12);
            var found = false;

            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i] === randomnumber) {
                found = true; break
                } 
            }
            if (!found) {
              numbers[numbers.length] = randomnumber;
            } 
        }

      
        for (i = 0; i < numbers.length; i++) {
          var imageCrystal = $('<img>');
          imageCrystal.attr('data-num', numbers[i]);
          imageCrystal.attr('src', crystals[i]);
          imageCrystal.attr('alt', 'crystals');
          imageCrystal.addClass('crystalImage')
          $('#crystals').append(imageCrystal);
        }
  }
       
    function newGame() {

      userScore = 0;
      $("#userScore").text(userScore);

      randScore();

      $(".value").text(targetScore);

      $(".crystalImage").on("click", function() {
        userScore = userScore + parseInt($(this).data("num"));
      
      $("#userScore").text(userScore);
          if (userScore == targetScore) {
              $("#status").text("YOU WON!!!");
              wins++;
              $("#win").text(wins);
              console.log(wins);
              $("#crystals").empty();
              randomArray();
              newGame();
          } else if (userScore >= targetScore) {
              $("status").text("You Lose :(");
              losses++;
              $("#loss").text(losses);
              console.log(losses);
              $("#crystals").empty();
              randomArray();
              newGame();
          } else if (userScore <= targetScore) {
              console.log(userScore);
             }
        
    });
    console.log("User Score is : " + userScore);
  };
    
});