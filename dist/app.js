/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./engine.js":
/*!*******************!*\
  !*** ./engine.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "engine": () => (/* binding */ engine)
/* harmony export */ });
// Simple JavaScript Templating
// John Resig - https://johnresig.com/ - MIT Licensed
const cache = {};

const engine = (str, data) => {
  // Figure out if we're getting a template, or if we need to
  // load the template - and be sure to cache the result.
  const fn = !/\W/.test(str) ? cache[str] = cache[str] || engine(document.getElementById(str).innerHTML) :
    // Generate a reusable function that will serve as a template
    // generator (and which will be cached).
    new Function("obj",
      "var p=[],print=function(){p.push.apply(p,arguments);};" +             
      // Introduce the data as local variables using with(){}
      "with(obj){p.push('" +
      // Convert the template into pure JavaScript
      str
        .replace(/[\r\t\n]/g, " ")
        .split("<%").join("\t")
        .replace(/((^|%>)[^\t]*)'/g, "$1\r")
        .replace(/\t=(.*?)%>/g, "',$1,'")
        .split("\t").join("');")
        .split("%>").join("p.push('")
        .split("\r").join("\\'")
    + "');}return p.join('');");
   
  // Provide some basic currying to the user
  return data ? fn( data ) : fn;
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/global.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/global.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 62.5%;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  height: 100vh;\n}\n\n#app {\n  flex: 1;\n  padding: 0;\n  margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/global.scss"],"names":[],"mappings":"AAEA;;;EAGE,sBAAA;AAAF;;AAGA;EACE,qCAAA;EACA,gBAAA;AAAF;;AAGA;EACE,UAAA;EACA,SAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,aAAA;EACA,aAAA;AAAF;;AAGA;EACE,OAAA;EACA,UAAA;EACA,SAAA;AAAF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 20px;\r\n  height: 100vh;\r\n}\r\n\r\n#app {\r\n  flex: 1;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/home/home.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/home/home.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form__submit {\n  font-size: 1.2rem;\n  color: white;\n  text-transform: uppercase;\n  background-color: #4b5aff;\n  border: none;\n  border-radius: 4px;\n  width: 100%;\n  height: 40px;\n  cursor: pointer;\n}\n\n.form__header {\n  margin: 0;\n  font-size: 3.2rem;\n}\n\n.form__input {\n  padding: 10px;\n  border: 1px solid black;\n  width: 100%;\n  height: 50px;\n}\n\n.form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  max-width: 500px;\n  padding: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.form__header {\n  text-align: center;\n}\n.form__inputWrapper {\n  margin: 20px 0 0 0;\n}\n.form__label {\n  font-size: 1.5rem;\n}\n.form__input {\n  margin: 10px 0 0 0;\n}\n.form__submit {\n  margin: 20px 0 0 0;\n}\n.form__error {\n  color: red;\n  margin: 5px 0 0 0;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/components/button.scss","webpack://./src/utils/variables.scss","webpack://./src/views/home/home.scss","webpack://./src/components/header.scss","webpack://./src/components/input.scss"],"names":[],"mappings":"AAEA;EACE,iBAAA;EACA,YAAA;EACA,yBAAA;EACA,yBCNQ;EDOR,YAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AEDF;;ACVA;EACE,SAAA;EACA,iBAAA;ADaF;;AEfA;EACE,aAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;AFkBF;;AAlBA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AAqBF;AAnBE;EAEE,kBAAA;AAoBJ;AAjBE;EACE,kBAAA;AAmBJ;AAhBE;EACE,iBAAA;AAkBJ;AAfE;EACE,kBAAA;AAiBJ;AAbE;EACE,kBAAA;AAeJ;AAXE;EACE,UAAA;EACA,iBAAA;AAaJ;;AATA;EACE,aAAA;AAYF","sourcesContent":["@import \"../utils/variables.scss\";\r\n\r\n%button {\r\n  font-size: 1.2rem;\r\n  color: white;\r\n  text-transform: uppercase;\r\n  background-color: $primary;\r\n  border: none;\r\n  border-radius: 4px;\r\n  width: 100%;\r\n  height: 40px;\r\n  cursor: pointer;\r\n}\r\n","$primary: #4b5aff;\r\n","@import \"../../components/button.scss\";\r\n@import \"../../components/header.scss\";\r\n@import \"../../components/input.scss\";\r\n\r\n.form {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 500px;\r\n  padding: 20px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n\r\n  &__header {\r\n    @extend %header;\r\n    text-align: center;\r\n  }\r\n\r\n  &__inputWrapper {\r\n    margin: 20px 0 0 0;\r\n  }\r\n\r\n  &__label {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  &__input {\r\n    margin: 10px 0 0 0;\r\n    @extend %input;\r\n  }\r\n\r\n  &__submit {\r\n    margin: 20px 0 0 0;\r\n    @extend %button;\r\n  }\r\n\r\n  &__error {\r\n    color: red;\r\n    margin: 5px 0 0 0;\r\n  }\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n","%header {\r\n  margin: 0;\r\n  font-size: 3.2rem;\r\n}\r\n","%input {\r\n  padding: 10px;\r\n  border: 1px solid black;\r\n  width: 100%;\r\n  height: 50px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/sucess/sucess.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/sucess/sucess.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sucess__header {\n  margin: 0;\n  font-size: 3.2rem;\n}\n\n.sucess__paragraph {\n  font-size: 1.2rem;\n}\n\n.sucess__wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.sucess__message {\n  text-align: center;\n}\n.sucess__header {\n  border-bottom: 1px solid rgba(75, 90, 255, 0.5);\n}", "",{"version":3,"sources":["webpack://./src/components/header.scss","webpack://./src/views/sucess/sucess.scss","webpack://./src/components/paragraph.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,iBAAA;ACCF;;ACHA;EACE,iBAAA;ADMF;;AAFE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAKJ;AAFE;EACE,kBAAA;AAIJ;AADE;EAEE,+CAAA;AAEJ","sourcesContent":["%header {\r\n  margin: 0;\r\n  font-size: 3.2rem;\r\n}\r\n","@import \"../../components/header.scss\";\r\n@import \"../../components/paragraph.scss\";\r\n@import \"../../utils/variables.scss\";\r\n\r\n.sucess {\r\n  &__wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n  }\r\n\r\n  &__message {\r\n    text-align: center;\r\n  }\r\n\r\n  &__header {\r\n    @extend %header;\r\n    border-bottom: 1px solid rgba($primary, 0.5);\r\n  }\r\n\r\n  &__paragraph {\r\n    @extend %paragraph;\r\n  }\r\n}\r\n","%paragraph {\r\n  font-size: 1.2rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/views/404/404.html":
/*!********************************!*\
  !*** ./src/views/404/404.html ***!
  \********************************/
/***/ ((module) => {

// Module
var code = "<script type=\"text/html\" id=\"404\"> <h1>404 Not found</h1> </script> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/views/home/home.html":
/*!**********************************!*\
  !*** ./src/views/home/home.html ***!
  \**********************************/
/***/ ((module) => {

// Module
var code = "<script type=\"text/html\" id=\"home\"> <form class=\"form\">\r\n    <h1 class=\"form__header\">Welcome</h1>\r\n    <p class=\"<%=(showErrorMessageGeneral ? \"form__error\" : \"hidden\")%>\"> <%= errorMessageGeneral %> </p>\r\n    <div class=\"form__inputWrapper\">\r\n      <label class=\"form__label\" for=\"username\">Username: </label>\r\n      <input\r\n        class=\"form__input\"\r\n        type=\"text\"\r\n        name=\"username\"\r\n        id=\"username\"\r\n        value=\"<%= username %>\"\r\n        autocomplete=\"username\"\r\n      />\r\n      <p class=\"<%=(showErrorMessageUsername ? \"form__error\" : \"hidden\")%>\"> <%= errorMessageUsername %> </p>\r\n    </div>\r\n    <div class=\"form__inputWrapper\">\r\n      <label class=\"form__label\" for=\"password\">Password: </label>\r\n      <input\r\n        class=\"form__input\"\r\n        type=\"password\"\r\n        name=\"password\"\r\n        id=\"password\"\r\n        value=\"<%= password %>\"\r\n        autocomplete=\"current-password\"\r\n      />\r\n      <p class=\"<%=(showErrorMessagePassword ? \"form__error\" : \"hidden\")%>\"> <%= errorMessagePassword %> </p>\r\n    </div>\r\n    <button class=\"form__submit\" type=\"submit\">Log in</button>\r\n  </form> </script> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/views/sucess/sucess.html":
/*!**************************************!*\
  !*** ./src/views/sucess/sucess.html ***!
  \**************************************/
/***/ ((module) => {

// Module
var code = "<script type=\"text/html\" id=\"sucess\"> <div class=\"sucess__wrapper\">\r\n    <div class=\"sucess__message\">\r\n      <h1 class=\"sucess__header\">Hello <%= username %></h1>\r\n      <p class=\"sucess__paragraph\">You have beed authorized sucessfully</p>\r\n    </div>\r\n  </div> </script> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./global.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/global.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/views/home/home.scss":
/*!**********************************!*\
  !*** ./src/views/home/home.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/home/home.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/views/sucess/sucess.scss":
/*!**************************************!*\
  !*** ./src/views/sucess/sucess.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sucess_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./sucess.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/sucess/sucess.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sucess_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sucess_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./router.js":
/*!*******************!*\
  !*** ./router.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "route": () => (/* binding */ route)
/* harmony export */ });
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ "./engine.js");
// JavaScript router in 20 lines
// Joakim Carlstein - https://joakim.beng.se/

let el = null;
let events = [];
const routes = {};

const route = (path, templateId, controller) => {
  const listeners = [];
  controller.prototype.$on = (selector, evt, handler) =>
    events.push([selector, evt, handler]);
  controller.prototype.$refresh = () => listeners.forEach((fn) => fn());
  routes[path] = {
    templateId: templateId,
    controller: controller,
    onRefresh: listeners.push.bind(listeners),
  };
};

const forEachEvent = (fnName) => {
  for (let i = 0; i < events.length; i++) {
    const els = el.querySelectorAll(events[i][0]);
    for (let j = 0; j < els.length; j++) {
      els[j][fnName].apply(els[j], events[i].slice(1));
    }
  }
};

const router = () => {
  // Lazy load view element:
  el = el || document.getElementById("app");
  // Remove current event listeners:
  forEachEvent("removeEventListener");
  // Clear events, to prepare for next render:
  events = [];
  // Current route url (getting rid of '#' in hash as well):
  const url = location.hash.slice(1) || "/";
  // Get route by url or fallback if it does not exist:
  const route = routes[url] || routes["*"];
  if (route && route.controller) {
    const ctrl = new route.controller();
    // Listen on route refreshes:
    route.onRefresh(() => {
      forEachEvent("removeEventListener");
      // Render route template with John Resig's template engine:
      el.innerHTML = (0,_engine__WEBPACK_IMPORTED_MODULE_0__.engine)(route.templateId, ctrl);
      forEachEvent("addEventListener");
    });
    // Trigger the first refresh:
    ctrl.$refresh();
  }
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./router.js");
/* harmony import */ var _global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.scss */ "./src/global.scss");
/* harmony import */ var _views_home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home/home */ "./src/views/home/home.js");
/* harmony import */ var _views_home_home_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home/home.html */ "./src/views/home/home.html");
/* harmony import */ var _views_home_home_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_home_home_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_sucess_sucess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/sucess/sucess */ "./src/views/sucess/sucess.js");
/* harmony import */ var _views_sucess_sucess_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/sucess/sucess.html */ "./src/views/sucess/sucess.html");
/* harmony import */ var _views_sucess_sucess_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_views_sucess_sucess_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_404_404_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/404/404.html */ "./src/views/404/404.html");
/* harmony import */ var _views_404_404_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_views_404_404_html__WEBPACK_IMPORTED_MODULE_6__);








