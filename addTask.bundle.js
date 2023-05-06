"use strict";
(self["webpackChunkto_do_list_list_structure"] = self["webpackChunkto_do_list_list_structure"] || []).push([["addTask"],{

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskObj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskObj.js */ "./src/modules/taskObj.js");

// collect objects
const addTask = (descriptionToBeAdded, arr) => {
  const newTask = new _taskObj_js__WEBPACK_IMPORTED_MODULE_0__["default"](descriptionToBeAdded);
  arr.push(newTask);
  newTask.index = arr.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);

/***/ }),

/***/ "./src/modules/taskObj.js":
/*!********************************!*\
  !*** ./src/modules/taskObj.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Object class
class taskObj {
  constructor(description) {
    this.description = description;
    this.index = 0;
    this.completed = false;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskObj);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/addTask.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDbkM7QUFDQTtBQUNBLHNCQUFzQixtREFBTztBQUM3QjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUNSdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL3NyYy9tb2R1bGVzL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL3NyYy9tb2R1bGVzL3Rhc2tPYmouanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2tPYmogZnJvbSAnLi90YXNrT2JqLmpzJztcbi8vIGNvbGxlY3Qgb2JqZWN0c1xuY29uc3QgYWRkVGFzayA9IChkZXNjcmlwdGlvblRvQmVBZGRlZCwgYXJyKSA9PiB7XG4gIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFza09iaihkZXNjcmlwdGlvblRvQmVBZGRlZCk7XG4gIGFyci5wdXNoKG5ld1Rhc2spO1xuICBuZXdUYXNrLmluZGV4ID0gYXJyLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFRhc2s7IiwiLy8gT2JqZWN0IGNsYXNzXG5jbGFzcyB0YXNrT2JqIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0YXNrT2JqOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==