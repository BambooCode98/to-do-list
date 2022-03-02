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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody{\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  /* border: 1px solid blue; */\n}\n\n  .head{\n    /* border: 2px red solid; */\n    padding: 10px;\n    height: 20%;\n    border-bottom: black 3px solid;\n    background-color: rgb(57, 145, 57);\n  }\n\n  .below-header{\n    display: flex;\n    /* border: 2px solid green; */\n    height: 85.125vh;\n  }\n\n    .tab-list{\n      /* border: 2px red solid; */\n      border-right: black 3px solid;\n      width: 15rem;\n      padding-left: 5px;\n      background-color: rgb(145, 175, 92);\n    }\n\n      h3{\n        font-size: 25px;\n        border-bottom: 2px solid black;\n      }\n\n      h3:hover{\n        background-color: rgba(190, 190, 190, 0.555);\n        cursor: pointer;\n        transform: scale(1.03, 1.03);\n      }\n\n      /* .projects-tab{\n\n      } */\n\n    .content-body{\n      width: 100%;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      padding: 10px;\n    }\n\n      .proPage{\n        display: flex;\n        flex-direction: column;\n      }\n\n        .pheader{\n          border-bottom: black 4px solid;\n        }\n\n        .proBtn{\n          position: relative;\n          top: -83px;\n          left: 135px;\n          border: 2px black solid;\n          border-radius: 3px;\n          background-color: rgb(216, 187, 108);\n          width: 65px;\n          height: 55px;\n        }\n\n        .proBtn:hover{\n          cursor: pointer;\n          background-color: rgb(112, 97, 55);\n        }\n\n      .pbox, .nbox{\n        border: 2px rgb(103, 130, 170) solid;\n        border-radius: 5px;\n        background-color: rgb(76, 240, 232);\n        padding: 4px;\n        height: 80%;\n        width: 80%;\n        margin: 5px;\n      }\n\n      .notePage{\n        display: none;\n      }\n\n      .listPage{\n        display: none;\n      }\n\n      /* everything below is for the modals */\n      \n      .modal{\n        display: none;\n        z-index: 1;\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(2px);\n        padding: 5% 15%;\n      }\n      \n      .modal-content{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: #fefefe;\n        width: 70%;\n        height: 70%;\n        border: 5px rgb(88, 86, 86) solid;\n        border-radius: 25px;\n        /* overflow-y: scroll;\n        overflow-x: none; */\n        overflow: auto;\n        scrollbar-width: none;\n      }\n\n      .modal-content::-webkit-scrollbar{\n        display: none;\n      }\n      \n      form{\n        font-size: 25px;\n      }\n      \n      #choices, #description, #date{\n        margin: 5px;\n      }\n\n      #choices{\n        margin-top: 25px;\n        padding-top: 10%;\n      }\n      \n      input{\n        padding: 5px;\n        margin: 5px;\n      }\n\n      textarea{\n        padding: 5px;\n      }\n      \n      input:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      textarea:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      .close-modal{\n        position: relative;\n        left: 250px;\n        top: -200px;\n        font-size: 50px;\n      }\n      \n      .close-modal:hover{\n        color: rgb(117, 111, 111);\n        cursor: pointer;\n      }\n\n      #buttonModal{\n        position: relative;\n        top: 90%;\n        left: 60%;\n        border: 3px rgb(52, 52, 116) solid;\n        border-radius: 5px;\n        background-color: rgb(172, 172, 206);\n        margin-bottom: 10px;\n        width: 35%;\n        height: 15%;\n      }\n      \n      #buttonModal:hover{\n        background-color: rgb(103, 199, 140);\n        cursor: pointer;\n        transform: translate3d(180, 90, 90);\n      }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4DAA4D;AAC9D;;AAEA;EACE,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,4BAA4B;AAC9B;;EAEE;IACE,2BAA2B;IAC3B,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,kCAAkC;EACpC;;EAEA;IACE,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;EAClB;;IAEE;MACE,2BAA2B;MAC3B,6BAA6B;MAC7B,YAAY;MACZ,iBAAiB;MACjB,mCAAmC;IACrC;;MAEE;QACE,eAAe;QACf,8BAA8B;MAChC;;MAEA;QACE,4CAA4C;QAC5C,eAAe;QACf,4BAA4B;MAC9B;;MAEA;;SAEG;;IAEL;MACE,WAAW;MACX,kBAAkB;MAClB,kBAAkB;MAClB,aAAa;IACf;;MAEE;QACE,aAAa;QACb,sBAAsB;MACxB;;QAEE;UACE,8BAA8B;QAChC;;QAEA;UACE,kBAAkB;UAClB,UAAU;UACV,WAAW;UACX,uBAAuB;UACvB,kBAAkB;UAClB,oCAAoC;UACpC,WAAW;UACX,YAAY;QACd;;QAEA;UACE,eAAe;UACf,kCAAkC;QACpC;;MAEF;QACE,oCAAoC;QACpC,kBAAkB;QAClB,mCAAmC;QACnC,YAAY;QACZ,WAAW;QACX,UAAU;QACV,WAAW;MACb;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,aAAa;MACf;;MAEA,uCAAuC;;MAEvC;QACE,aAAa;QACb,UAAU;QACV,eAAe;QACf,OAAO;QACP,MAAM;QACN,WAAW;QACX,YAAY;QACZ,oCAAoC;QACpC,0BAA0B;QAC1B,eAAe;MACjB;;MAEA;QACE,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,yBAAyB;QACzB,UAAU;QACV,WAAW;QACX,iCAAiC;QACjC,mBAAmB;QACnB;2BACmB;QACnB,cAAc;QACd,qBAAqB;MACvB;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,eAAe;MACjB;;MAEA;QACE,WAAW;MACb;;MAEA;QACE,gBAAgB;QAChB,gBAAgB;MAClB;;MAEA;QACE,YAAY;QACZ,WAAW;MACb;;MAEA;QACE,YAAY;MACd;;MAEA;QACE,oCAAoC;MACtC;;MAEA;QACE,oCAAoC;MACtC;;MAEA;QACE,kBAAkB;QAClB,WAAW;QACX,WAAW;QACX,eAAe;MACjB;;MAEA;QACE,yBAAyB;QACzB,eAAe;MACjB;;MAEA;QACE,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,kCAAkC;QAClC,kBAAkB;QAClB,oCAAoC;QACpC,mBAAmB;QACnB,UAAU;QACV,WAAW;MACb;;MAEA;QACE,oCAAoC;QACpC,eAAe;QACf,mCAAmC;MACrC","sourcesContent":["*{\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody{\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  /* border: 1px solid blue; */\n}\n\n  .head{\n    /* border: 2px red solid; */\n    padding: 10px;\n    height: 20%;\n    border-bottom: black 3px solid;\n    background-color: rgb(57, 145, 57);\n  }\n\n  .below-header{\n    display: flex;\n    /* border: 2px solid green; */\n    height: 85.125vh;\n  }\n\n    .tab-list{\n      /* border: 2px red solid; */\n      border-right: black 3px solid;\n      width: 15rem;\n      padding-left: 5px;\n      background-color: rgb(145, 175, 92);\n    }\n\n      h3{\n        font-size: 25px;\n        border-bottom: 2px solid black;\n      }\n\n      h3:hover{\n        background-color: rgba(190, 190, 190, 0.555);\n        cursor: pointer;\n        transform: scale(1.03, 1.03);\n      }\n\n      /* .projects-tab{\n\n      } */\n\n    .content-body{\n      width: 100%;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      padding: 10px;\n    }\n\n      .proPage{\n        display: flex;\n        flex-direction: column;\n      }\n\n        .pheader{\n          border-bottom: black 4px solid;\n        }\n\n        .proBtn{\n          position: relative;\n          top: -83px;\n          left: 135px;\n          border: 2px black solid;\n          border-radius: 3px;\n          background-color: rgb(216, 187, 108);\n          width: 65px;\n          height: 55px;\n        }\n\n        .proBtn:hover{\n          cursor: pointer;\n          background-color: rgb(112, 97, 55);\n        }\n\n      .pbox, .nbox{\n        border: 2px rgb(103, 130, 170) solid;\n        border-radius: 5px;\n        background-color: rgb(76, 240, 232);\n        padding: 4px;\n        height: 80%;\n        width: 80%;\n        margin: 5px;\n      }\n\n      .notePage{\n        display: none;\n      }\n\n      .listPage{\n        display: none;\n      }\n\n      /* everything below is for the modals */\n      \n      .modal{\n        display: none;\n        z-index: 1;\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(2px);\n        padding: 5% 15%;\n      }\n      \n      .modal-content{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: #fefefe;\n        width: 70%;\n        height: 70%;\n        border: 5px rgb(88, 86, 86) solid;\n        border-radius: 25px;\n        /* overflow-y: scroll;\n        overflow-x: none; */\n        overflow: auto;\n        scrollbar-width: none;\n      }\n\n      .modal-content::-webkit-scrollbar{\n        display: none;\n      }\n      \n      form{\n        font-size: 25px;\n      }\n      \n      #choices, #description, #date{\n        margin: 5px;\n      }\n\n      #choices{\n        margin-top: 25px;\n        padding-top: 10%;\n      }\n      \n      input{\n        padding: 5px;\n        margin: 5px;\n      }\n\n      textarea{\n        padding: 5px;\n      }\n      \n      input:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      textarea:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      .close-modal{\n        position: relative;\n        left: 250px;\n        top: -200px;\n        font-size: 50px;\n      }\n      \n      .close-modal:hover{\n        color: rgb(117, 111, 111);\n        cursor: pointer;\n      }\n\n      #buttonModal{\n        position: relative;\n        top: 90%;\n        left: 60%;\n        border: 3px rgb(52, 52, 116) solid;\n        border-radius: 5px;\n        background-color: rgb(172, 172, 206);\n        margin-bottom: 10px;\n        width: 35%;\n        height: 15%;\n      }\n      \n      #buttonModal:hover{\n        background-color: rgb(103, 199, 140);\n        cursor: pointer;\n        transform: translate3d(180, 90, 90);\n      }"],"sourceRoot":""}]);
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
/* harmony import */ var _listObjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listObjects.js */ "./src/listObjects.js");




