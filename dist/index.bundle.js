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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  padding: 5rem 0;\r\n  background-color: #05445e;\r\n  color: gray;\r\n  font-family: 'Roboto Mono', sans-serif;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\nsvg[class='trash'] {\r\n  transition: .3s ease-in-out;\r\n}\r\n\r\nsvg[class='trash']:hover path {\r\n  fill: rgb(238, 82, 82)\r\n}\r\n\r\nsvg[class='trash']:hover {\r\n  cursor: pointer;\r\n  animation: za3ze3 .2s linear 5;\r\n}\r\n\r\n@keyframes za3ze3 {\r\n  0%,100% {\r\n    transform: translate(0);\r\n    transform: rotate(0deg);\r\n  }\r\n  33% {\r\n    transform: translate(5px);\r\n    transform: rotate(20deg);\r\n  }\r\n  66% {\r\n    transform: translate(-5px);\r\n    transform: rotate(-20deg);\r\n  }\r\n}\r\n\r\n.to-do-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  align-items: center;\r\n  background-color: #05445e;\r\n  border-radius: 3px;\r\n  box-shadow: 7px 7px 18px 0 rgba(0, 0, 0, 0.1);\r\n  border: 5px solid #189ab4;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 2%;\r\n  border-bottom: 2px solid #189ab4;\r\n  padding-bottom: 30px;\r\n}\r\n\r\nheader p {\r\n  transition: 0.8s ease;\r\n}\r\n\r\n.todo-icon {\r\n  transition: 0.8s ease;\r\n}\r\n\r\n.animate-icon {\r\n  transform: translateY(20px);\r\n}\r\n\r\n.to-do-container .common {\r\n  width: 100%;\r\n  padding: 0 3%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 4rem;\r\n  border-bottom: 2px solid #189ab4;\r\n}\r\n\r\n.to-do-title {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  color: #d4f1f4;\r\n}\r\n\r\n.add-task {\r\n  background-color: #189ab4;\r\n}\r\n\r\n.to-do-container .add-task #add-task-input {\r\n  height: 3.9rem;\r\n  width: 90%;\r\n  border: 0;\r\n  outline: transparent;\r\n  font-size: 1.1rem;\r\n  color: #05445e;\r\n  background-color: #189ab4;\r\n}\r\n\r\n.to-do-container .add-task #add-task-input::placeholder {\r\n  font-style: italic;\r\n  color: #05445e;\r\n}\r\n\r\n.to-do-container .clear-all {\r\n  background-color: rgba(192, 192, 192, 0.151);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  color: #d4f1f4;\r\n  border: 0;\r\n  border-top: 1px solid #189ab4;\r\n  cursor: pointer;\r\n  height: 5rem;\r\n  width: 100%;\r\n  transition: .3s ease;\r\n}\r\n\r\n.to-do-container .clear-all:hover {\r\n  background-color: #d4f1f4;\r\n  color: #05445e;\r\n}\r\n\r\n.to-do-container .list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.to-do-container .list-container li {\r\n  height: 4rem;\r\n  width: 100%;\r\n  padding: 0 3%;\r\n  display: flex;\r\n  align-items: center;\r\n  border-top: 1px solid #189ab4;\r\n}\r\n\r\n.to-do-container .list-container li .description-container {\r\n  display: flex;\r\n  gap: 4%;\r\n  align-items: center;\r\n  width: 100%;\r\n  color: #d4f1f4;\r\n}\r\n\r\n.change-background {\r\n  background-color: #0b4e46b4;\r\n  height: 4rem;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  border: 1px solid transparent;\r\n  outline: none;\r\n}\r\n\r\n.transp-background {\r\n  background-color: transparent;\r\n  border: 0;\r\n  outline: none;\r\n  font-size: 1.1rem;\r\n  color: #d4f1f4;\r\n  font-family: 'Roboto Mono', sans-serif;\r\n}\r\n\r\n/* Customize the label (the container) */\r\n.container {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  padding-top: 12px;\r\n}\r\n\r\n/* Hide the browser's default checkbox */\r\n.container input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #d4f1f4;\r\n}\r\n\r\n.container input:checked ~ .checkmark {\r\n  background-color: #189ab4;\r\n}\r\n\r\n.checkmark::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n/* Style the checkmark/indicator */\r\n.container .checkmark::after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid #d4f1f4;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n/* Show the checkmark when checked */\r\n.container input:checked ~ .checkmark::after {\r\n  display: block;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  padding: 5rem 0;\r\n  background-color: #05445e;\r\n  color: gray;\r\n  font-family: 'Roboto Mono', sans-serif;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\nsvg[class='trash'] {\r\n  transition: .3s ease-in-out;\r\n}\r\n\r\nsvg[class='trash']:hover path {\r\n  fill: rgb(238, 82, 82)\r\n}\r\n\r\nsvg[class='trash']:hover {\r\n  cursor: pointer;\r\n  animation: za3ze3 .2s linear 5;\r\n}\r\n\r\n@keyframes za3ze3 {\r\n  0%,100% {\r\n    transform: translate(0);\r\n    transform: rotate(0deg);\r\n  }\r\n  33% {\r\n    transform: translate(5px);\r\n    transform: rotate(20deg);\r\n  }\r\n  66% {\r\n    transform: translate(-5px);\r\n    transform: rotate(-20deg);\r\n  }\r\n}\r\n\r\n.to-do-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  align-items: center;\r\n  background-color: #05445e;\r\n  border-radius: 3px;\r\n  box-shadow: 7px 7px 18px 0 rgba(0, 0, 0, 0.1);\r\n  border: 5px solid #189ab4;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 2%;\r\n  border-bottom: 2px solid #189ab4;\r\n  padding-bottom: 30px;\r\n}\r\n\r\nheader p {\r\n  transition: 0.8s ease;\r\n}\r\n\r\n.todo-icon {\r\n  transition: 0.8s ease;\r\n}\r\n\r\n.animate-icon {\r\n  transform: translateY(20px);\r\n}\r\n\r\n.to-do-container .common {\r\n  width: 100%;\r\n  padding: 0 3%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 4rem;\r\n  border-bottom: 2px solid #189ab4;\r\n}\r\n\r\n.to-do-title {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  color: #d4f1f4;\r\n}\r\n\r\n.add-task {\r\n  background-color: #189ab4;\r\n}\r\n\r\n.to-do-container .add-task #add-task-input {\r\n  height: 3.9rem;\r\n  width: 90%;\r\n  border: 0;\r\n  outline: transparent;\r\n  font-size: 1.1rem;\r\n  color: #05445e;\r\n  background-color: #189ab4;\r\n}\r\n\r\n.to-do-container .add-task #add-task-input::placeholder {\r\n  font-style: italic;\r\n  color: #05445e;\r\n}\r\n\r\n.to-do-container .clear-all {\r\n  background-color: rgba(192, 192, 192, 0.151);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  color: #d4f1f4;\r\n  border: 0;\r\n  border-top: 1px solid #189ab4;\r\n  cursor: pointer;\r\n  height: 5rem;\r\n  width: 100%;\r\n  transition: .3s ease;\r\n}\r\n\r\n.to-do-container .clear-all:hover {\r\n  background-color: #d4f1f4;\r\n  color: #05445e;\r\n}\r\n\r\n.to-do-container .list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.to-do-container .list-container li {\r\n  height: 4rem;\r\n  width: 100%;\r\n  padding: 0 3%;\r\n  display: flex;\r\n  align-items: center;\r\n  border-top: 1px solid #189ab4;\r\n}\r\n\r\n.to-do-container .list-container li .description-container {\r\n  display: flex;\r\n  gap: 4%;\r\n  align-items: center;\r\n  width: 100%;\r\n  color: #d4f1f4;\r\n}\r\n\r\n.change-background {\r\n  background-color: #0b4e46b4;\r\n  height: 4rem;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  border: 1px solid transparent;\r\n  outline: none;\r\n}\r\n\r\n.transp-background {\r\n  background-color: transparent;\r\n  border: 0;\r\n  outline: none;\r\n  font-size: 1.1rem;\r\n  color: #d4f1f4;\r\n  font-family: 'Roboto Mono', sans-serif;\r\n}\r\n\r\n/* Customize the label (the container) */\r\n.container {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  padding-top: 12px;\r\n}\r\n\r\n/* Hide the browser's default checkbox */\r\n.container input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #d4f1f4;\r\n}\r\n\r\n.container input:checked ~ .checkmark {\r\n  background-color: #189ab4;\r\n}\r\n\r\n.checkmark::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n/* Style the checkmark/indicator */\r\n.container .checkmark::after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid #d4f1f4;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n/* Show the checkmark when checked */\r\n.container input:checked ~ .checkmark::after {\r\n  display: block;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSw0R0FBNEcs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N0I7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDUnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7QUNUcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ1QxQjtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ056QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsY0FBYztBQUNyRDtBQUNBO0FBQ0EsbUJBQW1CLGNBQWMsd0JBQXdCLG9CQUFvQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7OztBQ3JDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7OztBQ1R0QixpRUFBZTtBQUNmO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtbGlzdC1zdHJ1Y3R1cmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtbGlzdC1zdHJ1Y3R1cmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtbGlzdC1zdHJ1Y3R1cmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL3NyYy9tb2R1bGVzL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL3NyYy9tb2R1bGVzL2NsZWFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtbGlzdC1zdHJ1Y3R1cmUvLi9zcmMvbW9kdWxlcy9jb21sZXRlZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL3NyYy9tb2R1bGVzL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1saXN0LXN0cnVjdHVyZS8uL3NyYy9tb2R1bGVzL3Nob3dUYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vc3JjL21vZHVsZXMvdGFza09iai5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWxpc3Qtc3RydWN0dXJlLy4vc3JjL21vZHVsZXMvdXBkYXRlVGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBwYWRkaW5nOiA1cmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU0NDVlO1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zdmdbY2xhc3M9J3RyYXNoJ10ge1xcclxcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5zdmdbY2xhc3M9J3RyYXNoJ106aG92ZXIgcGF0aCB7XFxyXFxuICBmaWxsOiByZ2IoMjM4LCA4MiwgODIpXFxyXFxufVxcclxcblxcclxcbnN2Z1tjbGFzcz0ndHJhc2gnXTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhbmltYXRpb246IHphM3plMyAuMnMgbGluZWFyIDU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgemEzemUzIHtcXHJcXG4gIDAlLDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuICAzMyUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XFxyXFxuICB9XFxyXFxuICA2NiUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NDQ1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJveC1zaGFkb3c6IDdweCA3cHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMxODlhYjQ7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDIlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxODlhYjQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHAge1xcclxcbiAgdHJhbnNpdGlvbjogMC44cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pY29uIHtcXHJcXG4gIHRyYW5zaXRpb246IDAuOHMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFuaW1hdGUtaWNvbiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb250YWluZXIgLmNvbW1vbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMyU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTg5YWI0O1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjZDRmMWY0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OWFiNDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciAuYWRkLXRhc2sgI2FkZC10YXNrLWlucHV0IHtcXHJcXG4gIGhlaWdodDogMy45cmVtO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBjb2xvcjogIzA1NDQ1ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODlhYjQ7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb250YWluZXIgLmFkZC10YXNrICNhZGQtdGFzay1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6ICMwNTQ0NWU7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb250YWluZXIgLmNsZWFyLWFsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuMTUxKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogI2Q0ZjFmNDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMTg5YWI0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciAuY2xlYXItYWxsOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGYxZjQ7XFxyXFxuICBjb2xvcjogIzA1NDQ1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciAubGlzdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb250YWluZXIgLmxpc3QtY29udGFpbmVyIGxpIHtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAzJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxODlhYjQ7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb250YWluZXIgLmxpc3QtY29udGFpbmVyIGxpIC5kZXNjcmlwdGlvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNCU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogI2Q0ZjFmNDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS1iYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjRlNDZiNDtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50cmFuc3AtYmFja2dyb3VuZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGNvbG9yOiAjZDRmMWY0O1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qIEN1c3RvbWl6ZSB0aGUgbGFiZWwgKHRoZSBjb250YWluZXIpICovXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgcGFkZGluZy10b3A6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxyXFxuLmNvbnRhaW5lciBpbnB1dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xcclxcbi5jaGVja21hcmsge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZjFmNDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5YWI0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2ttYXJrOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXFxyXFxuLmNvbnRhaW5lciAuY2hlY2ttYXJrOjphZnRlciB7XFxyXFxuICBsZWZ0OiA5cHg7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIHdpZHRoOiA1cHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBib3JkZXI6IHNvbGlkICNkNGYxZjQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxyXFxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazo6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNkNBQTZDO0VBQzdDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsT0FBTztFQUNQLGdDQUFnQztFQUNoQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0NBQXNDO0FBQ3hDOztBQUVBLHdDQUF3QztBQUN4QztFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUEsd0NBQXdDO0FBQ3hDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsd0JBQXdCO0FBQzFCOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBhZGRpbmc6IDVyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTQ0NWU7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnN2Z1tjbGFzcz0ndHJhc2gnXSB7XFxyXFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbnN2Z1tjbGFzcz0ndHJhc2gnXTpob3ZlciBwYXRoIHtcXHJcXG4gIGZpbGw6IHJnYigyMzgsIDgyLCA4MilcXHJcXG59XFxyXFxuXFxyXFxuc3ZnW2NsYXNzPSd0cmFzaCddOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogemEzemUzIC4ycyBsaW5lYXIgNTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB6YTN6ZTMge1xcclxcbiAgMCUsMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDMzJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDY2JSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU0NDVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm94LXNoYWRvdzogN3B4IDdweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzE4OWFiNDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMiU7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE4OWFiNDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgcCB7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWljb24ge1xcclxcbiAgdHJhbnNpdGlvbjogMC44cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5pbWF0ZS1pY29uIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciAuY29tbW9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAzJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxODlhYjQ7XFxyXFxufVxcclxcblxcclxcbi50by1kby10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICNkNGYxZjQ7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5YWI0O1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIC5hZGQtdGFzayAjYWRkLXRhc2staW5wdXQge1xcclxcbiAgaGVpZ2h0OiAzLjlyZW07XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGNvbG9yOiAjMDU0NDVlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OWFiNDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciAuYWRkLXRhc2sgI2FkZC10YXNrLWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogIzA1NDQ1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciAuY2xlYXItYWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkyLCAxOTIsIDE5MiwgMC4xNTEpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjZDRmMWY0O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxODlhYjQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIC5jbGVhci1hbGw6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZjFmNDtcXHJcXG4gIGNvbG9yOiAjMDU0NDVlO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8tY29udGFpbmVyIC5saXN0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciAubGlzdC1jb250YWluZXIgbGkge1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDMlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzE4OWFiNDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWNvbnRhaW5lciAubGlzdC1jb250YWluZXIgbGkgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA0JTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiAjZDRmMWY0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbmdlLWJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiNGU0NmI0O1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zcC1iYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgY29sb3I6ICNkNGYxZjQ7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ3VzdG9taXplIHRoZSBsYWJlbCAodGhlIGNvbnRhaW5lcikgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXHJcXG4uY29udGFpbmVyIGlucHV0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxyXFxuLmNoZWNrbWFyayB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRmMWY0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODlhYjQ7XFxyXFxufVxcclxcblxcclxcbi5jaGVja21hcms6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cXHJcXG4uY29udGFpbmVyIC5jaGVja21hcms6OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDlweDtcXHJcXG4gIHRvcDogNXB4O1xcclxcbiAgd2lkdGg6IDVweDtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIGJvcmRlcjogc29saWQgI2Q0ZjFmNDtcXHJcXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cXHJcXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOjphZnRlciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNob3dUYXNrcyBmcm9tICcuL21vZHVsZXMvc2hvd1Rhc2tzLmpzJztcbmltcG9ydCBhZGRUYXNrIGZyb20gJy4vbW9kdWxlcy9hZGRUYXNrLmpzJztcbmltcG9ydCB1cGRhdGVUYXNrIGZyb20gJy4vbW9kdWxlcy91cGRhdGVUYXNrLmpzJztcbmltcG9ydCByZW1vdmVUYXNrIGZyb20gJy4vbW9kdWxlcy9yZW1vdmVUYXNrLmpzJztcbmltcG9ydCBjbGVhciBmcm9tICcuL21vZHVsZXMvY2xlYXIuanMnO1xuaW1wb3J0IGlzQ29tcGxldGVkIGZyb20gJy4vbW9kdWxlcy9jb21sZXRlZFRhc2suanMnO1xuXG5sZXQgdGFza3MgPSBbXTtcblxuLy8gQWRkIG5ldyB0YXNrIHdoZW4gcHJlc3MgdGhlIGVudGVyIGtleVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuY29uc3QgYWRkVGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWlucHV0Jyk7XG5hZGRUYXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiBhZGRUYXNrSW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgYWRkVGFzayhhZGRUYXNrSW5wdXQudmFsdWUsIHRhc2tzKTtcbiAgICBzaG93VGFza3ModGFza3MpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfVxufSk7XG5cbi8vIEFkZCBuZXcgdGFzayB3aGVuIGNsaWNrIHRoZSBidXR0b24gb24gdGhlIGxlZnRcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGFkZFRhc2tJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICBhZGRUYXNrKGFkZFRhc2tJbnB1dC52YWx1ZSwgdGFza3MpO1xuICAgIHNob3dUYXNrcyh0YXNrcyk7XG4gICAgZm9ybS5yZXNldCgpO1xuICB9XG59KTtcblxuLy8gQWRkIGNsaWNrIGV2ZW50XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBjb25zdCBhbGxEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlc2NyaXB0aW9uJyk7XG5cbiAgLy8gVXBkYXRlIHRoZSB0YXNrIHVzaW5nIG5ldyBjcmVhdGVkIGlucHV0XG4gIGFsbERlc2MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0YXNrKSB7XG4gICAgICBjb25zdCBsaSA9IChldmVudC50YXJnZXQucGFyZW50Tm9kZSkucGFyZW50Tm9kZTtcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1iYWNrZ3JvdW5kJyk7XG4gICAgICBjb25zdCBwcmV2aW91c1Rhc2sgPSB0YXNrc1tpbmRleF0uZGVzY3JpcHRpb247XG4gICAgICBjb25zdCBuZXdJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBuZXdJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgbmV3SW5wdXQudmFsdWUgPSBwcmV2aW91c1Rhc2s7XG4gICAgICBuZXdJbnB1dC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicsICd0cmFuc3AtYmFja2dyb3VuZCcpO1xuICAgICAgdGFzay5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQobmV3SW5wdXQpO1xuICAgICAgbmV3SW5wdXQuZm9jdXMoKTtcblxuICAgICAgbmV3SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgdGFzay5yZW1vdmVDaGlsZChuZXdJbnB1dCk7XG4gICAgICAgIHRhc2suaW5uZXJUZXh0ID0gbmV3SW5wdXQudmFsdWU7XG4gICAgICAgIHVwZGF0ZVRhc2sodGFza3MsIGluZGV4LCBuZXdJbnB1dC52YWx1ZSk7XG4gICAgICAgIHNob3dUYXNrcyh0YXNrcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFJlbW92ZSB0YXNrIHdoZW4gY2xpY2sgb24gdHJhc2ggaWNvblxuICBjb25zdCB0cmFzaHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhc2gnKTtcblxuICB0cmFzaHMuZm9yRWFjaCgodHJhc2hJY29uLCBpbmRleCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHRyYXNoSWNvbikge1xuICAgICAgcmVtb3ZlVGFzayh0YXNrcywgaW5kZXgpO1xuICAgICAgc2hvd1Rhc2tzKHRhc2tzKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIERlY2xhcmUgY29tcGxldGVkIHRhc2tzXG4gIGNvbnN0IGNoZWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja3MnKTtcbiAgY2hlY2tzLmZvckVhY2goKGNoZWNrLCBpbmRleCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IGNoZWNrKSB7XG4gICAgICBpc0NvbXBsZXRlZChjaGVjaywgaW5kZXgsIHRhc2tzKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIENsZWFyIGFsbCBjaGVja2VkIHRhc2tzIGluIG9uZSBjbGlja1xuICBjb25zdCBjbGVhckFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1hbGwnKTtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gY2xlYXJBbGwpIHtcbiAgICB0YXNrcyA9IGNsZWFyKHRhc2tzKTtcbiAgICBzaG93VGFza3ModGFza3MpO1xuICB9XG59KTtcblxuLy8gQ2hlY2sgaWYgdGFzayBpcyBjb21wbGV0ZWRcbmNvbnN0IGNoZWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja3MnKTtcbmNoZWNrcy5mb3JFYWNoKChjaGVja2JveCwgaW5kZXgpID0+IHtcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlzQ29tcGxldGVkKGNoZWNrYm94LCBpbmRleCk7XG4gICAgc2hvd1Rhc2tzKHRhc2tzKTtcbiAgfSk7XG59KTtcblxuLy8gR2V0IGRhdGEgZnJvbSBsb2NhbGUgc3RvcmFnZSBhbmQgc2hvdyB0aGUgZmluYWwgdGhlIHVwZGF0ZWQgdGFza3MgTGlzdFxudGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRUYXNrcycpKSB8fCBbXTtcbnNob3dUYXNrcyh0YXNrcyk7XG5cbi8vIG9ubG9hZCB0cmFuc2l0aW9uXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1pY29uJykuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1pY29uJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1uYW1lJykuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1pY29uJyk7XG59O1xuXG4vLyBzaG93IHRhc2sncyBkYXRlXG5cbmNvbnN0IGQgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpLnRleHRDb250ZW50ID0gYFRhc2tzIG9mICR7ZH1gOyIsImltcG9ydCBUYXNrT2JqIGZyb20gJy4vdGFza09iai5qcyc7XG4vLyBjb2xsZWN0IG9iamVjdHNcbmNvbnN0IGFkZFRhc2sgPSAoZGVzY3JpcHRpb25Ub0JlQWRkZWQsIGFycikgPT4ge1xuICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2tPYmooZGVzY3JpcHRpb25Ub0JlQWRkZWQpO1xuICBhcnIucHVzaChuZXdUYXNrKTtcbiAgbmV3VGFzay5pbmRleCA9IGFyci5sZW5ndGg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRUYXNrOyIsImNvbnN0IGNsZWFyID0gKHRhc2tzKSA9PiB7XG4gIHRhc2tzID0gdGFza3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCA9PT0gZmFsc2UpO1xuICBsZXQgaSA9IDA7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLmluZGV4ID0gaSArIDE7XG4gICAgaSArPSAxO1xuICB9KTtcbiAgcmV0dXJuIHRhc2tzO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNsZWFyOyIsImNvbnN0IGlzQ29tcGxldGVkID0gKGNoZWNrLCBpbmRleCwgdGFza3MpID0+IHtcbiAgaWYgKGNoZWNrLmNoZWNrZWQpIHtcbiAgICB0YXNrc1tpbmRleF0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICB9IGVsc2Uge1xuICAgIHRhc2tzW2luZGV4XS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgaXNDb21wbGV0ZWQ7IiwiY29uc3QgcmVtb3ZlVGFzayA9IChhcnIsIGluZGV4KSA9PiB7XG4gIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhcnJbaV0uaW5kZXggPSBpICsgMTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHJlbW92ZVRhc2s7IiwiY29uc3Qgc2hvd1Rhc2tzID0gKHRvQmVQb3B1bGF0ZWQpID0+IHtcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvbnRhaW5lcicpO1xuICB3aGlsZSAobGlzdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgbGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZChsaXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG4gIC8vIGFzY2VuZGluZyBzb3J0IG9mIHRhc2tzIGVsZW1lbnRzXG4gIHRvQmVQb3B1bGF0ZWQuc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xuXG4gIGxldCBkZXNjcmlwdGlvbklkID0gMDtcblxuICB0b0JlUG9wdWxhdGVkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBkZXNjcmlwdGlvbklkICs9IDE7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGFzay5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHtlbGVtZW50LmluZGV4fVwiIGNsYXNzPVwiY2hlY2tzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHAgaWQ9XCIke2Rlc2NyaXB0aW9uSWR9XCIgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7ZWxlbWVudC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3ZnIGNsYXNzPVwidHJhc2hcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cIiNENEYxRjRcIiBkPVwiTTIxNiA0OGgtNDB2LThhMjQgMjQgMCAwIDAtMjQtMjRoLTQ4YTI0IDI0IDAgMCAwLTI0IDI0djhINDBhOCA4IDAgMCAwIDAgMTZoOHYxNDRhMTYgMTYgMCAwIDAgMTYgMTZoMTI4YTE2IDE2IDAgMCAwIDE2LTE2VjY0aDhhOCA4IDAgMCAwIDAtMTZaTTk2IDQwYTggOCAwIDAgMSA4LThoNDhhOCA4IDAgMCAxIDggOHY4SDk2Wm05NiAxNjhINjRWNjRoMTI4Wm0tODAtMTA0djY0YTggOCAwIDAgMS0xNiAwdi02NGE4IDggMCAwIDEgMTYgMFptNDggMHY2NGE4IDggMCAwIDEtMTYgMHYtNjRhOCA4IDAgMCAxIDE2IDBaXCIvPjwvc3ZnPlxuICAgICAgYDtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2xhc3MnKTtcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuXG4gICAgLy8gQWRkIGNoZWNrIG1hcmsgd2hlbiBpdCBpcyB0cnVlXG4gICAgaWYgKGVsZW1lbnQuY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmluZGV4KS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmluZGV4KS5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHNhdmUgdGFza3MgYXJyYXkgaW4gbG9jYWxlIHN0b3JhZ2VcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodG9CZVBvcHVsYXRlZCkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNob3dUYXNrczsiLCIvLyBPYmplY3QgY2xhc3NcbmNsYXNzIHRhc2tPYmoge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tPYmo7IiwiZXhwb3J0IGRlZmF1bHQgKHRhc2tzLCBpbmRleCwgbmV3RGVzY3JpcHRpb24pID0+IHtcbiAgdGFza3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG59O1xuLy8gZWRpdCB0YXNrIGRlc2NyaXB0aW9uIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9