module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/jss/nextjs-material-kit.js":
/*!*******************************************!*\
  !*** ./assets/jss/nextjs-material-kit.js ***!
  \*******************************************/
/*! exports provided: hexToRGBAlpha, drawerWidth, transition, container, conatinerFluid, boxShadow, card, defaultFont, primaryColor, warningColor, dangerColor, successColor, infoColor, roseColor, grayColor, primaryBoxShadow, infoBoxShadow, successBoxShadow, warningBoxShadow, dangerBoxShadow, roseBoxShadow, warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader, cardActions, cardHeader, defaultBoxShadow, title, smallTitle, cardTitle, cardLink, cardSubtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGBAlpha", function() { return hexToRGBAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conatinerFluid", function() { return conatinerFluid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFont", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningColor", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerColor", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successColor", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoColor", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseColor", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayColor", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryBoxShadow", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBoxShadow", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successBoxShadow", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningBoxShadow", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerBoxShadow", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseBoxShadow", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningCardHeader", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successCardHeader", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerCardHeader", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoCardHeader", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryCardHeader", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseCardHeader", function() { return roseCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardActions", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHeader", function() { return cardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBoxShadow", function() { return defaultBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallTitle", function() { return smallTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTitle", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLink", function() { return cardLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSubtitle", function() { return cardSubtitle; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const hexColorToRGB = function (hexColor) {
  let detectShorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // #000 vs #000000

  hexColor = hexColor.replace(detectShorthand, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const hex_array = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor); // #000000 to #ffffff

  return hex_array ? {
    r: parseInt(hex_array[1], 16),
    // 0-255
    g: parseInt(hex_array[2], 16),
    // 0-255
    b: parseInt(hex_array[3], 16) // 0-255

  } : null;
};

const hexToRGBAlpha = function (hexColor, alpha) {
  let rgb = hexColorToRGB(hexColor);
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
};

const drawerWidth = 260;
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

const container = _objectSpread(_objectSpread({}, conatinerFluid), {}, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};
const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const primaryColor = "#9c27b0";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";
const primaryBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(primaryColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(primaryColor, 0.2)}`
};
const infoBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(infoColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(infoColor, 0.2)}`
};
const successBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(successColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(successColor, 0.2)}`
};
const warningBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(warningColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(warningColor, 0.2)}`
};
const dangerBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(dangerColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(dangerColor, 0.2)}`
};
const roseBoxShadow = {
  boxShadow: `0 4px 20px 0px ${hexToRGBAlpha("#000", 0.14)}, 0 7px 10px -5px ${hexToRGBAlpha(roseColor, 0.4)}`
};

const warningCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)"
}, warningBoxShadow);

const successCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)"
}, successBoxShadow);

const dangerCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)"
}, dangerBoxShadow);

const infoCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)"
}, infoBoxShadow);

const primaryCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)"
}, primaryBoxShadow);

const roseCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)"
}, roseBoxShadow);

const cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};

const smallTitle = _objectSpread(_objectSpread({}, title), {}, {
  marginTop: ".625rem"
});

const cardTitle = _objectSpread(_objectSpread({}, smallTitle), {}, {
  marginTop: ".625rem"
});

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};


/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/buttonStyle.js":
/*!******************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/buttonStyle.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    color: "#FFFFFF",
    boxShadow: "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
      boxShadow: "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    boxShadow: `0 2px 2px 0 ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.14)}, 0 3px 1px -2px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.2)}, 0 1px 5px 0 ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      boxShadow: `0 14px 26px -12px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.2)}`
    }
  },
  info: {
    backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
    boxShadow: `0 2px 2px 0 ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"], 0.14)}, 0 3px 1px -2px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"], 0.2)}, 0 1px 5px 0 ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      boxShadow: `0 14px 26px -12px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"], 0.2)}`
    }
  },
  success: {
    backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
    boxShadow: `0 2px 2px 0 ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"], 0.14)}, 0 3px 1px -2px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"], 0.2)}, 0 1px 5px 0 ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      boxShadow: `0 14px 26px -12px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"], 0.2)}`
    }
  },
  warning: {
    backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
    boxShadow: `0 2px 2px 0 ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"], 0.14)}, 0 3px 1px -2px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"], 0.2)}, 0 1px 5px 0 ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      boxShadow: `0 14px 26px -12px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"], 0.2)}`
    }
  },
  danger: {
    backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
    boxShadow: `0 2px 2px 0 ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"], 0.14)}, 0 3px 1px -2px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"], 0.2)}, 0 1px 5px 0 ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      boxShadow: `0 14px 26px -12px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"], 0.2)}`
    }
  },
  rose: {
    backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
    boxShadow: `0 2px 2px 0 ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.14)}, 0 3px 1px -2px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.2)}, 0 1px 5px 0 ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
      boxShadow: `0 14px 26px -12px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGBAlpha"])(_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"], 0.2)}`
    }
  },
  white: {
    "&,&:focus,&:hover,&:visited": {
      backgroundColor: "#FFFFFF",
      color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
    }
  },
  twitter: {
    backgroundColor: "#55acee",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)",
    "&:hover,&:focus,&:visited": {
      backgroundColor: "#55acee",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
    }
  },
  facebook: {
    backgroundColor: "#3b5998",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#3b5998",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
    }
  },
  google: {
    backgroundColor: "#dd4b39",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#dd4b39",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
    }
  },
  github: {
    backgroundColor: "#333333",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#333333",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover,&:visited": {
      color: "#FFFFFF",
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: "#55acee"
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: "#3b5998"
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: "#dd4b39"
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: "#333333"
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover,&:visited": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: "#999999",
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (buttonStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/cardBodyStyle.js":
/*!********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/cardBodyStyle.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto",
    color: "inherit"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardBodyStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/cardFooterStyle.js":
/*!**********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/cardFooterStyle.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardFooterStyle = {
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: "0.9375rem 1.875rem",
    color: "inherit"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardFooterStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/cardStyle.js":
/*!****************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/cardStyle.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "inherit",
    background: "#fff",
    width: "100%",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear"
  },
  cardPlain: {
    background: "transparent",
    color: "inherit",
    boxShadow: "none"
  },
  cardCarousel: {
    overflow: "hidden"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/customInputStyle.js":
/*!***********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/customInputStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const customInputStyle = {
  disabled: {
    "&:before": {
      borderColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
    }
  },
  underlineError: {
    "&:after": {
      borderColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#FFFFFF"
    },
    "&:after": {
      borderColor: "#FFFFFF"
    }
  },
  labelRoot: _objectSpread(_objectSpread({}, _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    }
  }),
  labelRootError: {
    color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"] + " !important"
  },
  labelRootSuccess: {
    color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"] + " !important"
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057"
    }
  },
  input: {
    color: "#495057",
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#FFFFFF",
      opacity: "1"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customInputStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/infoStyle.js":
/*!****************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/infoStyle.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../..//nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
  },
  warning: {
    color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
  },
  danger: {
    color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  success: {
    color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
  },
  info: {
    color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
  },
  rose: {
    color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
  },
  gray: {
    color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
  },
  icon: {
    width: "36px",
    height: "36px"
  },
  descriptionWrapper: {
    color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    overflow: "hidden"
  },
  title: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["title"],
  description: {
    color: _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "14px"
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (infoStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/imagesStyles.js":
/*!********************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/imagesStyles.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (imagesStyles);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/landingPageSections/packageStyle.js":
/*!**********************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/landingPageSections/packageStyle.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var _imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../imagesStyles.js */ "./assets/jss/nextjs-material-kit/imagesStyles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const packageStyle = _objectSpread(_objectSpread({
  section: {
    padding: "10px 0",
    textAlign: "center"
  },
  title: _objectSpread(_objectSpread({}, _nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    marginBottom: "1rem",
    marginTop: "5px",
    minHeight: "10px",
    textDecoration: "none",
    color: "inherit"
  })
}, _imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "inherit"
  },
  cardTitle: {
    color: "inherit"
  },
  smallTitle: {
    color: "inherit",
    marginBottom: "1rem"
  },
  description: {
    color: "inherit",
    marginBottom: "1rem"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "10px",
    fontSize: "20px",
    color: "inherit"
  },
  margin5: {
    margin: "5px"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (packageStyle);

/***/ }),

/***/ "./pages-sections/LandingPage-Sections/PackageSection.js":
/*!***************************************************************!*\
  !*** ./pages-sections/LandingPage-Sections/PackageSection.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PackageSection; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var _src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var _src_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var _src_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/components/Card/Card.js */ "./src/components/Card/Card.js");
/* harmony import */ var _src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/components/Card/CardBody.js */ "./src/components/Card/CardBody.js");
/* harmony import */ var _src_components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/components/Card/CardFooter.js */ "./src/components/Card/CardFooter.js");
/* harmony import */ var _assets_jss_nextjs_material_kit_pages_landingPageSections_packageStyle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/jss/nextjs-material-kit/pages/landingPageSections/packageStyle.js */ "./assets/jss/nextjs-material-kit/pages/landingPageSections/packageStyle.js");

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\pages-sections\\LandingPage-Sections\\PackageSection.js";
 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_assets_jss_nextjs_material_kit_pages_landingPageSections_packageStyle_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
function PackageSection() {
  const classes = useStyles();
  const imageClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.section,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: classes.title,
      children: "Node.js modules I have authored:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          xs: 24,
          sm: 24,
          md: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
            plain: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
              xs: 24,
              sm: 24,
              md: 12,
              className: classes.itemGrid,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: `images/sportsdataverse-node.png`,
                alt: "sportsdataverse-node-js"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["sportsdataverse", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "All collegiate and 6 Professional sports"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "Support for the following types of data from ESPN's endpoints: play-by-play (including shot location data when available), scores, schedule, standings, rankings (not available for professional sports)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Recruiting data from 247Sports available for: men's college basketball, college football."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "The following sports are available from ESPN: College Basketball, Women's College Basketball, College Football, WNBA, NBA, NFL, and NHL."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "All team sports on the NCAA website: 'football', 'basketball-men', 'basketball-women', 'soccer-men', 'soccer-women', 'fieldhockey', 'volleyball-women', 'icehockey-men', 'icehockey-women', 'baseball','beach-volleyball', 'lacrosse-men', 'lacrosse-women', 'volleyball-men'"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: classes.title,
      children: "R packages I have authored:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          xs: 12,
          sm: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
            plain: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
              xs: 12,
              sm: 12,
              md: 6,
              className: classes.itemGrid,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: `images/cfbscrapR-logo.png`,
                alt: "cfbscrapR"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["cfbscrapR", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "College Football - R"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "cfbscrapR is an R package for working with College Football data."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "It is an R API wrapper around https://collegefootballdata.com/."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "It provides users the capability to retrieve data from the API and supplement that data with Expected Points Added/Win Probability added metrics."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          xs: 12,
          sm: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
            plain: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
              xs: 12,
              sm: 12,
              md: 6,
              className: classes.itemGrid,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: `images/kenpomR-logo.png`,
                alt: "kenpomR"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["kenpomR", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "Men's College Basketball - R"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "kenpomR is an R package for working with men's college basketball data. A scraping and aggregating interface for Ken Pomeroy\u2019s college basketball statistics website, kenpom.com."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "Also provides support for ESPN\u2019s men's college basketball game data and NCAA NET Rankings."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          xs: 12,
          sm: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
            plain: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
              xs: 12,
              sm: 12,
              md: 6,
              className: classes.itemGrid,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: `images/wehoop-logo.png`,
                alt: "wehoop"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["wehoop", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "WNBA and Women's College Basketball - R"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "wehoop is an R package for working with WNBA and women's college basketball data."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "Provides support for ESPN\u2019s WNBA and women's college basketball game data and NCAA NET Rankings."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          xs: 12,
          sm: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
            plain: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
              xs: 12,
              sm: 12,
              md: 7,
              className: classes.itemGrid,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: `images/cfbrecruitR-logo.png`,
                alt: "cfbrecruitR"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["cfbrecruitR", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "College Football Recruiting - R"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "cfbrecruitR is an R package for working with college football recruiting data."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          xs: 12,
          sm: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
            plain: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
              xs: 12,
              sm: 12,
              md: 7,
              className: classes.itemGrid,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: `images/cfbscrapR-data-repo.png`,
                alt: "cfbscrapR-data"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["cfbscrapR-data", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "College Football - Data"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "cfbscrapR-data is a repository for working with CFB data. 2014-2020 data included in csv, rds, and parquet format."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          xs: 12,
          sm: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
            plain: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
              xs: 12,
              sm: 12,
              md: 7,
              className: classes.itemGrid,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: `images/kenpomR-data-repo.png`,
                alt: "kenpomR-data"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["kenpomR-data", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "Men's College Basketball - R"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "kenpomR contains data for most teams, players and coaches from 2002-2020. All data provided in csv format."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages-sections/LandingPage-Sections/ProductSection.js":
/*!***************************************************************!*\
  !*** ./pages-sections/LandingPage-Sections/ProductSection.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSection; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Chat */ "@material-ui/icons/Chat");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ "@material-ui/icons/VerifiedUser");
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Fingerprint */ "@material-ui/icons/Fingerprint");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var _src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var _src_components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/components/InfoArea/InfoArea.js */ "./src/components/InfoArea/InfoArea.js");
/* harmony import */ var _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/Shared.module.css */ "./styles/Shared.module.css");
/* harmony import */ var _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\pages-sections\\LandingPage-Sections\\ProductSection.js";
 // @material-ui/core components

 // @material-ui/icons



 // core components





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(_styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_9___default.a);
function ProductSection() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.section,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      justify: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        xs: 12,
        sm: 12,
        md: 8,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: classes.title,
          children: "Talk Data to Me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: classes.description,
          children: "I am always looking to add more developers to the SportsDataverse developer group who share common cause with the aim to make the sports data industry more diverse and inclusive."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      justify: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        xs: 12,
        sm: 12,
        md: 8,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: classes.description,
          children: "The SportsDataverse is a concept I have been working on with a handful of other people to create and develop packages in Python, R and Node.js. Among the goals of the SportsDataverse is to flatten the learning curve the average user has to go through to get access to the highest quality open-source data and analytics"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages-sections/LandingPage-Sections/WorkSection.js":
/*!************************************************************!*\
  !*** ./pages-sections/LandingPage-Sections/WorkSection.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkSection; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var _src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var _src_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/CustomInput/CustomInput.js */ "./src/components/CustomInput/CustomInput.js");
/* harmony import */ var _src_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Shared.module.css */ "./styles/Shared.module.css");
/* harmony import */ var _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\pages-sections\\LandingPage-Sections\\WorkSection.js";
 // @material-ui/core components

 // @material-ui/icons
// core components






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(_styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_7___default.a);
function WorkSection() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.section,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      justify: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        cs: 12,
        sm: 12,
        md: 8,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: classes.title,
          children: "Work with us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: classes.description,
          children: "Are you interested in working with sports data, developing open-source packages and helping teach others to do the same? Our group is dedicated to the cause of trying to include people from more diverse backgrounds and underrepresented groups in sports."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: classes.description,
          children: "Additionally, we are making the publicly available sports data much more accessible to the common person. The desired goal is to create a supportive community that will provide guidance and mentor those who want to be a part of the solution. Drop me a brief message below so that I can reach out to you!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
              xs: 12,
              sm: 12,
              md: 6,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
                labelText: "Your Name",
                id: "name",
                formControlProps: {
                  fullWidth: true
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
              xs: 12,
              sm: 12,
              md: 6,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
                labelText: "Your Email",
                id: "email",
                formControlProps: {
                  fullWidth: true
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
              xs: 12,
              sm: 12,
              md: 6,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
                labelText: "Your Message",
                id: "message",
                formControlProps: {
                  fullWidth: true,
                  className: classes.textArea
                },
                inputProps: {
                  multiline: true,
                  rows: 5
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
              xs: 12,
              sm: 12,
              md: 4,
              className: classes.textCenter,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                color: "primary",
                children: "Send Message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandingPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Shared.module.css */ "./styles/Shared.module.css");
/* harmony import */ var _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_types_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/types/constants */ "./src/types/constants.ts");
/* harmony import */ var _pages_sections_LandingPage_Sections_ProductSection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages-sections/LandingPage-Sections/ProductSection.js */ "./pages-sections/LandingPage-Sections/ProductSection.js");
/* harmony import */ var _pages_sections_LandingPage_Sections_PackageSection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages-sections/LandingPage-Sections/PackageSection.js */ "./pages-sections/LandingPage-Sections/PackageSection.js");
/* harmony import */ var _pages_sections_LandingPage_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages-sections/LandingPage-Sections/WorkSection.js */ "./pages-sections/LandingPage-Sections/WorkSection.js");


var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\pages\\index.tsx";
 // nodejs library that concatenates classes

 // @material-ui/core components

// @material-ui/icons
// core components






 // Sections for this page




function LandingPage(props) {
  const large = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()('(min-width:700px)');
  const rest = Object.assign({}, props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [_src_types_constants__WEBPACK_IMPORTED_MODULE_9__["NAME"], ": Building the SportsDataverse"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: `${_src_types_constants__WEBPACK_IMPORTED_MODULE_9__["NAME"]} is the personal page of Saiem Gilani, giving updates on the SportsDataverse.`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 12,
        className: _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headings,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
          p: 5,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
            variant: large ? 'h1' : 'h4',
            children: _src_types_constants__WEBPACK_IMPORTED_MODULE_9__["NAME_AND_DOMAIN"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
            className: _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.secondHeading,
            variant: large ? 'h3' : 'h6',
            children: "Building the SportsDataverse."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.main, _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainRaised),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headings,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_sections_LandingPage_Sections_PackageSection_js__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_sections_LandingPage_Sections_ProductSection_js__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_sections_LandingPage_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Footer__WEBPACK_IMPORTED_MODULE_3__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/components/Card/Card.js":
/*!*************************************!*\
  !*** ./src/components/Card/Card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_jss_nextjs_material_kit_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/jss/nextjs-material-kit/components/cardStyle.js */ "./assets/jss/nextjs-material-kit/components/cardStyle.js");

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\src\\components\\Card\\Card.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(_assets_jss_nextjs_material_kit_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function Card(props) {
  const classes = useStyles();

  const {
    className,
    children,
    plain,
    carousel
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "carousel"]);

  const cardClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: cardClasses
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
Card.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  carousel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./src/components/Card/CardBody.js":
/*!*****************************************!*\
  !*** ./src/components/Card/CardBody.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardBody; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_jss_nextjs_material_kit_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/jss/nextjs-material-kit/components/cardBodyStyle.js */ "./assets/jss/nextjs-material-kit/components/cardBodyStyle.js");

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\src\\components\\Card\\CardBody.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(_assets_jss_nextjs_material_kit_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function CardBody(props) {
  const classes = useStyles();

  const {
    className,
    children
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children"]);

  const cardBodyClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.cardBody]: true,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: cardBodyClasses
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
CardBody.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./src/components/Card/CardFooter.js":
/*!*******************************************!*\
  !*** ./src/components/Card/CardFooter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardFooter; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_jss_nextjs_material_kit_components_cardFooterStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/jss/nextjs-material-kit/components/cardFooterStyle.js */ "./assets/jss/nextjs-material-kit/components/cardFooterStyle.js");

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\src\\components\\Card\\CardFooter.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(_assets_jss_nextjs_material_kit_components_cardFooterStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function CardFooter(props) {
  const classes = useStyles();

  const {
    className,
    children
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children"]);

  const cardFooterClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.cardFooter]: true,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: cardFooterClasses
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
CardFooter.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./src/components/CustomButtons/Button.js":
/*!************************************************!*\
  !*** ./src/components/CustomButtons/Button.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_jss_nextjs_material_kit_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/jss/nextjs-material-kit/components/buttonStyle.js */ "./assets/jss/nextjs-material-kit/components/buttonStyle.js");

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\src\\components\\CustomButtons\\Button.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components


 // core components


const makeComponentStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default()(() => _objectSpread({}, _assets_jss_nextjs_material_kit_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]));
const RegularButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "className"]);

  const classes = makeComponentStyles();
  const btnClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({}, rest), {}, {
    ref: ref,
    classes: {
      root: btnClasses
    },
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
});
RegularButton.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "facebook", "twitter", "google", "github", "transparent"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["sm", "lg"]),
  simple: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  round: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  justIcon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (RegularButton);

/***/ }),

/***/ "./src/components/CustomInput/CustomInput.js":
/*!***************************************************!*\
  !*** ./src/components/CustomInput/CustomInput.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomInput; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_jss_nextjs_material_kit_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/jss/nextjs-material-kit/components/customInputStyle.js */ "./assets/jss/nextjs-material-kit/components/customInputStyle.js");

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\src\\components\\CustomInput\\CustomInput.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(_assets_jss_nextjs_material_kit_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function CustomInput(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success
  } = props;
  const labelClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [classes.input]: true,
    [classes.whiteInput]: white
  });
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({}, formControlProps), {}, {
    className: formControlClasses,
    children: [labelText !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6___default.a, _objectSpread(_objectSpread({
      className: classes.labelRoot + " " + labelClasses,
      htmlFor: id
    }, labelProps), {}, {
      children: labelText
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default.a, _objectSpread({
      classes: {
        input: inputClasses,
        root: marginTop,
        disabled: classes.disabled,
        underline: underlineClasses
      },
      id: id
    }, inputProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
CustomInput.propTypes = {
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  formControlProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  inputRootCustomClasses: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  success: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  white: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Footer.module.css */ "./styles/Footer.module.css");
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\src\\components\\Footer.tsx";



const Footer = ({}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "body1",
      display: "inline",
      className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a['footer-content'],
      children: ["Copyright \xA9 2021", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "http://www.github.com/saiemgilani",
        target: "_blank",
        rel: "noreferrer",
        children: "Saiem Gilani"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/Grid/GridContainer.js":
/*!**********************************************!*\
  !*** ./src/components/Grid/GridContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\src\\components\\Grid\\GridContainer.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

 // @material-ui/core components



const styles = {
  grid: {
    marginRight: "0px",
    marginLeft: "0px",
    width: "auto",
    color: "inherit"
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles);
function GridContainer(props) {
  const classes = useStyles();

  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread(_objectSpread({
    container: true
  }, rest), {}, {
    className: classes.grid + " " + className,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
GridContainer.defaultProps = {
  className: ""
};
GridContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/***/ }),

/***/ "./src/components/Grid/GridItem.js":
/*!*****************************************!*\
  !*** ./src/components/Grid/GridItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\src\\components\\Grid\\GridItem.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

 // @material-ui/core components



const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto",
    color: "inherit"
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles);
function GridItem(props) {
  const classes = useStyles();

  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread(_objectSpread({
    item: true
  }, rest), {}, {
    className: classes.grid + " " + className,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
GridItem.defaultProps = {
  className: ""
};
GridItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/***/ }),

/***/ "./src/components/InfoArea/InfoArea.js":
/*!*********************************************!*\
  !*** ./src/components/InfoArea/InfoArea.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoArea; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_jss_nextjs_material_kit_components_infoStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/jss/nextjs-material-kit/components/infoStyle.js */ "./assets/jss/nextjs-material-kit/components/infoStyle.js");

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\src\\components\\InfoArea\\InfoArea.js";
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(_assets_jss_nextjs_material_kit_components_infoStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function InfoArea(props) {
  const classes = useStyles();
  const {
    title,
    description,
    iconColor,
    vertical
  } = props;
  const iconWrapper = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.infoArea,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: iconWrapper,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(props.icon, {
        className: iconClasses
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.descriptionWrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        className: classes.title,
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: classes.description,
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
InfoArea.defaultProps = {
  iconColor: "gray"
};
InfoArea.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]).isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  iconColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./src/types/constants.ts":
/*!********************************!*\
  !*** ./src/types/constants.ts ***!
  \********************************/
/*! exports provided: NAME, NAME_AND_DOMAIN, BASE_URL, DEPLOYMENTS_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME_AND_DOMAIN", function() { return NAME_AND_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEPLOYMENTS_URL", function() { return DEPLOYMENTS_URL; });
const NAME = 'SG';
const NAME_AND_DOMAIN = 'SG';
const BASE_URL = 'https://saiemgilani.me';
const DEPLOYMENTS_URL = 'https://api.github.com/repos/saiemgilani/saiem-blog/deployments';

/***/ }),

/***/ "./styles/Footer.module.css":
/*!**********************************!*\
  !*** ./styles/Footer.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__317iK"
};


/***/ }),

