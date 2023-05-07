import './style.css';
import showTasks from './modules/showTasks.js';
import addTask from './modules/addTask.js';
import updateTask from './modules/updateTask.js';
import removeTask from './modules/removeTask.js';
import clear from './modules/clear.js';
import isCompleted from './modules/comletedTask.js';

let tasks = [];

// Add new task when press the enter key
const form = document.querySelector('.add-task');
const addTaskInput = document.querySelector('#add-task-input');
addTaskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && addTaskInput.value !== '') {
    addTask(addTaskInput.value, tasks);
    showTasks(tasks);
    form.reset();
  }
});

// Add new task when click the button on the left
document.querySelector('.add-task-btn').addEventListener('click', () => {
  if (addTaskInput.value !== '') {
    addTask(addTaskInput.value, tasks);
    showTasks(tasks);
    form.reset();
  }
});

// Add click event
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

  // Declare completed tasks
  const checks = document.querySelectorAll('.checks');
  checks.forEach((check, index) => {
    if (event.target === check) {
      isCompleted(check, index, tasks);
    }
  });

  // Clear all checked tasks in one click
  const clearAll = document.querySelector('.clear-all');
  if (event.target === clearAll) {
    tasks = clear(tasks);
    showTasks(tasks);
  }
});

// Check if task is completed
const checks = document.querySelectorAll('.checks');
checks.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    isCompleted(checkbox, index);
    showTasks(tasks);
  });
});

// Get data from locale storage and show the final the updated tasks List
tasks = JSON.parse(localStorage.getItem('storedTasks')) || [];
showTasks(tasks);

// onload transition
window.onload = () => {
  document.querySelector('.todo-icon').classList.add('animate-icon');
  document.querySelector('.to-do-name').classList.add('animate-icon');
};

// show task's date

const d = new Date().toLocaleDateString();

document.querySelector('.date').textContent = `Tasks of ${d}`;