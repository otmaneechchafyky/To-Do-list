"use strict";
(self["webpackChunkto_do_list_list_structure"] = self["webpackChunkto_do_list_list_structure"] || []).push([["clear"],{

/***/ "./src/modules/clear.js":
/*!******************************!*\
  !*** ./src/modules/clear.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clear = (tasks) => {
  tasks = tasks.filter((item) => item.completed === false);
  let i = 0;
  tasks.forEach((task) => {
    task.index = i + 1;
    i += 1;
  });
  return tasks;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clear);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/clear.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vc3JjL21vZHVsZXMvY2xlYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2xlYXIgPSAodGFza3MpID0+IHtcbiAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkID09PSBmYWxzZSk7XG4gIGxldCBpID0gMDtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suaW5kZXggPSBpICsgMTtcbiAgICBpICs9IDE7XG4gIH0pO1xuICByZXR1cm4gdGFza3M7XG59O1xuZXhwb3J0IGRlZmF1bHQgY2xlYXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9