let p = document.createElement('p')
p.innerHTML = "hi"//get doc elements
const content = document.querySelector('#content');


//create project elements and add classes
const listPage = document.createElement('div');
const btn3 = document.createElement('button');

const listHeader = document.createElement('h1');
const listbox = document.createElement('div');
const listTitle = document.createElement('h4');
const listDesc = document.createElement('p');
const listDate = document.createElement('p');
const listPriority = document.createElement('p');

listPage.classList.add('listPage');
btn3.classList.add('btn3');



// add elements to page

content.append(listPage);
listPage.append(listHeader);
listPage.append(btn3);

//text

listHeader.innerHTML = "Lists";
btn3.textContent = "+New List";


















/***/ }),

/***/ "./src/listObjects.js":
/*!****************************!*\
  !*** ./src/listObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList)
/* harmony export */ });
function createList(title, description, date) {
  return {
    title, 
    description,
    date,
  };
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

function noteElements(note) {
  const notebox = document.createElement('div');
  const ntitle = document.createElement('h4');
  const ndesc = document.createElement('p');
  const ndate = document.createElement('p');
  const deleteBtn = document.createElement('button');


  notebox.classList.add('nbox');

  modal.style.display = 'none';

  notePage.append(notebox);
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


notePage.classList.add('notePage');
btn2.classList.add('btn2');

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
    ndataTitle.textContent = 'Project: ' + ndata[i].title;
    ndatabox.append(ndataDesc);
    ndataDesc.textContent = 'Description: ' + ndata[i].description;
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
'se strict';



//get elements

const form = document.forms["addbook"];

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
  // console.log(projectList);
})


