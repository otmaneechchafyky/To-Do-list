"use strict";
(self["webpackChunkto_do_list_list_structure"] = self["webpackChunkto_do_list_list_structure"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  padding: 5rem 0;\r\n  background-color: #05445e;\r\n  color: gray;\r\n  font-family: 'Roboto Mono', sans-serif;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\nsvg[class='trash'] {\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\nsvg[class='trash']:hover path {\r\n  fill: rgb(238, 82, 82);\r\n}\r\n\r\nsvg[class='trash']:hover {\r\n  cursor: pointer;\r\n  animation: za3ze3 0.2s linear 5;\r\n}\r\n\r\n@keyframes za3ze3 {\r\n  0%,\r\n  100% {\r\n    transform: translate(0);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  33% {\r\n    transform: translate(5px);\r\n    transform: rotate(20deg);\r\n  }\r\n\r\n  66% {\r\n    transform: translate(-5px);\r\n    transform: rotate(-20deg);\r\n  }\r\n}\r\n\r\n.to-do-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  align-items: center;\r\n  background-color: #05445e;\r\n  border-radius: 3px;\r\n  box-shadow: 7px 7px 18px 0 rgba(0, 0, 0, 0.1);\r\n  border: 5px solid #189ab4;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 2%;\r\n  border-bottom: 2px solid #189ab4;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  body {\r\n    display: flex;\r\n    align-items: start;\r\n    padding: 0.5rem;\r\n    padding-top: 2rem;\r\n    width: auto;\r\n  }\r\n\r\n  .to-do-container {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\nheader p {\r\n  font-size: 2rem;\r\n  color: #75e6da;\r\n  font-weight: 600;\r\n  letter-spacing: 5px;\r\n}\r\n\r\n.to-do-container .common {\r\n  width: 100%;\r\n  padding: 0 3%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 4rem;\r\n  border-bottom: 2px solid #189ab4;\r\n}\r\n\r\n.to-do-title {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  color: #d4f1f4;\r\n}\r\n\r\n.add-task {\r\n  background-color: #189ab4;\r\n}\r\n\r\n.to-do-container .add-task #add-task-input {\r\n  height: 3.9rem;\r\n  width: 90%;\r\n  border: 0;\r\n  outline: transparent;\r\n  font-size: 1.1rem;\r\n  color: #05445e;\r\n  background-color: #189ab4;\r\n}\r\n\r\n.to-do-container .add-task #add-task-input::placeholder {\r\n  font-style: italic;\r\n  color: #05445e;\r\n}\r\n\r\n.to-do-container .clear-all {\r\n  background-color: rgba(192, 192, 192, 0.151);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  color: #d4f1f4;\r\n  border: 0;\r\n  border-top: 1px solid #189ab4;\r\n  cursor: pointer;\r\n  height: 5rem;\r\n  width: 100%;\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.to-do-container .clear-all:hover {\r\n  background-color: #d4f1f4;\r\n  color: #05445e;\r\n}\r\n\r\n.to-do-container .list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.to-do-container .list-container li {\r\n  height: 4rem;\r\n  width: 100%;\r\n  padding: 0 3%;\r\n  display: flex;\r\n  align-items: center;\r\n  border-top: 1px solid #189ab4;\r\n}\r\n\r\n.to-do-container .list-container li .description-container {\r\n  display: flex;\r\n  gap: 4%;\r\n  align-items: center;\r\n  width: 100%;\r\n  color: #d4f1f4;\r\n}\r\n\r\n.change-background {\r\n  background-color: #0b4e46b4;\r\n  height: 4rem;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  border: 1px solid transparent;\r\n  outline: none;\r\n}\r\n\r\n.transp-background {\r\n  background-color: transparent;\r\n  border: 0;\r\n  outline: none;\r\n  font-size: 1.1rem;\r\n  color: #d4f1f4;\r\n  font-family: 'Roboto Mono', sans-serif;\r\n}\r\n\r\n/* Customize the label (the container) */\r\n.container {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  padding-top: 12px;\r\n}\r\n\r\n/* Hide the browser's default checkbox */\r\n.container input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #d4f1f4;\r\n}\r\n\r\n.container input:checked ~ .checkmark {\r\n  background-color: #189ab4;\r\n}\r\n\r\n.checkmark::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n/* Style the checkmark/indicator */\r\n.container .checkmark::after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid #d4f1f4;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n/* Show the checkmark when checked */\r\n.container input:checked ~ .checkmark::after {\r\n  display: block;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  padding: 5rem 0;\r\n  background-color: #05445e;\r\n  color: gray;\r\n  font-family: 'Roboto Mono', sans-serif;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\nsvg[class='trash'] {\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\nsvg[class='trash']:hover path {\r\n  fill: rgb(238, 82, 82);\r\n}\r\n\r\nsvg[class='trash']:hover {\r\n  cursor: pointer;\r\n  animation: za3ze3 0.2s linear 5;\r\n}\r\n\r\n@keyframes za3ze3 {\r\n  0%,\r\n  100% {\r\n    transform: translate(0);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  33% {\r\n    transform: translate(5px);\r\n    transform: rotate(20deg);\r\n  }\r\n\r\n  66% {\r\n    transform: translate(-5px);\r\n    transform: rotate(-20deg);\r\n  }\r\n}\r\n\r\n.to-do-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  align-items: center;\r\n  background-color: #05445e;\r\n  border-radius: 3px;\r\n  box-shadow: 7px 7px 18px 0 rgba(0, 0, 0, 0.1);\r\n  border: 5px solid #189ab4;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 2%;\r\n  border-bottom: 2px solid #189ab4;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  body {\r\n    display: flex;\r\n    align-items: start;\r\n    padding: 0.5rem;\r\n    padding-top: 2rem;\r\n    width: auto;\r\n  }\r\n\r\n  .to-do-container {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\nheader p {\r\n  font-size: 2rem;\r\n  color: #75e6da;\r\n  font-weight: 600;\r\n  letter-spacing: 5px;\r\n}\r\n\r\n.to-do-container .common {\r\n  width: 100%;\r\n  padding: 0 3%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 4rem;\r\n  border-bottom: 2px solid #189ab4;\r\n}\r\n\r\n.to-do-title {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  color: #d4f1f4;\r\n}\r\n\r\n.add-task {\r\n  background-color: #189ab4;\r\n}\r\n\r\n.to-do-container .add-task #add-task-input {\r\n  height: 3.9rem;\r\n  width: 90%;\r\n  border: 0;\r\n  outline: transparent;\r\n  font-size: 1.1rem;\r\n  color: #05445e;\r\n  background-color: #189ab4;\r\n}\r\n\r\n.to-do-container .add-task #add-task-input::placeholder {\r\n  font-style: italic;\r\n  color: #05445e;\r\n}\r\n\r\n.to-do-container .clear-all {\r\n  background-color: rgba(192, 192, 192, 0.151);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  color: #d4f1f4;\r\n  border: 0;\r\n  border-top: 1px solid #189ab4;\r\n  cursor: pointer;\r\n  height: 5rem;\r\n  width: 100%;\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.to-do-container .clear-all:hover {\r\n  background-color: #d4f1f4;\r\n  color: #05445e;\r\n}\r\n\r\n.to-do-container .list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.to-do-container .list-container li {\r\n  height: 4rem;\r\n  width: 100%;\r\n  padding: 0 3%;\r\n  display: flex;\r\n  align-items: center;\r\n  border-top: 1px solid #189ab4;\r\n}\r\n\r\n.to-do-container .list-container li .description-container {\r\n  display: flex;\r\n  gap: 4%;\r\n  align-items: center;\r\n  width: 100%;\r\n  color: #d4f1f4;\r\n}\r\n\r\n.change-background {\r\n  background-color: #0b4e46b4;\r\n  height: 4rem;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  border: 1px solid transparent;\r\n  outline: none;\r\n}\r\n\r\n.transp-background {\r\n  background-color: transparent;\r\n  border: 0;\r\n  outline: none;\r\n  font-size: 1.1rem;\r\n  color: #d4f1f4;\r\n  font-family: 'Roboto Mono', sans-serif;\r\n}\r\n\r\n/* Customize the label (the container) */\r\n.container {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  padding-top: 12px;\r\n}\r\n\r\n/* Hide the browser's default checkbox */\r\n.container input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #d4f1f4;\r\n}\r\n\r\n.container input:checked ~ .checkmark {\r\n  background-color: #189ab4;\r\n}\r\n\r\n.checkmark::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n/* Style the checkmark/indicator */\r\n.container .checkmark::after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid #d4f1f4;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n/* Show the checkmark when checked */\r\n.container input:checked ~ .checkmark::after {\r\n  display: block;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_showTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showTasks.js */ "./src/modules/showTasks.js");
/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addTask.js */ "./src/modules/addTask.js");
/* harmony import */ var _modules_updateTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/updateTask.js */ "./src/modules/updateTask.js");
/* harmony import */ var _modules_removeTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/removeTask.js */ "./src/modules/removeTask.js");
/* harmony import */ var _modules_clear_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/clear.js */ "./src/modules/clear.js");
/* harmony import */ var _modules_comletedTask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/comletedTask.js */ "./src/modules/comletedTask.js");








