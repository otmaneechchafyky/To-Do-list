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
        <label class="container">
          <input type="checkbox" id="${element.index}" class="checks">
          <span class="checkmark"></span>
        </label>
          <p id="${descriptionId}" class="description">${element.description}</p>
        </div>
        <svg class="trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#D4F1F4" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"/></svg>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd1Rhc2tzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGNBQWM7QUFDckQ7QUFDQTtBQUNBLG1CQUFtQixjQUFjLHdCQUF3QixvQkFBb0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtbGlzdC1zdHJ1Y3R1cmUvLi9zcmMvbW9kdWxlcy9zaG93VGFza3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hvd1Rhc2tzID0gKHRvQmVQb3B1bGF0ZWQpID0+IHtcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvbnRhaW5lcicpO1xuICB3aGlsZSAobGlzdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgbGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZChsaXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG4gIC8vIGFzY2VuZGluZyBzb3J0IG9mIHRhc2tzIGVsZW1lbnRzXG4gIHRvQmVQb3B1bGF0ZWQuc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xuXG4gIGxldCBkZXNjcmlwdGlvbklkID0gMDtcblxuICB0b0JlUG9wdWxhdGVkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBkZXNjcmlwdGlvbklkICs9IDE7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGFzay5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHtlbGVtZW50LmluZGV4fVwiIGNsYXNzPVwiY2hlY2tzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHAgaWQ9XCIke2Rlc2NyaXB0aW9uSWR9XCIgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7ZWxlbWVudC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3ZnIGNsYXNzPVwidHJhc2hcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cIiNENEYxRjRcIiBkPVwiTTIxNiA0OGgtNDB2LThhMjQgMjQgMCAwIDAtMjQtMjRoLTQ4YTI0IDI0IDAgMCAwLTI0IDI0djhINDBhOCA4IDAgMCAwIDAgMTZoOHYxNDRhMTYgMTYgMCAwIDAgMTYgMTZoMTI4YTE2IDE2IDAgMCAwIDE2LTE2VjY0aDhhOCA4IDAgMCAwIDAtMTZaTTk2IDQwYTggOCAwIDAgMSA4LThoNDhhOCA4IDAgMCAxIDggOHY4SDk2Wm05NiAxNjhINjRWNjRoMTI4Wm0tODAtMTA0djY0YTggOCAwIDAgMS0xNiAwdi02NGE4IDggMCAwIDEgMTYgMFptNDggMHY2NGE4IDggMCAwIDEtMTYgMHYtNjRhOCA4IDAgMCAxIDE2IDBaXCIvPjwvc3ZnPlxuICAgICAgYDtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2xhc3MnKTtcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuXG4gICAgLy8gQWRkIGNoZWNrIG1hcmsgd2hlbiBpdCBpcyB0cnVlXG4gICAgaWYgKGVsZW1lbnQuY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmluZGV4KS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmluZGV4KS5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHNhdmUgdGFza3MgYXJyYXkgaW4gbG9jYWxlIHN0b3JhZ2VcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodG9CZVBvcHVsYXRlZCkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNob3dUYXNrczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=