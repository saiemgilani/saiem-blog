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

/***/ "./assets/jss/nextjs-material-kit/pages/landingPageSections/nodePackageStyle.js":
/*!**************************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/landingPageSections/nodePackageStyle.js ***!
  \**************************************************************************************/
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
    textAlign: "left",
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

/***/ "./pages-sections/LandingPage-Sections/NodePackageSection.js":
/*!*******************************************************************!*\
  !*** ./pages-sections/LandingPage-Sections/NodePackageSection.js ***!
  \*******************************************************************/
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
/* harmony import */ var _assets_jss_nextjs_material_kit_pages_landingPageSections_nodePackageStyle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/jss/nextjs-material-kit/pages/landingPageSections/nodePackageStyle.js */ "./assets/jss/nextjs-material-kit/pages/landingPageSections/nodePackageStyle.js");

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\pages-sections\\LandingPage-Sections\\NodePackageSection.js";
 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_assets_jss_nextjs_material_kit_pages_landingPageSections_nodePackageStyle_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
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
          xs: 12,
          sm: 12,
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
            plain: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
              xs: 12,
              sm: 12,
              md: 6,
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
                children: "All collegiate and 6 Professional sports - Node.js"
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
                children: ["Support for the following types of data from ESPN's endpoints:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "play-by-play (including shot location data when available)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "scores"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "schedule"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "standings"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "rankings (not available for professional sports)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: ["Recruiting data from 247Sports available for:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "men's college basketball"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "college football"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 17
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: ["The following sports are available from ESPN:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "College Basketball"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Women's College Basketball"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "College Football"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "WNBA"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "NBA"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: " NFL"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "NHL"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 17
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: ["All team sports on the NCAA website:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'football'"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'basketball-men'"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'basketball-women'"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'soccer-men'"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'soccer-women'"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'fieldhockey'"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'volleyball-women'"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'icehockey-men'"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'icehockey-women'"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'baseball' "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'beach-volleyball'"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'lacrosse-men'"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'lacrosse-women'"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "'volleyball-men'"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 17
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          xs: 12,
          sm: 12,
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
            plain: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
              xs: 12,
              sm: 12,
              md: 6,
              className: classes.itemGrid,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: `small/introducing-cbb-npm.png`,
                alt: "cbb-npm-node-js"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["cbb-npm", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "All collegiate - Node.js"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  children: "Was almost immediately deprecated due to massively expanding coverage, misleading name, and turned into the sportsdataverse Node.js module"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

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
      children: "R packages I have authored:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
                lineNumber: 37,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["cfbscrapR", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "College Football - R"
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
                children: "cfbscrapR is an R package for working with College Football data."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "It is an R API wrapper around https://collegefootballdata.com/."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "It provides users the capability to retrieve data from the API and supplement that data with Expected Points Added/Win Probability added metrics."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
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
                lineNumber: 61,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["kenpomR", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "Men's College Basketball - R"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "kenpomR is an R package for working with men's college basketball data. A scraping and aggregating interface for Ken Pomeroy\u2019s college basketball statistics website, kenpom.com."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "Also provides support for ESPN\u2019s men's college basketball game data and NCAA NET Rankings."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
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
                lineNumber: 82,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["wehoop", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "WNBA and Women's College Basketball - R"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "wehoop is an R package for working with WNBA and women's college basketball data."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "Provides support for ESPN\u2019s WNBA and women's college basketball game data and NCAA NET Rankings."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
                lineNumber: 107,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["cfbrecruitR", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "College Football Recruiting - R"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "cfbrecruitR is an R package for working with college football recruiting data."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
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
                lineNumber: 124,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["cfbscrapR-data", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "College Football - Data"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "cfbscrapR-data is a repository for working with CFB data. 2014-2020 data included in csv, rds, and parquet format."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
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
                lineNumber: 141,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: ["kenpomR-data", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: classes.smallTitle,
                children: "Men's College Basketball - R"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: classes.description,
                children: "kenpomR contains data for most teams, players and coaches from 2002-2020. All data provided in csv format."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
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
/* harmony import */ var _pages_sections_LandingPage_Sections_NodePackageSection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages-sections/LandingPage-Sections/NodePackageSection.js */ "./pages-sections/LandingPage-Sections/NodePackageSection.js");
/* harmony import */ var _pages_sections_LandingPage_Sections_ProductSection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages-sections/LandingPage-Sections/ProductSection.js */ "./pages-sections/LandingPage-Sections/ProductSection.js");
/* harmony import */ var _pages_sections_LandingPage_Sections_PackageSection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages-sections/LandingPage-Sections/PackageSection.js */ "./pages-sections/LandingPage-Sections/PackageSection.js");
/* harmony import */ var _pages_sections_LandingPage_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages-sections/LandingPage-Sections/WorkSection.js */ "./pages-sections/LandingPage-Sections/WorkSection.js");


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
        lineNumber: 34,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: `${_src_types_constants__WEBPACK_IMPORTED_MODULE_9__["NAME"]} is the personal page of Saiem Gilani, giving updates on the SportsDataverse.`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
            lineNumber: 43,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
            className: _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.secondHeading,
            variant: large ? 'h3' : 'h6',
            children: "Building the SportsDataverse."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.main, _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainRaised),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headings,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_sections_LandingPage_Sections_NodePackageSection_js__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_sections_LandingPage_Sections_PackageSection_js__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_sections_LandingPage_Sections_ProductSection_js__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_sections_LandingPage_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Footer__WEBPACK_IMPORTED_MODULE_3__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2J1dHRvblN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2NhcmRCb2R5U3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvY2FyZEZvb3RlclN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2NhcmRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9jdXN0b21JbnB1dFN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2luZm9TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvaW1hZ2VzU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9sYW5kaW5nUGFnZVNlY3Rpb25zL25vZGVQYWNrYWdlU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL2xhbmRpbmdQYWdlU2VjdGlvbnMvcGFja2FnZVN0eWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzLXNlY3Rpb25zL0xhbmRpbmdQYWdlLVNlY3Rpb25zL05vZGVQYWNrYWdlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9QYWNrYWdlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9Qcm9kdWN0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9Xb3JrU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUlucHV0L0N1c3RvbUlucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5mb0FyZWEvSW5mb0FyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvRm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmluZ2VycHJpbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmVyaWZpZWRVc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImhleENvbG9yVG9SR0IiLCJoZXhDb2xvciIsImRldGVjdFNob3J0aGFuZCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJiIiwiaGV4X2FycmF5IiwiZXhlYyIsInBhcnNlSW50IiwiaGV4VG9SR0JBbHBoYSIsImFscGhhIiwicmdiIiwiZHJhd2VyV2lkdGgiLCJ0cmFuc2l0aW9uIiwiY29uYXRpbmVyRmx1aWQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiY29udGFpbmVyIiwibWF4V2lkdGgiLCJib3hTaGFkb3ciLCJjYXJkIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdEZvbnQiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJwcmltYXJ5Q29sb3IiLCJ3YXJuaW5nQ29sb3IiLCJkYW5nZXJDb2xvciIsInN1Y2Nlc3NDb2xvciIsImluZm9Db2xvciIsInJvc2VDb2xvciIsImdyYXlDb2xvciIsInByaW1hcnlCb3hTaGFkb3ciLCJpbmZvQm94U2hhZG93Iiwic3VjY2Vzc0JveFNoYWRvdyIsIndhcm5pbmdCb3hTaGFkb3ciLCJkYW5nZXJCb3hTaGFkb3ciLCJyb3NlQm94U2hhZG93Iiwid2FybmluZ0NhcmRIZWFkZXIiLCJzdWNjZXNzQ2FyZEhlYWRlciIsImRhbmdlckNhcmRIZWFkZXIiLCJpbmZvQ2FyZEhlYWRlciIsInByaW1hcnlDYXJkSGVhZGVyIiwicm9zZUNhcmRIZWFkZXIiLCJjYXJkQWN0aW9ucyIsInBhZGRpbmdUb3AiLCJib3JkZXJUb3AiLCJoZWlnaHQiLCJjYXJkSGVhZGVyIiwicGFkZGluZyIsImRlZmF1bHRCb3hTaGFkb3ciLCJib3JkZXIiLCJ0aXRsZSIsInRleHREZWNvcmF0aW9uIiwic21hbGxUaXRsZSIsIm1hcmdpblRvcCIsImNhcmRUaXRsZSIsImNhcmRMaW5rIiwiY2FyZFN1YnRpdGxlIiwibWFyZ2luQm90dG9tIiwiYnV0dG9uU3R5bGUiLCJidXR0b24iLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImxldHRlclNwYWNpbmciLCJ3aWxsQ2hhbmdlIiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSIsInZlcnRpY2FsQWxpZ24iLCJ0b3VjaEFjdGlvbiIsImN1cnNvciIsInRvcCIsInRyYW5zZm9ybSIsImxlZnQiLCJmdWxsV2lkdGgiLCJwcmltYXJ5IiwiaW5mbyIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZGFuZ2VyIiwicm9zZSIsIndoaXRlIiwidHdpdHRlciIsImZhY2Vib29rIiwiZ29vZ2xlIiwiZ2l0aHViIiwic2ltcGxlIiwidHJhbnNwYXJlbnQiLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwibGciLCJzbSIsInJvdW5kIiwiYmxvY2siLCJsaW5rIiwianVzdEljb24iLCJjYXJkQm9keVN0eWxlIiwiY2FyZEJvZHkiLCJmbGV4IiwiY2FyZEZvb3RlclN0eWxlIiwiY2FyZEZvb3RlciIsImFsaWduSXRlbXMiLCJjYXJkU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwid29yZFdyYXAiLCJjYXJkUGxhaW4iLCJjYXJkQ2Fyb3VzZWwiLCJvdmVyZmxvdyIsImN1c3RvbUlucHV0U3R5bGUiLCJib3JkZXJDb2xvciIsInVuZGVybGluZSIsImJvcmRlcldpZHRoIiwidW5kZXJsaW5lRXJyb3IiLCJ1bmRlcmxpbmVTdWNjZXNzIiwid2hpdGVVbmRlcmxpbmUiLCJsYWJlbFJvb3QiLCJsYWJlbFJvb3RFcnJvciIsImxhYmVsUm9vdFN1Y2Nlc3MiLCJmb3JtQ29udHJvbCIsImlucHV0Iiwid2hpdGVJbnB1dCIsImluZm9TdHlsZSIsImluZm9BcmVhIiwiaWNvbldyYXBwZXIiLCJmbG9hdCIsImdyYXkiLCJpY29uIiwiZGVzY3JpcHRpb25XcmFwcGVyIiwiZGVzY3JpcHRpb24iLCJpY29uV3JhcHBlclZlcnRpY2FsIiwiaWNvblZlcnRpY2FsIiwiaW1hZ2VzU3R5bGVzIiwiaW1nRmx1aWQiLCJpbWdSb3VuZGVkIiwiaW1nUm91bmRlZENpcmNsZSIsImltZ1JhaXNlZCIsImltZ0dhbGxlcnkiLCJpbWdDYXJkVG9wIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiaW1nQ2FyZEJvdHRvbSIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImltZ0NhcmQiLCJpbWdDYXJkT3ZlcmxheSIsInJpZ2h0IiwiYm90dG9tIiwicGFja2FnZVN0eWxlIiwic2VjdGlvbiIsImltYWdlc1N0eWxlIiwiaXRlbUdyaWQiLCJqdXN0aWZ5Q2VudGVyIiwianVzdGlmeUNvbnRlbnQiLCJzb2NpYWxzIiwibWFyZ2luNSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJQYWNrYWdlU2VjdGlvbiIsImNsYXNzZXMiLCJpbWFnZUNsYXNzZXMiLCJjbGFzc05hbWVzIiwiUHJvZHVjdFNlY3Rpb24iLCJXb3JrU2VjdGlvbiIsImNsYXNzTmFtZSIsInRleHRBcmVhIiwibXVsdGlsaW5lIiwicm93cyIsInRleHRDZW50ZXIiLCJMYW5kaW5nUGFnZSIsInByb3BzIiwibGFyZ2UiLCJ1c2VNZWRpYVF1ZXJ5IiwicmVzdCIsIk5BTUUiLCJoZWFkaW5ncyIsIk5BTUVfQU5EX0RPTUFJTiIsInNlY29uZEhlYWRpbmciLCJtYWluIiwibWFpblJhaXNlZCIsIkNhcmQiLCJjaGlsZHJlbiIsInBsYWluIiwiY2Fyb3VzZWwiLCJjYXJkQ2xhc3NlcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJub2RlIiwiQ2FyZEJvZHkiLCJjYXJkQm9keUNsYXNzZXMiLCJDYXJkRm9vdGVyIiwiY2FyZEZvb3RlckNsYXNzZXMiLCJtYWtlQ29tcG9uZW50U3R5bGVzIiwiUmVndWxhckJ1dHRvbiIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsInNpemUiLCJidG5DbGFzc2VzIiwicm9vdCIsIm9uZU9mIiwiQ3VzdG9tSW5wdXQiLCJmb3JtQ29udHJvbFByb3BzIiwibGFiZWxUZXh0IiwiaWQiLCJsYWJlbFByb3BzIiwiaW5wdXRQcm9wcyIsImVycm9yIiwiaW5wdXRSb290Q3VzdG9tQ2xhc3NlcyIsImxhYmVsQ2xhc3NlcyIsInVuZGVybGluZUNsYXNzZXMiLCJpbnB1dENsYXNzZXMiLCJmb3JtQ29udHJvbENsYXNzZXMiLCJvYmplY3QiLCJGb290ZXIiLCJzdHlsZSIsImZvb3RlciIsImdyaWQiLCJHcmlkQ29udGFpbmVyIiwiZGVmYXVsdFByb3BzIiwiZmxleEJhc2lzIiwiR3JpZEl0ZW0iLCJJbmZvQXJlYSIsImljb25Db2xvciIsInZlcnRpY2FsIiwiaWNvbkNsYXNzZXMiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwiQkFTRV9VUkwiLCJERVBMT1lNRU5UU19VUkwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkEsTUFBTUEsYUFBYSxHQUFHLFVBQVNDLFFBQVQsRUFBbUI7QUFDdkMsTUFBSUMs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REFBUyxDQUFDRyxJQUE3QixDQUFwQixFQUF3RHVDLFVBRjVDO0FBR25CckcsYUFBVyxFQUFFMkQsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQnlDLFVBSFg7QUFJbkJILFdBQVMsRUFBRXZDLGlEQUFTLENBQUNnQixLQUFWLENBQWdCLENBQ3pCLFNBRHlCLEVBRXpCLFNBRnlCLEVBR3pCLFFBSHlCLEVBSXpCLFNBSnlCLEVBS3pCLE1BTHlCLEVBTXpCLE1BTnlCLEVBT3pCLE1BUHlCLENBQWhCLENBSlE7QUFhbkJ3QixVQUFRLEVBQUV4QyxpREFBUyxDQUFDRTtBQWJELENBQXJCLEM7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTWYsSUFBSSxHQUFHLElBQWI7QUFDQSxNQUFNRSxlQUFlLEdBQUcsSUFBeEI7QUFDQSxNQUFNdUQsUUFBUSxHQUFHLHdCQUFqQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpRUFBeEIsQzs7Ozs7Ozs7Ozs7QUNIUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIlxuY29uc3QgaGV4Q29sb3JUb1JHQiA9IGZ1bmN0aW9uKGhleENvbG9yKSB7XG4gIGxldCBkZXRlY3RTaG9ydGhhbmQgPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pOyAvLyAjMDAwIHZzICMwMDAwMDBcbiAgaGV4Q29sb3IgPSBoZXhDb2xvci5yZXBsYWNlKGRldGVjdFNob3J0aGFuZCwgZnVuY3Rpb24obSwgciwgZywgYikge1xuICAgIHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XG4gIH0pO1xuXG4gIGNvbnN0IGhleF9hcnJheSA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXhDb2xvcik7IC8vICMwMDAwMDAgdG8gI2ZmZmZmZlxuICByZXR1cm4gaGV4X2FycmF5XG4gICAgPyB7XG4gICAgICAgIHI6IHBhcnNlSW50KGhleF9hcnJheVsxXSwgMTYpLCAvLyAwLTI1NVxuICAgICAgICBnOiBwYXJzZUludChoZXhfYXJyYXlbMl0sIDE2KSwgLy8gMC0yNTVcbiAgICAgICAgYjogcGFyc2VJbnQoaGV4X2FycmF5WzNdLCAxNikgLy8gMC0yNTVcbiAgICAgIH1cbiAgICA6IG51bGw7XG59O1xuXG5jb25zdCBoZXhUb1JHQkFscGhhID0gZnVuY3Rpb24oaGV4Q29sb3IsIGFscGhhKSB7XG4gIGxldCByZ2IgPSBoZXhDb2xvclRvUkdCKGhleENvbG9yKTtcbiAgcmV0dXJuIGByZ2JhKCR7cmdiLnJ9LCR7cmdiLmd9LCR7cmdiLmJ9LCR7YWxwaGF9KWA7XG59O1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI2MDtcblxuY29uc3QgdHJhbnNpdGlvbiA9IHtcbiAgdHJhbnNpdGlvbjogXCJhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKVwiXG59O1xuXG5jb25zdCBjb25hdGluZXJGbHVpZCA9IHtcbiAgcGFkZGluZ1JpZ2h0OiBcIjE1cHhcIixcbiAgcGFkZGluZ0xlZnQ6IFwiMTVweFwiLFxuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICB3aWR0aDogXCIxMDAlXCJcbn07XG5jb25zdCBjb250YWluZXIgPSB7XG4gIC4uLmNvbmF0aW5lckZsdWlkLFxuICBcIkBtZWRpYSAobWluLXdpZHRoOiA1NzZweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjU0MHB4XCJcbiAgfSxcbiAgXCJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpXCI6IHtcbiAgICBtYXhXaWR0aDogXCI3MjBweFwiXG4gIH0sXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KVwiOiB7XG4gICAgbWF4V2lkdGg6IFwiOTYwcHhcIlxuICB9LFxuICBcIkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpXCI6IHtcbiAgICBtYXhXaWR0aDogXCIxMTQwcHhcIlxuICB9XG59O1xuXG5jb25zdCBib3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzpcbiAgICBcIjAgMTBweCAzMHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC40MiksIDAgNHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMilcIlxufTtcblxuY29uc3QgY2FyZCA9IHtcbiAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBtYXJnaW46IFwiMjVweCAwXCIsXG4gIGJveFNoYWRvdzogXCIwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjg3KVwiLFxuICBiYWNrZ3JvdW5kOiBcIiNmZmZcIlxufTtcblxuY29uc3QgZGVmYXVsdEZvbnQgPSB7XG4gIGZvbnRGYW1pbHk6ICdcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxuICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICBsaW5lSGVpZ2h0OiBcIjEuNWVtXCJcbn07XG5cbmNvbnN0IHByaW1hcnlDb2xvciA9IFwiIzljMjdiMFwiO1xuY29uc3Qgd2FybmluZ0NvbG9yID0gXCIjZmY5ODAwXCI7XG5jb25zdCBkYW5nZXJDb2xvciA9IFwiI2Y0NDMzNlwiO1xuY29uc3Qgc3VjY2Vzc0NvbG9yID0gXCIjNGNhZjUwXCI7XG5jb25zdCBpbmZvQ29sb3IgPSBcIiMwMGFjYzFcIjtcbmNvbnN0IHJvc2VDb2xvciA9IFwiI2U5MWU2M1wiO1xuY29uc3QgZ3JheUNvbG9yID0gXCIjOTk5OTk5XCI7XG5cbmNvbnN0IHByaW1hcnlCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBwcmltYXJ5Q29sb3IsXG4gICAgMC4yOFxuICApfSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHByaW1hcnlDb2xvcixcbiAgICAwLjJcbiAgKX1gXG59O1xuY29uc3QgaW5mb0JveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIGluZm9Db2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgaW5mb0NvbG9yLFxuICAgIDAuMlxuICApfWBcbn07XG5jb25zdCBzdWNjZXNzQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDEycHggMjBweCAtMTBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgc3VjY2Vzc0NvbG9yLFxuICAgIDAuMjhcbiAgKX0sIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBzdWNjZXNzQ29sb3IsXG4gICAgMC4yXG4gICl9YFxufTtcbmNvbnN0IHdhcm5pbmdCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICB3YXJuaW5nQ29sb3IsXG4gICAgMC4yOFxuICApfSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHdhcm5pbmdDb2xvcixcbiAgICAwLjJcbiAgKX1gXG59O1xuY29uc3QgZGFuZ2VyQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDEycHggMjBweCAtMTBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgZGFuZ2VyQ29sb3IsXG4gICAgMC4yOFxuICApfSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgIGRhbmdlckNvbG9yLFxuICAgIDAuMlxuICApfWBcbn07XG5jb25zdCByb3NlQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDRweCAyMHB4IDBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgXCIjMDAwXCIsXG4gICAgMC4xNFxuICApfSwgMCA3cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShyb3NlQ29sb3IsIDAuNCl9YFxufTtcblxuY29uc3Qgd2FybmluZ0NhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNmZmE3MjYsICNmYjhjMDApXCIsXG4gIC4uLndhcm5pbmdCb3hTaGFkb3dcbn07XG5jb25zdCBzdWNjZXNzQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgIzY2YmI2YSwgIzQzYTA0NylcIixcbiAgLi4uc3VjY2Vzc0JveFNoYWRvd1xufTtcbmNvbnN0IGRhbmdlckNhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNlZjUzNTAsICNlNTM5MzUpXCIsXG4gIC4uLmRhbmdlckJveFNoYWRvd1xufTtcbmNvbnN0IGluZm9DYXJkSGVhZGVyID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMjZjNmRhLCAjMDBhY2MxKVwiLFxuICAuLi5pbmZvQm94U2hhZG93XG59O1xuY29uc3QgcHJpbWFyeUNhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNhYjQ3YmMsICM4ZTI0YWEpXCIsXG4gIC4uLnByaW1hcnlCb3hTaGFkb3dcbn07XG5jb25zdCByb3NlQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2VjNDA3YSwgI2Q4MWI2MClcIixcbiAgLi4ucm9zZUJveFNoYWRvd1xufTtcbmNvbnN0IGNhcmRBY3Rpb25zID0ge1xuICBtYXJnaW46IFwiMCAyMHB4IDEwcHhcIixcbiAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gIGJvcmRlclRvcDogXCIxcHggc29saWQgI2VlZWVlZVwiLFxuICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAuLi5kZWZhdWx0Rm9udFxufTtcblxuY29uc3QgY2FyZEhlYWRlciA9IHtcbiAgbWFyZ2luOiBcIi0zMHB4IDE1cHggMFwiLFxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gIHBhZGRpbmc6IFwiMTVweFwiXG59O1xuXG5jb25zdCBkZWZhdWx0Qm94U2hhZG93ID0ge1xuICBib3JkZXI6IFwiMFwiLFxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gIGJveFNoYWRvdzpcbiAgICBcIjAgMTBweCAyMHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC40MiksIDAgM3B4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMilcIixcbiAgcGFkZGluZzogXCIxMHB4IDBcIixcbiAgdHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgZWFzZSAwc1wiXG59O1xuXG5jb25zdCB0aXRsZSA9IHtcbiAgY29sb3I6IFwiIzNDNDg1OFwiLFxuICBtYXJnaW46IFwiMS43NXJlbSAwIDAuODc1cmVtXCIsXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgZm9udEZhbWlseTogYFwiUm9ib3RvIFNsYWJcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWZgXG59O1xuXG5jb25zdCBzbWFsbFRpdGxlID0ge1xuICAuLi50aXRsZSxcbiAgbWFyZ2luVG9wOiBcIi42MjVyZW1cIlxufTtcblxuY29uc3QgY2FyZFRpdGxlID0ge1xuICAuLi5zbWFsbFRpdGxlLFxuICBtYXJnaW5Ub3A6IFwiLjYyNXJlbVwiXG59O1xuXG5jb25zdCBjYXJkTGluayA9IHtcbiAgXCImICsgJGNhcmRMaW5rXCI6IHtcbiAgICBtYXJnaW5MZWZ0OiBcIjEuMjVyZW1cIlxuICB9XG59O1xuXG5jb25zdCBjYXJkU3VidGl0bGUgPSB7XG4gIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gIG1hcmdpblRvcDogXCItLjM3NXJlbVwiXG59O1xuXG5leHBvcnQge1xuICBoZXhUb1JHQkFscGhhLFxuICAvL3ZhcmlhYmxlc1xuICBkcmF3ZXJXaWR0aCxcbiAgdHJhbnNpdGlvbixcbiAgY29udGFpbmVyLFxuICBjb25hdGluZXJGbHVpZCxcbiAgYm94U2hhZG93LFxuICBjYXJkLFxuICBkZWZhdWx0Rm9udCxcbiAgcHJpbWFyeUNvbG9yLFxuICB3YXJuaW5nQ29sb3IsXG4gIGRhbmdlckNvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIGluZm9Db2xvcixcbiAgcm9zZUNvbG9yLFxuICBncmF5Q29sb3IsXG4gIHByaW1hcnlCb3hTaGFkb3csXG4gIGluZm9Cb3hTaGFkb3csXG4gIHN1Y2Nlc3NCb3hTaGFkb3csXG4gIHdhcm5pbmdCb3hTaGFkb3csXG4gIGRhbmdlckJveFNoYWRvdyxcbiAgcm9zZUJveFNoYWRvdyxcbiAgd2FybmluZ0NhcmRIZWFkZXIsXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxuICBkYW5nZXJDYXJkSGVhZGVyLFxuICBpbmZvQ2FyZEhlYWRlcixcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXG4gIHJvc2VDYXJkSGVhZGVyLFxuICBjYXJkQWN0aW9ucyxcbiAgY2FyZEhlYWRlcixcbiAgZGVmYXVsdEJveFNoYWRvdyxcbiAgdGl0bGUsXG4gIHNtYWxsVGl0bGUsXG4gIGNhcmRUaXRsZSxcbiAgY2FyZExpbmssXG4gIGNhcmRTdWJ0aXRsZVxufTtcbiIsImltcG9ydCB7XG4gIGhleFRvUkdCQWxwaGEsXG4gIGdyYXlDb2xvcixcbiAgcm9zZUNvbG9yLFxuICBwcmltYXJ5Q29sb3IsXG4gIGluZm9Db2xvcixcbiAgc3VjY2Vzc0NvbG9yLFxuICB3YXJuaW5nQ29sb3IsXG4gIGRhbmdlckNvbG9yXG59IGZyb20gXCIuLi8uLi9uZXh0anMtbWF0ZXJpYWwta2l0LmpzXCI7XG5cbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICBidXR0b246IHtcbiAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxuICAgIG1pbldpZHRoOiBcImF1dG9cIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYXlDb2xvcixcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMTUzLCAxNTMsIDE1MywgMC4xMilcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHBhZGRpbmc6IFwiMTJweCAzMHB4XCIsXG4gICAgbWFyZ2luOiBcIi4zMTI1cmVtIDFweFwiLFxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgbGV0dGVyU3BhY2luZzogXCIwXCIsXG4gICAgd2lsbENoYW5nZTogXCJib3gtc2hhZG93LCB0cmFuc2Zvcm1cIixcbiAgICB0cmFuc2l0aW9uOlxuICAgICAgXCJib3gtc2hhZG93IDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSksIGJhY2tncm91bmQtY29sb3IgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjQyODU3MTQzXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICB0b3VjaEFjdGlvbjogXCJtYW5pcHVsYXRpb25cIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JheUNvbG9yLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMilcIlxuICAgIH0sXG4gICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICB0b3A6IFwiMFwiLFxuICAgICAgZm9udFNpemU6IFwiMS4xcmVtXCIsXG4gICAgICBtYXJnaW5SaWdodDogXCI0cHhcIixcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJcbiAgICB9LFxuICAgIFwiJiBzdmdcIjoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICB0b3A6IFwiMFwiLFxuICAgICAgd2lkdGg6IFwiMThweFwiLFxuICAgICAgaGVpZ2h0OiBcIjE4cHhcIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxuICAgIH0sXG4gICAgXCImJGp1c3RJY29uXCI6IHtcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgbGVmdDogXCIwcHhcIixcbiAgICAgICAgdG9wOiBcIjBweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjQxcHhcIixcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBmdWxsV2lkdGg6IHtcbiAgICB3aWR0aDogXCIxMDAlXCJcbiAgfSxcbiAgcHJpbWFyeToge1xuICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yLFxuICAgIGJveFNoYWRvdzogYDAgMnB4IDJweCAwICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIHByaW1hcnlDb2xvcixcbiAgICAgIDAuMTRcbiAgICApfSwgMCAzcHggMXB4IC0ycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgMC4yXG4gICAgKX0sIDAgMXB4IDVweCAwICR7aGV4VG9SR0JBbHBoYShwcmltYXJ5Q29sb3IsIDAuMTIpfWAsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgICBib3hTaGFkb3c6IGAwIDE0cHggMjZweCAtMTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIHByaW1hcnlDb2xvcixcbiAgICAgICAgMC40MlxuICAgICAgKX0sIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIHByaW1hcnlDb2xvcixcbiAgICAgICAgMC4yXG4gICAgICApfWBcbiAgICB9XG4gIH0sXG4gIGluZm86IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvcixcbiAgICBib3hTaGFkb3c6IGAwIDJweCAycHggMCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBpbmZvQ29sb3IsXG4gICAgICAwLjE0XG4gICAgKX0sIDAgM3B4IDFweCAtMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIGluZm9Db2xvcixcbiAgICAgIDAuMlxuICAgICl9LCAwIDFweCA1cHggMCAke2hleFRvUkdCQWxwaGEoaW5mb0NvbG9yLCAwLjEyKX1gLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yLFxuICAgICAgYm94U2hhZG93OiBgMCAxNHB4IDI2cHggLTEycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgICBpbmZvQ29sb3IsXG4gICAgICAgIDAuNDJcbiAgICAgICl9LCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgICBpbmZvQ29sb3IsXG4gICAgICAgIDAuMlxuICAgICAgKX1gXG4gICAgfVxuICB9LFxuICBzdWNjZXNzOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgc3VjY2Vzc0NvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBzdWNjZXNzQ29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKHN1Y2Nlc3NDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgc3VjY2Vzc0NvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgc3VjY2Vzc0NvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YFxuICAgIH1cbiAgfSxcbiAgd2FybmluZzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yLFxuICAgIGJveFNoYWRvdzogYDAgMnB4IDJweCAwICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIHdhcm5pbmdDb2xvcixcbiAgICAgIDAuMTRcbiAgICApfSwgMCAzcHggMXB4IC0ycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgd2FybmluZ0NvbG9yLFxuICAgICAgMC4yXG4gICAgKX0sIDAgMXB4IDVweCAwICR7aGV4VG9SR0JBbHBoYSh3YXJuaW5nQ29sb3IsIDAuMTIpfWAsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3IsXG4gICAgICBib3hTaGFkb3c6IGAwIDE0cHggMjZweCAtMTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIHdhcm5pbmdDb2xvcixcbiAgICAgICAgMC40MlxuICAgICAgKX0sIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIHdhcm5pbmdDb2xvcixcbiAgICAgICAgMC4yXG4gICAgICApfWBcbiAgICB9XG4gIH0sXG4gIGRhbmdlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgZGFuZ2VyQ29sb3IsXG4gICAgICAwLjE0XG4gICAgKX0sIDAgM3B4IDFweCAtMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIGRhbmdlckNvbG9yLFxuICAgICAgMC4yXG4gICAgKX0sIDAgMXB4IDVweCAwICR7aGV4VG9SR0JBbHBoYShkYW5nZXJDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yLFxuICAgICAgYm94U2hhZG93OiBgMCAxNHB4IDI2cHggLTEycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgICBkYW5nZXJDb2xvcixcbiAgICAgICAgMC40MlxuICAgICAgKX0sIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIGRhbmdlckNvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YFxuICAgIH1cbiAgfSxcbiAgcm9zZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogcm9zZUNvbG9yLFxuICAgIGJveFNoYWRvdzogYDAgMnB4IDJweCAwICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIHByaW1hcnlDb2xvcixcbiAgICAgIDAuMTRcbiAgICApfSwgMCAzcHggMXB4IC0ycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgMC4yXG4gICAgKX0sIDAgMXB4IDVweCAwICR7aGV4VG9SR0JBbHBoYShwcmltYXJ5Q29sb3IsIDAuMTIpfWAsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3IsXG4gICAgICBib3hTaGFkb3c6IGAwIDE0cHggMjZweCAtMTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIHByaW1hcnlDb2xvcixcbiAgICAgICAgMC40MlxuICAgICAgKX0sIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIHByaW1hcnlDb2xvcixcbiAgICAgICAgMC4yXG4gICAgICApfWBcbiAgICB9XG4gIH0sXG4gIHdoaXRlOiB7XG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIGNvbG9yOiBncmF5Q29sb3JcbiAgICB9XG4gIH0sXG4gIHR3aXR0ZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzU1YWNlZVwiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoODUsIDE3MiwgMjM4LCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSg4NSwgMTcyLCAyMzgsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoODUsIDE3MiwgMjM4LCAwLjEyKVwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzLCY6dmlzaXRlZFwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzU1YWNlZVwiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoODUsIDE3MiwgMjM4LCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoODUsIDE3MiwgMjM4LCAwLjIpXCJcbiAgICB9XG4gIH0sXG4gIGZhY2Vib29rOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMzYjU5OThcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDU5LCA4OSwgMTUyLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSg1OSwgODksIDE1MiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSg1OSwgODksIDE1MiwgMC4xMilcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNiNTk5OFwiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoNTksIDg5LCAxNTIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSg1OSwgODksIDE1MiwgMC4yKVwiXG4gICAgfVxuICB9LFxuICBnb29nbGU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2RkNGIzOVwiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoMjIxLCA3NSwgNTcsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDIyMSwgNzUsIDU3LCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDIyMSwgNzUsIDU3LCAwLjEyKVwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZGQ0YjM5XCIsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSgyMjEsIDc1LCA1NywgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDIyMSwgNzUsIDU3LCAwLjIpXCJcbiAgICB9XG4gIH0sXG4gIGdpdGh1Yjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMzMzMzXCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSg1MSwgNTEsIDUxLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzMzMzNcIixcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDUxLCA1MSwgNTEsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSg1MSwgNTEsIDUxLCAwLjIpXCJcbiAgICB9XG4gIH0sXG4gIHNpbXBsZToge1xuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICB9LFxuICAgIFwiJiRwcmltYXJ5XCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IHByaW1hcnlDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJGluZm9cIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogaW5mb0NvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkc3VjY2Vzc1wiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiBzdWNjZXNzQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiR3YXJuaW5nXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IHdhcm5pbmdDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJHJvc2VcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogcm9zZUNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkZGFuZ2VyXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IGRhbmdlckNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkdHdpdHRlclwiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiBcIiM1NWFjZWVcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJGZhY2Vib29rXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IFwiIzNiNTk5OFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkZ29vZ2xlXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IFwiI2RkNGIzOVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkZ2l0aHViXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IFwiIzMzMzMzM1wiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB0cmFuc3BhcmVudDoge1xuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICB9XG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgb3BhY2l0eTogXCIwLjY1XCIsXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCJcbiAgfSxcbiAgbGc6IHtcbiAgICBwYWRkaW5nOiBcIjEuMTI1cmVtIDIuMjVyZW1cIixcbiAgICBmb250U2l6ZTogXCIwLjg3NXJlbVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS4zMzMzMzNcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4ycmVtXCJcbiAgfSxcbiAgc206IHtcbiAgICBwYWRkaW5nOiBcIjAuNDA2MjVyZW0gMS4yNXJlbVwiLFxuICAgIGZvbnRTaXplOiBcIjAuNjg3NXJlbVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuMnJlbVwiXG4gIH0sXG4gIHJvdW5kOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIlxuICB9LFxuICBibG9jazoge1xuICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiXG4gIH0sXG4gIGxpbms6IHtcbiAgICBcIiYsJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgY29sb3I6IFwiIzk5OTk5OVwiLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgIH1cbiAgfSxcbiAganVzdEljb246IHtcbiAgICBwYWRkaW5nTGVmdDogXCIxMnB4XCIsXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjEycHhcIixcbiAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgaGVpZ2h0OiBcIjQxcHhcIixcbiAgICBtaW5XaWR0aDogXCI0MXB4XCIsXG4gICAgd2lkdGg6IFwiNDFweFwiLFxuICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgc3ZnLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjBweFwiXG4gICAgfSxcbiAgICBcIiYkbGdcIjoge1xuICAgICAgaGVpZ2h0OiBcIjU3cHhcIixcbiAgICAgIG1pbldpZHRoOiBcIjU3cHhcIixcbiAgICAgIHdpZHRoOiBcIjU3cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgICBmb250U2l6ZTogXCIzMnB4XCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiXG4gICAgICB9LFxuICAgICAgXCImIHN2Z1wiOiB7XG4gICAgICAgIHdpZHRoOiBcIjMycHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjMycHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJHNtXCI6IHtcbiAgICAgIGhlaWdodDogXCIzMHB4XCIsXG4gICAgICBtaW5XaWR0aDogXCIzMHB4XCIsXG4gICAgICB3aWR0aDogXCIzMHB4XCIsXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcbiAgICAgICAgbGluZUhlaWdodDogXCIyOXB4XCJcbiAgICAgIH0sXG4gICAgICBcIiYgc3ZnXCI6IHtcbiAgICAgICAgd2lkdGg6IFwiMTdweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTdweFwiXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidXR0b25TdHlsZTtcbiIsImNvbnN0IGNhcmRCb2R5U3R5bGUgPSB7XG4gIGNhcmRCb2R5OiB7XG4gICAgcGFkZGluZzogXCIwLjkzNzVyZW0gMS44NzVyZW1cIixcbiAgICBmbGV4OiBcIjEgMSBhdXRvXCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRCb2R5U3R5bGU7XG4iLCJjb25zdCBjYXJkRm9vdGVyU3R5bGUgPSB7XG4gIGNhcmRGb290ZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIHBhZGRpbmc6IFwiMC45Mzc1cmVtIDEuODc1cmVtXCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRGb290ZXJTdHlsZTtcbiIsImNvbnN0IGNhcmRTdHlsZSA9IHtcbiAgY2FyZDoge1xuICAgIGJvcmRlcjogXCIwXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjMwcHhcIixcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG1pbldpZHRoOiBcIjBcIixcbiAgICB3b3JkV3JhcDogXCJicmVhay13b3JkXCIsXG4gICAgZm9udFNpemU6IFwiLjg3NXJlbVwiLFxuICAgIHRyYW5zaXRpb246IFwiYWxsIDMwMG1zIGxpbmVhclwiXG4gIH0sXG4gIGNhcmRQbGFpbjoge1xuICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICB9LFxuICBjYXJkQ2Fyb3VzZWw6IHtcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXJkU3R5bGU7XG4iLCJpbXBvcnQge1xuICBwcmltYXJ5Q29sb3IsXG4gIGRhbmdlckNvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIGRlZmF1bHRGb250XG59IGZyb20gXCIuLi8uLi9uZXh0anMtbWF0ZXJpYWwta2l0LmpzXCI7XG5cbmNvbnN0IGN1c3RvbUlucHV0U3R5bGUgPSB7XG4gIGRpc2FibGVkOiB7XG4gICAgXCImOmJlZm9yZVwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudCAhaW1wb3J0YW50XCJcbiAgICB9XG4gIH0sXG4gIHVuZGVybGluZToge1xuICAgIFwiJjpob3Zlcjpub3QoJGRpc2FibGVkKTpiZWZvcmUsJjpiZWZvcmVcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IFwiI0QyRDJEMiAhaW1wb3J0YW50XCIsXG4gICAgICBib3JkZXJXaWR0aDogXCIxcHggIWltcG9ydGFudFwiXG4gICAgfSxcbiAgICBcIiY6YWZ0ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHByaW1hcnlDb2xvclxuICAgIH1cbiAgfSxcbiAgdW5kZXJsaW5lRXJyb3I6IHtcbiAgICBcIiY6YWZ0ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IGRhbmdlckNvbG9yXG4gICAgfVxuICB9LFxuICB1bmRlcmxpbmVTdWNjZXNzOiB7XG4gICAgXCImOmFmdGVyXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBzdWNjZXNzQ29sb3JcbiAgICB9XG4gIH0sXG4gIHdoaXRlVW5kZXJsaW5lOiB7XG4gICAgXCImOmhvdmVyOm5vdCgkZGlzYWJsZWQpOmJlZm9yZSwmOmJlZm9yZVwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogXCIjRkZGRkZGXCJcbiAgICB9LFxuICAgIFwiJjphZnRlclwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogXCIjRkZGRkZGXCJcbiAgICB9XG4gIH0sXG4gIGxhYmVsUm9vdDoge1xuICAgIC4uLmRlZmF1bHRGb250LFxuICAgIGNvbG9yOiBcIiNBQUFBQUEgIWltcG9ydGFudFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1N1wiLFxuICAgIHRvcDogXCIxMHB4XCIsXG4gICAgbGV0dGVyU3BhY2luZzogXCJ1bnNldFwiLFxuICAgIFwiJiArICR1bmRlcmxpbmVcIjoge1xuICAgICAgbWFyZ2luVG9wOiBcIjBweFwiXG4gICAgfVxuICB9LFxuICBsYWJlbFJvb3RFcnJvcjoge1xuICAgIGNvbG9yOiBkYW5nZXJDb2xvciArIFwiICFpbXBvcnRhbnRcIlxuICB9LFxuICBsYWJlbFJvb3RTdWNjZXNzOiB7XG4gICAgY29sb3I6IHN1Y2Nlc3NDb2xvciArIFwiICFpbXBvcnRhbnRcIlxuICB9LFxuICBmb3JtQ29udHJvbDoge1xuICAgIG1hcmdpbjogXCIwIDAgMTdweCAwXCIsXG4gICAgcGFkZGluZ1RvcDogXCIyN3B4XCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBcIiYgc3ZnLCYgLmZhYiwmIC5mYXIsJiAuZmFsLCYgLmZhcywmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICBjb2xvcjogXCIjNDk1MDU3XCJcbiAgICB9XG4gIH0sXG4gIGlucHV0OiB7XG4gICAgY29sb3I6IFwiIzQ5NTA1N1wiLFxuICAgIGhlaWdodDogXCJ1bnNldFwiLFxuICAgIFwiJiwmOjpwbGFjZWhvbGRlclwiOiB7XG4gICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICBmb250RmFtaWx5OiAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJyxcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTdcIixcbiAgICAgIG9wYWNpdHk6IFwiMVwiXG4gICAgfSxcbiAgICBcIiY6OnBsYWNlaG9sZGVyXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNBQUFBQUFcIlxuICAgIH1cbiAgfSxcbiAgd2hpdGVJbnB1dDoge1xuICAgIFwiJiwmOjpwbGFjZWhvbGRlclwiOiB7XG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICBvcGFjaXR5OiBcIjFcIlxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tSW5wdXRTdHlsZTtcbiIsImltcG9ydCB7XG4gIHByaW1hcnlDb2xvcixcbiAgd2FybmluZ0NvbG9yLFxuICBkYW5nZXJDb2xvcixcbiAgc3VjY2Vzc0NvbG9yLFxuICBpbmZvQ29sb3IsXG4gIHJvc2VDb2xvcixcbiAgZ3JheUNvbG9yLFxuICB0aXRsZVxufSBmcm9tIFwiLi4vLi4vL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuY29uc3QgaW5mb1N0eWxlID0ge1xuICBpbmZvQXJlYToge1xuICAgIG1heFdpZHRoOiBcIjM2MHB4XCIsXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgIHBhZGRpbmc6IFwiMHB4XCJcbiAgfSxcbiAgaWNvbldyYXBwZXI6IHtcbiAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgbWFyZ2luVG9wOiBcIjI0cHhcIixcbiAgICBtYXJnaW5SaWdodDogXCIxMHB4XCJcbiAgfSxcbiAgcHJpbWFyeToge1xuICAgIGNvbG9yOiBwcmltYXJ5Q29sb3JcbiAgfSxcbiAgd2FybmluZzoge1xuICAgIGNvbG9yOiB3YXJuaW5nQ29sb3JcbiAgfSxcbiAgZGFuZ2VyOiB7XG4gICAgY29sb3I6IGRhbmdlckNvbG9yXG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBjb2xvcjogc3VjY2Vzc0NvbG9yXG4gIH0sXG4gIGluZm86IHtcbiAgICBjb2xvcjogaW5mb0NvbG9yXG4gIH0sXG4gIHJvc2U6IHtcbiAgICBjb2xvcjogcm9zZUNvbG9yXG4gIH0sXG4gIGdyYXk6IHtcbiAgICBjb2xvcjogZ3JheUNvbG9yXG4gIH0sXG4gIGljb246IHtcbiAgICB3aWR0aDogXCIzNnB4XCIsXG4gICAgaGVpZ2h0OiBcIjM2cHhcIlxuICB9LFxuICBkZXNjcmlwdGlvbldyYXBwZXI6IHtcbiAgICBjb2xvcjogZ3JheUNvbG9yLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gIH0sXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGNvbG9yOiBncmF5Q29sb3IsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgbWFyZ2luVG9wOiBcIjBweFwiLFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIlxuICB9LFxuICBpY29uV3JhcHBlclZlcnRpY2FsOiB7XG4gICAgZmxvYXQ6IFwibm9uZVwiXG4gIH0sXG4gIGljb25WZXJ0aWNhbDoge1xuICAgIHdpZHRoOiBcIjYxcHhcIixcbiAgICBoZWlnaHQ6IFwiNjFweFwiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZm9TdHlsZTtcbiIsImNvbnN0IGltYWdlc1N0eWxlcyA9IHtcbiAgaW1nRmx1aWQ6IHtcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiBcImF1dG9cIlxuICB9LFxuICBpbWdSb3VuZGVkOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBcIjZweCAhaW1wb3J0YW50XCJcbiAgfSxcbiAgaW1nUm91bmRlZENpcmNsZToge1xuICAgIGJvcmRlclJhZGl1czogXCI1MCUgIWltcG9ydGFudFwiXG4gIH0sXG4gIGltZ1JhaXNlZDoge1xuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCA1cHggMTVweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4yNCksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMilcIlxuICB9LFxuICBpbWdHYWxsZXJ5OiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIyLjE0MnJlbVwiXG4gIH0sXG4gIGltZ0NhcmRUb3A6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogXCJjYWxjKC4yNXJlbSAtIDFweClcIixcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCJjYWxjKC4yNXJlbSAtIDFweClcIlxuICB9LFxuICBpbWdDYXJkQm90dG9tOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IFwiY2FsYyguMjVyZW0gLSAxcHgpXCIsXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFwiY2FsYyguMjVyZW0gLSAxcHgpXCJcbiAgfSxcbiAgaW1nQ2FyZDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiY2FsYyguMjVyZW0gLSAxcHgpXCJcbiAgfSxcbiAgaW1nQ2FyZE92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCIwXCIsXG4gICAgcmlnaHQ6IFwiMFwiLFxuICAgIGJvdHRvbTogXCIwXCIsXG4gICAgbGVmdDogXCIwXCIsXG4gICAgcGFkZGluZzogXCIxLjI1cmVtXCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VzU3R5bGVzO1xuIiwiaW1wb3J0IHsgY2FyZFRpdGxlLCB0aXRsZSwgc21hbGxUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi9uZXh0anMtbWF0ZXJpYWwta2l0LmpzXCI7XG5pbXBvcnQgaW1hZ2VzU3R5bGUgZnJvbSBcIi4uLy4uL2ltYWdlc1N0eWxlcy5qc1wiO1xuXG5jb25zdCBwYWNrYWdlU3R5bGUgPSB7XG4gIHNlY3Rpb246IHtcbiAgICBwYWRkaW5nOiBcIjEwcHggMFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICB9LFxuICB0aXRsZToge1xuICAgIC4uLnRpdGxlLFxuICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXG4gICAgbWFyZ2luVG9wOiBcIjVweFwiLFxuICAgIG1pbkhlaWdodDogXCIxMHB4XCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIlxuICB9LFxuICAuLi5pbWFnZXNTdHlsZSxcbiAgaXRlbUdyaWQ6IHtcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH0sXG4gIGNhcmRUaXRsZToge1xuICAgIGNvbG9yOiBcImluaGVyaXRcIlxuICB9LFxuICBzbWFsbFRpdGxlOiB7XG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCJcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiXG4gIH0sXG4gIGp1c3RpZnlDZW50ZXI6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXIgIWltcG9ydGFudFwiXG4gIH0sXG4gIHNvY2lhbHM6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgIGxlZnQ6IFwiMFwiLFxuICAgIHRvcDogXCIwXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEwcHhcIixcbiAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH0sXG4gIG1hcmdpbjU6IHtcbiAgICBtYXJnaW46IFwiNXB4XCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFja2FnZVN0eWxlO1xuIiwiaW1wb3J0IHsgY2FyZFRpdGxlLCB0aXRsZSwgc21hbGxUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi9uZXh0anMtbWF0ZXJpYWwta2l0LmpzXCI7XG5pbXBvcnQgaW1hZ2VzU3R5bGUgZnJvbSBcIi4uLy4uL2ltYWdlc1N0eWxlcy5qc1wiO1xuXG5jb25zdCBwYWNrYWdlU3R5bGUgPSB7XG4gIHNlY3Rpb246IHtcbiAgICBwYWRkaW5nOiBcIjEwcHggMFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICB9LFxuICB0aXRsZToge1xuICAgIC4uLnRpdGxlLFxuICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXG4gICAgbWFyZ2luVG9wOiBcIjVweFwiLFxuICAgIG1pbkhlaWdodDogXCIxMHB4XCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIlxuICB9LFxuICAuLi5pbWFnZXNTdHlsZSxcbiAgaXRlbUdyaWQ6IHtcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH0sXG4gIGNhcmRUaXRsZToge1xuICAgIGNvbG9yOiBcImluaGVyaXRcIlxuICB9LFxuICBzbWFsbFRpdGxlOiB7XG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCJcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIlxuICB9LFxuICBqdXN0aWZ5Q2VudGVyOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyICFpbXBvcnRhbnRcIlxuICB9LFxuICBzb2NpYWxzOiB7XG4gICAgbWFyZ2luVG9wOiBcIjBcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgdHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgICB0b3A6IFwiMFwiLFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgbGluZUhlaWdodDogXCIxMHB4XCIsXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIlxuICB9LFxuICBtYXJnaW41OiB7XG4gICAgbWFyZ2luOiBcIjVweFwiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhY2thZ2VTdHlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzXCI7XG5pbXBvcnQgQ2FyZEJvZHkgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanNcIjtcbmltcG9ydCBDYXJkRm9vdGVyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmRGb290ZXIuanNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL2xhbmRpbmdQYWdlU2VjdGlvbnMvbm9kZVBhY2thZ2VTdHlsZS5qc1wiO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFja2FnZVNlY3Rpb24oKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgaW1hZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc2VzLmltZ1JhaXNlZCxcbiAgICBjbGFzc2VzLmltZ1JvdW5kZWRDaXJjbGUsXG4gICAgY2xhc3Nlcy5pbWdGbHVpZFxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+Tm9kZS5qcyBtb2R1bGVzIEkgaGF2ZSBhdXRob3JlZDo8L2gyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEdyaWRDb250YWluZXI+XG4gICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICA8Q2FyZCBwbGFpbj5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1HcmlkfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy9zcG9ydHNkYXRhdmVyc2Utbm9kZS5wbmdgfSBhbHQ9XCJzcG9ydHNkYXRhdmVyc2Utbm9kZS1qc1wiIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFRpdGxlfT5cbiAgICAgICAgICAgICAgICBzcG9ydHNkYXRhdmVyc2VcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtjbGFzc2VzLnNtYWxsVGl0bGV9PkFsbCBjb2xsZWdpYXRlIGFuZCA2IFByb2Zlc3Npb25hbCBzcG9ydHMgLSBOb2RlLmpzPC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgU3VwcG9ydCBmb3IgdGhlIGZvbGxvd2luZyB0eXBlcyBvZiBkYXRhIGZyb20gRVNQTidzIGVuZHBvaW50czpcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+cGxheS1ieS1wbGF5IChpbmNsdWRpbmcgc2hvdCBsb2NhdGlvbiBkYXRhIHdoZW4gYXZhaWxhYmxlKTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+c2NvcmVzPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5zY2hlZHVsZTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+c3RhbmRpbmdzPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5yYW5raW5ncyAobm90IGF2YWlsYWJsZSBmb3IgcHJvZmVzc2lvbmFsIHNwb3J0cyk8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgUmVjcnVpdGluZyBkYXRhIGZyb20gMjQ3U3BvcnRzIGF2YWlsYWJsZSBmb3I6XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5tZW4ncyBjb2xsZWdlIGJhc2tldGJhbGw8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5jb2xsZWdlIGZvb3RiYWxsPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIFRoZSBmb2xsb3dpbmcgc3BvcnRzIGFyZSBhdmFpbGFibGUgZnJvbSBFU1BOOlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+Q29sbGVnZSBCYXNrZXRiYWxsPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+V29tZW4ncyBDb2xsZWdlIEJhc2tldGJhbGw8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Db2xsZWdlIEZvb3RiYWxsPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+V05CQTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk5CQTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPiBORkw8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5OSEw8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgQWxsIHRlYW0gc3BvcnRzIG9uIHRoZSBOQ0FBIHdlYnNpdGU6XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT4nZm9vdGJhbGwnPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+J2Jhc2tldGJhbGwtbWVuJzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPidiYXNrZXRiYWxsLXdvbWVuJzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPidzb2NjZXItbWVuJzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPidzb2NjZXItd29tZW4nPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+J2ZpZWxkaG9ja2V5JzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPid2b2xsZXliYWxsLXdvbWVuJzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPidpY2Vob2NrZXktbWVuJzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPidpY2Vob2NrZXktd29tZW4nPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+J2Jhc2ViYWxsJyA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4nYmVhY2gtdm9sbGV5YmFsbCc8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4nbGFjcm9zc2UtbWVuJzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPidsYWNyb3NzZS13b21lbic8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4ndm9sbGV5YmFsbC1tZW4nPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkSXRlbSAgeHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgIDxDYXJkIHBsYWluPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gIHhzPXsxMn0gc209ezEyfSBtZD17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1HcmlkfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YHNtYWxsL2ludHJvZHVjaW5nLWNiYi1ucG0ucG5nYH0gYWx0PVwiY2JiLW5wbS1ub2RlLWpzXCIgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgIGNiYi1ucG1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtjbGFzc2VzLnNtYWxsVGl0bGV9PkFsbCBjb2xsZWdpYXRlIC0gTm9kZS5qczwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIDxpPldhcyBhbG1vc3QgaW1tZWRpYXRlbHkgZGVwcmVjYXRlZCBkdWUgdG8gbWFzc2l2ZWx5IGV4cGFuZGluZyBjb3ZlcmFnZSwgbWlzbGVhZGluZyBuYW1lLCBhbmQgdHVybmVkIGludG8gdGhlIHNwb3J0c2RhdGF2ZXJzZSBOb2RlLmpzIG1vZHVsZTwvaT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc1wiO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc1wiO1xuaW1wb3J0IENhcmRCb2R5IGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmRCb2R5LmpzXCI7XG5pbXBvcnQgQ2FyZEZvb3RlciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkRm9vdGVyLmpzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9sYW5kaW5nUGFnZVNlY3Rpb25zL3BhY2thZ2VTdHlsZS5qc1wiO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFja2FnZVNlY3Rpb24oKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgaW1hZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc2VzLmltZ1JhaXNlZCxcbiAgICBjbGFzc2VzLmltZ1JvdW5kZWRDaXJjbGUsXG4gICAgY2xhc3Nlcy5pbWdGbHVpZFxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+UiBwYWNrYWdlcyBJIGhhdmUgYXV0aG9yZWQ6PC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPENhcmQgcGxhaW4+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtR3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvY2Zic2NyYXBSLWxvZ28ucG5nYH0gYWx0PVwiY2Zic2NyYXBSXCIgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgIGNmYnNjcmFwUlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuc21hbGxUaXRsZX0+Q29sbGVnZSBGb290YmFsbCAtIFI8L3NtYWxsPlxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICBjZmJzY3JhcFIgaXMgYW4gUiBwYWNrYWdlIGZvciB3b3JraW5nIHdpdGggQ29sbGVnZSBGb290YmFsbCBkYXRhLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIEl0IGlzIGFuIFIgQVBJIHdyYXBwZXIgYXJvdW5kIGh0dHBzOi8vY29sbGVnZWZvb3RiYWxsZGF0YS5jb20vLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIEl0IHByb3ZpZGVzIHVzZXJzIHRoZSBjYXBhYmlsaXR5IHRvIHJldHJpZXZlIGRhdGEgZnJvbSB0aGUgQVBJIGFuZCBzdXBwbGVtZW50IHRoYXQgZGF0YSB3aXRoXG4gICAgICAgICAgICAgICAgRXhwZWN0ZWQgUG9pbnRzIEFkZGVkL1dpbiBQcm9iYWJpbGl0eSBhZGRlZCBtZXRyaWNzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPENhcmQgcGxhaW4+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtR3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMva2VucG9tUi1sb2dvLnBuZ2B9IGFsdD1cImtlbnBvbVJcIiAvPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRUaXRsZX0+XG4gICAgICAgICAgICAgICAga2VucG9tUlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuc21hbGxUaXRsZX0+TWVuJ3MgQ29sbGVnZSBCYXNrZXRiYWxsIC0gUjwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIGtlbnBvbVIgaXMgYW4gUiBwYWNrYWdlIGZvciB3b3JraW5nIHdpdGggbWVuJ3MgY29sbGVnZSBiYXNrZXRiYWxsIGRhdGEuXG4gICAgICAgICAgICAgICAgQSBzY3JhcGluZyBhbmQgYWdncmVnYXRpbmcgaW50ZXJmYWNlIGZvciBLZW4gUG9tZXJveeKAmXMgY29sbGVnZSBiYXNrZXRiYWxsIHN0YXRpc3RpY3Mgd2Vic2l0ZSwga2VucG9tLmNvbS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICBBbHNvIHByb3ZpZGVzIHN1cHBvcnQgZm9yIEVTUE7igJlzIG1lbidzIGNvbGxlZ2UgYmFza2V0YmFsbCBnYW1lIGRhdGEgYW5kIE5DQUEgTkVUIFJhbmtpbmdzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPENhcmQgcGxhaW4+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtR3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvd2Vob29wLWxvZ28ucG5nYH0gYWx0PVwid2Vob29wXCIgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFRpdGxlfT5cbiAgICAgICAgICAgICAgICB3ZWhvb3BcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtjbGFzc2VzLnNtYWxsVGl0bGV9PldOQkEgYW5kIFdvbWVuJ3MgQ29sbGVnZSBCYXNrZXRiYWxsIC0gUjwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIHdlaG9vcCBpcyBhbiBSIHBhY2thZ2UgZm9yIHdvcmtpbmcgd2l0aCBXTkJBIGFuZCB3b21lbidzIGNvbGxlZ2UgYmFza2V0YmFsbCBkYXRhLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIFByb3ZpZGVzIHN1cHBvcnQgZm9yIEVTUE7igJlzIFdOQkEgYW5kIHdvbWVuJ3MgY29sbGVnZSBiYXNrZXRiYWxsIGdhbWUgZGF0YSBhbmQgTkNBQSBORVQgUmFua2luZ3MuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIHNlY29uZCByb3cgb2YgcGFja2FnZXMgKi99XG4gICAgICA8ZGl2PlxuICAgICAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fT5cbiAgICAgICAgICAgIDxDYXJkIHBsYWluPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs3fSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbUdyaWR9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaW1hZ2VzL2NmYnJlY3J1aXRSLWxvZ28ucG5nYH0gYWx0PVwiY2ZicmVjcnVpdFJcIiAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgIGNmYnJlY3J1aXRSXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5zbWFsbFRpdGxlfT5Db2xsZWdlIEZvb3RiYWxsIFJlY3J1aXRpbmcgLSBSPC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgY2ZicmVjcnVpdFIgaXMgYW4gUiBwYWNrYWdlIGZvciB3b3JraW5nIHdpdGggY29sbGVnZSBmb290YmFsbCByZWNydWl0aW5nIGRhdGEuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17NH0+XG4gICAgICAgICAgICA8Q2FyZCBwbGFpbj5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17N30gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1HcmlkfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy9jZmJzY3JhcFItZGF0YS1yZXBvLnBuZ2B9IGFsdD1cImNmYnNjcmFwUi1kYXRhXCIgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgIGNmYnNjcmFwUi1kYXRhXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5zbWFsbFRpdGxlfT5Db2xsZWdlIEZvb3RiYWxsIC0gRGF0YTwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIGNmYnNjcmFwUi1kYXRhIGlzIGEgcmVwb3NpdG9yeSBmb3Igd29ya2luZyB3aXRoIENGQiBkYXRhLiAyMDE0LTIwMjAgZGF0YSBpbmNsdWRlZCBpbiBjc3YsIHJkcywgYW5kIHBhcnF1ZXQgZm9ybWF0LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPENhcmQgcGxhaW4+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtR3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMva2VucG9tUi1kYXRhLXJlcG8ucG5nYH0gYWx0PVwia2VucG9tUi1kYXRhXCIgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgIGtlbnBvbVItZGF0YVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuc21hbGxUaXRsZX0+TWVuJ3MgQ29sbGVnZSBCYXNrZXRiYWxsIC0gUjwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIGtlbnBvbVIgY29udGFpbnMgZGF0YSBmb3IgbW9zdCB0ZWFtcywgcGxheWVycyBhbmQgY29hY2hlcyBmcm9tIDIwMDItMjAyMC4gQWxsIGRhdGEgcHJvdmlkZWQgaW4gY3N2IGZvcm1hdC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbmltcG9ydCBDaGF0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiO1xuaW1wb3J0IFZlcmlmaWVkVXNlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlclwiO1xuaW1wb3J0IEZpbmdlcnByaW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmluZ2VycHJpbnRcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc1wiO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzXCI7XG5pbXBvcnQgSW5mb0FyZWEgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0luZm9BcmVhL0luZm9BcmVhLmpzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RTZWN0aW9uKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICA8R3JpZENvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezh9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlRhbGsgRGF0YSB0byBNZTwvaDI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBJIGFtIGFsd2F5cyBsb29raW5nIHRvIGFkZCBtb3JlIGRldmVsb3BlcnMgdG8gdGhlIFNwb3J0c0RhdGF2ZXJzZSBkZXZlbG9wZXIgZ3JvdXAgd2hvIHNoYXJlIGNvbW1vbiBjYXVzZVxuICAgICAgICAgICAgd2l0aCB0aGUgYWltIHRvIG1ha2UgdGhlIHNwb3J0cyBkYXRhIGluZHVzdHJ5IG1vcmUgZGl2ZXJzZSBhbmQgaW5jbHVzaXZlLiBcbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgPEdyaWRDb250YWluZXIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs4fT5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIFRoZSBTcG9ydHNEYXRhdmVyc2UgaXMgYSBjb25jZXB0IEkgaGF2ZSBiZWVuIHdvcmtpbmcgb24gd2l0aCBhIGhhbmRmdWwgb2Ygb3RoZXIgcGVvcGxlIHRvIGNyZWF0ZSBhbmQgZGV2ZWxvcCBwYWNrYWdlcyBpbiBQeXRob24sIFIgYW5kIE5vZGUuanMuXG4gICAgICAgICAgICBBbW9uZyB0aGUgZ29hbHMgb2YgdGhlIFNwb3J0c0RhdGF2ZXJzZSBpcyB0byBmbGF0dGVuIHRoZSBsZWFybmluZyBjdXJ2ZSB0aGUgYXZlcmFnZSB1c2VyIGhhcyB0byBnbyB0aHJvdWdoIHRvIGdldCBhY2Nlc3MgdG8gdGhlIGhpZ2hlc3QgcXVhbGl0eSBvcGVuLXNvdXJjZSBkYXRhIGFuZCBhbmFseXRpY3NcbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgey8qIDxkaXY+XG4gICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPEluZm9BcmVhXG4gICAgICAgICAgICAgIHRpdGxlPVwiRnJlZSBDaGF0XCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEaXZpZGUgZGV0YWlscyBhYm91dCB5b3VyIHByb2R1Y3Qgb3IgYWdlbmN5IHdvcmsgaW50byBwYXJ0cy4gV3JpdGUgYSBmZXcgbGluZXMgYWJvdXQgZWFjaCBvbmUuIEEgcGFyYWdyYXBoIGRlc2NyaWJpbmcgYSBmZWF0dXJlIHdpbGwgYmUgZW5vdWdoLlwiXG4gICAgICAgICAgICAgIGljb249e0NoYXR9XG4gICAgICAgICAgICAgIGljb25Db2xvcj1cImluZm9cIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPEluZm9BcmVhXG4gICAgICAgICAgICAgIHRpdGxlPVwiVmVyaWZpZWQgVXNlcnNcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpdmlkZSBkZXRhaWxzIGFib3V0IHlvdXIgcHJvZHVjdCBvciBhZ2VuY3kgd29yayBpbnRvIHBhcnRzLiBXcml0ZSBhIGZldyBsaW5lcyBhYm91dCBlYWNoIG9uZS4gQSBwYXJhZ3JhcGggZGVzY3JpYmluZyBhIGZlYXR1cmUgd2lsbCBiZSBlbm91Z2guXCJcbiAgICAgICAgICAgICAgaWNvbj17VmVyaWZpZWRVc2VyfVxuICAgICAgICAgICAgICBpY29uQ29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgdmVydGljYWxcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fT5cbiAgICAgICAgICAgIDxJbmZvQXJlYVxuICAgICAgICAgICAgICB0aXRsZT1cIkZpbmdlcnByaW50XCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEaXZpZGUgZGV0YWlscyBhYm91dCB5b3VyIHByb2R1Y3Qgb3IgYWdlbmN5IHdvcmsgaW50byBwYXJ0cy4gV3JpdGUgYSBmZXcgbGluZXMgYWJvdXQgZWFjaCBvbmUuIEEgcGFyYWdyYXBoIGRlc2NyaWJpbmcgYSBmZWF0dXJlIHdpbGwgYmUgZW5vdWdoLlwiXG4gICAgICAgICAgICAgIGljb249e0ZpbmdlcnByaW50fVxuICAgICAgICAgICAgICBpY29uQ29sb3I9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtTZWN0aW9uKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICA8R3JpZENvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxHcmlkSXRlbSBjcz17MTJ9IHNtPXsxMn0gbWQ9ezh9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pldvcmsgd2l0aCB1czwvaDI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBBcmUgeW91IGludGVyZXN0ZWQgaW4gd29ya2luZyB3aXRoIHNwb3J0cyBkYXRhLCBkZXZlbG9waW5nIG9wZW4tc291cmNlIHBhY2thZ2VzXG4gICAgICAgICAgICBhbmQgaGVscGluZyB0ZWFjaCBvdGhlcnMgdG8gZG8gdGhlIHNhbWU/IE91ciBncm91cCBpcyBkZWRpY2F0ZWQgdG8gdGhlIGNhdXNlIG9mXG4gICAgICAgICAgICB0cnlpbmcgdG8gaW5jbHVkZSBwZW9wbGUgZnJvbSBtb3JlIGRpdmVyc2UgYmFja2dyb3VuZHMgYW5kIHVuZGVycmVwcmVzZW50ZWRcbiAgICAgICAgICAgIGdyb3VwcyBpbiBzcG9ydHMuXG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIEFkZGl0aW9uYWxseSwgd2UgYXJlIG1ha2luZyB0aGUgcHVibGljbHkgYXZhaWxhYmxlIHNwb3J0c1xuICAgICAgICAgICAgZGF0YSBtdWNoIG1vcmUgYWNjZXNzaWJsZSB0byB0aGUgY29tbW9uIHBlcnNvbi4gVGhlIGRlc2lyZWQgZ29hbCBpcyB0byBjcmVhdGVcbiAgICAgICAgICAgIGEgc3VwcG9ydGl2ZSBjb21tdW5pdHkgdGhhdCB3aWxsIHByb3ZpZGUgZ3VpZGFuY2UgYW5kIG1lbnRvciB0aG9zZSB3aG8gd2FudCB0b1xuICAgICAgICAgICAgYmUgYSBwYXJ0IG9mIHRoZSBzb2x1dGlvbi4gRHJvcCBtZSBhIGJyaWVmIG1lc3NhZ2UgYmVsb3cgc28gdGhhdCBJIGNhbiByZWFjaCBvdXQgdG8geW91IVxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XG4gICAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJZb3VyIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxuICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiWW91ciBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICA8Q3VzdG9tSW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJZb3VyIE1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRBcmVhXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICByb3dzOiA1XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17NH0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRDZW50ZXJ9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCI+U2VuZCBNZXNzYWdlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5J1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcclxuaW1wb3J0IFBhcmFsbGF4IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9QYXJhbGxheC9QYXJhbGxheC5qc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBOQU1FLCBOQU1FX0FORF9ET01BSU4gfSBmcm9tICcuLi9zcmMvdHlwZXMvY29uc3RhbnRzJ1xyXG5cclxuLy8gU2VjdGlvbnMgZm9yIHRoaXMgcGFnZVxyXG5pbXBvcnQgTm9kZVBhY2thZ2VTZWN0aW9uIGZyb20gXCIuLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9Ob2RlUGFja2FnZVNlY3Rpb24uanNcIjtcclxuaW1wb3J0IFByb2R1Y3RTZWN0aW9uIGZyb20gXCIuLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9Qcm9kdWN0U2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgUGFja2FnZVNlY3Rpb24gZnJvbSBcIi4uL3BhZ2VzLXNlY3Rpb25zL0xhbmRpbmdQYWdlLVNlY3Rpb25zL1BhY2thZ2VTZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBXb3JrU2VjdGlvbiBmcm9tIFwiLi4vcGFnZXMtc2VjdGlvbnMvTGFuZGluZ1BhZ2UtU2VjdGlvbnMvV29ya1NlY3Rpb24uanNcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZ1BhZ2UocHJvcHMpIHtcclxuICBjb25zdCBsYXJnZSA9IHVzZU1lZGlhUXVlcnkoJyhtaW4td2lkdGg6NzAwcHgpJylcclxuICBjb25zdCB7IC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+e05BTUV9OiBCdWlsZGluZyB0aGUgU3BvcnRzRGF0YXZlcnNlPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e2Ake05BTUV9IGlzIHRoZSBwZXJzb25hbCBwYWdlIG9mIFNhaWVtIEdpbGFuaSwgZ2l2aW5nIHVwZGF0ZXMgb24gdGhlIFNwb3J0c0RhdGF2ZXJzZS5gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmdzfT5cclxuICAgICAgICAgICAgPEJveCBwPXs1fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXtsYXJnZSA/ICdoMScgOiAnaDQnfT57TkFNRV9BTkRfRE9NQUlOfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRIZWFkaW5nfSB2YXJpYW50PXtsYXJnZSA/ICdoMycgOiAnaDYnfT5cclxuICAgICAgICAgICAgICBCdWlsZGluZyB0aGUgU3BvcnRzRGF0YXZlcnNlLlxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5tYWluLCBzdHlsZXMubWFpblJhaXNlZCl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ3N9PlxyXG4gICAgICAgICAgPE5vZGVQYWNrYWdlU2VjdGlvbiAvPlxyXG4gICAgICAgICAgPFBhY2thZ2VTZWN0aW9uIC8+XHJcbiAgICAgICAgICA8UHJvZHVjdFNlY3Rpb24gLz5cclxuICAgICAgICAgIDxXb3JrU2VjdGlvbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9jYXJkU3R5bGUuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBwbGFpbiwgY2Fyb3VzZWwsIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zdCBjYXJkQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmNhcmRdOiB0cnVlLFxuICAgIFtjbGFzc2VzLmNhcmRQbGFpbl06IHBsYWluLFxuICAgIFtjbGFzc2VzLmNhcmRDYXJvdXNlbF06IGNhcm91c2VsLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZENsYXNzZXN9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxuICBjYXJvdXNlbDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2NhcmRCb2R5U3R5bGUuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkQm9keShwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNhcmRCb2R5Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmNhcmRCb2R5XTogdHJ1ZSxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWRcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRCb2R5Q2xhc3Nlc30gey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5DYXJkQm9keS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvY2FyZEZvb3RlclN0eWxlLmpzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZEZvb3Rlcihwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNhcmRGb290ZXJDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuY2FyZEZvb3Rlcl06IHRydWUsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkRm9vdGVyQ2xhc3Nlc30gey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5DYXJkRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcblxuLy8gY29yZSBjb21wb25lbnRzXG5cbmltcG9ydCBidXR0b25TdHlsZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvYnV0dG9uU3R5bGUuanNcIjtcblxuY29uc3QgbWFrZUNvbXBvbmVudFN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcbiAgLi4uYnV0dG9uU3R5bGVcbn0pKTtcblxuY29uc3QgUmVndWxhckJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbG9yLFxuICAgIHJvdW5kLFxuICAgIGNoaWxkcmVuLFxuICAgIGZ1bGxXaWR0aCxcbiAgICBkaXNhYmxlZCxcbiAgICBzaW1wbGUsXG4gICAgc2l6ZSxcbiAgICBibG9jayxcbiAgICBsaW5rLFxuICAgIGp1c3RJY29uLFxuICAgIGNsYXNzTmFtZSxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc2VzID0gbWFrZUNvbXBvbmVudFN0eWxlcygpO1xuXG4gIGNvbnN0IGJ0bkNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5idXR0b25dOiB0cnVlLFxuICAgIFtjbGFzc2VzW3NpemVdXTogc2l6ZSxcbiAgICBbY2xhc3Nlc1tjb2xvcl1dOiBjb2xvcixcbiAgICBbY2xhc3Nlcy5yb3VuZF06IHJvdW5kLFxuICAgIFtjbGFzc2VzLmZ1bGxXaWR0aF06IGZ1bGxXaWR0aCxcbiAgICBbY2xhc3Nlcy5kaXNhYmxlZF06IGRpc2FibGVkLFxuICAgIFtjbGFzc2VzLnNpbXBsZV06IHNpbXBsZSxcbiAgICBbY2xhc3Nlcy5ibG9ja106IGJsb2NrLFxuICAgIFtjbGFzc2VzLmxpbmtdOiBsaW5rLFxuICAgIFtjbGFzc2VzLmp1c3RJY29uXToganVzdEljb24sXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZVxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIHsuLi5yZXN0fSByZWY9e3JlZn0gY2xhc3Nlcz17eyByb290OiBidG5DbGFzc2VzIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQnV0dG9uPlxuICApO1xufSk7XG5cblJlZ3VsYXJCdXR0b24ucHJvcFR5cGVzID0ge1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInByaW1hcnlcIixcbiAgICBcImluZm9cIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwicm9zZVwiLFxuICAgIFwid2hpdGVcIixcbiAgICBcImZhY2Vib29rXCIsXG4gICAgXCJ0d2l0dGVyXCIsXG4gICAgXCJnb29nbGVcIixcbiAgICBcImdpdGh1YlwiLFxuICAgIFwidHJhbnNwYXJlbnRcIlxuICBdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInNtXCIsIFwibGdcIl0pLFxuICBzaW1wbGU6IFByb3BUeXBlcy5ib29sLFxuICByb3VuZDogUHJvcFR5cGVzLmJvb2wsXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYmxvY2s6IFByb3BUeXBlcy5ib29sLFxuICBsaW5rOiBQcm9wVHlwZXMuYm9vbCxcbiAganVzdEljb246IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVndWxhckJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2N1c3RvbUlucHV0U3R5bGUuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21JbnB1dChwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHtcbiAgICBmb3JtQ29udHJvbFByb3BzLFxuICAgIGxhYmVsVGV4dCxcbiAgICBpZCxcbiAgICBsYWJlbFByb3BzLFxuICAgIGlucHV0UHJvcHMsXG4gICAgZXJyb3IsXG4gICAgd2hpdGUsXG4gICAgaW5wdXRSb290Q3VzdG9tQ2xhc3NlcyxcbiAgICBzdWNjZXNzXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBsYWJlbENsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbXCIgXCIgKyBjbGFzc2VzLmxhYmVsUm9vdEVycm9yXTogZXJyb3IsXG4gICAgW1wiIFwiICsgY2xhc3Nlcy5sYWJlbFJvb3RTdWNjZXNzXTogc3VjY2VzcyAmJiAhZXJyb3JcbiAgfSk7XG4gIGNvbnN0IHVuZGVybGluZUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy51bmRlcmxpbmVFcnJvcl06IGVycm9yLFxuICAgIFtjbGFzc2VzLnVuZGVybGluZVN1Y2Nlc3NdOiBzdWNjZXNzICYmICFlcnJvcixcbiAgICBbY2xhc3Nlcy51bmRlcmxpbmVdOiB0cnVlLFxuICAgIFtjbGFzc2VzLndoaXRlVW5kZXJsaW5lXTogd2hpdGVcbiAgfSk7XG4gIGNvbnN0IG1hcmdpblRvcCA9IGNsYXNzTmFtZXMoe1xuICAgIFtpbnB1dFJvb3RDdXN0b21DbGFzc2VzXTogaW5wdXRSb290Q3VzdG9tQ2xhc3NlcyAhPT0gdW5kZWZpbmVkXG4gIH0pO1xuICBjb25zdCBpbnB1dENsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5pbnB1dF06IHRydWUsXG4gICAgW2NsYXNzZXMud2hpdGVJbnB1dF06IHdoaXRlXG4gIH0pO1xuICB2YXIgZm9ybUNvbnRyb2xDbGFzc2VzO1xuICBpZiAoZm9ybUNvbnRyb2xQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZm9ybUNvbnRyb2xDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgIGZvcm1Db250cm9sUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY2xhc3Nlcy5mb3JtQ29udHJvbFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZm9ybUNvbnRyb2xDbGFzc2VzID0gY2xhc3Nlcy5mb3JtQ29udHJvbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbCB7Li4uZm9ybUNvbnRyb2xQcm9wc30gY2xhc3NOYW1lPXtmb3JtQ29udHJvbENsYXNzZXN9PlxuICAgICAge2xhYmVsVGV4dCAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICA8SW5wdXRMYWJlbFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbFJvb3QgKyBcIiBcIiArIGxhYmVsQ2xhc3Nlc31cbiAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbFRleHR9XG4gICAgICAgIDwvSW5wdXRMYWJlbD5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPElucHV0XG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICBpbnB1dDogaW5wdXRDbGFzc2VzLFxuICAgICAgICAgIHJvb3Q6IG1hcmdpblRvcCxcbiAgICAgICAgICBkaXNhYmxlZDogY2xhc3Nlcy5kaXNhYmxlZCxcbiAgICAgICAgICB1bmRlcmxpbmU6IHVuZGVybGluZUNsYXNzZXNcbiAgICAgICAgfX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgIC8+XG4gICAgPC9Gb3JtQ29udHJvbD5cbiAgKTtcbn1cblxuQ3VzdG9tSW5wdXQucHJvcFR5cGVzID0ge1xuICBsYWJlbFRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICBsYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgaW5wdXRSb290Q3VzdG9tQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBzdWNjZXNzOiBQcm9wVHlwZXMuYm9vbCxcbiAgd2hpdGU6IFByb3BUeXBlcy5ib29sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlcjogRkMgPSAoe30pOiBSZWFjdEVsZW1lbnQgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZm9vdGVyfT5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgZGlzcGxheT1cImlubGluZVwiIGNsYXNzTmFtZT17c3R5bGVbJ2Zvb3Rlci1jb250ZW50J119PlxyXG4gICAgICAgIENvcHlyaWdodCDCqSAyMDIxeycgJ31cclxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5naXRodWIuY29tL3NhaWVtZ2lsYW5pXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgU2FpZW0gR2lsYW5pXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ3JpZDoge1xuICAgIG1hcmdpblJpZ2h0OiBcIjBweFwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiMHB4XCIsXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIlxuICB9XG59O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWRDb250YWluZXIocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciB7Li4ucmVzdH0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWQgKyBcIiBcIiArIGNsYXNzTmFtZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HcmlkPlxuICApO1xufVxuXG5HcmlkQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiXG59O1xuXG5HcmlkQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ3JpZDoge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIG1pbkhlaWdodDogXCIxcHhcIixcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMTVweFwiLFxuICAgIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcbiAgICBmbGV4QmFzaXM6IFwiYXV0b1wiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIlxuICB9XG59O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWRJdGVtKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBpdGVtIHsuLi5yZXN0fSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZCArIFwiIFwiICsgY2xhc3NOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cbkdyaWRJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiXG59O1xuXG5HcmlkSXRlbS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9pbmZvU3R5bGUuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvQXJlYShwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpY29uQ29sb3IsIHZlcnRpY2FsIH0gPSBwcm9wcztcbiAgY29uc3QgaWNvbldyYXBwZXIgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5pY29uV3JhcHBlcl06IHRydWUsXG4gICAgW2NsYXNzZXNbaWNvbkNvbG9yXV06IHRydWUsXG4gICAgW2NsYXNzZXMuaWNvbldyYXBwZXJWZXJ0aWNhbF06IHZlcnRpY2FsXG4gIH0pO1xuICBjb25zdCBpY29uQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmljb25dOiB0cnVlLFxuICAgIFtjbGFzc2VzLmljb25WZXJ0aWNhbF06IHZlcnRpY2FsXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9BcmVhfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpY29uV3JhcHBlcn0+XG4gICAgICAgIDxwcm9wcy5pY29uIGNsYXNzTmFtZT17aWNvbkNsYXNzZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9uV3JhcHBlcn0+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0aXRsZX08L2g0PlxuICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuSW5mb0FyZWEuZGVmYXVsdFByb3BzID0ge1xuICBpY29uQ29sb3I6IFwiZ3JheVwiXG59O1xuXG5JbmZvQXJlYS5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSkuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWNvbkNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwicHJpbWFyeVwiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJpbmZvXCIsXG4gICAgXCJyb3NlXCIsXG4gICAgXCJncmF5XCJcbiAgXSksXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbFxufTtcbiIsImV4cG9ydCBjb25zdCBOQU1FID0gJ1NHJ1xyXG5leHBvcnQgY29uc3QgTkFNRV9BTkRfRE9NQUlOID0gJ1NHJ1xyXG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9zYWllbWdpbGFuaS5tZSdcclxuZXhwb3J0IGNvbnN0IERFUExPWU1FTlRTX1VSTCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3NhaWVtZ2lsYW5pL3NhaWVtLWJsb2cvZGVwbG95bWVudHMnXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzMxN2lLXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkaW5nc1wiOiBcIlNoYXJlZF9oZWFkaW5nc19fcjN5NzJcIixcblx0XCJzZWNvbmRIZWFkaW5nXCI6IFwiU2hhcmVkX3NlY29uZEhlYWRpbmdfX2dxQXhPXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmluZ2VycHJpbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9