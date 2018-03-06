var numCircles = 6;
var colors = [];
var pickedColor;
var circles = document.querySelectorAll(".circle");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //mode buttons event listeners
  setUpModeButtons();
  setUpCircles();
  reset();
}

function setUpModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numCircles=3:numCircles = 6;
      reset();
    });
  }
}

function setUpCircles(){
  for (var i = 0; i < circles.length; i++) {
    //add click listeners to circles
    circles[i].addEventListener("click", function(){
      //grab color of clicked circle
      var clickedColor = this.style.background;
      //compare color to picked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      }
      else {
        //the wrong one matches background color
        this.style.background = document.querySelector("body").style.background;
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  //generate new colors
  colors = generateRandomColors(numCircles);
  //pick a new random color
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  //change text after reset
  resetButton.textContent = "New Colors";
  //change colors of circles
  for (var i = 0; i < circles.length; i++) {
    if (colors[i]) {
      circles[i].style.display = "block";
      circles[i].style.background = colors[i];
    }
    else {
      circles[i].style.display = "none";
    }
  }
  //change h1 color to match background color
  h1.style.background = document.querySelector("body").style.background;
  //remove message
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
 reset();
})

function changeColors(color){
  //loop through all circles
  for (var i = 0; i < circles.length; i++) {
    //change each color to match given color
    circles[i].style.background = color;
  }
}

function pickColor(){
  //picks a random number from array "colors"
  var random = Math.floor(Math.random() * colors.length);
  //returning a color from array
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push int o array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
