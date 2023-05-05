import taskObj from './taskObj'

const addTask = (descriptionToBeAdded, arr) => {
    if (descriptionToBeAdded === '') {
        alert('Please, Add a task')
    } else {
        const newTask = new taskObj(descriptionToBeAdded);
      arr.push(newTask);
      newTask.index = arr.length;
    }
  }

  export default addTask;