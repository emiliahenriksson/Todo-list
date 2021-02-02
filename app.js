const addBtn = document.getElementById("addBtn");
const addTodo = document.getElementById("addTodo");
let todoList;


if (localStorage.getItem("JSONlist") === null) {
    todoList = [];

    todoList.push({name: "run", complete: true});
    todoList.push({name: "clean", complete: false});
} else {
    todoList = JSON.parse(localStorage.getItem("JSONlist"));
}

todoList.forEach(function(todo) {
    const listTodos = document.getElementById("toDoList");
    const divTodo = document.createElement("div");
    listTodos.appendChild(divTodo);
    const textTodo = document.createElement("p");
    textTodo.innerHTML = todo.name;
    divTodo.appendChild(textTodo);
    const remBtn = document.createElement("button");
    divTodo.appendChild(remBtn);
    remBtn.classList.add("delete")
    const compBtn = document.createElement("button");
    divTodo.appendChild(compBtn);
    compBtn.classList.add("done")

    if (todo.complete == true) {
        textTodo.style.textDecoration = "line-through";
        textTodo.style.backgroundColor = "#78CFD580";
    } else {
        
    }
    
    remBtn.addEventListener("click", function() {
        console.log(todoList.indexOf(todo));
        todoList.splice(todoList.indexOf(todo), 1);

        let JSONReadyTodo = JSON.stringify(todoList);
        localStorage.setItem('JSONlist', JSONReadyTodo);
        location.reload();
    });

    compBtn.addEventListener("click", function() {
        
        todoList.push(todoList.splice(todoList.indexOf(todo), 1)[0]);
        todo.complete = true;
        
        let JSONReadyTodo = JSON.stringify(todoList);
        localStorage.setItem('JSONlist', JSONReadyTodo);
        location.reload();
    })
    
});




//console.log(todoList);

addBtn.addEventListener("click", function() {
    todoList.push({name: addTodo.value, complete: false});
 
    let JSONReadyTodo = JSON.stringify(todoList);
    localStorage.setItem('JSONlist', JSONReadyTodo);
  

    //event.preventDefault();
});
