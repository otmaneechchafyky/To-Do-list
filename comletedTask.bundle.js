"use strict";
(self["webpackChunkto_do_list_list_structure"] = self["webpackChunkto_do_list_list_structure"] || []).push([["comletedTask"],{

/***/ "./src/modules/comletedTask.js":
/*!*************************************!*\
  !*** ./src/modules/comletedTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isCompleted = (check, index, tasks) => {
  if (check.checked) {
    tasks[index].completed = true;
    localStorage.setItem('storedTasks', JSON.stringify(tasks));
  } else {
    tasks[index].completed = false;
    localStorage.setItem('storedTasks', JSON.stringify(tasks));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isCompleted);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/comletedTask.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbGV0ZWRUYXNrLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL3NyYy9tb2R1bGVzL2NvbWxldGVkVGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc0NvbXBsZXRlZCA9IChjaGVjaywgaW5kZXgsIHRhc2tzKSA9PiB7XG4gIGlmIChjaGVjay5jaGVja2VkKSB7XG4gICAgdGFza3NbaW5kZXhdLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrc1tpbmRleF0uY29tcGxldGVkID0gZmFsc2U7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGlzQ29tcGxldGVkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==