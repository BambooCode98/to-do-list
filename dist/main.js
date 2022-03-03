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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody{\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  /* border: 1px solid blue; */\n}\n\n  .head{\n    /* border: 2px red solid; */\n    padding: 10px;\n    height: 20%;\n    border-bottom: black 3px solid;\n    background-color: rgb(57, 145, 57);\n  }\n\n  .below-header{\n    display: flex;\n    /* border: 2px solid green; */\n    height: 85.125vh;\n  }\n\n    .tab-list{\n      /* border: 2px red solid; */\n      border-right: black 3px solid;\n      width: 15rem;\n      padding-left: 5px;\n      background-color: rgb(145, 175, 92);\n    }\n\n      h3{\n        font-size: 25px;\n        border-bottom: 2px solid black;\n      }\n\n      h3:hover{\n        background-color: rgba(190, 190, 190, 0.555);\n        cursor: pointer;\n        transform: scale(1.03, 1.03);\n      }\n\n      /* .projects-tab{\n\n      } */\n\n    .content-body{\n      width: 100%;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      padding: 10px;\n    }\n\n      .proPage{\n        display: flex;\n        flex-direction: column;\n      }\n\n        .pheader, .nheader, .lheader{\n          border-bottom: black 4px solid;\n        }\n\n        .proBtn, .btn2, .btn3{\n          position: relative;\n          top: -83px;\n          left: 135px;\n          border: 2px black solid;\n          border-radius: 3px;\n          background-color: rgb(216, 187, 108);\n          width: 65px;\n          height: 55px;\n        }\n\n        .proBtn:hover{\n          cursor: pointer;\n          background-color: rgb(112, 97, 55);\n        }\n\n      .pbox, .nbox, .lbox{\n        border: 2px rgb(103, 130, 170) solid;\n        border-radius: 5px;\n        background-color: rgb(76, 240, 232);\n        padding: 4px;\n        height: 80%;\n        width: 80%;\n        margin: 5px;\n      }\n\n      .notePage{\n        display: none;\n      }\n\n      .nbox{\n        background-color: #da6767de;\n      }\n\n      .listPage{\n        display: none;\n      }\n\n      .lbox{\n        background-color: #d4d250e0;\n      }\n\n      /* everything below is for the modals */\n      \n      .project, .note, .list{\n        display: none;\n        z-index: 1;\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(2px);\n        padding: 5% 15%;\n      }\n      \n      .modal-content{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: #fefefe;\n        width: 70%;\n        height: 70%;\n        border: 5px rgb(88, 86, 86) solid;\n        border-radius: 25px;\n        /* overflow-y: scroll;\n        overflow-x: none; */\n        overflow: auto;\n        scrollbar-width: none;\n      }\n\n      .modal-content::-webkit-scrollbar{\n        display: none;\n      }\n      \n      form{\n        font-size: 25px;\n      }\n      \n      #choices, #description, #date{\n        margin: 5px;\n      }\n\n      #choices{\n        margin-top: 25px;\n        padding-top: 10%;\n      }\n      \n      input{\n        padding: 5px;\n        margin: 5px;\n      }\n\n      textarea{\n        padding: 5px;\n      }\n      \n      input:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      textarea:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      .close-modal{\n        position: relative;\n        left: 250px;\n        top: -200px;\n        font-size: 50px;\n      }\n      \n      .close-modal:hover{\n        color: rgb(117, 111, 111);\n        cursor: pointer;\n      }\n\n      #buttonModal{\n        position: relative;\n        top: 90%;\n        left: 60%;\n        border: 3px rgb(52, 52, 116) solid;\n        border-radius: 5px;\n        background-color: rgb(172, 172, 206);\n        margin-bottom: 10px;\n        width: 35%;\n        height: 15%;\n      }\n      \n      #buttonModal:hover{\n        background-color: rgb(103, 199, 140);\n        cursor: pointer;\n        transform: translate3d(180, 90, 90);\n      }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4DAA4D;AAC9D;;AAEA;EACE,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,4BAA4B;AAC9B;;EAEE;IACE,2BAA2B;IAC3B,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,kCAAkC;EACpC;;EAEA;IACE,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;EAClB;;IAEE;MACE,2BAA2B;MAC3B,6BAA6B;MAC7B,YAAY;MACZ,iBAAiB;MACjB,mCAAmC;IACrC;;MAEE;QACE,eAAe;QACf,8BAA8B;MAChC;;MAEA;QACE,4CAA4C;QAC5C,eAAe;QACf,4BAA4B;MAC9B;;MAEA;;SAEG;;IAEL;MACE,WAAW;MACX,kBAAkB;MAClB,kBAAkB;MAClB,aAAa;IACf;;MAEE;QACE,aAAa;QACb,sBAAsB;MACxB;;QAEE;UACE,8BAA8B;QAChC;;QAEA;UACE,kBAAkB;UAClB,UAAU;UACV,WAAW;UACX,uBAAuB;UACvB,kBAAkB;UAClB,oCAAoC;UACpC,WAAW;UACX,YAAY;QACd;;QAEA;UACE,eAAe;UACf,kCAAkC;QACpC;;MAEF;QACE,oCAAoC;QACpC,kBAAkB;QAClB,mCAAmC;QACnC,YAAY;QACZ,WAAW;QACX,UAAU;QACV,WAAW;MACb;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,2BAA2B;MAC7B;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,2BAA2B;MAC7B;;MAEA,uCAAuC;;MAEvC;QACE,aAAa;QACb,UAAU;QACV,eAAe;QACf,OAAO;QACP,MAAM;QACN,WAAW;QACX,YAAY;QACZ,oCAAoC;QACpC,0BAA0B;QAC1B,eAAe;MACjB;;MAEA;QACE,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,yBAAyB;QACzB,UAAU;QACV,WAAW;QACX,iCAAiC;QACjC,mBAAmB;QACnB;2BACmB;QACnB,cAAc;QACd,qBAAqB;MACvB;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,eAAe;MACjB;;MAEA;QACE,WAAW;MACb;;MAEA;QACE,gBAAgB;QAChB,gBAAgB;MAClB;;MAEA;QACE,YAAY;QACZ,WAAW;MACb;;MAEA;QACE,YAAY;MACd;;MAEA;QACE,oCAAoC;MACtC;;MAEA;QACE,oCAAoC;MACtC;;MAEA;QACE,kBAAkB;QAClB,WAAW;QACX,WAAW;QACX,eAAe;MACjB;;MAEA;QACE,yBAAyB;QACzB,eAAe;MACjB;;MAEA;QACE,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,kCAAkC;QAClC,kBAAkB;QAClB,oCAAoC;QACpC,mBAAmB;QACnB,UAAU;QACV,WAAW;MACb;;MAEA;QACE,oCAAoC;QACpC,eAAe;QACf,mCAAmC;MACrC","sourcesContent":["*{\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody{\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  /* border: 1px solid blue; */\n}\n\n  .head{\n    /* border: 2px red solid; */\n    padding: 10px;\n    height: 20%;\n    border-bottom: black 3px solid;\n    background-color: rgb(57, 145, 57);\n  }\n\n  .below-header{\n    display: flex;\n    /* border: 2px solid green; */\n    height: 85.125vh;\n  }\n\n    .tab-list{\n      /* border: 2px red solid; */\n      border-right: black 3px solid;\n      width: 15rem;\n      padding-left: 5px;\n      background-color: rgb(145, 175, 92);\n    }\n\n      h3{\n        font-size: 25px;\n        border-bottom: 2px solid black;\n      }\n\n      h3:hover{\n        background-color: rgba(190, 190, 190, 0.555);\n        cursor: pointer;\n        transform: scale(1.03, 1.03);\n      }\n\n      /* .projects-tab{\n\n      } */\n\n    .content-body{\n      width: 100%;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      padding: 10px;\n    }\n\n      .proPage{\n        display: flex;\n        flex-direction: column;\n      }\n\n        .pheader, .nheader, .lheader{\n          border-bottom: black 4px solid;\n        }\n\n        .proBtn, .btn2, .btn3{\n          position: relative;\n          top: -83px;\n          left: 135px;\n          border: 2px black solid;\n          border-radius: 3px;\n          background-color: rgb(216, 187, 108);\n          width: 65px;\n          height: 55px;\n        }\n\n        .proBtn:hover{\n          cursor: pointer;\n          background-color: rgb(112, 97, 55);\n        }\n\n      .pbox, .nbox, .lbox{\n        border: 2px rgb(103, 130, 170) solid;\n        border-radius: 5px;\n        background-color: rgb(76, 240, 232);\n        padding: 4px;\n        height: 80%;\n        width: 80%;\n        margin: 5px;\n      }\n\n      .notePage{\n        display: none;\n      }\n\n      .nbox{\n        background-color: #da6767de;\n      }\n\n      .listPage{\n        display: none;\n      }\n\n      .lbox{\n        background-color: #d4d250e0;\n      }\n\n      /* everything below is for the modals */\n      \n      .project, .note, .list{\n        display: none;\n        z-index: 1;\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(2px);\n        padding: 5% 15%;\n      }\n      \n      .modal-content{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: #fefefe;\n        width: 70%;\n        height: 70%;\n        border: 5px rgb(88, 86, 86) solid;\n        border-radius: 25px;\n        /* overflow-y: scroll;\n        overflow-x: none; */\n        overflow: auto;\n        scrollbar-width: none;\n      }\n\n      .modal-content::-webkit-scrollbar{\n        display: none;\n      }\n      \n      form{\n        font-size: 25px;\n      }\n      \n      #choices, #description, #date{\n        margin: 5px;\n      }\n\n      #choices{\n        margin-top: 25px;\n        padding-top: 10%;\n      }\n      \n      input{\n        padding: 5px;\n        margin: 5px;\n      }\n\n      textarea{\n        padding: 5px;\n      }\n      \n      input:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      textarea:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      .close-modal{\n        position: relative;\n        left: 250px;\n        top: -200px;\n        font-size: 50px;\n      }\n      \n      .close-modal:hover{\n        color: rgb(117, 111, 111);\n        cursor: pointer;\n      }\n\n      #buttonModal{\n        position: relative;\n        top: 90%;\n        left: 60%;\n        border: 3px rgb(52, 52, 116) solid;\n        border-radius: 5px;\n        background-color: rgb(172, 172, 206);\n        margin-bottom: 10px;\n        width: 35%;\n        height: 15%;\n      }\n      \n      #buttonModal:hover{\n        background-color: rgb(103, 199, 140);\n        cursor: pointer;\n        transform: translate3d(180, 90, 90);\n      }"],"sourceRoot":""}]);
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

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formCreater": () => (/* binding */ formCreater)
/* harmony export */ });


