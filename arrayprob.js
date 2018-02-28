function printReverse(arr){
    for(var i=arr.length -1; i>=0; i--){
        console.log(arr[i]);
    }
}

printReverse([3,6,2,5])

// is uniform

function isUniform(arr){
   var first = arr[0];
   for(var i=0; i<arr.length; i++){
       if(arr[i] !== first){
           return false;
       }
   }  
   return true;
}

// sumArray() 

function sumArray(arr){
    var total =0;
    arr.forEach(function(element){
        total +=element;
    });
    return total;         
    }

// max()
function max(arr){
    var max = arr[0];
    for(i = 0; i<arr.length; i++){
        if(max<arr[i]){
            max=arr[i];
        }
    };
    return max;
}
