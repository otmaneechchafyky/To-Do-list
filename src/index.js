// import _ from 'lodash';
import './style.css';
import showTasks from './modules/showTasks.js';
import addTask from './modules/addTask.js';
import updateTask from './modules/updateTask.js';
import removeTask from './modules/removeTask.js';

let tasks = [];

// const addTaskBtn = document.querySelector('.add-task-btn');
const form = document.querySelector('.add-task');
const addTaskInput = document.querySelector('#add-task-input');
addTaskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && addTaskInput.value !== '') {
    addTask(addTaskInput.value, tasks);
    showTasks(tasks);
    form.reset();
  }
});

// Add click event to the the trash to targets
document.addEventListener('click', (event) => {
  const allDesc = document.querySelectorAll('.description');

  // Update the task using new created input
  allDesc.forEach((task, index) => {
    if (event.target === task) {
      const li = (event.target.parentNode).parentNode;
      li.classList.add('change-background');
      const previousTask = tasks[index].description;
      const newInput = document.createElement('input');
      newInput.type = 'text';
      newInput.value = previousTask;
      newInput.classList.add('description', 'transp-background');
      task.innerHTML = '';
      task.appendChild(newInput);
      newInput.focus();

      newInput.addEventListener('blur', () => {
        task.removeChild(newInput);
        task.innerText = newInput.value;
        updateTask(tasks, index, newInput.value);
        showTasks(tasks);
      });
    }
  });

  // Remove task when click on trash icon
  const trashs = document.querySelectorAll('.trash');

  trashs.forEach((trashIcon, index) => {
    if (event.target === trashIcon) {
      removeTask(tasks, index);
      showTasks(tasks);
    }
  });
});

// Get data from locale storage and show the final the updated tasks list
tasks = JSON.parse(localStorage.getItem('storedTasks')) || [];
showTasks(tasks);