let tasks = [];

// Add new task when press the enter key
const form = document.querySelector('.add-task');
const addTaskInput = document.querySelector('#add-task-input');
addTaskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && addTaskInput.value !== '') {
    (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])(addTaskInput.value, tasks);
    (0,_modules_showTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
    form.reset();
  }
});

// Add new task when click the button on the left
document.querySelector('.add-task-btn').addEventListener('click', () => {
  if (addTaskInput.value !== '') {
    (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])(addTaskInput.value, tasks);
    (0,_modules_showTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
    form.reset();
  }
});

// Add click event
document.addEventListener('click', (event) => {
  const allDesc = document.querySelectorAll('.description');

  // Update the task using new created input
  allDesc.forEach((task, index) => {
    if (event.target === task) {
      const li = (event.target.parentNode).parentNode;
      li.classList.add('change-background');
      const previousTask = tasks[index].description;
      const newInput = document.createElement('input');
      newInput.type = 'text';
      newInput.value = previousTask;
      newInput.classList.add('description', 'transp-background');
      task.innerHTML = '';
      task.appendChild(newInput);
      newInput.focus();

      newInput.addEventListener('blur', () => {
        task.removeChild(newInput);
        task.innerText = newInput.value;
        (0,_modules_updateTask_js__WEBPACK_IMPORTED_MODULE_3__["default"])(tasks, index, newInput.value);
        (0,_modules_showTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
      });
    }
  });

  // Remove task when click on trash icon
  const trashs = document.querySelectorAll('.trash');

  trashs.forEach((trashIcon, index) => {
    if (event.target === trashIcon) {
      (0,_modules_removeTask_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tasks, index);
      (0,_modules_showTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
    }
  });

  // Declare completed tasks
  const checks = document.querySelectorAll('.checks');
  checks.forEach((check, index) => {
    if (event.target === check) {
      (0,_modules_comletedTask_js__WEBPACK_IMPORTED_MODULE_6__["default"])(check, index, tasks);
    }
  });

  // Clear all checked tasks in one click
  const clearAll = document.querySelector('.clear-all');
  if (event.target === clearAll) {
    tasks = (0,_modules_clear_js__WEBPACK_IMPORTED_MODULE_5__["default"])(tasks);
    (0,_modules_showTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
  }
});

// Check if task is completed
const checks = document.querySelectorAll('.checks');
checks.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    (0,_modules_comletedTask_js__WEBPACK_IMPORTED_MODULE_6__["default"])(checkbox, index);
    (0,_modules_showTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
  });
});