function getNoteData() {
  let ndata = JSON.parse(sessionStorage.getItem('notes'));
  // console.log(data);
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
// const deleteBtn = document.createElement('button');
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

const form = document.forms["addbook"];
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

// import { getData } from './projectObjects.js';



// import * as projectObs from './projectObjects.js';

//get general elements
const modal = document.querySelector('.modal');
const proBtn = document.querySelector('.proBtn');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const closebtn = document.querySelector('.close-modal');
const form = document.forms["addbook"];
const choices = form.querySelector('#choices');

//extra elements for more functionality
// const closeSpace = document.querySelector('.modal');

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

//modal stuff for each tab

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05hOztBQUVROztBQUVyQjs7QUFFeUI7QUFDRjtBQUNEOztBQUV0Qjs7QUFFQSxZQUFZLFVBQVU7QUFDdUI7QUFDRTs7QUFFL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7OztBQUdBLDJEQUFVO0FBQ1YsNERBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saXN0RE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGlzdE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ub3Rlc0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25vdGVzT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0T2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keXtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbiAgLmhlYWR7XFxuICAgIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDsgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGJvcmRlci1ib3R0b206IGJsYWNrIDNweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAxNDUsIDU3KTtcXG4gIH1cXG5cXG4gIC5iZWxvdy1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgICBoZWlnaHQ6IDg1LjEyNXZoO1xcbiAgfVxcblxcbiAgICAudGFiLWxpc3R7XFxuICAgICAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xcbiAgICAgIGJvcmRlci1yaWdodDogYmxhY2sgM3B4IHNvbGlkO1xcbiAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxNzUsIDkyKTtcXG4gICAgfVxcblxcbiAgICAgIGgze1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIH1cXG5cXG4gICAgICBoMzpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAxOTAsIDE5MCwgMC41NTUpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzLCAxLjAzKTtcXG4gICAgICB9XFxuXFxuICAgICAgLyogLnByb2plY3RzLXRhYntcXG5cXG4gICAgICB9ICovXFxuXFxuICAgIC5jb250ZW50LWJvZHl7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICAgLnByb1BhZ2V7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB9XFxuXFxuICAgICAgICAucGhlYWRlcntcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgNHB4IHNvbGlkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb0J0bntcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICB0b3A6IC04M3B4O1xcbiAgICAgICAgICBsZWZ0OiAxMzVweDtcXG4gICAgICAgICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMTg3LCAxMDgpO1xcbiAgICAgICAgICB3aWR0aDogNjVweDtcXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb0J0bjpob3ZlcntcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCA5NywgNTUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgIC5wYm94LCAubmJveHtcXG4gICAgICAgIGJvcmRlcjogMnB4IHJnYigxMDMsIDEzMCwgMTcwKSBzb2xpZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NiwgMjQwLCAyMzIpO1xcbiAgICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5ub3RlUGFnZXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC5saXN0UGFnZXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC8qIGV2ZXJ5dGhpbmcgYmVsb3cgaXMgZm9yIHRoZSBtb2RhbHMgKi9cXG4gICAgICBcXG4gICAgICAubW9kYWx7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICAgICAgcGFkZGluZzogNSUgMTUlO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAubW9kYWwtY29udGVudHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgYm9yZGVyOiA1cHggcmdiKDg4LCA4NiwgODYpIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgICAgIC8qIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIG92ZXJmbG93LXg6IG5vbmU7ICovXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLm1vZGFsLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgZm9ybXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgI2Nob2ljZXMsICNkZXNjcmlwdGlvbiwgI2RhdGV7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgI2Nob2ljZXN7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaW5wdXR7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgdGV4dGFyZWF7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGlucHV0OmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgIH1cXG5cXG4gICAgICB0ZXh0YXJlYTpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICB9XFxuXFxuICAgICAgLmNsb3NlLW1vZGFse1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGVmdDogMjUwcHg7XFxuICAgICAgICB0b3A6IC0yMDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgLmNsb3NlLW1vZGFsOmhvdmVye1xcbiAgICAgICAgY29sb3I6IHJnYigxMTcsIDExMSwgMTExKTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgI2J1dHRvbk1vZGFse1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiA5MCU7XFxuICAgICAgICBsZWZ0OiA2MCU7XFxuICAgICAgICBib3JkZXI6IDNweCByZ2IoNTIsIDUyLCAxMTYpIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MiwgMTcyLCAyMDYpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIHdpZHRoOiAzNSU7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgI2J1dHRvbk1vZGFsOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTk5LCAxNDApO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxODAsIDkwLCA5MCk7XFxuICAgICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0VBRUU7SUFDRSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQkFBZ0I7RUFDbEI7O0lBRUU7TUFDRSwyQkFBMkI7TUFDM0IsNkJBQTZCO01BQzdCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsbUNBQW1DO0lBQ3JDOztNQUVFO1FBQ0UsZUFBZTtRQUNmLDhCQUE4QjtNQUNoQzs7TUFFQTtRQUNFLDRDQUE0QztRQUM1QyxlQUFlO1FBQ2YsNEJBQTRCO01BQzlCOztNQUVBOztTQUVHOztJQUVMO01BQ0UsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsYUFBYTtJQUNmOztNQUVFO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtNQUN4Qjs7UUFFRTtVQUNFLDhCQUE4QjtRQUNoQzs7UUFFQTtVQUNFLGtCQUFrQjtVQUNsQixVQUFVO1VBQ1YsV0FBVztVQUNYLHVCQUF1QjtVQUN2QixrQkFBa0I7VUFDbEIsb0NBQW9DO1VBQ3BDLFdBQVc7VUFDWCxZQUFZO1FBQ2Q7O1FBRUE7VUFDRSxlQUFlO1VBQ2Ysa0NBQWtDO1FBQ3BDOztNQUVGO1FBQ0Usb0NBQW9DO1FBQ3BDLGtCQUFrQjtRQUNsQixtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLFdBQVc7UUFDWCxVQUFVO1FBQ1YsV0FBVztNQUNiOztNQUVBO1FBQ0UsYUFBYTtNQUNmOztNQUVBO1FBQ0UsYUFBYTtNQUNmOztNQUVBLHVDQUF1Qzs7TUFFdkM7UUFDRSxhQUFhO1FBQ2IsVUFBVTtRQUNWLGVBQWU7UUFDZixPQUFPO1FBQ1AsTUFBTTtRQUNOLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0NBQW9DO1FBQ3BDLDBCQUEwQjtRQUMxQixlQUFlO01BQ2pCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsaUNBQWlDO1FBQ2pDLG1CQUFtQjtRQUNuQjsyQkFDbUI7UUFDbkIsY0FBYztRQUNkLHFCQUFxQjtNQUN2Qjs7TUFFQTtRQUNFLGFBQWE7TUFDZjs7TUFFQTtRQUNFLGVBQWU7TUFDakI7O01BRUE7UUFDRSxXQUFXO01BQ2I7O01BRUE7UUFDRSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO01BQ2xCOztNQUVBO1FBQ0UsWUFBWTtRQUNaLFdBQVc7TUFDYjs7TUFFQTtRQUNFLFlBQVk7TUFDZDs7TUFFQTtRQUNFLG9DQUFvQztNQUN0Qzs7TUFFQTtRQUNFLG9DQUFvQztNQUN0Qzs7TUFFQTtRQUNFLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsV0FBVztRQUNYLGVBQWU7TUFDakI7O01BRUE7UUFDRSx5QkFBeUI7UUFDekIsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsb0NBQW9DO1FBQ3BDLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsV0FBVztNQUNiOztNQUVBO1FBQ0Usb0NBQW9DO1FBQ3BDLGVBQWU7UUFDZixtQ0FBbUM7TUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keXtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbiAgLmhlYWR7XFxuICAgIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDsgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGJvcmRlci1ib3R0b206IGJsYWNrIDNweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAxNDUsIDU3KTtcXG4gIH1cXG5cXG4gIC5iZWxvdy1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgICBoZWlnaHQ6IDg1LjEyNXZoO1xcbiAgfVxcblxcbiAgICAudGFiLWxpc3R7XFxuICAgICAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xcbiAgICAgIGJvcmRlci1yaWdodDogYmxhY2sgM3B4IHNvbGlkO1xcbiAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxNzUsIDkyKTtcXG4gICAgfVxcblxcbiAgICAgIGgze1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIH1cXG5cXG4gICAgICBoMzpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAxOTAsIDE5MCwgMC41NTUpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzLCAxLjAzKTtcXG4gICAgICB9XFxuXFxuICAgICAgLyogLnByb2plY3RzLXRhYntcXG5cXG4gICAgICB9ICovXFxuXFxuICAgIC5jb250ZW50LWJvZHl7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICAgLnByb1BhZ2V7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB9XFxuXFxuICAgICAgICAucGhlYWRlcntcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgNHB4IHNvbGlkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb0J0bntcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICB0b3A6IC04M3B4O1xcbiAgICAgICAgICBsZWZ0OiAxMzVweDtcXG4gICAgICAgICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMTg3LCAxMDgpO1xcbiAgICAgICAgICB3aWR0aDogNjVweDtcXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb0J0bjpob3ZlcntcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCA5NywgNTUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgIC5wYm94LCAubmJveHtcXG4gICAgICAgIGJvcmRlcjogMnB4IHJnYigxMDMsIDEzMCwgMTcwKSBzb2xpZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NiwgMjQwLCAyMzIpO1xcbiAgICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5ub3RlUGFnZXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC5saXN0UGFnZXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC8qIGV2ZXJ5dGhpbmcgYmVsb3cgaXMgZm9yIHRoZSBtb2RhbHMgKi9cXG4gICAgICBcXG4gICAgICAubW9kYWx7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICAgICAgcGFkZGluZzogNSUgMTUlO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAubW9kYWwtY29udGVudHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgYm9yZGVyOiA1cHggcmdiKDg4LCA4NiwgODYpIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgICAgIC8qIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIG92ZXJmbG93LXg6IG5vbmU7ICovXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLm1vZGFsLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgZm9ybXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgI2Nob2ljZXMsICNkZXNjcmlwdGlvbiwgI2RhdGV7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgI2Nob2ljZXN7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaW5wdXR7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgdGV4dGFyZWF7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGlucHV0OmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgIH1cXG5cXG4gICAgICB0ZXh0YXJlYTpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICB9XFxuXFxuICAgICAgLmNsb3NlLW1vZGFse1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGVmdDogMjUwcHg7XFxuICAgICAgICB0b3A6IC0yMDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgLmNsb3NlLW1vZGFsOmhvdmVye1xcbiAgICAgICAgY29sb3I6IHJnYigxMTcsIDExMSwgMTExKTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgI2J1dHRvbk1vZGFse1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiA5MCU7XFxuICAgICAgICBsZWZ0OiA2MCU7XFxuICAgICAgICBib3JkZXI6IDNweCByZ2IoNTIsIDUyLCAxMTYpIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MiwgMTcyLCAyMDYpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIHdpZHRoOiAzNSU7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgI2J1dHRvbk1vZGFsOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTk5LCAxNDApO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxODAsIDkwLCA5MCk7XFxuICAgICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgXCIuL2xpc3RPYmplY3RzLmpzXCI7XG5cbmxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5wLmlubmVySFRNTCA9IFwiaGlcIi8vZ2V0IGRvYyBlbGVtZW50c1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblxuLy9jcmVhdGUgcHJvamVjdCBlbGVtZW50cyBhbmQgYWRkIGNsYXNzZXNcbmNvbnN0IGxpc3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBidG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbmNvbnN0IGxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgbGlzdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbmNvbnN0IGxpc3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuY29uc3QgbGlzdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBsaXN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbmxpc3RQYWdlLmNsYXNzTGlzdC5hZGQoJ2xpc3RQYWdlJyk7XG5idG4zLmNsYXNzTGlzdC5hZGQoJ2J0bjMnKTtcblxuXG5cbi8vIGFkZCBlbGVtZW50cyB0byBwYWdlXG5cbmNvbnRlbnQuYXBwZW5kKGxpc3RQYWdlKTtcbmxpc3RQYWdlLmFwcGVuZChsaXN0SGVhZGVyKTtcbmxpc3RQYWdlLmFwcGVuZChidG4zKTtcblxuLy90ZXh0XG5cbmxpc3RIZWFkZXIuaW5uZXJIVE1MID0gXCJMaXN0c1wiO1xuYnRuMy50ZXh0Q29udGVudCA9IFwiK05ldyBMaXN0XCI7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLCBcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkYXRlLFxuICB9O1xufSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgbm90ZUxpc3QsIGdldE5vdGVEYXRhIH0gZnJvbSAnLi9ub3Rlc09iamVjdHMuanMnO1xuXG5cblxuLy9nZXQgZG9jIGVsZW1lbnRzXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG4vL2NyZWF0ZSBwcm9qZWN0IGVsZW1lbnRzIGFuZCBhZGQgY2xhc3Nlc1xuY29uc3Qgbm90ZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbmNvbnN0IG5vdGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG5leHBvcnQgZnVuY3Rpb24gbm90ZUVsZW1lbnRzKG5vdGUpIHtcbiAgY29uc3Qgbm90ZWJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBudGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBjb25zdCBuZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbmRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cbiAgbm90ZWJveC5jbGFzc0xpc3QuYWRkKCduYm94Jyk7XG5cbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBub3RlUGFnZS5hcHBlbmQobm90ZWJveCk7XG4gIG5vdGVib3guYXBwZW5kKG50aXRsZSk7XG4gIG50aXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZTogJyArIG5vdGUudGl0bGU7XG4gIG5vdGVib3guYXBwZW5kKG5kZXNjKTtcbiAgbmRlc2MudGV4dENvbnRlbnQgPSAnTm90ZSBEZXNjcmlwdGlvbjogJyArIG5vdGUuZGVzY3JpcHRpb247XG4gIG5vdGVib3guYXBwZW5kKG5kYXRlKTtcbiAgbmRhdGUudGV4dENvbnRlbnQgPSAnRGF0ZTogJyArIG5vdGUuZGF0ZTtcbiAgbm90ZWJveC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbm90ZWJveC5yZW1vdmUodGhpcyk7XG4gICAgbm90ZUxpc3QucG9wKHRoaXMpO1xuICAgIFxuICB9KVxufVxuXG5cbm5vdGVQYWdlLmNsYXNzTGlzdC5hZGQoJ25vdGVQYWdlJyk7XG5idG4yLmNsYXNzTGlzdC5hZGQoJ2J0bjInKTtcblxuLy9hZGQgZWxlbXRucyB0byBwYWdlXG5cbmNvbnRlbnQuYXBwZW5kKG5vdGVQYWdlKTtcbm5vdGVQYWdlLmFwcGVuZChub3RlSGVhZGVyKTtcbm5vdGVQYWdlLmFwcGVuZChidG4yKTtcbi8vIG5vdGVQYWdlLmFwcGVuZChub3RlYm94KTtcblxuLy90ZXh0XG5cbm5vdGVIZWFkZXIuaW5uZXJIVE1MID0gXCJOb3Rlc1wiO1xuYnRuMi50ZXh0Q29udGVudCA9IFwiK05ldyBOb3RlXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVkTm90ZURhdGEoKSB7XG4gIGxldCBuZGF0YSA9IGdldE5vdGVEYXRhKCk7XG4gIGNvbnNvbGUubG9nKG5kYXRhKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBjb25zdCBuZGF0YWJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5kYXRhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IG5kYXRhRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBuZGF0YURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbmRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBcbiAgXG4gICAgbmRhdGFib3guY2xhc3NMaXN0LmFkZCgnbmJveCcpO1xuICBcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBcbiAgICBub3RlUGFnZS5hcHBlbmQobmRhdGFib3gpO1xuICAgIG5kYXRhYm94LmFwcGVuZChuZGF0YVRpdGxlKTtcbiAgICBuZGF0YVRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6ICcgKyBuZGF0YVtpXS50aXRsZTtcbiAgICBuZGF0YWJveC5hcHBlbmQobmRhdGFEZXNjKTtcbiAgICBuZGF0YURlc2MudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICcgKyBuZGF0YVtpXS5kZXNjcmlwdGlvbjtcbiAgICBuZGF0YWJveC5hcHBlbmQobmRhdGFEYXRlKTtcbiAgICBuZGF0YURhdGUudGV4dENvbnRlbnQgPSAnRGF0ZTogJyArIG5kYXRhW2ldLmRhdGU7XG4gICAgbmRhdGFib3guYXBwZW5kKG5kZWxldGVCdG4pO1xuICAgIG5kZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgIG5kZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIG5kYXRhYm94LnJlbW92ZSh0aGlzKTtcbiAgICAgIG5vdGVMaXN0LnBvcCh0aGlzKTtcbiAgICAgIGNvbnNvbGUubG9nKG5vdGVMaXN0KTtcbiAgICAgIFxuICAgIH0pXG4gIH1cbn1cblxuXG5cblxuIiwiJ3NlIHN0cmljdCc7XG5cbmltcG9ydCB7IG5vdGVFbGVtZW50cyB9IGZyb20gXCIuL25vdGVzRE9NXCI7XG5cbi8vZ2V0IGVsZW1lbnRzXG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcImFkZGJvb2tcIl07XG5cbmV4cG9ydCBsZXQgbm90ZUxpc3QgPSBbXTtcblxuLy9wcm9qZWN0IGNyZWF0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RlKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLCBcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkYXRlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzYXZlTm90ZURhdGEoKSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ25vdGVzJywgSlNPTi5zdHJpbmdpZnkobm90ZUxpc3QpKTtcbn1cblxuZnVuY3Rpb24gbWFrZU5vdGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cInRpdGxlXCJdJykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtpZD1cImRlc2NyaXB0aW9uXCJdJykudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiZGF0ZVwiXScpLnZhbHVlO1xuXG4gIGNvbnN0IG5vdGUgPSBjcmVhdGVOb3RlKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSk7XG4gIG5vdGVMaXN0LnB1c2gobm90ZSk7XG5cbiAgbm90ZUVsZW1lbnRzKG5vdGUpO1xuICBzYXZlTm90ZURhdGEoKTtcblxufVxuXG5cblxuLy9jcmVhdGUgcHJvamVjdHNcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgbWFrZU5vdGUoKTtcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xufSlcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm90ZURhdGEoKSB7XG4gIGxldCBuZGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKSk7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gbmRhdGE7XG59XG5cblxuXG5cblxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgcHJvamVjdExpc3QsIGdldERhdGEgfSBmcm9tICcuL3Byb2plY3RPYmplY3RzLmpzJztcblxuLy9nZXQgZG9jIGVsZW1lbnRzXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG4vL2NyZWF0ZSBwcm9qZWN0IGVsZW1lbnRzIGFuZCBhZGQgY2xhc3Nlc1xuXG5jb25zdCBwcm9QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IG5ld2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuLy8gY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG5wcm9QYWdlLmNsYXNzTGlzdC5hZGQoJ3Byb1BhZ2UnKTtcbnByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncGhlYWRlcicpO1xubmV3YnRuLmNsYXNzTGlzdC5hZGQoJ3Byb0J0bicpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEVsZW1lbnRzKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBjb25zdCBwZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cbiAgcHJvamVjdGJveC5jbGFzc0xpc3QuYWRkKCdwYm94Jyk7XG5cbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBwcm9QYWdlLmFwcGVuZChwcm9qZWN0Ym94KTtcbiAgcHJvamVjdGJveC5hcHBlbmQocHRpdGxlKTtcbiAgcHRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6ICcgKyBwcm9qZWN0LnRpdGxlO1xuICBwcm9qZWN0Ym94LmFwcGVuZChwZGVzYyk7XG4gIHBkZXNjLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnICsgcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgcHJvamVjdGJveC5hcHBlbmQocGRhdGUpO1xuICBwZGF0ZS50ZXh0Q29udGVudCA9ICdEYXRlOiAnICsgcHJvamVjdC5kYXRlO1xuICBwcm9qZWN0Ym94LmFwcGVuZChkZWxldGVCdG4pO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBwcm9qZWN0Ym94LnJlbW92ZSh0aGlzKTtcbiAgICBwcm9qZWN0TGlzdC5wb3AodGhpcyk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAgIFxuICB9KVxufVxuXG4vL2FkZCBlbGVtZW50cyB0byBwYWdlXG5cbmNvbnRlbnQuYXBwZW5kKHByb1BhZ2UpO1xucHJvUGFnZS5hcHBlbmQocHJvamVjdEhlYWRlcik7XG4vLyBwcm9QYWdlLmFwcGVuZChuZXdidG4pO1xucHJvUGFnZS5hcHBlbmQobmV3YnRuKTtcbi8vIHByb1BhZ2UuYXBwZW5kKHByb2plY3Rib3gpO1xuXG4vLyBhZGQgdGV4dCBwYXJ0c1xuXG5wcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG5uZXdidG4udGV4dENvbnRlbnQgPSBcIitOZXcgUHJvamVjdFwiO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlZERhdGEoKSB7XG4gIGxldCBkYXRhID0gZ2V0RGF0YSgpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblxuICAgIGNvbnN0IGRhdGFib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXRhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IGRhdGFEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRhdGFEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBcbiAgXG4gICAgZGF0YWJveC5jbGFzc0xpc3QuYWRkKCdwYm94Jyk7XG4gIFxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIFxuICAgIHByb1BhZ2UuYXBwZW5kKGRhdGFib3gpO1xuICAgIGRhdGFib3guYXBwZW5kKGRhdGFUaXRsZSk7XG4gICAgZGF0YVRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6ICcgKyBkYXRhW2ldLnRpdGxlO1xuICAgIGRhdGFib3guYXBwZW5kKGRhdGFEZXNjKTtcbiAgICBkYXRhRGVzYy50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJyArIGRhdGFbaV0uZGVzY3JpcHRpb247XG4gICAgZGF0YWJveC5hcHBlbmQoZGF0YURhdGUpO1xuICAgIGRhdGFEYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICcgKyBkYXRhW2ldLmRhdGU7XG4gICAgZGF0YWJveC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgZGF0YWJveC5yZW1vdmUodGhpcyk7XG4gICAgICBwcm9qZWN0TGlzdC5wb3AodGhpcyk7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4gICAgICBcbiAgICB9KVxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHByb2plY3RFbGVtZW50cyB9IGZyb20gXCIuL3Byb2plY3RET01cIjtcblxuLy9nZXQgZWxlbWVudHNcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmZvcm1zW1wiYWRkYm9va1wiXTtcbi8vIGNvbnN0IHByb1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvUGFnZScpO1xuXG5leHBvcnQgbGV0IHByb2plY3RMaXN0ID0gW107XG5cbi8vcHJvamVjdCBjcmVhdGlvblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSwgXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGF0ZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2F2ZURhdGEoKSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbn1cblxuZnVuY3Rpb24gbWFrZVByb2plY3QoKSB7XG4gIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cInRpdGxlXCJdJykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtpZD1cImRlc2NyaXB0aW9uXCJdJykudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiZGF0ZVwiXScpLnZhbHVlO1xuXG4gIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSk7XG4gIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG5cbiAgcHJvamVjdEVsZW1lbnRzKHByb2plY3QpO1xuICBzYXZlRGF0YSgpO1xuXG59XG5cblxuXG4vL2NyZWF0ZSBwcm9qZWN0c1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICBtYWtlUHJvamVjdCgpO1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG59KVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKCkge1xuICBsZXQgZGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLy8gZ2V0RGF0YSgpO1xuXG4vLyBjb25zb2xlLmxvZyhnZXREYXRhKCkpO1xuXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vL2dlbmVyYXRlIHRoZSBpbmRpdmlkdWFsIHNlY3Rpb25zXG5cbmltcG9ydCAnLi9wcm9qZWN0RE9NLmpzJztcbmltcG9ydCAnLi9ub3Rlc0RPTS5qcyc7XG5pbXBvcnQgJy4vbGlzdERPTS5qcyc7XG5cbi8vZ2V0IG9iamVjdHMgZm9yIGVhY2ggc2VjdGlvblxuXG4vLyBpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9wcm9qZWN0T2JqZWN0cy5qcyc7XG5pbXBvcnQgeyBzdG9yZWREYXRhIH0gZnJvbSAnLi9wcm9qZWN0RE9NLmpzJztcbmltcG9ydCB7IHN0b3JlZE5vdGVEYXRhIH0gZnJvbSAnLi9ub3Rlc0RPTS5qcyc7XG5cbi8vIGltcG9ydCAqIGFzIHByb2plY3RPYnMgZnJvbSAnLi9wcm9qZWN0T2JqZWN0cy5qcyc7XG5cbi8vZ2V0IGdlbmVyYWwgZWxlbWVudHNcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBwcm9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvQnRuJyk7XG5jb25zdCBidG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bjInKTtcbmNvbnN0IGJ0bjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuMycpO1xuY29uc3QgY2xvc2VidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcImFkZGJvb2tcIl07XG5jb25zdCBjaG9pY2VzID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjY2hvaWNlcycpO1xuXG4vL2V4dHJhIGVsZW1lbnRzIGZvciBtb3JlIGZ1bmN0aW9uYWxpdHlcbi8vIGNvbnN0IGNsb3NlU3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuLy90YWIgc2VsZWN0aW9uIGZyb20gZG9tXG5cbmNvbnN0IHByb3RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm90YWInKTtcbmNvbnN0IG5vdGV0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXRhYicpO1xuY29uc3QgbGlzdHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0dGFiJyk7XG5cbi8vcGFnZSBzZWxlY3Rpb25cblxuY29uc3QgcHJvUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9QYWdlJyk7XG5jb25zdCBub3RlUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlUGFnZScpO1xuY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdFBhZ2UnKTtcblxuLy8gZGlzcGxheSBjaG9pY2VzIG9mIHRhYlxuXG5wcm90YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgcHJvUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIG5vdGVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbGlzdFBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSlcblxubm90ZXRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBwcm9QYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbm90ZVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgbGlzdFBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSlcblxubGlzdHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBwcm9QYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbm90ZVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBsaXN0UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSlcblxuLy9tb2RhbCBzdHVmZiBmb3IgZWFjaCB0YWJcblxucHJvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGNob2ljZXMudGV4dENvbnRlbnQgPSBcIlByb2plY3QgVGl0bGU6XCI7XG59KVxuXG5idG4yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGNob2ljZXMudGV4dENvbnRlbnQgPSBcIk5vdGUgVGl0bGU6XCI7XG59KVxuXG5idG4zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGNob2ljZXMudGV4dENvbnRlbnQgPSBcIkxpc3QgVGl0bGU6XCI7XG59KVxuXG5jbG9zZWJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG4vL29iamVjdCBjcmVhdGlvbiBmb3IgZWFjaCB0YWJcblxuXG5zdG9yZWREYXRhKCk7XG5zdG9yZWROb3RlRGF0YSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==