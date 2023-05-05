// import _ from 'lodash';
import "./style.css";
import showTasks from "./modules/showTasks.js";
import addTask from "./modules/addTask";
import updateTask from './modules/updateTask'

let tasks = [];

// const addTaskBtn = document.querySelector('.add-task-btn');
const form = document.querySelector(".add-task");
const addTaskInput = document.querySelector("#add-task-input");
addTaskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask(addTaskInput.value, tasks);
    showTasks(tasks);
    form.reset();
  }
});

document.addEventListener("click", (event) => {
  const allDesc = document.querySelectorAll(".description");
  allDesc.forEach((task, index) => {
    if (event.target === task) {
      const li = event.target.parentNode;
      li.classList.add("change-background");
      const previousTask = tasks[index].description;
      const newInput = document.createElement("input");
      newInput.type = "text";
      newInput.value = previousTask;
      newInput.classList.add("description", "transp-background");
      task.innerHTML = "";
      task.appendChild(newInput);
      newInput.focus();

      newInput.addEventListener("blur", () => {
        task.removeChild(newInput);
        task.innerText = newInput.value;
        updateTask(tasks, index, newInput.value);
        showTasks(tasks);
      });
    }
  });
});

tasks = JSON.parse(localStorage.getItem("storedTasks")) || [];
showTasks(tasks);
