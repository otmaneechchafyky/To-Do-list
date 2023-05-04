const sortTasks = (toBeSorted) => {
    toBeSorted.sort((a, b) => {
        return a.index - b.index;
      });
}

export default sortTasks;