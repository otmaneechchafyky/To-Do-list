import sortTasks from './sortTasks.js'
const populate = (toBePopulated) => {
    const listContainer = document.querySelector('.list-container');
    sortTasks(toBePopulated);
  
    toBePopulated.forEach(element => {
      const task = document.createElement('li');
      task.innerHTML = `
        <div class="description-container">
          <input type="checkbox" class="check">
          <p class="description">${element.description}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="silver" d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"/></svg>
      `;
      listContainer.appendChild(task);
    });
  };
  export default populate;