/***/ "./styles/Shared.module.css":
/*!**********************************!*\
  !*** ./styles/Shared.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headings": "Shared_headings__r3y72",
	"secondHeading": "Shared_secondHeading__gqAxO"
};


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/makeStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/makeStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "@material-ui/icons/Chat":
/*!******************************************!*\
  !*** external "@material-ui/icons/Chat" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "@material-ui/icons/Fingerprint":
/*!*************************************************!*\
  !*** external "@material-ui/icons/Fingerprint" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Fingerprint");

/***/ }),

/***/ "@material-ui/icons/VerifiedUser":
/*!**************************************************!*\
  !*** external "@material-ui/icons/VerifiedUser" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VerifiedUser");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2J1dHRvblN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2NhcmRCb2R5U3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvY2FyZEZvb3RlclN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2NhcmRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9jdXN0b21JbnB1dFN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2luZm9TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvaW1hZ2VzU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9sYW5kaW5nUGFnZVNlY3Rpb25zL3BhY2thZ2VTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9QYWNrYWdlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9Qcm9kdWN0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9Xb3JrU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUlucHV0L0N1c3RvbUlucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5mb0FyZWEvSW5mb0FyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvRm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmluZ2VycHJpbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmVyaWZpZWRVc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImhleENvbG9yVG9SR0IiLCJoZXhDb2xvciIsImRldGVjdFNob3J0aGFuZCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJiIiwiaGV4X2FycmF5IiwiZXhlYyIsInBhcnNlSW50IiwiaGV4VG9SR0JBbHBoYSIsImFscGhhIiwicmdiIiwiZHJhd2VyV2lkdGgiLCJ0cmFuc2l0aW9uIiwiY29uYXRpbmVyRmx1aWQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiY29udGFpbmVyIiwibWF4V2lkdGgiLCJib3hTaGFkb3ciLCJjYXJkIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdEZvbnQiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJwcmltYXJ5Q29sb3IiLCJ3YXJuaW5nQ29sb3IiLCJkYW5nZXJDb2xvciIsInN1Y2Nlc3NDb2xvciIsImluZm9Db2xvciIsInJvc2VDb2xvciIsImdyYXlDb2xvciIsInByaW1hcnlCb3hTaGFkb3ciLCJpbmZvQm94U2hhZG93Iiwic3VjY2Vzc0JveFNoYWRvdyIsIndhcm5pbmdCb3hTaGFkb3ciLCJkYW5nZXJCb3hTaGFkb3ciLCJyb3NlQm94U2hhZG93Iiwid2FybmluZ0NhcmRIZWFkZXIiLCJzdWNjZXNzQ2FyZEhlYWRlciIsImRhbmdlckNhcmRIZWFkZXIiLCJpbmZvQ2FyZEhlYWRlciIsInByaW1hcnlDYXJkSGVhZGVyIiwicm9zZUNhcmRIZWFkZXIiLCJjYXJkQWN0aW9ucyIsInBhZGRpbmdUb3AiLCJib3JkZXJUb3AiLCJoZWlnaHQiLCJjYXJkSGVhZGVyIiwicGFkZGluZyIsImRlZmF1bHRCb3hTaGFkb3ciLCJib3JkZXIiLCJ0aXRsZSIsInRleHREZWNvcmF0aW9uIiwic21hbGxUaXRsZSIsIm1hcmdpblRvcCIsImNhcmRUaXRsZSIsImNhcmRMaW5rIiwiY2FyZFN1YnRpdGxlIiwibWFyZ2luQm90dG9tIiwiYnV0dG9uU3R5bGUiLCJidXR0b24iLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImxldHRlclNwYWNpbmciLCJ3aWxsQ2hhbmdlIiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSIsInZlcnRpY2FsQWxpZ24iLCJ0b3VjaEFjdGlvbiIsImN1cnNvciIsInRvcCIsInRyYW5zZm9ybSIsImxlZnQiLCJmdWxsV2lkdGgiLCJwcmltYXJ5IiwiaW5mbyIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZGFuZ2VyIiwicm9zZSIsIndoaXRlIiwidHdpdHRlciIsImZhY2Vib29rIiwiZ29vZ2xlIiwiZ2l0aHViIiwic2ltcGxlIiwidHJhbnNwYXJlbnQiLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwibGciLCJzbSIsInJvdW5kIiwiYmxvY2siLCJsaW5rIiwianVzdEljb24iLCJjYXJkQm9keVN0eWxlIiwiY2FyZEJvZHkiLCJmbGV4IiwiY2FyZEZvb3RlclN0eWxlIiwiY2FyZEZvb3RlciIsImFsaWduSXRlbXMiLCJjYXJkU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwid29yZFdyYXAiLCJjYXJkUGxhaW4iLCJjYXJkQ2Fyb3VzZWwiLCJvdmVyZmxvdyIsImN1c3RvbUlucHV0U3R5bGUiLCJib3JkZXJDb2xvciIsInVuZGVybGluZSIsImJvcmRlcldpZHRoIiwidW5kZXJsaW5lRXJyb3IiLCJ1bmRlcmxpbmVTdWNjZXNzIiwid2hpdGVVbmRlcmxpbmUiLCJsYWJlbFJvb3QiLCJsYWJlbFJvb3RFcnJvciIsImxhYmVsUm9vdFN1Y2Nlc3MiLCJmb3JtQ29udHJvbCIsImlucHV0Iiwid2hpdGVJbnB1dCIsImluZm9TdHlsZSIsImluZm9BcmVhIiwiaWNvbldyYXBwZXIiLCJmbG9hdCIsImdyYXkiLCJpY29uIiwiZGVzY3JpcHRpb25XcmFwcGVyIiwiZGVzY3JpcHRpb24iLCJpY29uV3JhcHBlclZlcnRpY2FsIiwiaWNvblZlcnRpY2FsIiwiaW1hZ2VzU3R5bGVzIiwiaW1nRmx1aWQiLCJpbWdSb3VuZGVkIiwiaW1nUm91bmRlZENpcmNsZSIsImltZ1JhaXNlZCIsImltZ0dhbGxlcnkiLCJpbWdDYXJkVG9wIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiaW1nQ2FyZEJvdHRvbSIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImltZ0NhcmQiLCJpbWdDYXJkT3ZlcmxheSIsInJpZ2h0IiwiYm90dG9tIiwicGFja2FnZVN0eWxlIiwic2VjdGlvbiIsImltYWdlc1N0eWxlIiwiaXRlbUdyaWQiLCJqdXN0aWZ5Q2VudGVyIiwianVzdGlmeUNvbnRlbnQiLCJzb2NpYWxzIiwibWFyZ2luNSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJQYWNrYWdlU2VjdGlvbiIsImNsYXNzZXMiLCJpbWFnZUNsYXNzZXMiLCJjbGFzc05hbWVzIiwiUHJvZHVjdFNlY3Rpb24iLCJXb3JrU2VjdGlvbiIsImNsYXNzTmFtZSIsInRleHRBcmVhIiwibXVsdGlsaW5lIiwicm93cyIsInRleHRDZW50ZXIiLCJMYW5kaW5nUGFnZSIsInByb3BzIiwibGFyZ2UiLCJ1c2VNZWRpYVF1ZXJ5IiwicmVzdCIsIk5BTUUiLCJoZWFkaW5ncyIsIk5BTUVfQU5EX0RPTUFJTiIsInNlY29uZEhlYWRpbmciLCJtYWluIiwibWFpblJhaXNlZCIsIkNhcmQiLCJjaGlsZHJlbiIsInBsYWluIiwiY2Fyb3VzZWwiLCJjYXJkQ2xhc3NlcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJub2RlIiwiQ2FyZEJvZHkiLCJjYXJkQm9keUNsYXNzZXMiLCJDYXJkRm9vdGVyIiwiY2FyZEZvb3RlckNsYXNzZXMiLCJtYWtlQ29tcG9uZW50U3R5bGVzIiwiUmVndWxhckJ1dHRvbiIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsInNpemUiLCJidG5DbGFzc2VzIiwicm9vdCIsIm9uZU9mIiwiQ3VzdG9tSW5wdXQiLCJmb3JtQ29udHJvbFByb3BzIiwibGFiZWxUZXh0IiwiaWQiLCJsYWJlbFByb3BzIiwiaW5wdXRQcm9wcyIsImVycm9yIiwiaW5wdXRSb290Q3VzdG9tQ2xhc3NlcyIsImxhYmVsQ2xhc3NlcyIsInVuZGVybGluZUNsYXNzZXMiLCJpbnB1dENsYXNzZXMiLCJmb3JtQ29udHJvbENsYXNzZXMiLCJvYmplY3QiLCJGb290ZXIiLCJzdHlsZSIsImZvb3RlciIsImdyaWQiLCJHcmlkQ29udGFpbmVyIiwiZGVmYXVsdFByb3BzIiwiZmxleEJhc2lzIiwiR3JpZEl0ZW0iLCJJbmZvQXJlYSIsImljb25Db2xvciIsInZlcnRpY2FsIiwiaWNvbkNsYXNzZXMiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwiQkFTRV9VUkwiLCJERVBMT1lNRU5UU19VUkwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkEsTUFBTUEsYUFBYSxHQUFHLFVBQVNDLFFBQVQsRUFBbUI7QUFDdkMsTUFBSUMsZUFBZSxHQUFHLGtDQUF0QixDQUR1QyxDQUNtQjs7QUFDMURELFVBQVEsR0FBR0EsUUFBUSxDQUFDRSxPQUFULENBQWlCRCxlQUFqQixFQUFrQyxVQUFTRSxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsQ0FBbEIsRUFBcUI7QUFDaEUsV0FBT0YsQ0FBQyxHQUFHQSxDQUFKLEdBQVFDLENBQVIsR0FBWUEsQ0FBWixHQUFnQkMsQ0FBaEIsR0FBb0JBLENBQTNCO0FBQ0QsR0FGVSxDQUFYO0FBSUEsUUFBTUMsU0FBUyxHQUFHLDRDQUE0Q0MsSUFBNUMsQ0FBaURSLFFBQWpELENBQWxCLENBTnVDLENBTXVDOztBQUM5RSxTQUFPTyxTQUFTLEdBQ1o7QUFDRUgsS0FBQyxFQUFFSyxRQUFRLENBQUNGLFNBQVMsQ0FBQyxDQUFELENBQVYsRUFBZSxFQUFmLENBRGI7QUFDaUM7QUFDL0JGLEtBQUMsRUFBRUksUUFBUSxDQUFDRixTQUFTLENBQUMsQ0FBRCxDQUFWLEVBQWUsRUFBZixDQUZiO0FBRWlDO0FBQy9CRCxLQUFDLEVBQUVHLFFBQVEsQ0FBQ0YsU0FBUyxDQUFDLENBQUQsQ0FBVixFQUFlLEVBQWYsQ0FIYixDQUdnQzs7QUFIaEMsR0FEWSxHQU1aLElBTko7QUFPRCxDQWREOztBQWdCQSxNQUFNRyxhQUFhLEdBQUcsVUFBU1YsUUFBVCxFQUFtQlcsS0FBbkIsRUFBMEI7QUFDOUMsTUFBSUMsR0FBRyxHQUFHYixhQUFhLENBQUNDLFFBQUQsQ0FBdkI7QUFDQSxTQUFRLFFBQU9ZLEdBQUcsQ0FBQ1IsQ0FBRSxJQUFHUSxHQUFHLENBQUNQLENBQUUsSUFBR08sR0FBRyxDQUFDTixDQUFFLElBQUdLLEtBQU0sR0FBaEQ7QUFDRCxDQUhEOztBQUtBLE1BQU1FLFdBQVcsR0FBRyxHQUFwQjtBQUVBLE1BQU1DLFVBQVUsR0FBRztBQUNqQkEsWUFBVSxFQUFFO0FBREssQ0FBbkI7QUFJQSxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLGNBQVksRUFBRSxNQURPO0FBRXJCQyxhQUFXLEVBQUUsTUFGUTtBQUdyQkMsYUFBVyxFQUFFLE1BSFE7QUFJckJDLFlBQVUsRUFBRSxNQUpTO0FBS3JCQyxPQUFLLEVBQUU7QUFMYyxDQUF2Qjs7QUFPQSxNQUFNQyxTQUFTLG1DQUNWTixjQURVO0FBRWIsK0JBQTZCO0FBQzNCTyxZQUFRLEVBQUU7QUFEaUIsR0FGaEI7QUFLYiwrQkFBNkI7QUFDM0JBLFlBQVEsRUFBRTtBQURpQixHQUxoQjtBQVFiLCtCQUE2QjtBQUMzQkEsWUFBUSxFQUFFO0FBRGlCLEdBUmhCO0FBV2IsZ0NBQThCO0FBQzVCQSxZQUFRLEVBQUU7QUFEa0I7QUFYakIsRUFBZjs7QUFnQkEsTUFBTUMsU0FBUyxHQUFHO0FBQ2hCQSxXQUFTLEVBQ1A7QUFGYyxDQUFsQjtBQUtBLE1BQU1DLElBQUksR0FBRztBQUNYQyxTQUFPLEVBQUUsY0FERTtBQUVYQyxVQUFRLEVBQUUsVUFGQztBQUdYTixPQUFLLEVBQUUsTUFISTtBQUlYTyxRQUFNLEVBQUUsUUFKRztBQUtYSixXQUFTLEVBQUUsaUNBTEE7QUFNWEssY0FBWSxFQUFFLEtBTkg7QUFPWEMsT0FBSyxFQUFFLHFCQVBJO0FBUVhDLFlBQVUsRUFBRTtBQVJELENBQWI7QUFXQSxNQUFNQyxXQUFXLEdBQUc7QUFDbEJDLFlBQVUsRUFBRSw0Q0FETTtBQUVsQkMsWUFBVSxFQUFFLEtBRk07QUFHbEJDLFlBQVUsRUFBRTtBQUhNLENBQXBCO0FBTUEsTUFBTUMsWUFBWSxHQUFHLFNBQXJCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQXJCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQXBCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQXJCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQWxCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQWxCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQWxCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUc7QUFDdkJuQixXQUFTLEVBQUcscUJBQW9CYixhQUFhLENBQzNDeUIsWUFEMkMsRUFFM0MsSUFGMkMsQ0FHM0Msd0RBQXVEekIsYUFBYSxDQUNwRXlCLFlBRG9FLEVBRXBFLEdBRm9FLENBR3BFO0FBUHFCLENBQXpCO0FBU0EsTUFBTVEsYUFBYSxHQUFHO0FBQ3BCcEIsV0FBUyxFQUFHLHFCQUFvQmIsYUFBYSxDQUMzQzZCLFNBRDJDLEVBRTNDLElBRjJDLENBRzNDLHdEQUF1RDdCLGFBQWEsQ0FDcEU2QixTQURvRSxFQUVwRSxHQUZvRSxDQUdwRTtBQVBrQixDQUF0QjtBQVNBLE1BQU1LLGdCQUFnQixHQUFHO0FBQ3ZCckIsV0FBUyxFQUFHLHFCQUFvQmIsYUFBYSxDQUMzQzRCLFlBRDJDLEVBRTNDLElBRjJDLENBRzNDLHdEQUF1RDVCLGFBQWEsQ0FDcEU0QixZQURvRSxFQUVwRSxHQUZvRSxDQUdwRTtBQVBxQixDQUF6QjtBQVNBLE1BQU1PLGdCQUFnQixHQUFHO0FBQ3ZCdEIsV0FBUyxFQUFHLHFCQUFvQmIsYUFBYSxDQUMzQzBCLFlBRDJDLEVBRTNDLElBRjJDLENBRzNDLHdEQUF1RDFCLGFBQWEsQ0FDcEUwQixZQURvRSxFQUVwRSxHQUZvRSxDQUdwRTtBQVBxQixDQUF6QjtBQVNBLE1BQU1VLGVBQWUsR0FBRztBQUN0QnZCLFdBQVMsRUFBRyxxQkFBb0JiLGFBQWEsQ0FDM0MyQixXQUQyQyxFQUUzQyxJQUYyQyxDQUczQyx3REFBdUQzQixhQUFhLENBQ3BFMkIsV0FEb0UsRUFFcEUsR0FGb0UsQ0FHcEU7QUFQb0IsQ0FBeEI7QUFTQSxNQUFNVSxhQUFhLEdBQUc7QUFDcEJ4QixXQUFTLEVBQUcsa0JBQWlCYixhQUFhLENBQ3hDLE1BRHdDLEVBRXhDLElBRndDLENBR3hDLHFCQUFvQkEsYUFBYSxDQUFDOEIsU0FBRCxFQUFZLEdBQVosQ0FBaUI7QUFKaEMsQ0FBdEI7O0FBT0EsTUFBTVEsaUJBQWlCO0FBQ3JCbkIsT0FBSyxFQUFFLE1BRGM7QUFFckJDLFlBQVUsRUFBRTtBQUZTLEdBR2xCZSxnQkFIa0IsQ0FBdkI7O0FBS0EsTUFBTUksaUJBQWlCO0FBQ3JCcEIsT0FBSyxFQUFFLE1BRGM7QUFFckJDLFlBQVUsRUFBRTtBQUZTLEdBR2xCYyxnQkFIa0IsQ0FBdkI7O0FBS0EsTUFBTU0sZ0JBQWdCO0FBQ3BCckIsT0FBSyxFQUFFLE1BRGE7QUFFcEJDLFlBQVUsRUFBRTtBQUZRLEdBR2pCZ0IsZUFIaUIsQ0FBdEI7O0FBS0EsTUFBTUssY0FBYztBQUNsQnRCLE9BQUssRUFBRSxNQURXO0FBRWxCQyxZQUFVLEVBQUU7QUFGTSxHQUdmYSxhQUhlLENBQXBCOztBQUtBLE1BQU1TLGlCQUFpQjtBQUNyQnZCLE9BQUssRUFBRSxNQURjO0FBRXJCQyxZQUFVLEVBQUU7QUFGUyxHQUdsQlksZ0JBSGtCLENBQXZCOztBQUtBLE1BQU1XLGNBQWM7QUFDbEJ4QixPQUFLLEVBQUUsTUFEVztBQUVsQkMsWUFBVSxFQUFFO0FBRk0sR0FHZmlCLGFBSGUsQ0FBcEI7O0FBS0EsTUFBTU8sV0FBVztBQUNmM0IsUUFBTSxFQUFFLGFBRE87QUFFZjRCLFlBQVUsRUFBRSxNQUZHO0FBR2ZDLFdBQVMsRUFBRSxtQkFISTtBQUlmQyxRQUFNLEVBQUU7QUFKTyxHQUtaMUIsV0FMWSxDQUFqQjs7QUFRQSxNQUFNMkIsVUFBVSxHQUFHO0FBQ2pCL0IsUUFBTSxFQUFFLGNBRFM7QUFFakJDLGNBQVksRUFBRSxLQUZHO0FBR2pCK0IsU0FBTyxFQUFFO0FBSFEsQ0FBbkI7QUFNQSxNQUFNQyxnQkFBZ0IsR0FBRztBQUN2QkMsUUFBTSxFQUFFLEdBRGU7QUFFdkJqQyxjQUFZLEVBQUUsS0FGUztBQUd2QkwsV0FBUyxFQUNQLCtHQUpxQjtBQUt2Qm9DLFNBQU8sRUFBRSxRQUxjO0FBTXZCN0MsWUFBVSxFQUFFO0FBTlcsQ0FBekI7QUFTQSxNQUFNZ0QsS0FBSyxHQUFHO0FBQ1pqQyxPQUFLLEVBQUUsU0FESztBQUVaRixRQUFNLEVBQUUsb0JBRkk7QUFHWm9DLGdCQUFjLEVBQUUsTUFISjtBQUlaOUIsWUFBVSxFQUFFLEtBSkE7QUFLWkQsWUFBVSxFQUFHO0FBTEQsQ0FBZDs7QUFRQSxNQUFNZ0MsVUFBVSxtQ0FDWEYsS0FEVztBQUVkRyxXQUFTLEVBQUU7QUFGRyxFQUFoQjs7QUFLQSxNQUFNQyxTQUFTLG1DQUNWRixVQURVO0FBRWJDLFdBQVMsRUFBRTtBQUZFLEVBQWY7O0FBS0EsTUFBTUUsUUFBUSxHQUFHO0FBQ2YsbUJBQWlCO0FBQ2ZoRCxjQUFVLEVBQUU7QUFERztBQURGLENBQWpCO0FBTUEsTUFBTWlELFlBQVksR0FBRztBQUNuQkMsY0FBWSxFQUFFLEdBREs7QUFFbkJKLFdBQVMsRUFBRTtBQUZRLENBQXJCOzs7Ozs7Ozs7Ozs7O0FDbE5BO0FBQUE7QUFBQTtBQVdBLE1BQU1LLFdBQVcsR0FBRztBQUNsQkMsUUFBTSxFQUFFO0FBQ05DLGFBQVMsRUFBRSxNQURMO0FBRU5DLFlBQVEsRUFBRSxNQUZKO0FBR05DLG1CQUFlLEVBQUVqQyxpRUFIWDtBQUlOWixTQUFLLEVBQUUsU0FKRDtBQUtOTixhQUFTLEVBQ1AsdUhBTkk7QUFPTnNDLFVBQU0sRUFBRSxNQVBGO0FBUU5qQyxnQkFBWSxFQUFFLEtBUlI7QUFTTkYsWUFBUSxFQUFFLFVBVEo7QUFVTmlDLFdBQU8sRUFBRSxXQVZIO0FBV05oQyxVQUFNLEVBQUUsY0FYRjtBQVlOZ0QsWUFBUSxFQUFFLE1BWko7QUFhTjFDLGNBQVUsRUFBRSxLQWJOO0FBY04yQyxpQkFBYSxFQUFFLFdBZFQ7QUFlTkMsaUJBQWEsRUFBRSxHQWZUO0FBZ0JOQyxjQUFVLEVBQUUsdUJBaEJOO0FBaUJOaEUsY0FBVSxFQUNSLGdHQWxCSTtBQW1CTm9CLGNBQVUsRUFBRSxZQW5CTjtBQW9CTjZDLGFBQVMsRUFBRSxRQXBCTDtBQXFCTkMsY0FBVSxFQUFFLFFBckJOO0FBc0JOQyxpQkFBYSxFQUFFLFFBdEJUO0FBdUJOQyxlQUFXLEVBQUUsY0F2QlA7QUF3Qk5DLFVBQU0sRUFBRSxTQXhCRjtBQXlCTix1QkFBbUI7QUFDakJ0RCxXQUFLLEVBQUUsU0FEVTtBQUVqQjZDLHFCQUFlLEVBQUVqQyxpRUFGQTtBQUdqQmxCLGVBQVMsRUFDUDtBQUplLEtBekJiO0FBK0JOLHFEQUFpRDtBQUMvQ0csY0FBUSxFQUFFLFVBRHFDO0FBRS9DRCxhQUFPLEVBQUUsY0FGc0M7QUFHL0MyRCxTQUFHLEVBQUUsR0FIMEM7QUFJL0NULGNBQVEsRUFBRSxRQUpxQztBQUsvQ3pELGlCQUFXLEVBQUUsS0FMa0M7QUFNL0MrRCxtQkFBYSxFQUFFO0FBTmdDLEtBL0IzQztBQXVDTixhQUFTO0FBQ1B2RCxjQUFRLEVBQUUsVUFESDtBQUVQRCxhQUFPLEVBQUUsY0FGRjtBQUdQMkQsU0FBRyxFQUFFLEdBSEU7QUFJUGhFLFdBQUssRUFBRSxNQUpBO0FBS1BxQyxZQUFNLEVBQUUsTUFMRDtBQU1QdkMsaUJBQVcsRUFBRSxLQU5OO0FBT1ArRCxtQkFBYSxFQUFFO0FBUFIsS0F2Q0g7QUFnRE4sa0JBQWM7QUFDWix1REFBaUQ7QUFDL0MvRCxtQkFBVyxFQUFFLEtBRGtDO0FBRS9DUSxnQkFBUSxFQUFFLFVBRnFDO0FBRy9DTixhQUFLLEVBQUUsTUFId0M7QUFJL0NpRSxpQkFBUyxFQUFFLE1BSm9DO0FBSy9DQyxZQUFJLEVBQUUsS0FMeUM7QUFNL0NGLFdBQUcsRUFBRSxLQU4wQztBQU8vQzNCLGNBQU0sRUFBRSxNQVB1QztBQVEvQ3ZCLGtCQUFVLEVBQUUsTUFSbUM7QUFTL0N5QyxnQkFBUSxFQUFFO0FBVHFDO0FBRHJDO0FBaERSLEdBRFU7QUErRGxCWSxXQUFTLEVBQUU7QUFDVG5FLFNBQUssRUFBRTtBQURFLEdBL0RPO0FBa0VsQm9FLFNBQU8sRUFBRTtBQUNQZCxtQkFBZSxFQUFFdkMsb0VBRFY7QUFFUFosYUFBUyxFQUFHLGVBQWNiLDZFQUFhLENBQ3JDeUIsb0VBRHFDLEVBRXJDLElBRnFDLENBR3JDLG9CQUFtQnpCLDZFQUFhLENBQ2hDeUIsb0VBRGdDLEVBRWhDLEdBRmdDLENBR2hDLGlCQUFnQnpCLDZFQUFhLENBQUN5QixvRUFBRCxFQUFlLElBQWYsQ0FBcUIsRUFSN0M7QUFTUCx1QkFBbUI7QUFDakJ1QyxxQkFBZSxFQUFFdkMsb0VBREE7QUFFakJaLGVBQVMsRUFBRyxxQkFBb0JiLDZFQUFhLENBQzNDeUIsb0VBRDJDLEVBRTNDLElBRjJDLENBRzNDLHlEQUF3RHpCLDZFQUFhLENBQ3JFeUIsb0VBRHFFLEVBRXJFLEdBRnFFLENBR3JFO0FBUmU7QUFUWixHQWxFUztBQXNGbEJzRCxNQUFJLEVBQUU7QUFDSmYsbUJBQWUsRUFBRW5DLGlFQURiO0FBRUpoQixhQUFTLEVBQUcsZUFBY2IsNkVBQWEsQ0FDckM2QixpRUFEcUMsRUFFckMsSUFGcUMsQ0FHckMsb0JBQW1CN0IsNkVBQWEsQ0FDaEM2QixpRUFEZ0MsRUFFaEMsR0FGZ0MsQ0FHaEMsaUJBQWdCN0IsNkVBQWEsQ0FBQzZCLGlFQUFELEVBQVksSUFBWixDQUFrQixFQVI3QztBQVNKLHVCQUFtQjtBQUNqQm1DLHFCQUFlLEVBQUVuQyxpRUFEQTtBQUVqQmhCLGVBQVMsRUFBRyxxQkFBb0JiLDZFQUFhLENBQzNDNkIsaUVBRDJDLEVBRTNDLElBRjJDLENBRzNDLHlEQUF3RDdCLDZFQUFhLENBQ3JFNkIsaUVBRHFFLEVBRXJFLEdBRnFFLENBR3JFO0FBUmU7QUFUZixHQXRGWTtBQTBHbEJtRCxTQUFPLEVBQUU7QUFDUGhCLG1CQUFlLEVBQUVwQyxvRUFEVjtBQUVQZixhQUFTLEVBQUcsZUFBY2IsNkVBQWEsQ0FDckM0QixvRUFEcUMsRUFFckMsSUFGcUMsQ0FHckMsb0JBQW1CNUIsNkVBQWEsQ0FDaEM0QixvRUFEZ0MsRUFFaEMsR0FGZ0MsQ0FHaEMsaUJBQWdCNUIsNkVBQWEsQ0FBQzRCLG9FQUFELEVBQWUsSUFBZixDQUFxQixFQVI3QztBQVNQLHVCQUFtQjtBQUNqQm9DLHFCQUFlLEVBQUVwQyxvRUFEQTtBQUVqQmYsZUFBUyxFQUFHLHFCQUFvQmIsNkVBQWEsQ0FDM0M0QixvRUFEMkMsRUFFM0MsSUFGMkMsQ0FHM0MseURBQXdENUIsNkVBQWEsQ0FDckU0QixvRUFEcUUsRUFFckUsR0FGcUUsQ0FHckU7QUFSZTtBQVRaLEdBMUdTO0FBOEhsQnFELFNBQU8sRUFBRTtBQUNQakIsbUJBQWUsRUFBRXRDLG9FQURWO0FBRVBiLGFBQVMsRUFBRyxlQUFjYiw2RUFBYSxDQUNyQzBCLG9FQURxQyxFQUVyQyxJQUZxQyxDQUdyQyxvQkFBbUIxQiw2RUFBYSxDQUNoQzBCLG9FQURnQyxFQUVoQyxHQUZnQyxDQUdoQyxpQkFBZ0IxQiw2RUFBYSxDQUFDMEIsb0VBQUQsRUFBZSxJQUFmLENBQXFCLEVBUjdDO0FBU1AsdUJBQW1CO0FBQ2pCc0MscUJBQWUsRUFBRXRDLG9FQURBO0FBRWpCYixlQUFTLEVBQUcscUJBQW9CYiw2RUFBYSxDQUMzQzBCLG9FQUQyQyxFQUUzQyxJQUYyQyxDQUczQyx5REFBd0QxQiw2RUFBYSxDQUNyRTBCLG9FQURxRSxFQUVyRSxHQUZxRSxDQUdyRTtBQVJlO0FBVFosR0E5SFM7QUFrSmxCd0QsUUFBTSxFQUFFO0FBQ05sQixtQkFBZSxFQUFFckMsbUVBRFg7QUFFTmQsYUFBUyxFQUFHLGVBQWNiLDZFQUFhLENBQ3JDMkIsbUVBRHFDLEVBRXJDLElBRnFDLENBR3JDLG9CQUFtQjNCLDZFQUFhLENBQ2hDMkIsbUVBRGdDLEVBRWhDLEdBRmdDLENBR2hDLGlCQUFnQjNCLDZFQUFhLENBQUMyQixtRUFBRCxFQUFjLElBQWQsQ0FBb0IsRUFSN0M7QUFTTix1QkFBbUI7QUFDakJxQyxxQkFBZSxFQUFFckMsbUVBREE7QUFFakJkLGVBQVMsRUFBRyxxQkFBb0JiLDZFQUFhLENBQzNDMkIsbUVBRDJDLEVBRTNDLElBRjJDLENBRzNDLHlEQUF3RDNCLDZFQUFhLENBQ3JFMkIsbUVBRHFFLEVBRXJFLEdBRnFFLENBR3JFO0FBUmU7QUFUYixHQWxKVTtBQXNLbEJ3RCxNQUFJLEVBQUU7QUFDSm5CLG1CQUFlLEVBQUVsQyxpRUFEYjtBQUVKakIsYUFBUyxFQUFHLGVBQWNiLDZFQUFhLENBQ3JDeUIsb0VBRHFDLEVBRXJDLElBRnFDLENBR3JDLG9CQUFtQnpCLDZFQUFhLENBQ2hDeUIsb0VBRGdDLEVBRWhDLEdBRmdDLENBR2hDLGlCQUFnQnpCLDZFQUFhLENBQUN5QixvRUFBRCxFQUFlLElBQWYsQ0FBcUIsRUFSaEQ7QUFTSix1QkFBbUI7QUFDakJ1QyxxQkFBZSxFQUFFbEMsaUVBREE7QUFFakJqQixlQUFTLEVBQUcscUJBQW9CYiw2RUFBYSxDQUMzQ3lCLG9FQUQyQyxFQUUzQyxJQUYyQyxDQUczQyx5REFBd0R6Qiw2RUFBYSxDQUNyRXlCLG9FQURxRSxFQUVyRSxHQUZxRSxDQUdyRTtBQVJlO0FBVGYsR0F0S1k7QUEwTGxCMkQsT0FBSyxFQUFFO0FBQ0wsbUNBQStCO0FBQzdCcEIscUJBQWUsRUFBRSxTQURZO0FBRTdCN0MsV0FBSyxFQUFFWSxpRUFBU0E7QUFGYTtBQUQxQixHQTFMVztBQWdNbEJzRCxTQUFPLEVBQUU7QUFDUHJCLG1CQUFlLEVBQUUsU0FEVjtBQUVQN0MsU0FBSyxFQUFFLE1BRkE7QUFHUE4sYUFBUyxFQUNQLG9IQUpLO0FBS1AsaUNBQTZCO0FBQzNCbUQscUJBQWUsRUFBRSxTQURVO0FBRTNCN0MsV0FBSyxFQUFFLE1BRm9CO0FBRzNCTixlQUFTLEVBQ1A7QUFKeUI7QUFMdEIsR0FoTVM7QUE0TWxCeUUsVUFBUSxFQUFFO0FBQ1J0QixtQkFBZSxFQUFFLFNBRFQ7QUFFUjdDLFNBQUssRUFBRSxNQUZDO0FBR1JOLGFBQVMsRUFDUCxpSEFKTTtBQUtSLHVCQUFtQjtBQUNqQm1ELHFCQUFlLEVBQUUsU0FEQTtBQUVqQjdDLFdBQUssRUFBRSxNQUZVO0FBR2pCTixlQUFTLEVBQ1A7QUFKZTtBQUxYLEdBNU1RO0FBd05sQjBFLFFBQU0sRUFBRTtBQUNOdkIsbUJBQWUsRUFBRSxTQURYO0FBRU43QyxTQUFLLEVBQUUsTUFGRDtBQUdOTixhQUFTLEVBQ1AsaUhBSkk7QUFLTix1QkFBbUI7QUFDakJtRCxxQkFBZSxFQUFFLFNBREE7QUFFakI3QyxXQUFLLEVBQUUsTUFGVTtBQUdqQk4sZUFBUyxFQUNQO0FBSmU7QUFMYixHQXhOVTtBQW9PbEIyRSxRQUFNLEVBQUU7QUFDTnhCLG1CQUFlLEVBQUUsU0FEWDtBQUVON0MsU0FBSyxFQUFFLE1BRkQ7QUFHTk4sYUFBUyxFQUNQLDhHQUpJO0FBS04sdUJBQW1CO0FBQ2pCbUQscUJBQWUsRUFBRSxTQURBO0FBRWpCN0MsV0FBSyxFQUFFLE1BRlU7QUFHakJOLGVBQVMsRUFDUDtBQUplO0FBTGIsR0FwT1U7QUFnUGxCNEUsUUFBTSxFQUFFO0FBQ04sbUNBQStCO0FBQzdCdEUsV0FBSyxFQUFFLFNBRHNCO0FBRTdCQyxnQkFBVSxFQUFFLGFBRmlCO0FBRzdCUCxlQUFTLEVBQUU7QUFIa0IsS0FEekI7QUFNTixpQkFBYTtBQUNYLHFDQUErQjtBQUM3Qk0sYUFBSyxFQUFFTSxvRUFBWUE7QUFEVTtBQURwQixLQU5QO0FBV04sY0FBVTtBQUNSLHFDQUErQjtBQUM3Qk4sYUFBSyxFQUFFVSxpRUFBU0E7QUFEYTtBQUR2QixLQVhKO0FBZ0JOLGlCQUFhO0FBQ1gscUNBQStCO0FBQzdCVixhQUFLLEVBQUVTLG9FQUFZQTtBQURVO0FBRHBCLEtBaEJQO0FBcUJOLGlCQUFhO0FBQ1gscUNBQStCO0FBQzdCVCxhQUFLLEVBQUVPLG9FQUFZQTtBQURVO0FBRHBCLEtBckJQO0FBMEJOLGNBQVU7QUFDUixxQ0FBK0I7QUFDN0JQLGFBQUssRUFBRVcsaUVBQVNBO0FBRGE7QUFEdkIsS0ExQko7QUErQk4sZ0JBQVk7QUFDVixxQ0FBK0I7QUFDN0JYLGFBQUssRUFBRVEsbUVBQVdBO0FBRFc7QUFEckIsS0EvQk47QUFvQ04saUJBQWE7QUFDWCxxQ0FBK0I7QUFDN0JSLGFBQUssRUFBRTtBQURzQjtBQURwQixLQXBDUDtBQXlDTixrQkFBYztBQUNaLHFDQUErQjtBQUM3QkEsYUFBSyxFQUFFO0FBRHNCO0FBRG5CLEtBekNSO0FBOENOLGdCQUFZO0FBQ1YscUNBQStCO0FBQzdCQSxhQUFLLEVBQUU7QUFEc0I7QUFEckIsS0E5Q047QUFtRE4sZ0JBQVk7QUFDVixxQ0FBK0I7QUFDN0JBLGFBQUssRUFBRTtBQURzQjtBQURyQjtBQW5ETixHQWhQVTtBQXlTbEJ1RSxhQUFXLEVBQUU7QUFDWCxtQ0FBK0I7QUFDN0J2RSxXQUFLLEVBQUUsU0FEc0I7QUFFN0JDLGdCQUFVLEVBQUUsYUFGaUI7QUFHN0JQLGVBQVMsRUFBRTtBQUhrQjtBQURwQixHQXpTSztBQWdUbEI4RSxVQUFRLEVBQUU7QUFDUkMsV0FBTyxFQUFFLE1BREQ7QUFFUkMsaUJBQWEsRUFBRTtBQUZQLEdBaFRRO0FBb1RsQkMsSUFBRSxFQUFFO0FBQ0Y3QyxXQUFPLEVBQUUsa0JBRFA7QUFFRmdCLFlBQVEsRUFBRSxVQUZSO0FBR0Z6QyxjQUFVLEVBQUUsVUFIVjtBQUlGTixnQkFBWSxFQUFFO0FBSlosR0FwVGM7QUEwVGxCNkUsSUFBRSxFQUFFO0FBQ0Y5QyxXQUFPLEVBQUUsb0JBRFA7QUFFRmdCLFlBQVEsRUFBRSxXQUZSO0FBR0Z6QyxjQUFVLEVBQUUsS0FIVjtBQUlGTixnQkFBWSxFQUFFO0FBSlosR0ExVGM7QUFnVWxCOEUsT0FBSyxFQUFFO0FBQ0w5RSxnQkFBWSxFQUFFO0FBRFQsR0FoVVc7QUFtVWxCK0UsT0FBSyxFQUFFO0FBQ0x2RixTQUFLLEVBQUU7QUFERixHQW5VVztBQXNVbEJ3RixNQUFJLEVBQUU7QUFDSix5QkFBcUI7QUFDbkJsQyxxQkFBZSxFQUFFLGFBREU7QUFFbkI3QyxXQUFLLEVBQUUsU0FGWTtBQUduQk4sZUFBUyxFQUFFO0FBSFE7QUFEakIsR0F0VVk7QUE2VWxCc0YsVUFBUSxFQUFFO0FBQ1I1RixlQUFXLEVBQUUsTUFETDtBQUVSRCxnQkFBWSxFQUFFLE1BRk47QUFHUjJELFlBQVEsRUFBRSxNQUhGO0FBSVJsQixVQUFNLEVBQUUsTUFKQTtBQUtSZ0IsWUFBUSxFQUFFLE1BTEY7QUFNUnJELFNBQUssRUFBRSxNQU5DO0FBT1IsMkRBQXVEO0FBQ3JERixpQkFBVyxFQUFFO0FBRHdDLEtBUC9DO0FBVVIsWUFBUTtBQUNOdUMsWUFBTSxFQUFFLE1BREY7QUFFTmdCLGNBQVEsRUFBRSxNQUZKO0FBR05yRCxXQUFLLEVBQUUsTUFIRDtBQUlOYyxnQkFBVSxFQUFFLE1BSk47QUFLTix1REFBaUQ7QUFDL0N5QyxnQkFBUSxFQUFFLE1BRHFDO0FBRS9DekMsa0JBQVUsRUFBRTtBQUZtQyxPQUwzQztBQVNOLGVBQVM7QUFDUGQsYUFBSyxFQUFFLE1BREE7QUFFUHFDLGNBQU0sRUFBRTtBQUZEO0FBVEgsS0FWQTtBQXdCUixZQUFRO0FBQ05BLFlBQU0sRUFBRSxNQURGO0FBRU5nQixjQUFRLEVBQUUsTUFGSjtBQUdOckQsV0FBSyxFQUFFLE1BSEQ7QUFJTix1REFBaUQ7QUFDL0N1RCxnQkFBUSxFQUFFLE1BRHFDO0FBRS9DekMsa0JBQVUsRUFBRTtBQUZtQyxPQUozQztBQVFOLGVBQVM7QUFDUGQsYUFBSyxFQUFFLE1BREE7QUFFUHFDLGNBQU0sRUFBRTtBQUZEO0FBUkg7QUF4QkE7QUE3VVEsQ0FBcEI7QUFxWGVhLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hZQTtBQUFBLE1BQU13QyxhQUFhLEdBQUc7QUFDcEJDLFVBQVEsRUFBRTtBQUNScEQsV0FBTyxFQUFFLG9CQUREO0FBRVJxRCxRQUFJLEVBQUUsVUFGRTtBQUdSbkYsU0FBSyxFQUFFO0FBSEM7QUFEVSxDQUF0QjtBQVFlaUYsNEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQSxNQUFNRyxlQUFlLEdBQUc7QUFDdEJDLFlBQVUsRUFBRTtBQUNWekYsV0FBTyxFQUFFLE1BREM7QUFFVjBGLGNBQVUsRUFBRSxRQUZGO0FBR1Z6QyxtQkFBZSxFQUFFLGFBSFA7QUFJVmYsV0FBTyxFQUFFLG9CQUpDO0FBS1Y5QixTQUFLLEVBQUU7QUFMRztBQURVLENBQXhCO0FBVWVvRiw4RUFBZixFOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBLE1BQU1HLFNBQVMsR0FBRztBQUNoQjVGLE1BQUksRUFBRTtBQUNKcUMsVUFBTSxFQUFFLEdBREo7QUFFSlEsZ0JBQVksRUFBRSxNQUZWO0FBR0pKLGFBQVMsRUFBRSxNQUhQO0FBSUpyQyxnQkFBWSxFQUFFLEtBSlY7QUFLSkMsU0FBSyxFQUFFLFNBTEg7QUFNSkMsY0FBVSxFQUFFLE1BTlI7QUFPSlYsU0FBSyxFQUFFLE1BUEg7QUFRSkcsYUFBUyxFQUNQLHFHQVRFO0FBVUpHLFlBQVEsRUFBRSxVQVZOO0FBV0pELFdBQU8sRUFBRSxNQVhMO0FBWUo0RixpQkFBYSxFQUFFLFFBWlg7QUFhSjVDLFlBQVEsRUFBRSxHQWJOO0FBY0o2QyxZQUFRLEVBQUUsWUFkTjtBQWVKM0MsWUFBUSxFQUFFLFNBZk47QUFnQko3RCxjQUFVLEVBQUU7QUFoQlIsR0FEVTtBQW1CaEJ5RyxXQUFTLEVBQUU7QUFDVHpGLGNBQVUsRUFBRSxhQURIO0FBRVRELFNBQUssRUFBRSxTQUZFO0FBR1ROLGFBQVMsRUFBRTtBQUhGLEdBbkJLO0FBd0JoQmlHLGNBQVksRUFBRTtBQUNaQyxZQUFRLEVBQUU7QUFERTtBQXhCRSxDQUFsQjtBQTZCZUwsd0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFPQSxNQUFNTSxnQkFBZ0IsR0FBRztBQUN2QnJCLFVBQVEsRUFBRTtBQUNSLGdCQUFZO0FBQ1ZzQixpQkFBVyxFQUFFO0FBREg7QUFESixHQURhO0FBTXZCQyxXQUFTLEVBQUU7QUFDVCw4Q0FBMEM7QUFDeENELGlCQUFXLEVBQUUsb0JBRDJCO0FBRXhDRSxpQkFBVyxFQUFFO0FBRjJCLEtBRGpDO0FBS1QsZUFBVztBQUNURixpQkFBVyxFQUFFeEYsb0VBQVlBO0FBRGhCO0FBTEYsR0FOWTtBQWV2QjJGLGdCQUFjLEVBQUU7QUFDZCxlQUFXO0FBQ1RILGlCQUFXLEVBQUV0RixtRUFBV0E7QUFEZjtBQURHLEdBZk87QUFvQnZCMEYsa0JBQWdCLEVBQUU7QUFDaEIsZUFBVztBQUNUSixpQkFBVyxFQUFFckYsb0VBQVlBO0FBRGhCO0FBREssR0FwQks7QUF5QnZCMEYsZ0JBQWMsRUFBRTtBQUNkLDhDQUEwQztBQUN4Q0wsaUJBQVcsRUFBRTtBQUQyQixLQUQ1QjtBQUlkLGVBQVc7QUFDVEEsaUJBQVcsRUFBRTtBQURKO0FBSkcsR0F6Qk87QUFpQ3ZCTSxXQUFTLGtDQUNKbEcsbUVBREk7QUFFUEYsU0FBSyxFQUFFLG9CQUZBO0FBR1BJLGNBQVUsRUFBRSxLQUhMO0FBSVAwQyxZQUFRLEVBQUUsTUFKSDtBQUtQekMsY0FBVSxFQUFFLFNBTEw7QUFNUGtELE9BQUcsRUFBRSxNQU5FO0FBT1BQLGlCQUFhLEVBQUUsT0FQUjtBQVFQLHNCQUFrQjtBQUNoQlosZUFBUyxFQUFFO0FBREs7QUFSWCxJQWpDYztBQTZDdkJpRSxnQkFBYyxFQUFFO0FBQ2RyRyxTQUFLLEVBQUVRLG1FQUFXLEdBQUc7QUFEUCxHQTdDTztBQWdEdkI4RixrQkFBZ0IsRUFBRTtBQUNoQnRHLFNBQUssRUFBRVMsb0VBQVksR0FBRztBQUROLEdBaERLO0FBbUR2QjhGLGFBQVcsRUFBRTtBQUNYekcsVUFBTSxFQUFFLFlBREc7QUFFWDRCLGNBQVUsRUFBRSxNQUZEO0FBR1g3QixZQUFRLEVBQUUsVUFIQztBQUlYLDJEQUF1RDtBQUNyREcsV0FBSyxFQUFFO0FBRDhDO0FBSjVDLEdBbkRVO0FBMkR2QndHLE9BQUssRUFBRTtBQUNMeEcsU0FBSyxFQUFFLFNBREY7QUFFTDRCLFVBQU0sRUFBRSxPQUZIO0FBR0wsd0JBQW9CO0FBQ2xCa0IsY0FBUSxFQUFFLE1BRFE7QUFFbEIzQyxnQkFBVSxFQUFFLDRDQUZNO0FBR2xCQyxnQkFBVSxFQUFFLEtBSE07QUFJbEJDLGdCQUFVLEVBQUUsU0FKTTtBQUtsQm9FLGFBQU8sRUFBRTtBQUxTLEtBSGY7QUFVTCxzQkFBa0I7QUFDaEJ6RSxXQUFLLEVBQUU7QUFEUztBQVZiLEdBM0RnQjtBQXlFdkJ5RyxZQUFVLEVBQUU7QUFDVix3QkFBb0I7QUFDbEJ6RyxXQUFLLEVBQUUsU0FEVztBQUVsQnlFLGFBQU8sRUFBRTtBQUZTO0FBRFY7QUF6RVcsQ0FBekI7QUFpRmVvQiwrRUFBZixFOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBV0EsTUFBTWEsU0FBUyxHQUFHO0FBQ2hCQyxVQUFRLEVBQUU7QUFDUmxILFlBQVEsRUFBRSxPQURGO0FBRVJLLFVBQU0sRUFBRSxRQUZBO0FBR1JnQyxXQUFPLEVBQUU7QUFIRCxHQURNO0FBTWhCOEUsYUFBVyxFQUFFO0FBQ1hDLFNBQUssRUFBRSxNQURJO0FBRVh6RSxhQUFTLEVBQUUsTUFGQTtBQUdYL0MsZUFBVyxFQUFFO0FBSEYsR0FORztBQVdoQnNFLFNBQU8sRUFBRTtBQUNQM0QsU0FBSyxFQUFFTSxvRUFBWUE7QUFEWixHQVhPO0FBY2hCd0QsU0FBTyxFQUFFO0FBQ1A5RCxTQUFLLEVBQUVPLG9FQUFZQTtBQURaLEdBZE87QUFpQmhCd0QsUUFBTSxFQUFFO0FBQ04vRCxTQUFLLEVBQUVRLG1FQUFXQTtBQURaLEdBakJRO0FBb0JoQnFELFNBQU8sRUFBRTtBQUNQN0QsU0FBSyxFQUFFUyxvRUFBWUE7QUFEWixHQXBCTztBQXVCaEJtRCxNQUFJLEVBQUU7QUFDSjVELFNBQUssRUFBRVUsaUVBQVNBO0FBRFosR0F2QlU7QUEwQmhCc0QsTUFBSSxFQUFFO0FBQ0poRSxTQUFLLEVBQUVXLGlFQUFTQTtBQURaLEdBMUJVO0FBNkJoQm1HLE1BQUksRUFBRTtBQUNKOUcsU0FBSyxFQUFFWSxpRUFBU0E7QUFEWixHQTdCVTtBQWdDaEJtRyxNQUFJLEVBQUU7QUFDSnhILFNBQUssRUFBRSxNQURIO0FBRUpxQyxVQUFNLEVBQUU7QUFGSixHQWhDVTtBQW9DaEJvRixvQkFBa0IsRUFBRTtBQUNsQmhILFNBQUssRUFBRVksaUVBRFc7QUFFbEJnRixZQUFRLEVBQUU7QUFGUSxHQXBDSjtBQXdDaEIzRCxzRUF4Q2dCO0FBeUNoQmdGLGFBQVcsRUFBRTtBQUNYakgsU0FBSyxFQUFFWSxpRUFESTtBQUVYZ0YsWUFBUSxFQUFFLFFBRkM7QUFHWHhELGFBQVMsRUFBRSxLQUhBO0FBSVhVLFlBQVEsRUFBRTtBQUpDLEdBekNHO0FBK0NoQm9FLHFCQUFtQixFQUFFO0FBQ25CTCxTQUFLLEVBQUU7QUFEWSxHQS9DTDtBQWtEaEJNLGNBQVksRUFBRTtBQUNaNUgsU0FBSyxFQUFFLE1BREs7QUFFWnFDLFVBQU0sRUFBRTtBQUZJO0FBbERFLENBQWxCO0FBd0RlOEUsd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUEsTUFBTVUsWUFBWSxHQUFHO0FBQ25CQyxVQUFRLEVBQUU7QUFDUjVILFlBQVEsRUFBRSxNQURGO0FBRVJtQyxVQUFNLEVBQUU7QUFGQSxHQURTO0FBS25CMEYsWUFBVSxFQUFFO0FBQ1Z2SCxnQkFBWSxFQUFFO0FBREosR0FMTztBQVFuQndILGtCQUFnQixFQUFFO0FBQ2hCeEgsZ0JBQVksRUFBRTtBQURFLEdBUkM7QUFXbkJ5SCxXQUFTLEVBQUU7QUFDVDlILGFBQVMsRUFDUDtBQUZPLEdBWFE7QUFlbkIrSCxZQUFVLEVBQUU7QUFDVmxJLFNBQUssRUFBRSxNQURHO0FBRVZpRCxnQkFBWSxFQUFFO0FBRkosR0FmTztBQW1CbkJrRixZQUFVLEVBQUU7QUFDVm5JLFNBQUssRUFBRSxNQURHO0FBRVZvSSx1QkFBbUIsRUFBRSxvQkFGWDtBQUdWQyx3QkFBb0IsRUFBRTtBQUhaLEdBbkJPO0FBd0JuQkMsZUFBYSxFQUFFO0FBQ2J0SSxTQUFLLEVBQUUsTUFETTtBQUVidUksMEJBQXNCLEVBQUUsb0JBRlg7QUFHYkMsMkJBQXVCLEVBQUU7QUFIWixHQXhCSTtBQTZCbkJDLFNBQU8sRUFBRTtBQUNQekksU0FBSyxFQUFFLE1BREE7QUFFUFEsZ0JBQVksRUFBRTtBQUZQLEdBN0JVO0FBaUNuQmtJLGdCQUFjLEVBQUU7QUFDZHBJLFlBQVEsRUFBRSxVQURJO0FBRWQwRCxPQUFHLEVBQUUsR0FGUztBQUdkMkUsU0FBSyxFQUFFLEdBSE87QUFJZEMsVUFBTSxFQUFFLEdBSk07QUFLZDFFLFFBQUksRUFBRSxHQUxRO0FBTWQzQixXQUFPLEVBQUU7QUFOSztBQWpDRyxDQUFyQjtBQTJDZXNGLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBOztBQUVBLE1BQU1nQixZQUFZO0FBQ2hCQyxTQUFPLEVBQUU7QUFDUHZHLFdBQU8sRUFBRSxRQURGO0FBRVBvQixhQUFTLEVBQUU7QUFGSixHQURPO0FBS2hCakIsT0FBSyxrQ0FDQUEsNkRBREE7QUFFSE8sZ0JBQVksRUFBRSxNQUZYO0FBR0hKLGFBQVMsRUFBRSxLQUhSO0FBSUhPLGFBQVMsRUFBRSxNQUpSO0FBS0hULGtCQUFjLEVBQUUsTUFMYjtBQU1IbEMsU0FBSyxFQUFFO0FBTko7QUFMVyxHQWFic0ksd0RBYmE7QUFjaEJDLFVBQVEsRUFBRTtBQUNSakosY0FBVSxFQUFFLE1BREo7QUFFUkQsZUFBVyxFQUFFLE1BRkw7QUFHUlcsU0FBSyxFQUFFO0FBSEMsR0FkTTtBQW1CaEJxQyxXQUFTLEVBQUU7QUFDVHJDLFNBQUssRUFBRTtBQURFLEdBbkJLO0FBc0JoQm1DLFlBQVUsRUFBRTtBQUNWbkMsU0FBSyxFQUFFLFNBREc7QUFFVndDLGdCQUFZLEVBQUU7QUFGSixHQXRCSTtBQTBCaEJ5RSxhQUFXLEVBQUU7QUFDWGpILFNBQUssRUFBRSxTQURJO0FBRVh3QyxnQkFBWSxFQUFFO0FBRkgsR0ExQkc7QUE4QmhCZ0csZUFBYSxFQUFFO0FBQ2JDLGtCQUFjLEVBQUU7QUFESCxHQTlCQztBQWlDaEJDLFNBQU8sRUFBRTtBQUNQdEcsYUFBUyxFQUFFLEdBREo7QUFFUDdDLFNBQUssRUFBRSxNQUZBO0FBR1BpRSxhQUFTLEVBQUUsTUFISjtBQUlQQyxRQUFJLEVBQUUsR0FKQztBQUtQRixPQUFHLEVBQUUsR0FMRTtBQU1QM0IsVUFBTSxFQUFFLE1BTkQ7QUFPUHZCLGNBQVUsRUFBRSxNQVBMO0FBUVB5QyxZQUFRLEVBQUUsTUFSSDtBQVNQOUMsU0FBSyxFQUFFO0FBVEEsR0FqQ087QUE0Q2hCMkksU0FBTyxFQUFFO0FBQ1A3SSxVQUFNLEVBQUU7QUFERDtBQTVDTyxFQUFsQjs7QUFpRGVzSSwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDbkRBOztDQUVBOztDQUdBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQSxNQUFNUSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLGtIQUFELENBQTVCO0FBRWUsU0FBU0MsY0FBVCxHQUEwQjtBQUN2QyxRQUFNQyxPQUFPLEdBQUdKLFNBQVMsRUFBekI7QUFDQSxRQUFNSyxZQUFZLEdBQUdDLGlEQUFVLENBQzdCRixPQUFPLENBQUN4QixTQURxQixFQUU3QndCLE9BQU8sQ0FBQ3pCLGdCQUZxQixFQUc3QnlCLE9BQU8sQ0FBQzNCLFFBSHFCLENBQS9CO0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUUyQixPQUFPLENBQUNYLE9BQXhCO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUVXLE9BQU8sQ0FBQy9HLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLDZCQUNFLHFFQUFDLDZFQUFEO0FBQUEsK0JBQ0UscUVBQUMsd0VBQUQ7QUFBVSxZQUFFLEVBQUUsRUFBZDtBQUFrQixZQUFFLEVBQUUsRUFBdEI7QUFBMEIsWUFBRSxFQUFFLEVBQTlCO0FBQUEsaUNBQ0UscUVBQUMsb0VBQUQ7QUFBTSxpQkFBSyxNQUFYO0FBQUEsb0NBQ0UscUVBQUMsd0VBQUQ7QUFBVSxnQkFBRSxFQUFFLEVBQWQ7QUFBa0IsZ0JBQUUsRUFBRSxFQUF0QjtBQUEwQixnQkFBRSxFQUFFLEVBQTlCO0FBQWtDLHVCQUFTLEVBQUUrRyxPQUFPLENBQUNULFFBQXJEO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFHLGlDQUFYO0FBQTZDLG1CQUFHLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRTtBQUFJLHVCQUFTLEVBQUVTLE9BQU8sQ0FBQzNHLFNBQXZCO0FBQUEseURBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixlQUdFO0FBQU8seUJBQVMsRUFBRTJHLE9BQU8sQ0FBQzdHLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixlQVNFLHFFQUFDLHdFQUFEO0FBQUEsc0NBQ0U7QUFBRyx5QkFBUyxFQUFFNkcsT0FBTyxDQUFDL0IsV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBaUNFO0FBQUksZUFBUyxFQUFFK0IsT0FBTyxDQUFDL0csS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQ0YsZUFrQ0U7QUFBQSw2QkFDRSxxRUFBQyw2RUFBRDtBQUFBLGdDQUNFLHFFQUFDLHdFQUFEO0FBQVUsWUFBRSxFQUFFLEVBQWQ7QUFBa0IsWUFBRSxFQUFFLEVBQXRCO0FBQTBCLFlBQUUsRUFBRSxDQUE5QjtBQUFBLGlDQUNFLHFFQUFDLG9FQUFEO0FBQU0saUJBQUssTUFBWDtBQUFBLG9DQUNFLHFFQUFDLHdFQUFEO0FBQVUsZ0JBQUUsRUFBRSxFQUFkO0FBQWtCLGdCQUFFLEVBQUUsRUFBdEI7QUFBMEIsZ0JBQUUsRUFBRSxDQUE5QjtBQUFpQyx1QkFBUyxFQUFFK0csT0FBTyxDQUFDVCxRQUFwRDtBQUFBLHFDQUNFO0FBQUssbUJBQUcsRUFBRywyQkFBWDtBQUF1QyxtQkFBRyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBSUU7QUFBSSx1QkFBUyxFQUFFUyxPQUFPLENBQUMzRyxTQUF2QjtBQUFBLG1EQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsZUFHRTtBQUFPLHlCQUFTLEVBQUUyRyxPQUFPLENBQUM3RyxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsZUFTRSxxRUFBQyx3RUFBRDtBQUFBLHNDQUNFO0FBQUcseUJBQVMsRUFBRTZHLE9BQU8sQ0FBQy9CLFdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBSUU7QUFBRyx5QkFBUyxFQUFFK0IsT0FBTyxDQUFDL0IsV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkYsZUFPRTtBQUFHLHlCQUFTLEVBQUUrQixPQUFPLENBQUMvQixXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQXlCRSxxRUFBQyx3RUFBRDtBQUFVLFlBQUUsRUFBRSxFQUFkO0FBQWtCLFlBQUUsRUFBRSxFQUF0QjtBQUEwQixZQUFFLEVBQUUsQ0FBOUI7QUFBQSxpQ0FDRSxxRUFBQyxvRUFBRDtBQUFNLGlCQUFLLE1BQVg7QUFBQSxvQ0FDRSxxRUFBQyx3RUFBRDtBQUFVLGdCQUFFLEVBQUUsRUFBZDtBQUFrQixnQkFBRSxFQUFFLEVBQXRCO0FBQTBCLGdCQUFFLEVBQUUsQ0FBOUI7QUFBaUMsdUJBQVMsRUFBRStCLE9BQU8sQ0FBQ1QsUUFBcEQ7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUcseUJBQVg7QUFBcUMsbUJBQUcsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQUksdUJBQVMsRUFBRVMsT0FBTyxDQUFDM0csU0FBdkI7QUFBQSxpREFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBR0U7QUFBTyx5QkFBUyxFQUFFMkcsT0FBTyxDQUFDN0csVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBU0UscUVBQUMsd0VBQUQ7QUFBQSxzQ0FDRTtBQUFHLHlCQUFTLEVBQUU2RyxPQUFPLENBQUMvQixXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUtFO0FBQUcseUJBQVMsRUFBRStCLE9BQU8sQ0FBQy9CLFdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCRixlQThDRSxxRUFBQyx3RUFBRDtBQUFVLFlBQUUsRUFBRSxFQUFkO0FBQWtCLFlBQUUsRUFBRSxFQUF0QjtBQUEwQixZQUFFLEVBQUUsQ0FBOUI7QUFBQSxpQ0FDRSxxRUFBQyxvRUFBRDtBQUFNLGlCQUFLLE1BQVg7QUFBQSxvQ0FDRSxxRUFBQyx3RUFBRDtBQUFVLGdCQUFFLEVBQUUsRUFBZDtBQUFrQixnQkFBRSxFQUFFLEVBQXRCO0FBQTBCLGdCQUFFLEVBQUUsQ0FBOUI7QUFBaUMsdUJBQVMsRUFBRStCLE9BQU8sQ0FBQ1QsUUFBcEQ7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUcsd0JBQVg7QUFBb0MsbUJBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQUksdUJBQVMsRUFBRVMsT0FBTyxDQUFDM0csU0FBdkI7QUFBQSxnREFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBR0U7QUFBTyx5QkFBUyxFQUFFMkcsT0FBTyxDQUFDN0csVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBU0UscUVBQUMsd0VBQUQ7QUFBQSxzQ0FDRTtBQUFHLHlCQUFTLEVBQUU2RyxPQUFPLENBQUMvQixXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUlFO0FBQUcseUJBQVMsRUFBRStCLE9BQU8sQ0FBQy9CLFdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENGLGVBd0dFO0FBQUEsNkJBQ0UscUVBQUMsNkVBQUQ7QUFBQSxnQ0FDRSxxRUFBQyx3RUFBRDtBQUFVLFlBQUUsRUFBRSxFQUFkO0FBQWtCLFlBQUUsRUFBRSxFQUF0QjtBQUEwQixZQUFFLEVBQUUsQ0FBOUI7QUFBQSxpQ0FDRSxxRUFBQyxvRUFBRDtBQUFNLGlCQUFLLE1BQVg7QUFBQSxvQ0FDRSxxRUFBQyx3RUFBRDtBQUFVLGdCQUFFLEVBQUUsRUFBZDtBQUFrQixnQkFBRSxFQUFFLEVBQXRCO0FBQTBCLGdCQUFFLEVBQUUsQ0FBOUI7QUFBaUMsdUJBQVMsRUFBRStCLE9BQU8sQ0FBQ1QsUUFBcEQ7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUcsNkJBQVg7QUFBeUMsbUJBQUcsRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQUksdUJBQVMsRUFBRVMsT0FBTyxDQUFDM0csU0FBdkI7QUFBQSxxREFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBR0U7QUFBTyx5QkFBUyxFQUFFMkcsT0FBTyxDQUFDN0csVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBU0UscUVBQUMsd0VBQUQ7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUU2RyxPQUFPLENBQUMvQixXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQWtCRSxxRUFBQyx3RUFBRDtBQUFVLFlBQUUsRUFBRSxFQUFkO0FBQWtCLFlBQUUsRUFBRSxFQUF0QjtBQUEwQixZQUFFLEVBQUUsQ0FBOUI7QUFBQSxpQ0FDRSxxRUFBQyxvRUFBRDtBQUFNLGlCQUFLLE1BQVg7QUFBQSxvQ0FDRSxxRUFBQyx3RUFBRDtBQUFVLGdCQUFFLEVBQUUsRUFBZDtBQUFrQixnQkFBRSxFQUFFLEVBQXRCO0FBQTBCLGdCQUFFLEVBQUUsQ0FBOUI7QUFBaUMsdUJBQVMsRUFBRStCLE9BQU8sQ0FBQ1QsUUFBcEQ7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUcsZ0NBQVg7QUFBNEMsbUJBQUcsRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQUksdUJBQVMsRUFBRVMsT0FBTyxDQUFDM0csU0FBdkI7QUFBQSx3REFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBR0U7QUFBTyx5QkFBUyxFQUFFMkcsT0FBTyxDQUFDN0csVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBU0UscUVBQUMsd0VBQUQ7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUU2RyxPQUFPLENBQUMvQixXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkYsZUFtQ0UscUVBQUMsd0VBQUQ7QUFBVSxZQUFFLEVBQUUsRUFBZDtBQUFrQixZQUFFLEVBQUUsRUFBdEI7QUFBMEIsWUFBRSxFQUFFLENBQTlCO0FBQUEsaUNBQ0UscUVBQUMsb0VBQUQ7QUFBTSxpQkFBSyxNQUFYO0FBQUEsb0NBQ0UscUVBQUMsd0VBQUQ7QUFBVSxnQkFBRSxFQUFFLEVBQWQ7QUFBa0IsZ0JBQUUsRUFBRSxFQUF0QjtBQUEwQixnQkFBRSxFQUFFLENBQTlCO0FBQWlDLHVCQUFTLEVBQUUrQixPQUFPLENBQUNULFFBQXBEO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFHLDhCQUFYO0FBQTBDLG1CQUFHLEVBQUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRTtBQUFJLHVCQUFTLEVBQUVTLE9BQU8sQ0FBQzNHLFNBQXZCO0FBQUEsc0RBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixlQUdFO0FBQU8seUJBQVMsRUFBRTJHLE9BQU8sQ0FBQzdHLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixlQVNFLHFFQUFDLHdFQUFEO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxFQUFFNkcsT0FBTyxDQUFDL0IsV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrS0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDN0xEOztDQUdBOztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU0yQixTQUFTLEdBQUdDLDJFQUFVLENBQUNDLGdFQUFELENBQTVCO0FBRWUsU0FBU0ssY0FBVCxHQUEwQjtBQUN2QyxRQUFNSCxPQUFPLEdBQUdKLFNBQVMsRUFBekI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUksT0FBTyxDQUFDWCxPQUF4QjtBQUFBLDRCQUNFLHFFQUFDLDZFQUFEO0FBQWUsYUFBTyxFQUFDLFFBQXZCO0FBQUEsNkJBQ0UscUVBQUMsd0VBQUQ7QUFBVSxVQUFFLEVBQUUsRUFBZDtBQUFrQixVQUFFLEVBQUUsRUFBdEI7QUFBMEIsVUFBRSxFQUFFLENBQTlCO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFFVyxPQUFPLENBQUMvRyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUksbUJBQVMsRUFBRStHLE9BQU8sQ0FBQy9CLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVVFLHFFQUFDLDZFQUFEO0FBQWUsYUFBTyxFQUFDLFFBQXZCO0FBQUEsNkJBQ0UscUVBQUMsd0VBQUQ7QUFBVSxVQUFFLEVBQUUsRUFBZDtBQUFrQixVQUFFLEVBQUUsRUFBdEI7QUFBMEIsVUFBRSxFQUFFLENBQTlCO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFFK0IsT0FBTyxDQUFDL0IsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0RELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0N0RUQ7O0NBR0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTTJCLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsZ0VBQUQsQ0FBNUI7QUFFZSxTQUFTTSxXQUFULEdBQXVCO0FBQ3BDLFFBQU1KLE9BQU8sR0FBR0osU0FBUyxFQUF6QjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFSSxPQUFPLENBQUNYLE9BQXhCO0FBQUEsMkJBQ0UscUVBQUMsNkVBQUQ7QUFBZSxhQUFPLEVBQUMsUUFBdkI7QUFBQSw2QkFDRSxxRUFBQyx3RUFBRDtBQUFVLFVBQUUsRUFBRSxFQUFkO0FBQWtCLFVBQUUsRUFBRSxFQUF0QjtBQUEwQixVQUFFLEVBQUUsQ0FBOUI7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUVXLE9BQU8sQ0FBQy9HLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSSxtQkFBUyxFQUFFK0csT0FBTyxDQUFDL0IsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFRRTtBQUFJLG1CQUFTLEVBQUUrQixPQUFPLENBQUMvQixXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRixlQWNFO0FBQUEsaUNBQ0UscUVBQUMsNkVBQUQ7QUFBQSxvQ0FDRSxxRUFBQyx3RUFBRDtBQUFVLGdCQUFFLEVBQUUsRUFBZDtBQUFrQixnQkFBRSxFQUFFLEVBQXRCO0FBQTBCLGdCQUFFLEVBQUUsQ0FBOUI7QUFBQSxxQ0FDRSxxRUFBQyxrRkFBRDtBQUNFLHlCQUFTLEVBQUMsV0FEWjtBQUVFLGtCQUFFLEVBQUMsTUFGTDtBQUdFLGdDQUFnQixFQUFFO0FBQ2hCdkQsMkJBQVMsRUFBRTtBQURLO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBVUUscUVBQUMsd0VBQUQ7QUFBVSxnQkFBRSxFQUFFLEVBQWQ7QUFBa0IsZ0JBQUUsRUFBRSxFQUF0QjtBQUEwQixnQkFBRSxFQUFFLENBQTlCO0FBQUEscUNBQ0UscUVBQUMsa0ZBQUQ7QUFDRSx5QkFBUyxFQUFDLFlBRFo7QUFFRSxrQkFBRSxFQUFDLE9BRkw7QUFHRSxnQ0FBZ0IsRUFBRTtBQUNoQkEsMkJBQVMsRUFBRTtBQURLO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZGLGVBbUJFLHFFQUFDLHdFQUFEO0FBQVUsZ0JBQUUsRUFBRSxFQUFkO0FBQWtCLGdCQUFFLEVBQUUsRUFBdEI7QUFBMEIsZ0JBQUUsRUFBRSxDQUE5QjtBQUFBLHFDQUNBLHFFQUFDLGtGQUFEO0FBQ0UseUJBQVMsRUFBQyxjQURaO0FBRUUsa0JBQUUsRUFBQyxTQUZMO0FBR0UsZ0NBQWdCLEVBQUU7QUFDaEJBLDJCQUFTLEVBQUUsSUFESztBQUVoQjJGLDJCQUFTLEVBQUVMLE9BQU8sQ0FBQ007QUFGSCxpQkFIcEI7QUFPRSwwQkFBVSxFQUFFO0FBQ1ZDLDJCQUFTLEVBQUUsSUFERDtBQUVWQyxzQkFBSSxFQUFFO0FBRkk7QUFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFuQkYsZUFpQ0UscUVBQUMsd0VBQUQ7QUFBVSxnQkFBRSxFQUFFLEVBQWQ7QUFBa0IsZ0JBQUUsRUFBRSxFQUF0QjtBQUEwQixnQkFBRSxFQUFFLENBQTlCO0FBQWlDLHVCQUFTLEVBQUVSLE9BQU8sQ0FBQ1MsVUFBcEQ7QUFBQSxxQ0FDRSxxRUFBQywrRUFBRDtBQUFRLHFCQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRERCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQzdFRDs7Q0FFQTs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBSWUsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDekMsUUFBTUMsS0FBSyxHQUFHQyxzRUFBYSxDQUFDLG1CQUFELENBQTNCO0FBQ0EsUUFBV0MsSUFBWCxxQkFBb0JILEtBQXBCO0FBQ0Esc0JBQ0k7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsbUJBQVFJLHlEQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLGVBQU8sRUFBRyxHQUFFQSx5REFBSztBQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSxxRUFBQyxzREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFBLDZCQUNFLHFFQUFDLHNEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBbUIsaUJBQVMsRUFBRWpCLGdFQUFNLENBQUNrQixRQUFyQztBQUFBLCtCQUNFLHFFQUFDLDREQUFEO0FBQUssV0FBQyxFQUFFLENBQVI7QUFBQSxrQ0FDRSxxRUFBQyw0REFBRDtBQUFZLG1CQUFPLEVBQUVKLEtBQUssR0FBRyxJQUFILEdBQVUsSUFBcEM7QUFBQSxzQkFBMkNLLG9FQUFlQTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUscUVBQUMsNERBQUQ7QUFBWSxxQkFBUyxFQUFFbkIsZ0VBQU0sQ0FBQ29CLGFBQTlCO0FBQTZDLG1CQUFPLEVBQUVOLEtBQUssR0FBRyxJQUFILEdBQVUsSUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQWtCQTtBQUFLLGVBQVMsRUFBRVYsaURBQVUsQ0FBQ0osZ0VBQU0sQ0FBQ3FCLElBQVIsRUFBY3JCLGdFQUFNLENBQUNzQixVQUFyQixDQUExQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRXRCLGdFQUFNLENBQUNrQixRQUF2QjtBQUFBLGdDQUNFLHFFQUFDLCtGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSxxRUFBQywrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0UscUVBQUMsNEZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJBLGVBeUJBLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkE7QUFBQSxrQkFESjtBQTZCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ3pERDs7Q0FFQTs7Q0FFQTs7Q0FFQTtBQUVBOztBQUNBO0FBRUEsTUFBTXBCLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsK0ZBQUQsQ0FBNUI7QUFFZSxTQUFTdUIsSUFBVCxDQUFjVixLQUFkLEVBQXFCO0FBQ2xDLFFBQU1YLE9BQU8sR0FBR0osU0FBUyxFQUF6Qjs7QUFDQSxRQUFNO0FBQUVTLGFBQUY7QUFBYWlCLFlBQWI7QUFBdUJDLFNBQXZCO0FBQThCQztBQUE5QixNQUFvRGIsS0FBMUQ7QUFBQSxRQUFpREcsSUFBakQsNEJBQTBESCxLQUExRDs7QUFDQSxRQUFNYyxXQUFXLEdBQUd2QixpREFBVSxDQUFDO0FBQzdCLEtBQUNGLE9BQU8sQ0FBQ3JKLElBQVQsR0FBZ0IsSUFEYTtBQUU3QixLQUFDcUosT0FBTyxDQUFDdEQsU0FBVCxHQUFxQjZFLEtBRlE7QUFHN0IsS0FBQ3ZCLE9BQU8sQ0FBQ3JELFlBQVQsR0FBd0I2RSxRQUhLO0FBSTdCLEtBQUNuQixTQUFELEdBQWFBLFNBQVMsS0FBS3FCO0FBSkUsR0FBRCxDQUE5QjtBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFRDtBQUFoQixLQUFpQ1gsSUFBakM7QUFBQSxjQUNHUTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0FBRURELElBQUksQ0FBQ00sU0FBTCxHQUFpQjtBQUNmdEIsV0FBUyxFQUFFdUIsaURBQVMsQ0FBQ0MsTUFETjtBQUVmTixPQUFLLEVBQUVLLGlEQUFTLENBQUNFLElBRkY7QUFHZk4sVUFBUSxFQUFFSSxpREFBUyxDQUFDRSxJQUhMO0FBSWZSLFVBQVEsRUFBRU0saURBQVMsQ0FBQ0c7QUFKTCxDQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQzdCQTs7Q0FFQTs7Q0FFQTs7Q0FFQTtBQUVBOztBQUNBO0FBRUEsTUFBTW5DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsbUdBQUQsQ0FBNUI7QUFFZSxTQUFTa0MsUUFBVCxDQUFrQnJCLEtBQWxCLEVBQXlCO0FBQ3RDLFFBQU1YLE9BQU8sR0FBR0osU0FBUyxFQUF6Qjs7QUFDQSxRQUFNO0FBQUVTLGFBQUY7QUFBYWlCO0FBQWIsTUFBbUNYLEtBQXpDO0FBQUEsUUFBZ0NHLElBQWhDLDRCQUF5Q0gsS0FBekM7O0FBQ0EsUUFBTXNCLGVBQWUsR0FBRy9CLGlEQUFVLENBQUM7QUFDakMsS0FBQ0YsT0FBTyxDQUFDOUQsUUFBVCxHQUFvQixJQURhO0FBRWpDLEtBQUNtRSxTQUFELEdBQWFBLFNBQVMsS0FBS3FCO0FBRk0sR0FBRCxDQUFsQztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFTztBQUFoQixLQUFxQ25CLElBQXJDO0FBQUEsY0FDR1E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtBQUVEVSxRQUFRLENBQUNMLFNBQVQsR0FBcUI7QUFDbkJ0QixXQUFTLEVBQUV1QixpREFBUyxDQUFDQyxNQURGO0FBRW5CUCxVQUFRLEVBQUVNLGlEQUFTLENBQUNHO0FBRkQsQ0FBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0MzQkE7O0NBRUE7O0NBRUE7O0NBRUE7QUFFQTs7QUFDQTtBQUVBLE1BQU1uQyxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLHFHQUFELENBQTVCO0FBRWUsU0FBU29DLFVBQVQsQ0FBb0J2QixLQUFwQixFQUEyQjtBQUN4QyxRQUFNWCxPQUFPLEdBQUdKLFNBQVMsRUFBekI7O0FBQ0EsUUFBTTtBQUFFUyxhQUFGO0FBQWFpQjtBQUFiLE1BQW1DWCxLQUF6QztBQUFBLFFBQWdDRyxJQUFoQyw0QkFBeUNILEtBQXpDOztBQUNBLFFBQU13QixpQkFBaUIsR0FBR2pDLGlEQUFVLENBQUM7QUFDbkMsS0FBQ0YsT0FBTyxDQUFDM0QsVUFBVCxHQUFzQixJQURhO0FBRW5DLEtBQUNnRSxTQUFELEdBQWFBLFNBQVMsS0FBS3FCO0FBRlEsR0FBRCxDQUFwQztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFUztBQUFoQixLQUF1Q3JCLElBQXZDO0FBQUEsY0FDR1E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtBQUVEWSxVQUFVLENBQUNQLFNBQVgsR0FBdUI7QUFDckJ0QixXQUFTLEVBQUV1QixpREFBUyxDQUFDQyxNQURBO0FBRXJCUCxVQUFRLEVBQUVNLGlEQUFTLENBQUNHO0FBRkMsQ0FBdkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDM0JBOztDQUVBOztDQUdBOztBQUNBO0NBR0E7O0FBRUE7QUFFQSxNQUFNSyxtQkFBbUIsR0FBR3ZDLDBFQUFVLENBQUMsd0JBQ2xDcEcsaUdBRGtDLENBQUQsQ0FBdEM7QUFJQSxNQUFNNEksYUFBYSxnQkFBR0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQixDQUFDNUIsS0FBRCxFQUFRNkIsR0FBUixLQUFnQjtBQUNyRCxRQUFNO0FBQ0p4TCxTQURJO0FBRUo2RSxTQUZJO0FBR0p5RixZQUhJO0FBSUo1RyxhQUpJO0FBS0pjLFlBTEk7QUFNSkYsVUFOSTtBQU9KbUgsUUFQSTtBQVFKM0csU0FSSTtBQVNKQyxRQVRJO0FBVUpDLFlBVkk7QUFXSnFFO0FBWEksTUFhRk0sS0FiSjtBQUFBLFFBWUtHLElBWkwsNEJBYUlILEtBYko7O0FBZUEsUUFBTVgsT0FBTyxHQUFHb0MsbUJBQW1CLEVBQW5DO0FBRUEsUUFBTU0sVUFBVSxHQUFHeEMsaURBQVUsQ0FBQztBQUM1QixLQUFDRixPQUFPLENBQUN0RyxNQUFULEdBQWtCLElBRFU7QUFFNUIsS0FBQ3NHLE9BQU8sQ0FBQ3lDLElBQUQsQ0FBUixHQUFpQkEsSUFGVztBQUc1QixLQUFDekMsT0FBTyxDQUFDaEosS0FBRCxDQUFSLEdBQWtCQSxLQUhVO0FBSTVCLEtBQUNnSixPQUFPLENBQUNuRSxLQUFULEdBQWlCQSxLQUpXO0FBSzVCLEtBQUNtRSxPQUFPLENBQUN0RixTQUFULEdBQXFCQSxTQUxPO0FBTTVCLEtBQUNzRixPQUFPLENBQUN4RSxRQUFULEdBQW9CQSxRQU5RO0FBTzVCLEtBQUN3RSxPQUFPLENBQUMxRSxNQUFULEdBQWtCQSxNQVBVO0FBUTVCLEtBQUMwRSxPQUFPLENBQUNsRSxLQUFULEdBQWlCQSxLQVJXO0FBUzVCLEtBQUNrRSxPQUFPLENBQUNqRSxJQUFULEdBQWdCQSxJQVRZO0FBVTVCLEtBQUNpRSxPQUFPLENBQUNoRSxRQUFULEdBQW9CQSxRQVZRO0FBVzVCLEtBQUNxRSxTQUFELEdBQWFBO0FBWGUsR0FBRCxDQUE3QjtBQWFBLHNCQUNFLHFFQUFDLCtEQUFELGtDQUFZUyxJQUFaO0FBQWtCLE9BQUcsRUFBRTBCLEdBQXZCO0FBQTRCLFdBQU8sRUFBRTtBQUFFRyxVQUFJLEVBQUVEO0FBQVIsS0FBckM7QUFBQSxjQUNHcEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQXBDcUIsQ0FBdEI7QUFzQ0FlLGFBQWEsQ0FBQ1YsU0FBZCxHQUEwQjtBQUN4QjNLLE9BQUssRUFBRTRLLGlEQUFTLENBQUNnQixLQUFWLENBQWdCLENBQ3JCLFNBRHFCLEVBRXJCLE1BRnFCLEVBR3JCLFNBSHFCLEVBSXJCLFNBSnFCLEVBS3JCLFFBTHFCLEVBTXJCLE1BTnFCLEVBT3JCLE9BUHFCLEVBUXJCLFVBUnFCLEVBU3JCLFNBVHFCLEVBVXJCLFFBVnFCLEVBV3JCLFFBWHFCLEVBWXJCLGFBWnFCLENBQWhCLENBRGlCO0FBZXhCSCxNQUFJLEVBQUViLGlEQUFTLENBQUNnQixLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FBaEIsQ0Fma0I7QUFnQnhCdEgsUUFBTSxFQUFFc0csaURBQVMsQ0FBQ0UsSUFoQk07QUFpQnhCakcsT0FBSyxFQUFFK0YsaURBQVMsQ0FBQ0UsSUFqQk87QUFrQnhCcEgsV0FBUyxFQUFFa0gsaURBQVMsQ0FBQ0UsSUFsQkc7QUFtQnhCdEcsVUFBUSxFQUFFb0csaURBQVMsQ0FBQ0UsSUFuQkk7QUFvQnhCaEcsT0FBSyxFQUFFOEYsaURBQVMsQ0FBQ0UsSUFwQk87QUFxQnhCL0YsTUFBSSxFQUFFNkYsaURBQVMsQ0FBQ0UsSUFyQlE7QUFzQnhCOUYsVUFBUSxFQUFFNEYsaURBQVMsQ0FBQ0UsSUF0Qkk7QUF1QnhCUixVQUFRLEVBQUVNLGlEQUFTLENBQUNHLElBdkJJO0FBd0J4QjFCLFdBQVMsRUFBRXVCLGlEQUFTLENBQUNDO0FBeEJHLENBQTFCO0FBMkJlUSw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDbEZBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNekMsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxzR0FBRCxDQUE1QjtBQUVlLFNBQVMrQyxXQUFULENBQXFCbEMsS0FBckIsRUFBNEI7QUFDekMsUUFBTVgsT0FBTyxHQUFHSixTQUFTLEVBQXpCO0FBQ0EsUUFBTTtBQUNKa0Qsb0JBREk7QUFFSkMsYUFGSTtBQUdKQyxNQUhJO0FBSUpDLGNBSkk7QUFLSkMsY0FMSTtBQU1KQyxTQU5JO0FBT0psSSxTQVBJO0FBUUptSSwwQkFSSTtBQVNKdkk7QUFUSSxNQVVGOEYsS0FWSjtBQVlBLFFBQU0wQyxZQUFZLEdBQUduRCxpREFBVSxDQUFDO0FBQzlCLEtBQUMsTUFBTUYsT0FBTyxDQUFDM0MsY0FBZixHQUFnQzhGLEtBREY7QUFFOUIsS0FBQyxNQUFNbkQsT0FBTyxDQUFDMUMsZ0JBQWYsR0FBa0N6QyxPQUFPLElBQUksQ0FBQ3NJO0FBRmhCLEdBQUQsQ0FBL0I7QUFJQSxRQUFNRyxnQkFBZ0IsR0FBR3BELGlEQUFVLENBQUM7QUFDbEMsS0FBQ0YsT0FBTyxDQUFDL0MsY0FBVCxHQUEwQmtHLEtBRFE7QUFFbEMsS0FBQ25ELE9BQU8sQ0FBQzlDLGdCQUFULEdBQTRCckMsT0FBTyxJQUFJLENBQUNzSSxLQUZOO0FBR2xDLEtBQUNuRCxPQUFPLENBQUNqRCxTQUFULEdBQXFCLElBSGE7QUFJbEMsS0FBQ2lELE9BQU8sQ0FBQzdDLGNBQVQsR0FBMEJsQztBQUpRLEdBQUQsQ0FBbkM7QUFNQSxRQUFNN0IsU0FBUyxHQUFHOEcsaURBQVUsQ0FBQztBQUMzQixLQUFDa0Qsc0JBQUQsR0FBMEJBLHNCQUFzQixLQUFLMUI7QUFEMUIsR0FBRCxDQUE1QjtBQUdBLFFBQU02QixZQUFZLEdBQUdyRCxpREFBVSxDQUFDO0FBQzlCLEtBQUNGLE9BQU8sQ0FBQ3hDLEtBQVQsR0FBaUIsSUFEYTtBQUU5QixLQUFDd0MsT0FBTyxDQUFDdkMsVUFBVCxHQUFzQnhDO0FBRlEsR0FBRCxDQUEvQjtBQUlBLE1BQUl1SSxrQkFBSjs7QUFDQSxNQUFJVixnQkFBZ0IsS0FBS3BCLFNBQXpCLEVBQW9DO0FBQ2xDOEIsc0JBQWtCLEdBQUd0RCxpREFBVSxDQUM3QjRDLGdCQUFnQixDQUFDekMsU0FEWSxFQUU3QkwsT0FBTyxDQUFDekMsV0FGcUIsQ0FBL0I7QUFJRCxHQUxELE1BS087QUFDTGlHLHNCQUFrQixHQUFHeEQsT0FBTyxDQUFDekMsV0FBN0I7QUFDRDs7QUFDRCxzQkFDRSxxRUFBQyxvRUFBRCxrQ0FBaUJ1RixnQkFBakI7QUFBbUMsYUFBUyxFQUFFVSxrQkFBOUM7QUFBQSxlQUNHVCxTQUFTLEtBQUtyQixTQUFkLGdCQUNDLHFFQUFDLG1FQUFEO0FBQ0UsZUFBUyxFQUFFMUIsT0FBTyxDQUFDNUMsU0FBUixHQUFvQixHQUFwQixHQUEwQmlHLFlBRHZDO0FBRUUsYUFBTyxFQUFFTDtBQUZYLE9BR01DLFVBSE47QUFBQSxnQkFLR0Y7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsR0FRRyxJQVROLGVBVUUscUVBQUMsOERBQUQ7QUFDRSxhQUFPLEVBQUU7QUFDUHZGLGFBQUssRUFBRStGLFlBREE7QUFFUFosWUFBSSxFQUFFdkosU0FGQztBQUdQb0MsZ0JBQVEsRUFBRXdFLE9BQU8sQ0FBQ3hFLFFBSFg7QUFJUHVCLGlCQUFTLEVBQUV1RztBQUpKLE9BRFg7QUFPRSxRQUFFLEVBQUVOO0FBUE4sT0FRTUUsVUFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7QUFFREwsV0FBVyxDQUFDbEIsU0FBWixHQUF3QjtBQUN0Qm9CLFdBQVMsRUFBRW5CLGlEQUFTLENBQUNHLElBREM7QUFFdEJrQixZQUFVLEVBQUVyQixpREFBUyxDQUFDNkIsTUFGQTtBQUd0QlQsSUFBRSxFQUFFcEIsaURBQVMsQ0FBQ0MsTUFIUTtBQUl0QnFCLFlBQVUsRUFBRXRCLGlEQUFTLENBQUM2QixNQUpBO0FBS3RCWCxrQkFBZ0IsRUFBRWxCLGlEQUFTLENBQUM2QixNQUxOO0FBTXRCTCx3QkFBc0IsRUFBRXhCLGlEQUFTLENBQUNDLE1BTlo7QUFPdEJzQixPQUFLLEVBQUV2QixpREFBUyxDQUFDRSxJQVBLO0FBUXRCakgsU0FBTyxFQUFFK0csaURBQVMsQ0FBQ0UsSUFSRztBQVN0QjdHLE9BQUssRUFBRTJHLGlEQUFTLENBQUNFO0FBVEssQ0FBeEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUVPLE1BQU00QixNQUFVLEdBQUcsQ0FBQyxFQUFELEtBQXNCO0FBQzlDLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxnRUFBSyxDQUFDQyxNQUF0QjtBQUFBLDJCQUNFLHFFQUFDLDREQUFEO0FBQVksYUFBTyxFQUFDLE9BQXBCO0FBQTRCLGFBQU8sRUFBQyxRQUFwQztBQUE2QyxlQUFTLEVBQUVELGdFQUFLLENBQUMsZ0JBQUQsQ0FBN0Q7QUFBQSx3Q0FDbUIsR0FEbkIsZUFFRTtBQUFHLFlBQUksRUFBQyxtQ0FBUjtBQUE0QyxjQUFNLEVBQUMsUUFBbkQ7QUFBNEQsV0FBRyxFQUFDLFlBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVELENBWE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ0hQOztDQUdBOztBQUNBO0FBQ0E7QUFFQSxNQUFNN0QsTUFBTSxHQUFHO0FBQ2IrRCxNQUFJLEVBQUU7QUFDSnhOLGVBQVcsRUFBRSxLQURUO0FBRUpDLGNBQVUsRUFBRSxLQUZSO0FBR0pDLFNBQUssRUFBRSxNQUhIO0FBSUpTLFNBQUssRUFBRTtBQUpIO0FBRE8sQ0FBZjtBQVNBLE1BQU00SSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLE1BQUQsQ0FBNUI7QUFFZSxTQUFTZ0UsYUFBVCxDQUF1Qm5ELEtBQXZCLEVBQThCO0FBQzNDLFFBQU1YLE9BQU8sR0FBR0osU0FBUyxFQUF6Qjs7QUFDQSxRQUFNO0FBQUUwQixZQUFGO0FBQVlqQjtBQUFaLE1BQW1DTSxLQUF6QztBQUFBLFFBQWdDRyxJQUFoQyw0QkFBeUNILEtBQXpDOztBQUNBLHNCQUNFLHFFQUFDLDZEQUFEO0FBQU0sYUFBUztBQUFmLEtBQW9CRyxJQUFwQjtBQUEwQixhQUFTLEVBQUVkLE9BQU8sQ0FBQzZELElBQVIsR0FBZSxHQUFmLEdBQXFCeEQsU0FBMUQ7QUFBQSxjQUNHaUI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtBQUVEd0MsYUFBYSxDQUFDQyxZQUFkLEdBQTZCO0FBQzNCMUQsV0FBUyxFQUFFO0FBRGdCLENBQTdCO0FBSUF5RCxhQUFhLENBQUNuQyxTQUFkLEdBQTBCO0FBQ3hCTCxVQUFRLEVBQUVNLGlEQUFTLENBQUNHLElBREk7QUFFeEIxQixXQUFTLEVBQUV1QixpREFBUyxDQUFDQztBQUZHLENBQTFCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NoQ0E7O0NBRUE7O0FBQ0E7QUFDQTtBQUVBLE1BQU0vQixNQUFNLEdBQUc7QUFDYitELE1BQUksRUFBRTtBQUNKaE4sWUFBUSxFQUFFLFVBRE47QUFFSk4sU0FBSyxFQUFFLE1BRkg7QUFHSm9ELGFBQVMsRUFBRSxLQUhQO0FBSUp4RCxnQkFBWSxFQUFFLE1BSlY7QUFLSkMsZUFBVyxFQUFFLE1BTFQ7QUFNSjROLGFBQVMsRUFBRSxNQU5QO0FBT0poTixTQUFLLEVBQUU7QUFQSDtBQURPLENBQWY7QUFZQSxNQUFNNEksU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxNQUFELENBQTVCO0FBRWUsU0FBU21FLFFBQVQsQ0FBa0J0RCxLQUFsQixFQUF5QjtBQUN0QyxRQUFNWCxPQUFPLEdBQUdKLFNBQVMsRUFBekI7O0FBQ0EsUUFBTTtBQUFFMEIsWUFBRjtBQUFZakI7QUFBWixNQUFtQ00sS0FBekM7QUFBQSxRQUFnQ0csSUFBaEMsNEJBQXlDSCxLQUF6Qzs7QUFDQSxzQkFDRSxxRUFBQyw2REFBRDtBQUFNLFFBQUk7QUFBVixLQUFlRyxJQUFmO0FBQXFCLGFBQVMsRUFBRWQsT0FBTyxDQUFDNkQsSUFBUixHQUFlLEdBQWYsR0FBcUJ4RCxTQUFyRDtBQUFBLGNBQ0dpQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0FBRUQyQyxRQUFRLENBQUNGLFlBQVQsR0FBd0I7QUFDdEIxRCxXQUFTLEVBQUU7QUFEVyxDQUF4QjtBQUlBNEQsUUFBUSxDQUFDdEMsU0FBVCxHQUFxQjtBQUNuQkwsVUFBUSxFQUFFTSxpREFBUyxDQUFDRyxJQUREO0FBRW5CMUIsV0FBUyxFQUFFdUIsaURBQVMsQ0FBQ0M7QUFGRixDQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NsQ0E7O0NBRUE7O0NBRUE7O0FBQ0E7QUFFQTtBQUVBLE1BQU1qQyxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLCtGQUFELENBQTVCO0FBRWUsU0FBU29FLFFBQVQsQ0FBa0J2RCxLQUFsQixFQUF5QjtBQUN0QyxRQUFNWCxPQUFPLEdBQUdKLFNBQVMsRUFBekI7QUFDQSxRQUFNO0FBQUUzRyxTQUFGO0FBQVNnRixlQUFUO0FBQXNCa0csYUFBdEI7QUFBaUNDO0FBQWpDLE1BQThDekQsS0FBcEQ7QUFDQSxRQUFNL0MsV0FBVyxHQUFHc0MsaURBQVUsQ0FBQztBQUM3QixLQUFDRixPQUFPLENBQUNwQyxXQUFULEdBQXVCLElBRE07QUFFN0IsS0FBQ29DLE9BQU8sQ0FBQ21FLFNBQUQsQ0FBUixHQUFzQixJQUZPO0FBRzdCLEtBQUNuRSxPQUFPLENBQUM5QixtQkFBVCxHQUErQmtHO0FBSEYsR0FBRCxDQUE5QjtBQUtBLFFBQU1DLFdBQVcsR0FBR25FLGlEQUFVLENBQUM7QUFDN0IsS0FBQ0YsT0FBTyxDQUFDakMsSUFBVCxHQUFnQixJQURhO0FBRTdCLEtBQUNpQyxPQUFPLENBQUM3QixZQUFULEdBQXdCaUc7QUFGSyxHQUFELENBQTlCO0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVwRSxPQUFPLENBQUNyQyxRQUF4QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQyxXQUFoQjtBQUFBLDZCQUNFLHFFQUFDLEtBQUQsQ0FBTyxJQUFQO0FBQVksaUJBQVMsRUFBRXlHO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLGVBQVMsRUFBRXJFLE9BQU8sQ0FBQ2hDLGtCQUF4QjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRWdDLE9BQU8sQ0FBQy9HLEtBQXZCO0FBQUEsa0JBQStCQTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFHLGlCQUFTLEVBQUUrRyxPQUFPLENBQUMvQixXQUF0QjtBQUFBLGtCQUFvQ0E7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7QUFFRGlHLFFBQVEsQ0FBQ0gsWUFBVCxHQUF3QjtBQUN0QkksV0FBUyxFQUFFO0FBRFcsQ0FBeEI7QUFJQUQsUUFBUSxDQUFDdkMsU0FBVCxHQUFxQjtBQUNuQjVELE1BQUksRUFBRTZELGlEQUFTLENBQUM2QixNQUFWLENBQWlCYSxVQURKO0FBRW5CckwsT0FBSyxFQUFFMkksaURBQVMsQ0FBQzJDLFNBQVYsQ0FBb0IsQ0FBQzNDLGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUNHLElBQTdCLENBQXBCLEVBQXdEdUMsVUFGNUM7QUFHbkJyRyxhQUFXLEVBQUUyRCxpREFBUyxDQUFDQyxNQUFWLENBQWlCeUMsVUFIWDtBQUluQkgsV0FBUyxFQUFFdkMsaURBQVMsQ0FBQ2dCLEtBQVYsQ0FBZ0IsQ0FDekIsU0FEeUIsRUFFekIsU0FGeUIsRUFHekIsUUFIeUIsRUFJekIsU0FKeUIsRUFLekIsTUFMeUIsRUFNekIsTUFOeUIsRUFPekIsTUFQeUIsQ0FBaEIsQ0FKUTtBQWFuQndCLFVBQVEsRUFBRXhDLGlEQUFTLENBQUNFO0FBYkQsQ0FBckIsQzs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNZixJQUFJLEdBQUcsSUFBYjtBQUNBLE1BQU1FLGVBQWUsR0FBRyxJQUF4QjtBQUNBLE1BQU11RCxRQUFRLEdBQUcsd0JBQWpCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlFQUF4QixDOzs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiXG5jb25zdCBoZXhDb2xvclRvUkdCID0gZnVuY3Rpb24oaGV4Q29sb3IpIHtcbiAgbGV0IGRldGVjdFNob3J0aGFuZCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7IC8vICMwMDAgdnMgIzAwMDAwMFxuICBoZXhDb2xvciA9IGhleENvbG9yLnJlcGxhY2UoZGV0ZWN0U2hvcnRoYW5kLCBmdW5jdGlvbihtLCByLCBnLCBiKSB7XG4gICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcbiAgfSk7XG5cbiAgY29uc3QgaGV4X2FycmF5ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleENvbG9yKTsgLy8gIzAwMDAwMCB0byAjZmZmZmZmXG4gIHJldHVybiBoZXhfYXJyYXlcbiAgICA/IHtcbiAgICAgICAgcjogcGFyc2VJbnQoaGV4X2FycmF5WzFdLCAxNiksIC8vIDAtMjU1XG4gICAgICAgIGc6IHBhcnNlSW50KGhleF9hcnJheVsyXSwgMTYpLCAvLyAwLTI1NVxuICAgICAgICBiOiBwYXJzZUludChoZXhfYXJyYXlbM10sIDE2KSAvLyAwLTI1NVxuICAgICAgfVxuICAgIDogbnVsbDtcbn07XG5cbmNvbnN0IGhleFRvUkdCQWxwaGEgPSBmdW5jdGlvbihoZXhDb2xvciwgYWxwaGEpIHtcbiAgbGV0IHJnYiA9IGhleENvbG9yVG9SR0IoaGV4Q29sb3IpO1xuICByZXR1cm4gYHJnYmEoJHtyZ2Iucn0sJHtyZ2IuZ30sJHtyZ2IuYn0sJHthbHBoYX0pYDtcbn07XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMjYwO1xuXG5jb25zdCB0cmFuc2l0aW9uID0ge1xuICB0cmFuc2l0aW9uOiBcImFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpXCJcbn07XG5cbmNvbnN0IGNvbmF0aW5lckZsdWlkID0ge1xuICBwYWRkaW5nUmlnaHQ6IFwiMTVweFwiLFxuICBwYWRkaW5nTGVmdDogXCIxNXB4XCIsXG4gIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gIHdpZHRoOiBcIjEwMCVcIlxufTtcbmNvbnN0IGNvbnRhaW5lciA9IHtcbiAgLi4uY29uYXRpbmVyRmx1aWQsXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KVwiOiB7XG4gICAgbWF4V2lkdGg6IFwiNTQwcHhcIlxuICB9LFxuICBcIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjcyMHB4XCJcbiAgfSxcbiAgXCJAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpXCI6IHtcbiAgICBtYXhXaWR0aDogXCI5NjBweFwiXG4gIH0sXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjExNDBweFwiXG4gIH1cbn07XG5cbmNvbnN0IGJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMHB4IDMwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCA0cHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiXG59O1xuXG5jb25zdCBjYXJkID0ge1xuICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIG1hcmdpbjogXCIyNXB4IDBcIixcbiAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNClcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuODcpXCIsXG4gIGJhY2tncm91bmQ6IFwiI2ZmZlwiXG59O1xuXG5jb25zdCBkZWZhdWx0Rm9udCA9IHtcbiAgZm9udEZhbWlseTogJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZicsXG4gIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gIGxpbmVIZWlnaHQ6IFwiMS41ZW1cIlxufTtcblxuY29uc3QgcHJpbWFyeUNvbG9yID0gXCIjOWMyN2IwXCI7XG5jb25zdCB3YXJuaW5nQ29sb3IgPSBcIiNmZjk4MDBcIjtcbmNvbnN0IGRhbmdlckNvbG9yID0gXCIjZjQ0MzM2XCI7XG5jb25zdCBzdWNjZXNzQ29sb3IgPSBcIiM0Y2FmNTBcIjtcbmNvbnN0IGluZm9Db2xvciA9IFwiIzAwYWNjMVwiO1xuY29uc3Qgcm9zZUNvbG9yID0gXCIjZTkxZTYzXCI7XG5jb25zdCBncmF5Q29sb3IgPSBcIiM5OTk5OTlcIjtcblxuY29uc3QgcHJpbWFyeUJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHByaW1hcnlDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgcHJpbWFyeUNvbG9yLFxuICAgIDAuMlxuICApfWBcbn07XG5jb25zdCBpbmZvQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDEycHggMjBweCAtMTBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgaW5mb0NvbG9yLFxuICAgIDAuMjhcbiAgKX0sIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBpbmZvQ29sb3IsXG4gICAgMC4yXG4gICl9YFxufTtcbmNvbnN0IHN1Y2Nlc3NCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBzdWNjZXNzQ29sb3IsXG4gICAgMC4yOFxuICApfSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHN1Y2Nlc3NDb2xvcixcbiAgICAwLjJcbiAgKX1gXG59O1xuY29uc3Qgd2FybmluZ0JveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHdhcm5pbmdDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgd2FybmluZ0NvbG9yLFxuICAgIDAuMlxuICApfWBcbn07XG5jb25zdCBkYW5nZXJCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBkYW5nZXJDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgZGFuZ2VyQ29sb3IsXG4gICAgMC4yXG4gICl9YFxufTtcbmNvbnN0IHJvc2VCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgNHB4IDIwcHggMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBcIiMwMDBcIixcbiAgICAwLjE0XG4gICl9LCAwIDdweCAxMHB4IC01cHggJHtoZXhUb1JHQkFscGhhKHJvc2VDb2xvciwgMC40KX1gXG59O1xuXG5jb25zdCB3YXJuaW5nQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2ZmYTcyNiwgI2ZiOGMwMClcIixcbiAgLi4ud2FybmluZ0JveFNoYWRvd1xufTtcbmNvbnN0IHN1Y2Nlc3NDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNjZiYjZhLCAjNDNhMDQ3KVwiLFxuICAuLi5zdWNjZXNzQm94U2hhZG93XG59O1xuY29uc3QgZGFuZ2VyQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2VmNTM1MCwgI2U1MzkzNSlcIixcbiAgLi4uZGFuZ2VyQm94U2hhZG93XG59O1xuY29uc3QgaW5mb0NhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMyNmM2ZGEsICMwMGFjYzEpXCIsXG4gIC4uLmluZm9Cb3hTaGFkb3dcbn07XG5jb25zdCBwcmltYXJ5Q2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2FiNDdiYywgIzhlMjRhYSlcIixcbiAgLi4ucHJpbWFyeUJveFNoYWRvd1xufTtcbmNvbnN0IHJvc2VDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWM0MDdhLCAjZDgxYjYwKVwiLFxuICAuLi5yb3NlQm94U2hhZG93XG59O1xuY29uc3QgY2FyZEFjdGlvbnMgPSB7XG4gIG1hcmdpbjogXCIwIDIwcHggMTBweFwiLFxuICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZWVlZWVlXCIsXG4gIGhlaWdodDogXCJhdXRvXCIsXG4gIC4uLmRlZmF1bHRGb250XG59O1xuXG5jb25zdCBjYXJkSGVhZGVyID0ge1xuICBtYXJnaW46IFwiLTMwcHggMTVweCAwXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgcGFkZGluZzogXCIxNXB4XCJcbn07XG5cbmNvbnN0IGRlZmF1bHRCb3hTaGFkb3cgPSB7XG4gIGJvcmRlcjogXCIwXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMHB4IDIwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCAzcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxuICBwYWRkaW5nOiBcIjEwcHggMFwiLFxuICB0cmFuc2l0aW9uOiBcImFsbCAxNTBtcyBlYXNlIDBzXCJcbn07XG5cbmNvbnN0IHRpdGxlID0ge1xuICBjb2xvcjogXCIjM0M0ODU4XCIsXG4gIG1hcmdpbjogXCIxLjc1cmVtIDAgMC44NzVyZW1cIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICBmb250RmFtaWx5OiBgXCJSb2JvdG8gU2xhYlwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZmBcbn07XG5cbmNvbnN0IHNtYWxsVGl0bGUgPSB7XG4gIC4uLnRpdGxlLFxuICBtYXJnaW5Ub3A6IFwiLjYyNXJlbVwiXG59O1xuXG5jb25zdCBjYXJkVGl0bGUgPSB7XG4gIC4uLnNtYWxsVGl0bGUsXG4gIG1hcmdpblRvcDogXCIuNjI1cmVtXCJcbn07XG5cbmNvbnN0IGNhcmRMaW5rID0ge1xuICBcIiYgKyAkY2FyZExpbmtcIjoge1xuICAgIG1hcmdpbkxlZnQ6IFwiMS4yNXJlbVwiXG4gIH1cbn07XG5cbmNvbnN0IGNhcmRTdWJ0aXRsZSA9IHtcbiAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgbWFyZ2luVG9wOiBcIi0uMzc1cmVtXCJcbn07XG5cbmV4cG9ydCB7XG4gIGhleFRvUkdCQWxwaGEsXG4gIC8vdmFyaWFibGVzXG4gIGRyYXdlcldpZHRoLFxuICB0cmFuc2l0aW9uLFxuICBjb250YWluZXIsXG4gIGNvbmF0aW5lckZsdWlkLFxuICBib3hTaGFkb3csXG4gIGNhcmQsXG4gIGRlZmF1bHRGb250LFxuICBwcmltYXJ5Q29sb3IsXG4gIHdhcm5pbmdDb2xvcixcbiAgZGFuZ2VyQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgaW5mb0NvbG9yLFxuICByb3NlQ29sb3IsXG4gIGdyYXlDb2xvcixcbiAgcHJpbWFyeUJveFNoYWRvdyxcbiAgaW5mb0JveFNoYWRvdyxcbiAgc3VjY2Vzc0JveFNoYWRvdyxcbiAgd2FybmluZ0JveFNoYWRvdyxcbiAgZGFuZ2VyQm94U2hhZG93LFxuICByb3NlQm94U2hhZG93LFxuICB3YXJuaW5nQ2FyZEhlYWRlcixcbiAgc3VjY2Vzc0NhcmRIZWFkZXIsXG4gIGRhbmdlckNhcmRIZWFkZXIsXG4gIGluZm9DYXJkSGVhZGVyLFxuICBwcmltYXJ5Q2FyZEhlYWRlcixcbiAgcm9zZUNhcmRIZWFkZXIsXG4gIGNhcmRBY3Rpb25zLFxuICBjYXJkSGVhZGVyLFxuICBkZWZhdWx0Qm94U2hhZG93LFxuICB0aXRsZSxcbiAgc21hbGxUaXRsZSxcbiAgY2FyZFRpdGxlLFxuICBjYXJkTGluayxcbiAgY2FyZFN1YnRpdGxlXG59O1xuIiwiaW1wb3J0IHtcbiAgaGV4VG9SR0JBbHBoYSxcbiAgZ3JheUNvbG9yLFxuICByb3NlQ29sb3IsXG4gIHByaW1hcnlDb2xvcixcbiAgaW5mb0NvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIHdhcm5pbmdDb2xvcixcbiAgZGFuZ2VyQ29sb3Jcbn0gZnJvbSBcIi4uLy4uL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gIGJ1dHRvbjoge1xuICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXG4gICAgbWluV2lkdGg6IFwiYXV0b1wiLFxuICAgIGJhY2tncm91bmRDb2xvcjogZ3JheUNvbG9yLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoMTUzLCAxNTMsIDE1MywgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgxNTMsIDE1MywgMTUzLCAwLjEyKVwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgcGFkZGluZzogXCIxMnB4IDMwcHhcIixcbiAgICBtYXJnaW46IFwiLjMxMjVyZW0gMXB4XCIsXG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjBcIixcbiAgICB3aWxsQ2hhbmdlOiBcImJveC1zaGFkb3csIHRyYW5zZm9ybVwiLFxuICAgIHRyYW5zaXRpb246XG4gICAgICBcImJveC1zaGFkb3cgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSlcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTcxNDNcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgIHRvdWNoQWN0aW9uOiBcIm1hbmlwdWxhdGlvblwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKVwiXG4gICAgfSxcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIHRvcDogXCIwXCIsXG4gICAgICBmb250U2l6ZTogXCIxLjFyZW1cIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxuICAgIH0sXG4gICAgXCImIHN2Z1wiOiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIHRvcDogXCIwXCIsXG4gICAgICB3aWR0aDogXCIxOHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMThweFwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiNHB4XCIsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiXG4gICAgfSxcbiAgICBcIiYkanVzdEljb25cIjoge1xuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgICBtYXJnaW5SaWdodDogXCIwcHhcIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICBsZWZ0OiBcIjBweFwiLFxuICAgICAgICB0b3A6IFwiMHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNDFweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGZ1bGxXaWR0aDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIlxuICB9LFxuICBwcmltYXJ5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBwcmltYXJ5Q29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKHByaW1hcnlDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YFxuICAgIH1cbiAgfSxcbiAgaW5mbzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yLFxuICAgIGJveFNoYWRvdzogYDAgMnB4IDJweCAwICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIGluZm9Db2xvcixcbiAgICAgIDAuMTRcbiAgICApfSwgMCAzcHggMXB4IC0ycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgaW5mb0NvbG9yLFxuICAgICAgMC4yXG4gICAgKX0sIDAgMXB4IDVweCAwICR7aGV4VG9SR0JBbHBoYShpbmZvQ29sb3IsIDAuMTIpfWAsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3IsXG4gICAgICBib3hTaGFkb3c6IGAwIDE0cHggMjZweCAtMTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIGluZm9Db2xvcixcbiAgICAgICAgMC40MlxuICAgICAgKX0sIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIGluZm9Db2xvcixcbiAgICAgICAgMC4yXG4gICAgICApfWBcbiAgICB9XG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgICBib3hTaGFkb3c6IGAwIDJweCAycHggMCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBzdWNjZXNzQ29sb3IsXG4gICAgICAwLjE0XG4gICAgKX0sIDAgM3B4IDFweCAtMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIHN1Y2Nlc3NDb2xvcixcbiAgICAgIDAuMlxuICAgICl9LCAwIDFweCA1cHggMCAke2hleFRvUkdCQWxwaGEoc3VjY2Vzc0NvbG9yLCAwLjEyKX1gLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yLFxuICAgICAgYm94U2hhZG93OiBgMCAxNHB4IDI2cHggLTEycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgICBzdWNjZXNzQ29sb3IsXG4gICAgICAgIDAuNDJcbiAgICAgICl9LCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgICBzdWNjZXNzQ29sb3IsXG4gICAgICAgIDAuMlxuICAgICAgKX1gXG4gICAgfVxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgd2FybmluZ0NvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICB3YXJuaW5nQ29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKHdhcm5pbmdDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgd2FybmluZ0NvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgd2FybmluZ0NvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YFxuICAgIH1cbiAgfSxcbiAgZGFuZ2VyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvcixcbiAgICBib3hTaGFkb3c6IGAwIDJweCAycHggMCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBkYW5nZXJDb2xvcixcbiAgICAgIDAuMTRcbiAgICApfSwgMCAzcHggMXB4IC0ycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgZGFuZ2VyQ29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKGRhbmdlckNvbG9yLCAwLjEyKX1gLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgICBib3hTaGFkb3c6IGAwIDE0cHggMjZweCAtMTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIGRhbmdlckNvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgZGFuZ2VyQ29sb3IsXG4gICAgICAgIDAuMlxuICAgICAgKX1gXG4gICAgfVxuICB9LFxuICByb3NlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBwcmltYXJ5Q29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKHByaW1hcnlDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvc2VDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YFxuICAgIH1cbiAgfSxcbiAgd2hpdGU6IHtcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgY29sb3I6IGdyYXlDb2xvclxuICAgIH1cbiAgfSxcbiAgdHdpdHRlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTVhY2VlXCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSg4NSwgMTcyLCAyMzgsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDg1LCAxNzIsIDIzOCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSg4NSwgMTcyLCAyMzgsIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXMsJjp2aXNpdGVkXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTVhY2VlXCIsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSg4NSwgMTcyLCAyMzgsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSg4NSwgMTcyLCAyMzgsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgZmFjZWJvb2s6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNiNTk5OFwiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoNTksIDg5LCAxNTIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDU5LCA4OSwgMTUyLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDU5LCA4OSwgMTUyLCAwLjEyKVwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjM2I1OTk4XCIsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSg1OSwgODksIDE1MiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDU5LCA4OSwgMTUyLCAwLjIpXCJcbiAgICB9XG4gIH0sXG4gIGdvb2dsZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZGQ0YjM5XCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSgyMjEsIDc1LCA1NywgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMjIxLCA3NSwgNTcsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMjIxLCA3NSwgNTcsIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNkZDRiMzlcIixcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDIyMSwgNzUsIDU3LCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMjIxLCA3NSwgNTcsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgZ2l0aHViOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDUxLCA1MSwgNTEsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4xMilcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzMzMzM1wiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoNTEsIDUxLCA1MSwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDUxLCA1MSwgNTEsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgc2ltcGxlOiB7XG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgIH0sXG4gICAgXCImJHByaW1hcnlcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogcHJpbWFyeUNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkaW5mb1wiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiBpbmZvQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRzdWNjZXNzXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IHN1Y2Nlc3NDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJHdhcm5pbmdcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogd2FybmluZ0NvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkcm9zZVwiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiByb3NlQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRkYW5nZXJcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogZGFuZ2VyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiR0d2l0dGVyXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IFwiIzU1YWNlZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkZmFjZWJvb2tcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogXCIjM2I1OTk4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRnb29nbGVcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogXCIjZGQ0YjM5XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRnaXRodWJcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogXCIjMzMzMzMzXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHRyYW5zcGFyZW50OiB7XG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgIH1cbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBvcGFjaXR5OiBcIjAuNjVcIixcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuICB9LFxuICBsZzoge1xuICAgIHBhZGRpbmc6IFwiMS4xMjVyZW0gMi4yNXJlbVwiLFxuICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjMzMzMzM1wiLFxuICAgIGJvcmRlclJhZGl1czogXCIwLjJyZW1cIlxuICB9LFxuICBzbToge1xuICAgIHBhZGRpbmc6IFwiMC40MDYyNXJlbSAxLjI1cmVtXCIsXG4gICAgZm9udFNpemU6IFwiMC42ODc1cmVtXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4ycmVtXCJcbiAgfSxcbiAgcm91bmQ6IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiMzBweFwiXG4gIH0sXG4gIGJsb2NrOiB7XG4gICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCJcbiAgfSxcbiAgbGluazoge1xuICAgIFwiJiwmOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBjb2xvcjogXCIjOTk5OTk5XCIsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgfVxuICB9LFxuICBqdXN0SWNvbjoge1xuICAgIHBhZGRpbmdMZWZ0OiBcIjEycHhcIixcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMTJweFwiLFxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICBoZWlnaHQ6IFwiNDFweFwiLFxuICAgIG1pbldpZHRoOiBcIjQxcHhcIixcbiAgICB3aWR0aDogXCI0MXB4XCIsXG4gICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiBzdmcsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCJcbiAgICB9LFxuICAgIFwiJiRsZ1wiOiB7XG4gICAgICBoZWlnaHQ6IFwiNTdweFwiLFxuICAgICAgbWluV2lkdGg6IFwiNTdweFwiLFxuICAgICAgd2lkdGg6IFwiNTdweFwiLFxuICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICAgIGZvbnRTaXplOiBcIjMycHhcIixcbiAgICAgICAgbGluZUhlaWdodDogXCI1NnB4XCJcbiAgICAgIH0sXG4gICAgICBcIiYgc3ZnXCI6IHtcbiAgICAgICAgd2lkdGg6IFwiMzJweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzJweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkc21cIjoge1xuICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgIG1pbldpZHRoOiBcIjMwcHhcIixcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjI5cHhcIlxuICAgICAgfSxcbiAgICAgIFwiJiBzdmdcIjoge1xuICAgICAgICB3aWR0aDogXCIxN3B4XCIsXG4gICAgICAgIGhlaWdodDogXCIxN3B4XCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1dHRvblN0eWxlO1xuIiwiY29uc3QgY2FyZEJvZHlTdHlsZSA9IHtcbiAgY2FyZEJvZHk6IHtcbiAgICBwYWRkaW5nOiBcIjAuOTM3NXJlbSAxLjg3NXJlbVwiLFxuICAgIGZsZXg6IFwiMSAxIGF1dG9cIixcbiAgICBjb2xvcjogXCJpbmhlcml0XCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZEJvZHlTdHlsZTtcbiIsImNvbnN0IGNhcmRGb290ZXJTdHlsZSA9IHtcbiAgY2FyZEZvb3Rlcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgcGFkZGluZzogXCIwLjkzNzVyZW0gMS44NzVyZW1cIixcbiAgICBjb2xvcjogXCJpbmhlcml0XCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZEZvb3RlclN0eWxlO1xuIiwiY29uc3QgY2FyZFN0eWxlID0ge1xuICBjYXJkOiB7XG4gICAgYm9yZGVyOiBcIjBcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgbWluV2lkdGg6IFwiMFwiLFxuICAgIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcbiAgICBmb250U2l6ZTogXCIuODc1cmVtXCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMzAwbXMgbGluZWFyXCJcbiAgfSxcbiAgY2FyZFBsYWluOiB7XG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gIH0sXG4gIGNhcmRDYXJvdXNlbDoge1xuICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRTdHlsZTtcbiIsImltcG9ydCB7XG4gIHByaW1hcnlDb2xvcixcbiAgZGFuZ2VyQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgZGVmYXVsdEZvbnRcbn0gZnJvbSBcIi4uLy4uL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuY29uc3QgY3VzdG9tSW5wdXRTdHlsZSA9IHtcbiAgZGlzYWJsZWQ6IHtcbiAgICBcIiY6YmVmb3JlXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50ICFpbXBvcnRhbnRcIlxuICAgIH1cbiAgfSxcbiAgdW5kZXJsaW5lOiB7XG4gICAgXCImOmhvdmVyOm5vdCgkZGlzYWJsZWQpOmJlZm9yZSwmOmJlZm9yZVwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogXCIjRDJEMkQyICFpbXBvcnRhbnRcIixcbiAgICAgIGJvcmRlcldpZHRoOiBcIjFweCAhaW1wb3J0YW50XCJcbiAgICB9LFxuICAgIFwiJjphZnRlclwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogcHJpbWFyeUNvbG9yXG4gICAgfVxuICB9LFxuICB1bmRlcmxpbmVFcnJvcjoge1xuICAgIFwiJjphZnRlclwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogZGFuZ2VyQ29sb3JcbiAgICB9XG4gIH0sXG4gIHVuZGVybGluZVN1Y2Nlc3M6IHtcbiAgICBcIiY6YWZ0ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHN1Y2Nlc3NDb2xvclxuICAgIH1cbiAgfSxcbiAgd2hpdGVVbmRlcmxpbmU6IHtcbiAgICBcIiY6aG92ZXI6bm90KCRkaXNhYmxlZCk6YmVmb3JlLCY6YmVmb3JlXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBcIiNGRkZGRkZcIlxuICAgIH0sXG4gICAgXCImOmFmdGVyXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBcIiNGRkZGRkZcIlxuICAgIH1cbiAgfSxcbiAgbGFiZWxSb290OiB7XG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgY29sb3I6IFwiI0FBQUFBQSAhaW1wb3J0YW50XCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgbGluZUhlaWdodDogXCIxLjQyODU3XCIsXG4gICAgdG9wOiBcIjEwcHhcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcInVuc2V0XCIsXG4gICAgXCImICsgJHVuZGVybGluZVwiOiB7XG4gICAgICBtYXJnaW5Ub3A6IFwiMHB4XCJcbiAgICB9XG4gIH0sXG4gIGxhYmVsUm9vdEVycm9yOiB7XG4gICAgY29sb3I6IGRhbmdlckNvbG9yICsgXCIgIWltcG9ydGFudFwiXG4gIH0sXG4gIGxhYmVsUm9vdFN1Y2Nlc3M6IHtcbiAgICBjb2xvcjogc3VjY2Vzc0NvbG9yICsgXCIgIWltcG9ydGFudFwiXG4gIH0sXG4gIGZvcm1Db250cm9sOiB7XG4gICAgbWFyZ2luOiBcIjAgMCAxN3B4IDBcIixcbiAgICBwYWRkaW5nVG9wOiBcIjI3cHhcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiJiBzdmcsJiAuZmFiLCYgLmZhciwmIC5mYWwsJiAuZmFzLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgIGNvbG9yOiBcIiM0OTUwNTdcIlxuICAgIH1cbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBjb2xvcjogXCIjNDk1MDU3XCIsXG4gICAgaGVpZ2h0OiBcInVuc2V0XCIsXG4gICAgXCImLCY6OnBsYWNlaG9sZGVyXCI6IHtcbiAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgIGZvbnRGYW1pbHk6ICdcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxuICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1N1wiLFxuICAgICAgb3BhY2l0eTogXCIxXCJcbiAgICB9LFxuICAgIFwiJjo6cGxhY2Vob2xkZXJcIjoge1xuICAgICAgY29sb3I6IFwiI0FBQUFBQVwiXG4gICAgfVxuICB9LFxuICB3aGl0ZUlucHV0OiB7XG4gICAgXCImLCY6OnBsYWNlaG9sZGVyXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIG9wYWNpdHk6IFwiMVwiXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21JbnB1dFN0eWxlO1xuIiwiaW1wb3J0IHtcbiAgcHJpbWFyeUNvbG9yLFxuICB3YXJuaW5nQ29sb3IsXG4gIGRhbmdlckNvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIGluZm9Db2xvcixcbiAgcm9zZUNvbG9yLFxuICBncmF5Q29sb3IsXG4gIHRpdGxlXG59IGZyb20gXCIuLi8uLi8vbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuXG5jb25zdCBpbmZvU3R5bGUgPSB7XG4gIGluZm9BcmVhOiB7XG4gICAgbWF4V2lkdGg6IFwiMzYwcHhcIixcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgcGFkZGluZzogXCIwcHhcIlxuICB9LFxuICBpY29uV3JhcHBlcjoge1xuICAgIGZsb2F0OiBcImxlZnRcIixcbiAgICBtYXJnaW5Ub3A6IFwiMjRweFwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjEwcHhcIlxuICB9LFxuICBwcmltYXJ5OiB7XG4gICAgY29sb3I6IHByaW1hcnlDb2xvclxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgY29sb3I6IHdhcm5pbmdDb2xvclxuICB9LFxuICBkYW5nZXI6IHtcbiAgICBjb2xvcjogZGFuZ2VyQ29sb3JcbiAgfSxcbiAgc3VjY2Vzczoge1xuICAgIGNvbG9yOiBzdWNjZXNzQ29sb3JcbiAgfSxcbiAgaW5mbzoge1xuICAgIGNvbG9yOiBpbmZvQ29sb3JcbiAgfSxcbiAgcm9zZToge1xuICAgIGNvbG9yOiByb3NlQ29sb3JcbiAgfSxcbiAgZ3JheToge1xuICAgIGNvbG9yOiBncmF5Q29sb3JcbiAgfSxcbiAgaWNvbjoge1xuICAgIHdpZHRoOiBcIjM2cHhcIixcbiAgICBoZWlnaHQ6IFwiMzZweFwiXG4gIH0sXG4gIGRlc2NyaXB0aW9uV3JhcHBlcjoge1xuICAgIGNvbG9yOiBncmF5Q29sb3IsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgfSxcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgY29sb3I6IGdyYXlDb2xvcixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBtYXJnaW5Ub3A6IFwiMHB4XCIsXG4gICAgZm9udFNpemU6IFwiMTRweFwiXG4gIH0sXG4gIGljb25XcmFwcGVyVmVydGljYWw6IHtcbiAgICBmbG9hdDogXCJub25lXCJcbiAgfSxcbiAgaWNvblZlcnRpY2FsOiB7XG4gICAgd2lkdGg6IFwiNjFweFwiLFxuICAgIGhlaWdodDogXCI2MXB4XCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5mb1N0eWxlO1xuIiwiY29uc3QgaW1hZ2VzU3R5bGVzID0ge1xuICBpbWdGbHVpZDoge1xuICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiYXV0b1wiXG4gIH0sXG4gIGltZ1JvdW5kZWQ6IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiNnB4ICFpbXBvcnRhbnRcIlxuICB9LFxuICBpbWdSb3VuZGVkQ2lyY2xlOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJSAhaW1wb3J0YW50XCJcbiAgfSxcbiAgaW1nUmFpc2VkOiB7XG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDVweCAxNXB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjI0KSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiXG4gIH0sXG4gIGltZ0dhbGxlcnk6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjIuMTQycmVtXCJcbiAgfSxcbiAgaW1nQ2FyZFRvcDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcImNhbGMoLjI1cmVtIC0gMXB4KVwiLFxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcImNhbGMoLjI1cmVtIC0gMXB4KVwiXG4gIH0sXG4gIGltZ0NhcmRCb3R0b206IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogXCJjYWxjKC4yNXJlbSAtIDFweClcIixcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogXCJjYWxjKC4yNXJlbSAtIDFweClcIlxuICB9LFxuICBpbWdDYXJkOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJvcmRlclJhZGl1czogXCJjYWxjKC4yNXJlbSAtIDFweClcIlxuICB9LFxuICBpbWdDYXJkT3ZlcmxheToge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICByaWdodDogXCIwXCIsXG4gICAgYm90dG9tOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgICBwYWRkaW5nOiBcIjEuMjVyZW1cIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbWFnZXNTdHlsZXM7XG4iLCJpbXBvcnQgeyBjYXJkVGl0bGUsIHRpdGxlLCBzbWFsbFRpdGxlIH0gZnJvbSBcIi4uLy4uLy4uL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcbmltcG9ydCBpbWFnZXNTdHlsZSBmcm9tIFwiLi4vLi4vaW1hZ2VzU3R5bGVzLmpzXCI7XG5cbmNvbnN0IHBhY2thZ2VTdHlsZSA9IHtcbiAgc2VjdGlvbjoge1xuICAgIHBhZGRpbmc6IFwiMTBweCAwXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgLi4udGl0bGUsXG4gICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcbiAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXG4gICAgbWluSGVpZ2h0OiBcIjEwcHhcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH0sXG4gIC4uLmltYWdlc1N0eWxlLFxuICBpdGVtR3JpZDoge1xuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICBjb2xvcjogXCJpbmhlcml0XCJcbiAgfSxcbiAgY2FyZFRpdGxlOiB7XG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH0sXG4gIHNtYWxsVGl0bGU6IHtcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIlxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiXG4gIH0sXG4gIGp1c3RpZnlDZW50ZXI6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXIgIWltcG9ydGFudFwiXG4gIH0sXG4gIHNvY2lhbHM6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgIGxlZnQ6IFwiMFwiLFxuICAgIHRvcDogXCIwXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEwcHhcIixcbiAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH0sXG4gIG1hcmdpbjU6IHtcbiAgICBtYXJnaW46IFwiNXB4XCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFja2FnZVN0eWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmQuanNcIjtcbmltcG9ydCBDYXJkQm9keSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkQm9keS5qc1wiO1xuaW1wb3J0IENhcmRGb290ZXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZEZvb3Rlci5qc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvbGFuZGluZ1BhZ2VTZWN0aW9ucy9wYWNrYWdlU3R5bGUuanNcIjtcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2VTZWN0aW9uKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGltYWdlQ2xhc3NlcyA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3Nlcy5pbWdSYWlzZWQsXG4gICAgY2xhc3Nlcy5pbWdSb3VuZGVkQ2lyY2xlLFxuICAgIGNsYXNzZXMuaW1nRmx1aWRcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pk5vZGUuanMgbW9kdWxlcyBJIGhhdmUgYXV0aG9yZWQ6PC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MjR9IHNtPXsyNH0gbWQ9ezEyfT5cbiAgICAgICAgICAgIDxDYXJkIHBsYWluPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezI0fSBzbT17MjR9IG1kPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1HcmlkfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy9zcG9ydHNkYXRhdmVyc2Utbm9kZS5wbmdgfSBhbHQ9XCJzcG9ydHNkYXRhdmVyc2Utbm9kZS1qc1wiIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFRpdGxlfT5cbiAgICAgICAgICAgICAgICBzcG9ydHNkYXRhdmVyc2VcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtjbGFzc2VzLnNtYWxsVGl0bGV9PkFsbCBjb2xsZWdpYXRlIGFuZCA2IFByb2Zlc3Npb25hbCBzcG9ydHM8L3NtYWxsPlxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICBTdXBwb3J0IGZvciB0aGUgZm9sbG93aW5nIHR5cGVzIG9mIGRhdGEgZnJvbSBFU1BOJ3MgZW5kcG9pbnRzOiBwbGF5LWJ5LXBsYXkgKGluY2x1ZGluZyBzaG90IGxvY2F0aW9uIGRhdGEgd2hlbiBhdmFpbGFibGUpLCBzY29yZXMsIHNjaGVkdWxlLCBzdGFuZGluZ3MsIHJhbmtpbmdzIChub3QgYXZhaWxhYmxlIGZvciBwcm9mZXNzaW9uYWwgc3BvcnRzKVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBSZWNydWl0aW5nIGRhdGEgZnJvbSAyNDdTcG9ydHMgYXZhaWxhYmxlIGZvcjogbWVuJ3MgY29sbGVnZSBiYXNrZXRiYWxsLCBjb2xsZWdlIGZvb3RiYWxsLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUaGUgZm9sbG93aW5nIHNwb3J0cyBhcmUgYXZhaWxhYmxlIGZyb20gRVNQTjogQ29sbGVnZSBCYXNrZXRiYWxsLCBXb21lbidzIENvbGxlZ2UgQmFza2V0YmFsbCwgQ29sbGVnZSBGb290YmFsbCwgV05CQSwgTkJBLCBORkwsIGFuZCBOSEwuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEFsbCB0ZWFtIHNwb3J0cyBvbiB0aGUgTkNBQSB3ZWJzaXRlOiAnZm9vdGJhbGwnLCAnYmFza2V0YmFsbC1tZW4nLCAnYmFza2V0YmFsbC13b21lbicsICdzb2NjZXItbWVuJywgJ3NvY2Nlci13b21lbicsICdmaWVsZGhvY2tleScsICd2b2xsZXliYWxsLXdvbWVuJywgXG4gICAgICAgICAgICAgICAgJ2ljZWhvY2tleS1tZW4nLCAnaWNlaG9ja2V5LXdvbWVuJywgJ2Jhc2ViYWxsJywnYmVhY2gtdm9sbGV5YmFsbCcsICdsYWNyb3NzZS1tZW4nLCAnbGFjcm9zc2Utd29tZW4nLCAndm9sbGV5YmFsbC1tZW4nXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+UiBwYWNrYWdlcyBJIGhhdmUgYXV0aG9yZWQ6PC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPENhcmQgcGxhaW4+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtR3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvY2Zic2NyYXBSLWxvZ28ucG5nYH0gYWx0PVwiY2Zic2NyYXBSXCIgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgIGNmYnNjcmFwUlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuc21hbGxUaXRsZX0+Q29sbGVnZSBGb290YmFsbCAtIFI8L3NtYWxsPlxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICBjZmJzY3JhcFIgaXMgYW4gUiBwYWNrYWdlIGZvciB3b3JraW5nIHdpdGggQ29sbGVnZSBGb290YmFsbCBkYXRhLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIEl0IGlzIGFuIFIgQVBJIHdyYXBwZXIgYXJvdW5kIGh0dHBzOi8vY29sbGVnZWZvb3RiYWxsZGF0YS5jb20vLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIEl0IHByb3ZpZGVzIHVzZXJzIHRoZSBjYXBhYmlsaXR5IHRvIHJldHJpZXZlIGRhdGEgZnJvbSB0aGUgQVBJIGFuZCBzdXBwbGVtZW50IHRoYXQgZGF0YSB3aXRoXG4gICAgICAgICAgICAgICAgRXhwZWN0ZWQgUG9pbnRzIEFkZGVkL1dpbiBQcm9iYWJpbGl0eSBhZGRlZCBtZXRyaWNzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPENhcmQgcGxhaW4+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtR3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMva2VucG9tUi1sb2dvLnBuZ2B9IGFsdD1cImtlbnBvbVJcIiAvPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRUaXRsZX0+XG4gICAgICAgICAgICAgICAga2VucG9tUlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuc21hbGxUaXRsZX0+TWVuJ3MgQ29sbGVnZSBCYXNrZXRiYWxsIC0gUjwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIGtlbnBvbVIgaXMgYW4gUiBwYWNrYWdlIGZvciB3b3JraW5nIHdpdGggbWVuJ3MgY29sbGVnZSBiYXNrZXRiYWxsIGRhdGEuXG4gICAgICAgICAgICAgICAgQSBzY3JhcGluZyBhbmQgYWdncmVnYXRpbmcgaW50ZXJmYWNlIGZvciBLZW4gUG9tZXJveeKAmXMgY29sbGVnZSBiYXNrZXRiYWxsIHN0YXRpc3RpY3Mgd2Vic2l0ZSwga2VucG9tLmNvbS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICBBbHNvIHByb3ZpZGVzIHN1cHBvcnQgZm9yIEVTUE7igJlzIG1lbidzIGNvbGxlZ2UgYmFza2V0YmFsbCBnYW1lIGRhdGEgYW5kIE5DQUEgTkVUIFJhbmtpbmdzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPENhcmQgcGxhaW4+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtR3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvd2Vob29wLWxvZ28ucG5nYH0gYWx0PVwid2Vob29wXCIgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFRpdGxlfT5cbiAgICAgICAgICAgICAgICB3ZWhvb3BcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtjbGFzc2VzLnNtYWxsVGl0bGV9PldOQkEgYW5kIFdvbWVuJ3MgQ29sbGVnZSBCYXNrZXRiYWxsIC0gUjwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIHdlaG9vcCBpcyBhbiBSIHBhY2thZ2UgZm9yIHdvcmtpbmcgd2l0aCBXTkJBIGFuZCB3b21lbidzIGNvbGxlZ2UgYmFza2V0YmFsbCBkYXRhLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIFByb3ZpZGVzIHN1cHBvcnQgZm9yIEVTUE7igJlzIFdOQkEgYW5kIHdvbWVuJ3MgY29sbGVnZSBiYXNrZXRiYWxsIGdhbWUgZGF0YSBhbmQgTkNBQSBORVQgUmFua2luZ3MuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIHNlY29uZCByb3cgb2YgcGFja2FnZXMgKi99XG4gICAgICA8ZGl2PlxuICAgICAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fT5cbiAgICAgICAgICAgIDxDYXJkIHBsYWluPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs3fSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbUdyaWR9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaW1hZ2VzL2NmYnJlY3J1aXRSLWxvZ28ucG5nYH0gYWx0PVwiY2ZicmVjcnVpdFJcIiAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgIGNmYnJlY3J1aXRSXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5zbWFsbFRpdGxlfT5Db2xsZWdlIEZvb3RiYWxsIFJlY3J1aXRpbmcgLSBSPC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgY2ZicmVjcnVpdFIgaXMgYW4gUiBwYWNrYWdlIGZvciB3b3JraW5nIHdpdGggY29sbGVnZSBmb290YmFsbCByZWNydWl0aW5nIGRhdGEuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17NH0+XG4gICAgICAgICAgICA8Q2FyZCBwbGFpbj5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17N30gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1HcmlkfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy9jZmJzY3JhcFItZGF0YS1yZXBvLnBuZ2B9IGFsdD1cImNmYnNjcmFwUi1kYXRhXCIgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgIGNmYnNjcmFwUi1kYXRhXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5zbWFsbFRpdGxlfT5Db2xsZWdlIEZvb3RiYWxsIC0gRGF0YTwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIGNmYnNjcmFwUi1kYXRhIGlzIGEgcmVwb3NpdG9yeSBmb3Igd29ya2luZyB3aXRoIENGQiBkYXRhLiAyMDE0LTIwMjAgZGF0YSBpbmNsdWRlZCBpbiBjc3YsIHJkcywgYW5kIHBhcnF1ZXQgZm9ybWF0LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPENhcmQgcGxhaW4+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtR3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMva2VucG9tUi1kYXRhLXJlcG8ucG5nYH0gYWx0PVwia2VucG9tUi1kYXRhXCIgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgIGtlbnBvbVItZGF0YVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuc21hbGxUaXRsZX0+TWVuJ3MgQ29sbGVnZSBCYXNrZXRiYWxsIC0gUjwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIGtlbnBvbVIgY29udGFpbnMgZGF0YSBmb3IgbW9zdCB0ZWFtcywgcGxheWVycyBhbmQgY29hY2hlcyBmcm9tIDIwMDItMjAyMC4gQWxsIGRhdGEgcHJvdmlkZWQgaW4gY3N2IGZvcm1hdC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbmltcG9ydCBDaGF0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiO1xuaW1wb3J0IFZlcmlmaWVkVXNlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlclwiO1xuaW1wb3J0IEZpbmdlcnByaW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmluZ2VycHJpbnRcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc1wiO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzXCI7XG5pbXBvcnQgSW5mb0FyZWEgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0luZm9BcmVhL0luZm9BcmVhLmpzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RTZWN0aW9uKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICA8R3JpZENvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezh9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlRhbGsgRGF0YSB0byBNZTwvaDI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBJIGFtIGFsd2F5cyBsb29raW5nIHRvIGFkZCBtb3JlIGRldmVsb3BlcnMgdG8gdGhlIFNwb3J0c0RhdGF2ZXJzZSBkZXZlbG9wZXIgZ3JvdXAgd2hvIHNoYXJlIGNvbW1vbiBjYXVzZVxuICAgICAgICAgICAgd2l0aCB0aGUgYWltIHRvIG1ha2UgdGhlIHNwb3J0cyBkYXRhIGluZHVzdHJ5IG1vcmUgZGl2ZXJzZSBhbmQgaW5jbHVzaXZlLiBcbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgPEdyaWRDb250YWluZXIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs4fT5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIFRoZSBTcG9ydHNEYXRhdmVyc2UgaXMgYSBjb25jZXB0IEkgaGF2ZSBiZWVuIHdvcmtpbmcgb24gd2l0aCBhIGhhbmRmdWwgb2Ygb3RoZXIgcGVvcGxlIHRvIGNyZWF0ZSBhbmQgZGV2ZWxvcCBwYWNrYWdlcyBpbiBQeXRob24sIFIgYW5kIE5vZGUuanMuXG4gICAgICAgICAgICBBbW9uZyB0aGUgZ29hbHMgb2YgdGhlIFNwb3J0c0RhdGF2ZXJzZSBpcyB0byBmbGF0dGVuIHRoZSBsZWFybmluZyBjdXJ2ZSB0aGUgYXZlcmFnZSB1c2VyIGhhcyB0byBnbyB0aHJvdWdoIHRvIGdldCBhY2Nlc3MgdG8gdGhlIGhpZ2hlc3QgcXVhbGl0eSBvcGVuLXNvdXJjZSBkYXRhIGFuZCBhbmFseXRpY3NcbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgey8qIDxkaXY+XG4gICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPEluZm9BcmVhXG4gICAgICAgICAgICAgIHRpdGxlPVwiRnJlZSBDaGF0XCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEaXZpZGUgZGV0YWlscyBhYm91dCB5b3VyIHByb2R1Y3Qgb3IgYWdlbmN5IHdvcmsgaW50byBwYXJ0cy4gV3JpdGUgYSBmZXcgbGluZXMgYWJvdXQgZWFjaCBvbmUuIEEgcGFyYWdyYXBoIGRlc2NyaWJpbmcgYSBmZWF0dXJlIHdpbGwgYmUgZW5vdWdoLlwiXG4gICAgICAgICAgICAgIGljb249e0NoYXR9XG4gICAgICAgICAgICAgIGljb25Db2xvcj1cImluZm9cIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPEluZm9BcmVhXG4gICAgICAgICAgICAgIHRpdGxlPVwiVmVyaWZpZWQgVXNlcnNcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpdmlkZSBkZXRhaWxzIGFib3V0IHlvdXIgcHJvZHVjdCBvciBhZ2VuY3kgd29yayBpbnRvIHBhcnRzLiBXcml0ZSBhIGZldyBsaW5lcyBhYm91dCBlYWNoIG9uZS4gQSBwYXJhZ3JhcGggZGVzY3JpYmluZyBhIGZlYXR1cmUgd2lsbCBiZSBlbm91Z2guXCJcbiAgICAgICAgICAgICAgaWNvbj17VmVyaWZpZWRVc2VyfVxuICAgICAgICAgICAgICBpY29uQ29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgdmVydGljYWxcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fT5cbiAgICAgICAgICAgIDxJbmZvQXJlYVxuICAgICAgICAgICAgICB0aXRsZT1cIkZpbmdlcnByaW50XCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEaXZpZGUgZGV0YWlscyBhYm91dCB5b3VyIHByb2R1Y3Qgb3IgYWdlbmN5IHdvcmsgaW50byBwYXJ0cy4gV3JpdGUgYSBmZXcgbGluZXMgYWJvdXQgZWFjaCBvbmUuIEEgcGFyYWdyYXBoIGRlc2NyaWJpbmcgYSBmZWF0dXJlIHdpbGwgYmUgZW5vdWdoLlwiXG4gICAgICAgICAgICAgIGljb249e0ZpbmdlcnByaW50fVxuICAgICAgICAgICAgICBpY29uQ29sb3I9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtTZWN0aW9uKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICA8R3JpZENvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxHcmlkSXRlbSBjcz17MTJ9IHNtPXsxMn0gbWQ9ezh9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pldvcmsgd2l0aCB1czwvaDI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBBcmUgeW91IGludGVyZXN0ZWQgaW4gd29ya2luZyB3aXRoIHNwb3J0cyBkYXRhLCBkZXZlbG9waW5nIG9wZW4tc291cmNlIHBhY2thZ2VzXG4gICAgICAgICAgICBhbmQgaGVscGluZyB0ZWFjaCBvdGhlcnMgdG8gZG8gdGhlIHNhbWU/IE91ciBncm91cCBpcyBkZWRpY2F0ZWQgdG8gdGhlIGNhdXNlIG9mXG4gICAgICAgICAgICB0cnlpbmcgdG8gaW5jbHVkZSBwZW9wbGUgZnJvbSBtb3JlIGRpdmVyc2UgYmFja2dyb3VuZHMgYW5kIHVuZGVycmVwcmVzZW50ZWRcbiAgICAgICAgICAgIGdyb3VwcyBpbiBzcG9ydHMuXG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIEFkZGl0aW9uYWxseSwgd2UgYXJlIG1ha2luZyB0aGUgcHVibGljbHkgYXZhaWxhYmxlIHNwb3J0c1xuICAgICAgICAgICAgZGF0YSBtdWNoIG1vcmUgYWNjZXNzaWJsZSB0byB0aGUgY29tbW9uIHBlcnNvbi4gVGhlIGRlc2lyZWQgZ29hbCBpcyB0byBjcmVhdGVcbiAgICAgICAgICAgIGEgc3VwcG9ydGl2ZSBjb21tdW5pdHkgdGhhdCB3aWxsIHByb3ZpZGUgZ3VpZGFuY2UgYW5kIG1lbnRvciB0aG9zZSB3aG8gd2FudCB0b1xuICAgICAgICAgICAgYmUgYSBwYXJ0IG9mIHRoZSBzb2x1dGlvbi4gRHJvcCBtZSBhIGJyaWVmIG1lc3NhZ2UgYmVsb3cgc28gdGhhdCBJIGNhbiByZWFjaCBvdXQgdG8geW91IVxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XG4gICAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJZb3VyIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxuICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiWW91ciBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICA8Q3VzdG9tSW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJZb3VyIE1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRBcmVhXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICByb3dzOiA1XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17NH0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRDZW50ZXJ9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCI+U2VuZCBNZXNzYWdlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5J1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcclxuaW1wb3J0IFBhcmFsbGF4IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9QYXJhbGxheC9QYXJhbGxheC5qc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBOQU1FLCBOQU1FX0FORF9ET01BSU4gfSBmcm9tICcuLi9zcmMvdHlwZXMvY29uc3RhbnRzJ1xyXG5cclxuLy8gU2VjdGlvbnMgZm9yIHRoaXMgcGFnZVxyXG5pbXBvcnQgUHJvZHVjdFNlY3Rpb24gZnJvbSBcIi4uL3BhZ2VzLXNlY3Rpb25zL0xhbmRpbmdQYWdlLVNlY3Rpb25zL1Byb2R1Y3RTZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBQYWNrYWdlU2VjdGlvbiBmcm9tIFwiLi4vcGFnZXMtc2VjdGlvbnMvTGFuZGluZ1BhZ2UtU2VjdGlvbnMvUGFja2FnZVNlY3Rpb24uanNcIjtcclxuaW1wb3J0IFdvcmtTZWN0aW9uIGZyb20gXCIuLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9Xb3JrU2VjdGlvbi5qc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IGxhcmdlID0gdXNlTWVkaWFRdWVyeSgnKG1pbi13aWR0aDo3MDBweCknKVxyXG4gIGNvbnN0IHsgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT57TkFNRX06IEJ1aWxkaW5nIHRoZSBTcG9ydHNEYXRhdmVyc2U8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgY29udGVudD17YCR7TkFNRX0gaXMgdGhlIHBlcnNvbmFsIHBhZ2Ugb2YgU2FpZW0gR2lsYW5pLCBnaXZpbmcgdXBkYXRlcyBvbiB0aGUgU3BvcnRzRGF0YXZlcnNlLmB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ3N9PlxyXG4gICAgICAgICAgICA8Qm94IHA9ezV9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9e2xhcmdlID8gJ2gxJyA6ICdoNCd9PntOQU1FX0FORF9ET01BSU59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZEhlYWRpbmd9IHZhcmlhbnQ9e2xhcmdlID8gJ2gzJyA6ICdoNid9PlxyXG4gICAgICAgICAgICAgIEJ1aWxkaW5nIHRoZSBTcG9ydHNEYXRhdmVyc2UuXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm1haW4sIHN0eWxlcy5tYWluUmFpc2VkKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nc30+XHJcbiAgICAgICAgICA8UGFja2FnZVNlY3Rpb24gLz5cclxuICAgICAgICAgIDxQcm9kdWN0U2VjdGlvbiAvPlxyXG4gICAgICAgICAgPFdvcmtTZWN0aW9uIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2NhcmRTdHlsZS5qc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIHBsYWluLCBjYXJvdXNlbCwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNhcmRDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuY2FyZF06IHRydWUsXG4gICAgW2NsYXNzZXMuY2FyZFBsYWluXTogcGxhaW4sXG4gICAgW2NsYXNzZXMuY2FyZENhcm91c2VsXTogY2Fyb3VzZWwsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkQ2xhc3Nlc30gey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5DYXJkLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXG4gIGNhcm91c2VsOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvY2FyZEJvZHlTdHlsZS5qc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRCb2R5KHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2FyZEJvZHlDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuY2FyZEJvZHldOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEJvZHlDbGFzc2VzfSB7Li4ucmVzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkNhcmRCb2R5LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9jYXJkRm9vdGVyU3R5bGUuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkRm9vdGVyKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2FyZEZvb3RlckNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5jYXJkRm9vdGVyXTogdHJ1ZSxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWRcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRGb290ZXJDbGFzc2VzfSB7Li4ucmVzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkNhcmRGb290ZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcblxuaW1wb3J0IGJ1dHRvblN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9idXR0b25TdHlsZS5qc1wiO1xuXG5jb25zdCBtYWtlQ29tcG9uZW50U3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xuICAuLi5idXR0b25TdHlsZVxufSkpO1xuXG5jb25zdCBSZWd1bGFyQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgY29sb3IsXG4gICAgcm91bmQsXG4gICAgY2hpbGRyZW4sXG4gICAgZnVsbFdpZHRoLFxuICAgIGRpc2FibGVkLFxuICAgIHNpbXBsZSxcbiAgICBzaXplLFxuICAgIGJsb2NrLFxuICAgIGxpbmssXG4gICAganVzdEljb24sXG4gICAgY2xhc3NOYW1lLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBtYWtlQ29tcG9uZW50U3R5bGVzKCk7XG5cbiAgY29uc3QgYnRuQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmJ1dHRvbl06IHRydWUsXG4gICAgW2NsYXNzZXNbc2l6ZV1dOiBzaXplLFxuICAgIFtjbGFzc2VzW2NvbG9yXV06IGNvbG9yLFxuICAgIFtjbGFzc2VzLnJvdW5kXTogcm91bmQsXG4gICAgW2NsYXNzZXMuZnVsbFdpZHRoXTogZnVsbFdpZHRoLFxuICAgIFtjbGFzc2VzLmRpc2FibGVkXTogZGlzYWJsZWQsXG4gICAgW2NsYXNzZXMuc2ltcGxlXTogc2ltcGxlLFxuICAgIFtjbGFzc2VzLmJsb2NrXTogYmxvY2ssXG4gICAgW2NsYXNzZXMubGlua106IGxpbmssXG4gICAgW2NsYXNzZXMuanVzdEljb25dOiBqdXN0SWNvbixcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxCdXR0b24gey4uLnJlc3R9IHJlZj17cmVmfSBjbGFzc2VzPXt7IHJvb3Q6IGJ0bkNsYXNzZXMgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9CdXR0b24+XG4gICk7XG59KTtcblxuUmVndWxhckJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwicHJpbWFyeVwiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gICAgXCJyb3NlXCIsXG4gICAgXCJ3aGl0ZVwiLFxuICAgIFwiZmFjZWJvb2tcIixcbiAgICBcInR3aXR0ZXJcIixcbiAgICBcImdvb2dsZVwiLFxuICAgIFwiZ2l0aHViXCIsXG4gICAgXCJ0cmFuc3BhcmVudFwiXG4gIF0pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJsZ1wiXSksXG4gIHNpbXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHJvdW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBibG9jazogUHJvcFR5cGVzLmJvb2wsXG4gIGxpbms6IFByb3BUeXBlcy5ib29sLFxuICBqdXN0SWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWd1bGFyQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvY3VzdG9tSW5wdXRTdHlsZS5qc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUlucHV0KHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qge1xuICAgIGZvcm1Db250cm9sUHJvcHMsXG4gICAgbGFiZWxUZXh0LFxuICAgIGlkLFxuICAgIGxhYmVsUHJvcHMsXG4gICAgaW5wdXRQcm9wcyxcbiAgICBlcnJvcixcbiAgICB3aGl0ZSxcbiAgICBpbnB1dFJvb3RDdXN0b21DbGFzc2VzLFxuICAgIHN1Y2Nlc3NcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGxhYmVsQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtcIiBcIiArIGNsYXNzZXMubGFiZWxSb290RXJyb3JdOiBlcnJvcixcbiAgICBbXCIgXCIgKyBjbGFzc2VzLmxhYmVsUm9vdFN1Y2Nlc3NdOiBzdWNjZXNzICYmICFlcnJvclxuICB9KTtcbiAgY29uc3QgdW5kZXJsaW5lQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLnVuZGVybGluZUVycm9yXTogZXJyb3IsXG4gICAgW2NsYXNzZXMudW5kZXJsaW5lU3VjY2Vzc106IHN1Y2Nlc3MgJiYgIWVycm9yLFxuICAgIFtjbGFzc2VzLnVuZGVybGluZV06IHRydWUsXG4gICAgW2NsYXNzZXMud2hpdGVVbmRlcmxpbmVdOiB3aGl0ZVxuICB9KTtcbiAgY29uc3QgbWFyZ2luVG9wID0gY2xhc3NOYW1lcyh7XG4gICAgW2lucHV0Um9vdEN1c3RvbUNsYXNzZXNdOiBpbnB1dFJvb3RDdXN0b21DbGFzc2VzICE9PSB1bmRlZmluZWRcbiAgfSk7XG4gIGNvbnN0IGlucHV0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmlucHV0XTogdHJ1ZSxcbiAgICBbY2xhc3Nlcy53aGl0ZUlucHV0XTogd2hpdGVcbiAgfSk7XG4gIHZhciBmb3JtQ29udHJvbENsYXNzZXM7XG4gIGlmIChmb3JtQ29udHJvbFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICBmb3JtQ29udHJvbENsYXNzZXMgPSBjbGFzc05hbWVzKFxuICAgICAgZm9ybUNvbnRyb2xQcm9wcy5jbGFzc05hbWUsXG4gICAgICBjbGFzc2VzLmZvcm1Db250cm9sXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBmb3JtQ29udHJvbENsYXNzZXMgPSBjbGFzc2VzLmZvcm1Db250cm9sO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sIHsuLi5mb3JtQ29udHJvbFByb3BzfSBjbGFzc05hbWU9e2Zvcm1Db250cm9sQ2xhc3Nlc30+XG4gICAgICB7bGFiZWxUZXh0ICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgIDxJbnB1dExhYmVsXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsUm9vdCArIFwiIFwiICsgbGFiZWxDbGFzc2VzfVxuICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsVGV4dH1cbiAgICAgICAgPC9JbnB1dExhYmVsPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8SW5wdXRcbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIGlucHV0OiBpbnB1dENsYXNzZXMsXG4gICAgICAgICAgcm9vdDogbWFyZ2luVG9wLFxuICAgICAgICAgIGRpc2FibGVkOiBjbGFzc2VzLmRpc2FibGVkLFxuICAgICAgICAgIHVuZGVybGluZTogdW5kZXJsaW5lQ2xhc3Nlc1xuICAgICAgICB9fVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICA8L0Zvcm1Db250cm9sPlxuICApO1xufVxuXG5DdXN0b21JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmb3JtQ29udHJvbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpbnB1dFJvb3RDdXN0b21DbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHN1Y2Nlc3M6IFByb3BUeXBlcy5ib29sLFxuICB3aGl0ZTogUHJvcFR5cGVzLmJvb2xcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyOiBGQyA9ICh7fSk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mb290ZXJ9PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBkaXNwbGF5PVwiaW5saW5lXCIgY2xhc3NOYW1lPXtzdHlsZVsnZm9vdGVyLWNvbnRlbnQnXX0+XHJcbiAgICAgICAgQ29weXJpZ2h0IMKpIDIwMjF7JyAnfVxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmdpdGh1Yi5jb20vc2FpZW1naWxhbmlcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICBTYWllbSBHaWxhbmlcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBncmlkOiB7XG4gICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCIsXG4gICAgbWFyZ2luTGVmdDogXCIwcHhcIixcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH1cbn07XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZENvbnRhaW5lcihwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIHsuLi5yZXN0fSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZCArIFwiIFwiICsgY2xhc3NOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cbkdyaWRDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCJcbn07XG5cbkdyaWRDb250YWluZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBncmlkOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgbWluSGVpZ2h0OiBcIjFweFwiLFxuICAgIHBhZGRpbmdSaWdodDogXCIxNXB4XCIsXG4gICAgcGFkZGluZ0xlZnQ6IFwiMTVweFwiLFxuICAgIGZsZXhCYXNpczogXCJhdXRvXCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH1cbn07XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZEl0ZW0ocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGl0ZW0gey4uLnJlc3R9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkICsgXCIgXCIgKyBjbGFzc05hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR3JpZD5cbiAgKTtcbn1cblxuR3JpZEl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCJcbn07XG5cbkdyaWRJdGVtLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2luZm9TdHlsZS5qc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm9BcmVhKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGljb25Db2xvciwgdmVydGljYWwgfSA9IHByb3BzO1xuICBjb25zdCBpY29uV3JhcHBlciA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmljb25XcmFwcGVyXTogdHJ1ZSxcbiAgICBbY2xhc3Nlc1tpY29uQ29sb3JdXTogdHJ1ZSxcbiAgICBbY2xhc3Nlcy5pY29uV3JhcHBlclZlcnRpY2FsXTogdmVydGljYWxcbiAgfSk7XG4gIGNvbnN0IGljb25DbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuaWNvbl06IHRydWUsXG4gICAgW2NsYXNzZXMuaWNvblZlcnRpY2FsXTogdmVydGljYWxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0FyZWF9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2ljb25XcmFwcGVyfT5cbiAgICAgICAgPHByb3BzLmljb24gY2xhc3NOYW1lPXtpY29uQ2xhc3Nlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb25XcmFwcGVyfT5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3RpdGxlfTwvaDQ+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5JbmZvQXJlYS5kZWZhdWx0UHJvcHMgPSB7XG4gIGljb25Db2xvcjogXCJncmF5XCJcbn07XG5cbkluZm9BcmVhLnByb3BUeXBlcyA9IHtcbiAgaWNvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKS5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpY29uQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcImluZm9cIixcbiAgICBcInJvc2VcIixcbiAgICBcImdyYXlcIlxuICBdKSxcbiAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sXG59O1xuIiwiZXhwb3J0IGNvbnN0IE5BTUUgPSAnU0cnXHJcbmV4cG9ydCBjb25zdCBOQU1FX0FORF9ET01BSU4gPSAnU0cnXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3NhaWVtZ2lsYW5pLm1lJ1xyXG5leHBvcnQgY29uc3QgREVQTE9ZTUVOVFNfVVJMID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3Mvc2FpZW1naWxhbmkvc2FpZW0tYmxvZy9kZXBsb3ltZW50cydcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fMzE3aUtcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRpbmdzXCI6IFwiU2hhcmVkX2hlYWRpbmdzX19yM3k3MlwiLFxuXHRcInNlY29uZEhlYWRpbmdcIjogXCJTaGFyZWRfc2Vjb25kSGVhZGluZ19fZ3FBeE9cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GaW5nZXJwcmludFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmVyaWZpZWRVc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=