/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody{\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  /* border: 1px solid blue; */\n}\n\n  .head{\n    /* border: 2px red solid; */\n    padding: 10px;\n    height: 20%;\n    border-bottom: black 3px solid;\n    background-color: rgb(57, 145, 57);\n  }\n\n  .below-header{\n    display: flex;\n    /* border: 2px solid green; */\n    height: 85.125vh;\n  }\n\n    .tab-list{\n      /* border: 2px red solid; */\n      border-right: black 3px solid;\n      width: 15rem;\n      padding-left: 5px;\n      background-color: rgb(145, 175, 92);\n    }\n\n      h3{\n        font-size: 25px;\n        border-bottom: 2px solid black;\n      }\n\n      h3:hover{\n        background-color: rgba(190, 190, 190, 0.555);\n        cursor: pointer;\n        transform: scale(1.03, 1.03);\n      }\n\n      /* .projects-tab{\n\n      } */\n\n    .content-body{\n      width: 100%;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      padding: 10px;\n    }\n\n      .proPage{\n        display: flex;\n        flex-direction: column;\n      }\n\n        .pheader, .nheader, .lheader{\n          border-bottom: black 4px solid;\n        }\n\n        .proBtn, .btn2, .btn3{\n          position: relative;\n          top: -83px;\n          left: 135px;\n          border: 2px black solid;\n          border-radius: 3px;\n          background-color: rgb(216, 187, 108);\n          width: 65px;\n          height: 55px;\n        }\n\n        .proBtn:hover{\n          cursor: pointer;\n          background-color: rgb(112, 97, 55);\n        }\n\n      .pbox, .nbox, .lbox{\n        border: 2px rgb(103, 130, 170) solid;\n        border-radius: 5px;\n        background-color: rgb(76, 240, 232);\n        padding: 4px;\n        height: 80%;\n        width: 80%;\n        margin: 5px;\n      }\n\n      .notePage{\n        display: none;\n      }\n\n      .nbox{\n        background-color: #da6767de;\n      }\n\n      .listPage{\n        display: none;\n      }\n\n      .lbox{\n        background-color: #d4d250e0;\n      }\n\n      /* everything below is for the modals */\n      \n      .modal{\n        display: none;\n        z-index: 1;\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(2px);\n        padding: 5% 15%;\n      }\n      \n      .modal-content{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: #fefefe;\n        width: 70%;\n        height: 70%;\n        border: 5px rgb(88, 86, 86) solid;\n        border-radius: 25px;\n        /* overflow-y: scroll;\n        overflow-x: none; */\n        overflow: auto;\n        scrollbar-width: none;\n      }\n\n      .modal-content::-webkit-scrollbar{\n        display: none;\n      }\n      \n      form{\n        font-size: 25px;\n      }\n      \n      #choices, #description, #date{\n        margin: 5px;\n      }\n\n      #choices{\n        margin-top: 25px;\n        padding-top: 10%;\n      }\n      \n      input{\n        padding: 5px;\n        margin: 5px;\n      }\n\n      textarea{\n        padding: 5px;\n      }\n      \n      input:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      textarea:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      .close-modal{\n        position: relative;\n        left: 250px;\n        top: -200px;\n        font-size: 50px;\n      }\n      \n      .close-modal:hover{\n        color: rgb(117, 111, 111);\n        cursor: pointer;\n      }\n\n      #buttonModal{\n        position: relative;\n        top: 90%;\n        left: 60%;\n        border: 3px rgb(52, 52, 116) solid;\n        border-radius: 5px;\n        background-color: rgb(172, 172, 206);\n        margin-bottom: 10px;\n        width: 35%;\n        height: 15%;\n      }\n      \n      #buttonModal:hover{\n        background-color: rgb(103, 199, 140);\n        cursor: pointer;\n        transform: translate3d(180, 90, 90);\n      }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4DAA4D;AAC9D;;AAEA;EACE,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,4BAA4B;AAC9B;;EAEE;IACE,2BAA2B;IAC3B,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,kCAAkC;EACpC;;EAEA;IACE,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;EAClB;;IAEE;MACE,2BAA2B;MAC3B,6BAA6B;MAC7B,YAAY;MACZ,iBAAiB;MACjB,mCAAmC;IACrC;;MAEE;QACE,eAAe;QACf,8BAA8B;MAChC;;MAEA;QACE,4CAA4C;QAC5C,eAAe;QACf,4BAA4B;MAC9B;;MAEA;;SAEG;;IAEL;MACE,WAAW;MACX,kBAAkB;MAClB,kBAAkB;MAClB,aAAa;IACf;;MAEE;QACE,aAAa;QACb,sBAAsB;MACxB;;QAEE;UACE,8BAA8B;QAChC;;QAEA;UACE,kBAAkB;UAClB,UAAU;UACV,WAAW;UACX,uBAAuB;UACvB,kBAAkB;UAClB,oCAAoC;UACpC,WAAW;UACX,YAAY;QACd;;QAEA;UACE,eAAe;UACf,kCAAkC;QACpC;;MAEF;QACE,oCAAoC;QACpC,kBAAkB;QAClB,mCAAmC;QACnC,YAAY;QACZ,WAAW;QACX,UAAU;QACV,WAAW;MACb;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,2BAA2B;MAC7B;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,2BAA2B;MAC7B;;MAEA,uCAAuC;;MAEvC;QACE,aAAa;QACb,UAAU;QACV,eAAe;QACf,OAAO;QACP,MAAM;QACN,WAAW;QACX,YAAY;QACZ,oCAAoC;QACpC,0BAA0B;QAC1B,eAAe;MACjB;;MAEA;QACE,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,yBAAyB;QACzB,UAAU;QACV,WAAW;QACX,iCAAiC;QACjC,mBAAmB;QACnB;2BACmB;QACnB,cAAc;QACd,qBAAqB;MACvB;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,eAAe;MACjB;;MAEA;QACE,WAAW;MACb;;MAEA;QACE,gBAAgB;QAChB,gBAAgB;MAClB;;MAEA;QACE,YAAY;QACZ,WAAW;MACb;;MAEA;QACE,YAAY;MACd;;MAEA;QACE,oCAAoC;MACtC;;MAEA;QACE,oCAAoC;MACtC;;MAEA;QACE,kBAAkB;QAClB,WAAW;QACX,WAAW;QACX,eAAe;MACjB;;MAEA;QACE,yBAAyB;QACzB,eAAe;MACjB;;MAEA;QACE,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,kCAAkC;QAClC,kBAAkB;QAClB,oCAAoC;QACpC,mBAAmB;QACnB,UAAU;QACV,WAAW;MACb;;MAEA;QACE,oCAAoC;QACpC,eAAe;QACf,mCAAmC;MACrC","sourcesContent":["*{\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody{\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  /* border: 1px solid blue; */\n}\n\n  .head{\n    /* border: 2px red solid; */\n    padding: 10px;\n    height: 20%;\n    border-bottom: black 3px solid;\n    background-color: rgb(57, 145, 57);\n  }\n\n  .below-header{\n    display: flex;\n    /* border: 2px solid green; */\n    height: 85.125vh;\n  }\n\n    .tab-list{\n      /* border: 2px red solid; */\n      border-right: black 3px solid;\n      width: 15rem;\n      padding-left: 5px;\n      background-color: rgb(145, 175, 92);\n    }\n\n      h3{\n        font-size: 25px;\n        border-bottom: 2px solid black;\n      }\n\n      h3:hover{\n        background-color: rgba(190, 190, 190, 0.555);\n        cursor: pointer;\n        transform: scale(1.03, 1.03);\n      }\n\n      /* .projects-tab{\n\n      } */\n\n    .content-body{\n      width: 100%;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      padding: 10px;\n    }\n\n      .proPage{\n        display: flex;\n        flex-direction: column;\n      }\n\n        .pheader, .nheader, .lheader{\n          border-bottom: black 4px solid;\n        }\n\n        .proBtn, .btn2, .btn3{\n          position: relative;\n          top: -83px;\n          left: 135px;\n          border: 2px black solid;\n          border-radius: 3px;\n          background-color: rgb(216, 187, 108);\n          width: 65px;\n          height: 55px;\n        }\n\n        .proBtn:hover{\n          cursor: pointer;\n          background-color: rgb(112, 97, 55);\n        }\n\n      .pbox, .nbox, .lbox{\n        border: 2px rgb(103, 130, 170) solid;\n        border-radius: 5px;\n        background-color: rgb(76, 240, 232);\n        padding: 4px;\n        height: 80%;\n        width: 80%;\n        margin: 5px;\n      }\n\n      .notePage{\n        display: none;\n      }\n\n      .nbox{\n        background-color: #da6767de;\n      }\n\n      .listPage{\n        display: none;\n      }\n\n      .lbox{\n        background-color: #d4d250e0;\n      }\n\n      /* everything below is for the modals */\n      \n      .modal{\n        display: none;\n        z-index: 1;\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(2px);\n        padding: 5% 15%;\n      }\n      \n      .modal-content{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: #fefefe;\n        width: 70%;\n        height: 70%;\n        border: 5px rgb(88, 86, 86) solid;\n        border-radius: 25px;\n        /* overflow-y: scroll;\n        overflow-x: none; */\n        overflow: auto;\n        scrollbar-width: none;\n      }\n\n      .modal-content::-webkit-scrollbar{\n        display: none;\n      }\n      \n      form{\n        font-size: 25px;\n      }\n      \n      #choices, #description, #date{\n        margin: 5px;\n      }\n\n      #choices{\n        margin-top: 25px;\n        padding-top: 10%;\n      }\n      \n      input{\n        padding: 5px;\n        margin: 5px;\n      }\n\n      textarea{\n        padding: 5px;\n      }\n      \n      input:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      textarea:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      .close-modal{\n        position: relative;\n        left: 250px;\n        top: -200px;\n        font-size: 50px;\n      }\n      \n      .close-modal:hover{\n        color: rgb(117, 111, 111);\n        cursor: pointer;\n      }\n\n      #buttonModal{\n        position: relative;\n        top: 90%;\n        left: 60%;\n        border: 3px rgb(52, 52, 116) solid;\n        border-radius: 5px;\n        background-color: rgb(172, 172, 206);\n        margin-bottom: 10px;\n        width: 35%;\n        height: 15%;\n      }\n      \n      #buttonModal:hover{\n        background-color: rgb(103, 199, 140);\n        cursor: pointer;\n        transform: translate3d(180, 90, 90);\n      }"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
  } // For old IE

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