const head = document.getElementsByTagName("head")[0];
head.insertAdjacentHTML("beforeend", (_views_home_home_html__WEBPACK_IMPORTED_MODULE_3___default()));
head.insertAdjacentHTML("beforeend", (_views_sucess_sucess_html__WEBPACK_IMPORTED_MODULE_5___default()));
head.insertAdjacentHTML("beforeend", (_views_404_404_html__WEBPACK_IMPORTED_MODULE_6___default()));

(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)("/", "home", _views_home_home__WEBPACK_IMPORTED_MODULE_2__.default);

(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)("/sucess", "sucess", _views_sucess_sucess__WEBPACK_IMPORTED_MODULE_4__.default);

(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)("*", "404", function () {});


/***/ }),

/***/ "./src/views/home/home.js":
/*!********************************!*\
  !*** ./src/views/home/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.scss */ "./src/views/home/home.scss");


function home() {
  this.username = "";
  this.password = "";
  this.showErrorMessageUsername = false;
  this.errorMessageUsername = "";
  this.showErrorMessagePassword = false;
  this.errorMessagePassword = "";
  this.showErrorMessageGeneral = false;
  this.errorMessageGeneral = "";

  this.$on("#username", "input", (e) => {
    this.username = e.target.value;
  });

  this.$on("#password", "input", (e) => {
    this.password = e.target.value;
  });

  this.$on(".form", "submit", (e) => {
    e.preventDefault();
    if (this.username.length === 0) {
      this.showErrorMessageUsername = true;
      this.errorMessageUsername = "Enter username";
      this.$refresh();
    } else {
      this.showErrorMessageUsername = false;
      this.$refresh();
    }
    if (this.password.length === 0) {
      this.showErrorMessagePassword = true;
      this.errorMessagePassword = "Enter password";
      this.$refresh();
    } else {
      this.showErrorMessagePassword = false;
      this.$refresh();
    }
    if (!this.showErrorMessageUsername && !this.showErrorMessagePassword) {
      const response = login(this.username, this.password);
      response
        .then((data) => {
          if (data.error) {
            this.showErrorMessageGeneral = true;
            this.errorMessageGeneral = data.message;
            this.$refresh();
          } else {
            const userInfo = {
              username: this.username,
              token: data.token,
            };
            window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
            window.location = `${e.submitter.baseURI.replace("#", "")}#/sucess`;
          }
        })
        .catch((err) => {
          this.showErrorMessageGeneral = true;
          this.errorMessageGeneral = err;
          this.$refresh();
        });
    }
  });
}

