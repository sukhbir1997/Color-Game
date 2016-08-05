var numSquares=6;
var colors = generateRandomColor(numSquares);
var squares= document.querySelectorAll(".square");
var pickedColor= pickcolor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hrdBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors = generateRandomColor(numSquares);
	pickedColor= pickcolor();
	colorDisplay.textContent= pickedColor;
	for(var i=0;i< squares.length;i++){
		if(colors[i]){
			squares[i].style.background= colors[i];
		}else{
			squares[i].style.background="none";
		}
 	} 
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colors = generateRandomColor(numSquares);
	pickedColor= pickcolor();
	colorDisplay.textContent= pickedColor;
	for(var i=0;i< squares.length;i++){
	squares[i].style.background= colors[i];
 	squares[i].style.background="block";
 	}
})

resetButton.addEventListener("click", function(){
	//generate random colors
	colors = generateRandomColor(numSquares);
	// pick a random color from the array
	pickedColor= pickcolor();
	//change colorDisplay to match picked color
	colorDisplay.textContent= pickedColor; 
	//change colors of squares
	for(var i=0;i< squares.length;i++){
	squares[i].style.background= colors[i];
 	}
 	h1.style.background="steelblue";
 	messageDisplay.textContent="";
 	this.textContent="New Colors";
}); 

colorDisplay.textContent= pickedColor;

for(var i=0;i< squares.length;i++){
	//add initial colors
	squares[i].style.background= colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked to pickedColor
		var clickedColor=this.style.background;
		//comapare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent= "Correct";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again?";
		}else{
			messageDisplay.textContent= "Try Again";
			this.style.background= "#232323"
		}
	});
}

function changeColors(color){
	//loop through all squares
	for( var i=0; i<colors.length;i++){
		//change each color to match given color
		squares[i].style.background= color;
	}
}

function pickcolor(){
	var random= Math.floor(Math.random() * colors.length)
	return colors[random]
}


function generateRandomColor(num){
	//make an array
	var arr=[];
	//add num random colors to array
	for(var i=0; i<num; i++){
		//getrandom color and push into arr
		arr.push( randomColor());
	}
	//return that array 
	return arr;
}

function randomColor(){
	//generate red from 0-255
	var r= Math.floor(Math.random()*256);
	//generate green from 0-255
	var g= Math.floor(Math.random()*256);
	//generate blue from 0-255
	var b= Math.floor(Math.random()*256);
	//return rgb color
	return "rgb("+ r + ", " + g +", " + b + ")";
}