//form templates

// let id = "";
const content = document.querySelector('.content-body');

function formCreater(id) {

  const modal = document.createElement("div");
  const modalContent = document.createElement("div");
  const closebtn = document.createElement('span');
  const form = document.createElement('form');
  const input1 = document.createElement('input');
  const textArea = document.createElement('textarea');
  const input3 = document.createElement('input');
  const choices = document.createElement('p');
  const description = document.createElement('p');
  const date = document.createElement('p');
  const lb1 = document.createElement('br');
  const lb2 = document.createElement('br');
  const lb3 = document.createElement('br');
  const button = document.createElement('button');

  modal.classList.add(id);
  modalContent.classList.add('modal-content');
  closebtn.classList.add('close-modal');
  form.setAttribute("id", id);
  input1.setAttribute("id", "title");
  textArea.setAttribute("id", "descriptionBox");
  textArea.setAttribute("form", id);
  textArea.setAttribute("rows", "4");
  textArea.setAttribute("columns", "25");
  input3.setAttribute("id", "date");
  choices.setAttribute("id", "choices");
  description.setAttribute("id", "description");
  date.setAttribute("id", "date");
  button.setAttribute("id", "buttonModal");

  content.append(modal);
  modal.append(modalContent);
  modalContent.append(closebtn);
  modalContent.append(form);
  form.append(choices);
  form.append(input1);
  form.append(lb1);
  form.append(description);
  form.append(textArea);
  form.append(lb2);
  form.append(date);
  form.append(input3);
  form.append(lb3);
  form.append(button);

  closebtn.textContent = "X";
  description.textContent = "Description:";
  date.textContent = "Date:";
  button.textContent = "Add";

  function closeModals(id) {
    id.style.display = "none";
  }

  closebtn.addEventListener('click', closeModals)
}


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
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");






//get doc elements

const content = document.querySelector('#content');
const lmodal = document.querySelector('.list');


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

  lmodal.style.display = 'none';
  ltitle.classList.add('title');
  ldesc.classList.add('desc');
  ldate.classList.add('date');
  deleteBtn.classList.add('delete');

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
  
    lmodal.style.display = 'none';
    ldataTitle.classList.add('title');
    ldataDesc.classList.add('desc');
    ldataDate.classList.add('date');
    ldeleteBtn.classList.add('delete');
  
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
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");





