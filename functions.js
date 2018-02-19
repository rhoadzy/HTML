// function isEven(num) {
//     if (num % 2 === 0)
//         return console.log ("true");
//     else console.log("false");
               
// }
 
function isEven(num) {
    return (num % 2 === 0);
       }  


function factorial(num){
    var result=1;
    for (var i=2; i<=num;i++){
        // result=result*i
        result*=i;
        }
        return result;
}
 // epression that relaces anything in the / / eg /-/
function kebabToSnake(str) {
   
    var newStr = str.replace(/-/g,"_");
    return newStr;    
}

