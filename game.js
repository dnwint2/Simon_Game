/* global constants and variables */

const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var answerPattern = [];
var gameLevel = 0;
var keyLockout = false;
var clickLockout = true;

/* functions */

function playErrorSound() {
  sound = new Audio("./sounds/wrong.mp3");
  sound.play();
}

function playButtonSound(buttonId) {
  sound = new Audio(`./sounds/${buttonId}.mp3`); // create new audio object, store are variable
  sound.play(); // play sound
}

function blinkButton(buttonId) {
  var button = $(`#${buttonId}`); //select button by color (by css id)
  button.animate({ opacity: 0 }, 100);
  button.animate({ opacity: 1 }, 100);
}

function flashBackground(flashColor) {
  var originalBackgroundColor = $("body").css("background-color"); //store original background color
  $("body").css("background-color", flashColor); // change background to new color
  setTimeout(() => {
    $("body").css("background-color", originalBackgroundColor); // after a delay, change background back to original color
  }, 200);
}

function nextSequence() {
  randomNumber = Math.floor(Math.random() * buttonColors.length);
  playButtonSound(buttonColors[randomNumber]);
  blinkButton(buttonColors[randomNumber]);
  gamePattern.push(buttonColors[randomNumber]);
}

function gameOver() {
  answerPattern.splice(0); // empty user answer array
  gamePattern.splice(0); // empty game pattern array
  $("#level-title").text("Game Over, Press Any Key to Restart"); // change page title / message
  flashBackground("red"); //red background for extra fail emphasis
  playErrorSound(); // error sound
  gameLevel = 0; // reset gameLevel
  pressKeyToStart = true;
}

function levelUp() {
  answerPattern.splice(0); // empty user answer array
  nextSequence(); // add new button to game pattern & show user
  gameLevel++; // increment game level
  $("#level-title").text(`Level ${gameLevel}`); // display new game level to user
  clickLockout = false;
}

function levelUpAfter(delay) {
  setTimeout(levelUp, delay);
}

/* Main */

$("body").keypress(function() {
  //Place event listener on document 'body' element
  if (keyLockout) return;
  //if keyLockout is true, leave callback function
  keyLockout = true; //immediately set 'keyLockout' flag to 'true' to prevent restarting the whole game with any keypress
  levelUp(); // start by leveling up from level 0 to level 1 - this does the initial 'Simon Says' computer button press.
  $(".btn").click(function(e) {
    // open up click listener on all buttons
    console.log(`${e.target.id} button clicked.`);
    if (clickLockout) return;
    clickLockout = true;
    var userChosenColor = e.target.id;
    playButtonSound(userChosenColor);
    blinkButton(userChosenColor);
    answerPattern.push(userChosenColor);
    if (
      // if last item in answerPattern isn't the same as corresponding element of gamePattern
      answerPattern[answerPattern.length - 1] !==
      gamePattern[answerPattern.length - 1]
    ) {
      // gameOver
      answerPattern.splice(0); // empty answerPattern array
      gamePattern.splice(0); // empty gamePattern array
      gameOver();
      keyLockout = false;
      clickLockout = true;
      $(".btn").off("click");
      return;
    } else if (answerPattern.length === gamePattern.length) {
      // if last item in answerPattern is the same as corresponding element of gamePattern, and answerPattern has reached the end of gamePattern
      answerPattern.splice(0); // empty answerPattern array
      levelUpAfter(900); // level up!! User won the round!
    } else if (answerPattern.length < gamePattern.length) {
      clickLockout = false;
    }
  });
});
