import showTasks from './showTasks.js';

const removeTask = (arr, index) => {
  arr.splice(index, 1);
  for (let i = index; i < arr.length; i += 1) {
    arr[i].index = i;
  }
  showTasks(arr);
};
export default removeTask;