(0,_forms_js__WEBPACK_IMPORTED_MODULE_1__.formCreater)("list");

//get elements

const form = document.forms["list"];

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
  const description = form.querySelector('textarea[id="descriptionBox"]').value;
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
const nmodal = document.querySelector('.note');


//create project elements and add classes
const notePage = document.createElement('div');
const btn2 = document.createElement('button');
// const modal = document.querySelector('.modal');
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

  nmodal.style.display = 'none';
  ntitle.classList.add('title');
  ndesc.classList.add('desc');
  ndate.classList.add('date');
  deleteBtn.classList.add('delete');

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
    ndataTitle.classList.add('title');
    ndataDesc.classList.add('desc');
    ndataDate.classList.add('date');
    ndeleteBtn.classList.add('delete');
  
    nmodal.style.display = 'none';
  
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
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");






(0,_forms_js__WEBPACK_IMPORTED_MODULE_1__.formCreater)("note")
//get elements

const form = document.forms["note"];

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
  const description = form.querySelector('textarea[id="descriptionBox"]').value;
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
const pmodal = document.querySelector('.project');


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
  ptitle.classList.add('title');
  pdesc.classList.add('desc');
  pdate.classList.add('date');
  deleteBtn.classList.add('delete');

  pmodal.style.display = 'none';

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
  
    pmodal.style.display = 'none';
    dataTitle.classList.add('title');
    dataDesc.classList.add('desc');
    dataDate.classList.add('date');
    deleteBtn.classList.add('delete');
  
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
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");





(0,_forms_js__WEBPACK_IMPORTED_MODULE_1__.formCreater)("project");

//get elements

const form = document.forms["project"];
// const form = document.querySelector('#project');
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
  const description = form.querySelector('textarea[id="descriptionBox"]').value;
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
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
/* harmony import */ var _projectDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDOM.js */ "./src/projectDOM.js");
/* harmony import */ var _notesDOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notesDOM.js */ "./src/notesDOM.js");
/* harmony import */ var _listDOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listDOM.js */ "./src/listDOM.js");




//generate the individual sections





//get objects for each section





//get general elements
const pmodal = document.querySelector('.project');
const nmodal = document.querySelector('.note');
const lmodal = document.querySelector('.list');
const proBtn = document.querySelector('.proBtn');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const closebtns = document.querySelector('.close-modal');
const pform = document.forms["project"];
const pchoice = pform.querySelector('#choices');
const nform = document.forms["note"];
const nchoice = nform.querySelector('#choices');
const lform = document.forms["list"];
const lchoice = lform.querySelector('#choices');
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
  pmodal.style.display = "block";
  pchoice.textContent = "Project Title:";
})

btn2.addEventListener('click', function() {
  nmodal.style.display = "block";
  nchoice.textContent = "Note Title:";
})

btn3.addEventListener('click', function() {
  lmodal.style.display = "block";
  lchoice.textContent = "List Title:";
})

closebtns.addEventListener('click', function() {
  pmodal.style.display = "none";
  nmodal.style.display = "none";
  lmodal.style.display = "none";
})

//object creation for each tab


