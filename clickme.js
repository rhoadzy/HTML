// change backgroud from white to pink when button clicked


var button = document.querySelector("button");
// refacted with CSS class see below
// var isPurple = false;




// button.addEventListener("click", function(){
//     if (isPurple){
//         document.body.style.background ="white";
//         // isPurple = false;
//     } else{
//        document.body.style.background="purple";
//     //    isPurple = true; 
//     }  
//     // refactored from above
//     isPurple = !isPurple;  
// });

// refactored more added CSS class purple

button.addEventListener("click", function () {
   document.body.classList.toggle("purple");
});

