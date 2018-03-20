// check off specific todos by clicking
// need to set .on() method and specify existing li
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on x to delete to do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    // stop bubble up of inheritance
    event.stopPropagation();
}); 

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabing new to do text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li to add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "  + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});