// Get data from locale storage and show the final the updated tasks List
tasks = JSON.parse(localStorage.getItem('storedTasks')) || [];
(0,_modules_showTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);

// onload transition
window.onload = () => {
  document.querySelector('.todo-icon').classList.add('animate-icon');
  document.querySelector('.to-do-name').classList.add('animate-icon');
};

// show task's date

const d = new Date().toLocaleDateString();

document.querySelector('.date').textContent = `Tasks of ${d}`;

/***/ }),

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

/***/ }),

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

/***/ }),

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

/***/ }),

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

/***/ }),

/***/ "./src/modules/updateTask.js":
/*!***********************************!*\
  !*** ./src/modules/updateTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((tasks, index, newDescription) => {
  tasks[index].description = newDescription;
});
// edit task description

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFB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LGlFQUFTO0FBQ2IsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLGlFQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsMERBQTBELEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQzFHekI7QUFDbkM7QUFDQTtBQUNBLHNCQUFzQixtREFBTztBQUM3QjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUNSdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7OztBQ1RwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDVDFCO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDTnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxjQUFjO0FBQ3JEO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYyx3QkFBd0Isb0JBQW9CO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDckN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDVHRCLGlFQUFlO0FBQ2Y7QUFDQSxDQUFDLEVBQUM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtbGlzdC1zdHJ1Y3R1cmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QtbGlzdC1zdHJ1Y3R1cmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtbGlzdC1zdHJ1Y3R1cmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QtbGlzdC1zdHJ1Y3R1cmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtbGlzdC1zdHJ1Y3R1cmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vc3JjL21vZHVsZXMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vc3JjL21vZHVsZXMvY2xlYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL3NyYy9tb2R1bGVzL2NvbWxldGVkVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vc3JjL21vZHVsZXMvcmVtb3ZlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vc3JjL21vZHVsZXMvc2hvd1Rhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtbGlzdC1zdHJ1Y3R1cmUvLi9zcmMvbW9kdWxlcy90YXNrT2JqLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtbGlzdC1zdHJ1Y3R1cmUvLi9zcmMvbW9kdWxlcy91cGRhdGVUYXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBhZGRpbmc6IDVyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTQ0NWU7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnN2Z1tjbGFzcz0ndHJhc2gnXSB7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5zdmdbY2xhc3M9J3RyYXNoJ106aG92ZXIgcGF0aCB7XFxyXFxuICBmaWxsOiByZ2IoMjM4LCA4MiwgODIpO1xcclxcbn1cXHJcXG5cXHJcXG5zdmdbY2xhc3M9J3RyYXNoJ106aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYW5pbWF0aW9uOiB6YTN6ZTMgMC4ycyBsaW5lYXIgNTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB6YTN6ZTMge1xcclxcbiAgMCUsXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMzMlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNjYlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTQ0NWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3gtc2hhZG93OiA3cHggN3B4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMTg5YWI0O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTg5YWI0O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvLWRvLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgcCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogIzc1ZTZkYTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIC5jb21tb24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDMlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDRyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE4OWFiNDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogI2Q0ZjFmNDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODlhYjQ7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb250YWluZXIgLmFkZC10YXNrICNhZGQtdGFzay1pbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDMuOXJlbTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgY29sb3I6ICMwNTQ0NWU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5YWI0O1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIC5hZGQtdGFzayAjYWRkLXRhc2staW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjMDU0NDVlO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIC5jbGVhci1hbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjE1MSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICNkNGYxZjQ7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzE4OWFiNDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIC5jbGVhci1hbGw6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZjFmNDtcXHJcXG4gIGNvbG9yOiAjMDU0NDVlO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIC5saXN0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciAubGlzdC1jb250YWluZXIgbGkge1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDMlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzE4OWFiNDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciAubGlzdC1jb250YWluZXIgbGkgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA0JTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiAjZDRmMWY0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbmdlLWJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiNGU0NmI0O1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zcC1iYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgY29sb3I6ICNkNGYxZjQ7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ3VzdG9taXplIHRoZSBsYWJlbCAodGhlIGNvbnRhaW5lcikgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXHJcXG4uY29udGFpbmVyIGlucHV0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxyXFxuLmNoZWNrbWFyayB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRmMWY0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODlhYjQ7XFxyXFxufVxcclxcblxcclxcbi5jaGVja21hcms6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cXHJcXG4uY29udGFpbmVyIC5jaGVja21hcms6OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDlweDtcXHJcXG4gIHRvcDogNXB4O1xcclxcbiAgd2lkdGg6IDVweDtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIGJvcmRlcjogc29saWQgI2Q0ZjFmNDtcXHJcXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cXHJcXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOjphZnRlciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRTs7SUFFRSx1QkFBdUI7SUFDdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHdCQUF3QjtFQUMxQjs7RUFF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LFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rTW9ubzppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgcGFkZGluZzogNXJlbSAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NDQ1ZTtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc3ZnW2NsYXNzPSd0cmFzaCddIHtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbnN2Z1tjbGFzcz0ndHJhc2gnXTpob3ZlciBwYXRoIHtcXHJcXG4gIGZpbGw6IHJnYigyMzgsIDgyLCA4Mik7XFxyXFxufVxcclxcblxcclxcbnN2Z1tjbGFzcz0ndHJhc2gnXTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhbmltYXRpb246IHphM3plMyAwLjJzIGxpbmVhciA1O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHphM3plMyB7XFxyXFxuICAwJSxcXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAzMyUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA2NiUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NDQ1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJveC1zaGFkb3c6IDdweCA3cHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMxODlhYjQ7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDIlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxODlhYjQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG8tZG8tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiAjNzVlNmRhO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb250YWluZXIgLmNvbW1vbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMyU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTg5YWI0O1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjZDRmMWY0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OWFiNDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciAuYWRkLXRhc2sgI2FkZC10YXNrLWlucHV0IHtcXHJcXG4gIGhlaWdodDogMy45cmVtO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBjb2xvcjogIzA1NDQ1ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODlhYjQ7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb250YWluZXIgLmFkZC10YXNrICNhZGQtdGFzay1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6ICMwNTQ0NWU7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb250YWluZXIgLmNsZWFyLWFsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuMTUxKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogI2Q0ZjFmNDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMTg5YWI0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb250YWluZXIgLmNsZWFyLWFsbDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRmMWY0O1xcclxcbiAgY29sb3I6ICMwNTQ0NWU7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb250YWluZXIgLmxpc3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIC5saXN0LWNvbnRhaW5lciBsaSB7XFxyXFxuICBoZWlnaHQ6IDRyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMyU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMTg5YWI0O1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIC5saXN0LWNvbnRhaW5lciBsaSAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDQlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6ICNkNGYxZjQ7XFxyXFxufVxcclxcblxcclxcbi5jaGFuZ2UtYmFja2dyb3VuZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI0ZTQ2YjQ7XFxyXFxuICBoZWlnaHQ6IDRyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNwLWJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBjb2xvcjogI2Q0ZjFmNDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDdXN0b21pemUgdGhlIGxhYmVsICh0aGUgY29udGFpbmVyKSAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xcclxcbi5jb250YWluZXIgaW5wdXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cXHJcXG4uY2hlY2ttYXJrIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGYxZjQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OWFiNDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbWFyazo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xcclxcbi5jb250YWluZXIgLmNoZWNrbWFyazo6YWZ0ZXIge1xcclxcbiAgbGVmdDogOXB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICB3aWR0aDogNXB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgYm9yZGVyOiBzb2xpZCAjZDRmMWY0O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xcclxcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6OmFmdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgc2hvd1Rhc2tzIGZyb20gJy4vbW9kdWxlcy9zaG93VGFza3MuanMnO1xuaW1wb3J0IGFkZFRhc2sgZnJvbSAnLi9tb2R1bGVzL2FkZFRhc2suanMnO1xuaW1wb3J0IHVwZGF0ZVRhc2sgZnJvbSAnLi9tb2R1bGVzL3VwZGF0ZVRhc2suanMnO1xuaW1wb3J0IHJlbW92ZVRhc2sgZnJvbSAnLi9tb2R1bGVzL3JlbW92ZVRhc2suanMnO1xuaW1wb3J0IGNsZWFyIGZyb20gJy4vbW9kdWxlcy9jbGVhci5qcyc7XG5pbXBvcnQgaXNDb21wbGV0ZWQgZnJvbSAnLi9tb2R1bGVzL2NvbWxldGVkVGFzay5qcyc7XG5cbmxldCB0YXNrcyA9IFtdO1xuXG4vLyBBZGQgbmV3IHRhc2sgd2hlbiBwcmVzcyB0aGUgZW50ZXIga2V5XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyk7XG5jb25zdCBhZGRUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2staW5wdXQnKTtcbmFkZFRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGFkZFRhc2tJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICBhZGRUYXNrKGFkZFRhc2tJbnB1dC52YWx1ZSwgdGFza3MpO1xuICAgIHNob3dUYXNrcyh0YXNrcyk7XG4gICAgZm9ybS5yZXNldCgpO1xuICB9XG59KTtcblxuLy8gQWRkIG5ldyB0YXNrIHdoZW4gY2xpY2sgdGhlIGJ1dHRvbiBvbiB0aGUgbGVmdFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoYWRkVGFza0lucHV0LnZhbHVlICE9PSAnJykge1xuICAgIGFkZFRhc2soYWRkVGFza0lucHV0LnZhbHVlLCB0YXNrcyk7XG4gICAgc2hvd1Rhc2tzKHRhc2tzKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH1cbn0pO1xuXG4vLyBBZGQgY2xpY2sgZXZlbnRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGFsbERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3JpcHRpb24nKTtcblxuICAvLyBVcGRhdGUgdGhlIHRhc2sgdXNpbmcgbmV3IGNyZWF0ZWQgaW5wdXRcbiAgYWxsRGVzYy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHRhc2spIHtcbiAgICAgIGNvbnN0IGxpID0gKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKS5wYXJlbnROb2RlO1xuICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWJhY2tncm91bmQnKTtcbiAgICAgIGNvbnN0IHByZXZpb3VzVGFzayA9IHRhc2tzW2luZGV4XS5kZXNjcmlwdGlvbjtcbiAgICAgIGNvbnN0IG5ld0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIG5ld0lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICBuZXdJbnB1dC52YWx1ZSA9IHByZXZpb3VzVGFzaztcbiAgICAgIG5ld0lucHV0LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJywgJ3RyYW5zcC1iYWNrZ3JvdW5kJyk7XG4gICAgICB0YXNrLmlubmVySFRNTCA9ICcnO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChuZXdJbnB1dCk7XG4gICAgICBuZXdJbnB1dC5mb2N1cygpO1xuXG4gICAgICBuZXdJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICB0YXNrLnJlbW92ZUNoaWxkKG5ld0lucHV0KTtcbiAgICAgICAgdGFzay5pbm5lclRleHQgPSBuZXdJbnB1dC52YWx1ZTtcbiAgICAgICAgdXBkYXRlVGFzayh0YXNrcywgaW5kZXgsIG5ld0lucHV0LnZhbHVlKTtcbiAgICAgICAgc2hvd1Rhc2tzKHRhc2tzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gUmVtb3ZlIHRhc2sgd2hlbiBjbGljayBvbiB0cmFzaCBpY29uXG4gIGNvbnN0IHRyYXNocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFzaCcpO1xuXG4gIHRyYXNocy5mb3JFYWNoKCh0cmFzaEljb24sIGluZGV4KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdHJhc2hJY29uKSB7XG4gICAgICByZW1vdmVUYXNrKHRhc2tzLCBpbmRleCk7XG4gICAgICBzaG93VGFza3ModGFza3MpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gRGVjbGFyZSBjb21wbGV0ZWQgdGFza3NcbiAgY29uc3QgY2hlY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrcycpO1xuICBjaGVja3MuZm9yRWFjaCgoY2hlY2ssIGluZGV4KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gY2hlY2spIHtcbiAgICAgIGlzQ29tcGxldGVkKGNoZWNrLCBpbmRleCwgdGFza3MpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQ2xlYXIgYWxsIGNoZWNrZWQgdGFza3MgaW4gb25lIGNsaWNrXG4gIGNvbnN0IGNsZWFyQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWFsbCcpO1xuICBpZiAoZXZlbnQudGFyZ2V0ID09PSBjbGVhckFsbCkge1xuICAgIHRhc2tzID0gY2xlYXIodGFza3MpO1xuICAgIHNob3dUYXNrcyh0YXNrcyk7XG4gIH1cbn0pO1xuXG4vLyBDaGVjayBpZiB0YXNrIGlzIGNvbXBsZXRlZFxuY29uc3QgY2hlY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrcycpO1xuY2hlY2tzLmZvckVhY2goKGNoZWNrYm94LCBpbmRleCkgPT4ge1xuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaXNDb21wbGV0ZWQoY2hlY2tib3gsIGluZGV4KTtcbiAgICBzaG93VGFza3ModGFza3MpO1xuICB9KTtcbn0pO1xuXG4vLyBHZXQgZGF0YSBmcm9tIGxvY2FsZSBzdG9yYWdlIGFuZCBzaG93IHRoZSBmaW5hbCB0aGUgdXBkYXRlZCB0YXNrcyBMaXN0XG50YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRhc2tzJykpIHx8IFtdO1xuc2hvd1Rhc2tzKHRhc2tzKTtcblxuLy8gb25sb2FkIHRyYW5zaXRpb25cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWljb24nKS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWljb24nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLW5hbWUnKS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWljb24nKTtcbn07XG5cbi8vIHNob3cgdGFzaydzIGRhdGVcblxuY29uc3QgZCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJykudGV4dENvbnRlbnQgPSBgVGFza3Mgb2YgJHtkfWA7IiwiaW1wb3J0IFRhc2tPYmogZnJvbSAnLi90YXNrT2JqLmpzJztcbi8vIGNvbGxlY3Qgb2JqZWN0c1xuY29uc3QgYWRkVGFzayA9IChkZXNjcmlwdGlvblRvQmVBZGRlZCwgYXJyKSA9PiB7XG4gIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFza09iaihkZXNjcmlwdGlvblRvQmVBZGRlZCk7XG4gIGFyci5wdXNoKG5ld1Rhc2spO1xuICBuZXdUYXNrLmluZGV4ID0gYXJyLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFRhc2s7IiwiY29uc3QgY2xlYXIgPSAodGFza3MpID0+IHtcbiAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkID09PSBmYWxzZSk7XG4gIGxldCBpID0gMDtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suaW5kZXggPSBpICsgMTtcbiAgICBpICs9IDE7XG4gIH0pO1xuICByZXR1cm4gdGFza3M7XG59O1xuZXhwb3J0IGRlZmF1bHQgY2xlYXI7IiwiY29uc3QgaXNDb21wbGV0ZWQgPSAoY2hlY2ssIGluZGV4LCB0YXNrcykgPT4ge1xuICBpZiAoY2hlY2suY2hlY2tlZCkge1xuICAgIHRhc2tzW2luZGV4XS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIH0gZWxzZSB7XG4gICAgdGFza3NbaW5kZXhdLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBpc0NvbXBsZXRlZDsiLCJjb25zdCByZW1vdmVUYXNrID0gKGFyciwgaW5kZXgpID0+IHtcbiAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGFycltpXS5pbmRleCA9IGkgKyAxO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlVGFzazsiLCJjb25zdCBzaG93VGFza3MgPSAodG9CZVBvcHVsYXRlZCkgPT4ge1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XG4gIHdoaWxlIChsaXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBsaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGxpc3RDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbiAgLy8gYXNjZW5kaW5nIHNvcnQgb2YgdGFza3MgZWxlbWVudHNcbiAgdG9CZVBvcHVsYXRlZC5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG5cbiAgbGV0IGRlc2NyaXB0aW9uSWQgPSAwO1xuXG4gIHRvQmVQb3B1bGF0ZWQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGRlc2NyaXB0aW9uSWQgKz0gMTtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0YXNrLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCIke2VsZW1lbnQuaW5kZXh9XCIgY2xhc3M9XCJjaGVja3NcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8cCBpZD1cIiR7ZGVzY3JpcHRpb25JZH1cIiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtlbGVtZW50LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJ0cmFzaFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiI0Q0RjFGNFwiIGQ9XCJNMjE2IDQ4aC00MHYtOGEyNCAyNCAwIDAgMC0yNC0yNGgtNDhhMjQgMjQgMCAwIDAtMjQgMjR2OEg0MGE4IDggMCAwIDAgMCAxNmg4djE0NGExNiAxNiAwIDAgMCAxNiAxNmgxMjhhMTYgMTYgMCAwIDAgMTYtMTZWNjRoOGE4IDggMCAwIDAgMC0xNlpNOTYgNDBhOCA4IDAgMCAxIDgtOGg0OGE4IDggMCAwIDEgOCA4djhIOTZabTk2IDE2OEg2NFY2NGgxMjhabS04MC0xMDR2NjRhOCA4IDAgMCAxLTE2IDB2LTY0YTggOCAwIDAgMSAxNiAwWm00OCAwdjY0YTggOCAwIDAgMS0xNiAwdi02NGE4IDggMCAwIDEgMTYgMFpcIi8+PC9zdmc+XG4gICAgICBgO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1jbGFzcycpO1xuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG5cbiAgICAvLyBBZGQgY2hlY2sgbWFyayB3aGVuIGl0IGlzIHRydWVcbiAgICBpZiAoZWxlbWVudC5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQuaW5kZXgpLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQuaW5kZXgpLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gc2F2ZSB0YXNrcyBhcnJheSBpbiBsb2NhbGUgc3RvcmFnZVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0b0JlUG9wdWxhdGVkKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc2hvd1Rhc2tzOyIsIi8vIE9iamVjdCBjbGFzc1xuY2xhc3MgdGFza09iaiB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFza09iajsiLCJleHBvcnQgZGVmYXVsdCAodGFza3MsIGluZGV4LCBuZXdEZXNjcmlwdGlvbikgPT4ge1xuICB0YXNrc1tpbmRleF0uZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbn07XG4vLyBlZGl0IHRhc2sgZGVzY3JpcHRpb24iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=