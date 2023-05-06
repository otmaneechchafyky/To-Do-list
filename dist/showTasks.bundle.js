"use strict";
(self["webpackChunkto_do_list_list_structure"] = self["webpackChunkto_do_list_list_structure"] || []).push([["showTasks"],{

/***/ "./src/modules/showTasks.js":
/*!**********************************!*\
  !*** ./src/modules/showTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showTasks = (toBePopulated) => {
  const listContainer = document.querySelector('.list-container');
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }
  // ascending sort of tasks elements
  toBePopulated.sort((a, b) => a.index - b.index);

  let descriptionId = 0;

  toBePopulated.forEach((element) => {
    descriptionId += 1;
    const task = document.createElement('li');
    task.innerHTML = `
        <div class="description-container">
          <input type="checkbox" id="${element.index}" class="checks">
          <p id="${descriptionId}" class="description">${element.description}</p>
        </div>
        <svg class="trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="silver" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"/></svg>
      `;
    task.classList.add('task-class');
    listContainer.appendChild(task);

    // Add check mark when it is true
    if (element.completed === true) {
      document.getElementById(element.index).setAttribute('checked', 'checked');
    } else {
      document.getElementById(element.index).removeAttribute('checked');
    }
  });

  // save tasks array in locale storage
  localStorage.setItem('storedTasks', JSON.stringify(toBePopulated));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTasks);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/showTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd1Rhc2tzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxjQUFjO0FBQ3JELG1CQUFtQixjQUFjLHdCQUF3QixvQkFBb0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtbGlzdC1zdHJ1Y3R1cmUvLi9zcmMvbW9kdWxlcy9zaG93VGFza3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hvd1Rhc2tzID0gKHRvQmVQb3B1bGF0ZWQpID0+IHtcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvbnRhaW5lcicpO1xuICB3aGlsZSAobGlzdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgbGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZChsaXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG4gIC8vIGFzY2VuZGluZyBzb3J0IG9mIHRhc2tzIGVsZW1lbnRzXG4gIHRvQmVQb3B1bGF0ZWQuc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xuXG4gIGxldCBkZXNjcmlwdGlvbklkID0gMDtcblxuICB0b0JlUG9wdWxhdGVkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBkZXNjcmlwdGlvbklkICs9IDE7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGFzay5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCIke2VsZW1lbnQuaW5kZXh9XCIgY2xhc3M9XCJjaGVja3NcIj5cbiAgICAgICAgICA8cCBpZD1cIiR7ZGVzY3JpcHRpb25JZH1cIiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtlbGVtZW50LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJ0cmFzaFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwic2lsdmVyXCIgZD1cIk0yMTYgNDhoLTQwdi04YTI0IDI0IDAgMCAwLTI0LTI0aC00OGEyNCAyNCAwIDAgMC0yNCAyNHY4SDQwYTggOCAwIDAgMCAwIDE2aDh2MTQ0YTE2IDE2IDAgMCAwIDE2IDE2aDEyOGExNiAxNiAwIDAgMCAxNi0xNlY2NGg4YTggOCAwIDAgMCAwLTE2Wk05NiA0MGE4IDggMCAwIDEgOC04aDQ4YTggOCAwIDAgMSA4IDh2OEg5NlptOTYgMTY4SDY0VjY0aDEyOFptLTgwLTEwNHY2NGE4IDggMCAwIDEtMTYgMHYtNjRhOCA4IDAgMCAxIDE2IDBabTQ4IDB2NjRhOCA4IDAgMCAxLTE2IDB2LTY0YTggOCAwIDAgMSAxNiAwWlwiLz48L3N2Zz5cbiAgICAgIGA7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrLWNsYXNzJyk7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcblxuICAgIC8vIEFkZCBjaGVjayBtYXJrIHdoZW4gaXQgaXMgdHJ1ZVxuICAgIGlmIChlbGVtZW50LmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pbmRleCkuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pbmRleCkucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBzYXZlIHRhc2tzIGFycmF5IGluIGxvY2FsZSBzdG9yYWdlXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRvQmVQb3B1bGF0ZWQpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBzaG93VGFza3M7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9