/***/ "./src/listDOM.js":
/*!************************!*\
  !*** ./src/listDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listElements": () => (/* binding */ listElements),
/* harmony export */   "storedListData": () => (/* binding */ storedListData)
/* harmony export */ });
/* harmony import */ var _listObjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listObjects.js */ "./src/listObjects.js");





//get doc elements

const content = document.querySelector('#content');


//create project elements and add classes
const listPage = document.createElement('div');
const btn3 = document.createElement('button');
const modal = document.querySelector('.modal');
const listHeader = document.createElement('h1');


function listElements(list) {
  const listbox = document.createElement('div');
  const ltitle = document.createElement('h4');
  const ldesc = document.createElement('p');
  const ldate = document.createElement('p');
  const deleteBtn = document.createElement('button');


  listbox.classList.add('lbox');

  modal.style.display = 'none';

  listPage.append(listbox);
  listbox.append(ltitle);
  ltitle.textContent = 'List: ' + list.title;
  listbox.append(ldesc);
  ldesc.textContent = 'List items: ' + list.description;
  listbox.append(ldate);
  ldate.textContent = 'Date: ' + list.date;
  listbox.append(deleteBtn);
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', function() {
    listbox.remove(this);
    _listObjects_js__WEBPACK_IMPORTED_MODULE_0__.theList.pop(this);
    
  })
}


listPage.classList.add('listPage');
listHeader.classList.add('lheader');
btn3.classList.add('btn3');



// add elements to page

content.append(listPage);
listPage.append(listHeader);
listPage.append(btn3);

//text

listHeader.innerHTML = "Lists";
btn3.textContent = "+New List";



function storedListData() {
  let ldata = (0,_listObjects_js__WEBPACK_IMPORTED_MODULE_0__.getListData)();
  console.log(ldata);
  for(let i = 0; i < ldata.length; i++) {

    const ldatabox = document.createElement('div');
    const ldataTitle = document.createElement('h4');
    const ldataDesc = document.createElement('p');
    const ldataDate = document.createElement('p');
    const ldeleteBtn = document.createElement('button');
  
  
    ldatabox.classList.add('lbox');
  
    modal.style.display = 'none';
  
    listPage.append(ldatabox);
    ldatabox.append(ldataTitle);
    ldataTitle.textContent = 'Title: ' + ldata[i].title;
    ldatabox.append(ldataDesc);
    ldataDesc.textContent = 'Note Description: ' + ldata[i].description;
    ldatabox.append(ldataDate);
    ldataDate.textContent = 'Date: ' + ldata[i].date;
    ldatabox.append(ldeleteBtn);
    ldeleteBtn.textContent = 'Delete';

    ldeleteBtn.addEventListener('click', function() {
      ldatabox.remove(this);
      _listObjects_js__WEBPACK_IMPORTED_MODULE_0__.theList.pop(this);
      console.log(_listObjects_js__WEBPACK_IMPORTED_MODULE_0__.theList);
      
    })
  }
}


/***/ }),

/***/ "./src/listObjects.js":
/*!****************************!*\
  !*** ./src/listObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "theList": () => (/* binding */ theList),
/* harmony export */   "createList": () => (/* binding */ createList),
/* harmony export */   "getListData": () => (/* binding */ getListData)
/* harmony export */ });
/* harmony import */ var _listDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listDOM */ "./src/listDOM.js");




//get elements

const form = document.forms["add"];

let theList = [];

//project creation

function createList(title, description, date) {
  return {
    title, 
    description,
    date,
  };
}

function saveListData() {
  sessionStorage.setItem('lists', JSON.stringify(theList));
}

function makeList() {
  const title = form.querySelector('input[id="title"]').value;
  const description = form.querySelector('textarea[id="description"]').value;
  const date = form.querySelector('input[id="date"]').value;

  const list = createList(title, description, date);
  theList.push(list);

  (0,_listDOM__WEBPACK_IMPORTED_MODULE_0__.listElements)(list);
  saveListData();

}



//create projects

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  makeList();
})


function getListData() {
  let ldata = JSON.parse(sessionStorage.getItem('lists'));
  return ldata;
}


/***/ }),

/***/ "./src/notesDOM.js":
/*!*************************!*\
  !*** ./src/notesDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noteElements": () => (/* binding */ noteElements),
/* harmony export */   "storedNoteData": () => (/* binding */ storedNoteData)
/* harmony export */ });
/* harmony import */ var _notesObjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notesObjects.js */ "./src/notesObjects.js");






//get doc elements
const content = document.querySelector('#content');


//create project elements and add classes
const notePage = document.createElement('div');
const btn2 = document.createElement('button');
const modal = document.querySelector('.modal');
const noteHeader = document.createElement('h1');

notePage.classList.add('notePage');
noteHeader.classList.add('nheader')
btn2.classList.add('btn2');

function noteElements(note) {
  const notebox = document.createElement('div');
  const ntitle = document.createElement('h4');
  const ndesc = document.createElement('p');
  const ndate = document.createElement('p');
  const deleteBtn = document.createElement('button');
  const nPage = document.querySelector('.notePage');

  notebox.classList.add('nbox');

  modal.style.display = 'none';

  nPage.append(notebox);
  notebox.append(ntitle);
  ntitle.textContent = 'Title: ' + note.title;
  notebox.append(ndesc);
  ndesc.textContent = 'Note Description: ' + note.description;
  notebox.append(ndate);
  ndate.textContent = 'Date: ' + note.date;
  notebox.append(deleteBtn);
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', function() {
    notebox.remove(this);
    _notesObjects_js__WEBPACK_IMPORTED_MODULE_0__.noteList.pop(this);
    
  })
}


//add elemtns to page

content.append(notePage);
notePage.append(noteHeader);
notePage.append(btn2);
// notePage.append(notebox);

//text

noteHeader.innerHTML = "Notes";
btn2.textContent = "+New Note";



