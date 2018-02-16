
var age=Number(prompt("what is your age"));




if (age <18) {
    console.log ("Sorry, you are not old enough to enter the venue");
    }
    
// negative age
if (age < 0) {
    console.log("come back after your are born");
}

// age =21
if (age===21){
    console.log("Happy Birthday!!!!!!!");
}

// age is odd
if (age % 2 !==0){
    console.log("your age is odd");
}

// square root - perfect square
if (age % Math.sqrt(age)===0){
    console.log ("Your age is a perfect square");
}

else if(age <21) {
    console.log("You can enter the venue but not drink");
}

else {
    console.log("You can enter and drink");
}