;(0,_projectDOM_js__WEBPACK_IMPORTED_MODULE_2__.storedData)();
(0,_notesDOM_js__WEBPACK_IMPORTED_MODULE_3__.storedNoteData)();
(0,_listDOM_js__WEBPACK_IMPORTED_MODULE_4__.storedListData)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGlzdERPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpc3RPYmplY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbm90ZXNET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ub3Rlc09iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0RE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHl7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4gIC5oZWFke1xcbiAgICAvKiBib3JkZXI6IDJweCByZWQgc29saWQ7ICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBib3JkZXItYm90dG9tOiBibGFjayAzcHggc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgMTQ1LCA1Nyk7XFxuICB9XFxuXFxuICAuYmVsb3ctaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbjsgKi9cXG4gICAgaGVpZ2h0OiA4NS4xMjV2aDtcXG4gIH1cXG5cXG4gICAgLnRhYi1saXN0e1xcbiAgICAgIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDsgKi9cXG4gICAgICBib3JkZXItcmlnaHQ6IGJsYWNrIDNweCBzb2xpZDtcXG4gICAgICB3aWR0aDogMTVyZW07XFxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NSwgMTc1LCA5Mik7XFxuICAgIH1cXG5cXG4gICAgICBoM3tcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgICB9XFxuXFxuICAgICAgaDM6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMTkwLCAxOTAsIDAuNTU1KTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMywgMS4wMyk7XFxuICAgICAgfVxcblxcbiAgICAgIC8qIC5wcm9qZWN0cy10YWJ7XFxuXFxuICAgICAgfSAqL1xcblxcbiAgICAuY29udGVudC1ib2R5e1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcblxcbiAgICAgIC5wcm9QYWdle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgfVxcblxcbiAgICAgICAgLnBoZWFkZXIsIC5uaGVhZGVyLCAubGhlYWRlcntcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgNHB4IHNvbGlkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb0J0biwgLmJ0bjIsIC5idG4ze1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIHRvcDogLTgzcHg7XFxuICAgICAgICAgIGxlZnQ6IDEzNXB4O1xcbiAgICAgICAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAxODcsIDEwOCk7XFxuICAgICAgICAgIHdpZHRoOiA2NXB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDU1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvQnRuOmhvdmVye1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDk3LCA1NSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgLnBib3gsIC5uYm94LCAubGJveHtcXG4gICAgICAgIGJvcmRlcjogMnB4IHJnYigxMDMsIDEzMCwgMTcwKSBzb2xpZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NiwgMjQwLCAyMzIpO1xcbiAgICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5ub3RlUGFnZXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC5uYm94e1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RhNjc2N2RlO1xcbiAgICAgIH1cXG5cXG4gICAgICAubGlzdFBhZ2V7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAubGJveHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyNTBlMDtcXG4gICAgICB9XFxuXFxuICAgICAgLyogZXZlcnl0aGluZyBiZWxvdyBpcyBmb3IgdGhlIG1vZGFscyAqL1xcbiAgICAgIFxcbiAgICAgIC5wcm9qZWN0LCAubm90ZSwgLmxpc3R7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICAgICAgcGFkZGluZzogNSUgMTUlO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAubW9kYWwtY29udGVudHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgYm9yZGVyOiA1cHggcmdiKDg4LCA4NiwgODYpIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgICAgIC8qIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIG92ZXJmbG93LXg6IG5vbmU7ICovXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLm1vZGFsLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgZm9ybXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgI2Nob2ljZXMsICNkZXNjcmlwdGlvbiwgI2RhdGV7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgI2Nob2ljZXN7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaW5wdXR7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgdGV4dGFyZWF7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGlucHV0OmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgIH1cXG5cXG4gICAgICB0ZXh0YXJlYTpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICB9XFxuXFxuICAgICAgLmNsb3NlLW1vZGFse1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGVmdDogMjUwcHg7XFxuICAgICAgICB0b3A6IC0yMDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgLmNsb3NlLW1vZGFsOmhvdmVye1xcbiAgICAgICAgY29sb3I6IHJnYigxMTcsIDExMSwgMTExKTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgI2J1dHRvbk1vZGFse1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiA5MCU7XFxuICAgICAgICBsZWZ0OiA2MCU7XFxuICAgICAgICBib3JkZXI6IDNweCByZ2IoNTIsIDUyLCAxMTYpIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MiwgMTcyLCAyMDYpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIHdpZHRoOiAzNSU7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgI2J1dHRvbk1vZGFsOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTk5LCAxNDApO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxODAsIDkwLCA5MCk7XFxuICAgICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0VBRUU7SUFDRSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQkFBZ0I7RUFDbEI7O0lBRUU7TUFDRSwyQkFBMkI7TUFDM0IsNkJBQTZCO01BQzdCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsbUNBQW1DO0lBQ3JDOztNQUVFO1FBQ0UsZUFBZTtRQUNmLDhCQUE4QjtNQUNoQzs7TUFFQTtRQUNFLDRDQUE0QztRQUM1QyxlQUFlO1FBQ2YsNEJBQTRCO01BQzlCOztNQUVBOztTQUVHOztJQUVMO01BQ0UsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsYUFBYTtJQUNmOztNQUVFO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtNQUN4Qjs7UUFFRTtVQUNFLDhCQUE4QjtRQUNoQzs7UUFFQTtVQUNFLGtCQUFrQjtVQUNsQixVQUFVO1VBQ1YsV0FBVztVQUNYLHVCQUF1QjtVQUN2QixrQkFBa0I7VUFDbEIsb0NBQW9DO1VBQ3BDLFdBQVc7VUFDWCxZQUFZO1FBQ2Q7O1FBRUE7VUFDRSxlQUFlO1VBQ2Ysa0NBQWtDO1FBQ3BDOztNQUVGO1FBQ0Usb0NBQW9DO1FBQ3BDLGtCQUFrQjtRQUNsQixtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLFdBQVc7UUFDWCxVQUFVO1FBQ1YsV0FBVztNQUNiOztNQUVBO1FBQ0UsYUFBYTtNQUNmOztNQUVBO1FBQ0UsMkJBQTJCO01BQzdCOztNQUVBO1FBQ0UsYUFBYTtNQUNmOztNQUVBO1FBQ0UsMkJBQTJCO01BQzdCOztNQUVBLHVDQUF1Qzs7TUFFdkM7UUFDRSxhQUFhO1FBQ2IsVUFBVTtRQUNWLGVBQWU7UUFDZixPQUFPO1FBQ1AsTUFBTTtRQUNOLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0NBQW9DO1FBQ3BDLDBCQUEwQjtRQUMxQixlQUFlO01BQ2pCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsaUNBQWlDO1FBQ2pDLG1CQUFtQjtRQUNuQjsyQkFDbUI7UUFDbkIsY0FBYztRQUNkLHFCQUFxQjtNQUN2Qjs7TUFFQTtRQUNFLGFBQWE7TUFDZjs7TUFFQTtRQUNFLGVBQWU7TUFDakI7O01BRUE7UUFDRSxXQUFXO01BQ2I7O01BRUE7UUFDRSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO01BQ2xCOztNQUVBO1FBQ0UsWUFBWTtRQUNaLFdBQVc7TUFDYjs7TUFFQTtRQUNFLFlBQVk7TUFDZDs7TUFFQTtRQUNFLG9DQUFvQztNQUN0Qzs7TUFFQTtRQUNFLG9DQUFvQztNQUN0Qzs7TUFFQTtRQUNFLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsV0FBVztRQUNYLGVBQWU7TUFDakI7O01BRUE7UUFDRSx5QkFBeUI7UUFDekIsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsb0NBQW9DO1FBQ3BDLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsV0FBVztNQUNiOztNQUVBO1FBQ0Usb0NBQW9DO1FBQ3BDLGVBQWU7UUFDZixtQ0FBbUM7TUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keXtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbiAgLmhlYWR7XFxuICAgIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDsgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGJvcmRlci1ib3R0b206IGJsYWNrIDNweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAxNDUsIDU3KTtcXG4gIH1cXG5cXG4gIC5iZWxvdy1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgICBoZWlnaHQ6IDg1LjEyNXZoO1xcbiAgfVxcblxcbiAgICAudGFiLWxpc3R7XFxuICAgICAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xcbiAgICAgIGJvcmRlci1yaWdodDogYmxhY2sgM3B4IHNvbGlkO1xcbiAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxNzUsIDkyKTtcXG4gICAgfVxcblxcbiAgICAgIGgze1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIH1cXG5cXG4gICAgICBoMzpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAxOTAsIDE5MCwgMC41NTUpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzLCAxLjAzKTtcXG4gICAgICB9XFxuXFxuICAgICAgLyogLnByb2plY3RzLXRhYntcXG5cXG4gICAgICB9ICovXFxuXFxuICAgIC5jb250ZW50LWJvZHl7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICAgLnByb1BhZ2V7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB9XFxuXFxuICAgICAgICAucGhlYWRlciwgLm5oZWFkZXIsIC5saGVhZGVye1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBibGFjayA0cHggc29saWQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvQnRuLCAuYnRuMiwgLmJ0bjN7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgdG9wOiAtODNweDtcXG4gICAgICAgICAgbGVmdDogMTM1cHg7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDE4NywgMTA4KTtcXG4gICAgICAgICAgd2lkdGg6IDY1cHg7XFxuICAgICAgICAgIGhlaWdodDogNTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9CdG46aG92ZXJ7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgOTcsIDU1KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAucGJveCwgLm5ib3gsIC5sYm94e1xcbiAgICAgICAgYm9yZGVyOiAycHggcmdiKDEwMywgMTMwLCAxNzApIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCAyNDAsIDIzMik7XFxuICAgICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgLm5vdGVQYWdle1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLm5ib3h7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGE2NzY3ZGU7XFxuICAgICAgfVxcblxcbiAgICAgIC5saXN0UGFnZXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC5sYm94e1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDI1MGUwO1xcbiAgICAgIH1cXG5cXG4gICAgICAvKiBldmVyeXRoaW5nIGJlbG93IGlzIGZvciB0aGUgbW9kYWxzICovXFxuICAgICAgXFxuICAgICAgLnByb2plY3QsIC5ub3RlLCAubGlzdHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgICAgICBwYWRkaW5nOiA1JSAxNSU7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIC5tb2RhbC1jb250ZW50e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICAgICAgaGVpZ2h0OiA3MCU7XFxuICAgICAgICBib3JkZXI6IDVweCByZ2IoODgsIDg2LCA4Nikgc29saWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICAgICAgLyogb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgICAgb3ZlcmZsb3cteDogbm9uZTsgKi9cXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAubW9kYWwtY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBmb3Jte1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAjY2hvaWNlcywgI2Rlc2NyaXB0aW9uLCAjZGF0ZXtcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAjY2hvaWNlc3tcXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBpbnB1dHtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgIH1cXG5cXG4gICAgICB0ZXh0YXJlYXtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaW5wdXQ6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgfVxcblxcbiAgICAgIHRleHRhcmVhOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2xvc2UtbW9kYWx7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBsZWZ0OiAyNTBweDtcXG4gICAgICAgIHRvcDogLTIwMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAuY2xvc2UtbW9kYWw6aG92ZXJ7XFxuICAgICAgICBjb2xvcjogcmdiKDExNywgMTExLCAxMTEpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAjYnV0dG9uTW9kYWx7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IDkwJTtcXG4gICAgICAgIGxlZnQ6IDYwJTtcXG4gICAgICAgIGJvcmRlcjogM3B4IHJnYig1MiwgNTIsIDExNikgc29saWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAxNzIsIDIwNik7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDM1JTtcXG4gICAgICAgIGhlaWdodDogMTUlO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAjYnV0dG9uTW9kYWw6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxOTksIDE0MCk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDE4MCwgOTAsIDkwKTtcXG4gICAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCc7XG5cbi8vZm9ybSB0ZW1wbGF0ZXNcblxuLy8gbGV0IGlkID0gXCJcIjtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib2R5Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtQ3JlYXRlcihpZCkge1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2xvc2VidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgY2hvaWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGxiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gIGNvbnN0IGxiMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gIGNvbnN0IGxiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoaWQpO1xuICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuICBjbG9zZWJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1tb2RhbCcpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgaW5wdXQxLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25Cb3hcIik7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcImZvcm1cIiwgaWQpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNFwiKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiY29sdW1uc1wiLCBcIjI1XCIpO1xuICBpbnB1dDMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlXCIpO1xuICBjaG9pY2VzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hvaWNlc1wiKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVcIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvbk1vZGFsXCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kKG1vZGFsKTtcbiAgbW9kYWwuYXBwZW5kKG1vZGFsQ29udGVudCk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmQoY2xvc2VidG4pO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kKGZvcm0pO1xuICBmb3JtLmFwcGVuZChjaG9pY2VzKTtcbiAgZm9ybS5hcHBlbmQoaW5wdXQxKTtcbiAgZm9ybS5hcHBlbmQobGIxKTtcbiAgZm9ybS5hcHBlbmQoZGVzY3JpcHRpb24pO1xuICBmb3JtLmFwcGVuZCh0ZXh0QXJlYSk7XG4gIGZvcm0uYXBwZW5kKGxiMik7XG4gIGZvcm0uYXBwZW5kKGRhdGUpO1xuICBmb3JtLmFwcGVuZChpbnB1dDMpO1xuICBmb3JtLmFwcGVuZChsYjMpO1xuICBmb3JtLmFwcGVuZChidXR0b24pO1xuXG4gIGNsb3NlYnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgZGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZTpcIjtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICBmdW5jdGlvbiBjbG9zZU1vZGFscyhpZCkge1xuICAgIGlkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGNsb3NlYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbHMpXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHRoZUxpc3QsIGdldExpc3REYXRhIH0gZnJvbSAnLi9saXN0T2JqZWN0cy5qcyc7XG5pbXBvcnQgeyBmb3JtQ3JlYXRlciB9IGZyb20gJy4vZm9ybXMuanMnO1xuXG5cbi8vZ2V0IGRvYyBlbGVtZW50c1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IGxtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG5cblxuLy9jcmVhdGUgcHJvamVjdCBlbGVtZW50cyBhbmQgYWRkIGNsYXNzZXNcbmNvbnN0IGxpc3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBidG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgbGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RFbGVtZW50cyhsaXN0KSB7XG4gIGNvbnN0IGxpc3Rib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgY29uc3QgbGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGxkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuXG4gIGxpc3Rib3guY2xhc3NMaXN0LmFkZCgnbGJveCcpO1xuXG4gIGxtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBsdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgbGRlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICBsZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcblxuICBsaXN0UGFnZS5hcHBlbmQobGlzdGJveCk7XG4gIGxpc3Rib3guYXBwZW5kKGx0aXRsZSk7XG4gIGx0aXRsZS50ZXh0Q29udGVudCA9ICdMaXN0OiAnICsgbGlzdC50aXRsZTtcbiAgbGlzdGJveC5hcHBlbmQobGRlc2MpO1xuICBsZGVzYy50ZXh0Q29udGVudCA9ICdMaXN0IGl0ZW1zOiAnICsgbGlzdC5kZXNjcmlwdGlvbjtcbiAgbGlzdGJveC5hcHBlbmQobGRhdGUpO1xuICBsZGF0ZS50ZXh0Q29udGVudCA9ICdEYXRlOiAnICsgbGlzdC5kYXRlO1xuICBsaXN0Ym94LmFwcGVuZChkZWxldGVCdG4pO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBsaXN0Ym94LnJlbW92ZSh0aGlzKTtcbiAgICB0aGVMaXN0LnBvcCh0aGlzKTtcbiAgICBcbiAgfSlcbn1cblxuXG5saXN0UGFnZS5jbGFzc0xpc3QuYWRkKCdsaXN0UGFnZScpO1xubGlzdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdsaGVhZGVyJyk7XG5idG4zLmNsYXNzTGlzdC5hZGQoJ2J0bjMnKTtcblxuXG5cbi8vIGFkZCBlbGVtZW50cyB0byBwYWdlXG5cbmNvbnRlbnQuYXBwZW5kKGxpc3RQYWdlKTtcbmxpc3RQYWdlLmFwcGVuZChsaXN0SGVhZGVyKTtcbmxpc3RQYWdlLmFwcGVuZChidG4zKTtcblxuLy90ZXh0XG5cbmxpc3RIZWFkZXIuaW5uZXJIVE1MID0gXCJMaXN0c1wiO1xuYnRuMy50ZXh0Q29udGVudCA9IFwiK05ldyBMaXN0XCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVkTGlzdERhdGEoKSB7XG4gIGxldCBsZGF0YSA9IGdldExpc3REYXRhKCk7XG4gIGNvbnNvbGUubG9nKGxkYXRhKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxkYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBjb25zdCBsZGF0YWJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxkYXRhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IGxkYXRhRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBsZGF0YURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBcbiAgXG4gICAgbGRhdGFib3guY2xhc3NMaXN0LmFkZCgnbGJveCcpO1xuICBcbiAgICBsbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsZGF0YVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgbGRhdGFEZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcbiAgICBsZGF0YURhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgIGxkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gIFxuICAgIGxpc3RQYWdlLmFwcGVuZChsZGF0YWJveCk7XG4gICAgbGRhdGFib3guYXBwZW5kKGxkYXRhVGl0bGUpO1xuICAgIGxkYXRhVGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGU6ICcgKyBsZGF0YVtpXS50aXRsZTtcbiAgICBsZGF0YWJveC5hcHBlbmQobGRhdGFEZXNjKTtcbiAgICBsZGF0YURlc2MudGV4dENvbnRlbnQgPSAnTm90ZSBEZXNjcmlwdGlvbjogJyArIGxkYXRhW2ldLmRlc2NyaXB0aW9uO1xuICAgIGxkYXRhYm94LmFwcGVuZChsZGF0YURhdGUpO1xuICAgIGxkYXRhRGF0ZS50ZXh0Q29udGVudCA9ICdEYXRlOiAnICsgbGRhdGFbaV0uZGF0ZTtcbiAgICBsZGF0YWJveC5hcHBlbmQobGRlbGV0ZUJ0bik7XG4gICAgbGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gICAgbGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgbGRhdGFib3gucmVtb3ZlKHRoaXMpO1xuICAgICAgdGhlTGlzdC5wb3AodGhpcyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGVMaXN0KTtcbiAgICAgIFxuICAgIH0pXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgbGlzdEVsZW1lbnRzIH0gZnJvbSBcIi4vbGlzdERPTVwiO1xuaW1wb3J0IHsgZm9ybUNyZWF0ZXIgfSBmcm9tICcuL2Zvcm1zLmpzJztcblxuZm9ybUNyZWF0ZXIoXCJsaXN0XCIpO1xuXG4vL2dldCBlbGVtZW50c1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJsaXN0XCJdO1xuXG5leHBvcnQgbGV0IHRoZUxpc3QgPSBbXTtcblxuLy9wcm9qZWN0IGNyZWF0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLCBcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkYXRlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzYXZlTGlzdERhdGEoKSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpc3RzJywgSlNPTi5zdHJpbmdpZnkodGhlTGlzdCkpO1xufVxuXG5mdW5jdGlvbiBtYWtlTGlzdCgpIHtcbiAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwidGl0bGVcIl0nKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW2lkPVwiZGVzY3JpcHRpb25Cb3hcIl0nKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJkYXRlXCJdJykudmFsdWU7XG5cbiAgY29uc3QgbGlzdCA9IGNyZWF0ZUxpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKTtcbiAgdGhlTGlzdC5wdXNoKGxpc3QpO1xuXG4gIGxpc3RFbGVtZW50cyhsaXN0KTtcbiAgc2F2ZUxpc3REYXRhKCk7XG5cbn1cblxuXG5cbi8vY3JlYXRlIHByb2plY3RzXG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gIG1ha2VMaXN0KCk7XG59KVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0RGF0YSgpIHtcbiAgbGV0IGxkYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsaXN0cycpKTtcbiAgcmV0dXJuIGxkYXRhO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBub3RlTGlzdCwgZ2V0Tm90ZURhdGEgfSBmcm9tICcuL25vdGVzT2JqZWN0cy5qcyc7XG5cblxuXG4vL2dldCBkb2MgZWxlbWVudHNcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3Qgbm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGUnKTtcblxuXG4vL2NyZWF0ZSBwcm9qZWN0IGVsZW1lbnRzIGFuZCBhZGQgY2xhc3Nlc1xuY29uc3Qgbm90ZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbi8vIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBub3RlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxubm90ZVBhZ2UuY2xhc3NMaXN0LmFkZCgnbm90ZVBhZ2UnKTtcbm5vdGVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbmhlYWRlcicpXG5idG4yLmNsYXNzTGlzdC5hZGQoJ2J0bjInKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdGVFbGVtZW50cyhub3RlKSB7XG4gIGNvbnN0IG5vdGVib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgY29uc3QgbmRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG5kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZVBhZ2UnKTtcblxuICBub3RlYm94LmNsYXNzTGlzdC5hZGQoJ25ib3gnKTtcblxuICBubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbnRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIG5kZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcbiAgbmRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG5cbiAgblBhZ2UuYXBwZW5kKG5vdGVib3gpO1xuICBub3RlYm94LmFwcGVuZChudGl0bGUpO1xuICBudGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGU6ICcgKyBub3RlLnRpdGxlO1xuICBub3RlYm94LmFwcGVuZChuZGVzYyk7XG4gIG5kZXNjLnRleHRDb250ZW50ID0gJ05vdGUgRGVzY3JpcHRpb246ICcgKyBub3RlLmRlc2NyaXB0aW9uO1xuICBub3RlYm94LmFwcGVuZChuZGF0ZSk7XG4gIG5kYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICcgKyBub3RlLmRhdGU7XG4gIG5vdGVib3guYXBwZW5kKGRlbGV0ZUJ0bik7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIG5vdGVib3gucmVtb3ZlKHRoaXMpO1xuICAgIG5vdGVMaXN0LnBvcCh0aGlzKTtcbiAgICBcbiAgfSlcbn1cblxuXG4vL2FkZCBlbGVtdG5zIHRvIHBhZ2VcblxuY29udGVudC5hcHBlbmQobm90ZVBhZ2UpO1xubm90ZVBhZ2UuYXBwZW5kKG5vdGVIZWFkZXIpO1xubm90ZVBhZ2UuYXBwZW5kKGJ0bjIpO1xuLy8gbm90ZVBhZ2UuYXBwZW5kKG5vdGVib3gpO1xuXG4vL3RleHRcblxubm90ZUhlYWRlci5pbm5lckhUTUwgPSBcIk5vdGVzXCI7XG5idG4yLnRleHRDb250ZW50ID0gXCIrTmV3IE5vdGVcIjtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZWROb3RlRGF0YSgpIHtcbiAgbGV0IG5kYXRhID0gZ2V0Tm90ZURhdGEoKTtcbiAgY29uc29sZS5sb2cobmRhdGEpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbmRhdGEubGVuZ3RoOyBpKyspIHtcblxuICAgIGNvbnN0IG5kYXRhYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmRhdGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29uc3QgbmRhdGFEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG5kYXRhRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBuZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIFxuICBcbiAgICBuZGF0YWJveC5jbGFzc0xpc3QuYWRkKCduYm94Jyk7XG4gICAgbmRhdGFUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIG5kYXRhRGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgbmRhdGFEYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICBuZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICBcbiAgICBubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgXG4gICAgbm90ZVBhZ2UuYXBwZW5kKG5kYXRhYm94KTtcbiAgICBuZGF0YWJveC5hcHBlbmQobmRhdGFUaXRsZSk7XG4gICAgbmRhdGFUaXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZTogJyArIG5kYXRhW2ldLnRpdGxlO1xuICAgIG5kYXRhYm94LmFwcGVuZChuZGF0YURlc2MpO1xuICAgIG5kYXRhRGVzYy50ZXh0Q29udGVudCA9ICdOb3RlIERlc2NyaXB0aW9uOiAnICsgbmRhdGFbaV0uZGVzY3JpcHRpb247XG4gICAgbmRhdGFib3guYXBwZW5kKG5kYXRhRGF0ZSk7XG4gICAgbmRhdGFEYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICcgKyBuZGF0YVtpXS5kYXRlO1xuICAgIG5kYXRhYm94LmFwcGVuZChuZGVsZXRlQnRuKTtcbiAgICBuZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICBuZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBuZGF0YWJveC5yZW1vdmUodGhpcyk7XG4gICAgICBub3RlTGlzdC5wb3AodGhpcyk7XG4gICAgICBjb25zb2xlLmxvZyhub3RlTGlzdCk7XG4gICAgICBcbiAgICB9KVxuICB9XG59XG5cblxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgbm90ZUVsZW1lbnRzIH0gZnJvbSBcIi4vbm90ZXNET01cIjtcbmltcG9ydCB7IGZvcm1DcmVhdGVyIH0gZnJvbSAnLi9mb3Jtcy5qcyc7XG5cblxuZm9ybUNyZWF0ZXIoXCJub3RlXCIpXG4vL2dldCBlbGVtZW50c1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJub3RlXCJdO1xuXG5leHBvcnQgbGV0IG5vdGVMaXN0ID0gW107XG5cbi8vcHJvamVjdCBjcmVhdGlvblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm90ZSh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSwgXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGF0ZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2F2ZU5vdGVEYXRhKCkge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KG5vdGVMaXN0KSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VOb3RlKCkge1xuICBjb25zdCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJ0aXRsZVwiXScpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbaWQ9XCJkZXNjcmlwdGlvbkJveFwiXScpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImRhdGVcIl0nKS52YWx1ZTtcblxuICBjb25zdCBub3RlID0gY3JlYXRlTm90ZSh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpO1xuICBub3RlTGlzdC5wdXNoKG5vdGUpO1xuXG4gIG5vdGVFbGVtZW50cyhub3RlKTtcbiAgc2F2ZU5vdGVEYXRhKCk7XG5cbn1cblxuXG5cbi8vY3JlYXRlIHByb2plY3RzXG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gIG1ha2VOb3RlKCk7XG59KVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3RlRGF0YSgpIHtcbiAgbGV0IG5kYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpKTtcbiAgcmV0dXJuIG5kYXRhO1xufVxuXG5cblxuXG5cblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHByb2plY3RMaXN0LCBnZXREYXRhIH0gZnJvbSAnLi9wcm9qZWN0T2JqZWN0cy5qcyc7XG5cbi8vZ2V0IGRvYyBlbGVtZW50c1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBwbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuXG5cbi8vY3JlYXRlIHByb2plY3QgZWxlbWVudHMgYW5kIGFkZCBjbGFzc2VzXG5cbmNvbnN0IHByb1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgbmV3YnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG5wcm9QYWdlLmNsYXNzTGlzdC5hZGQoJ3Byb1BhZ2UnKTtcbnByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncGhlYWRlcicpO1xubmV3YnRuLmNsYXNzTGlzdC5hZGQoJ3Byb0J0bicpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEVsZW1lbnRzKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBjb25zdCBwZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cbiAgcHJvamVjdGJveC5jbGFzc0xpc3QuYWRkKCdwYm94Jyk7XG4gIHB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICBwZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gIHBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuXG4gIHBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIHByb1BhZ2UuYXBwZW5kKHByb2plY3Rib3gpO1xuICBwcm9qZWN0Ym94LmFwcGVuZChwdGl0bGUpO1xuICBwdGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdDogJyArIHByb2plY3QudGl0bGU7XG4gIHByb2plY3Rib3guYXBwZW5kKHBkZXNjKTtcbiAgcGRlc2MudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICcgKyBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICBwcm9qZWN0Ym94LmFwcGVuZChwZGF0ZSk7XG4gIHBkYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICcgKyBwcm9qZWN0LmRhdGU7XG4gIHByb2plY3Rib3guYXBwZW5kKGRlbGV0ZUJ0bik7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHByb2plY3Rib3gucmVtb3ZlKHRoaXMpO1xuICAgIHByb2plY3RMaXN0LnBvcCh0aGlzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4gICAgXG4gIH0pXG59XG5cbi8vYWRkIGVsZW1lbnRzIHRvIHBhZ2VcblxuY29udGVudC5hcHBlbmQocHJvUGFnZSk7XG5wcm9QYWdlLmFwcGVuZChwcm9qZWN0SGVhZGVyKTtcbi8vIHByb1BhZ2UuYXBwZW5kKG5ld2J0bik7XG5wcm9QYWdlLmFwcGVuZChuZXdidG4pO1xuLy8gcHJvUGFnZS5hcHBlbmQocHJvamVjdGJveCk7XG5cbi8vIGFkZCB0ZXh0IHBhcnRzXG5cbnByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbm5ld2J0bi50ZXh0Q29udGVudCA9IFwiK05ldyBQcm9qZWN0XCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVkRGF0YSgpIHtcbiAgbGV0IGRhdGEgPSBnZXREYXRhKCk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXG4gICAgY29uc3QgZGF0YWJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRhdGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29uc3QgZGF0YURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGF0YURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIFxuICBcbiAgICBkYXRhYm94LmNsYXNzTGlzdC5hZGQoJ3Bib3gnKTtcbiAgXG4gICAgcG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZGF0YVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgZGF0YURlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgIGRhdGFEYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gIFxuICAgIHByb1BhZ2UuYXBwZW5kKGRhdGFib3gpO1xuICAgIGRhdGFib3guYXBwZW5kKGRhdGFUaXRsZSk7XG4gICAgZGF0YVRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6ICcgKyBkYXRhW2ldLnRpdGxlO1xuICAgIGRhdGFib3guYXBwZW5kKGRhdGFEZXNjKTtcbiAgICBkYXRhRGVzYy50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJyArIGRhdGFbaV0uZGVzY3JpcHRpb247XG4gICAgZGF0YWJveC5hcHBlbmQoZGF0YURhdGUpO1xuICAgIGRhdGFEYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICcgKyBkYXRhW2ldLmRhdGU7XG4gICAgZGF0YWJveC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgZGF0YWJveC5yZW1vdmUodGhpcyk7XG4gICAgICBwcm9qZWN0TGlzdC5wb3AodGhpcyk7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4gICAgICBcbiAgICB9KVxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHByb2plY3RFbGVtZW50cyB9IGZyb20gXCIuL3Byb2plY3RET01cIjtcbmltcG9ydCB7IGZvcm1DcmVhdGVyIH0gZnJvbSAnLi9mb3Jtcy5qcyc7XG5cbmZvcm1DcmVhdGVyKFwicHJvamVjdFwiKTtcblxuLy9nZXQgZWxlbWVudHNcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmZvcm1zW1wicHJvamVjdFwiXTtcbi8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuY29uc29sZS5sb2coZm9ybSk7XG4vLyBjb25zdCBwcm9QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb1BhZ2UnKTtcblxuZXhwb3J0IGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG4vL3Byb2plY3QgY3JlYXRpb25cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsIFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRhdGUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNhdmVEYXRhKCkge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm9qZWN0KCkge1xuICBjb25zdCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJ0aXRsZVwiXScpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbaWQ9XCJkZXNjcmlwdGlvbkJveFwiXScpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImRhdGVcIl0nKS52YWx1ZTtcblxuICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpO1xuICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuXG4gIHByb2plY3RFbGVtZW50cyhwcm9qZWN0KTtcbiAgc2F2ZURhdGEoKTtcblxufVxuXG5cblxuLy9jcmVhdGUgcHJvamVjdHNcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgbWFrZVByb2plY3QoKTtcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xufSlcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8vIGdldERhdGEoKTtcblxuLy8gY29uc29sZS5sb2coZ2V0RGF0YSgpKTtcblxuLy8gY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy9nZW5lcmF0ZSB0aGUgaW5kaXZpZHVhbCBzZWN0aW9uc1xuaW1wb3J0ICcuL2Zvcm1zLmpzJztcbmltcG9ydCAnLi9wcm9qZWN0RE9NLmpzJztcbmltcG9ydCAnLi9ub3Rlc0RPTS5qcyc7XG5pbXBvcnQgJy4vbGlzdERPTS5qcyc7XG5cbi8vZ2V0IG9iamVjdHMgZm9yIGVhY2ggc2VjdGlvblxuXG5pbXBvcnQgeyBzdG9yZWREYXRhIH0gZnJvbSAnLi9wcm9qZWN0RE9NLmpzJztcbmltcG9ydCB7IHN0b3JlZE5vdGVEYXRhIH0gZnJvbSAnLi9ub3Rlc0RPTS5qcyc7XG5pbXBvcnQgeyBzdG9yZWRMaXN0RGF0YSB9IGZyb20gJy4vbGlzdERPTS5qcyc7XG5cbi8vZ2V0IGdlbmVyYWwgZWxlbWVudHNcbmNvbnN0IHBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG5jb25zdCBubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZScpO1xuY29uc3QgbG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcbmNvbnN0IHByb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9CdG4nKTtcbmNvbnN0IGJ0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuMicpO1xuY29uc3QgYnRuMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4zJyk7XG5jb25zdCBjbG9zZWJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwnKTtcbmNvbnN0IHBmb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJwcm9qZWN0XCJdO1xuY29uc3QgcGNob2ljZSA9IHBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNjaG9pY2VzJyk7XG5jb25zdCBuZm9ybSA9IGRvY3VtZW50LmZvcm1zW1wibm90ZVwiXTtcbmNvbnN0IG5jaG9pY2UgPSBuZm9ybS5xdWVyeVNlbGVjdG9yKCcjY2hvaWNlcycpO1xuY29uc3QgbGZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcImxpc3RcIl07XG5jb25zdCBsY2hvaWNlID0gbGZvcm0ucXVlcnlTZWxlY3RvcignI2Nob2ljZXMnKTtcbi8vdGFiIHNlbGVjdGlvbiBmcm9tIGRvbVxuXG5jb25zdCBwcm90YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdGFiJyk7XG5jb25zdCBub3RldGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGV0YWInKTtcbmNvbnN0IGxpc3R0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdHRhYicpO1xuXG4vL3BhZ2Ugc2VsZWN0aW9uXG5cbmNvbnN0IHByb1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvUGFnZScpO1xuY29uc3Qgbm90ZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZVBhZ2UnKTtcbmNvbnN0IGxpc3RQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RQYWdlJyk7XG5cbi8vIGRpc3BsYXkgY2hvaWNlcyBvZiB0YWJcblxucHJvdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHByb1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBub3RlUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGxpc3RQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pXG5cbm5vdGV0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgcHJvUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIG5vdGVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGxpc3RQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pXG5cbmxpc3R0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgcHJvUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIG5vdGVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbGlzdFBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5cbi8vbW9kYWwgZm9yIGVhY2ggdGFiXG5cbnByb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBwbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgcGNob2ljZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBUaXRsZTpcIjtcbn0pXG5cbmJ0bjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgbm1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIG5jaG9pY2UudGV4dENvbnRlbnQgPSBcIk5vdGUgVGl0bGU6XCI7XG59KVxuXG5idG4zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGxtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBsY2hvaWNlLnRleHRDb250ZW50ID0gXCJMaXN0IFRpdGxlOlwiO1xufSlcblxuY2xvc2VidG5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIG5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGxtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG4vL29iamVjdCBjcmVhdGlvbiBmb3IgZWFjaCB0YWJcblxuXG5zdG9yZWREYXRhKCk7XG5zdG9yZWROb3RlRGF0YSgpO1xuc3RvcmVkTGlzdERhdGEoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=