function storedNoteData() {
  let ndata = (0,_notesObjects_js__WEBPACK_IMPORTED_MODULE_0__.getNoteData)();
  console.log(ndata);
  for(let i = 0; i < ndata.length; i++) {

    const ndatabox = document.createElement('div');
    const ndataTitle = document.createElement('h4');
    const ndataDesc = document.createElement('p');
    const ndataDate = document.createElement('p');
    const ndeleteBtn = document.createElement('button');
  
  
    ndatabox.classList.add('nbox');
  
    modal.style.display = 'none';
  
    notePage.append(ndatabox);
    ndatabox.append(ndataTitle);
    ndataTitle.textContent = 'Title: ' + ndata[i].title;
    ndatabox.append(ndataDesc);
    ndataDesc.textContent = 'Note Description: ' + ndata[i].description;
    ndatabox.append(ndataDate);
    ndataDate.textContent = 'Date: ' + ndata[i].date;
    ndatabox.append(ndeleteBtn);
    ndeleteBtn.textContent = 'Delete';

    ndeleteBtn.addEventListener('click', function() {
      ndatabox.remove(this);
      _notesObjects_js__WEBPACK_IMPORTED_MODULE_0__.noteList.pop(this);
      console.log(_notesObjects_js__WEBPACK_IMPORTED_MODULE_0__.noteList);
      
    })
  }
}






/***/ }),

/***/ "./src/notesObjects.js":
/*!*****************************!*\
  !*** ./src/notesObjects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noteList": () => (/* binding */ noteList),
/* harmony export */   "createNote": () => (/* binding */ createNote),
/* harmony export */   "getNoteData": () => (/* binding */ getNoteData)
/* harmony export */ });
/* harmony import */ var _notesDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notesDOM */ "./src/notesDOM.js");




//get elements

const form = document.forms["add"];

let noteList = [];

//project creation

function createNote(title, description, date) {
  return {
    title, 
    description,
    date,
  };
}

function saveNoteData() {
  sessionStorage.setItem('notes', JSON.stringify(noteList));
}

function makeNote() {
  const title = form.querySelector('input[id="title"]').value;
  const description = form.querySelector('textarea[id="description"]').value;
  const date = form.querySelector('input[id="date"]').value;

  const note = createNote(title, description, date);
  noteList.push(note);

  (0,_notesDOM__WEBPACK_IMPORTED_MODULE_0__.noteElements)(note);
  saveNoteData();

}



//create projects

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  makeNote();
})


function getNoteData() {
  let ndata = JSON.parse(sessionStorage.getItem('notes'));
  return ndata;
}









/***/ }),

/***/ "./src/projectDOM.js":
/*!***************************!*\
  !*** ./src/projectDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectElements": () => (/* binding */ projectElements),
/* harmony export */   "storedData": () => (/* binding */ storedData)
/* harmony export */ });
/* harmony import */ var _projectObjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectObjects.js */ "./src/projectObjects.js");




//get doc elements
const content = document.querySelector('#content');


//create project elements and add classes

const proPage = document.createElement('div');
const projectHeader = document.createElement('h1');
const newbtn = document.createElement('button');
const modal = document.querySelector('.modal');

proPage.classList.add('proPage');
projectHeader.classList.add('pheader');
newbtn.classList.add('proBtn');

function projectElements(project) {
  const projectbox = document.createElement('div');
  const ptitle = document.createElement('h4');
  const pdesc = document.createElement('p');
  const pdate = document.createElement('p');
  const deleteBtn = document.createElement('button');


  projectbox.classList.add('pbox');

  modal.style.display = 'none';

  proPage.append(projectbox);
  projectbox.append(ptitle);
  ptitle.textContent = 'Project: ' + project.title;
  projectbox.append(pdesc);
  pdesc.textContent = 'Description: ' + project.description;
  projectbox.append(pdate);
  pdate.textContent = 'Date: ' + project.date;
  projectbox.append(deleteBtn);
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', function() {
    projectbox.remove(this);
    _projectObjects_js__WEBPACK_IMPORTED_MODULE_0__.projectList.pop(this);
    console.log(_projectObjects_js__WEBPACK_IMPORTED_MODULE_0__.projectList);
    
  })
}

//add elements to page

content.append(proPage);
proPage.append(projectHeader);
// proPage.append(newbtn);
proPage.append(newbtn);
// proPage.append(projectbox);

// add text parts

projectHeader.textContent = "Project";
newbtn.textContent = "+New Project";



function storedData() {
  let data = (0,_projectObjects_js__WEBPACK_IMPORTED_MODULE_0__.getData)();
  console.log(data);
  for(let i = 0; i < data.length; i++) {

    const databox = document.createElement('div');
    const dataTitle = document.createElement('h4');
    const dataDesc = document.createElement('p');
    const dataDate = document.createElement('p');
    const deleteBtn = document.createElement('button');
  
  
    databox.classList.add('pbox');
  
    modal.style.display = 'none';
  
    proPage.append(databox);
    databox.append(dataTitle);
    dataTitle.textContent = 'Project: ' + data[i].title;
    databox.append(dataDesc);
    dataDesc.textContent = 'Description: ' + data[i].description;
    databox.append(dataDate);
    dataDate.textContent = 'Date: ' + data[i].date;
    databox.append(deleteBtn);
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function() {
      databox.remove(this);
      _projectObjects_js__WEBPACK_IMPORTED_MODULE_0__.projectList.pop(this);
      console.log(_projectObjects_js__WEBPACK_IMPORTED_MODULE_0__.projectList);
      
    })
  }
}


/***/ }),

/***/ "./src/projectObjects.js":
/*!*******************************!*\
  !*** ./src/projectObjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDOM */ "./src/projectDOM.js");




//get elements
const form = document.forms["add"];
console.log(form);
// const proPage = document.querySelector('.proPage');

let projectList = [];

//project creation

function createProject(title, description, date) {
  return {
    title, 
    description,
    date,
  };
}

function saveData() {
  sessionStorage.setItem('projects', JSON.stringify(projectList));
}

function makeProject() {
  const title = form.querySelector('input[id="title"]').value;
  const description = form.querySelector('textarea[id="description"]').value;
  const date = form.querySelector('input[id="date"]').value;

  const project = createProject(title, description, date);
  projectList.push(project);

  (0,_projectDOM__WEBPACK_IMPORTED_MODULE_0__.projectElements)(project);
  saveData();

}



//create projects

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  makeProject();
  // console.log(projectList);
})


function getData() {
  let data = JSON.parse(sessionStorage.getItem('projects'));
  // console.log(data);
  return data;
}

// getData();

// console.log(getData());

// console.log(projectList);






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projectDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDOM.js */ "./src/projectDOM.js");
/* harmony import */ var _notesDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notesDOM.js */ "./src/notesDOM.js");
/* harmony import */ var _listDOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listDOM.js */ "./src/listDOM.js");




//generate the individual sections





//get objects for each section





//get general elements
const modal = document.querySelector('.modal');
const proBtn = document.querySelector('.proBtn');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const closebtn = document.querySelector('.close-modal');
const form = document.forms["add"];
const choices = form.querySelector('#choices');

//tab selection from dom

const protab = document.querySelector('#protab');
const notetab = document.querySelector('#notetab');
const listtab = document.querySelector('#listtab');

//page selection

const proPage = document.querySelector('.proPage');
const notePage = document.querySelector('.notePage');
const listPage = document.querySelector('.listPage');

// display choices of tab

protab.addEventListener('click', function() {
  proPage.style.display = "flex";
  notePage.style.display = "none";
  listPage.style.display = "none";
})

notetab.addEventListener('click', function() {
  proPage.style.display = "none";
  notePage.style.display = "block";
  listPage.style.display = "none";
})

listtab.addEventListener('click', function() {
  proPage.style.display = "none";
  notePage.style.display = "none";
  listPage.style.display = "block";
})

//modal for each tab

proBtn.addEventListener('click', function() {
  modal.style.display = "block";
  choices.textContent = "Project Title:";
})

btn2.addEventListener('click', function() {
  modal.style.display = "block";
  choices.textContent = "Note Title:";
})

btn3.addEventListener('click', function() {
  modal.style.display = "block";
  choices.textContent = "List Title:";
})

closebtn.addEventListener('click', function() {
  modal.style.display = "none";
})

//object creation for each tab


