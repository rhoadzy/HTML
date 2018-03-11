var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

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
        changeColor(clickedColor);
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = ("try again!");
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
