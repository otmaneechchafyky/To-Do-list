const sortTasks = (toBeSorted) => {
  toBeSorted.sort((a, b) => a.index - b.index);
};

export default sortTasks;