;(0,_projectDOM_js__WEBPACK_IMPORTED_MODULE_1__.storedData)();
(0,_notesDOM_js__WEBPACK_IMPORTED_MODULE_2__.storedNoteData)();
(0,_listDOM_js__WEBPACK_IMPORTED_MODULE_3__.storedListData)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNENBQTRDLGlFQUFpRSxHQUFHLFNBQVMsY0FBYyxlQUFlLHNCQUFzQiwrQkFBK0IsS0FBSyxZQUFZLGdDQUFnQyxzQkFBc0Isa0JBQWtCLHFDQUFxQyx5Q0FBeUMsS0FBSyxvQkFBb0Isb0JBQW9CLGtDQUFrQyx5QkFBeUIsS0FBSyxrQkFBa0Isa0NBQWtDLHdDQUF3QyxxQkFBcUIsMEJBQTBCLDRDQUE0QyxPQUFPLGFBQWEsMEJBQTBCLHlDQUF5QyxTQUFTLG1CQUFtQix1REFBdUQsMEJBQTBCLHVDQUF1QyxTQUFTLDJCQUEyQixZQUFZLHdCQUF3QixvQkFBb0IsMkJBQTJCLDJCQUEyQixzQkFBc0IsT0FBTyxtQkFBbUIsd0JBQXdCLGlDQUFpQyxTQUFTLHlDQUF5QywyQ0FBMkMsV0FBVyxrQ0FBa0MsK0JBQStCLHVCQUF1Qix3QkFBd0Isb0NBQW9DLCtCQUErQixpREFBaUQsd0JBQXdCLHlCQUF5QixXQUFXLDBCQUEwQiw0QkFBNEIsK0NBQStDLFdBQVcsOEJBQThCLCtDQUErQyw2QkFBNkIsOENBQThDLHVCQUF1QixzQkFBc0IscUJBQXFCLHNCQUFzQixTQUFTLG9CQUFvQix3QkFBd0IsU0FBUyxnQkFBZ0Isc0NBQXNDLFNBQVMsb0JBQW9CLHdCQUF3QixTQUFTLGdCQUFnQixzQ0FBc0MsU0FBUyx5RUFBeUUsd0JBQXdCLHFCQUFxQiwwQkFBMEIsa0JBQWtCLGlCQUFpQixzQkFBc0IsdUJBQXVCLCtDQUErQyxxQ0FBcUMsMEJBQTBCLFNBQVMsK0JBQStCLHdCQUF3QixrQ0FBa0MsOEJBQThCLG9DQUFvQyxxQkFBcUIsc0JBQXNCLDRDQUE0Qyw4QkFBOEIsZ0NBQWdDLDRCQUE0QiwyQkFBMkIsZ0NBQWdDLFNBQVMsNENBQTRDLHdCQUF3QixTQUFTLHFCQUFxQiwwQkFBMEIsU0FBUyw4Q0FBOEMsc0JBQXNCLFNBQVMsbUJBQW1CLDJCQUEyQiwyQkFBMkIsU0FBUyxzQkFBc0IsdUJBQXVCLHNCQUFzQixTQUFTLG1CQUFtQix1QkFBdUIsU0FBUyw0QkFBNEIsK0NBQStDLFNBQVMseUJBQXlCLCtDQUErQyxTQUFTLHVCQUF1Qiw2QkFBNkIsc0JBQXNCLHNCQUFzQiwwQkFBMEIsU0FBUyxtQ0FBbUMsb0NBQW9DLDBCQUEwQixTQUFTLHVCQUF1Qiw2QkFBNkIsbUJBQW1CLG9CQUFvQiw2Q0FBNkMsNkJBQTZCLCtDQUErQyw4QkFBOEIscUJBQXFCLHNCQUFzQixTQUFTLG1DQUFtQywrQ0FBK0MsMEJBQTBCLDhDQUE4QyxTQUFTLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSw0QkFBNEIsaUVBQWlFLEdBQUcsU0FBUyxjQUFjLGVBQWUsc0JBQXNCLCtCQUErQixLQUFLLFlBQVksZ0NBQWdDLHNCQUFzQixrQkFBa0IscUNBQXFDLHlDQUF5QyxLQUFLLG9CQUFvQixvQkFBb0Isa0NBQWtDLHlCQUF5QixLQUFLLGtCQUFrQixrQ0FBa0Msd0NBQXdDLHFCQUFxQiwwQkFBMEIsNENBQTRDLE9BQU8sYUFBYSwwQkFBMEIseUNBQXlDLFNBQVMsbUJBQW1CLHVEQUF1RCwwQkFBMEIsdUNBQXVDLFNBQVMsMkJBQTJCLFlBQVksd0JBQXdCLG9CQUFvQiwyQkFBMkIsMkJBQTJCLHNCQUFzQixPQUFPLG1CQUFtQix3QkFBd0IsaUNBQWlDLFNBQVMseUNBQXlDLDJDQUEyQyxXQUFXLGtDQUFrQywrQkFBK0IsdUJBQXVCLHdCQUF3QixvQ0FBb0MsK0JBQStCLGlEQUFpRCx3QkFBd0IseUJBQXlCLFdBQVcsMEJBQTBCLDRCQUE0QiwrQ0FBK0MsV0FBVyw4QkFBOEIsK0NBQStDLDZCQUE2Qiw4Q0FBOEMsdUJBQXVCLHNCQUFzQixxQkFBcUIsc0JBQXNCLFNBQVMsb0JBQW9CLHdCQUF3QixTQUFTLGdCQUFnQixzQ0FBc0MsU0FBUyxvQkFBb0Isd0JBQXdCLFNBQVMsZ0JBQWdCLHNDQUFzQyxTQUFTLHlFQUF5RSx3QkFBd0IscUJBQXFCLDBCQUEwQixrQkFBa0IsaUJBQWlCLHNCQUFzQix1QkFBdUIsK0NBQStDLHFDQUFxQywwQkFBMEIsU0FBUywrQkFBK0Isd0JBQXdCLGtDQUFrQyw4QkFBOEIsb0NBQW9DLHFCQUFxQixzQkFBc0IsNENBQTRDLDhCQUE4QixnQ0FBZ0MsNEJBQTRCLDJCQUEyQixnQ0FBZ0MsU0FBUyw0Q0FBNEMsd0JBQXdCLFNBQVMscUJBQXFCLDBCQUEwQixTQUFTLDhDQUE4QyxzQkFBc0IsU0FBUyxtQkFBbUIsMkJBQTJCLDJCQUEyQixTQUFTLHNCQUFzQix1QkFBdUIsc0JBQXNCLFNBQVMsbUJBQW1CLHVCQUF1QixTQUFTLDRCQUE0QiwrQ0FBK0MsU0FBUyx5QkFBeUIsK0NBQStDLFNBQVMsdUJBQXVCLDZCQUE2QixzQkFBc0Isc0JBQXNCLDBCQUEwQixTQUFTLG1DQUFtQyxvQ0FBb0MsMEJBQTBCLFNBQVMsdUJBQXVCLDZCQUE2QixtQkFBbUIsb0JBQW9CLDZDQUE2Qyw2QkFBNkIsK0NBQStDLDhCQUE4QixxQkFBcUIsc0JBQXNCLFNBQVMsbUNBQW1DLCtDQUErQywwQkFBMEIsOENBQThDLFNBQVMsbUJBQW1CO0FBQ3RyVDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZmE7O0FBRTJDOzs7QUFHeEQ7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHdEQUFXO0FBQ2Y7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSU87QUFDUCxjQUFjLDREQUFXO0FBQ3pCO0FBQ0EsaUJBQWlCLGtCQUFrQjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSx3REFBVztBQUNqQixrQkFBa0Isb0RBQU87QUFDekI7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdhOztBQUU0Qjs7QUFFekM7O0FBRUE7O0FBRU87O0FBRVA7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSxzREFBWTtBQUNkOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHTTtBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRGE7O0FBRTZDOzs7O0FBSTFEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwwREFBWTtBQUNoQjtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlPO0FBQ1AsY0FBYyw2REFBVztBQUN6QjtBQUNBLGlCQUFpQixrQkFBa0I7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sMERBQVk7QUFDbEIsa0JBQWtCLHNEQUFRO0FBQzFCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR2E7O0FBRTZCOztBQUUxQzs7QUFFQTs7QUFFTzs7QUFFUDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLHVEQUFZO0FBQ2Q7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdNO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRGE7O0FBRThDOztBQUUzRDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksK0RBQWU7QUFDbkIsZ0JBQWdCLDJEQUFXO0FBQzNCO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlPO0FBQ1AsYUFBYSwyREFBTztBQUNwQjtBQUNBLGlCQUFpQixpQkFBaUI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sK0RBQWU7QUFDckIsa0JBQWtCLDJEQUFXO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHYTs7QUFFa0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEVBQUUsNERBQWU7QUFDakI7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR007QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7VUM1REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05hOztBQUVROztBQUVyQjs7QUFFeUI7QUFDRjtBQUNEOztBQUV0Qjs7QUFFNkM7QUFDRTtBQUNEOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7OztBQUdBLDJEQUFVO0FBQ1YsNERBQWM7QUFDZCwyREFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpc3RET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saXN0T2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25vdGVzRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbm90ZXNPYmplY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdERPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RPYmplY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5e1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuICAuaGVhZHtcXG4gICAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgM3B4IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDE0NSwgNTcpO1xcbiAgfVxcblxcbiAgLmJlbG93LWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW47ICovXFxuICAgIGhlaWdodDogODUuMTI1dmg7XFxuICB9XFxuXFxuICAgIC50YWItbGlzdHtcXG4gICAgICAvKiBib3JkZXI6IDJweCByZWQgc29saWQ7ICovXFxuICAgICAgYm9yZGVyLXJpZ2h0OiBibGFjayAzcHggc29saWQ7XFxuICAgICAgd2lkdGg6IDE1cmVtO1xcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDE3NSwgOTIpO1xcbiAgICB9XFxuXFxuICAgICAgaDN7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgfVxcblxcbiAgICAgIGgzOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjU1NSk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMsIDEuMDMpO1xcbiAgICAgIH1cXG5cXG4gICAgICAvKiAucHJvamVjdHMtdGFie1xcblxcbiAgICAgIH0gKi9cXG5cXG4gICAgLmNvbnRlbnQtYm9keXtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgICAucHJvUGFnZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIH1cXG5cXG4gICAgICAgIC5waGVhZGVyLCAubmhlYWRlciwgLmxoZWFkZXJ7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IGJsYWNrIDRweCBzb2xpZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9CdG4sIC5idG4yLCAuYnRuM3tcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICB0b3A6IC04M3B4O1xcbiAgICAgICAgICBsZWZ0OiAxMzVweDtcXG4gICAgICAgICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMTg3LCAxMDgpO1xcbiAgICAgICAgICB3aWR0aDogNjVweDtcXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb0J0bjpob3ZlcntcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCA5NywgNTUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgIC5wYm94LCAubmJveCwgLmxib3h7XFxuICAgICAgICBib3JkZXI6IDJweCByZ2IoMTAzLCAxMzAsIDE3MCkgc29saWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDI0MCwgMjMyKTtcXG4gICAgICAgIHBhZGRpbmc6IDRweDtcXG4gICAgICAgIGhlaWdodDogODAlO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAubm90ZVBhZ2V7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAubmJveHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYTY3NjdkZTtcXG4gICAgICB9XFxuXFxuICAgICAgLmxpc3RQYWdle1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLmxib3h7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMjUwZTA7XFxuICAgICAgfVxcblxcbiAgICAgIC8qIGV2ZXJ5dGhpbmcgYmVsb3cgaXMgZm9yIHRoZSBtb2RhbHMgKi9cXG4gICAgICBcXG4gICAgICAubW9kYWx7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICAgICAgcGFkZGluZzogNSUgMTUlO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAubW9kYWwtY29udGVudHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgYm9yZGVyOiA1cHggcmdiKDg4LCA4NiwgODYpIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgICAgIC8qIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIG92ZXJmbG93LXg6IG5vbmU7ICovXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLm1vZGFsLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgZm9ybXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgI2Nob2ljZXMsICNkZXNjcmlwdGlvbiwgI2RhdGV7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgI2Nob2ljZXN7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaW5wdXR7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgdGV4dGFyZWF7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGlucHV0OmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgIH1cXG5cXG4gICAgICB0ZXh0YXJlYTpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICB9XFxuXFxuICAgICAgLmNsb3NlLW1vZGFse1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGVmdDogMjUwcHg7XFxuICAgICAgICB0b3A6IC0yMDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgLmNsb3NlLW1vZGFsOmhvdmVye1xcbiAgICAgICAgY29sb3I6IHJnYigxMTcsIDExMSwgMTExKTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgI2J1dHRvbk1vZGFse1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiA5MCU7XFxuICAgICAgICBsZWZ0OiA2MCU7XFxuICAgICAgICBib3JkZXI6IDNweCByZ2IoNTIsIDUyLCAxMTYpIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MiwgMTcyLCAyMDYpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIHdpZHRoOiAzNSU7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgI2J1dHRvbk1vZGFsOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTk5LCAxNDApO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxODAsIDkwLCA5MCk7XFxuICAgICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0VBRUU7SUFDRSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQkFBZ0I7RUFDbEI7O0lBRUU7TUFDRSwyQkFBMkI7TUFDM0IsNkJBQTZCO01BQzdCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsbUNBQW1DO0lBQ3JDOztNQUVFO1FBQ0UsZUFBZTtRQUNmLDhCQUE4QjtNQUNoQzs7TUFFQTtRQUNFLDRDQUE0QztRQUM1QyxlQUFlO1FBQ2YsNEJBQTRCO01BQzlCOztNQUVBOztTQUVHOztJQUVMO01BQ0UsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsYUFBYTtJQUNmOztNQUVFO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtNQUN4Qjs7UUFFRTtVQUNFLDhCQUE4QjtRQUNoQzs7UUFFQTtVQUNFLGtCQUFrQjtVQUNsQixVQUFVO1VBQ1YsV0FBVztVQUNYLHVCQUF1QjtVQUN2QixrQkFBa0I7VUFDbEIsb0NBQW9DO1VBQ3BDLFdBQVc7VUFDWCxZQUFZO1FBQ2Q7O1FBRUE7VUFDRSxlQUFlO1VBQ2Ysa0NBQWtDO1FBQ3BDOztNQUVGO1FBQ0Usb0NBQW9DO1FBQ3BDLGtCQUFrQjtRQUNsQixtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLFdBQVc7UUFDWCxVQUFVO1FBQ1YsV0FBVztNQUNiOztNQUVBO1FBQ0UsYUFBYTtNQUNmOztNQUVBO1FBQ0UsMkJBQTJCO01BQzdCOztNQUVBO1FBQ0UsYUFBYTtNQUNmOztNQUVBO1FBQ0UsMkJBQTJCO01BQzdCOztNQUVBLHVDQUF1Qzs7TUFFdkM7UUFDRSxhQUFhO1FBQ2IsVUFBVTtRQUNWLGVBQWU7UUFDZixPQUFPO1FBQ1AsTUFBTTtRQUNOLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0NBQW9DO1FBQ3BDLDBCQUEwQjtRQUMxQixlQUFlO01BQ2pCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsaUNBQWlDO1FBQ2pDLG1CQUFtQjtRQUNuQjsyQkFDbUI7UUFDbkIsY0FBYztRQUNkLHFCQUFxQjtNQUN2Qjs7TUFFQTtRQUNFLGFBQWE7TUFDZjs7TUFFQTtRQUNFLGVBQWU7TUFDakI7O01BRUE7UUFDRSxXQUFXO01BQ2I7O01BRUE7UUFDRSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO01BQ2xCOztNQUVBO1FBQ0UsWUFBWTtRQUNaLFdBQVc7TUFDYjs7TUFFQTtRQUNFLFlBQVk7TUFDZDs7TUFFQTtRQUNFLG9DQUFvQztNQUN0Qzs7TUFFQTtRQUNFLG9DQUFvQztNQUN0Qzs7TUFFQTtRQUNFLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsV0FBVztRQUNYLGVBQWU7TUFDakI7O01BRUE7UUFDRSx5QkFBeUI7UUFDekIsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsb0NBQW9DO1FBQ3BDLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsV0FBVztNQUNiOztNQUVBO1FBQ0Usb0NBQW9DO1FBQ3BDLGVBQWU7UUFDZixtQ0FBbUM7TUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keXtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbiAgLmhlYWR7XFxuICAgIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDsgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGJvcmRlci1ib3R0b206IGJsYWNrIDNweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAxNDUsIDU3KTtcXG4gIH1cXG5cXG4gIC5iZWxvdy1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgICBoZWlnaHQ6IDg1LjEyNXZoO1xcbiAgfVxcblxcbiAgICAudGFiLWxpc3R7XFxuICAgICAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xcbiAgICAgIGJvcmRlci1yaWdodDogYmxhY2sgM3B4IHNvbGlkO1xcbiAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxNzUsIDkyKTtcXG4gICAgfVxcblxcbiAgICAgIGgze1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIH1cXG5cXG4gICAgICBoMzpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAxOTAsIDE5MCwgMC41NTUpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzLCAxLjAzKTtcXG4gICAgICB9XFxuXFxuICAgICAgLyogLnByb2plY3RzLXRhYntcXG5cXG4gICAgICB9ICovXFxuXFxuICAgIC5jb250ZW50LWJvZHl7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICAgLnByb1BhZ2V7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB9XFxuXFxuICAgICAgICAucGhlYWRlciwgLm5oZWFkZXIsIC5saGVhZGVye1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBibGFjayA0cHggc29saWQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvQnRuLCAuYnRuMiwgLmJ0bjN7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgdG9wOiAtODNweDtcXG4gICAgICAgICAgbGVmdDogMTM1cHg7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDE4NywgMTA4KTtcXG4gICAgICAgICAgd2lkdGg6IDY1cHg7XFxuICAgICAgICAgIGhlaWdodDogNTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9CdG46aG92ZXJ7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgOTcsIDU1KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAucGJveCwgLm5ib3gsIC5sYm94e1xcbiAgICAgICAgYm9yZGVyOiAycHggcmdiKDEwMywgMTMwLCAxNzApIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCAyNDAsIDIzMik7XFxuICAgICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgLm5vdGVQYWdle1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLm5ib3h7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGE2NzY3ZGU7XFxuICAgICAgfVxcblxcbiAgICAgIC5saXN0UGFnZXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC5sYm94e1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDI1MGUwO1xcbiAgICAgIH1cXG5cXG4gICAgICAvKiBldmVyeXRoaW5nIGJlbG93IGlzIGZvciB0aGUgbW9kYWxzICovXFxuICAgICAgXFxuICAgICAgLm1vZGFse1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgICAgIHBhZGRpbmc6IDUlIDE1JTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgLm1vZGFsLWNvbnRlbnR7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgICBoZWlnaHQ6IDcwJTtcXG4gICAgICAgIGJvcmRlcjogNXB4IHJnYig4OCwgODYsIDg2KSBzb2xpZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgICAgICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICBvdmVyZmxvdy14OiBub25lOyAqL1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC5tb2RhbC1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGZvcm17XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgICNjaG9pY2VzLCAjZGVzY3JpcHRpb24sICNkYXRle1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgfVxcblxcbiAgICAgICNjaG9pY2Vze1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGlucHV0e1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgfVxcblxcbiAgICAgIHRleHRhcmVhe1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBpbnB1dDpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICB9XFxuXFxuICAgICAgdGV4dGFyZWE6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgfVxcblxcbiAgICAgIC5jbG9zZS1tb2RhbHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGxlZnQ6IDI1MHB4O1xcbiAgICAgICAgdG9wOiAtMjAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIC5jbG9zZS1tb2RhbDpob3ZlcntcXG4gICAgICAgIGNvbG9yOiByZ2IoMTE3LCAxMTEsIDExMSk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcblxcbiAgICAgICNidXR0b25Nb2RhbHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHRvcDogOTAlO1xcbiAgICAgICAgbGVmdDogNjAlO1xcbiAgICAgICAgYm9yZGVyOiAzcHggcmdiKDUyLCA1MiwgMTE2KSBzb2xpZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzIsIDE3MiwgMjA2KTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgICB3aWR0aDogMzUlO1xcbiAgICAgICAgaGVpZ2h0OiAxNSU7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgICNidXR0b25Nb2RhbDpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDE5OSwgMTQwKTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTgwLCA5MCwgOTApO1xcbiAgICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgdGhlTGlzdCwgZ2V0TGlzdERhdGEgfSBmcm9tICcuL2xpc3RPYmplY3RzLmpzJztcblxuXG4vL2dldCBkb2MgZWxlbWVudHNcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblxuLy9jcmVhdGUgcHJvamVjdCBlbGVtZW50cyBhbmQgYWRkIGNsYXNzZXNcbmNvbnN0IGxpc3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBidG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgbGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RFbGVtZW50cyhsaXN0KSB7XG4gIGNvbnN0IGxpc3Rib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgY29uc3QgbGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGxkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuXG4gIGxpc3Rib3guY2xhc3NMaXN0LmFkZCgnbGJveCcpO1xuXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgbGlzdFBhZ2UuYXBwZW5kKGxpc3Rib3gpO1xuICBsaXN0Ym94LmFwcGVuZChsdGl0bGUpO1xuICBsdGl0bGUudGV4dENvbnRlbnQgPSAnTGlzdDogJyArIGxpc3QudGl0bGU7XG4gIGxpc3Rib3guYXBwZW5kKGxkZXNjKTtcbiAgbGRlc2MudGV4dENvbnRlbnQgPSAnTGlzdCBpdGVtczogJyArIGxpc3QuZGVzY3JpcHRpb247XG4gIGxpc3Rib3guYXBwZW5kKGxkYXRlKTtcbiAgbGRhdGUudGV4dENvbnRlbnQgPSAnRGF0ZTogJyArIGxpc3QuZGF0ZTtcbiAgbGlzdGJveC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbGlzdGJveC5yZW1vdmUodGhpcyk7XG4gICAgdGhlTGlzdC5wb3AodGhpcyk7XG4gICAgXG4gIH0pXG59XG5cblxubGlzdFBhZ2UuY2xhc3NMaXN0LmFkZCgnbGlzdFBhZ2UnKTtcbmxpc3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbGhlYWRlcicpO1xuYnRuMy5jbGFzc0xpc3QuYWRkKCdidG4zJyk7XG5cblxuXG4vLyBhZGQgZWxlbWVudHMgdG8gcGFnZVxuXG5jb250ZW50LmFwcGVuZChsaXN0UGFnZSk7XG5saXN0UGFnZS5hcHBlbmQobGlzdEhlYWRlcik7XG5saXN0UGFnZS5hcHBlbmQoYnRuMyk7XG5cbi8vdGV4dFxuXG5saXN0SGVhZGVyLmlubmVySFRNTCA9IFwiTGlzdHNcIjtcbmJ0bjMudGV4dENvbnRlbnQgPSBcIitOZXcgTGlzdFwiO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlZExpc3REYXRhKCkge1xuICBsZXQgbGRhdGEgPSBnZXRMaXN0RGF0YSgpO1xuICBjb25zb2xlLmxvZyhsZGF0YSk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZGF0YS5sZW5ndGg7IGkrKykge1xuXG4gICAgY29uc3QgbGRhdGFib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsZGF0YVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBjb25zdCBsZGF0YURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbGRhdGFEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGxkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgXG4gIFxuICAgIGxkYXRhYm94LmNsYXNzTGlzdC5hZGQoJ2xib3gnKTtcbiAgXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgXG4gICAgbGlzdFBhZ2UuYXBwZW5kKGxkYXRhYm94KTtcbiAgICBsZGF0YWJveC5hcHBlbmQobGRhdGFUaXRsZSk7XG4gICAgbGRhdGFUaXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZTogJyArIGxkYXRhW2ldLnRpdGxlO1xuICAgIGxkYXRhYm94LmFwcGVuZChsZGF0YURlc2MpO1xuICAgIGxkYXRhRGVzYy50ZXh0Q29udGVudCA9ICdOb3RlIERlc2NyaXB0aW9uOiAnICsgbGRhdGFbaV0uZGVzY3JpcHRpb247XG4gICAgbGRhdGFib3guYXBwZW5kKGxkYXRhRGF0ZSk7XG4gICAgbGRhdGFEYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICcgKyBsZGF0YVtpXS5kYXRlO1xuICAgIGxkYXRhYm94LmFwcGVuZChsZGVsZXRlQnRuKTtcbiAgICBsZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICBsZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBsZGF0YWJveC5yZW1vdmUodGhpcyk7XG4gICAgICB0aGVMaXN0LnBvcCh0aGlzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoZUxpc3QpO1xuICAgICAgXG4gICAgfSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBsaXN0RWxlbWVudHMgfSBmcm9tIFwiLi9saXN0RE9NXCI7XG5cbi8vZ2V0IGVsZW1lbnRzXG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcImFkZFwiXTtcblxuZXhwb3J0IGxldCB0aGVMaXN0ID0gW107XG5cbi8vcHJvamVjdCBjcmVhdGlvblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdCh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSwgXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGF0ZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2F2ZUxpc3REYXRhKCkge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsaXN0cycsIEpTT04uc3RyaW5naWZ5KHRoZUxpc3QpKTtcbn1cblxuZnVuY3Rpb24gbWFrZUxpc3QoKSB7XG4gIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cInRpdGxlXCJdJykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtpZD1cImRlc2NyaXB0aW9uXCJdJykudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiZGF0ZVwiXScpLnZhbHVlO1xuXG4gIGNvbnN0IGxpc3QgPSBjcmVhdGVMaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSk7XG4gIHRoZUxpc3QucHVzaChsaXN0KTtcblxuICBsaXN0RWxlbWVudHMobGlzdCk7XG4gIHNhdmVMaXN0RGF0YSgpO1xuXG59XG5cblxuXG4vL2NyZWF0ZSBwcm9qZWN0c1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICBtYWtlTGlzdCgpO1xufSlcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdERhdGEoKSB7XG4gIGxldCBsZGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlzdHMnKSk7XG4gIHJldHVybiBsZGF0YTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgbm90ZUxpc3QsIGdldE5vdGVEYXRhIH0gZnJvbSAnLi9ub3Rlc09iamVjdHMuanMnO1xuXG5cblxuLy9nZXQgZG9jIGVsZW1lbnRzXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG4vL2NyZWF0ZSBwcm9qZWN0IGVsZW1lbnRzIGFuZCBhZGQgY2xhc3Nlc1xuY29uc3Qgbm90ZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBub3RlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxubm90ZVBhZ2UuY2xhc3NMaXN0LmFkZCgnbm90ZVBhZ2UnKTtcbm5vdGVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbmhlYWRlcicpXG5idG4yLmNsYXNzTGlzdC5hZGQoJ2J0bjInKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdGVFbGVtZW50cyhub3RlKSB7XG4gIGNvbnN0IG5vdGVib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgY29uc3QgbmRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG5kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZVBhZ2UnKTtcblxuICBub3RlYm94LmNsYXNzTGlzdC5hZGQoJ25ib3gnKTtcblxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIG5QYWdlLmFwcGVuZChub3RlYm94KTtcbiAgbm90ZWJveC5hcHBlbmQobnRpdGxlKTtcbiAgbnRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnICsgbm90ZS50aXRsZTtcbiAgbm90ZWJveC5hcHBlbmQobmRlc2MpO1xuICBuZGVzYy50ZXh0Q29udGVudCA9ICdOb3RlIERlc2NyaXB0aW9uOiAnICsgbm90ZS5kZXNjcmlwdGlvbjtcbiAgbm90ZWJveC5hcHBlbmQobmRhdGUpO1xuICBuZGF0ZS50ZXh0Q29udGVudCA9ICdEYXRlOiAnICsgbm90ZS5kYXRlO1xuICBub3RlYm94LmFwcGVuZChkZWxldGVCdG4pO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBub3RlYm94LnJlbW92ZSh0aGlzKTtcbiAgICBub3RlTGlzdC5wb3AodGhpcyk7XG4gICAgXG4gIH0pXG59XG5cblxuLy9hZGQgZWxlbXRucyB0byBwYWdlXG5cbmNvbnRlbnQuYXBwZW5kKG5vdGVQYWdlKTtcbm5vdGVQYWdlLmFwcGVuZChub3RlSGVhZGVyKTtcbm5vdGVQYWdlLmFwcGVuZChidG4yKTtcbi8vIG5vdGVQYWdlLmFwcGVuZChub3RlYm94KTtcblxuLy90ZXh0XG5cbm5vdGVIZWFkZXIuaW5uZXJIVE1MID0gXCJOb3Rlc1wiO1xuYnRuMi50ZXh0Q29udGVudCA9IFwiK05ldyBOb3RlXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVkTm90ZURhdGEoKSB7XG4gIGxldCBuZGF0YSA9IGdldE5vdGVEYXRhKCk7XG4gIGNvbnNvbGUubG9nKG5kYXRhKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBjb25zdCBuZGF0YWJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5kYXRhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IG5kYXRhRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBuZGF0YURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbmRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBcbiAgXG4gICAgbmRhdGFib3guY2xhc3NMaXN0LmFkZCgnbmJveCcpO1xuICBcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBcbiAgICBub3RlUGFnZS5hcHBlbmQobmRhdGFib3gpO1xuICAgIG5kYXRhYm94LmFwcGVuZChuZGF0YVRpdGxlKTtcbiAgICBuZGF0YVRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnICsgbmRhdGFbaV0udGl0bGU7XG4gICAgbmRhdGFib3guYXBwZW5kKG5kYXRhRGVzYyk7XG4gICAgbmRhdGFEZXNjLnRleHRDb250ZW50ID0gJ05vdGUgRGVzY3JpcHRpb246ICcgKyBuZGF0YVtpXS5kZXNjcmlwdGlvbjtcbiAgICBuZGF0YWJveC5hcHBlbmQobmRhdGFEYXRlKTtcbiAgICBuZGF0YURhdGUudGV4dENvbnRlbnQgPSAnRGF0ZTogJyArIG5kYXRhW2ldLmRhdGU7XG4gICAgbmRhdGFib3guYXBwZW5kKG5kZWxldGVCdG4pO1xuICAgIG5kZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgIG5kZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIG5kYXRhYm94LnJlbW92ZSh0aGlzKTtcbiAgICAgIG5vdGVMaXN0LnBvcCh0aGlzKTtcbiAgICAgIGNvbnNvbGUubG9nKG5vdGVMaXN0KTtcbiAgICAgIFxuICAgIH0pXG4gIH1cbn1cblxuXG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBub3RlRWxlbWVudHMgfSBmcm9tIFwiLi9ub3Rlc0RPTVwiO1xuXG4vL2dldCBlbGVtZW50c1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJhZGRcIl07XG5cbmV4cG9ydCBsZXQgbm90ZUxpc3QgPSBbXTtcblxuLy9wcm9qZWN0IGNyZWF0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RlKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLCBcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkYXRlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzYXZlTm90ZURhdGEoKSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ25vdGVzJywgSlNPTi5zdHJpbmdpZnkobm90ZUxpc3QpKTtcbn1cblxuZnVuY3Rpb24gbWFrZU5vdGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cInRpdGxlXCJdJykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtpZD1cImRlc2NyaXB0aW9uXCJdJykudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiZGF0ZVwiXScpLnZhbHVlO1xuXG4gIGNvbnN0IG5vdGUgPSBjcmVhdGVOb3RlKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSk7XG4gIG5vdGVMaXN0LnB1c2gobm90ZSk7XG5cbiAgbm90ZUVsZW1lbnRzKG5vdGUpO1xuICBzYXZlTm90ZURhdGEoKTtcblxufVxuXG5cblxuLy9jcmVhdGUgcHJvamVjdHNcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgbWFrZU5vdGUoKTtcbn0pXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vdGVEYXRhKCkge1xuICBsZXQgbmRhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ25vdGVzJykpO1xuICByZXR1cm4gbmRhdGE7XG59XG5cblxuXG5cblxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgcHJvamVjdExpc3QsIGdldERhdGEgfSBmcm9tICcuL3Byb2plY3RPYmplY3RzLmpzJztcblxuLy9nZXQgZG9jIGVsZW1lbnRzXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG4vL2NyZWF0ZSBwcm9qZWN0IGVsZW1lbnRzIGFuZCBhZGQgY2xhc3Nlc1xuXG5jb25zdCBwcm9QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IG5ld2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxucHJvUGFnZS5jbGFzc0xpc3QuYWRkKCdwcm9QYWdlJyk7XG5wcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BoZWFkZXInKTtcbm5ld2J0bi5jbGFzc0xpc3QuYWRkKCdwcm9CdG4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RFbGVtZW50cyhwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3Rib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgY29uc3QgcGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuXG4gIHByb2plY3Rib3guY2xhc3NMaXN0LmFkZCgncGJveCcpO1xuXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgcHJvUGFnZS5hcHBlbmQocHJvamVjdGJveCk7XG4gIHByb2plY3Rib3guYXBwZW5kKHB0aXRsZSk7XG4gIHB0aXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0OiAnICsgcHJvamVjdC50aXRsZTtcbiAgcHJvamVjdGJveC5hcHBlbmQocGRlc2MpO1xuICBwZGVzYy50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJyArIHByb2plY3QuZGVzY3JpcHRpb247XG4gIHByb2plY3Rib3guYXBwZW5kKHBkYXRlKTtcbiAgcGRhdGUudGV4dENvbnRlbnQgPSAnRGF0ZTogJyArIHByb2plY3QuZGF0ZTtcbiAgcHJvamVjdGJveC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgcHJvamVjdGJveC5yZW1vdmUodGhpcyk7XG4gICAgcHJvamVjdExpc3QucG9wKHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICBcbiAgfSlcbn1cblxuLy9hZGQgZWxlbWVudHMgdG8gcGFnZVxuXG5jb250ZW50LmFwcGVuZChwcm9QYWdlKTtcbnByb1BhZ2UuYXBwZW5kKHByb2plY3RIZWFkZXIpO1xuLy8gcHJvUGFnZS5hcHBlbmQobmV3YnRuKTtcbnByb1BhZ2UuYXBwZW5kKG5ld2J0bik7XG4vLyBwcm9QYWdlLmFwcGVuZChwcm9qZWN0Ym94KTtcblxuLy8gYWRkIHRleHQgcGFydHNcblxucHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xubmV3YnRuLnRleHRDb250ZW50ID0gXCIrTmV3IFByb2plY3RcIjtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZWREYXRhKCkge1xuICBsZXQgZGF0YSA9IGdldERhdGEoKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBjb25zdCBkYXRhYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0YVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBjb25zdCBkYXRhRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkYXRhRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgXG4gIFxuICAgIGRhdGFib3guY2xhc3NMaXN0LmFkZCgncGJveCcpO1xuICBcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBcbiAgICBwcm9QYWdlLmFwcGVuZChkYXRhYm94KTtcbiAgICBkYXRhYm94LmFwcGVuZChkYXRhVGl0bGUpO1xuICAgIGRhdGFUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0OiAnICsgZGF0YVtpXS50aXRsZTtcbiAgICBkYXRhYm94LmFwcGVuZChkYXRhRGVzYyk7XG4gICAgZGF0YURlc2MudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICcgKyBkYXRhW2ldLmRlc2NyaXB0aW9uO1xuICAgIGRhdGFib3guYXBwZW5kKGRhdGFEYXRlKTtcbiAgICBkYXRhRGF0ZS50ZXh0Q29udGVudCA9ICdEYXRlOiAnICsgZGF0YVtpXS5kYXRlO1xuICAgIGRhdGFib3guYXBwZW5kKGRlbGV0ZUJ0bik7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGRhdGFib3gucmVtb3ZlKHRoaXMpO1xuICAgICAgcHJvamVjdExpc3QucG9wKHRoaXMpO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAgICAgXG4gICAgfSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBwcm9qZWN0RWxlbWVudHMgfSBmcm9tIFwiLi9wcm9qZWN0RE9NXCI7XG5cbi8vZ2V0IGVsZW1lbnRzXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJhZGRcIl07XG5jb25zb2xlLmxvZyhmb3JtKTtcbi8vIGNvbnN0IHByb1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvUGFnZScpO1xuXG5leHBvcnQgbGV0IHByb2plY3RMaXN0ID0gW107XG5cbi8vcHJvamVjdCBjcmVhdGlvblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSwgXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGF0ZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2F2ZURhdGEoKSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbn1cblxuZnVuY3Rpb24gbWFrZVByb2plY3QoKSB7XG4gIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cInRpdGxlXCJdJykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtpZD1cImRlc2NyaXB0aW9uXCJdJykudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiZGF0ZVwiXScpLnZhbHVlO1xuXG4gIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSk7XG4gIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG5cbiAgcHJvamVjdEVsZW1lbnRzKHByb2plY3QpO1xuICBzYXZlRGF0YSgpO1xuXG59XG5cblxuXG4vL2NyZWF0ZSBwcm9qZWN0c1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICBtYWtlUHJvamVjdCgpO1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG59KVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKCkge1xuICBsZXQgZGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLy8gZ2V0RGF0YSgpO1xuXG4vLyBjb25zb2xlLmxvZyhnZXREYXRhKCkpO1xuXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vL2dlbmVyYXRlIHRoZSBpbmRpdmlkdWFsIHNlY3Rpb25zXG5cbmltcG9ydCAnLi9wcm9qZWN0RE9NLmpzJztcbmltcG9ydCAnLi9ub3Rlc0RPTS5qcyc7XG5pbXBvcnQgJy4vbGlzdERPTS5qcyc7XG5cbi8vZ2V0IG9iamVjdHMgZm9yIGVhY2ggc2VjdGlvblxuXG5pbXBvcnQgeyBzdG9yZWREYXRhIH0gZnJvbSAnLi9wcm9qZWN0RE9NLmpzJztcbmltcG9ydCB7IHN0b3JlZE5vdGVEYXRhIH0gZnJvbSAnLi9ub3Rlc0RPTS5qcyc7XG5pbXBvcnQgeyBzdG9yZWRMaXN0RGF0YSB9IGZyb20gJy4vbGlzdERPTS5qcyc7XG5cbi8vZ2V0IGdlbmVyYWwgZWxlbWVudHNcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBwcm9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvQnRuJyk7XG5jb25zdCBidG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bjInKTtcbmNvbnN0IGJ0bjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuMycpO1xuY29uc3QgY2xvc2VidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcImFkZFwiXTtcbmNvbnN0IGNob2ljZXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNjaG9pY2VzJyk7XG5cbi8vdGFiIHNlbGVjdGlvbiBmcm9tIGRvbVxuXG5jb25zdCBwcm90YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdGFiJyk7XG5jb25zdCBub3RldGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGV0YWInKTtcbmNvbnN0IGxpc3R0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdHRhYicpO1xuXG4vL3BhZ2Ugc2VsZWN0aW9uXG5cbmNvbnN0IHByb1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvUGFnZScpO1xuY29uc3Qgbm90ZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZVBhZ2UnKTtcbmNvbnN0IGxpc3RQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RQYWdlJyk7XG5cbi8vIGRpc3BsYXkgY2hvaWNlcyBvZiB0YWJcblxucHJvdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHByb1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBub3RlUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGxpc3RQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pXG5cbm5vdGV0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgcHJvUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIG5vdGVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGxpc3RQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pXG5cbmxpc3R0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgcHJvUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIG5vdGVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbGlzdFBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5cbi8vbW9kYWwgZm9yIGVhY2ggdGFiXG5cbnByb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBjaG9pY2VzLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IFRpdGxlOlwiO1xufSlcblxuYnRuMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBjaG9pY2VzLnRleHRDb250ZW50ID0gXCJOb3RlIFRpdGxlOlwiO1xufSlcblxuYnRuMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBjaG9pY2VzLnRleHRDb250ZW50ID0gXCJMaXN0IFRpdGxlOlwiO1xufSlcblxuY2xvc2VidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSlcblxuLy9vYmplY3QgY3JlYXRpb24gZm9yIGVhY2ggdGFiXG5cblxuc3RvcmVkRGF0YSgpO1xuc3RvcmVkTm90ZURhdGEoKTtcbnN0b3JlZExpc3REYXRhKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9