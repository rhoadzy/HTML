// create an array of movie objects

var movies =[
    {
        title: "Star Wars",
        rating: 4,
        seen: true
    },
    {
        title: "Max max furry",
        rating: 3.5,
        seen: false
    },
    {
        title: "frozen",
        rating: 2,
        seen: false
    },
    {
        title: "Bad moms",
        rating: 4.5,
        seen: true
    }


    
];

function buildString(movies){
    var result = "You have ";
    if(movies.seen){
        result +="watched ";
    } else {
        result +="not seen ";
    }
    result +="\"" + movies.title +"\" - ";
    result += movies.rating + " stars";
    return result;
}

movies.forEach(function(movies){
    console.log(buildString(movies));
});



// movies.forEach(function(movies){
//     var result = "You have ";
//     if(movies.seen){
//         result +="watched ";
//     } else {
//         result +="not seen ";
//     }
//     result +="\"" + movies.title +"\" - ";
//     result += movies.rating + " stars";
//     console.log(result)
//     })




