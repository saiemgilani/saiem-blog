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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/landing.tsx");
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
                src: `small/sportsdataverse-node-js-module.png`,
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
              md: 6,
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
              md: 6,
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
              md: 6,
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

/***/ "./pages/landing.tsx":
/*!***************************!*\
  !*** ./pages/landing.tsx ***!
  \***************************/
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


var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\pages\\landing.tsx";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2J1dHRvblN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2NhcmRCb2R5U3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvY2FyZEZvb3RlclN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2NhcmRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9jdXN0b21JbnB1dFN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2luZm9TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvaW1hZ2VzU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9sYW5kaW5nUGFnZVNlY3Rpb25zL3BhY2thZ2VTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9QYWNrYWdlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9Qcm9kdWN0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9Xb3JrU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sYW5kaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbmZvQXJlYS9JbmZvQXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvU2hhcmVkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9GaW5nZXJwcmludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9WZXJpZmllZFVzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaGV4Q29sb3JUb1JHQiIsImhleENvbG9yIiwiZGV0ZWN0U2hvcnRoYW5kIiwicmVwbGFjZSIsIm0iLCJyIiwiZyIsImIiLCJoZXhfYXJyYXkiLCJleGVjIiwicGFyc2VJbnQiLCJoZXhUb1JHQkFscGhhIiwiYWxwaGEiLCJyZ2IiLCJkcmF3ZXJXaWR0aCIsInRyYW5zaXRpb24iLCJjb25hdGluZXJGbHVpZCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJjb250YWluZXIiLCJtYXhXaWR0aCIsImJveFNoYWRvdyIsImNhcmQiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImJhY2tncm91bmQiLCJkZWZhdWx0Rm9udCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsInByaW1hcnlDb2xvciIsIndhcm5pbmdDb2xvciIsImRhbmdlckNvbG9yIiwic3VjY2Vzc0NvbG9yIiwiaW5mb0NvbG9yIiwicm9zZUNvbG9yIiwiZ3JheUNvbG9yIiwicHJpbWFyeUJveFNoYWRvdyIsImluZm9Cb3hTaGFkb3ciLCJzdWNjZXNzQm94U2hhZG93Iiwid2FybmluZ0JveFNoYWRvdyIsImRhbmdlckJveFNoYWRvdyIsInJvc2VCb3hTaGFkb3ciLCJ3YXJuaW5nQ2FyZEhlYWRlciIsInN1Y2Nlc3NDYXJkSGVhZGVyIiwiZGFuZ2VyQ2FyZEhlYWRlciIsImluZm9DYXJkSGVhZGVyIiwicHJpbWFyeUNhcmRIZWFkZXIiLCJyb3NlQ2FyZEhlYWRlciIsImNhcmRBY3Rpb25zIiwicGFkZGluZ1RvcCIsImJvcmRlclRvcCIsImhlaWdodCIsImNhcmRIZWFkZXIiLCJwYWRkaW5nIiwiZGVmYXVsdEJveFNoYWRvdyIsImJvcmRlciIsInRpdGxlIiwidGV4dERlY29yYXRpb24iLCJzbWFsbFRpdGxlIiwibWFyZ2luVG9wIiwiY2FyZFRpdGxlIiwiY2FyZExpbmsiLCJjYXJkU3VidGl0bGUiLCJtYXJnaW5Cb3R0b20iLCJidXR0b25TdHlsZSIsImJ1dHRvbiIsIm1pbkhlaWdodCIsIm1pbldpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsIndpbGxDaGFuZ2UiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwidmVydGljYWxBbGlnbiIsInRvdWNoQWN0aW9uIiwiY3Vyc29yIiwidG9wIiwidHJhbnNmb3JtIiwibGVmdCIsImZ1bGxXaWR0aCIsInByaW1hcnkiLCJpbmZvIiwic3VjY2VzcyIsIndhcm5pbmciLCJkYW5nZXIiLCJyb3NlIiwid2hpdGUiLCJ0d2l0dGVyIiwiZmFjZWJvb2siLCJnb29nbGUiLCJnaXRodWIiLCJzaW1wbGUiLCJ0cmFuc3BhcmVudCIsImRpc2FibGVkIiwib3BhY2l0eSIsInBvaW50ZXJFdmVudHMiLCJsZyIsInNtIiwicm91bmQiLCJibG9jayIsImxpbmsiLCJqdXN0SWNvbiIsImNhcmRCb2R5U3R5bGUiLCJjYXJkQm9keSIsImZsZXgiLCJjYXJkRm9vdGVyU3R5bGUiLCJjYXJkRm9vdGVyIiwiYWxpZ25JdGVtcyIsImNhcmRTdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJ3b3JkV3JhcCIsImNhcmRQbGFpbiIsImNhcmRDYXJvdXNlbCIsIm92ZXJmbG93IiwiY3VzdG9tSW5wdXRTdHlsZSIsImJvcmRlckNvbG9yIiwidW5kZXJsaW5lIiwiYm9yZGVyV2lkdGgiLCJ1bmRlcmxpbmVFcnJvciIsInVuZGVybGluZVN1Y2Nlc3MiLCJ3aGl0ZVVuZGVybGluZSIsImxhYmVsUm9vdCIsImxhYmVsUm9vdEVycm9yIiwibGFiZWxSb290U3VjY2VzcyIsImZvcm1Db250cm9sIiwiaW5wdXQiLCJ3aGl0ZUlucHV0IiwiaW5mb1N0eWxlIiwiaW5mb0FyZWEiLCJpY29uV3JhcHBlciIsImZsb2F0IiwiZ3JheSIsImljb24iLCJkZXNjcmlwdGlvbldyYXBwZXIiLCJkZXNjcmlwdGlvbiIsImljb25XcmFwcGVyVmVydGljYWwiLCJpY29uVmVydGljYWwiLCJpbWFnZXNTdHlsZXMiLCJpbWdGbHVpZCIsImltZ1JvdW5kZWQiLCJpbWdSb3VuZGVkQ2lyY2xlIiwiaW1nUmFpc2VkIiwiaW1nR2FsbGVyeSIsImltZ0NhcmRUb3AiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJpbWdDYXJkQm90dG9tIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiaW1nQ2FyZCIsImltZ0NhcmRPdmVybGF5IiwicmlnaHQiLCJib3R0b20iLCJwYWNrYWdlU3R5bGUiLCJzZWN0aW9uIiwiaW1hZ2VzU3R5bGUiLCJpdGVtR3JpZCIsImp1c3RpZnlDZW50ZXIiLCJqdXN0aWZ5Q29udGVudCIsInNvY2lhbHMiLCJtYXJnaW41IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInN0eWxlcyIsIlBhY2thZ2VTZWN0aW9uIiwiY2xhc3NlcyIsImltYWdlQ2xhc3NlcyIsImNsYXNzTmFtZXMiLCJQcm9kdWN0U2VjdGlvbiIsIldvcmtTZWN0aW9uIiwiY2xhc3NOYW1lIiwidGV4dEFyZWEiLCJtdWx0aWxpbmUiLCJyb3dzIiwidGV4dENlbnRlciIsIkxhbmRpbmdQYWdlIiwicHJvcHMiLCJsYXJnZSIsInVzZU1lZGlhUXVlcnkiLCJyZXN0IiwiTkFNRSIsImhlYWRpbmdzIiwiTkFNRV9BTkRfRE9NQUlOIiwic2Vjb25kSGVhZGluZyIsIm1haW4iLCJtYWluUmFpc2VkIiwiQ2FyZCIsImNoaWxkcmVuIiwicGxhaW4iLCJjYXJvdXNlbCIsImNhcmRDbGFzc2VzIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm5vZGUiLCJDYXJkQm9keSIsImNhcmRCb2R5Q2xhc3NlcyIsIkNhcmRGb290ZXIiLCJjYXJkRm9vdGVyQ2xhc3NlcyIsIm1ha2VDb21wb25lbnRTdHlsZXMiLCJSZWd1bGFyQnV0dG9uIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicmVmIiwic2l6ZSIsImJ0bkNsYXNzZXMiLCJyb290Iiwib25lT2YiLCJDdXN0b21JbnB1dCIsImZvcm1Db250cm9sUHJvcHMiLCJsYWJlbFRleHQiLCJpZCIsImxhYmVsUHJvcHMiLCJpbnB1dFByb3BzIiwiZXJyb3IiLCJpbnB1dFJvb3RDdXN0b21DbGFzc2VzIiwibGFiZWxDbGFzc2VzIiwidW5kZXJsaW5lQ2xhc3NlcyIsImlucHV0Q2xhc3NlcyIsImZvcm1Db250cm9sQ2xhc3NlcyIsIm9iamVjdCIsIkZvb3RlciIsInN0eWxlIiwiZm9vdGVyIiwiZ3JpZCIsIkdyaWRDb250YWluZXIiLCJkZWZhdWx0UHJvcHMiLCJmbGV4QmFzaXMiLCJHcmlkSXRlbSIsIkluZm9BcmVhIiwiaWNvbkNvbG9yIiwidmVydGljYWwiLCJpY29uQ2xhc3NlcyIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJCQVNFX1VSTCIsIkRFUExPWU1FTlRTX1VSTCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQSxNQUFNQSxhQUFhLEdBQUcsVUFBU0MsUUFBVCxFQUFtQjtBQUN2QyxNQUFJQyxlQUFlLEdBQUcsa0NBQXRCLENBRHVDLENBQ21COztBQUMxREQsVUFBUSxHQUFHQSxRQUFRLENBQUNFLE9BQVQsQ0FBaUJELGVBQWpCLEVBQWtDLFVBQVNFLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxDQUFsQixFQUFxQjtBQUNoRSxXQUFPRixDQUFDLEdBQUdBLENBQUos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QixTQUp5QixFQUt6QixNQUx5QixFQU16QixNQU55QixFQU96QixNQVB5QixDQUFoQixDQUpRO0FBYW5Cd0IsVUFBUSxFQUFFeEMsaURBQVMsQ0FBQ0U7QUFiRCxDQUFyQixDOzs7Ozs7Ozs7Ozs7QUN6Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1mLElBQUksR0FBRyxJQUFiO0FBQ0EsTUFBTUUsZUFBZSxHQUFHLElBQXhCO0FBQ0EsTUFBTXVELFFBQVEsR0FBRyx3QkFBakI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUVBQXhCLEM7Ozs7Ozs7Ozs7O0FDSFA7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2xhbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xhbmRpbmcudHN4XCIpO1xuIiwiXG5jb25zdCBoZXhDb2xvclRvUkdCID0gZnVuY3Rpb24oaGV4Q29sb3IpIHtcbiAgbGV0IGRldGVjdFNob3J0aGFuZCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7IC8vICMwMDAgdnMgIzAwMDAwMFxuICBoZXhDb2xvciA9IGhleENvbG9yLnJlcGxhY2UoZGV0ZWN0U2hvcnRoYW5kLCBmdW5jdGlvbihtLCByLCBnLCBiKSB7XG4gICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcbiAgfSk7XG5cbiAgY29uc3QgaGV4X2FycmF5ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleENvbG9yKTsgLy8gIzAwMDAwMCB0byAjZmZmZmZmXG4gIHJldHVybiBoZXhfYXJyYXlcbiAgICA/IHtcbiAgICAgICAgcjogcGFyc2VJbnQoaGV4X2FycmF5WzFdLCAxNiksIC8vIDAtMjU1XG4gICAgICAgIGc6IHBhcnNlSW50KGhleF9hcnJheVsyXSwgMTYpLCAvLyAwLTI1NVxuICAgICAgICBiOiBwYXJzZUludChoZXhfYXJyYXlbM10sIDE2KSAvLyAwLTI1NVxuICAgICAgfVxuICAgIDogbnVsbDtcbn07XG5cbmNvbnN0IGhleFRvUkdCQWxwaGEgPSBmdW5jdGlvbihoZXhDb2xvciwgYWxwaGEpIHtcbiAgbGV0IHJnYiA9IGhleENvbG9yVG9SR0IoaGV4Q29sb3IpO1xuICByZXR1cm4gYHJnYmEoJHtyZ2Iucn0sJHtyZ2IuZ30sJHtyZ2IuYn0sJHthbHBoYX0pYDtcbn07XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMjYwO1xuXG5jb25zdCB0cmFuc2l0aW9uID0ge1xuICB0cmFuc2l0aW9uOiBcImFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpXCJcbn07XG5cbmNvbnN0IGNvbmF0aW5lckZsdWlkID0ge1xuICBwYWRkaW5nUmlnaHQ6IFwiMTVweFwiLFxuICBwYWRkaW5nTGVmdDogXCIxNXB4XCIsXG4gIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gIHdpZHRoOiBcIjEwMCVcIlxufTtcbmNvbnN0IGNvbnRhaW5lciA9IHtcbiAgLi4uY29uYXRpbmVyRmx1aWQsXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KVwiOiB7XG4gICAgbWF4V2lkdGg6IFwiNTQwcHhcIlxuICB9LFxuICBcIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjcyMHB4XCJcbiAgfSxcbiAgXCJAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpXCI6IHtcbiAgICBtYXhXaWR0aDogXCI5NjBweFwiXG4gIH0sXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjExNDBweFwiXG4gIH1cbn07XG5cbmNvbnN0IGJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMHB4IDMwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCA0cHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiXG59O1xuXG5jb25zdCBjYXJkID0ge1xuICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIG1hcmdpbjogXCIyNXB4IDBcIixcbiAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNClcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuODcpXCIsXG4gIGJhY2tncm91bmQ6IFwiI2ZmZlwiXG59O1xuXG5jb25zdCBkZWZhdWx0Rm9udCA9IHtcbiAgZm9udEZhbWlseTogJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZicsXG4gIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gIGxpbmVIZWlnaHQ6IFwiMS41ZW1cIlxufTtcblxuY29uc3QgcHJpbWFyeUNvbG9yID0gXCIjOWMyN2IwXCI7XG5jb25zdCB3YXJuaW5nQ29sb3IgPSBcIiNmZjk4MDBcIjtcbmNvbnN0IGRhbmdlckNvbG9yID0gXCIjZjQ0MzM2XCI7XG5jb25zdCBzdWNjZXNzQ29sb3IgPSBcIiM0Y2FmNTBcIjtcbmNvbnN0IGluZm9Db2xvciA9IFwiIzAwYWNjMVwiO1xuY29uc3Qgcm9zZUNvbG9yID0gXCIjZTkxZTYzXCI7XG5jb25zdCBncmF5Q29sb3IgPSBcIiM5OTk5OTlcIjtcblxuY29uc3QgcHJpbWFyeUJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHByaW1hcnlDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgcHJpbWFyeUNvbG9yLFxuICAgIDAuMlxuICApfWBcbn07XG5jb25zdCBpbmZvQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDEycHggMjBweCAtMTBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgaW5mb0NvbG9yLFxuICAgIDAuMjhcbiAgKX0sIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBpbmZvQ29sb3IsXG4gICAgMC4yXG4gICl9YFxufTtcbmNvbnN0IHN1Y2Nlc3NCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBzdWNjZXNzQ29sb3IsXG4gICAgMC4yOFxuICApfSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHN1Y2Nlc3NDb2xvcixcbiAgICAwLjJcbiAgKX1gXG59O1xuY29uc3Qgd2FybmluZ0JveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHdhcm5pbmdDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgd2FybmluZ0NvbG9yLFxuICAgIDAuMlxuICApfWBcbn07XG5jb25zdCBkYW5nZXJCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBkYW5nZXJDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgZGFuZ2VyQ29sb3IsXG4gICAgMC4yXG4gICl9YFxufTtcbmNvbnN0IHJvc2VCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgNHB4IDIwcHggMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBcIiMwMDBcIixcbiAgICAwLjE0XG4gICl9LCAwIDdweCAxMHB4IC01cHggJHtoZXhUb1JHQkFscGhhKHJvc2VDb2xvciwgMC40KX1gXG59O1xuXG5jb25zdCB3YXJuaW5nQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2ZmYTcyNiwgI2ZiOGMwMClcIixcbiAgLi4ud2FybmluZ0JveFNoYWRvd1xufTtcbmNvbnN0IHN1Y2Nlc3NDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNjZiYjZhLCAjNDNhMDQ3KVwiLFxuICAuLi5zdWNjZXNzQm94U2hhZG93XG59O1xuY29uc3QgZGFuZ2VyQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2VmNTM1MCwgI2U1MzkzNSlcIixcbiAgLi4uZGFuZ2VyQm94U2hhZG93XG59O1xuY29uc3QgaW5mb0NhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMyNmM2ZGEsICMwMGFjYzEpXCIsXG4gIC4uLmluZm9Cb3hTaGFkb3dcbn07XG5jb25zdCBwcmltYXJ5Q2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2FiNDdiYywgIzhlMjRhYSlcIixcbiAgLi4ucHJpbWFyeUJveFNoYWRvd1xufTtcbmNvbnN0IHJvc2VDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWM0MDdhLCAjZDgxYjYwKVwiLFxuICAuLi5yb3NlQm94U2hhZG93XG59O1xuY29uc3QgY2FyZEFjdGlvbnMgPSB7XG4gIG1hcmdpbjogXCIwIDIwcHggMTBweFwiLFxuICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZWVlZWVlXCIsXG4gIGhlaWdodDogXCJhdXRvXCIsXG4gIC4uLmRlZmF1bHRGb250XG59O1xuXG5jb25zdCBjYXJkSGVhZGVyID0ge1xuICBtYXJnaW46IFwiLTMwcHggMTVweCAwXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgcGFkZGluZzogXCIxNXB4XCJcbn07XG5cbmNvbnN0IGRlZmF1bHRCb3hTaGFkb3cgPSB7XG4gIGJvcmRlcjogXCIwXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMHB4IDIwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCAzcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxuICBwYWRkaW5nOiBcIjEwcHggMFwiLFxuICB0cmFuc2l0aW9uOiBcImFsbCAxNTBtcyBlYXNlIDBzXCJcbn07XG5cbmNvbnN0IHRpdGxlID0ge1xuICBjb2xvcjogXCIjM0M0ODU4XCIsXG4gIG1hcmdpbjogXCIxLjc1cmVtIDAgMC44NzVyZW1cIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICBmb250RmFtaWx5OiBgXCJSb2JvdG8gU2xhYlwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZmBcbn07XG5cbmNvbnN0IHNtYWxsVGl0bGUgPSB7XG4gIC4uLnRpdGxlLFxuICBtYXJnaW5Ub3A6IFwiLjYyNXJlbVwiXG59O1xuXG5jb25zdCBjYXJkVGl0bGUgPSB7XG4gIC4uLnNtYWxsVGl0bGUsXG4gIG1hcmdpblRvcDogXCIuNjI1cmVtXCJcbn07XG5cbmNvbnN0IGNhcmRMaW5rID0ge1xuICBcIiYgKyAkY2FyZExpbmtcIjoge1xuICAgIG1hcmdpbkxlZnQ6IFwiMS4yNXJlbVwiXG4gIH1cbn07XG5cbmNvbnN0IGNhcmRTdWJ0aXRsZSA9IHtcbiAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgbWFyZ2luVG9wOiBcIi0uMzc1cmVtXCJcbn07XG5cbmV4cG9ydCB7XG4gIGhleFRvUkdCQWxwaGEsXG4gIC8vdmFyaWFibGVzXG4gIGRyYXdlcldpZHRoLFxuICB0cmFuc2l0aW9uLFxuICBjb250YWluZXIsXG4gIGNvbmF0aW5lckZsdWlkLFxuICBib3hTaGFkb3csXG4gIGNhcmQsXG4gIGRlZmF1bHRGb250LFxuICBwcmltYXJ5Q29sb3IsXG4gIHdhcm5pbmdDb2xvcixcbiAgZGFuZ2VyQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgaW5mb0NvbG9yLFxuICByb3NlQ29sb3IsXG4gIGdyYXlDb2xvcixcbiAgcHJpbWFyeUJveFNoYWRvdyxcbiAgaW5mb0JveFNoYWRvdyxcbiAgc3VjY2Vzc0JveFNoYWRvdyxcbiAgd2FybmluZ0JveFNoYWRvdyxcbiAgZGFuZ2VyQm94U2hhZG93LFxuICByb3NlQm94U2hhZG93LFxuICB3YXJuaW5nQ2FyZEhlYWRlcixcbiAgc3VjY2Vzc0NhcmRIZWFkZXIsXG4gIGRhbmdlckNhcmRIZWFkZXIsXG4gIGluZm9DYXJkSGVhZGVyLFxuICBwcmltYXJ5Q2FyZEhlYWRlcixcbiAgcm9zZUNhcmRIZWFkZXIsXG4gIGNhcmRBY3Rpb25zLFxuICBjYXJkSGVhZGVyLFxuICBkZWZhdWx0Qm94U2hhZG93LFxuICB0aXRsZSxcbiAgc21hbGxUaXRsZSxcbiAgY2FyZFRpdGxlLFxuICBjYXJkTGluayxcbiAgY2FyZFN1YnRpdGxlXG59O1xuIiwiaW1wb3J0IHtcbiAgaGV4VG9SR0JBbHBoYSxcbiAgZ3JheUNvbG9yLFxuICByb3NlQ29sb3IsXG4gIHByaW1hcnlDb2xvcixcbiAgaW5mb0NvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIHdhcm5pbmdDb2xvcixcbiAgZGFuZ2VyQ29sb3Jcbn0gZnJvbSBcIi4uLy4uL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gIGJ1dHRvbjoge1xuICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXG4gICAgbWluV2lkdGg6IFwiYXV0b1wiLFxuICAgIGJhY2tncm91bmRDb2xvcjogZ3JheUNvbG9yLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoMTUzLCAxNTMsIDE1MywgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgxNTMsIDE1MywgMTUzLCAwLjEyKVwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgcGFkZGluZzogXCIxMnB4IDMwcHhcIixcbiAgICBtYXJnaW46IFwiLjMxMjVyZW0gMXB4XCIsXG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjBcIixcbiAgICB3aWxsQ2hhbmdlOiBcImJveC1zaGFkb3csIHRyYW5zZm9ybVwiLFxuICAgIHRyYW5zaXRpb246XG4gICAgICBcImJveC1zaGFkb3cgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSlcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTcxNDNcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgIHRvdWNoQWN0aW9uOiBcIm1hbmlwdWxhdGlvblwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKVwiXG4gICAgfSxcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIHRvcDogXCIwXCIsXG4gICAgICBmb250U2l6ZTogXCIxLjFyZW1cIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxuICAgIH0sXG4gICAgXCImIHN2Z1wiOiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIHRvcDogXCIwXCIsXG4gICAgICB3aWR0aDogXCIxOHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMThweFwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiNHB4XCIsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiXG4gICAgfSxcbiAgICBcIiYkanVzdEljb25cIjoge1xuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgICBtYXJnaW5SaWdodDogXCIwcHhcIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICBsZWZ0OiBcIjBweFwiLFxuICAgICAgICB0b3A6IFwiMHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNDFweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGZ1bGxXaWR0aDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIlxuICB9LFxuICBwcmltYXJ5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBwcmltYXJ5Q29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKHByaW1hcnlDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YFxuICAgIH1cbiAgfSxcbiAgaW5mbzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yLFxuICAgIGJveFNoYWRvdzogYDAgMnB4IDJweCAwICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIGluZm9Db2xvcixcbiAgICAgIDAuMTRcbiAgICApfSwgMCAzcHggMXB4IC0ycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgaW5mb0NvbG9yLFxuICAgICAgMC4yXG4gICAgKX0sIDAgMXB4IDVweCAwICR7aGV4VG9SR0JBbHBoYShpbmZvQ29sb3IsIDAuMTIpfWAsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3IsXG4gICAgICBib3hTaGFkb3c6IGAwIDE0cHggMjZweCAtMTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIGluZm9Db2xvcixcbiAgICAgICAgMC40MlxuICAgICAgKX0sIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIGluZm9Db2xvcixcbiAgICAgICAgMC4yXG4gICAgICApfWBcbiAgICB9XG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgICBib3hTaGFkb3c6IGAwIDJweCAycHggMCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBzdWNjZXNzQ29sb3IsXG4gICAgICAwLjE0XG4gICAgKX0sIDAgM3B4IDFweCAtMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIHN1Y2Nlc3NDb2xvcixcbiAgICAgIDAuMlxuICAgICl9LCAwIDFweCA1cHggMCAke2hleFRvUkdCQWxwaGEoc3VjY2Vzc0NvbG9yLCAwLjEyKX1gLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yLFxuICAgICAgYm94U2hhZG93OiBgMCAxNHB4IDI2cHggLTEycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgICBzdWNjZXNzQ29sb3IsXG4gICAgICAgIDAuNDJcbiAgICAgICl9LCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgICBzdWNjZXNzQ29sb3IsXG4gICAgICAgIDAuMlxuICAgICAgKX1gXG4gICAgfVxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgd2FybmluZ0NvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICB3YXJuaW5nQ29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKHdhcm5pbmdDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgd2FybmluZ0NvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgd2FybmluZ0NvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YFxuICAgIH1cbiAgfSxcbiAgZGFuZ2VyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvcixcbiAgICBib3hTaGFkb3c6IGAwIDJweCAycHggMCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBkYW5nZXJDb2xvcixcbiAgICAgIDAuMTRcbiAgICApfSwgMCAzcHggMXB4IC0ycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgZGFuZ2VyQ29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKGRhbmdlckNvbG9yLCAwLjEyKX1gLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgICBib3hTaGFkb3c6IGAwIDE0cHggMjZweCAtMTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIGRhbmdlckNvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgZGFuZ2VyQ29sb3IsXG4gICAgICAgIDAuMlxuICAgICAgKX1gXG4gICAgfVxuICB9LFxuICByb3NlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBwcmltYXJ5Q29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKHByaW1hcnlDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvc2VDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YFxuICAgIH1cbiAgfSxcbiAgd2hpdGU6IHtcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgY29sb3I6IGdyYXlDb2xvclxuICAgIH1cbiAgfSxcbiAgdHdpdHRlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTVhY2VlXCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSg4NSwgMTcyLCAyMzgsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDg1LCAxNzIsIDIzOCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSg4NSwgMTcyLCAyMzgsIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXMsJjp2aXNpdGVkXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTVhY2VlXCIsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSg4NSwgMTcyLCAyMzgsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSg4NSwgMTcyLCAyMzgsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgZmFjZWJvb2s6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNiNTk5OFwiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoNTksIDg5LCAxNTIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDU5LCA4OSwgMTUyLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDU5LCA4OSwgMTUyLCAwLjEyKVwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjM2I1OTk4XCIsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSg1OSwgODksIDE1MiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDU5LCA4OSwgMTUyLCAwLjIpXCJcbiAgICB9XG4gIH0sXG4gIGdvb2dsZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZGQ0YjM5XCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSgyMjEsIDc1LCA1NywgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMjIxLCA3NSwgNTcsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMjIxLCA3NSwgNTcsIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNkZDRiMzlcIixcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDIyMSwgNzUsIDU3LCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMjIxLCA3NSwgNTcsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgZ2l0aHViOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDUxLCA1MSwgNTEsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4xMilcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzMzMzM1wiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoNTEsIDUxLCA1MSwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDUxLCA1MSwgNTEsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgc2ltcGxlOiB7XG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgIH0sXG4gICAgXCImJHByaW1hcnlcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogcHJpbWFyeUNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkaW5mb1wiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiBpbmZvQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRzdWNjZXNzXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IHN1Y2Nlc3NDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJHdhcm5pbmdcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogd2FybmluZ0NvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkcm9zZVwiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiByb3NlQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRkYW5nZXJcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogZGFuZ2VyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiR0d2l0dGVyXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IFwiIzU1YWNlZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkZmFjZWJvb2tcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogXCIjM2I1OTk4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRnb29nbGVcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogXCIjZGQ0YjM5XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRnaXRodWJcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogXCIjMzMzMzMzXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHRyYW5zcGFyZW50OiB7XG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgIH1cbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBvcGFjaXR5OiBcIjAuNjVcIixcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuICB9LFxuICBsZzoge1xuICAgIHBhZGRpbmc6IFwiMS4xMjVyZW0gMi4yNXJlbVwiLFxuICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjMzMzMzM1wiLFxuICAgIGJvcmRlclJhZGl1czogXCIwLjJyZW1cIlxuICB9LFxuICBzbToge1xuICAgIHBhZGRpbmc6IFwiMC40MDYyNXJlbSAxLjI1cmVtXCIsXG4gICAgZm9udFNpemU6IFwiMC42ODc1cmVtXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4ycmVtXCJcbiAgfSxcbiAgcm91bmQ6IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiMzBweFwiXG4gIH0sXG4gIGJsb2NrOiB7XG4gICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCJcbiAgfSxcbiAgbGluazoge1xuICAgIFwiJiwmOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBjb2xvcjogXCIjOTk5OTk5XCIsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgfVxuICB9LFxuICBqdXN0SWNvbjoge1xuICAgIHBhZGRpbmdMZWZ0OiBcIjEycHhcIixcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMTJweFwiLFxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICBoZWlnaHQ6IFwiNDFweFwiLFxuICAgIG1pbldpZHRoOiBcIjQxcHhcIixcbiAgICB3aWR0aDogXCI0MXB4XCIsXG4gICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiBzdmcsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCJcbiAgICB9LFxuICAgIFwiJiRsZ1wiOiB7XG4gICAgICBoZWlnaHQ6IFwiNTdweFwiLFxuICAgICAgbWluV2lkdGg6IFwiNTdweFwiLFxuICAgICAgd2lkdGg6IFwiNTdweFwiLFxuICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICAgIGZvbnRTaXplOiBcIjMycHhcIixcbiAgICAgICAgbGluZUhlaWdodDogXCI1NnB4XCJcbiAgICAgIH0sXG4gICAgICBcIiYgc3ZnXCI6IHtcbiAgICAgICAgd2lkdGg6IFwiMzJweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzJweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkc21cIjoge1xuICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgIG1pbldpZHRoOiBcIjMwcHhcIixcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjI5cHhcIlxuICAgICAgfSxcbiAgICAgIFwiJiBzdmdcIjoge1xuICAgICAgICB3aWR0aDogXCIxN3B4XCIsXG4gICAgICAgIGhlaWdodDogXCIxN3B4XCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1dHRvblN0eWxlO1xuIiwiY29uc3QgY2FyZEJvZHlTdHlsZSA9IHtcbiAgY2FyZEJvZHk6IHtcbiAgICBwYWRkaW5nOiBcIjAuOTM3NXJlbSAxLjg3NXJlbVwiLFxuICAgIGZsZXg6IFwiMSAxIGF1dG9cIixcbiAgICBjb2xvcjogXCJpbmhlcml0XCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZEJvZHlTdHlsZTtcbiIsImNvbnN0IGNhcmRGb290ZXJTdHlsZSA9IHtcbiAgY2FyZEZvb3Rlcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgcGFkZGluZzogXCIwLjkzNzVyZW0gMS44NzVyZW1cIixcbiAgICBjb2xvcjogXCJpbmhlcml0XCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZEZvb3RlclN0eWxlO1xuIiwiY29uc3QgY2FyZFN0eWxlID0ge1xuICBjYXJkOiB7XG4gICAgYm9yZGVyOiBcIjBcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgbWluV2lkdGg6IFwiMFwiLFxuICAgIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcbiAgICBmb250U2l6ZTogXCIuODc1cmVtXCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMzAwbXMgbGluZWFyXCJcbiAgfSxcbiAgY2FyZFBsYWluOiB7XG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gIH0sXG4gIGNhcmRDYXJvdXNlbDoge1xuICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRTdHlsZTtcbiIsImltcG9ydCB7XG4gIHByaW1hcnlDb2xvcixcbiAgZGFuZ2VyQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgZGVmYXVsdEZvbnRcbn0gZnJvbSBcIi4uLy4uL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuY29uc3QgY3VzdG9tSW5wdXRTdHlsZSA9IHtcbiAgZGlzYWJsZWQ6IHtcbiAgICBcIiY6YmVmb3JlXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50ICFpbXBvcnRhbnRcIlxuICAgIH1cbiAgfSxcbiAgdW5kZXJsaW5lOiB7XG4gICAgXCImOmhvdmVyOm5vdCgkZGlzYWJsZWQpOmJlZm9yZSwmOmJlZm9yZVwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogXCIjRDJEMkQyICFpbXBvcnRhbnRcIixcbiAgICAgIGJvcmRlcldpZHRoOiBcIjFweCAhaW1wb3J0YW50XCJcbiAgICB9LFxuICAgIFwiJjphZnRlclwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogcHJpbWFyeUNvbG9yXG4gICAgfVxuICB9LFxuICB1bmRlcmxpbmVFcnJvcjoge1xuICAgIFwiJjphZnRlclwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogZGFuZ2VyQ29sb3JcbiAgICB9XG4gIH0sXG4gIHVuZGVybGluZVN1Y2Nlc3M6IHtcbiAgICBcIiY6YWZ0ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IHN1Y2Nlc3NDb2xvclxuICAgIH1cbiAgfSxcbiAgd2hpdGVVbmRlcmxpbmU6IHtcbiAgICBcIiY6aG92ZXI6bm90KCRkaXNhYmxlZCk6YmVmb3JlLCY6YmVmb3JlXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBcIiNGRkZGRkZcIlxuICAgIH0sXG4gICAgXCImOmFmdGVyXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBcIiNGRkZGRkZcIlxuICAgIH1cbiAgfSxcbiAgbGFiZWxSb290OiB7XG4gICAgLi4uZGVmYXVsdEZvbnQsXG4gICAgY29sb3I6IFwiI0FBQUFBQSAhaW1wb3J0YW50XCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgbGluZUhlaWdodDogXCIxLjQyODU3XCIsXG4gICAgdG9wOiBcIjEwcHhcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcInVuc2V0XCIsXG4gICAgXCImICsgJHVuZGVybGluZVwiOiB7XG4gICAgICBtYXJnaW5Ub3A6IFwiMHB4XCJcbiAgICB9XG4gIH0sXG4gIGxhYmVsUm9vdEVycm9yOiB7XG4gICAgY29sb3I6IGRhbmdlckNvbG9yICsgXCIgIWltcG9ydGFudFwiXG4gIH0sXG4gIGxhYmVsUm9vdFN1Y2Nlc3M6IHtcbiAgICBjb2xvcjogc3VjY2Vzc0NvbG9yICsgXCIgIWltcG9ydGFudFwiXG4gIH0sXG4gIGZvcm1Db250cm9sOiB7XG4gICAgbWFyZ2luOiBcIjAgMCAxN3B4IDBcIixcbiAgICBwYWRkaW5nVG9wOiBcIjI3cHhcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiJiBzdmcsJiAuZmFiLCYgLmZhciwmIC5mYWwsJiAuZmFzLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgIGNvbG9yOiBcIiM0OTUwNTdcIlxuICAgIH1cbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBjb2xvcjogXCIjNDk1MDU3XCIsXG4gICAgaGVpZ2h0OiBcInVuc2V0XCIsXG4gICAgXCImLCY6OnBsYWNlaG9sZGVyXCI6IHtcbiAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgIGZvbnRGYW1pbHk6ICdcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxuICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1N1wiLFxuICAgICAgb3BhY2l0eTogXCIxXCJcbiAgICB9LFxuICAgIFwiJjo6cGxhY2Vob2xkZXJcIjoge1xuICAgICAgY29sb3I6IFwiI0FBQUFBQVwiXG4gICAgfVxuICB9LFxuICB3aGl0ZUlucHV0OiB7XG4gICAgXCImLCY6OnBsYWNlaG9sZGVyXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIG9wYWNpdHk6IFwiMVwiXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21JbnB1dFN0eWxlO1xuIiwiaW1wb3J0IHtcbiAgcHJpbWFyeUNvbG9yLFxuICB3YXJuaW5nQ29sb3IsXG4gIGRhbmdlckNvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIGluZm9Db2xvcixcbiAgcm9zZUNvbG9yLFxuICBncmF5Q29sb3IsXG4gIHRpdGxlXG59IGZyb20gXCIuLi8uLi8vbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuXG5jb25zdCBpbmZvU3R5bGUgPSB7XG4gIGluZm9BcmVhOiB7XG4gICAgbWF4V2lkdGg6IFwiMzYwcHhcIixcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgcGFkZGluZzogXCIwcHhcIlxuICB9LFxuICBpY29uV3JhcHBlcjoge1xuICAgIGZsb2F0OiBcImxlZnRcIixcbiAgICBtYXJnaW5Ub3A6IFwiMjRweFwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjEwcHhcIlxuICB9LFxuICBwcmltYXJ5OiB7XG4gICAgY29sb3I6IHByaW1hcnlDb2xvclxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgY29sb3I6IHdhcm5pbmdDb2xvclxuICB9LFxuICBkYW5nZXI6IHtcbiAgICBjb2xvcjogZGFuZ2VyQ29sb3JcbiAgfSxcbiAgc3VjY2Vzczoge1xuICAgIGNvbG9yOiBzdWNjZXNzQ29sb3JcbiAgfSxcbiAgaW5mbzoge1xuICAgIGNvbG9yOiBpbmZvQ29sb3JcbiAgfSxcbiAgcm9zZToge1xuICAgIGNvbG9yOiByb3NlQ29sb3JcbiAgfSxcbiAgZ3JheToge1xuICAgIGNvbG9yOiBncmF5Q29sb3JcbiAgfSxcbiAgaWNvbjoge1xuICAgIHdpZHRoOiBcIjM2cHhcIixcbiAgICBoZWlnaHQ6IFwiMzZweFwiXG4gIH0sXG4gIGRlc2NyaXB0aW9uV3JhcHBlcjoge1xuICAgIGNvbG9yOiBncmF5Q29sb3IsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgfSxcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgY29sb3I6IGdyYXlDb2xvcixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBtYXJnaW5Ub3A6IFwiMHB4XCIsXG4gICAgZm9udFNpemU6IFwiMTRweFwiXG4gIH0sXG4gIGljb25XcmFwcGVyVmVydGljYWw6IHtcbiAgICBmbG9hdDogXCJub25lXCJcbiAgfSxcbiAgaWNvblZlcnRpY2FsOiB7XG4gICAgd2lkdGg6IFwiNjFweFwiLFxuICAgIGhlaWdodDogXCI2MXB4XCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5mb1N0eWxlO1xuIiwiY29uc3QgaW1hZ2VzU3R5bGVzID0ge1xuICBpbWdGbHVpZDoge1xuICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiYXV0b1wiXG4gIH0sXG4gIGltZ1JvdW5kZWQ6IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiNnB4ICFpbXBvcnRhbnRcIlxuICB9LFxuICBpbWdSb3VuZGVkQ2lyY2xlOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJSAhaW1wb3J0YW50XCJcbiAgfSxcbiAgaW1nUmFpc2VkOiB7XG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDVweCAxNXB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjI0KSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiXG4gIH0sXG4gIGltZ0dhbGxlcnk6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjIuMTQycmVtXCJcbiAgfSxcbiAgaW1nQ2FyZFRvcDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcImNhbGMoLjI1cmVtIC0gMXB4KVwiLFxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcImNhbGMoLjI1cmVtIC0gMXB4KVwiXG4gIH0sXG4gIGltZ0NhcmRCb3R0b206IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogXCJjYWxjKC4yNXJlbSAtIDFweClcIixcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogXCJjYWxjKC4yNXJlbSAtIDFweClcIlxuICB9LFxuICBpbWdDYXJkOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJvcmRlclJhZGl1czogXCJjYWxjKC4yNXJlbSAtIDFweClcIlxuICB9LFxuICBpbWdDYXJkT3ZlcmxheToge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICByaWdodDogXCIwXCIsXG4gICAgYm90dG9tOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgICBwYWRkaW5nOiBcIjEuMjVyZW1cIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbWFnZXNTdHlsZXM7XG4iLCJpbXBvcnQgeyBjYXJkVGl0bGUsIHRpdGxlLCBzbWFsbFRpdGxlIH0gZnJvbSBcIi4uLy4uLy4uL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcbmltcG9ydCBpbWFnZXNTdHlsZSBmcm9tIFwiLi4vLi4vaW1hZ2VzU3R5bGVzLmpzXCI7XG5cbmNvbnN0IHBhY2thZ2VTdHlsZSA9IHtcbiAgc2VjdGlvbjoge1xuICAgIHBhZGRpbmc6IFwiMTBweCAwXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgLi4udGl0bGUsXG4gICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcbiAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXG4gICAgbWluSGVpZ2h0OiBcIjEwcHhcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH0sXG4gIC4uLmltYWdlc1N0eWxlLFxuICBpdGVtR3JpZDoge1xuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICBjb2xvcjogXCJpbmhlcml0XCJcbiAgfSxcbiAgY2FyZFRpdGxlOiB7XG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH0sXG4gIHNtYWxsVGl0bGU6IHtcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIlxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiXG4gIH0sXG4gIGp1c3RpZnlDZW50ZXI6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXIgIWltcG9ydGFudFwiXG4gIH0sXG4gIHNvY2lhbHM6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgIGxlZnQ6IFwiMFwiLFxuICAgIHRvcDogXCIwXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEwcHhcIixcbiAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH0sXG4gIG1hcmdpbjU6IHtcbiAgICBtYXJnaW46IFwiNXB4XCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFja2FnZVN0eWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmQuanNcIjtcbmltcG9ydCBDYXJkQm9keSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkQm9keS5qc1wiO1xuaW1wb3J0IENhcmRGb290ZXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZEZvb3Rlci5qc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvbGFuZGluZ1BhZ2VTZWN0aW9ucy9wYWNrYWdlU3R5bGUuanNcIjtcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2VTZWN0aW9uKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGltYWdlQ2xhc3NlcyA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3Nlcy5pbWdSYWlzZWQsXG4gICAgY2xhc3Nlcy5pbWdSb3VuZGVkQ2lyY2xlLFxuICAgIGNsYXNzZXMuaW1nRmx1aWRcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pk5vZGUuanMgbW9kdWxlcyBJIGhhdmUgYXV0aG9yZWQ6PC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MjR9IHNtPXsyNH0gbWQ9ezEyfT5cbiAgICAgICAgICAgIDxDYXJkIHBsYWluPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezI0fSBzbT17MjR9IG1kPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1HcmlkfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YHNtYWxsL3Nwb3J0c2RhdGF2ZXJzZS1ub2RlLWpzLW1vZHVsZS5wbmdgfSBhbHQ9XCJzcG9ydHNkYXRhdmVyc2Utbm9kZS1qc1wiIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFRpdGxlfT5cbiAgICAgICAgICAgICAgICBzcG9ydHNkYXRhdmVyc2VcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtjbGFzc2VzLnNtYWxsVGl0bGV9PkFsbCBjb2xsZWdpYXRlIGFuZCA2IFByb2Zlc3Npb25hbCBzcG9ydHM8L3NtYWxsPlxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICBTdXBwb3J0IGZvciB0aGUgZm9sbG93aW5nIHR5cGVzIG9mIGRhdGEgZnJvbSBFU1BOJ3MgZW5kcG9pbnRzOiBwbGF5LWJ5LXBsYXkgKGluY2x1ZGluZyBzaG90IGxvY2F0aW9uIGRhdGEgd2hlbiBhdmFpbGFibGUpLCBzY29yZXMsIHNjaGVkdWxlLCBzdGFuZGluZ3MsIHJhbmtpbmdzIChub3QgYXZhaWxhYmxlIGZvciBwcm9mZXNzaW9uYWwgc3BvcnRzKVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBSZWNydWl0aW5nIGRhdGEgZnJvbSAyNDdTcG9ydHMgYXZhaWxhYmxlIGZvcjogbWVuJ3MgY29sbGVnZSBiYXNrZXRiYWxsLCBjb2xsZWdlIGZvb3RiYWxsLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUaGUgZm9sbG93aW5nIHNwb3J0cyBhcmUgYXZhaWxhYmxlIGZyb20gRVNQTjogQ29sbGVnZSBCYXNrZXRiYWxsLCBXb21lbidzIENvbGxlZ2UgQmFza2V0YmFsbCwgQ29sbGVnZSBGb290YmFsbCwgV05CQSwgTkJBLCBORkwsIGFuZCBOSEwuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEFsbCB0ZWFtIHNwb3J0cyBvbiB0aGUgTkNBQSB3ZWJzaXRlOiAnZm9vdGJhbGwnLCAnYmFza2V0YmFsbC1tZW4nLCAnYmFza2V0YmFsbC13b21lbicsICdzb2NjZXItbWVuJywgJ3NvY2Nlci13b21lbicsICdmaWVsZGhvY2tleScsICd2b2xsZXliYWxsLXdvbWVuJywgXG4gICAgICAgICAgICAgICAgJ2ljZWhvY2tleS1tZW4nLCAnaWNlaG9ja2V5LXdvbWVuJywgJ2Jhc2ViYWxsJywnYmVhY2gtdm9sbGV5YmFsbCcsICdsYWNyb3NzZS1tZW4nLCAnbGFjcm9zc2Utd29tZW4nLCAndm9sbGV5YmFsbC1tZW4nXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+UiBwYWNrYWdlcyBJIGhhdmUgYXV0aG9yZWQ6PC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPENhcmQgcGxhaW4+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtR3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvY2Zic2NyYXBSLWxvZ28ucG5nYH0gYWx0PVwiY2Zic2NyYXBSXCIgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgIGNmYnNjcmFwUlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuc21hbGxUaXRsZX0+Q29sbGVnZSBGb290YmFsbCAtIFI8L3NtYWxsPlxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICBjZmJzY3JhcFIgaXMgYW4gUiBwYWNrYWdlIGZvciB3b3JraW5nIHdpdGggQ29sbGVnZSBGb290YmFsbCBkYXRhLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIEl0IGlzIGFuIFIgQVBJIHdyYXBwZXIgYXJvdW5kIGh0dHBzOi8vY29sbGVnZWZvb3RiYWxsZGF0YS5jb20vLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIEl0IHByb3ZpZGVzIHVzZXJzIHRoZSBjYXBhYmlsaXR5IHRvIHJldHJpZXZlIGRhdGEgZnJvbSB0aGUgQVBJIGFuZCBzdXBwbGVtZW50IHRoYXQgZGF0YSB3aXRoXG4gICAgICAgICAgICAgICAgRXhwZWN0ZWQgUG9pbnRzIEFkZGVkL1dpbiBQcm9iYWJpbGl0eSBhZGRlZCBtZXRyaWNzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPENhcmQgcGxhaW4+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtR3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMva2VucG9tUi1sb2dvLnBuZ2B9IGFsdD1cImtlbnBvbVJcIiAvPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRUaXRsZX0+XG4gICAgICAgICAgICAgICAga2VucG9tUlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuc21hbGxUaXRsZX0+TWVuJ3MgQ29sbGVnZSBCYXNrZXRiYWxsIC0gUjwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIGtlbnBvbVIgaXMgYW4gUiBwYWNrYWdlIGZvciB3b3JraW5nIHdpdGggbWVuJ3MgY29sbGVnZSBiYXNrZXRiYWxsIGRhdGEuXG4gICAgICAgICAgICAgICAgQSBzY3JhcGluZyBhbmQgYWdncmVnYXRpbmcgaW50ZXJmYWNlIGZvciBLZW4gUG9tZXJveeKAmXMgY29sbGVnZSBiYXNrZXRiYWxsIHN0YXRpc3RpY3Mgd2Vic2l0ZSwga2VucG9tLmNvbS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICBBbHNvIHByb3ZpZGVzIHN1cHBvcnQgZm9yIEVTUE7igJlzIG1lbidzIGNvbGxlZ2UgYmFza2V0YmFsbCBnYW1lIGRhdGEgYW5kIE5DQUEgTkVUIFJhbmtpbmdzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPENhcmQgcGxhaW4+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtR3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvd2Vob29wLWxvZ28ucG5nYH0gYWx0PVwid2Vob29wXCIgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFRpdGxlfT5cbiAgICAgICAgICAgICAgICB3ZWhvb3BcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtjbGFzc2VzLnNtYWxsVGl0bGV9PldOQkEgYW5kIFdvbWVuJ3MgQ29sbGVnZSBCYXNrZXRiYWxsIC0gUjwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIHdlaG9vcCBpcyBhbiBSIHBhY2thZ2UgZm9yIHdvcmtpbmcgd2l0aCBXTkJBIGFuZCB3b21lbidzIGNvbGxlZ2UgYmFza2V0YmFsbCBkYXRhLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIFByb3ZpZGVzIHN1cHBvcnQgZm9yIEVTUE7igJlzIFdOQkEgYW5kIHdvbWVuJ3MgY29sbGVnZSBiYXNrZXRiYWxsIGdhbWUgZGF0YSBhbmQgTkNBQSBORVQgUmFua2luZ3MuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIHNlY29uZCByb3cgb2YgcGFja2FnZXMgKi99XG4gICAgICA8ZGl2PlxuICAgICAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fT5cbiAgICAgICAgICAgIDxDYXJkIHBsYWluPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbUdyaWR9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaW1hZ2VzL2NmYnJlY3J1aXRSLWxvZ28ucG5nYH0gYWx0PVwiY2ZicmVjcnVpdFJcIiAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgIGNmYnJlY3J1aXRSXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5zbWFsbFRpdGxlfT5Db2xsZWdlIEZvb3RiYWxsIFJlY3J1aXRpbmcgLSBSPC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgY2ZicmVjcnVpdFIgaXMgYW4gUiBwYWNrYWdlIGZvciB3b3JraW5nIHdpdGggY29sbGVnZSBmb290YmFsbCByZWNydWl0aW5nIGRhdGEuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17NH0+XG4gICAgICAgICAgICA8Q2FyZCBwbGFpbj5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1HcmlkfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy9jZmJzY3JhcFItZGF0YS1yZXBvLnBuZ2B9IGFsdD1cImNmYnNjcmFwUi1kYXRhXCIgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgIGNmYnNjcmFwUi1kYXRhXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5zbWFsbFRpdGxlfT5Db2xsZWdlIEZvb3RiYWxsIC0gRGF0YTwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIGNmYnNjcmFwUi1kYXRhIGlzIGEgcmVwb3NpdG9yeSBmb3Igd29ya2luZyB3aXRoIENGQiBkYXRhLiAyMDE0LTIwMjAgZGF0YSBpbmNsdWRlZCBpbiBjc3YsIHJkcywgYW5kIHBhcnF1ZXQgZm9ybWF0LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPENhcmQgcGxhaW4+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtR3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMva2VucG9tUi1kYXRhLXJlcG8ucG5nYH0gYWx0PVwia2VucG9tUi1kYXRhXCIgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGV9PlxuICAgICAgICAgICAgICAgIGtlbnBvbVItZGF0YVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuc21hbGxUaXRsZX0+TWVuJ3MgQ29sbGVnZSBCYXNrZXRiYWxsIC0gUjwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIGtlbnBvbVIgY29udGFpbnMgZGF0YSBmb3IgbW9zdCB0ZWFtcywgcGxheWVycyBhbmQgY29hY2hlcyBmcm9tIDIwMDItMjAyMC4gQWxsIGRhdGEgcHJvdmlkZWQgaW4gY3N2IGZvcm1hdC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbmltcG9ydCBDaGF0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiO1xuaW1wb3J0IFZlcmlmaWVkVXNlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlclwiO1xuaW1wb3J0IEZpbmdlcnByaW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmluZ2VycHJpbnRcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc1wiO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzXCI7XG5pbXBvcnQgSW5mb0FyZWEgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0luZm9BcmVhL0luZm9BcmVhLmpzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RTZWN0aW9uKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICA8R3JpZENvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezh9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlRhbGsgRGF0YSB0byBNZTwvaDI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBJIGFtIGFsd2F5cyBsb29raW5nIHRvIGFkZCBtb3JlIGRldmVsb3BlcnMgdG8gdGhlIFNwb3J0c0RhdGF2ZXJzZSBkZXZlbG9wZXIgZ3JvdXAgd2hvIHNoYXJlIGNvbW1vbiBjYXVzZVxuICAgICAgICAgICAgd2l0aCB0aGUgYWltIHRvIG1ha2UgdGhlIHNwb3J0cyBkYXRhIGluZHVzdHJ5IG1vcmUgZGl2ZXJzZSBhbmQgaW5jbHVzaXZlLiBcbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgPEdyaWRDb250YWluZXIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs4fT5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIFRoZSBTcG9ydHNEYXRhdmVyc2UgaXMgYSBjb25jZXB0IEkgaGF2ZSBiZWVuIHdvcmtpbmcgb24gd2l0aCBhIGhhbmRmdWwgb2Ygb3RoZXIgcGVvcGxlIHRvIGNyZWF0ZSBhbmQgZGV2ZWxvcCBwYWNrYWdlcyBpbiBQeXRob24sIFIgYW5kIE5vZGUuanMuXG4gICAgICAgICAgICBBbW9uZyB0aGUgZ29hbHMgb2YgdGhlIFNwb3J0c0RhdGF2ZXJzZSBpcyB0byBmbGF0dGVuIHRoZSBsZWFybmluZyBjdXJ2ZSB0aGUgYXZlcmFnZSB1c2VyIGhhcyB0byBnbyB0aHJvdWdoIHRvIGdldCBhY2Nlc3MgdG8gdGhlIGhpZ2hlc3QgcXVhbGl0eSBvcGVuLXNvdXJjZSBkYXRhIGFuZCBhbmFseXRpY3NcbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgey8qIDxkaXY+XG4gICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPEluZm9BcmVhXG4gICAgICAgICAgICAgIHRpdGxlPVwiRnJlZSBDaGF0XCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEaXZpZGUgZGV0YWlscyBhYm91dCB5b3VyIHByb2R1Y3Qgb3IgYWdlbmN5IHdvcmsgaW50byBwYXJ0cy4gV3JpdGUgYSBmZXcgbGluZXMgYWJvdXQgZWFjaCBvbmUuIEEgcGFyYWdyYXBoIGRlc2NyaWJpbmcgYSBmZWF0dXJlIHdpbGwgYmUgZW5vdWdoLlwiXG4gICAgICAgICAgICAgIGljb249e0NoYXR9XG4gICAgICAgICAgICAgIGljb25Db2xvcj1cImluZm9cIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPEluZm9BcmVhXG4gICAgICAgICAgICAgIHRpdGxlPVwiVmVyaWZpZWQgVXNlcnNcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpdmlkZSBkZXRhaWxzIGFib3V0IHlvdXIgcHJvZHVjdCBvciBhZ2VuY3kgd29yayBpbnRvIHBhcnRzLiBXcml0ZSBhIGZldyBsaW5lcyBhYm91dCBlYWNoIG9uZS4gQSBwYXJhZ3JhcGggZGVzY3JpYmluZyBhIGZlYXR1cmUgd2lsbCBiZSBlbm91Z2guXCJcbiAgICAgICAgICAgICAgaWNvbj17VmVyaWZpZWRVc2VyfVxuICAgICAgICAgICAgICBpY29uQ29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgdmVydGljYWxcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fT5cbiAgICAgICAgICAgIDxJbmZvQXJlYVxuICAgICAgICAgICAgICB0aXRsZT1cIkZpbmdlcnByaW50XCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEaXZpZGUgZGV0YWlscyBhYm91dCB5b3VyIHByb2R1Y3Qgb3IgYWdlbmN5IHdvcmsgaW50byBwYXJ0cy4gV3JpdGUgYSBmZXcgbGluZXMgYWJvdXQgZWFjaCBvbmUuIEEgcGFyYWdyYXBoIGRlc2NyaWJpbmcgYSBmZWF0dXJlIHdpbGwgYmUgZW5vdWdoLlwiXG4gICAgICAgICAgICAgIGljb249e0ZpbmdlcnByaW50fVxuICAgICAgICAgICAgICBpY29uQ29sb3I9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtTZWN0aW9uKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICA8R3JpZENvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxHcmlkSXRlbSBjcz17MTJ9IHNtPXsxMn0gbWQ9ezh9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pldvcmsgd2l0aCB1czwvaDI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBBcmUgeW91IGludGVyZXN0ZWQgaW4gd29ya2luZyB3aXRoIHNwb3J0cyBkYXRhLCBkZXZlbG9waW5nIG9wZW4tc291cmNlIHBhY2thZ2VzXG4gICAgICAgICAgICBhbmQgaGVscGluZyB0ZWFjaCBvdGhlcnMgdG8gZG8gdGhlIHNhbWU/IE91ciBncm91cCBpcyBkZWRpY2F0ZWQgdG8gdGhlIGNhdXNlIG9mXG4gICAgICAgICAgICB0cnlpbmcgdG8gaW5jbHVkZSBwZW9wbGUgZnJvbSBtb3JlIGRpdmVyc2UgYmFja2dyb3VuZHMgYW5kIHVuZGVycmVwcmVzZW50ZWRcbiAgICAgICAgICAgIGdyb3VwcyBpbiBzcG9ydHMuXG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIEFkZGl0aW9uYWxseSwgd2UgYXJlIG1ha2luZyB0aGUgcHVibGljbHkgYXZhaWxhYmxlIHNwb3J0c1xuICAgICAgICAgICAgZGF0YSBtdWNoIG1vcmUgYWNjZXNzaWJsZSB0byB0aGUgY29tbW9uIHBlcnNvbi4gVGhlIGRlc2lyZWQgZ29hbCBpcyB0byBjcmVhdGVcbiAgICAgICAgICAgIGEgc3VwcG9ydGl2ZSBjb21tdW5pdHkgdGhhdCB3aWxsIHByb3ZpZGUgZ3VpZGFuY2UgYW5kIG1lbnRvciB0aG9zZSB3aG8gd2FudCB0b1xuICAgICAgICAgICAgYmUgYSBwYXJ0IG9mIHRoZSBzb2x1dGlvbi4gRHJvcCBtZSBhIGJyaWVmIG1lc3NhZ2UgYmVsb3cgc28gdGhhdCBJIGNhbiByZWFjaCBvdXQgdG8geW91IVxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XG4gICAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJZb3VyIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxuICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiWW91ciBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICA8Q3VzdG9tSW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJZb3VyIE1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRBcmVhXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICByb3dzOiA1XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17NH0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRDZW50ZXJ9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCI+U2VuZCBNZXNzYWdlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5J1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcclxuaW1wb3J0IFBhcmFsbGF4IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9QYXJhbGxheC9QYXJhbGxheC5qc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBOQU1FLCBOQU1FX0FORF9ET01BSU4gfSBmcm9tICcuLi9zcmMvdHlwZXMvY29uc3RhbnRzJ1xyXG5cclxuLy8gU2VjdGlvbnMgZm9yIHRoaXMgcGFnZVxyXG5pbXBvcnQgUHJvZHVjdFNlY3Rpb24gZnJvbSBcIi4uL3BhZ2VzLXNlY3Rpb25zL0xhbmRpbmdQYWdlLVNlY3Rpb25zL1Byb2R1Y3RTZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBQYWNrYWdlU2VjdGlvbiBmcm9tIFwiLi4vcGFnZXMtc2VjdGlvbnMvTGFuZGluZ1BhZ2UtU2VjdGlvbnMvUGFja2FnZVNlY3Rpb24uanNcIjtcclxuaW1wb3J0IFdvcmtTZWN0aW9uIGZyb20gXCIuLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9Xb3JrU2VjdGlvbi5qc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IGxhcmdlID0gdXNlTWVkaWFRdWVyeSgnKG1pbi13aWR0aDo3MDBweCknKVxyXG4gIGNvbnN0IHsgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT57TkFNRX06IEJ1aWxkaW5nIHRoZSBTcG9ydHNEYXRhdmVyc2U8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgY29udGVudD17YCR7TkFNRX0gaXMgdGhlIHBlcnNvbmFsIHBhZ2Ugb2YgU2FpZW0gR2lsYW5pLCBnaXZpbmcgdXBkYXRlcyBvbiB0aGUgU3BvcnRzRGF0YXZlcnNlLmB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ3N9PlxyXG4gICAgICAgICAgICA8Qm94IHA9ezV9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9e2xhcmdlID8gJ2gxJyA6ICdoNCd9PntOQU1FX0FORF9ET01BSU59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZEhlYWRpbmd9IHZhcmlhbnQ9e2xhcmdlID8gJ2gzJyA6ICdoNid9PlxyXG4gICAgICAgICAgICAgIEJ1aWxkaW5nIHRoZSBTcG9ydHNEYXRhdmVyc2UuXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm1haW4sIHN0eWxlcy5tYWluUmFpc2VkKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nc30+XHJcbiAgICAgICAgICA8UGFja2FnZVNlY3Rpb24gLz5cclxuICAgICAgICAgIDxQcm9kdWN0U2VjdGlvbiAvPlxyXG4gICAgICAgICAgPFdvcmtTZWN0aW9uIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2NhcmRTdHlsZS5qc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIHBsYWluLCBjYXJvdXNlbCwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNhcmRDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuY2FyZF06IHRydWUsXG4gICAgW2NsYXNzZXMuY2FyZFBsYWluXTogcGxhaW4sXG4gICAgW2NsYXNzZXMuY2FyZENhcm91c2VsXTogY2Fyb3VzZWwsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkQ2xhc3Nlc30gey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5DYXJkLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXG4gIGNhcm91c2VsOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvY2FyZEJvZHlTdHlsZS5qc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRCb2R5KHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2FyZEJvZHlDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuY2FyZEJvZHldOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEJvZHlDbGFzc2VzfSB7Li4ucmVzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkNhcmRCb2R5LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9jYXJkRm9vdGVyU3R5bGUuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkRm9vdGVyKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2FyZEZvb3RlckNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5jYXJkRm9vdGVyXTogdHJ1ZSxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWRcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRGb290ZXJDbGFzc2VzfSB7Li4ucmVzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkNhcmRGb290ZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcblxuaW1wb3J0IGJ1dHRvblN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9idXR0b25TdHlsZS5qc1wiO1xuXG5jb25zdCBtYWtlQ29tcG9uZW50U3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xuICAuLi5idXR0b25TdHlsZVxufSkpO1xuXG5jb25zdCBSZWd1bGFyQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgY29sb3IsXG4gICAgcm91bmQsXG4gICAgY2hpbGRyZW4sXG4gICAgZnVsbFdpZHRoLFxuICAgIGRpc2FibGVkLFxuICAgIHNpbXBsZSxcbiAgICBzaXplLFxuICAgIGJsb2NrLFxuICAgIGxpbmssXG4gICAganVzdEljb24sXG4gICAgY2xhc3NOYW1lLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBtYWtlQ29tcG9uZW50U3R5bGVzKCk7XG5cbiAgY29uc3QgYnRuQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmJ1dHRvbl06IHRydWUsXG4gICAgW2NsYXNzZXNbc2l6ZV1dOiBzaXplLFxuICAgIFtjbGFzc2VzW2NvbG9yXV06IGNvbG9yLFxuICAgIFtjbGFzc2VzLnJvdW5kXTogcm91bmQsXG4gICAgW2NsYXNzZXMuZnVsbFdpZHRoXTogZnVsbFdpZHRoLFxuICAgIFtjbGFzc2VzLmRpc2FibGVkXTogZGlzYWJsZWQsXG4gICAgW2NsYXNzZXMuc2ltcGxlXTogc2ltcGxlLFxuICAgIFtjbGFzc2VzLmJsb2NrXTogYmxvY2ssXG4gICAgW2NsYXNzZXMubGlua106IGxpbmssXG4gICAgW2NsYXNzZXMuanVzdEljb25dOiBqdXN0SWNvbixcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxCdXR0b24gey4uLnJlc3R9IHJlZj17cmVmfSBjbGFzc2VzPXt7IHJvb3Q6IGJ0bkNsYXNzZXMgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9CdXR0b24+XG4gICk7XG59KTtcblxuUmVndWxhckJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwicHJpbWFyeVwiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gICAgXCJyb3NlXCIsXG4gICAgXCJ3aGl0ZVwiLFxuICAgIFwiZmFjZWJvb2tcIixcbiAgICBcInR3aXR0ZXJcIixcbiAgICBcImdvb2dsZVwiLFxuICAgIFwiZ2l0aHViXCIsXG4gICAgXCJ0cmFuc3BhcmVudFwiXG4gIF0pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJsZ1wiXSksXG4gIHNpbXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHJvdW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBibG9jazogUHJvcFR5cGVzLmJvb2wsXG4gIGxpbms6IFByb3BUeXBlcy5ib29sLFxuICBqdXN0SWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWd1bGFyQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvY3VzdG9tSW5wdXRTdHlsZS5qc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUlucHV0KHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qge1xuICAgIGZvcm1Db250cm9sUHJvcHMsXG4gICAgbGFiZWxUZXh0LFxuICAgIGlkLFxuICAgIGxhYmVsUHJvcHMsXG4gICAgaW5wdXRQcm9wcyxcbiAgICBlcnJvcixcbiAgICB3aGl0ZSxcbiAgICBpbnB1dFJvb3RDdXN0b21DbGFzc2VzLFxuICAgIHN1Y2Nlc3NcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGxhYmVsQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtcIiBcIiArIGNsYXNzZXMubGFiZWxSb290RXJyb3JdOiBlcnJvcixcbiAgICBbXCIgXCIgKyBjbGFzc2VzLmxhYmVsUm9vdFN1Y2Nlc3NdOiBzdWNjZXNzICYmICFlcnJvclxuICB9KTtcbiAgY29uc3QgdW5kZXJsaW5lQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLnVuZGVybGluZUVycm9yXTogZXJyb3IsXG4gICAgW2NsYXNzZXMudW5kZXJsaW5lU3VjY2Vzc106IHN1Y2Nlc3MgJiYgIWVycm9yLFxuICAgIFtjbGFzc2VzLnVuZGVybGluZV06IHRydWUsXG4gICAgW2NsYXNzZXMud2hpdGVVbmRlcmxpbmVdOiB3aGl0ZVxuICB9KTtcbiAgY29uc3QgbWFyZ2luVG9wID0gY2xhc3NOYW1lcyh7XG4gICAgW2lucHV0Um9vdEN1c3RvbUNsYXNzZXNdOiBpbnB1dFJvb3RDdXN0b21DbGFzc2VzICE9PSB1bmRlZmluZWRcbiAgfSk7XG4gIGNvbnN0IGlucHV0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmlucHV0XTogdHJ1ZSxcbiAgICBbY2xhc3Nlcy53aGl0ZUlucHV0XTogd2hpdGVcbiAgfSk7XG4gIHZhciBmb3JtQ29udHJvbENsYXNzZXM7XG4gIGlmIChmb3JtQ29udHJvbFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICBmb3JtQ29udHJvbENsYXNzZXMgPSBjbGFzc05hbWVzKFxuICAgICAgZm9ybUNvbnRyb2xQcm9wcy5jbGFzc05hbWUsXG4gICAgICBjbGFzc2VzLmZvcm1Db250cm9sXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBmb3JtQ29udHJvbENsYXNzZXMgPSBjbGFzc2VzLmZvcm1Db250cm9sO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sIHsuLi5mb3JtQ29udHJvbFByb3BzfSBjbGFzc05hbWU9e2Zvcm1Db250cm9sQ2xhc3Nlc30+XG4gICAgICB7bGFiZWxUZXh0ICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgIDxJbnB1dExhYmVsXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsUm9vdCArIFwiIFwiICsgbGFiZWxDbGFzc2VzfVxuICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsVGV4dH1cbiAgICAgICAgPC9JbnB1dExhYmVsPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8SW5wdXRcbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIGlucHV0OiBpbnB1dENsYXNzZXMsXG4gICAgICAgICAgcm9vdDogbWFyZ2luVG9wLFxuICAgICAgICAgIGRpc2FibGVkOiBjbGFzc2VzLmRpc2FibGVkLFxuICAgICAgICAgIHVuZGVybGluZTogdW5kZXJsaW5lQ2xhc3Nlc1xuICAgICAgICB9fVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICA8L0Zvcm1Db250cm9sPlxuICApO1xufVxuXG5DdXN0b21JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmb3JtQ29udHJvbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpbnB1dFJvb3RDdXN0b21DbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHN1Y2Nlc3M6IFByb3BUeXBlcy5ib29sLFxuICB3aGl0ZTogUHJvcFR5cGVzLmJvb2xcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyOiBGQyA9ICh7fSk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mb290ZXJ9PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBkaXNwbGF5PVwiaW5saW5lXCIgY2xhc3NOYW1lPXtzdHlsZVsnZm9vdGVyLWNvbnRlbnQnXX0+XHJcbiAgICAgICAgQ29weXJpZ2h0IMKpIDIwMjF7JyAnfVxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmdpdGh1Yi5jb20vc2FpZW1naWxhbmlcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICBTYWllbSBHaWxhbmlcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBncmlkOiB7XG4gICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCIsXG4gICAgbWFyZ2luTGVmdDogXCIwcHhcIixcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH1cbn07XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZENvbnRhaW5lcihwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIHsuLi5yZXN0fSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZCArIFwiIFwiICsgY2xhc3NOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cbkdyaWRDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCJcbn07XG5cbkdyaWRDb250YWluZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBncmlkOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgbWluSGVpZ2h0OiBcIjFweFwiLFxuICAgIHBhZGRpbmdSaWdodDogXCIxNXB4XCIsXG4gICAgcGFkZGluZ0xlZnQ6IFwiMTVweFwiLFxuICAgIGZsZXhCYXNpczogXCJhdXRvXCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH1cbn07XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZEl0ZW0ocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGl0ZW0gey4uLnJlc3R9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkICsgXCIgXCIgKyBjbGFzc05hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR3JpZD5cbiAgKTtcbn1cblxuR3JpZEl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCJcbn07XG5cbkdyaWRJdGVtLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2luZm9TdHlsZS5qc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm9BcmVhKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGljb25Db2xvciwgdmVydGljYWwgfSA9IHByb3BzO1xuICBjb25zdCBpY29uV3JhcHBlciA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmljb25XcmFwcGVyXTogdHJ1ZSxcbiAgICBbY2xhc3Nlc1tpY29uQ29sb3JdXTogdHJ1ZSxcbiAgICBbY2xhc3Nlcy5pY29uV3JhcHBlclZlcnRpY2FsXTogdmVydGljYWxcbiAgfSk7XG4gIGNvbnN0IGljb25DbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuaWNvbl06IHRydWUsXG4gICAgW2NsYXNzZXMuaWNvblZlcnRpY2FsXTogdmVydGljYWxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0FyZWF9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2ljb25XcmFwcGVyfT5cbiAgICAgICAgPHByb3BzLmljb24gY2xhc3NOYW1lPXtpY29uQ2xhc3Nlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb25XcmFwcGVyfT5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3RpdGxlfTwvaDQ+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5JbmZvQXJlYS5kZWZhdWx0UHJvcHMgPSB7XG4gIGljb25Db2xvcjogXCJncmF5XCJcbn07XG5cbkluZm9BcmVhLnByb3BUeXBlcyA9IHtcbiAgaWNvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKS5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpY29uQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcImluZm9cIixcbiAgICBcInJvc2VcIixcbiAgICBcImdyYXlcIlxuICBdKSxcbiAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sXG59O1xuIiwiZXhwb3J0IGNvbnN0IE5BTUUgPSAnU0cnXHJcbmV4cG9ydCBjb25zdCBOQU1FX0FORF9ET01BSU4gPSAnU0cnXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3NhaWVtZ2lsYW5pLm1lJ1xyXG5leHBvcnQgY29uc3QgREVQTE9ZTUVOVFNfVVJMID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3Mvc2FpZW1naWxhbmkvc2FpZW0tYmxvZy9kZXBsb3ltZW50cydcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fMzE3aUtcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRpbmdzXCI6IFwiU2hhcmVkX2hlYWRpbmdzX19yM3k3MlwiLFxuXHRcInNlY29uZEhlYWRpbmdcIjogXCJTaGFyZWRfc2Vjb25kSGVhZGluZ19fZ3FBeE9cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GaW5nZXJwcmludFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmVyaWZpZWRVc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=