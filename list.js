var todos = ["buy new turtle"];
var input = prompt("What would you like to do?");



while(input !=="quit"){
      if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if(input === "delete"){
       deleteTodo()
    }
    
input = prompt("What would you like to do?");
}
console.log("ok you quit the app");

function listTodos(){
    console.log("************")
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("************")
}

function addTodo() {
    var newToDo = prompt("Enter new todo");
    todos.push(newToDo);
    console.log("Added Todo");
}
function deleteTodo(){
    // ask for index of todo to be deletet
    var index = prompt("Enter index of todo to delete");
    // delete that to do
    // splice()
    todos.splice(index, 1);
    console.log("Deleted Todo");

}