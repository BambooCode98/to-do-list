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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody{\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  /* border: 1px solid blue; */\n}\n\n  .head{\n    /* border: 2px red solid; */\n    padding: 10px;\n    height: 20%;\n    border-bottom: black 3px solid;\n    background-color: rgb(57, 145, 57);\n  }\n\n  .below-header{\n    display: flex;\n    /* border: 2px solid green; */\n    height: 85.125vh;\n  }\n\n    .tab-list{\n      /* border: 2px red solid; */\n      border-right: black 3px solid;\n      width: 15rem;\n      padding-left: 5px;\n      background-color: rgb(145, 175, 92);\n    }\n\n      h3{\n        font-size: 25px;\n        border-bottom: 2px solid black;\n      }\n\n      h3:hover{\n        background-color: rgba(190, 190, 190, 0.555);\n        cursor: pointer;\n        transform: scale(1.03, 1.03);\n      }\n\n      /* .projects-tab{\n\n      } */\n\n    .content-body{\n      width: 100%;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      padding: 10px;\n    }\n\n      .proPage{\n        display: flex;\n        flex-direction: column;\n      }\n\n        .pheader, .nheader, .lheader{\n          border-bottom: black 4px solid;\n        }\n\n        .proBtn, .btn2, .btn3{\n          position: relative;\n          top: -83px;\n          left: 135px;\n          border: 2px black solid;\n          border-radius: 3px;\n          background-color: rgb(216, 187, 108);\n          width: 65px;\n          height: 55px;\n        }\n\n        .proBtn:hover{\n          cursor: pointer;\n          background-color: rgb(112, 97, 55);\n        }\n\n      .pbox, .nbox, .lbox{\n        border: 2px rgb(103, 130, 170) solid;\n        border-radius: 5px;\n        /* background-color: rgb(76, 240, 232); */\n        padding: 4px;\n        height: 90%;\n        width: 80%;\n        margin: 5px;\n        padding: 10px;\n        display: flex;\n        justify-content: center;\n        /* align-items: center; */\n        flex-direction: column;\n      }\n\n      .notePage{\n        display: none;\n      }\n\n      .nbox{\n        background-color: #da6767de;\n      }\n\n      .listPage{\n        display: none;\n      }\n\n      .lbox{\n        background-color: #d4d250e0;\n      }\n\n      .delete{\n        /* position: relative;\n        top: -85%;\n        left: 35%; */\n        border: 3px solid black;\n        border-radius: 5px;\n        width: 15%;\n        height: 35%;\n      }\n\n      .delete:hover{\n        background-color:rgb(141, 140, 140);\n      }\n\n      .title, .desc, .date{\n        width: 45%;\n        height: 35%;\n      }\n\n      .title{\n        border-bottom: solid 2px blue;\n        font-size: 20px;\n      }\n\n      /* everything below is for the modals */\n      \n      .project, .note, .list{\n        display: none;\n        z-index: 1;\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(2px);\n        padding: 5% 15%;\n      }\n      \n      .modal-content{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: #fefefe;\n        width: 70%;\n        height: 70%;\n        border: 5px rgb(88, 86, 86) solid;\n        border-radius: 25px;\n        /* overflow-y: scroll;\n        overflow-x: none; */\n        overflow: auto;\n        scrollbar-width: none;\n      }\n\n      .modal-content::-webkit-scrollbar{\n        display: none;\n      }\n      \n      form{\n        font-size: 25px;\n      }\n      \n      #choices, #description, #date{\n        margin: 5px;\n      }\n\n      #choices{\n        margin-top: 25px;\n        padding-top: 10%;\n      }\n      \n      input{\n        padding: 5px;\n        margin: 5px;\n      }\n\n      textarea{\n        padding: 5px;\n      }\n      \n      input:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      textarea:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      .projectx, .notex, .listx{\n        position: relative;\n        left: 250px;\n        top: -200px;\n        font-size: 50px;\n      }\n      \n      .projectx:hover, .notex:hover, .listx:hover{\n        color: rgb(117, 111, 111);\n        cursor: pointer;\n      }\n\n      #buttonModal{\n        position: relative;\n        top: 90%;\n        left: 60%;\n        border: 3px rgb(52, 52, 116) solid;\n        border-radius: 5px;\n        background-color: rgb(172, 172, 206);\n        margin-bottom: 10px;\n        width: 35%;\n        height: 15%;\n      }\n      \n      #buttonModal:hover{\n        background-color: rgb(103, 199, 140);\n        cursor: pointer;\n        transform: translate3d(180, 90, 90);\n      }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4DAA4D;AAC9D;;AAEA;EACE,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,4BAA4B;AAC9B;;EAEE;IACE,2BAA2B;IAC3B,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,kCAAkC;EACpC;;EAEA;IACE,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;EAClB;;IAEE;MACE,2BAA2B;MAC3B,6BAA6B;MAC7B,YAAY;MACZ,iBAAiB;MACjB,mCAAmC;IACrC;;MAEE;QACE,eAAe;QACf,8BAA8B;MAChC;;MAEA;QACE,4CAA4C;QAC5C,eAAe;QACf,4BAA4B;MAC9B;;MAEA;;SAEG;;IAEL;MACE,WAAW;MACX,kBAAkB;MAClB,kBAAkB;MAClB,aAAa;IACf;;MAEE;QACE,aAAa;QACb,sBAAsB;MACxB;;QAEE;UACE,8BAA8B;QAChC;;QAEA;UACE,kBAAkB;UAClB,UAAU;UACV,WAAW;UACX,uBAAuB;UACvB,kBAAkB;UAClB,oCAAoC;UACpC,WAAW;UACX,YAAY;QACd;;QAEA;UACE,eAAe;UACf,kCAAkC;QACpC;;MAEF;QACE,oCAAoC;QACpC,kBAAkB;QAClB,yCAAyC;QACzC,YAAY;QACZ,WAAW;QACX,UAAU;QACV,WAAW;QACX,aAAa;QACb,aAAa;QACb,uBAAuB;QACvB,yBAAyB;QACzB,sBAAsB;MACxB;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,2BAA2B;MAC7B;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,2BAA2B;MAC7B;;MAEA;QACE;;oBAEY;QACZ,uBAAuB;QACvB,kBAAkB;QAClB,UAAU;QACV,WAAW;MACb;;MAEA;QACE,mCAAmC;MACrC;;MAEA;QACE,UAAU;QACV,WAAW;MACb;;MAEA;QACE,6BAA6B;QAC7B,eAAe;MACjB;;MAEA,uCAAuC;;MAEvC;QACE,aAAa;QACb,UAAU;QACV,eAAe;QACf,OAAO;QACP,MAAM;QACN,WAAW;QACX,YAAY;QACZ,oCAAoC;QACpC,0BAA0B;QAC1B,eAAe;MACjB;;MAEA;QACE,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,yBAAyB;QACzB,UAAU;QACV,WAAW;QACX,iCAAiC;QACjC,mBAAmB;QACnB;2BACmB;QACnB,cAAc;QACd,qBAAqB;MACvB;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,eAAe;MACjB;;MAEA;QACE,WAAW;MACb;;MAEA;QACE,gBAAgB;QAChB,gBAAgB;MAClB;;MAEA;QACE,YAAY;QACZ,WAAW;MACb;;MAEA;QACE,YAAY;MACd;;MAEA;QACE,oCAAoC;MACtC;;MAEA;QACE,oCAAoC;MACtC;;MAEA;QACE,kBAAkB;QAClB,WAAW;QACX,WAAW;QACX,eAAe;MACjB;;MAEA;QACE,yBAAyB;QACzB,eAAe;MACjB;;MAEA;QACE,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,kCAAkC;QAClC,kBAAkB;QAClB,oCAAoC;QACpC,mBAAmB;QACnB,UAAU;QACV,WAAW;MACb;;MAEA;QACE,oCAAoC;QACpC,eAAe;QACf,mCAAmC;MACrC","sourcesContent":["*{\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody{\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  /* border: 1px solid blue; */\n}\n\n  .head{\n    /* border: 2px red solid; */\n    padding: 10px;\n    height: 20%;\n    border-bottom: black 3px solid;\n    background-color: rgb(57, 145, 57);\n  }\n\n  .below-header{\n    display: flex;\n    /* border: 2px solid green; */\n    height: 85.125vh;\n  }\n\n    .tab-list{\n      /* border: 2px red solid; */\n      border-right: black 3px solid;\n      width: 15rem;\n      padding-left: 5px;\n      background-color: rgb(145, 175, 92);\n    }\n\n      h3{\n        font-size: 25px;\n        border-bottom: 2px solid black;\n      }\n\n      h3:hover{\n        background-color: rgba(190, 190, 190, 0.555);\n        cursor: pointer;\n        transform: scale(1.03, 1.03);\n      }\n\n      /* .projects-tab{\n\n      } */\n\n    .content-body{\n      width: 100%;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      padding: 10px;\n    }\n\n      .proPage{\n        display: flex;\n        flex-direction: column;\n      }\n\n        .pheader, .nheader, .lheader{\n          border-bottom: black 4px solid;\n        }\n\n        .proBtn, .btn2, .btn3{\n          position: relative;\n          top: -83px;\n          left: 135px;\n          border: 2px black solid;\n          border-radius: 3px;\n          background-color: rgb(216, 187, 108);\n          width: 65px;\n          height: 55px;\n        }\n\n        .proBtn:hover{\n          cursor: pointer;\n          background-color: rgb(112, 97, 55);\n        }\n\n      .pbox, .nbox, .lbox{\n        border: 2px rgb(103, 130, 170) solid;\n        border-radius: 5px;\n        /* background-color: rgb(76, 240, 232); */\n        padding: 4px;\n        height: 90%;\n        width: 80%;\n        margin: 5px;\n        padding: 10px;\n        display: flex;\n        justify-content: center;\n        /* align-items: center; */\n        flex-direction: column;\n      }\n\n      .notePage{\n        display: none;\n      }\n\n      .nbox{\n        background-color: #da6767de;\n      }\n\n      .listPage{\n        display: none;\n      }\n\n      .lbox{\n        background-color: #d4d250e0;\n      }\n\n      .delete{\n        /* position: relative;\n        top: -85%;\n        left: 35%; */\n        border: 3px solid black;\n        border-radius: 5px;\n        width: 15%;\n        height: 35%;\n      }\n\n      .delete:hover{\n        background-color:rgb(141, 140, 140);\n      }\n\n      .title, .desc, .date{\n        width: 45%;\n        height: 35%;\n      }\n\n      .title{\n        border-bottom: solid 2px blue;\n        font-size: 20px;\n      }\n\n      /* everything below is for the modals */\n      \n      .project, .note, .list{\n        display: none;\n        z-index: 1;\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(2px);\n        padding: 5% 15%;\n      }\n      \n      .modal-content{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: #fefefe;\n        width: 70%;\n        height: 70%;\n        border: 5px rgb(88, 86, 86) solid;\n        border-radius: 25px;\n        /* overflow-y: scroll;\n        overflow-x: none; */\n        overflow: auto;\n        scrollbar-width: none;\n      }\n\n      .modal-content::-webkit-scrollbar{\n        display: none;\n      }\n      \n      form{\n        font-size: 25px;\n      }\n      \n      #choices, #description, #date{\n        margin: 5px;\n      }\n\n      #choices{\n        margin-top: 25px;\n        padding-top: 10%;\n      }\n      \n      input{\n        padding: 5px;\n        margin: 5px;\n      }\n\n      textarea{\n        padding: 5px;\n      }\n      \n      input:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      textarea:hover{\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      .projectx, .notex, .listx{\n        position: relative;\n        left: 250px;\n        top: -200px;\n        font-size: 50px;\n      }\n      \n      .projectx:hover, .notex:hover, .listx:hover{\n        color: rgb(117, 111, 111);\n        cursor: pointer;\n      }\n\n      #buttonModal{\n        position: relative;\n        top: 90%;\n        left: 60%;\n        border: 3px rgb(52, 52, 116) solid;\n        border-radius: 5px;\n        background-color: rgb(172, 172, 206);\n        margin-bottom: 10px;\n        width: 35%;\n        height: 15%;\n      }\n      \n      #buttonModal:hover{\n        background-color: rgb(103, 199, 140);\n        cursor: pointer;\n        transform: translate3d(180, 90, 90);\n      }"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7QUFHQSwyREFBVTtBQUNWLDREQUFjO0FBQ2QsMkRBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpc3RET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saXN0T2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25vdGVzRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbm90ZXNPYmplY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdERPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RPYmplY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5e1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuICAuaGVhZHtcXG4gICAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgM3B4IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDE0NSwgNTcpO1xcbiAgfVxcblxcbiAgLmJlbG93LWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW47ICovXFxuICAgIGhlaWdodDogODUuMTI1dmg7XFxuICB9XFxuXFxuICAgIC50YWItbGlzdHtcXG4gICAgICAvKiBib3JkZXI6IDJweCByZWQgc29saWQ7ICovXFxuICAgICAgYm9yZGVyLXJpZ2h0OiBibGFjayAzcHggc29saWQ7XFxuICAgICAgd2lkdGg6IDE1cmVtO1xcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDE3NSwgOTIpO1xcbiAgICB9XFxuXFxuICAgICAgaDN7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgfVxcblxcbiAgICAgIGgzOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjU1NSk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMsIDEuMDMpO1xcbiAgICAgIH1cXG5cXG4gICAgICAvKiAucHJvamVjdHMtdGFie1xcblxcbiAgICAgIH0gKi9cXG5cXG4gICAgLmNvbnRlbnQtYm9keXtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgICAucHJvUGFnZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIH1cXG5cXG4gICAgICAgIC5waGVhZGVyLCAubmhlYWRlciwgLmxoZWFkZXJ7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IGJsYWNrIDRweCBzb2xpZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9CdG4sIC5idG4yLCAuYnRuM3tcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICB0b3A6IC04M3B4O1xcbiAgICAgICAgICBsZWZ0OiAxMzVweDtcXG4gICAgICAgICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMTg3LCAxMDgpO1xcbiAgICAgICAgICB3aWR0aDogNjVweDtcXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb0J0bjpob3ZlcntcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCA5NywgNTUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgIC5wYm94LCAubmJveCwgLmxib3h7XFxuICAgICAgICBib3JkZXI6IDJweCByZ2IoMTAzLCAxMzAsIDE3MCkgc29saWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDI0MCwgMjMyKTsgKi9cXG4gICAgICAgIHBhZGRpbmc6IDRweDtcXG4gICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIH1cXG5cXG4gICAgICAubm90ZVBhZ2V7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAubmJveHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYTY3NjdkZTtcXG4gICAgICB9XFxuXFxuICAgICAgLmxpc3RQYWdle1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLmxib3h7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMjUwZTA7XFxuICAgICAgfVxcblxcbiAgICAgIC5kZWxldGV7XFxuICAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IC04NSU7XFxuICAgICAgICBsZWZ0OiAzNSU7ICovXFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHdpZHRoOiAxNSU7XFxuICAgICAgICBoZWlnaHQ6IDM1JTtcXG4gICAgICB9XFxuXFxuICAgICAgLmRlbGV0ZTpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE0MSwgMTQwLCAxNDApO1xcbiAgICAgIH1cXG5cXG4gICAgICAudGl0bGUsIC5kZXNjLCAuZGF0ZXtcXG4gICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICBoZWlnaHQ6IDM1JTtcXG4gICAgICB9XFxuXFxuICAgICAgLnRpdGxle1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGJsdWU7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgfVxcblxcbiAgICAgIC8qIGV2ZXJ5dGhpbmcgYmVsb3cgaXMgZm9yIHRoZSBtb2RhbHMgKi9cXG4gICAgICBcXG4gICAgICAucHJvamVjdCwgLm5vdGUsIC5saXN0e1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgICAgIHBhZGRpbmc6IDUlIDE1JTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgLm1vZGFsLWNvbnRlbnR7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgICBoZWlnaHQ6IDcwJTtcXG4gICAgICAgIGJvcmRlcjogNXB4IHJnYig4OCwgODYsIDg2KSBzb2xpZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgICAgICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICBvdmVyZmxvdy14OiBub25lOyAqL1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC5tb2RhbC1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGZvcm17XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgICNjaG9pY2VzLCAjZGVzY3JpcHRpb24sICNkYXRle1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgfVxcblxcbiAgICAgICNjaG9pY2Vze1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGlucHV0e1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgfVxcblxcbiAgICAgIHRleHRhcmVhe1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBpbnB1dDpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICB9XFxuXFxuICAgICAgdGV4dGFyZWE6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgfVxcblxcbiAgICAgIC5wcm9qZWN0eCwgLm5vdGV4LCAubGlzdHh7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBsZWZ0OiAyNTBweDtcXG4gICAgICAgIHRvcDogLTIwMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAucHJvamVjdHg6aG92ZXIsIC5ub3RleDpob3ZlciwgLmxpc3R4OmhvdmVye1xcbiAgICAgICAgY29sb3I6IHJnYigxMTcsIDExMSwgMTExKTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgI2J1dHRvbk1vZGFse1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiA5MCU7XFxuICAgICAgICBsZWZ0OiA2MCU7XFxuICAgICAgICBib3JkZXI6IDNweCByZ2IoNTIsIDUyLCAxMTYpIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MiwgMTcyLCAyMDYpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIHdpZHRoOiAzNSU7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgI2J1dHRvbk1vZGFsOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTk5LCAxNDApO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxODAsIDkwLCA5MCk7XFxuICAgICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0VBRUU7SUFDRSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQkFBZ0I7RUFDbEI7O0lBRUU7TUFDRSwyQkFBMkI7TUFDM0IsNkJBQTZCO01BQzdCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsbUNBQW1DO0lBQ3JDOztNQUVFO1FBQ0UsZUFBZTtRQUNmLDhCQUE4QjtNQUNoQzs7TUFFQTtRQUNFLDRDQUE0QztRQUM1QyxlQUFlO1FBQ2YsNEJBQTRCO01BQzlCOztNQUVBOztTQUVHOztJQUVMO01BQ0UsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsYUFBYTtJQUNmOztNQUVFO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtNQUN4Qjs7UUFFRTtVQUNFLDhCQUE4QjtRQUNoQzs7UUFFQTtVQUNFLGtCQUFrQjtVQUNsQixVQUFVO1VBQ1YsV0FBVztVQUNYLHVCQUF1QjtVQUN2QixrQkFBa0I7VUFDbEIsb0NBQW9DO1VBQ3BDLFdBQVc7VUFDWCxZQUFZO1FBQ2Q7O1FBRUE7VUFDRSxlQUFlO1VBQ2Ysa0NBQWtDO1FBQ3BDOztNQUVGO1FBQ0Usb0NBQW9DO1FBQ3BDLGtCQUFrQjtRQUNsQix5Q0FBeUM7UUFDekMsWUFBWTtRQUNaLFdBQVc7UUFDWCxVQUFVO1FBQ1YsV0FBVztRQUNYLGFBQWE7UUFDYixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QixzQkFBc0I7TUFDeEI7O01BRUE7UUFDRSxhQUFhO01BQ2Y7O01BRUE7UUFDRSwyQkFBMkI7TUFDN0I7O01BRUE7UUFDRSxhQUFhO01BQ2Y7O01BRUE7UUFDRSwyQkFBMkI7TUFDN0I7O01BRUE7UUFDRTs7b0JBRVk7UUFDWix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixXQUFXO01BQ2I7O01BRUE7UUFDRSxtQ0FBbUM7TUFDckM7O01BRUE7UUFDRSxVQUFVO1FBQ1YsV0FBVztNQUNiOztNQUVBO1FBQ0UsNkJBQTZCO1FBQzdCLGVBQWU7TUFDakI7O01BRUEsdUNBQXVDOztNQUV2QztRQUNFLGFBQWE7UUFDYixVQUFVO1FBQ1YsZUFBZTtRQUNmLE9BQU87UUFDUCxNQUFNO1FBQ04sV0FBVztRQUNYLFlBQVk7UUFDWixvQ0FBb0M7UUFDcEMsMEJBQTBCO1FBQzFCLGVBQWU7TUFDakI7O01BRUE7UUFDRSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsVUFBVTtRQUNWLFdBQVc7UUFDWCxpQ0FBaUM7UUFDakMsbUJBQW1CO1FBQ25COzJCQUNtQjtRQUNuQixjQUFjO1FBQ2QscUJBQXFCO01BQ3ZCOztNQUVBO1FBQ0UsYUFBYTtNQUNmOztNQUVBO1FBQ0UsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLFdBQVc7TUFDYjs7TUFFQTtRQUNFLGdCQUFnQjtRQUNoQixnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxZQUFZO1FBQ1osV0FBVztNQUNiOztNQUVBO1FBQ0UsWUFBWTtNQUNkOztNQUVBO1FBQ0Usb0NBQW9DO01BQ3RDOztNQUVBO1FBQ0Usb0NBQW9DO01BQ3RDOztNQUVBO1FBQ0Usa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLHlCQUF5QjtRQUN6QixlQUFlO01BQ2pCOztNQUVBO1FBQ0Usa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1Qsa0NBQWtDO1FBQ2xDLGtCQUFrQjtRQUNsQixvQ0FBb0M7UUFDcEMsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixXQUFXO01BQ2I7O01BRUE7UUFDRSxvQ0FBb0M7UUFDcEMsZUFBZTtRQUNmLG1DQUFtQztNQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5e1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuICAuaGVhZHtcXG4gICAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgM3B4IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDE0NSwgNTcpO1xcbiAgfVxcblxcbiAgLmJlbG93LWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW47ICovXFxuICAgIGhlaWdodDogODUuMTI1dmg7XFxuICB9XFxuXFxuICAgIC50YWItbGlzdHtcXG4gICAgICAvKiBib3JkZXI6IDJweCByZWQgc29saWQ7ICovXFxuICAgICAgYm9yZGVyLXJpZ2h0OiBibGFjayAzcHggc29saWQ7XFxuICAgICAgd2lkdGg6IDE1cmVtO1xcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDE3NSwgOTIpO1xcbiAgICB9XFxuXFxuICAgICAgaDN7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgfVxcblxcbiAgICAgIGgzOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjU1NSk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMsIDEuMDMpO1xcbiAgICAgIH1cXG5cXG4gICAgICAvKiAucHJvamVjdHMtdGFie1xcblxcbiAgICAgIH0gKi9cXG5cXG4gICAgLmNvbnRlbnQtYm9keXtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgICAucHJvUGFnZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIH1cXG5cXG4gICAgICAgIC5waGVhZGVyLCAubmhlYWRlciwgLmxoZWFkZXJ7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IGJsYWNrIDRweCBzb2xpZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9CdG4sIC5idG4yLCAuYnRuM3tcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICB0b3A6IC04M3B4O1xcbiAgICAgICAgICBsZWZ0OiAxMzVweDtcXG4gICAgICAgICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMTg3LCAxMDgpO1xcbiAgICAgICAgICB3aWR0aDogNjVweDtcXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb0J0bjpob3ZlcntcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCA5NywgNTUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgIC5wYm94LCAubmJveCwgLmxib3h7XFxuICAgICAgICBib3JkZXI6IDJweCByZ2IoMTAzLCAxMzAsIDE3MCkgc29saWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDI0MCwgMjMyKTsgKi9cXG4gICAgICAgIHBhZGRpbmc6IDRweDtcXG4gICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIH1cXG5cXG4gICAgICAubm90ZVBhZ2V7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAubmJveHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYTY3NjdkZTtcXG4gICAgICB9XFxuXFxuICAgICAgLmxpc3RQYWdle1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLmxib3h7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMjUwZTA7XFxuICAgICAgfVxcblxcbiAgICAgIC5kZWxldGV7XFxuICAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IC04NSU7XFxuICAgICAgICBsZWZ0OiAzNSU7ICovXFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHdpZHRoOiAxNSU7XFxuICAgICAgICBoZWlnaHQ6IDM1JTtcXG4gICAgICB9XFxuXFxuICAgICAgLmRlbGV0ZTpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE0MSwgMTQwLCAxNDApO1xcbiAgICAgIH1cXG5cXG4gICAgICAudGl0bGUsIC5kZXNjLCAuZGF0ZXtcXG4gICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICBoZWlnaHQ6IDM1JTtcXG4gICAgICB9XFxuXFxuICAgICAgLnRpdGxle1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGJsdWU7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgfVxcblxcbiAgICAgIC8qIGV2ZXJ5dGhpbmcgYmVsb3cgaXMgZm9yIHRoZSBtb2RhbHMgKi9cXG4gICAgICBcXG4gICAgICAucHJvamVjdCwgLm5vdGUsIC5saXN0e1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgICAgIHBhZGRpbmc6IDUlIDE1JTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgLm1vZGFsLWNvbnRlbnR7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgICBoZWlnaHQ6IDcwJTtcXG4gICAgICAgIGJvcmRlcjogNXB4IHJnYig4OCwgODYsIDg2KSBzb2xpZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgICAgICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICBvdmVyZmxvdy14OiBub25lOyAqL1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC5tb2RhbC1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGZvcm17XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgICNjaG9pY2VzLCAjZGVzY3JpcHRpb24sICNkYXRle1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgfVxcblxcbiAgICAgICNjaG9pY2Vze1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGlucHV0e1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgfVxcblxcbiAgICAgIHRleHRhcmVhe1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBpbnB1dDpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICB9XFxuXFxuICAgICAgdGV4dGFyZWE6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgfVxcblxcbiAgICAgIC5wcm9qZWN0eCwgLm5vdGV4LCAubGlzdHh7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBsZWZ0OiAyNTBweDtcXG4gICAgICAgIHRvcDogLTIwMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAucHJvamVjdHg6aG92ZXIsIC5ub3RleDpob3ZlciwgLmxpc3R4OmhvdmVye1xcbiAgICAgICAgY29sb3I6IHJnYigxMTcsIDExMSwgMTExKTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgI2J1dHRvbk1vZGFse1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiA5MCU7XFxuICAgICAgICBsZWZ0OiA2MCU7XFxuICAgICAgICBib3JkZXI6IDNweCByZ2IoNTIsIDUyLCAxMTYpIHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MiwgMTcyLCAyMDYpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIHdpZHRoOiAzNSU7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgI2J1dHRvbk1vZGFsOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTk5LCAxNDApO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxODAsIDkwLCA5MCk7XFxuICAgICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vL2Zvcm0gdGVtcGxhdGVzXG5cbi8vIGxldCBpZCA9IFwiXCI7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm9keScpO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybUNyZWF0ZXIoaWQpIHtcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNsb3NlYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGNob2ljZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBsYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICBjb25zdCBsYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICBjb25zdCBsYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKGlkKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcbiAgY2xvc2VidG4uY2xhc3NMaXN0LmFkZChpZCArIFwieFwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIGlucHV0MS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uQm94XCIpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJmb3JtXCIsIGlkKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBhIGRlc2NyaXB0aW9uLi4uXCIpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNFwiKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiY29sdW1uc1wiLCBcIjI1XCIpO1xuICBpbnB1dDMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlXCIpO1xuICBjaG9pY2VzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hvaWNlc1wiKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVcIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvbk1vZGFsXCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kKG1vZGFsKTtcbiAgbW9kYWwuYXBwZW5kKG1vZGFsQ29udGVudCk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmQoY2xvc2VidG4pO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kKGZvcm0pO1xuICBmb3JtLmFwcGVuZChjaG9pY2VzKTtcbiAgZm9ybS5hcHBlbmQoaW5wdXQxKTtcbiAgZm9ybS5hcHBlbmQobGIxKTtcbiAgZm9ybS5hcHBlbmQoZGVzY3JpcHRpb24pO1xuICBmb3JtLmFwcGVuZCh0ZXh0QXJlYSk7XG4gIGZvcm0uYXBwZW5kKGxiMik7XG4gIGZvcm0uYXBwZW5kKGRhdGUpO1xuICBmb3JtLmFwcGVuZChpbnB1dDMpO1xuICBmb3JtLmFwcGVuZChsYjMpO1xuICBmb3JtLmFwcGVuZChidXR0b24pO1xuXG4gIGNsb3NlYnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgZGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZTpcIjtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyB0aGVMaXN0LCBnZXRMaXN0RGF0YSB9IGZyb20gJy4vbGlzdE9iamVjdHMuanMnO1xuaW1wb3J0IHsgZm9ybUNyZWF0ZXIgfSBmcm9tICcuL2Zvcm1zLmpzJztcblxuXG4vL2dldCBkb2MgZWxlbWVudHNcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBsbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xuXG5cbi8vY3JlYXRlIHByb2plY3QgZWxlbWVudHMgYW5kIGFkZCBjbGFzc2VzXG5jb25zdCBsaXN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgYnRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbmNvbnN0IGxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0RWxlbWVudHMobGlzdCkge1xuICBjb25zdCBsaXN0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGx0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGNvbnN0IGxkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBsZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cblxuICBsaXN0Ym94LmNsYXNzTGlzdC5hZGQoJ2xib3gnKTtcblxuICBsbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIGxkZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcbiAgbGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG5cbiAgbGlzdFBhZ2UuYXBwZW5kKGxpc3Rib3gpO1xuICBsaXN0Ym94LmFwcGVuZChsdGl0bGUpO1xuICBsdGl0bGUudGV4dENvbnRlbnQgPSAnTGlzdDogJyArIGxpc3QudGl0bGU7XG4gIGxpc3Rib3guYXBwZW5kKGxkZXNjKTtcbiAgbGRlc2MudGV4dENvbnRlbnQgPSAnTGlzdCBpdGVtczogJyArIGxpc3QuZGVzY3JpcHRpb247XG4gIGxpc3Rib3guYXBwZW5kKGxkYXRlKTtcbiAgbGRhdGUudGV4dENvbnRlbnQgPSAnRGF0ZTogJyArIGxpc3QuZGF0ZTtcbiAgbGlzdGJveC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbGlzdGJveC5yZW1vdmUodGhpcyk7XG4gICAgdGhlTGlzdC5wb3AodGhpcyk7XG4gICAgXG4gIH0pXG59XG5cblxubGlzdFBhZ2UuY2xhc3NMaXN0LmFkZCgnbGlzdFBhZ2UnKTtcbmxpc3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbGhlYWRlcicpO1xuYnRuMy5jbGFzc0xpc3QuYWRkKCdidG4zJyk7XG5cblxuXG4vLyBhZGQgZWxlbWVudHMgdG8gcGFnZVxuXG5jb250ZW50LmFwcGVuZChsaXN0UGFnZSk7XG5saXN0UGFnZS5hcHBlbmQobGlzdEhlYWRlcik7XG5saXN0UGFnZS5hcHBlbmQoYnRuMyk7XG5cbi8vdGV4dFxuXG5saXN0SGVhZGVyLmlubmVySFRNTCA9IFwiTGlzdHNcIjtcbmJ0bjMudGV4dENvbnRlbnQgPSBcIitOZXcgTGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVkTGlzdERhdGEoKSB7XG4gIGxldCBsZGF0YSA9IGdldExpc3REYXRhKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZGF0YS5sZW5ndGg7IGkrKykge1xuXG4gICAgY29uc3QgbGRhdGFib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsZGF0YVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBjb25zdCBsZGF0YURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbGRhdGFEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGxkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgXG4gIFxuICAgIGxkYXRhYm94LmNsYXNzTGlzdC5hZGQoJ2xib3gnKTtcbiAgXG4gICAgbG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbGRhdGFUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGxkYXRhRGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgbGRhdGFEYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICBsZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICBcbiAgICBsaXN0UGFnZS5hcHBlbmQobGRhdGFib3gpO1xuICAgIGxkYXRhYm94LmFwcGVuZChsZGF0YVRpdGxlKTtcbiAgICBsZGF0YVRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnICsgbGRhdGFbaV0udGl0bGU7XG4gICAgbGRhdGFib3guYXBwZW5kKGxkYXRhRGVzYyk7XG4gICAgbGRhdGFEZXNjLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnICsgbGRhdGFbaV0uZGVzY3JpcHRpb247XG4gICAgbGRhdGFib3guYXBwZW5kKGxkYXRhRGF0ZSk7XG4gICAgbGRhdGFEYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICcgKyBsZGF0YVtpXS5kYXRlO1xuICAgIGxkYXRhYm94LmFwcGVuZChsZGVsZXRlQnRuKTtcbiAgICBsZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICBsZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBsZGF0YWJveC5yZW1vdmUodGhpcyk7XG4gICAgICB0aGVMaXN0LnBvcCh0aGlzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoZUxpc3QpO1xuICAgICAgXG4gICAgfSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBsaXN0RWxlbWVudHMgfSBmcm9tIFwiLi9saXN0RE9NXCI7XG5pbXBvcnQgeyBmb3JtQ3JlYXRlciB9IGZyb20gJy4vZm9ybXMuanMnO1xuXG5mb3JtQ3JlYXRlcihcImxpc3RcIik7XG5cbi8vZ2V0IGVsZW1lbnRzXG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcImxpc3RcIl07XG5cbmV4cG9ydCBsZXQgdGhlTGlzdCA9IFtdO1xuXG4vL3Byb2plY3QgY3JlYXRpb25cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsIFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRhdGUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNhdmVMaXN0RGF0YSgpIHtcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGlzdHMnLCBKU09OLnN0cmluZ2lmeSh0aGVMaXN0KSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VMaXN0KCkge1xuICBjb25zdCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJ0aXRsZVwiXScpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbaWQ9XCJkZXNjcmlwdGlvbkJveFwiXScpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImRhdGVcIl0nKS52YWx1ZTtcblxuICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdCh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpO1xuICB0aGVMaXN0LnB1c2gobGlzdCk7XG5cbiAgbGlzdEVsZW1lbnRzKGxpc3QpO1xuICBzYXZlTGlzdERhdGEoKTtcblxufVxuXG5cblxuLy9jcmVhdGUgcHJvamVjdHNcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgbWFrZUxpc3QoKTtcbn0pXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3REYXRhKCkge1xuICBsZXQgbGRhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xpc3RzJykpO1xuICByZXR1cm4gbGRhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IG5vdGVMaXN0LCBnZXROb3RlRGF0YSB9IGZyb20gJy4vbm90ZXNPYmplY3RzLmpzJztcblxuXG5cbi8vZ2V0IGRvYyBlbGVtZW50c1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZScpO1xuXG5cbi8vY3JlYXRlIHByb2plY3QgZWxlbWVudHMgYW5kIGFkZCBjbGFzc2VzXG5jb25zdCBub3RlUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgYnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuLy8gY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbmNvbnN0IG5vdGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG5ub3RlUGFnZS5jbGFzc0xpc3QuYWRkKCdub3RlUGFnZScpO1xubm90ZUhlYWRlci5jbGFzc0xpc3QuYWRkKCduaGVhZGVyJylcbmJ0bjIuY2xhc3NMaXN0LmFkZCgnYnRuMicpO1xuXG5leHBvcnQgZnVuY3Rpb24gbm90ZUVsZW1lbnRzKG5vdGUpIHtcbiAgY29uc3Qgbm90ZWJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBudGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBjb25zdCBuZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbmRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBuUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlUGFnZScpO1xuXG4gIG5vdGVib3guY2xhc3NMaXN0LmFkZCgnbmJveCcpO1xuXG4gIG5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBudGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgbmRlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICBuZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcblxuICBuUGFnZS5hcHBlbmQobm90ZWJveCk7XG4gIG5vdGVib3guYXBwZW5kKG50aXRsZSk7XG4gIG50aXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZTogJyArIG5vdGUudGl0bGU7XG4gIG5vdGVib3guYXBwZW5kKG5kZXNjKTtcbiAgbmRlc2MudGV4dENvbnRlbnQgPSAnTm90ZSBEZXNjcmlwdGlvbjogJyArIG5vdGUuZGVzY3JpcHRpb247XG4gIG5vdGVib3guYXBwZW5kKG5kYXRlKTtcbiAgbmRhdGUudGV4dENvbnRlbnQgPSAnRGF0ZTogJyArIG5vdGUuZGF0ZTtcbiAgbm90ZWJveC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbm90ZWJveC5yZW1vdmUodGhpcyk7XG4gICAgbm90ZUxpc3QucG9wKHRoaXMpO1xuICAgIFxuICB9KVxufVxuXG5cbi8vYWRkIGVsZW10bnMgdG8gcGFnZVxuXG5jb250ZW50LmFwcGVuZChub3RlUGFnZSk7XG5ub3RlUGFnZS5hcHBlbmQobm90ZUhlYWRlcik7XG5ub3RlUGFnZS5hcHBlbmQoYnRuMik7XG4vLyBub3RlUGFnZS5hcHBlbmQobm90ZWJveCk7XG5cbi8vdGV4dFxuXG5ub3RlSGVhZGVyLmlubmVySFRNTCA9IFwiTm90ZXNcIjtcbmJ0bjIudGV4dENvbnRlbnQgPSBcIitOZXcgTm90ZVwiO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlZE5vdGVEYXRhKCkge1xuICBsZXQgbmRhdGEgPSBnZXROb3RlRGF0YSgpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbmRhdGEubGVuZ3RoOyBpKyspIHtcblxuICAgIGNvbnN0IG5kYXRhYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmRhdGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29uc3QgbmRhdGFEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG5kYXRhRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBuZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIFxuICBcbiAgICBuZGF0YWJveC5jbGFzc0xpc3QuYWRkKCduYm94Jyk7XG4gICAgbmRhdGFUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIG5kYXRhRGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgbmRhdGFEYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICBuZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICBcbiAgICBubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgXG4gICAgbm90ZVBhZ2UuYXBwZW5kKG5kYXRhYm94KTtcbiAgICBuZGF0YWJveC5hcHBlbmQobmRhdGFUaXRsZSk7XG4gICAgbmRhdGFUaXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZTogJyArIG5kYXRhW2ldLnRpdGxlO1xuICAgIG5kYXRhYm94LmFwcGVuZChuZGF0YURlc2MpO1xuICAgIG5kYXRhRGVzYy50ZXh0Q29udGVudCA9ICdOb3RlIERlc2NyaXB0aW9uOiAnICsgbmRhdGFbaV0uZGVzY3JpcHRpb247XG4gICAgbmRhdGFib3guYXBwZW5kKG5kYXRhRGF0ZSk7XG4gICAgbmRhdGFEYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICcgKyBuZGF0YVtpXS5kYXRlO1xuICAgIG5kYXRhYm94LmFwcGVuZChuZGVsZXRlQnRuKTtcbiAgICBuZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICBuZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBuZGF0YWJveC5yZW1vdmUodGhpcyk7XG4gICAgICBub3RlTGlzdC5wb3AodGhpcyk7XG4gICAgICBjb25zb2xlLmxvZyhub3RlTGlzdCk7XG4gICAgICBcbiAgICB9KVxuICB9XG59XG5cblxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgbm90ZUVsZW1lbnRzIH0gZnJvbSBcIi4vbm90ZXNET01cIjtcbmltcG9ydCB7IGZvcm1DcmVhdGVyIH0gZnJvbSAnLi9mb3Jtcy5qcyc7XG5cblxuZm9ybUNyZWF0ZXIoXCJub3RlXCIpXG4vL2dldCBlbGVtZW50c1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJub3RlXCJdO1xuXG5leHBvcnQgbGV0IG5vdGVMaXN0ID0gW107XG5cbi8vcHJvamVjdCBjcmVhdGlvblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm90ZSh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSwgXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGF0ZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2F2ZU5vdGVEYXRhKCkge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KG5vdGVMaXN0KSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VOb3RlKCkge1xuICBjb25zdCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJ0aXRsZVwiXScpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbaWQ9XCJkZXNjcmlwdGlvbkJveFwiXScpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImRhdGVcIl0nKS52YWx1ZTtcblxuICBjb25zdCBub3RlID0gY3JlYXRlTm90ZSh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpO1xuICBub3RlTGlzdC5wdXNoKG5vdGUpO1xuXG4gIG5vdGVFbGVtZW50cyhub3RlKTtcbiAgc2F2ZU5vdGVEYXRhKCk7XG5cbn1cblxuXG5cbi8vY3JlYXRlIHByb2plY3RzXG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gIG1ha2VOb3RlKCk7XG59KVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3RlRGF0YSgpIHtcbiAgbGV0IG5kYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpKTtcbiAgcmV0dXJuIG5kYXRhO1xufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHByb2plY3RMaXN0LCBnZXREYXRhIH0gZnJvbSAnLi9wcm9qZWN0T2JqZWN0cy5qcyc7XG5cbi8vZ2V0IGRvYyBlbGVtZW50c1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBwbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuXG5cbi8vY3JlYXRlIHByb2plY3QgZWxlbWVudHMgYW5kIGFkZCBjbGFzc2VzXG5cbmNvbnN0IHByb1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgbmV3YnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG5wcm9QYWdlLmNsYXNzTGlzdC5hZGQoJ3Byb1BhZ2UnKTtcbnByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncGhlYWRlcicpO1xubmV3YnRuLmNsYXNzTGlzdC5hZGQoJ3Byb0J0bicpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEVsZW1lbnRzKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBjb25zdCBwZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cbiAgcHJvamVjdGJveC5jbGFzc0xpc3QuYWRkKCdwYm94Jyk7XG4gIHB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICBwZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gIHBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuXG4gIHBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIHByb1BhZ2UuYXBwZW5kKHByb2plY3Rib3gpO1xuICBwcm9qZWN0Ym94LmFwcGVuZChwdGl0bGUpO1xuICBwdGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdDogJyArIHByb2plY3QudGl0bGU7XG4gIHByb2plY3Rib3guYXBwZW5kKHBkZXNjKTtcbiAgcGRlc2MudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICcgKyBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICBwcm9qZWN0Ym94LmFwcGVuZChwZGF0ZSk7XG4gIHBkYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICcgKyBwcm9qZWN0LmRhdGU7XG4gIHByb2plY3Rib3guYXBwZW5kKGRlbGV0ZUJ0bik7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHByb2plY3Rib3gucmVtb3ZlKHRoaXMpO1xuICAgIHByb2plY3RMaXN0LnBvcCh0aGlzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4gICAgXG4gIH0pXG59XG5cbi8vYWRkIGVsZW1lbnRzIHRvIHBhZ2VcblxuY29udGVudC5hcHBlbmQocHJvUGFnZSk7XG5wcm9QYWdlLmFwcGVuZChwcm9qZWN0SGVhZGVyKTtcbi8vIHByb1BhZ2UuYXBwZW5kKG5ld2J0bik7XG5wcm9QYWdlLmFwcGVuZChuZXdidG4pO1xuLy8gcHJvUGFnZS5hcHBlbmQocHJvamVjdGJveCk7XG5cbi8vIGFkZCB0ZXh0IHBhcnRzXG5cbnByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbm5ld2J0bi50ZXh0Q29udGVudCA9IFwiK05ldyBQcm9qZWN0XCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVkRGF0YSgpIHtcbiAgbGV0IGRhdGEgPSBnZXREYXRhKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBjb25zdCBkYXRhYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0YVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBjb25zdCBkYXRhRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkYXRhRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgXG4gIFxuICAgIGRhdGFib3guY2xhc3NMaXN0LmFkZCgncGJveCcpO1xuICBcbiAgICBwbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkYXRhVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBkYXRhRGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgZGF0YURhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgXG4gICAgcHJvUGFnZS5hcHBlbmQoZGF0YWJveCk7XG4gICAgZGF0YWJveC5hcHBlbmQoZGF0YVRpdGxlKTtcbiAgICBkYXRhVGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdDogJyArIGRhdGFbaV0udGl0bGU7XG4gICAgZGF0YWJveC5hcHBlbmQoZGF0YURlc2MpO1xuICAgIGRhdGFEZXNjLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnICsgZGF0YVtpXS5kZXNjcmlwdGlvbjtcbiAgICBkYXRhYm94LmFwcGVuZChkYXRhRGF0ZSk7XG4gICAgZGF0YURhdGUudGV4dENvbnRlbnQgPSAnRGF0ZTogJyArIGRhdGFbaV0uZGF0ZTtcbiAgICBkYXRhYm94LmFwcGVuZChkZWxldGVCdG4pO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBkYXRhYm94LnJlbW92ZSh0aGlzKTtcbiAgICAgIHByb2plY3RMaXN0LnBvcCh0aGlzKTtcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICAgIFxuICAgIH0pXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgcHJvamVjdEVsZW1lbnRzIH0gZnJvbSBcIi4vcHJvamVjdERPTVwiO1xuaW1wb3J0IHsgZm9ybUNyZWF0ZXIgfSBmcm9tICcuL2Zvcm1zLmpzJztcblxuZm9ybUNyZWF0ZXIoXCJwcm9qZWN0XCIpO1xuXG4vL2dldCBlbGVtZW50c1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJwcm9qZWN0XCJdO1xuLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XG4vLyBjb25zdCBwcm9QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb1BhZ2UnKTtcblxuZXhwb3J0IGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG4vL3Byb2plY3QgY3JlYXRpb25cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsIFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRhdGUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNhdmVEYXRhKCkge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm9qZWN0KCkge1xuICBjb25zdCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJ0aXRsZVwiXScpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbaWQ9XCJkZXNjcmlwdGlvbkJveFwiXScpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImRhdGVcIl0nKS52YWx1ZTtcblxuICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpO1xuICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuXG4gIHByb2plY3RFbGVtZW50cyhwcm9qZWN0KTtcbiAgc2F2ZURhdGEoKTtcblxufVxuXG5cblxuLy9jcmVhdGUgcHJvamVjdHNcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgbWFrZVByb2plY3QoKTtcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xufSlcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8vIGdldERhdGEoKTtcblxuLy8gY29uc29sZS5sb2coZ2V0RGF0YSgpKTtcblxuLy8gY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy9nZW5lcmF0ZSB0aGUgaW5kaXZpZHVhbCBzZWN0aW9uc1xuaW1wb3J0ICcuL2Zvcm1zLmpzJztcbmltcG9ydCAnLi9wcm9qZWN0RE9NLmpzJztcbmltcG9ydCAnLi9ub3Rlc0RPTS5qcyc7XG5pbXBvcnQgJy4vbGlzdERPTS5qcyc7XG5cbi8vZ2V0IG9iamVjdHMgZm9yIGVhY2ggc2VjdGlvblxuXG5pbXBvcnQgeyBzdG9yZWREYXRhIH0gZnJvbSAnLi9wcm9qZWN0RE9NLmpzJztcbmltcG9ydCB7IHN0b3JlZE5vdGVEYXRhIH0gZnJvbSAnLi9ub3Rlc0RPTS5qcyc7XG5pbXBvcnQgeyBzdG9yZWRMaXN0RGF0YSB9IGZyb20gJy4vbGlzdERPTS5qcyc7XG5cbi8vZ2V0IGdlbmVyYWwgZWxlbWVudHNcbmNvbnN0IHBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG5jb25zdCBubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZScpO1xuY29uc3QgbG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcbmNvbnN0IHByb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9CdG4nKTtcbmNvbnN0IGJ0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuMicpO1xuY29uc3QgYnRuMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4zJyk7XG5jb25zdCBwY2xvc2VidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHgnKTtcbmNvbnN0IG5jbG9zZWJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RleCcpO1xuY29uc3QgbGNsb3NlYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3R4Jyk7XG5jb25zdCBwZm9ybSA9IGRvY3VtZW50LmZvcm1zW1wicHJvamVjdFwiXTtcbmNvbnN0IHBjaG9pY2UgPSBwZm9ybS5xdWVyeVNlbGVjdG9yKCcjY2hvaWNlcycpO1xuY29uc3QgbmZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcIm5vdGVcIl07XG5jb25zdCBuY2hvaWNlID0gbmZvcm0ucXVlcnlTZWxlY3RvcignI2Nob2ljZXMnKTtcbmNvbnN0IGxmb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJsaXN0XCJdO1xuY29uc3QgbGNob2ljZSA9IGxmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNjaG9pY2VzJyk7XG5cbi8vdGFiIHNlbGVjdGlvbiBmcm9tIGRvbVxuXG5jb25zdCBwcm90YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdGFiJyk7XG5jb25zdCBub3RldGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGV0YWInKTtcbmNvbnN0IGxpc3R0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdHRhYicpO1xuXG4vL3BhZ2Ugc2VsZWN0aW9uXG5cbmNvbnN0IHByb1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvUGFnZScpO1xuY29uc3Qgbm90ZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZVBhZ2UnKTtcbmNvbnN0IGxpc3RQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RQYWdlJyk7XG5cbi8vIGRpc3BsYXkgY2hvaWNlcyBvZiB0YWJcblxucHJvdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHByb1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBub3RlUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGxpc3RQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pXG5cbm5vdGV0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgcHJvUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIG5vdGVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGxpc3RQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pXG5cbmxpc3R0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgcHJvUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIG5vdGVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbGlzdFBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5cbi8vbW9kYWwgZm9yIGVhY2ggdGFiXG5cbnByb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBwbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgcGNob2ljZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBUaXRsZTpcIjtcbn0pXG5cbmJ0bjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgbm1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIG5jaG9pY2UudGV4dENvbnRlbnQgPSBcIk5vdGUgVGl0bGU6XCI7XG59KVxuXG5idG4zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGxtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBsY2hvaWNlLnRleHRDb250ZW50ID0gXCJMaXN0IFRpdGxlOlwiO1xufSlcblxucGNsb3NlYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuICBcbm5jbG9zZWJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBubW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSlcblxubGNsb3NlYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGxtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG4vL29iamVjdCBjcmVhdGlvbiBmb3IgZWFjaCB0YWJcblxuXG5zdG9yZWREYXRhKCk7XG5zdG9yZWROb3RlRGF0YSgpO1xuc3RvcmVkTGlzdERhdGEoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=