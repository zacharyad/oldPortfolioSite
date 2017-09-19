//coded along with Colten Steeles Udemy Course Sept. 2017

var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDispay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeBtn = document.querySelectorAll(".mode")

init();

function setUpModeBtns(){
	for (var i = 0; i < modeBtn.length; i++) {
		modeBtn[i].addEventListener("click", function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			reset();
		})
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor
			//compare color of picked color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetBtn.textContent = "Play Again...?"
				changeColors(clickedColor)
				h1.style.backgroundColor = clickedColor
			} else {
				this.style.backgroundColor = "#22264b";
				messageDisplay.textContent = "Try again..."
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numOfSquares);

	//picked new random color
	pickedColor = pickColor();
	//change color dis to match picked color
	colorDisplay.textContent = pickedColor;
	resetBtn.textContent = "New Colors";
	//change colors of the squares on the page
	messageDisplay.textContent = "";
	for(i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#e6cf8b";
}

function init(){
	setUpModeBtns();
	setUpSquares();
	reset();
}

	//this is refractured into the reset function above
// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected")

// 	//hide botton squares
// 	numOfSquares = 3;
// 	//generate 3 new colors on top
// 	colors = generateRandomColors(numOfSquares)
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i]
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected")
// 	easyBtn.classList.remove("selected");
// 	numOfSquares = 6;
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
		
// 			squares[i].style.backgroundColor = colors[i]
// 			squares[i].style.display = "block";
// 		}
	
// })

resetBtn.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(numOfSquares);

	//picked new random color
	pickedColor = pickColor();
	//change color dis to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	//change colors of the squares on the page
	messageDisplay.textContent = "";
	for(i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#e6cf8b";
})

function changeColors(color){
	//loop through squares
	for(i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and puch into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick red from 0-255
	var r = Math.floor(Math.random() * 256);
	//green 0-255
	var g = Math.floor(Math.random() * 256);
	//blue 0-255
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