const login = async (username, password) => {
  const request = await fetch(
    `${window.location.protocol}//${window.location.hostname}:${window.location.port}/api/login`,
    {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }
  );
  const response = await request.json();
  return response;
};


/***/ }),

/***/ "./src/views/sucess/sucess.js":
/*!************************************!*\
  !*** ./src/views/sucess/sucess.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sucess)
/* harmony export */ });
/* harmony import */ var _sucess_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sucess.scss */ "./src/views/sucess/sucess.scss");


function sucess() {
  let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
  this.username = userInfo.username;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YWRhbmllLy4vZW5naW5lLmpzIiwid2VicGFjazovL3phZGFuaWUvLi9zcmMvZ2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vemFkYW5pZS8uL3NyYy92aWV3cy9ob21lL2hvbWUuc2NzcyIsIndlYnBhY2s6Ly96YWRhbmllLy4vc3JjL3ZpZXdzL3N1Y2Vzcy9zdWNlc3Muc2NzcyIsIndlYnBhY2s6Ly96YWRhbmllLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly96YWRhbmllLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vemFkYW5pZS8uL3NyYy92aWV3cy80MDQvNDA0Lmh0bWwiLCJ3ZWJwYWNrOi8vemFkYW5pZS8uL3NyYy92aWV3cy9ob21lL2hvbWUuaHRtbCIsIndlYnBhY2s6Ly96YWRhbmllLy4vc3JjL3ZpZXdzL3N1Y2Vzcy9zdWNlc3MuaHRtbCIsIndlYnBhY2s6Ly96YWRhbmllLy4vc3JjL2dsb2JhbC5zY3NzPzJjMjQiLCJ3ZWJwYWNrOi8vemFkYW5pZS8uL3NyYy92aWV3cy9ob21lL2hvbWUuc2Nzcz82OWQyIiwid2VicGFjazovL3phZGFuaWUvLi9zcmMvdmlld3Mvc3VjZXNzL3N1Y2Vzcy5zY3NzPzdjMzciLCJ3ZWJwYWNrOi8vemFkYW5pZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly96YWRhbmllLy4vcm91dGVyLmpzIiwid2VicGFjazovL3phZGFuaWUvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3phZGFuaWUvLi9zcmMvdmlld3MvaG9tZS9ob21lLmpzIiwid2VicGFjazovL3phZGFuaWUvLi9zcmMvdmlld3Mvc3VjZXNzL3N1Y2Vzcy5qcyIsIndlYnBhY2s6Ly96YWRhbmllL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3phZGFuaWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vemFkYW5pZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vemFkYW5pZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3phZGFuaWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly96YWRhbmllL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw0QkFBNEI7QUFDN0Q7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjs7QUFFN0I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHdIQUF3SDtBQUN4SDtBQUNBLG9FQUFvRSwyQkFBMkIsR0FBRyxVQUFVLDRDQUE0QyxxQkFBcUIsR0FBRyxVQUFVLGVBQWUsY0FBYyxHQUFHLGNBQWMsa0JBQWtCLDJCQUEyQixrQkFBa0Isa0JBQWtCLEdBQUcsVUFBVSxZQUFZLGVBQWUsY0FBYyxHQUFHLE9BQU8sb0ZBQW9GLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSwyR0FBMkcsc0NBQXNDLDZCQUE2QixLQUFLLGNBQWMsOENBQThDLHVCQUF1QixLQUFLLGNBQWMsaUJBQWlCLGdCQUFnQixLQUFLLGtCQUFrQixvQkFBb0IsNkJBQTZCLG9CQUFvQixvQkFBb0IsS0FBSyxjQUFjLGNBQWMsaUJBQWlCLGdCQUFnQixLQUFLLHVCQUF1QjtBQUM3bkM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSdkM7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHlEQUF5RCxzQkFBc0IsaUJBQWlCLDhCQUE4Qiw4QkFBOEIsaUJBQWlCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLG9CQUFvQixHQUFHLG1CQUFtQixjQUFjLHNCQUFzQixHQUFHLGtCQUFrQixrQkFBa0IsNEJBQTRCLGdCQUFnQixpQkFBaUIsR0FBRyxXQUFXLGdCQUFnQixrQkFBa0IsMkJBQTJCLHFCQUFxQixrQkFBa0IsdUJBQXVCLGFBQWEsY0FBYyxxQ0FBcUMsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsdUJBQXVCLHVCQUF1QixHQUFHLGdCQUFnQixzQkFBc0IsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsaUJBQWlCLHVCQUF1QixHQUFHLGdCQUFnQixlQUFlLHNCQUFzQixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsT0FBTyw0UEFBNFAsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSw2REFBNkQsaUJBQWlCLHdCQUF3QixtQkFBbUIsZ0NBQWdDLGlDQUFpQyxtQkFBbUIseUJBQXlCLGtCQUFrQixtQkFBbUIsc0JBQXNCLEtBQUsseUJBQXlCLGdEQUFnRCw2Q0FBNkMsNENBQTRDLGVBQWUsa0JBQWtCLG9CQUFvQiw2QkFBNkIsdUJBQXVCLG9CQUFvQix5QkFBeUIsZUFBZSxnQkFBZ0IsdUNBQXVDLHFCQUFxQix3QkFBd0IsMkJBQTJCLE9BQU8sMkJBQTJCLDJCQUEyQixPQUFPLG9CQUFvQiwwQkFBMEIsT0FBTyxvQkFBb0IsMkJBQTJCLHVCQUF1QixPQUFPLHFCQUFxQiwyQkFBMkIsd0JBQXdCLE9BQU8sb0JBQW9CLG1CQUFtQiwwQkFBMEIsT0FBTyxLQUFLLGlCQUFpQixvQkFBb0IsS0FBSyxnQkFBZ0IsZ0JBQWdCLHdCQUF3QixLQUFLLGVBQWUsb0JBQW9CLDhCQUE4QixrQkFBa0IsbUJBQW1CLEtBQUssdUJBQXVCO0FBQ241RjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsMkRBQTJELGNBQWMsc0JBQXNCLEdBQUcsd0JBQXdCLHNCQUFzQixHQUFHLHNCQUFzQixrQkFBa0IsNEJBQTRCLHdCQUF3QixpQkFBaUIsR0FBRyxvQkFBb0IsdUJBQXVCLEdBQUcsbUJBQW1CLG9EQUFvRCxHQUFHLE9BQU8sb0xBQW9MLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxrQ0FBa0MsZ0JBQWdCLHdCQUF3QixLQUFLLGdEQUFnRCxnREFBZ0QsMkNBQTJDLGlCQUFpQixrQkFBa0Isc0JBQXNCLGdDQUFnQyw0QkFBNEIscUJBQXFCLE9BQU8sc0JBQXNCLDJCQUEyQixPQUFPLHFCQUFxQix3QkFBd0IscURBQXFELE9BQU8sd0JBQXdCLDJCQUEyQixPQUFPLEtBQUssbUJBQW1CLHdCQUF3QixLQUFLLHVCQUF1QjtBQUNsMUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsZ0ZBQWdGLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUV2ZSwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0Esc0I7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLHNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeUY7QUFDekYsWUFBaUk7O0FBRWpJOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDBIQUFPOzs7O0FBSXhCLGlFQUFlLGlJQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjREO0FBQy9GLFlBQTJJOztBQUUzSTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyx3SEFBTzs7OztBQUl4QixpRUFBZSwrSEFBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1o0RDtBQUMvRixZQUE2STs7QUFFN0k7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsMEhBQU87Ozs7QUFJeEIsaUVBQWUsaUlBQWMsTUFBTSxFOzs7Ozs7Ozs7OztBQ1p0Qjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UUE7QUFDQTtBQUNrQztBQUNsQztBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQU07QUFDM0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RGtDO0FBQ1g7QUFDYztBQUNhO0FBQ1A7QUFDYTtBQUNGOztBQUV0RDtBQUNBLHFDQUFxQyw4REFBWTtBQUNqRCxxQ0FBcUMsa0VBQWM7QUFDbkQscUNBQXFDLDREQUFrQjs7QUFFdkQsOENBQUssY0FBYyxxREFBSTs7QUFFdkIsOENBQUssc0JBQXNCLHlEQUFNOztBQUVqQyw4Q0FBSywyQkFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJYOztBQUVOO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFDQUFxQztBQUN0RTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx5QkFBeUIsSUFBSSx5QkFBeUIsR0FBRyxxQkFBcUI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdFdUI7O0FBRVI7QUFDZjtBQUNBO0FBQ0E7Ozs7Ozs7VUNMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaW1wbGUgSmF2YVNjcmlwdCBUZW1wbGF0aW5nXG4vLyBKb2huIFJlc2lnIC0gaHR0cHM6Ly9qb2hucmVzaWcuY29tLyAtIE1JVCBMaWNlbnNlZFxuY29uc3QgY2FjaGUgPSB7fTtcblxuZXhwb3J0IGNvbnN0IGVuZ2luZSA9IChzdHIsIGRhdGEpID0+IHtcbiAgLy8gRmlndXJlIG91dCBpZiB3ZSdyZSBnZXR0aW5nIGEgdGVtcGxhdGUsIG9yIGlmIHdlIG5lZWQgdG9cbiAgLy8gbG9hZCB0aGUgdGVtcGxhdGUgLSBhbmQgYmUgc3VyZSB0byBjYWNoZSB0aGUgcmVzdWx0LlxuICBjb25zdCBmbiA9ICEvXFxXLy50ZXN0KHN0cikgPyBjYWNoZVtzdHJdID0gY2FjaGVbc3RyXSB8fCBlbmdpbmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3RyKS5pbm5lckhUTUwpIDpcbiAgICAvLyBHZW5lcmF0ZSBhIHJldXNhYmxlIGZ1bmN0aW9uIHRoYXQgd2lsbCBzZXJ2ZSBhcyBhIHRlbXBsYXRlXG4gICAgLy8gZ2VuZXJhdG9yIChhbmQgd2hpY2ggd2lsbCBiZSBjYWNoZWQpLlxuICAgIG5ldyBGdW5jdGlvbihcIm9ialwiLFxuICAgICAgXCJ2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTtcIiArICAgICAgICAgICAgIFxuICAgICAgLy8gSW50cm9kdWNlIHRoZSBkYXRhIGFzIGxvY2FsIHZhcmlhYmxlcyB1c2luZyB3aXRoKCl7fVxuICAgICAgXCJ3aXRoKG9iail7cC5wdXNoKCdcIiArXG4gICAgICAvLyBDb252ZXJ0IHRoZSB0ZW1wbGF0ZSBpbnRvIHB1cmUgSmF2YVNjcmlwdFxuICAgICAgc3RyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxyXFx0XFxuXS9nLCBcIiBcIilcbiAgICAgICAgLnNwbGl0KFwiPCVcIikuam9pbihcIlxcdFwiKVxuICAgICAgICAucmVwbGFjZSgvKChefCU+KVteXFx0XSopJy9nLCBcIiQxXFxyXCIpXG4gICAgICAgIC5yZXBsYWNlKC9cXHQ9KC4qPyklPi9nLCBcIicsJDEsJ1wiKVxuICAgICAgICAuc3BsaXQoXCJcXHRcIikuam9pbihcIicpO1wiKVxuICAgICAgICAuc3BsaXQoXCIlPlwiKS5qb2luKFwicC5wdXNoKCdcIilcbiAgICAgICAgLnNwbGl0KFwiXFxyXCIpLmpvaW4oXCJcXFxcJ1wiKVxuICAgICsgXCInKTt9cmV0dXJuIHAuam9pbignJyk7XCIpO1xuICAgXG4gIC8vIFByb3ZpZGUgc29tZSBiYXNpYyBjdXJyeWluZyB0byB0aGUgdXNlclxuICByZXR1cm4gZGF0YSA/IGZuKCBkYXRhICkgOiBmbjtcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jYXBwIHtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ2xvYmFsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jYXBwIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybV9fc3VibWl0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjVhZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm1fX2hlYWRlciB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDMuMnJlbTtcXG59XFxuXFxuLmZvcm1fX2lucHV0IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4uZm9ybV9faGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZvcm1fX2lucHV0V3JhcHBlciB7XFxuICBtYXJnaW46IDIwcHggMCAwIDA7XFxufVxcbi5mb3JtX19sYWJlbCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmZvcm1fX2lucHV0IHtcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXG59XFxuLmZvcm1fX3N1Ym1pdCB7XFxuICBtYXJnaW46IDIwcHggMCAwIDA7XFxufVxcbi5mb3JtX19lcnJvciB7XFxuICBjb2xvcjogcmVkO1xcbiAgbWFyZ2luOiA1cHggMCAwIDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91dGlscy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3ZpZXdzL2hvbWUvaG9tZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJDTlE7RURPUixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUVERjs7QUNWQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBRGFGOztBRWZBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUZrQkY7O0FBbEJBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQXFCRjtBQW5CRTtFQUVFLGtCQUFBO0FBb0JKO0FBakJFO0VBQ0Usa0JBQUE7QUFtQko7QUFoQkU7RUFDRSxpQkFBQTtBQWtCSjtBQWZFO0VBQ0Usa0JBQUE7QUFpQko7QUFiRTtFQUNFLGtCQUFBO0FBZUo7QUFYRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQWFKOztBQVRBO0VBQ0UsYUFBQTtBQVlGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uL3V0aWxzL3ZhcmlhYmxlcy5zY3NzXFxcIjtcXHJcXG5cXHJcXG4lYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiLFwiJHByaW1hcnk6ICM0YjVhZmY7XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi5zY3NzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlci5zY3NzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi8uLi9jb21wb25lbnRzL2lucHV0LnNjc3NcXFwiO1xcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFxyXFxuICAmX19oZWFkZXIge1xcclxcbiAgICBAZXh0ZW5kICVoZWFkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2lucHV0V3JhcHBlciB7XFxyXFxuICAgIG1hcmdpbjogMjBweCAwIDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbnB1dCB7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG4gICAgQGV4dGVuZCAlaW5wdXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19zdWJtaXQge1xcclxcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XFxyXFxuICAgIEBleHRlbmQgJWJ1dHRvbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2Vycm9yIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCIlaGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xcclxcbn1cXHJcXG5cIixcIiVpbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN1Y2Vzc19faGVhZGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xcbn1cXG5cXG4uc3VjZXNzX19wYXJhZ3JhcGgge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5zdWNlc3NfX3dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnN1Y2Vzc19fbWVzc2FnZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zdWNlc3NfX2hlYWRlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg3NSwgOTAsIDI1NSwgMC41KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9zdWNlc3Mvc3VjZXNzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3BhcmFncmFwaC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FDSEE7RUFDRSxpQkFBQTtBRE1GOztBQUZFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBS0o7QUFGRTtFQUNFLGtCQUFBO0FBSUo7QUFERTtFQUVFLCtDQUFBO0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJWhlYWRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlci5zY3NzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi8uLi9jb21wb25lbnRzL3BhcmFncmFwaC5zY3NzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi8uLi91dGlscy92YXJpYWJsZXMuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuLnN1Y2VzcyB7XFxyXFxuICAmX193cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX21lc3NhZ2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19oZWFkZXIge1xcclxcbiAgICBAZXh0ZW5kICVoZWFkZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRwcmltYXJ5LCAwLjUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fcGFyYWdyYXBoIHtcXHJcXG4gICAgQGV4dGVuZCAlcGFyYWdyYXBoO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIiVwYXJhZ3JhcGgge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCI0MDRcXFwiPiA8aDE+NDA0IE5vdCBmb3VuZDwvaDE+IDwvc2NyaXB0PiBcIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcImhvbWVcXFwiPiA8Zm9ybSBjbGFzcz1cXFwiZm9ybVxcXCI+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwiZm9ybV9faGVhZGVyXFxcIj5XZWxjb21lPC9oMT5cXHJcXG4gICAgPHAgY2xhc3M9XFxcIjwlPShzaG93RXJyb3JNZXNzYWdlR2VuZXJhbCA/IFxcXCJmb3JtX19lcnJvclxcXCIgOiBcXFwiaGlkZGVuXFxcIiklPlxcXCI+IDwlPSBlcnJvck1lc3NhZ2VHZW5lcmFsICU+IDwvcD5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybV9faW5wdXRXcmFwcGVyXFxcIj5cXHJcXG4gICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm1fX2xhYmVsXFxcIiBmb3I9XFxcInVzZXJuYW1lXFxcIj5Vc2VybmFtZTogPC9sYWJlbD5cXHJcXG4gICAgICA8aW5wdXRcXHJcXG4gICAgICAgIGNsYXNzPVxcXCJmb3JtX19pbnB1dFxcXCJcXHJcXG4gICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxyXFxuICAgICAgICBuYW1lPVxcXCJ1c2VybmFtZVxcXCJcXHJcXG4gICAgICAgIGlkPVxcXCJ1c2VybmFtZVxcXCJcXHJcXG4gICAgICAgIHZhbHVlPVxcXCI8JT0gdXNlcm5hbWUgJT5cXFwiXFxyXFxuICAgICAgICBhdXRvY29tcGxldGU9XFxcInVzZXJuYW1lXFxcIlxcclxcbiAgICAgIC8+XFxyXFxuICAgICAgPHAgY2xhc3M9XFxcIjwlPShzaG93RXJyb3JNZXNzYWdlVXNlcm5hbWUgPyBcXFwiZm9ybV9fZXJyb3JcXFwiIDogXFxcImhpZGRlblxcXCIpJT5cXFwiPiA8JT0gZXJyb3JNZXNzYWdlVXNlcm5hbWUgJT4gPC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybV9faW5wdXRXcmFwcGVyXFxcIj5cXHJcXG4gICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm1fX2xhYmVsXFxcIiBmb3I9XFxcInBhc3N3b3JkXFxcIj5QYXNzd29yZDogPC9sYWJlbD5cXHJcXG4gICAgICA8aW5wdXRcXHJcXG4gICAgICAgIGNsYXNzPVxcXCJmb3JtX19pbnB1dFxcXCJcXHJcXG4gICAgICAgIHR5cGU9XFxcInBhc3N3b3JkXFxcIlxcclxcbiAgICAgICAgbmFtZT1cXFwicGFzc3dvcmRcXFwiXFxyXFxuICAgICAgICBpZD1cXFwicGFzc3dvcmRcXFwiXFxyXFxuICAgICAgICB2YWx1ZT1cXFwiPCU9IHBhc3N3b3JkICU+XFxcIlxcclxcbiAgICAgICAgYXV0b2NvbXBsZXRlPVxcXCJjdXJyZW50LXBhc3N3b3JkXFxcIlxcclxcbiAgICAgIC8+XFxyXFxuICAgICAgPHAgY2xhc3M9XFxcIjwlPShzaG93RXJyb3JNZXNzYWdlUGFzc3dvcmQgPyBcXFwiZm9ybV9fZXJyb3JcXFwiIDogXFxcImhpZGRlblxcXCIpJT5cXFwiPiA8JT0gZXJyb3JNZXNzYWdlUGFzc3dvcmQgJT4gPC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiZm9ybV9fc3VibWl0XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPkxvZyBpbjwvYnV0dG9uPlxcclxcbiAgPC9mb3JtPiA8L3NjcmlwdD4gXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJzdWNlc3NcXFwiPiA8ZGl2IGNsYXNzPVxcXCJzdWNlc3NfX3dyYXBwZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdWNlc3NfX21lc3NhZ2VcXFwiPlxcclxcbiAgICAgIDxoMSBjbGFzcz1cXFwic3VjZXNzX19oZWFkZXJcXFwiPkhlbGxvIDwlPSB1c2VybmFtZSAlPjwvaDE+XFxyXFxuICAgICAgPHAgY2xhc3M9XFxcInN1Y2Vzc19fcGFyYWdyYXBoXFxcIj5Zb3UgaGF2ZSBiZWVkIGF1dGhvcml6ZWQgc3VjZXNzZnVsbHk8L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+IDwvc2NyaXB0PiBcIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N1Y2Vzcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBKYXZhU2NyaXB0IHJvdXRlciBpbiAyMCBsaW5lc1xuLy8gSm9ha2ltIENhcmxzdGVpbiAtIGh0dHBzOi8vam9ha2ltLmJlbmcuc2UvXG5pbXBvcnQgeyBlbmdpbmUgfSBmcm9tIFwiLi9lbmdpbmVcIjtcbmxldCBlbCA9IG51bGw7XG5sZXQgZXZlbnRzID0gW107XG5jb25zdCByb3V0ZXMgPSB7fTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlID0gKHBhdGgsIHRlbXBsYXRlSWQsIGNvbnRyb2xsZXIpID0+IHtcbiAgY29uc3QgbGlzdGVuZXJzID0gW107XG4gIGNvbnRyb2xsZXIucHJvdG90eXBlLiRvbiA9IChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSA9PlxuICAgIGV2ZW50cy5wdXNoKFtzZWxlY3RvciwgZXZ0LCBoYW5kbGVyXSk7XG4gIGNvbnRyb2xsZXIucHJvdG90eXBlLiRyZWZyZXNoID0gKCkgPT4gbGlzdGVuZXJzLmZvckVhY2goKGZuKSA9PiBmbigpKTtcbiAgcm91dGVzW3BhdGhdID0ge1xuICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlSWQsXG4gICAgY29udHJvbGxlcjogY29udHJvbGxlcixcbiAgICBvblJlZnJlc2g6IGxpc3RlbmVycy5wdXNoLmJpbmQobGlzdGVuZXJzKSxcbiAgfTtcbn07XG5cbmNvbnN0IGZvckVhY2hFdmVudCA9IChmbk5hbWUpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlbHMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKGV2ZW50c1tpXVswXSk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGVsc1tqXVtmbk5hbWVdLmFwcGx5KGVsc1tqXSwgZXZlbnRzW2ldLnNsaWNlKDEpKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHJvdXRlciA9ICgpID0+IHtcbiAgLy8gTGF6eSBsb2FkIHZpZXcgZWxlbWVudDpcbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbiAgLy8gUmVtb3ZlIGN1cnJlbnQgZXZlbnQgbGlzdGVuZXJzOlxuICBmb3JFYWNoRXZlbnQoXCJyZW1vdmVFdmVudExpc3RlbmVyXCIpO1xuICAvLyBDbGVhciBldmVudHMsIHRvIHByZXBhcmUgZm9yIG5leHQgcmVuZGVyOlxuICBldmVudHMgPSBbXTtcbiAgLy8gQ3VycmVudCByb3V0ZSB1cmwgKGdldHRpbmcgcmlkIG9mICcjJyBpbiBoYXNoIGFzIHdlbGwpOlxuICBjb25zdCB1cmwgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpIHx8IFwiL1wiO1xuICAvLyBHZXQgcm91dGUgYnkgdXJsIG9yIGZhbGxiYWNrIGlmIGl0IGRvZXMgbm90IGV4aXN0OlxuICBjb25zdCByb3V0ZSA9IHJvdXRlc1t1cmxdIHx8IHJvdXRlc1tcIipcIl07XG4gIGlmIChyb3V0ZSAmJiByb3V0ZS5jb250cm9sbGVyKSB7XG4gICAgY29uc3QgY3RybCA9IG5ldyByb3V0ZS5jb250cm9sbGVyKCk7XG4gICAgLy8gTGlzdGVuIG9uIHJvdXRlIHJlZnJlc2hlczpcbiAgICByb3V0ZS5vblJlZnJlc2goKCkgPT4ge1xuICAgICAgZm9yRWFjaEV2ZW50KFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiKTtcbiAgICAgIC8vIFJlbmRlciByb3V0ZSB0ZW1wbGF0ZSB3aXRoIEpvaG4gUmVzaWcncyB0ZW1wbGF0ZSBlbmdpbmU6XG4gICAgICBlbC5pbm5lckhUTUwgPSBlbmdpbmUocm91dGUudGVtcGxhdGVJZCwgY3RybCk7XG4gICAgICBmb3JFYWNoRXZlbnQoXCJhZGRFdmVudExpc3RlbmVyXCIpO1xuICAgIH0pO1xuICAgIC8vIFRyaWdnZXIgdGhlIGZpcnN0IHJlZnJlc2g6XG4gICAgY3RybC4kcmVmcmVzaCgpO1xuICB9XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgcm91dGVyKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCByb3V0ZXIpO1xuIiwiaW1wb3J0IHsgcm91dGUgfSBmcm9tIFwiLi4vcm91dGVyXCI7XG5pbXBvcnQgXCIuL2dsb2JhbC5zY3NzXCI7XG5pbXBvcnQgaG9tZSBmcm9tIFwiLi92aWV3cy9ob21lL2hvbWVcIjtcbmltcG9ydCBob21lVGVtcGxhdGUgZnJvbSBcIi4vdmlld3MvaG9tZS9ob21lLmh0bWxcIjtcbmltcG9ydCBzdWNlc3MgZnJvbSBcIi4vdmlld3Mvc3VjZXNzL3N1Y2Vzc1wiO1xuaW1wb3J0IHN1Y2Vzc1RlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL3N1Y2Vzcy9zdWNlc3MuaHRtbFwiO1xuaW1wb3J0IHdyb25nUm91dGVUZW1wbGF0ZSBmcm9tIFwiLi92aWV3cy80MDQvNDA0Lmh0bWxcIjtcblxuY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcbmhlYWQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGhvbWVUZW1wbGF0ZSk7XG5oZWFkLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBzdWNlc3NUZW1wbGF0ZSk7XG5oZWFkLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCB3cm9uZ1JvdXRlVGVtcGxhdGUpO1xuXG5yb3V0ZShcIi9cIiwgXCJob21lXCIsIGhvbWUpO1xuXG5yb3V0ZShcIi9zdWNlc3NcIiwgXCJzdWNlc3NcIiwgc3VjZXNzKTtcblxucm91dGUoXCIqXCIsIFwiNDA0XCIsIGZ1bmN0aW9uICgpIHt9KTtcbiIsImltcG9ydCBcIi4vaG9tZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xyXG4gIHRoaXMudXNlcm5hbWUgPSBcIlwiO1xyXG4gIHRoaXMucGFzc3dvcmQgPSBcIlwiO1xyXG4gIHRoaXMuc2hvd0Vycm9yTWVzc2FnZVVzZXJuYW1lID0gZmFsc2U7XHJcbiAgdGhpcy5lcnJvck1lc3NhZ2VVc2VybmFtZSA9IFwiXCI7XHJcbiAgdGhpcy5zaG93RXJyb3JNZXNzYWdlUGFzc3dvcmQgPSBmYWxzZTtcclxuICB0aGlzLmVycm9yTWVzc2FnZVBhc3N3b3JkID0gXCJcIjtcclxuICB0aGlzLnNob3dFcnJvck1lc3NhZ2VHZW5lcmFsID0gZmFsc2U7XHJcbiAgdGhpcy5lcnJvck1lc3NhZ2VHZW5lcmFsID0gXCJcIjtcclxuXHJcbiAgdGhpcy4kb24oXCIjdXNlcm5hbWVcIiwgXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgdGhpcy51c2VybmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gIH0pO1xyXG5cclxuICB0aGlzLiRvbihcIiNwYXNzd29yZFwiLCBcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIHRoaXMuJG9uKFwiLmZvcm1cIiwgXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLnVzZXJuYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2VVc2VybmFtZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlVXNlcm5hbWUgPSBcIkVudGVyIHVzZXJuYW1lXCI7XHJcbiAgICAgIHRoaXMuJHJlZnJlc2goKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZVVzZXJuYW1lID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuJHJlZnJlc2goKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhc3N3b3JkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2VQYXNzd29yZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlUGFzc3dvcmQgPSBcIkVudGVyIHBhc3N3b3JkXCI7XHJcbiAgICAgIHRoaXMuJHJlZnJlc2goKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZVBhc3N3b3JkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuJHJlZnJlc2goKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5zaG93RXJyb3JNZXNzYWdlVXNlcm5hbWUgJiYgIXRoaXMuc2hvd0Vycm9yTWVzc2FnZVBhc3N3b3JkKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gbG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCk7XHJcbiAgICAgIHJlc3BvbnNlXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZUdlbmVyYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZUdlbmVyYWwgPSBkYXRhLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuJHJlZnJlc2goKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0ge1xyXG4gICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgIHRva2VuOiBkYXRhLnRva2VuLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VySW5mb1wiLCBKU09OLnN0cmluZ2lmeSh1c2VySW5mbykpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBgJHtlLnN1Ym1pdHRlci5iYXNlVVJJLnJlcGxhY2UoXCIjXCIsIFwiXCIpfSMvc3VjZXNzYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2VHZW5lcmFsID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlR2VuZXJhbCA9IGVycjtcclxuICAgICAgICAgIHRoaXMuJHJlZnJlc2goKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9OiR7d2luZG93LmxvY2F0aW9uLnBvcnR9L2FwaS9sb2dpbmAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KSxcclxuICAgIH1cclxuICApO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG4iLCJpbXBvcnQgXCIuL3N1Y2Vzcy5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWNlc3MoKSB7XHJcbiAgbGV0IHVzZXJJbmZvID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5mb1wiKSk7XHJcbiAgdGhpcy51c2VybmFtZSA9IHVzZXJJbmZvLnVzZXJuYW1lO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9