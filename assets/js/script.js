var buttonEl = document.querySelector("#save-task");


var creatTaskHandler = function () {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEl);
}
buttonEl.addEventListener("click", creatTaskHandler);
var taskToDoEl = document.querySelector("#task-to-do");

var taskItemEl = document.createElement("li");
taskItemEl.textContent = "hello";
taskItemEl.className = "task-item";

taskToDoEl.appendChild(taskItemEl);

