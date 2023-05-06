"use strict";
(self["webpackChunkto_do_list_list_structure"] = self["webpackChunkto_do_list_list_structure"] || []).push([["removeTask"],{

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeTask = (arr, index) => {
  arr.splice(index, 1);
  for (let i = index; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/removeTask.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vc3JjL21vZHVsZXMvcmVtb3ZlVGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZW1vdmVUYXNrID0gKGFyciwgaW5kZXgpID0+IHtcbiAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGFycltpXS5pbmRleCA9IGkgKyAxO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlVGFzazsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=