var numSquares =6;
var colors = generateRandomColors(numSquares);
    

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

easyButton.addEventListener ("click", function(){
    hardButton.classList.remove("selected");
    easyButton.classList.add ("selected");
    numSquares =3;
    colors =generateRandomColors(numSquares);
    pickedColor =pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none"
        }
    }
})

hardButton.addEventListener("click", function () {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block"
        }
    }
)

resetButton.addEventListener("click",function(){
    // generate new colors
    colors =generateRandomColors(numSquares);
    // pick a new random color
    pickedColor = pickColor();
    // change colorDisplay to matched picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    this.textContent="New Colors";   
    
    for(var i=0; i <squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent="";

})
colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
    // add inital color to square
    squares[i].style.backgroundColor = colors[i];
    // click square
    squares[i].addEventListener("click", function(){
        
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
        messageDisplay.textContent ="Correct!";
        resetButton.textContent = "Play Again?";
        h1.style.backgroundColor = clickedColor;
        changeColor(clickedColor);
        
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = ("Try Again!");
        // debug logic
        console.log(clickedColor, pickedColor);
    }
    });
}

function changeColor(color){
    // loop through all squares 
    for(var i=0; squares.length; i++){
        // change each color to give color
    squares[i].style.backgroundColor = color
    
    }
}

function pickColor(){
    // math.flor cops off the decimal  math.random picks between 0 and 1 need to multiple by number 6 would be 5.99 +1 would be 6.99 colors.lenght is 5
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
// make an arry
var arr = [];
// add num random colors to array
for (var i=0; i<num; i++){
    // get random color and push into array
 arr.push(randomColor())
}
// return that array
return arr;


}

function randomColor(){
    // pick a "red " from 0-255
   var r = Math.floor(Math.random() * 256);
     // pick a "green " from 0-255
    var g = Math.floor(Math.random() * 256);
      // pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " +g + ", " +b +")";
}