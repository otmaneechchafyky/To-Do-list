// import _ from 'lodash';
import './style.css';
import populate from './modules/populate.js';

let tasks = [];

class taskObj {
  constructor(description) {
    this.description = description;
    this.index = 0;
    this.completed = false;
  }
};

const addTask = (desc) => { 
  if (desc !== '') {
    const newTask = new taskObj(desc);
    newTask.index = tasks.length + 1;
    tasks.push(newTask);
  } else {
    addTaskBtn.disabled = 'disabled'; 
  } 
}


const addTaskBtn = document.querySelector('.add-task-btn');
const form = document.querySelector('.add-task');

addTaskBtn.addEventListener('click', () => {
  const addTaskIn = document.querySelector('#add-task-input').value;
  addTask(addTaskIn);
  populate(tasks);
  form.reset();
});

const getStored = () => {
  tasks = JSON.parse(localStorage.getItem('storedTasks')) || [];
}

getStored();
populate(tasks);
