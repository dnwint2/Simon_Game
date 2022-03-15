const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomNumber;
var randomChosenColor;

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
}

function buttonNameToId(name) {
  return `#${buttonId}`;
}

function blinkButton(buttonId) {
  var button = $(`#${buttonId}`); //select button by color (by css id)
  button.animate("{opacity: 0}", 100);
  button.animate("{opacity: 1}", 100);
}

function playButtonSound(buttonId) {
  sound = new Audio(`./${buttonId}.mp3`);
}

function playErrorSound() {
  sound = new Audio("./sounds/wrong.mp3");
  sound.play();
}

nextSequence();
randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

$(".btn").click(humanPressesButton);

function humanPressesButton(e) {
  humanInput = e.target.id;
}

function playGame() {
  for (i = 0; i < gamePattern.length; i++) {
    $(".btn").click(e => {
      if (gamePattern[i] !== e.target.id) {
        playErrorSound();
      }
    });
  }
}

function flashBackground(backgroundColor) {
  var background = $("body");
  var originalBackgroundColor = background.css("background-color");
  background.css("background-color", `${backgroundColor}`);
  setTimeout(1000);
  $("body").css("background-color", `${originalBackgroundColor}`);
}

function flashBackground(flashColor) {
  var originalBackgroundColor = $("body").css("background-color");
  changeBackgroundColor(flashColor);
  setTimeout(changeBackgroundColor(originalBackgroundColor), 1000);
}

function beginGame() {
  nextSequence(); //create new sequence, now held by "gamePattern"
  for (i = 0; i < gamePattern.length; i++) {
    $(btn).click(e => {
      if (e.target.id === gamePattern[i]) {
      }
    });
  }
}
/*  */

if (gamePattern.length === 0) {
  $(document).keypress(beginGame);
}

function compareSequences() {
  i = 0;
  while (i < gamePattern.length) {
    $(".btn").click(function(e) {
      var userClickInput = e.target.id;
      if (userClickInput === gamePattern[i]) {
        console.log("same");
        console.log(i);
        i++;
      } else {
        gameOver();
        console.log("different");
      }
    });
  }
  console.log("past end of gamePattern");
}

function compareSequences() {
  i = 0;
  while (i < gamePattern.length) {
    $(".btn").click(function(e) {
      var userClickInput = e.target.id;
      $(".btn").off("click");
      if (userClickInput === gamePattern[i]) {
        console.log("same");
        console.log(i);
        i++;
      } else {
        gameOver();
        console.log("different");
      }
    });
  }
  console.log("Win!");
  console.log("past end of gamePattern");
}

function testClick() {
  i = 0;
  var userClickInput;
  $(".btn").click(function(e) {
    while (i < gamePattern.length) {
      userClickInput = e.target.id;
      var checkSame = gamePattern[i] === userClickInput;
      userClickInput = "nothing";
      if (checksame === true) {
        console.log("same");
      } else {
        console.log("mismatch");
      }
      i++;
    }
    console.log("levelup");
  });
}

function compareSequences() {
  i = 0;
  while (i < gamePattern.length) {
    $(".btn").click(function(e) {
      var clickInput = e.target.id;
      if (clickInput === gamePattern[i]) {
        console.log("same");
        console.log(i);
        i++;
      } else {
        console.log("different");
        gameOver();
      }
    });
    $(".btn").off("click");
  }
  console.log("Win!");
  console.log("past end of gamePattern");
}

// $(".btn").click(compareSequences);
//
// function compareSequences(e) {
//   var clickInput = e.target.id;
//
// }

function testClick() {
  i = 0;
  var userClickInput;
  $(".btn").click(function(e) {
    while (i < gamePattern.length) {
      userClickInput = e.target.id;
      var checkSame = gamePattern[i] === userClickInput;
      userClickInput = "nothing";
      if (checkSame === true) {
        console.log("same");
      } else {
        console.log("mismatch");
      }
      i++;
    }
    console.log("levelup");
  });
}
