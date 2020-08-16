var formEl = document.querySelector("#task-form");


var creatTaskHandler = function () {
    event.preventDefault();
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEl);
}
formEl.addEventListener("submit", creatTaskHandler);
var taskToDoEl = document.querySelector("#task-to-do");

var taskItemEl = document.createElement("li");
taskItemEl.textContent = "hello";
taskItemEl.className = "task-item";

taskToDoEl.appendChild(taskItemEl);

