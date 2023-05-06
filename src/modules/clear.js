const clear = (tasks) => {
  tasks = tasks.filter((item) => item.completed === false);
  let i = 0;
  tasks.forEach((task) => {
    task.index = i + 1;
    i += 1;
  });
  return tasks;
};
export default clear;