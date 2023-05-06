import TaskObj from './taskObj.js';
// collect objects
const addTask = (descriptionToBeAdded, arr) => {
  const newTask = new TaskObj(descriptionToBeAdded);
  arr.push(newTask);
  newTask.index = arr.length;
};

export default addTask;