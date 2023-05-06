const isCompleted = (check, index, tasks) => {
  if (check.checked) {
    tasks[index].completed = true;
    localStorage.setItem('storedTasks', JSON.stringify(tasks));
  } else {
    tasks[index].completed = false;
    localStorage.setItem('storedTasks', JSON.stringify(tasks));
  }
};
export default isCompleted;