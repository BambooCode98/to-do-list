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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody{\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  /* border: 1px solid blue; */\n}\n\n  .head{\n    /* border: 2px red solid; */\n    padding: 10px;\n    height: 20%;\n    border-bottom: black 3px solid;\n    background-color: rgb(57, 145, 57);\n  }\n\n  .below-header{\n    display: flex;\n    /* border: 2px solid green; */\n    height: 85.125vh;\n  }\n\n    .tab-list{\n      /* border: 2px red solid; */\n      border-right: black 3px solid;\n      width: 15rem;\n      padding-left: 5px;\n      background-color: rgb(145, 175, 92);\n    }\n\n      h3{\n        font-size: 25px;\n        border-bottom: 2px solid black;\n      }\n\n      h3:hover{\n        background-color: rgba(190, 190, 190, 0.555);\n        cursor: pointer;\n        transform: scale(1.03, 1.03);\n      }\n\n      /* .projects-tab{\n\n      } */\n\n    .content-body{\n      width: 100%;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      padding: 10px;\n    }\n\n      .proPage{\n        display: flex;\n        flex-direction: column;\n      }\n\n        .pheader, .nheader, .lheader{\n          border-bottom: black 4px solid;\n        }\n\n        .proBtn, .btn2, .btn3{\n          position: relative;\n          top: -83px;\n          left: 135px;\n          border: 2px black solid;\n          border-radius: 3px;\n          background-color: rgb(216, 187, 108);\n          width: 65px;\n          height: 55px;\n        }\n\n        .proBtn:hover{\n          cursor: pointer;\n          background-color: rgb(112, 97, 55);\n        }\n\n      .pbox, .nbox, .lbox{\n        border: 2px rgb(103, 130, 170) solid;\n        border-radius: 5px;\n        /* background-color: rgb(76, 240, 232); */\n        padding: 4px;\n        height: 90%;\n        width: 80%;\n        margin: 5px;\n        padding: 10px;\n        display: flex;\n        justify-content: center;\n        /* align-items: center; */\n        flex-direction: column;\n      }\n\n      .notePage{\n        display: none;\n      }\n\n      .nbox{\n        background-color: #da6767de;\n      }\n\n      .listPage{\n        display: none;\n      }\n\n      .lbox{\n        background-color: #d4d250e0;\n      }\n\n      .delete{\n        /* position: relative;\n        top: -85%;\n        left: 35%; */\n        border: 3px solid black;\n        border-radius: 5px;\n        width: 85px;\n        height: 35%;\n        word-wrap: break-word;\n      }\n\n      .delete:hover{\n        background-color:rgb(141, 140, 140);\n      }\n\n      .title, .desc, .date{\n        width: 45%;\n        height: 35%;\n      }\n\n      .title{\n        border-bottom: solid 2px blue;\n        font-size: 20px;\n      }\n\n      /* everything below is for the modals */\n      \n      .project, .note, .list{\n        display: none;\n        z-index: 1;\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(2px);\n        padding: 5% 15%;\n      }\n      \n      .modal-content{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: #fefefe;\n        width: 70%;\n        height: 70%;\n        border: 5px rgb(88, 86, 86) solid;\n        border-radius: 25px;\n        /* overflow-y: scroll;\n        overflow-x: none; */\n        overflow: auto;\n        scrollbar-width: none;\n      }\n\n      .modal-content::-webkit-scrollbar{\n        display: none;\n      }\n      \n      form{\n        font-size: 25px;\n      }\n      \n      #choices, #description, #date{\n        margin: 5px;\n      }\n\n      #choices{\n        margin-top: 25px;\n        padding-top: 10%;\n      }\n      \n      input{\n        padding: 5px;\n        margin: 5px;\n      }\n\n      textarea{\n        padding: 5px;\n      }\n      \n      input:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      textarea:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      .projectx, .notex, .listx{\n        position: relative;\n        left: 250px;\n        top: -200px;\n        font-size: 50px;\n      }\n      \n      .projectx:hover, .notex:hover, .listx:hover{\n        color: rgb(117, 111, 111);\n        cursor: pointer;\n      }\n\n      #buttonModal{\n        position: relative;\n        top: 90%;\n        left: 60%;\n        border: 3px rgb(52, 52, 116) solid;\n        border-radius: 5px;\n        background-color: rgb(172, 172, 206);\n        margin-bottom: 10px;\n        width: 35%;\n        height: 15%;\n      }\n      \n      #buttonModal:hover{\n        background-color: rgb(103, 199, 140);\n        cursor: pointer;\n        transform: translate3d(180, 90, 90);\n      }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4DAA4D;AAC9D;;AAEA;EACE,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,4BAA4B;AAC9B;;EAEE;IACE,2BAA2B;IAC3B,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,kCAAkC;EACpC;;EAEA;IACE,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;EAClB;;IAEE;MACE,2BAA2B;MAC3B,6BAA6B;MAC7B,YAAY;MACZ,iBAAiB;MACjB,mCAAmC;IACrC;;MAEE;QACE,eAAe;QACf,8BAA8B;MAChC;;MAEA;QACE,4CAA4C;QAC5C,eAAe;QACf,4BAA4B;MAC9B;;MAEA;;SAEG;;IAEL;MACE,WAAW;MACX,kBAAkB;MAClB,kBAAkB;MAClB,aAAa;IACf;;MAEE;QACE,aAAa;QACb,sBAAsB;MACxB;;QAEE;UACE,8BAA8B;QAChC;;QAEA;UACE,kBAAkB;UAClB,UAAU;UACV,WAAW;UACX,uBAAuB;UACvB,kBAAkB;UAClB,oCAAoC;UACpC,WAAW;UACX,YAAY;QACd;;QAEA;UACE,eAAe;UACf,kCAAkC;QACpC;;MAEF;QACE,oCAAoC;QACpC,kBAAkB;QAClB,yCAAyC;QACzC,YAAY;QACZ,WAAW;QACX,UAAU;QACV,WAAW;QACX,aAAa;QACb,aAAa;QACb,uBAAuB;QACvB,yBAAyB;QACzB,sBAAsB;MACxB;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,2BAA2B;MAC7B;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,2BAA2B;MAC7B;;MAEA;QACE;;oBAEY;QACZ,uBAAuB;QACvB,kBAAkB;QAClB,WAAW;QACX,WAAW;QACX,qBAAqB;MACvB;;MAEA;QACE,mCAAmC;MACrC;;MAEA;QACE,UAAU;QACV,WAAW;MACb;;MAEA;QACE,6BAA6B;QAC7B,eAAe;MACjB;;MAEA,uCAAuC;;MAEvC;QACE,aAAa;QACb,UAAU;QACV,eAAe;QACf,OAAO;QACP,MAAM;QACN,WAAW;QACX,YAAY;QACZ,oCAAoC;QACpC,0BAA0B;QAC1B,eAAe;MACjB;;MAEA;QACE,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,yBAAyB;QACzB,UAAU;QACV,WAAW;QACX,iCAAiC;QACjC,mBAAmB;QACnB;2BACmB;QACnB,cAAc;QACd,qBAAqB;MACvB;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,eAAe;MACjB;;MAEA;QACE,WAAW;MACb;;MAEA;QACE,gBAAgB;QAChB,gBAAgB;MAClB;;MAEA;QACE,YAAY;QACZ,WAAW;MACb;;MAEA;QACE,YAAY;MACd;;MAEA;QACE,oCAAoC;MACtC;;MAEA;QACE,oCAAoC;MACtC;;MAEA;QACE,kBAAkB;QAClB,WAAW;QACX,WAAW;QACX,eAAe;MACjB;;MAEA;QACE,yBAAyB;QACzB,eAAe;MACjB;;MAEA;QACE,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,kCAAkC;QAClC,kBAAkB;QAClB,oCAAoC;QACpC,mBAAmB;QACnB,UAAU;QACV,WAAW;MACb;;MAEA;QACE,oCAAoC;QACpC,eAAe;QACf,mCAAmC;MACrC","sourcesContent":["*{\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody{\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  /* border: 1px solid blue; */\n}\n\n  .head{\n    /* border: 2px red solid; */\n    padding: 10px;\n    height: 20%;\n    border-bottom: black 3px solid;\n    background-color: rgb(57, 145, 57);\n  }\n\n  .below-header{\n    display: flex;\n    /* border: 2px solid green; */\n    height: 85.125vh;\n  }\n\n    .tab-list{\n      /* border: 2px red solid; */\n      border-right: black 3px solid;\n      width: 15rem;\n      padding-left: 5px;\n      background-color: rgb(145, 175, 92);\n    }\n\n      h3{\n        font-size: 25px;\n        border-bottom: 2px solid black;\n      }\n\n      h3:hover{\n        background-color: rgba(190, 190, 190, 0.555);\n        cursor: pointer;\n        transform: scale(1.03, 1.03);\n      }\n\n      /* .projects-tab{\n\n      } */\n\n    .content-body{\n      width: 100%;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      padding: 10px;\n    }\n\n      .proPage{\n        display: flex;\n        flex-direction: column;\n      }\n\n        .pheader, .nheader, .lheader{\n          border-bottom: black 4px solid;\n        }\n\n        .proBtn, .btn2, .btn3{\n          position: relative;\n          top: -83px;\n          left: 135px;\n          border: 2px black solid;\n          border-radius: 3px;\n          background-color: rgb(216, 187, 108);\n          width: 65px;\n          height: 55px;\n        }\n\n        .proBtn:hover{\n          cursor: pointer;\n          background-color: rgb(112, 97, 55);\n        }\n\n      .pbox, .nbox, .lbox{\n        border: 2px rgb(103, 130, 170) solid;\n        border-radius: 5px;\n        /* background-color: rgb(76, 240, 232); */\n        padding: 4px;\n        height: 90%;\n        width: 80%;\n        margin: 5px;\n        padding: 10px;\n        display: flex;\n        justify-content: center;\n        /* align-items: center; */\n        flex-direction: column;\n      }\n\n      .notePage{\n        display: none;\n      }\n\n      .nbox{\n        background-color: #da6767de;\n      }\n\n      .listPage{\n        display: none;\n      }\n\n      .lbox{\n        background-color: #d4d250e0;\n      }\n\n      .delete{\n        /* position: relative;\n        top: -85%;\n        left: 35%; */\n        border: 3px solid black;\n        border-radius: 5px;\n        width: 85px;\n        height: 35%;\n        word-wrap: break-word;\n      }\n\n      .delete:hover{\n        background-color:rgb(141, 140, 140);\n      }\n\n      .title, .desc, .date{\n        width: 45%;\n        height: 35%;\n      }\n\n      .title{\n        border-bottom: solid 2px blue;\n        font-size: 20px;\n      }\n\n      /* everything below is for the modals */\n      \n      .project, .note, .list{\n        display: none;\n        z-index: 1;\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(2px);\n        padding: 5% 15%;\n      }\n      \n      .modal-content{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: #fefefe;\n        width: 70%;\n        height: 70%;\n        border: 5px rgb(88, 86, 86) solid;\n        border-radius: 25px;\n        /* overflow-y: scroll;\n        overflow-x: none; */\n        overflow: auto;\n        scrollbar-width: none;\n      }\n\n      .modal-content::-webkit-scrollbar{\n        display: none;\n      }\n      \n      form{\n        font-size: 25px;\n      }\n      \n      #choices, #description, #date{\n        margin: 5px;\n      }\n\n      #choices{\n        margin-top: 25px;\n        padding-top: 10%;\n      }\n      \n      input{\n        padding: 5px;\n        margin: 5px;\n      }\n\n      textarea{\n        padding: 5px;\n      }\n      \n      input:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      textarea:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      .projectx, .notex, .listx{\n        position: relative;\n        left: 250px;\n        top: -200px;\n        font-size: 50px;\n      }\n      \n      .projectx:hover, .notex:hover, .listx:hover{\n        color: rgb(117, 111, 111);\n        cursor: pointer;\n      }\n\n      #buttonModal{\n        position: relative;\n        top: 90%;\n        left: 60%;\n        border: 3px rgb(52, 52, 116) solid;\n        border-radius: 5px;\n        background-color: rgb(172, 172, 206);\n        margin-bottom: 10px;\n        width: 35%;\n        height: 15%;\n      }\n      \n      #buttonModal:hover{\n        background-color: rgb(103, 199, 140);\n        cursor: pointer;\n        transform: translate3d(180, 90, 90);\n      }"],"sourceRoot":""}]);
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
  closebtn.classList.add(id + "x");
  form.setAttribute("id", id);
  input1.setAttribute("id", "title");
  textArea.setAttribute("id", "descriptionBox");
  textArea.setAttribute("form", id);
  textArea.setAttribute("placeholder", "Enter a description...");
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
    ldataDesc.textContent = 'Description: ' + ldata[i].description;
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
const pclosebtn = document.querySelector('.projectx');
const nclosebtn = document.querySelector('.notex');
const lclosebtn = document.querySelector('.listx');
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

pclosebtn.addEventListener('click', function() {
  pmodal.style.display = "none";
})
  
nclosebtn.addEventListener('click', function() {
  nmodal.style.display = "none";
})

lclosebtn.addEventListener('click', function() {
  lmodal.style.display = "none";
})

//object creation for each tab


;(0,_projectDOM_js__WEBPACK_IMPORTED_MODULE_2__.storedData)();
(0,_notesDOM_js__WEBPACK_IMPORTED_MODULE_3__.storedNoteData)();
(0,_listDOM_js__WEBPACK_IMPORTED_MODULE_4__.storedListData)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtBQUNEOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0EsMkRBQVU7QUFDViw0REFBYztBQUNkLDJEQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saXN0RE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGlzdE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ub3Rlc0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25vdGVzT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0T2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keXtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbiAgLmhlYWR7XFxuICAgIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDsgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGJvcmRlci1ib3R0b206IGJsYWNrIDNweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAxNDUsIDU3KTtcXG4gIH1cXG5cXG4gIC5iZWxvdy1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgICBoZWlnaHQ6IDg1LjEyNXZoO1xcbiAgfVxcblxcbiAgICAudGFiLWxpc3R7XFxuICAgICAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xcbiAgICAgIGJvcmRlci1yaWdodDogYmxhY2sgM3B4IHNvbGlkO1xcbiAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxNzUsIDkyKTtcXG4gICAgfVxcblxcbiAgICAgIGgze1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIH1cXG5cXG4gICAgICBoMzpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAxOTAsIDE5MCwgMC41NTUpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzLCAxLjAzKTtcXG4gICAgICB9XFxuXFxuICAgICAgLyogLnByb2plY3RzLXRhYntcXG5cXG4gICAgICB9ICovXFxuXFxuICAgIC5jb250ZW50LWJvZHl7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICAgLnByb1BhZ2V7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB9XFxuXFxuICAgICAgICAucGhlYWRlciwgLm5oZWFkZXIsIC5saGVhZGVye1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBibGFjayA0cHggc29saWQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvQnRuLCAuYnRuMiwgLmJ0bjN7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgdG9wOiAtODNweDtcXG4gICAgICAgICAgbGVmdDogMTM1cHg7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDE4NywgMTA4KTtcXG4gICAgICAgICAgd2lkdGg6IDY1cHg7XFxuICAgICAgICAgIGhlaWdodDogNTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9CdG46aG92ZXJ7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgOTcsIDU1KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAucGJveCwgLm5ib3gsIC5sYm94e1xcbiAgICAgICAgYm9yZGVyOiAycHggcmdiKDEwMywgMTMwLCAxNzApIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCAyNDAsIDIzMik7ICovXFxuICAgICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB9XFxuXFxuICAgICAgLm5vdGVQYWdle1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLm5ib3h7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGE2NzY3ZGU7XFxuICAgICAgfVxcblxcbiAgICAgIC5saXN0UGFnZXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC5sYm94e1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDI1MGUwO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGVsZXRle1xcbiAgICAgICAgLyogcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiAtODUlO1xcbiAgICAgICAgbGVmdDogMzUlOyAqL1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB3aWR0aDogODVweDtcXG4gICAgICAgIGhlaWdodDogMzUlO1xcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGVsZXRlOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQxLCAxNDAsIDE0MCk7XFxuICAgICAgfVxcblxcbiAgICAgIC50aXRsZSwgLmRlc2MsIC5kYXRle1xcbiAgICAgICAgd2lkdGg6IDQ1JTtcXG4gICAgICAgIGhlaWdodDogMzUlO1xcbiAgICAgIH1cXG5cXG4gICAgICAudGl0bGV7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggYmx1ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICB9XFxuXFxuICAgICAgLyogZXZlcnl0aGluZyBiZWxvdyBpcyBmb3IgdGhlIG1vZGFscyAqL1xcbiAgICAgIFxcbiAgICAgIC5wcm9qZWN0LCAubm90ZSwgLmxpc3R7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICAgICAgcGFkZGluZzogNSUgMTUlO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAubW9kYWwtY29udGVudHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgYm9yZGVyOiA1cHggcmdiKDg4LCA4NiwgODYpIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgICAgIC8qIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIG92ZXJmbG93LXg6IG5vbmU7ICovXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLm1vZGFsLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgZm9ybXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgI2Nob2ljZXMsICNkZXNjcmlwdGlvbiwgI2RhdGV7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgI2Nob2ljZXN7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaW5wdXR7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgdGV4dGFyZWF7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGlucHV0OmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgIH1cXG5cXG4gICAgICB0ZXh0YXJlYTpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICB9XFxuXFxuICAgICAgLnByb2plY3R4LCAubm90ZXgsIC5saXN0eHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGxlZnQ6IDI1MHB4O1xcbiAgICAgICAgdG9wOiAtMjAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIC5wcm9qZWN0eDpob3ZlciwgLm5vdGV4OmhvdmVyLCAubGlzdHg6aG92ZXJ7XFxuICAgICAgICBjb2xvcjogcmdiKDExNywgMTExLCAxMTEpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAjYnV0dG9uTW9kYWx7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IDkwJTtcXG4gICAgICAgIGxlZnQ6IDYwJTtcXG4gICAgICAgIGJvcmRlcjogM3B4IHJnYig1MiwgNTIsIDExNikgc29saWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAxNzIsIDIwNik7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDM1JTtcXG4gICAgICAgIGhlaWdodDogMTUlO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAjYnV0dG9uTW9kYWw6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxOTksIDE0MCk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDE4MCwgOTAsIDkwKTtcXG4gICAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7RUFFRTtJQUNFLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGdCQUFnQjtFQUNsQjs7SUFFRTtNQUNFLDJCQUEyQjtNQUMzQiw2QkFBNkI7TUFDN0IsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixtQ0FBbUM7SUFDckM7O01BRUU7UUFDRSxlQUFlO1FBQ2YsOEJBQThCO01BQ2hDOztNQUVBO1FBQ0UsNENBQTRDO1FBQzVDLGVBQWU7UUFDZiw0QkFBNEI7TUFDOUI7O01BRUE7O1NBRUc7O0lBRUw7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixhQUFhO0lBQ2Y7O01BRUU7UUFDRSxhQUFhO1FBQ2Isc0JBQXNCO01BQ3hCOztRQUVFO1VBQ0UsOEJBQThCO1FBQ2hDOztRQUVBO1VBQ0Usa0JBQWtCO1VBQ2xCLFVBQVU7VUFDVixXQUFXO1VBQ1gsdUJBQXVCO1VBQ3ZCLGtCQUFrQjtVQUNsQixvQ0FBb0M7VUFDcEMsV0FBVztVQUNYLFlBQVk7UUFDZDs7UUFFQTtVQUNFLGVBQWU7VUFDZixrQ0FBa0M7UUFDcEM7O01BRUY7UUFDRSxvQ0FBb0M7UUFDcEMsa0JBQWtCO1FBQ2xCLHlDQUF5QztRQUN6QyxZQUFZO1FBQ1osV0FBVztRQUNYLFVBQVU7UUFDVixXQUFXO1FBQ1gsYUFBYTtRQUNiLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLHNCQUFzQjtNQUN4Qjs7TUFFQTtRQUNFLGFBQWE7TUFDZjs7TUFFQTtRQUNFLDJCQUEyQjtNQUM3Qjs7TUFFQTtRQUNFLGFBQWE7TUFDZjs7TUFFQTtRQUNFLDJCQUEyQjtNQUM3Qjs7TUFFQTtRQUNFOztvQkFFWTtRQUNaLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFdBQVc7UUFDWCxxQkFBcUI7TUFDdkI7O01BRUE7UUFDRSxtQ0FBbUM7TUFDckM7O01BRUE7UUFDRSxVQUFVO1FBQ1YsV0FBVztNQUNiOztNQUVBO1FBQ0UsNkJBQTZCO1FBQzdCLGVBQWU7TUFDakI7O01BRUEsdUNBQXVDOztNQUV2QztRQUNFLGFBQWE7UUFDYixVQUFVO1FBQ1YsZUFBZTtRQUNmLE9BQU87UUFDUCxNQUFNO1FBQ04sV0FBVztRQUNYLFlBQVk7UUFDWixvQ0FBb0M7UUFDcEMsMEJBQTBCO1FBQzFCLGVBQWU7TUFDakI7O01BRUE7UUFDRSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsVUFBVTtRQUNWLFdBQVc7UUFDWCxpQ0FBaUM7UUFDakMsbUJBQW1CO1FBQ25COzJCQUNtQjtRQUNuQixjQUFjO1FBQ2QscUJBQXFCO01BQ3ZCOztNQUVBO1FBQ0UsYUFBYTtNQUNmOztNQUVBO1FBQ0UsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLFdBQVc7TUFDYjs7TUFFQTtRQUNFLGdCQUFnQjtRQUNoQixnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxZQUFZO1FBQ1osV0FBVztNQUNiOztNQUVBO1FBQ0UsWUFBWTtNQUNkOztNQUVBO1FBQ0Usb0NBQW9DO01BQ3RDOztNQUVBO1FBQ0Usb0NBQW9DO01BQ3RDOztNQUVBO1FBQ0Usa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLHlCQUF5QjtRQUN6QixlQUFlO01BQ2pCOztNQUVBO1FBQ0Usa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1Qsa0NBQWtDO1FBQ2xDLGtCQUFrQjtRQUNsQixvQ0FBb0M7UUFDcEMsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixXQUFXO01BQ2I7O01BRUE7UUFDRSxvQ0FBb0M7UUFDcEMsZUFBZTtRQUNmLG1DQUFtQztNQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5e1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuICAuaGVhZHtcXG4gICAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgM3B4IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDE0NSwgNTcpO1xcbiAgfVxcblxcbiAgLmJlbG93LWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW47ICovXFxuICAgIGhlaWdodDogODUuMTI1dmg7XFxuICB9XFxuXFxuICAgIC50YWItbGlzdHtcXG4gICAgICAvKiBib3JkZXI6IDJweCByZWQgc29saWQ7ICovXFxuICAgICAgYm9yZGVyLXJpZ2h0OiBibGFjayAzcHggc29saWQ7XFxuICAgICAgd2lkdGg6IDE1cmVtO1xcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDE3NSwgOTIpO1xcbiAgICB9XFxuXFxuICAgICAgaDN7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgfVxcblxcbiAgICAgIGgzOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjU1NSk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMsIDEuMDMpO1xcbiAgICAgIH1cXG5cXG4gICAgICAvKiAucHJvamVjdHMtdGFie1xcblxcbiAgICAgIH0gKi9cXG5cXG4gICAgLmNvbnRlbnQtYm9keXtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgICAucHJvUGFnZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIH1cXG5cXG4gICAgICAgIC5waGVhZGVyLCAubmhlYWRlciwgLmxoZWFkZXJ7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IGJsYWNrIDRweCBzb2xpZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9CdG4sIC5idG4yLCAuYnRuM3tcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICB0b3A6IC04M3B4O1xcbiAgICAgICAgICBsZWZ0OiAxMzVweDtcXG4gICAgICAgICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMTg3LCAxMDgpO1xcbiAgICAgICAgICB3aWR0aDogNjVweDtcXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb0J0bjpob3ZlcntcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCA5NywgNTUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgIC5wYm94LCAubmJveCwgLmxib3h7XFxuICAgICAgICBib3JkZXI6IDJweCByZ2IoMTAzLCAxMzAsIDE3MCkgc29saWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDI0MCwgMjMyKTsgKi9cXG4gICAgICAgIHBhZGRpbmc6IDRweDtcXG4gICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIH1cXG5cXG4gICAgICAubm90ZVBhZ2V7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAubmJveHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYTY3NjdkZTtcXG4gICAgICB9XFxuXFxuICAgICAgLmxpc3RQYWdle1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLmxib3h7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMjUwZTA7XFxuICAgICAgfVxcblxcbiAgICAgIC5kZWxldGV7XFxuICAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IC04NSU7XFxuICAgICAgICBsZWZ0OiAzNSU7ICovXFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHdpZHRoOiA4NXB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNSU7XFxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgfVxcblxcbiAgICAgIC5kZWxldGU6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDEsIDE0MCwgMTQwKTtcXG4gICAgICB9XFxuXFxuICAgICAgLnRpdGxlLCAuZGVzYywgLmRhdGV7XFxuICAgICAgICB3aWR0aDogNDUlO1xcbiAgICAgICAgaGVpZ2h0OiAzNSU7XFxuICAgICAgfVxcblxcbiAgICAgIC50aXRsZXtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCBibHVlO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAvKiBldmVyeXRoaW5nIGJlbG93IGlzIGZvciB0aGUgbW9kYWxzICovXFxuICAgICAgXFxuICAgICAgLnByb2plY3QsIC5ub3RlLCAubGlzdHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgICAgICBwYWRkaW5nOiA1JSAxNSU7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIC5tb2RhbC1jb250ZW50e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICAgICAgaGVpZ2h0OiA3MCU7XFxuICAgICAgICBib3JkZXI6IDVweCByZ2IoODgsIDg2LCA4Nikgc29saWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICAgICAgLyogb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgICAgb3ZlcmZsb3cteDogbm9uZTsgKi9cXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAubW9kYWwtY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBmb3Jte1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAjY2hvaWNlcywgI2Rlc2NyaXB0aW9uLCAjZGF0ZXtcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAjY2hvaWNlc3tcXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBpbnB1dHtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgIH1cXG5cXG4gICAgICB0ZXh0YXJlYXtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaW5wdXQ6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgfVxcblxcbiAgICAgIHRleHRhcmVhOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgIH1cXG5cXG4gICAgICAucHJvamVjdHgsIC5ub3RleCwgLmxpc3R4e1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGVmdDogMjUwcHg7XFxuICAgICAgICB0b3A6IC0yMDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgLnByb2plY3R4OmhvdmVyLCAubm90ZXg6aG92ZXIsIC5saXN0eDpob3ZlcntcXG4gICAgICAgIGNvbG9yOiByZ2IoMTE3LCAxMTEsIDExMSk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcblxcbiAgICAgICNidXR0b25Nb2RhbHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHRvcDogOTAlO1xcbiAgICAgICAgbGVmdDogNjAlO1xcbiAgICAgICAgYm9yZGVyOiAzcHggcmdiKDUyLCA1MiwgMTE2KSBzb2xpZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzIsIDE3MiwgMjA2KTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgICB3aWR0aDogMzUlO1xcbiAgICAgICAgaGVpZ2h0OiAxNSU7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgICNidXR0b25Nb2RhbDpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDE5OSwgMTQwKTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTgwLCA5MCwgOTApO1xcbiAgICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIid1c2Ugc3RyaWN0JztcblxuLy9mb3JtIHRlbXBsYXRlc1xuXG4vLyBsZXQgaWQgPSBcIlwiO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvZHknKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1DcmVhdGVyKGlkKSB7XG5cbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjbG9zZWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBjaG9pY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbGIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgY29uc3QgbGIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgY29uc3QgbGIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChpZCk7XG4gIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG4gIGNsb3NlYnRuLmNsYXNzTGlzdC5hZGQoaWQgKyBcInhcIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBpbnB1dDEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvbkJveFwiKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiZm9ybVwiLCBpZCk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgYSBkZXNjcmlwdGlvbi4uLlwiKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjRcIik7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcImNvbHVtbnNcIiwgXCIyNVwiKTtcbiAgaW5wdXQzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZVwiKTtcbiAgY2hvaWNlcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNob2ljZXNcIik7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGRhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlXCIpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25Nb2RhbFwiKTtcblxuICBjb250ZW50LmFwcGVuZChtb2RhbCk7XG4gIG1vZGFsLmFwcGVuZChtb2RhbENvbnRlbnQpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kKGNsb3NlYnRuKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZChmb3JtKTtcbiAgZm9ybS5hcHBlbmQoY2hvaWNlcyk7XG4gIGZvcm0uYXBwZW5kKGlucHV0MSk7XG4gIGZvcm0uYXBwZW5kKGxiMSk7XG4gIGZvcm0uYXBwZW5kKGRlc2NyaXB0aW9uKTtcbiAgZm9ybS5hcHBlbmQodGV4dEFyZWEpO1xuICBmb3JtLmFwcGVuZChsYjIpO1xuICBmb3JtLmFwcGVuZChkYXRlKTtcbiAgZm9ybS5hcHBlbmQoaW5wdXQzKTtcbiAgZm9ybS5hcHBlbmQobGIzKTtcbiAgZm9ybS5hcHBlbmQoYnV0dG9uKTtcblxuICBjbG9zZWJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG4gIGRhdGUudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgdGhlTGlzdCwgZ2V0TGlzdERhdGEgfSBmcm9tICcuL2xpc3RPYmplY3RzLmpzJztcbmltcG9ydCB7IGZvcm1DcmVhdGVyIH0gZnJvbSAnLi9mb3Jtcy5qcyc7XG5cblxuLy9nZXQgZG9jIGVsZW1lbnRzXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgbG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcblxuXG4vL2NyZWF0ZSBwcm9qZWN0IGVsZW1lbnRzIGFuZCBhZGQgY2xhc3Nlc1xuY29uc3QgbGlzdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGJ0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBsaXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdEVsZW1lbnRzKGxpc3QpIHtcbiAgY29uc3QgbGlzdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBjb25zdCBsZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cbiAgbGlzdGJveC5jbGFzc0xpc3QuYWRkKCdsYm94Jyk7XG5cbiAgbG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGx0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICBsZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gIGxkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuXG4gIGxpc3RQYWdlLmFwcGVuZChsaXN0Ym94KTtcbiAgbGlzdGJveC5hcHBlbmQobHRpdGxlKTtcbiAgbHRpdGxlLnRleHRDb250ZW50ID0gJ0xpc3Q6ICcgKyBsaXN0LnRpdGxlO1xuICBsaXN0Ym94LmFwcGVuZChsZGVzYyk7XG4gIGxkZXNjLnRleHRDb250ZW50ID0gJ0xpc3QgaXRlbXM6ICcgKyBsaXN0LmRlc2NyaXB0aW9uO1xuICBsaXN0Ym94LmFwcGVuZChsZGF0ZSk7XG4gIGxkYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICcgKyBsaXN0LmRhdGU7XG4gIGxpc3Rib3guYXBwZW5kKGRlbGV0ZUJ0bik7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGxpc3Rib3gucmVtb3ZlKHRoaXMpO1xuICAgIHRoZUxpc3QucG9wKHRoaXMpO1xuICAgIFxuICB9KVxufVxuXG5cbmxpc3RQYWdlLmNsYXNzTGlzdC5hZGQoJ2xpc3RQYWdlJyk7XG5saXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2xoZWFkZXInKTtcbmJ0bjMuY2xhc3NMaXN0LmFkZCgnYnRuMycpO1xuXG5cblxuLy8gYWRkIGVsZW1lbnRzIHRvIHBhZ2VcblxuY29udGVudC5hcHBlbmQobGlzdFBhZ2UpO1xubGlzdFBhZ2UuYXBwZW5kKGxpc3RIZWFkZXIpO1xubGlzdFBhZ2UuYXBwZW5kKGJ0bjMpO1xuXG4vL3RleHRcblxubGlzdEhlYWRlci5pbm5lckhUTUwgPSBcIkxpc3RzXCI7XG5idG4zLnRleHRDb250ZW50ID0gXCIrTmV3IExpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlZExpc3REYXRhKCkge1xuICBsZXQgbGRhdGEgPSBnZXRMaXN0RGF0YSgpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGRhdGEubGVuZ3RoOyBpKyspIHtcblxuICAgIGNvbnN0IGxkYXRhYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGRhdGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29uc3QgbGRhdGFEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGxkYXRhRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBsZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIFxuICBcbiAgICBsZGF0YWJveC5jbGFzc0xpc3QuYWRkKCdsYm94Jyk7XG4gIFxuICAgIGxtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGxkYXRhVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBsZGF0YURlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgIGxkYXRhRGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgbGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgXG4gICAgbGlzdFBhZ2UuYXBwZW5kKGxkYXRhYm94KTtcbiAgICBsZGF0YWJveC5hcHBlbmQobGRhdGFUaXRsZSk7XG4gICAgbGRhdGFUaXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZTogJyArIGxkYXRhW2ldLnRpdGxlO1xuICAgIGxkYXRhYm94LmFwcGVuZChsZGF0YURlc2MpO1xuICAgIGxkYXRhRGVzYy50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJyArIGxkYXRhW2ldLmRlc2NyaXB0aW9uO1xuICAgIGxkYXRhYm94LmFwcGVuZChsZGF0YURhdGUpO1xuICAgIGxkYXRhRGF0ZS50ZXh0Q29udGVudCA9ICdEYXRlOiAnICsgbGRhdGFbaV0uZGF0ZTtcbiAgICBsZGF0YWJveC5hcHBlbmQobGRlbGV0ZUJ0bik7XG4gICAgbGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gICAgbGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgbGRhdGFib3gucmVtb3ZlKHRoaXMpO1xuICAgICAgdGhlTGlzdC5wb3AodGhpcyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGVMaXN0KTtcbiAgICAgIFxuICAgIH0pXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgbGlzdEVsZW1lbnRzIH0gZnJvbSBcIi4vbGlzdERPTVwiO1xuaW1wb3J0IHsgZm9ybUNyZWF0ZXIgfSBmcm9tICcuL2Zvcm1zLmpzJztcblxuZm9ybUNyZWF0ZXIoXCJsaXN0XCIpO1xuXG4vL2dldCBlbGVtZW50c1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJsaXN0XCJdO1xuXG5leHBvcnQgbGV0IHRoZUxpc3QgPSBbXTtcblxuLy9wcm9qZWN0IGNyZWF0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLCBcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkYXRlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzYXZlTGlzdERhdGEoKSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpc3RzJywgSlNPTi5zdHJpbmdpZnkodGhlTGlzdCkpO1xufVxuXG5mdW5jdGlvbiBtYWtlTGlzdCgpIHtcbiAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwidGl0bGVcIl0nKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW2lkPVwiZGVzY3JpcHRpb25Cb3hcIl0nKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJkYXRlXCJdJykudmFsdWU7XG5cbiAgY29uc3QgbGlzdCA9IGNyZWF0ZUxpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKTtcbiAgdGhlTGlzdC5wdXNoKGxpc3QpO1xuXG4gIGxpc3RFbGVtZW50cyhsaXN0KTtcbiAgc2F2ZUxpc3REYXRhKCk7XG5cbn1cblxuXG5cbi8vY3JlYXRlIHByb2plY3RzXG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gIG1ha2VMaXN0KCk7XG59KVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0RGF0YSgpIHtcbiAgbGV0IGxkYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsaXN0cycpKTtcbiAgcmV0dXJuIGxkYXRhO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBub3RlTGlzdCwgZ2V0Tm90ZURhdGEgfSBmcm9tICcuL25vdGVzT2JqZWN0cy5qcyc7XG5cblxuXG4vL2dldCBkb2MgZWxlbWVudHNcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3Qgbm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGUnKTtcblxuXG4vL2NyZWF0ZSBwcm9qZWN0IGVsZW1lbnRzIGFuZCBhZGQgY2xhc3Nlc1xuY29uc3Qgbm90ZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbi8vIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBub3RlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxubm90ZVBhZ2UuY2xhc3NMaXN0LmFkZCgnbm90ZVBhZ2UnKTtcbm5vdGVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbmhlYWRlcicpXG5idG4yLmNsYXNzTGlzdC5hZGQoJ2J0bjInKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdGVFbGVtZW50cyhub3RlKSB7XG4gIGNvbnN0IG5vdGVib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgY29uc3QgbmRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG5kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZVBhZ2UnKTtcblxuICBub3RlYm94LmNsYXNzTGlzdC5hZGQoJ25ib3gnKTtcblxuICBubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbnRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIG5kZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcbiAgbmRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG5cbiAgblBhZ2UuYXBwZW5kKG5vdGVib3gpO1xuICBub3RlYm94LmFwcGVuZChudGl0bGUpO1xuICBudGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGU6ICcgKyBub3RlLnRpdGxlO1xuICBub3RlYm94LmFwcGVuZChuZGVzYyk7XG4gIG5kZXNjLnRleHRDb250ZW50ID0gJ05vdGUgRGVzY3JpcHRpb246ICcgKyBub3RlLmRlc2NyaXB0aW9uO1xuICBub3RlYm94LmFwcGVuZChuZGF0ZSk7XG4gIG5kYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICcgKyBub3RlLmRhdGU7XG4gIG5vdGVib3guYXBwZW5kKGRlbGV0ZUJ0bik7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIG5vdGVib3gucmVtb3ZlKHRoaXMpO1xuICAgIG5vdGVMaXN0LnBvcCh0aGlzKTtcbiAgICBcbiAgfSlcbn1cblxuXG4vL2FkZCBlbGVtdG5zIHRvIHBhZ2VcblxuY29udGVudC5hcHBlbmQobm90ZVBhZ2UpO1xubm90ZVBhZ2UuYXBwZW5kKG5vdGVIZWFkZXIpO1xubm90ZVBhZ2UuYXBwZW5kKGJ0bjIpO1xuLy8gbm90ZVBhZ2UuYXBwZW5kKG5vdGVib3gpO1xuXG4vL3RleHRcblxubm90ZUhlYWRlci5pbm5lckhUTUwgPSBcIk5vdGVzXCI7XG5idG4yLnRleHRDb250ZW50ID0gXCIrTmV3IE5vdGVcIjtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZWROb3RlRGF0YSgpIHtcbiAgbGV0IG5kYXRhID0gZ2V0Tm90ZURhdGEoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBjb25zdCBuZGF0YWJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5kYXRhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IG5kYXRhRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBuZGF0YURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbmRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBcbiAgXG4gICAgbmRhdGFib3guY2xhc3NMaXN0LmFkZCgnbmJveCcpO1xuICAgIG5kYXRhVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBuZGF0YURlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgIG5kYXRhRGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgbmRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgXG4gICAgbm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIFxuICAgIG5vdGVQYWdlLmFwcGVuZChuZGF0YWJveCk7XG4gICAgbmRhdGFib3guYXBwZW5kKG5kYXRhVGl0bGUpO1xuICAgIG5kYXRhVGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGU6ICcgKyBuZGF0YVtpXS50aXRsZTtcbiAgICBuZGF0YWJveC5hcHBlbmQobmRhdGFEZXNjKTtcbiAgICBuZGF0YURlc2MudGV4dENvbnRlbnQgPSAnTm90ZSBEZXNjcmlwdGlvbjogJyArIG5kYXRhW2ldLmRlc2NyaXB0aW9uO1xuICAgIG5kYXRhYm94LmFwcGVuZChuZGF0YURhdGUpO1xuICAgIG5kYXRhRGF0ZS50ZXh0Q29udGVudCA9ICdEYXRlOiAnICsgbmRhdGFbaV0uZGF0ZTtcbiAgICBuZGF0YWJveC5hcHBlbmQobmRlbGV0ZUJ0bik7XG4gICAgbmRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gICAgbmRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgbmRhdGFib3gucmVtb3ZlKHRoaXMpO1xuICAgICAgbm90ZUxpc3QucG9wKHRoaXMpO1xuICAgICAgY29uc29sZS5sb2cobm90ZUxpc3QpO1xuICAgICAgXG4gICAgfSlcbiAgfVxufVxuXG5cblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IG5vdGVFbGVtZW50cyB9IGZyb20gXCIuL25vdGVzRE9NXCI7XG5pbXBvcnQgeyBmb3JtQ3JlYXRlciB9IGZyb20gJy4vZm9ybXMuanMnO1xuXG5cbmZvcm1DcmVhdGVyKFwibm90ZVwiKVxuLy9nZXQgZWxlbWVudHNcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmZvcm1zW1wibm90ZVwiXTtcblxuZXhwb3J0IGxldCBub3RlTGlzdCA9IFtdO1xuXG4vL3Byb2plY3QgY3JlYXRpb25cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vdGUodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsIFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRhdGUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNhdmVOb3RlRGF0YSgpIHtcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeShub3RlTGlzdCkpO1xufVxuXG5mdW5jdGlvbiBtYWtlTm90ZSgpIHtcbiAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwidGl0bGVcIl0nKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW2lkPVwiZGVzY3JpcHRpb25Cb3hcIl0nKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJkYXRlXCJdJykudmFsdWU7XG5cbiAgY29uc3Qgbm90ZSA9IGNyZWF0ZU5vdGUodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKTtcbiAgbm90ZUxpc3QucHVzaChub3RlKTtcblxuICBub3RlRWxlbWVudHMobm90ZSk7XG4gIHNhdmVOb3RlRGF0YSgpO1xuXG59XG5cblxuXG4vL2NyZWF0ZSBwcm9qZWN0c1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICBtYWtlTm90ZSgpO1xufSlcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm90ZURhdGEoKSB7XG4gIGxldCBuZGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKSk7XG4gIHJldHVybiBuZGF0YTtcbn1cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBwcm9qZWN0TGlzdCwgZ2V0RGF0YSB9IGZyb20gJy4vcHJvamVjdE9iamVjdHMuanMnO1xuXG4vL2dldCBkb2MgZWxlbWVudHNcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgcG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcblxuXG4vL2NyZWF0ZSBwcm9qZWN0IGVsZW1lbnRzIGFuZCBhZGQgY2xhc3Nlc1xuXG5jb25zdCBwcm9QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IG5ld2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxucHJvUGFnZS5jbGFzc0xpc3QuYWRkKCdwcm9QYWdlJyk7XG5wcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BoZWFkZXInKTtcbm5ld2J0bi5jbGFzc0xpc3QuYWRkKCdwcm9CdG4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RFbGVtZW50cyhwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3Rib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgY29uc3QgcGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuXG4gIHByb2plY3Rib3guY2xhc3NMaXN0LmFkZCgncGJveCcpO1xuICBwdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgcGRlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICBwZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcblxuICBwbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBwcm9QYWdlLmFwcGVuZChwcm9qZWN0Ym94KTtcbiAgcHJvamVjdGJveC5hcHBlbmQocHRpdGxlKTtcbiAgcHRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6ICcgKyBwcm9qZWN0LnRpdGxlO1xuICBwcm9qZWN0Ym94LmFwcGVuZChwZGVzYyk7XG4gIHBkZXNjLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnICsgcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgcHJvamVjdGJveC5hcHBlbmQocGRhdGUpO1xuICBwZGF0ZS50ZXh0Q29udGVudCA9ICdEYXRlOiAnICsgcHJvamVjdC5kYXRlO1xuICBwcm9qZWN0Ym94LmFwcGVuZChkZWxldGVCdG4pO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBwcm9qZWN0Ym94LnJlbW92ZSh0aGlzKTtcbiAgICBwcm9qZWN0TGlzdC5wb3AodGhpcyk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAgIFxuICB9KVxufVxuXG4vL2FkZCBlbGVtZW50cyB0byBwYWdlXG5cbmNvbnRlbnQuYXBwZW5kKHByb1BhZ2UpO1xucHJvUGFnZS5hcHBlbmQocHJvamVjdEhlYWRlcik7XG4vLyBwcm9QYWdlLmFwcGVuZChuZXdidG4pO1xucHJvUGFnZS5hcHBlbmQobmV3YnRuKTtcbi8vIHByb1BhZ2UuYXBwZW5kKHByb2plY3Rib3gpO1xuXG4vLyBhZGQgdGV4dCBwYXJ0c1xuXG5wcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG5uZXdidG4udGV4dENvbnRlbnQgPSBcIitOZXcgUHJvamVjdFwiO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlZERhdGEoKSB7XG4gIGxldCBkYXRhID0gZ2V0RGF0YSgpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXG4gICAgY29uc3QgZGF0YWJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRhdGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29uc3QgZGF0YURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGF0YURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIFxuICBcbiAgICBkYXRhYm94LmNsYXNzTGlzdC5hZGQoJ3Bib3gnKTtcbiAgXG4gICAgcG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZGF0YVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgZGF0YURlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgIGRhdGFEYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gIFxuICAgIHByb1BhZ2UuYXBwZW5kKGRhdGFib3gpO1xuICAgIGRhdGFib3guYXBwZW5kKGRhdGFUaXRsZSk7XG4gICAgZGF0YVRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6ICcgKyBkYXRhW2ldLnRpdGxlO1xuICAgIGRhdGFib3guYXBwZW5kKGRhdGFEZXNjKTtcbiAgICBkYXRhRGVzYy50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJyArIGRhdGFbaV0uZGVzY3JpcHRpb247XG4gICAgZGF0YWJveC5hcHBlbmQoZGF0YURhdGUpO1xuICAgIGRhdGFEYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICcgKyBkYXRhW2ldLmRhdGU7XG4gICAgZGF0YWJveC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgZGF0YWJveC5yZW1vdmUodGhpcyk7XG4gICAgICBwcm9qZWN0TGlzdC5wb3AodGhpcyk7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4gICAgICBcbiAgICB9KVxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHByb2plY3RFbGVtZW50cyB9IGZyb20gXCIuL3Byb2plY3RET01cIjtcbmltcG9ydCB7IGZvcm1DcmVhdGVyIH0gZnJvbSAnLi9mb3Jtcy5qcyc7XG5cbmZvcm1DcmVhdGVyKFwicHJvamVjdFwiKTtcblxuLy9nZXQgZWxlbWVudHNcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmZvcm1zW1wicHJvamVjdFwiXTtcbi8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuLy8gY29uc3QgcHJvUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9QYWdlJyk7XG5cbmV4cG9ydCBsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuLy9wcm9qZWN0IGNyZWF0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLCBcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkYXRlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzYXZlRGF0YSgpIHtcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xufVxuXG5mdW5jdGlvbiBtYWtlUHJvamVjdCgpIHtcbiAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwidGl0bGVcIl0nKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW2lkPVwiZGVzY3JpcHRpb25Cb3hcIl0nKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJkYXRlXCJdJykudmFsdWU7XG5cbiAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKTtcbiAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcblxuICBwcm9qZWN0RWxlbWVudHMocHJvamVjdCk7XG4gIHNhdmVEYXRhKCk7XG5cbn1cblxuXG5cbi8vY3JlYXRlIHByb2plY3RzXG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gIG1ha2VQcm9qZWN0KCk7XG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbn0pXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gIGxldCBkYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG4vLyBnZXREYXRhKCk7XG5cbi8vIGNvbnNvbGUubG9nKGdldERhdGEoKSk7XG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vZ2VuZXJhdGUgdGhlIGluZGl2aWR1YWwgc2VjdGlvbnNcbmltcG9ydCAnLi9mb3Jtcy5qcyc7XG5pbXBvcnQgJy4vcHJvamVjdERPTS5qcyc7XG5pbXBvcnQgJy4vbm90ZXNET00uanMnO1xuaW1wb3J0ICcuL2xpc3RET00uanMnO1xuXG4vL2dldCBvYmplY3RzIGZvciBlYWNoIHNlY3Rpb25cblxuaW1wb3J0IHsgc3RvcmVkRGF0YSB9IGZyb20gJy4vcHJvamVjdERPTS5qcyc7XG5pbXBvcnQgeyBzdG9yZWROb3RlRGF0YSB9IGZyb20gJy4vbm90ZXNET00uanMnO1xuaW1wb3J0IHsgc3RvcmVkTGlzdERhdGEgfSBmcm9tICcuL2xpc3RET00uanMnO1xuXG4vL2dldCBnZW5lcmFsIGVsZW1lbnRzXG5jb25zdCBwbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuY29uc3Qgbm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGUnKTtcbmNvbnN0IGxtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG5jb25zdCBwcm9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvQnRuJyk7XG5jb25zdCBidG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bjInKTtcbmNvbnN0IGJ0bjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuMycpO1xuY29uc3QgcGNsb3NlYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3R4Jyk7XG5jb25zdCBuY2xvc2VidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXgnKTtcbmNvbnN0IGxjbG9zZWJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0eCcpO1xuY29uc3QgcGZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcInByb2plY3RcIl07XG5jb25zdCBwY2hvaWNlID0gcGZvcm0ucXVlcnlTZWxlY3RvcignI2Nob2ljZXMnKTtcbmNvbnN0IG5mb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJub3RlXCJdO1xuY29uc3QgbmNob2ljZSA9IG5mb3JtLnF1ZXJ5U2VsZWN0b3IoJyNjaG9pY2VzJyk7XG5jb25zdCBsZm9ybSA9IGRvY3VtZW50LmZvcm1zW1wibGlzdFwiXTtcbmNvbnN0IGxjaG9pY2UgPSBsZm9ybS5xdWVyeVNlbGVjdG9yKCcjY2hvaWNlcycpO1xuXG4vL3RhYiBzZWxlY3Rpb24gZnJvbSBkb21cblxuY29uc3QgcHJvdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3RhYicpO1xuY29uc3Qgbm90ZXRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RldGFiJyk7XG5jb25zdCBsaXN0dGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3R0YWInKTtcblxuLy9wYWdlIHNlbGVjdGlvblxuXG5jb25zdCBwcm9QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb1BhZ2UnKTtcbmNvbnN0IG5vdGVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVQYWdlJyk7XG5jb25zdCBsaXN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0UGFnZScpO1xuXG4vLyBkaXNwbGF5IGNob2ljZXMgb2YgdGFiXG5cbnByb3RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBwcm9QYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgbm90ZVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBsaXN0UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG5ub3RldGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHByb1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBub3RlUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBsaXN0UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG5saXN0dGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHByb1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBub3RlUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGxpc3RQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KVxuXG4vL21vZGFsIGZvciBlYWNoIHRhYlxuXG5wcm9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgcG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHBjaG9pY2UudGV4dENvbnRlbnQgPSBcIlByb2plY3QgVGl0bGU6XCI7XG59KVxuXG5idG4yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIG5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBuY2hvaWNlLnRleHRDb250ZW50ID0gXCJOb3RlIFRpdGxlOlwiO1xufSlcblxuYnRuMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBsbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgbGNob2ljZS50ZXh0Q29udGVudCA9IFwiTGlzdCBUaXRsZTpcIjtcbn0pXG5cbnBjbG9zZWJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBwbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSlcbiAgXG5uY2xvc2VidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgbm1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pXG5cbmxjbG9zZWJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBsbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSlcblxuLy9vYmplY3QgY3JlYXRpb24gZm9yIGVhY2ggdGFiXG5cblxuc3RvcmVkRGF0YSgpO1xuc3RvcmVkTm90ZURhdGEoKTtcbnN0b3JlZExpc3REYXRhKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9