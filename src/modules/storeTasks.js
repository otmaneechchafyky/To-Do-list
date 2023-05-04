const storeBooks = (toBeStored) => {
  localStorage.setItem('storedTasks', JSON.stringify(toBeStored));
};
export default storeBooks;