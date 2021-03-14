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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
          children: "I am always looking to add more developers to the SportsDataverse developer group who share common cause with the aim to make the sports data industry more diverse and inclusive. The SportsDataverse is a concept I have been working on with a handful of other people to create and develop packages in Python, R and Node.js. Among the goals of the SportsDataverse is to flatten the learning curve the average user has to go through to get access to the highest quality open-source data and analytics"
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
    }, this)
  }, void 0, false, {
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
          children: "Are you interested in working with sports data, developing open-source packages and helping teach others to do the same? Our group is dedicated to the cause of trying to include people from more diverse backgrounds and underrepresented groups in sports. Additionally, we are making the publicly available sports data much more accessible to the common person. The desired goal is to create a supportive community that will provide guidance and mentor those who want to be a part of the solution. Drop me a brief message below so that I can reach out to you!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
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
                lineNumber: 36,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
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
                lineNumber: 45,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
              lineNumber: 53,
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
                lineNumber: 66,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
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
/* harmony import */ var _pages_sections_LandingPage_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages-sections/LandingPage-Sections/WorkSection.js */ "./pages-sections/LandingPage-Sections/WorkSection.js");


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
        content: `${_src_types_constants__WEBPACK_IMPORTED_MODULE_9__["NAME"]} is a blog on various topics in full stack development
              with a focus on current technologies like React, NextJS and R programming.`
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_sections_LandingPage_Sections_ProductSection_js__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_sections_LandingPage_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
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
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

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
    marginRight: "-15px",
    marginLeft: "-15px",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2J1dHRvblN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2N1c3RvbUlucHV0U3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvaW5mb1N0eWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzLXNlY3Rpb25zL0xhbmRpbmdQYWdlLVNlY3Rpb25zL1Byb2R1Y3RTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzLXNlY3Rpb25zL0xhbmRpbmdQYWdlLVNlY3Rpb25zL1dvcmtTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2xhbmRpbmcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUlucHV0L0N1c3RvbUlucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5mb0FyZWEvSW5mb0FyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvRm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmluZ2VycHJpbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmVyaWZpZWRVc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImhleENvbG9yVG9SR0IiLCJoZXhDb2xvciIsImRldGVjdFNob3J0aGFuZCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJiIiwiaGV4X2FycmF5IiwiZXhlYyIsInBhcnNlSW50IiwiaGV4VG9SR0JBbHBoYSIsImFscGhhIiwicmdiIiwiZHJhd2VyV2lkdGgiLCJ0cmFuc2l0aW9uIiwiY29uYXRpbmVyRmx1aWQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiY29udGFpbmVyIiwibWF4V2lkdGgiLCJib3hTaGFkb3ciLCJjYXJkIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdEZvbnQiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJwcmltYXJ5Q29sb3IiLCJ3YXJuaW5nQ29sb3IiLCJkYW5nZXJDb2xvciIsInN1Y2Nlc3NDb2xvciIsImluZm9Db2xvciIsInJvc2VDb2xvciIsImdyYXlDb2xvciIsInByaW1hcnlCb3hTaGFkb3ciLCJpbmZvQm94U2hhZG93Iiwic3VjY2Vzc0JveFNoYWRvdyIsIndhcm5pbmdCb3hTaGFkb3ciLCJkYW5nZXJCb3hTaGFkb3ciLCJyb3NlQm94U2hhZG93Iiwid2FybmluZ0NhcmRIZWFkZXIiLCJzdWNjZXNzQ2FyZEhlYWRlciIsImRhbmdlckNhcmRIZWFkZXIiLCJpbmZvQ2FyZEhlYWRlciIsInByaW1hcnlDYXJkSGVhZGVyIiwicm9zZUNhcmRIZWFkZXIiLCJjYXJkQWN0aW9ucyIsInBhZGRpbmdUb3AiLCJib3JkZXJUb3AiLCJoZWlnaHQiLCJjYXJkSGVhZGVyIiwicGFkZGluZyIsImRlZmF1bHRCb3hTaGFkb3ciLCJib3JkZXIiLCJ0aXRsZSIsInRleHREZWNvcmF0aW9uIiwic21hbGxUaXRsZSIsIm1hcmdpblRvcCIsImNhcmRUaXRsZSIsImNhcmRMaW5rIiwiY2FyZFN1YnRpdGxlIiwibWFyZ2luQm90dG9tIiwiYnV0dG9uU3R5bGUiLCJidXR0b24iLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImxldHRlclNwYWNpbmciLCJ3aWxsQ2hhbmdlIiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSIsInZlcnRpY2FsQWxpZ24iLCJ0b3VjaEFjdGlvbiIsImN1cnNvciIsInRvcCIsInRyYW5zZm9ybSIsImxlZnQiLCJmdWxsV2lkdGgiLCJwcmltYXJ5IiwiaW5mbyIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZGFuZ2VyIiwicm9zZSIsIndoaXRlIiwidHdpdHRlciIsImZhY2Vib29rIiwiZ29vZ2xlIiwiZ2l0aHViIiwic2ltcGxlIiwidHJhbnNwYXJlbnQiLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwibGciLCJzbSIsInJvdW5kIiwiYmxvY2siLCJsaW5rIiwianVzdEljb24iLCJjdXN0b21JbnB1dFN0eWxlIiwiYm9yZGVyQ29sb3IiLCJ1bmRlcmxpbmUiLCJib3JkZXJXaWR0aCIsInVuZGVybGluZUVycm9yIiwidW5kZXJsaW5lU3VjY2VzcyIsIndoaXRlVW5kZXJsaW5lIiwibGFiZWxSb290IiwibGFiZWxSb290RXJyb3IiLCJsYWJlbFJvb3RTdWNjZXNzIiwiZm9ybUNvbnRyb2wiLCJpbnB1dCIsIndoaXRlSW5wdXQiLCJpbmZvU3R5bGUiLCJpbmZvQXJlYSIsImljb25XcmFwcGVyIiwiZmxvYXQiLCJncmF5IiwiaWNvbiIsImRlc2NyaXB0aW9uV3JhcHBlciIsIm92ZXJmbG93IiwiZGVzY3JpcHRpb24iLCJpY29uV3JhcHBlclZlcnRpY2FsIiwiaWNvblZlcnRpY2FsIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInN0eWxlcyIsIlByb2R1Y3RTZWN0aW9uIiwiY2xhc3NlcyIsInNlY3Rpb24iLCJXb3JrU2VjdGlvbiIsImNsYXNzTmFtZSIsInRleHRBcmVhIiwibXVsdGlsaW5lIiwicm93cyIsInRleHRDZW50ZXIiLCJMYW5kaW5nUGFnZSIsInByb3BzIiwibGFyZ2UiLCJ1c2VNZWRpYVF1ZXJ5IiwicmVzdCIsIk5BTUUiLCJoZWFkaW5ncyIsIk5BTUVfQU5EX0RPTUFJTiIsInNlY29uZEhlYWRpbmciLCJjbGFzc05hbWVzIiwibWFpbiIsIm1haW5SYWlzZWQiLCJtYWtlQ29tcG9uZW50U3R5bGVzIiwiUmVndWxhckJ1dHRvbiIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsImNoaWxkcmVuIiwic2l6ZSIsImJ0bkNsYXNzZXMiLCJyb290IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJib29sIiwibm9kZSIsInN0cmluZyIsIkN1c3RvbUlucHV0IiwiZm9ybUNvbnRyb2xQcm9wcyIsImxhYmVsVGV4dCIsImlkIiwibGFiZWxQcm9wcyIsImlucHV0UHJvcHMiLCJlcnJvciIsImlucHV0Um9vdEN1c3RvbUNsYXNzZXMiLCJsYWJlbENsYXNzZXMiLCJ1bmRlcmxpbmVDbGFzc2VzIiwidW5kZWZpbmVkIiwiaW5wdXRDbGFzc2VzIiwiZm9ybUNvbnRyb2xDbGFzc2VzIiwib2JqZWN0IiwiRm9vdGVyIiwic3R5bGUiLCJmb290ZXIiLCJncmlkIiwiR3JpZENvbnRhaW5lciIsImRlZmF1bHRQcm9wcyIsImZsZXhCYXNpcyIsIkdyaWRJdGVtIiwiSW5mb0FyZWEiLCJpY29uQ29sb3IiLCJ2ZXJ0aWNhbCIsImljb25DbGFzc2VzIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIkJBU0VfVVJMIiwiREVQTE9ZTUVOVFNfVVJMIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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O0FBSW5CSCxXQUFTLEVBQUU1QixpREFBUyxDQUFDQyxLQUFWLENBQWdCLENBQ3pCLFNBRHlCLEVBRXpCLFNBRnlCLEVBR3pCLFFBSHlCLEVBSXpCLFNBSnlCLEVBS3pCLE1BTHlCLEVBTXpCLE1BTnlCLEVBT3pCLE1BUHlCLENBQWhCLENBSlE7QUFhbkI0QixVQUFRLEVBQUU3QixpREFBUyxDQUFDRTtBQWJELENBQXJCLEM7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTW5CLElBQUksR0FBRyxJQUFiO0FBQ0EsTUFBTUUsZUFBZSxHQUFHLElBQXhCO0FBQ0EsTUFBTWdELFFBQVEsR0FBRyx3QkFBakI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUVBQXhCLEM7Ozs7Ozs7Ozs7O0FDSFA7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2xhbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xhbmRpbmcudHN4XCIpO1xuIiwiXG5jb25zdCBoZXhDb2xvclRvUkdCID0gZnVuY3Rpb24oaGV4Q29sb3IpIHtcbiAgbGV0IGRldGVjdFNob3J0aGFuZCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7IC8vICMwMDAgdnMgIzAwMDAwMFxuICBoZXhDb2xvciA9IGhleENvbG9yLnJlcGxhY2UoZGV0ZWN0U2hvcnRoYW5kLCBmdW5jdGlvbihtLCByLCBnLCBiKSB7XG4gICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcbiAgfSk7XG5cbiAgY29uc3QgaGV4X2FycmF5ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleENvbG9yKTsgLy8gIzAwMDAwMCB0byAjZmZmZmZmXG4gIHJldHVybiBoZXhfYXJyYXlcbiAgICA/IHtcbiAgICAgICAgcjogcGFyc2VJbnQoaGV4X2FycmF5WzFdLCAxNiksIC8vIDAtMjU1XG4gICAgICAgIGc6IHBhcnNlSW50KGhleF9hcnJheVsyXSwgMTYpLCAvLyAwLTI1NVxuICAgICAgICBiOiBwYXJzZUludChoZXhfYXJyYXlbM10sIDE2KSAvLyAwLTI1NVxuICAgICAgfVxuICAgIDogbnVsbDtcbn07XG5cbmNvbnN0IGhleFRvUkdCQWxwaGEgPSBmdW5jdGlvbihoZXhDb2xvciwgYWxwaGEpIHtcbiAgbGV0IHJnYiA9IGhleENvbG9yVG9SR0IoaGV4Q29sb3IpO1xuICByZXR1cm4gYHJnYmEoJHtyZ2Iucn0sJHtyZ2IuZ30sJHtyZ2IuYn0sJHthbHBoYX0pYDtcbn07XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMjYwO1xuXG5jb25zdCB0cmFuc2l0aW9uID0ge1xuICB0cmFuc2l0aW9uOiBcImFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpXCJcbn07XG5cbmNvbnN0IGNvbmF0aW5lckZsdWlkID0ge1xuICBwYWRkaW5nUmlnaHQ6IFwiMTVweFwiLFxuICBwYWRkaW5nTGVmdDogXCIxNXB4XCIsXG4gIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gIHdpZHRoOiBcIjEwMCVcIlxufTtcbmNvbnN0IGNvbnRhaW5lciA9IHtcbiAgLi4uY29uYXRpbmVyRmx1aWQsXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KVwiOiB7XG4gICAgbWF4V2lkdGg6IFwiNTQwcHhcIlxuICB9LFxuICBcIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjcyMHB4XCJcbiAgfSxcbiAgXCJAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpXCI6IHtcbiAgICBtYXhXaWR0aDogXCI5NjBweFwiXG4gIH0sXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjExNDBweFwiXG4gIH1cbn07XG5cbmNvbnN0IGJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMHB4IDMwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCA0cHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiXG59O1xuXG5jb25zdCBjYXJkID0ge1xuICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIG1hcmdpbjogXCIyNXB4IDBcIixcbiAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNClcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuODcpXCIsXG4gIGJhY2tncm91bmQ6IFwiI2ZmZlwiXG59O1xuXG5jb25zdCBkZWZhdWx0Rm9udCA9IHtcbiAgZm9udEZhbWlseTogJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZicsXG4gIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gIGxpbmVIZWlnaHQ6IFwiMS41ZW1cIlxufTtcblxuY29uc3QgcHJpbWFyeUNvbG9yID0gXCIjOWMyN2IwXCI7XG5jb25zdCB3YXJuaW5nQ29sb3IgPSBcIiNmZjk4MDBcIjtcbmNvbnN0IGRhbmdlckNvbG9yID0gXCIjZjQ0MzM2XCI7XG5jb25zdCBzdWNjZXNzQ29sb3IgPSBcIiM0Y2FmNTBcIjtcbmNvbnN0IGluZm9Db2xvciA9IFwiIzAwYWNjMVwiO1xuY29uc3Qgcm9zZUNvbG9yID0gXCIjZTkxZTYzXCI7XG5jb25zdCBncmF5Q29sb3IgPSBcIiM5OTk5OTlcIjtcblxuY29uc3QgcHJpbWFyeUJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHByaW1hcnlDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgcHJpbWFyeUNvbG9yLFxuICAgIDAuMlxuICApfWBcbn07XG5jb25zdCBpbmZvQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDEycHggMjBweCAtMTBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgaW5mb0NvbG9yLFxuICAgIDAuMjhcbiAgKX0sIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBpbmZvQ29sb3IsXG4gICAgMC4yXG4gICl9YFxufTtcbmNvbnN0IHN1Y2Nlc3NCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBzdWNjZXNzQ29sb3IsXG4gICAgMC4yOFxuICApfSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHN1Y2Nlc3NDb2xvcixcbiAgICAwLjJcbiAgKX1gXG59O1xuY29uc3Qgd2FybmluZ0JveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHdhcm5pbmdDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgd2FybmluZ0NvbG9yLFxuICAgIDAuMlxuICApfWBcbn07XG5jb25zdCBkYW5nZXJCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBkYW5nZXJDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgZGFuZ2VyQ29sb3IsXG4gICAgMC4yXG4gICl9YFxufTtcbmNvbnN0IHJvc2VCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgNHB4IDIwcHggMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBcIiMwMDBcIixcbiAgICAwLjE0XG4gICl9LCAwIDdweCAxMHB4IC01cHggJHtoZXhUb1JHQkFscGhhKHJvc2VDb2xvciwgMC40KX1gXG59O1xuXG5jb25zdCB3YXJuaW5nQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2ZmYTcyNiwgI2ZiOGMwMClcIixcbiAgLi4ud2FybmluZ0JveFNoYWRvd1xufTtcbmNvbnN0IHN1Y2Nlc3NDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNjZiYjZhLCAjNDNhMDQ3KVwiLFxuICAuLi5zdWNjZXNzQm94U2hhZG93XG59O1xuY29uc3QgZGFuZ2VyQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2VmNTM1MCwgI2U1MzkzNSlcIixcbiAgLi4uZGFuZ2VyQm94U2hhZG93XG59O1xuY29uc3QgaW5mb0NhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMyNmM2ZGEsICMwMGFjYzEpXCIsXG4gIC4uLmluZm9Cb3hTaGFkb3dcbn07XG5jb25zdCBwcmltYXJ5Q2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2FiNDdiYywgIzhlMjRhYSlcIixcbiAgLi4ucHJpbWFyeUJveFNoYWRvd1xufTtcbmNvbnN0IHJvc2VDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWM0MDdhLCAjZDgxYjYwKVwiLFxuICAuLi5yb3NlQm94U2hhZG93XG59O1xuY29uc3QgY2FyZEFjdGlvbnMgPSB7XG4gIG1hcmdpbjogXCIwIDIwcHggMTBweFwiLFxuICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZWVlZWVlXCIsXG4gIGhlaWdodDogXCJhdXRvXCIsXG4gIC4uLmRlZmF1bHRGb250XG59O1xuXG5jb25zdCBjYXJkSGVhZGVyID0ge1xuICBtYXJnaW46IFwiLTMwcHggMTVweCAwXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgcGFkZGluZzogXCIxNXB4XCJcbn07XG5cbmNvbnN0IGRlZmF1bHRCb3hTaGFkb3cgPSB7XG4gIGJvcmRlcjogXCIwXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMHB4IDIwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCAzcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxuICBwYWRkaW5nOiBcIjEwcHggMFwiLFxuICB0cmFuc2l0aW9uOiBcImFsbCAxNTBtcyBlYXNlIDBzXCJcbn07XG5cbmNvbnN0IHRpdGxlID0ge1xuICBjb2xvcjogXCIjM0M0ODU4XCIsXG4gIG1hcmdpbjogXCIxLjc1cmVtIDAgMC44NzVyZW1cIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICBmb250RmFtaWx5OiBgXCJSb2JvdG8gU2xhYlwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZmBcbn07XG5cbmNvbnN0IHNtYWxsVGl0bGUgPSB7XG4gIC4uLnRpdGxlLFxuICBtYXJnaW5Ub3A6IFwiLjYyNXJlbVwiXG59O1xuXG5jb25zdCBjYXJkVGl0bGUgPSB7XG4gIC4uLnNtYWxsVGl0bGUsXG4gIG1hcmdpblRvcDogXCIuNjI1cmVtXCJcbn07XG5cbmNvbnN0IGNhcmRMaW5rID0ge1xuICBcIiYgKyAkY2FyZExpbmtcIjoge1xuICAgIG1hcmdpbkxlZnQ6IFwiMS4yNXJlbVwiXG4gIH1cbn07XG5cbmNvbnN0IGNhcmRTdWJ0aXRsZSA9IHtcbiAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgbWFyZ2luVG9wOiBcIi0uMzc1cmVtXCJcbn07XG5cbmV4cG9ydCB7XG4gIGhleFRvUkdCQWxwaGEsXG4gIC8vdmFyaWFibGVzXG4gIGRyYXdlcldpZHRoLFxuICB0cmFuc2l0aW9uLFxuICBjb250YWluZXIsXG4gIGNvbmF0aW5lckZsdWlkLFxuICBib3hTaGFkb3csXG4gIGNhcmQsXG4gIGRlZmF1bHRGb250LFxuICBwcmltYXJ5Q29sb3IsXG4gIHdhcm5pbmdDb2xvcixcbiAgZGFuZ2VyQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgaW5mb0NvbG9yLFxuICByb3NlQ29sb3IsXG4gIGdyYXlDb2xvcixcbiAgcHJpbWFyeUJveFNoYWRvdyxcbiAgaW5mb0JveFNoYWRvdyxcbiAgc3VjY2Vzc0JveFNoYWRvdyxcbiAgd2FybmluZ0JveFNoYWRvdyxcbiAgZGFuZ2VyQm94U2hhZG93LFxuICByb3NlQm94U2hhZG93LFxuICB3YXJuaW5nQ2FyZEhlYWRlcixcbiAgc3VjY2Vzc0NhcmRIZWFkZXIsXG4gIGRhbmdlckNhcmRIZWFkZXIsXG4gIGluZm9DYXJkSGVhZGVyLFxuICBwcmltYXJ5Q2FyZEhlYWRlcixcbiAgcm9zZUNhcmRIZWFkZXIsXG4gIGNhcmRBY3Rpb25zLFxuICBjYXJkSGVhZGVyLFxuICBkZWZhdWx0Qm94U2hhZG93LFxuICB0aXRsZSxcbiAgc21hbGxUaXRsZSxcbiAgY2FyZFRpdGxlLFxuICBjYXJkTGluayxcbiAgY2FyZFN1YnRpdGxlXG59O1xuIiwiaW1wb3J0IHtcbiAgaGV4VG9SR0JBbHBoYSxcbiAgZ3JheUNvbG9yLFxuICByb3NlQ29sb3IsXG4gIHByaW1hcnlDb2xvcixcbiAgaW5mb0NvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIHdhcm5pbmdDb2xvcixcbiAgZGFuZ2VyQ29sb3Jcbn0gZnJvbSBcIi4uLy4uL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gIGJ1dHRvbjoge1xuICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXG4gICAgbWluV2lkdGg6IFwiYXV0b1wiLFxuICAgIGJhY2tncm91bmRDb2xvcjogZ3JheUNvbG9yLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoMTUzLCAxNTMsIDE1MywgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgxNTMsIDE1MywgMTUzLCAwLjEyKVwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgcGFkZGluZzogXCIxMnB4IDMwcHhcIixcbiAgICBtYXJnaW46IFwiLjMxMjVyZW0gMXB4XCIsXG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjBcIixcbiAgICB3aWxsQ2hhbmdlOiBcImJveC1zaGFkb3csIHRyYW5zZm9ybVwiLFxuICAgIHRyYW5zaXRpb246XG4gICAgICBcImJveC1zaGFkb3cgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSlcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTcxNDNcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgIHRvdWNoQWN0aW9uOiBcIm1hbmlwdWxhdGlvblwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3IsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKVwiXG4gICAgfSxcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIHRvcDogXCIwXCIsXG4gICAgICBmb250U2l6ZTogXCIxLjFyZW1cIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxuICAgIH0sXG4gICAgXCImIHN2Z1wiOiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIHRvcDogXCIwXCIsXG4gICAgICB3aWR0aDogXCIxOHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMThweFwiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiNHB4XCIsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiXG4gICAgfSxcbiAgICBcIiYkanVzdEljb25cIjoge1xuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgICBtYXJnaW5SaWdodDogXCIwcHhcIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICBsZWZ0OiBcIjBweFwiLFxuICAgICAgICB0b3A6IFwiMHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNDFweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGZ1bGxXaWR0aDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIlxuICB9LFxuICBwcmltYXJ5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBwcmltYXJ5Q29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKHByaW1hcnlDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YFxuICAgIH1cbiAgfSxcbiAgaW5mbzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yLFxuICAgIGJveFNoYWRvdzogYDAgMnB4IDJweCAwICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIGluZm9Db2xvcixcbiAgICAgIDAuMTRcbiAgICApfSwgMCAzcHggMXB4IC0ycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgaW5mb0NvbG9yLFxuICAgICAgMC4yXG4gICAgKX0sIDAgMXB4IDVweCAwICR7aGV4VG9SR0JBbHBoYShpbmZvQ29sb3IsIDAuMTIpfWAsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3IsXG4gICAgICBib3hTaGFkb3c6IGAwIDE0cHggMjZweCAtMTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIGluZm9Db2xvcixcbiAgICAgICAgMC40MlxuICAgICAgKX0sIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIGluZm9Db2xvcixcbiAgICAgICAgMC4yXG4gICAgICApfWBcbiAgICB9XG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgICBib3hTaGFkb3c6IGAwIDJweCAycHggMCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBzdWNjZXNzQ29sb3IsXG4gICAgICAwLjE0XG4gICAgKX0sIDAgM3B4IDFweCAtMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgIHN1Y2Nlc3NDb2xvcixcbiAgICAgIDAuMlxuICAgICl9LCAwIDFweCA1cHggMCAke2hleFRvUkdCQWxwaGEoc3VjY2Vzc0NvbG9yLCAwLjEyKX1gLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yLFxuICAgICAgYm94U2hhZG93OiBgMCAxNHB4IDI2cHggLTEycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgICBzdWNjZXNzQ29sb3IsXG4gICAgICAgIDAuNDJcbiAgICAgICl9LCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgICBzdWNjZXNzQ29sb3IsXG4gICAgICAgIDAuMlxuICAgICAgKX1gXG4gICAgfVxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgd2FybmluZ0NvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICB3YXJuaW5nQ29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKHdhcm5pbmdDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgd2FybmluZ0NvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgd2FybmluZ0NvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YFxuICAgIH1cbiAgfSxcbiAgZGFuZ2VyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvcixcbiAgICBib3hTaGFkb3c6IGAwIDJweCAycHggMCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBkYW5nZXJDb2xvcixcbiAgICAgIDAuMTRcbiAgICApfSwgMCAzcHggMXB4IC0ycHggJHtoZXhUb1JHQkFscGhhKFxuICAgICAgZGFuZ2VyQ29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKGRhbmdlckNvbG9yLCAwLjEyKX1gLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgICBib3hTaGFkb3c6IGAwIDE0cHggMjZweCAtMTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICAgIGRhbmdlckNvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgZGFuZ2VyQ29sb3IsXG4gICAgICAgIDAuMlxuICAgICAgKX1gXG4gICAgfVxuICB9LFxuICByb3NlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3IsXG4gICAgYm94U2hhZG93OiBgMCAycHggMnB4IDAgJHtoZXhUb1JHQkFscGhhKFxuICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgMC4xNFxuICAgICl9LCAwIDNweCAxcHggLTJweCAke2hleFRvUkdCQWxwaGEoXG4gICAgICBwcmltYXJ5Q29sb3IsXG4gICAgICAwLjJcbiAgICApfSwgMCAxcHggNXB4IDAgJHtoZXhUb1JHQkFscGhhKHByaW1hcnlDb2xvciwgMC4xMil9YCxcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvc2VDb2xvcixcbiAgICAgIGJveFNoYWRvdzogYDAgMTRweCAyNnB4IC0xMnB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjQyXG4gICAgICApfSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAgICAgcHJpbWFyeUNvbG9yLFxuICAgICAgICAwLjJcbiAgICAgICl9YFxuICAgIH1cbiAgfSxcbiAgd2hpdGU6IHtcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgY29sb3I6IGdyYXlDb2xvclxuICAgIH1cbiAgfSxcbiAgdHdpdHRlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTVhY2VlXCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSg4NSwgMTcyLCAyMzgsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDg1LCAxNzIsIDIzOCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSg4NSwgMTcyLCAyMzgsIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXMsJjp2aXNpdGVkXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTVhY2VlXCIsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSg4NSwgMTcyLCAyMzgsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSg4NSwgMTcyLCAyMzgsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgZmFjZWJvb2s6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNiNTk5OFwiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBib3hTaGFkb3c6XG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoNTksIDg5LCAxNTIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDU5LCA4OSwgMTUyLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDU5LCA4OSwgMTUyLCAwLjEyKVwiLFxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjM2I1OTk4XCIsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICBib3hTaGFkb3c6XG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYSg1OSwgODksIDE1MiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDU5LCA4OSwgMTUyLCAwLjIpXCJcbiAgICB9XG4gIH0sXG4gIGdvb2dsZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZGQ0YjM5XCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYSgyMjEsIDc1LCA1NywgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMjIxLCA3NSwgNTcsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMjIxLCA3NSwgNTcsIDAuMTIpXCIsXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNkZDRiMzlcIixcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKDIyMSwgNzUsIDU3LCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMjIxLCA3NSwgNTcsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgZ2l0aHViOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDUxLCA1MSwgNTEsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4xMilcIixcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzMzMzM1wiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgYm94U2hhZG93OlxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoNTEsIDUxLCA1MSwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDUxLCA1MSwgNTEsIDAuMilcIlxuICAgIH1cbiAgfSxcbiAgc2ltcGxlOiB7XG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgIH0sXG4gICAgXCImJHByaW1hcnlcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogcHJpbWFyeUNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkaW5mb1wiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiBpbmZvQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRzdWNjZXNzXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IHN1Y2Nlc3NDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgXCImJHdhcm5pbmdcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogd2FybmluZ0NvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkcm9zZVwiOiB7XG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XG4gICAgICAgIGNvbG9yOiByb3NlQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRkYW5nZXJcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogZGFuZ2VyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiR0d2l0dGVyXCI6IHtcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcbiAgICAgICAgY29sb3I6IFwiIzU1YWNlZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkZmFjZWJvb2tcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogXCIjM2I1OTk4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRnb29nbGVcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogXCIjZGQ0YjM5XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiJiRnaXRodWJcIjoge1xuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogXCIjMzMzMzMzXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHRyYW5zcGFyZW50OiB7XG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xuICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgIH1cbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBvcGFjaXR5OiBcIjAuNjVcIixcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuICB9LFxuICBsZzoge1xuICAgIHBhZGRpbmc6IFwiMS4xMjVyZW0gMi4yNXJlbVwiLFxuICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjMzMzMzM1wiLFxuICAgIGJvcmRlclJhZGl1czogXCIwLjJyZW1cIlxuICB9LFxuICBzbToge1xuICAgIHBhZGRpbmc6IFwiMC40MDYyNXJlbSAxLjI1cmVtXCIsXG4gICAgZm9udFNpemU6IFwiMC42ODc1cmVtXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4ycmVtXCJcbiAgfSxcbiAgcm91bmQ6IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiMzBweFwiXG4gIH0sXG4gIGJsb2NrOiB7XG4gICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCJcbiAgfSxcbiAgbGluazoge1xuICAgIFwiJiwmOmhvdmVyLCY6Zm9jdXNcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBjb2xvcjogXCIjOTk5OTk5XCIsXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgfVxuICB9LFxuICBqdXN0SWNvbjoge1xuICAgIHBhZGRpbmdMZWZ0OiBcIjEycHhcIixcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMTJweFwiLFxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICBoZWlnaHQ6IFwiNDFweFwiLFxuICAgIG1pbldpZHRoOiBcIjQxcHhcIixcbiAgICB3aWR0aDogXCI0MXB4XCIsXG4gICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiBzdmcsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCJcbiAgICB9LFxuICAgIFwiJiRsZ1wiOiB7XG4gICAgICBoZWlnaHQ6IFwiNTdweFwiLFxuICAgICAgbWluV2lkdGg6IFwiNTdweFwiLFxuICAgICAgd2lkdGg6IFwiNTdweFwiLFxuICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XG4gICAgICAgIGZvbnRTaXplOiBcIjMycHhcIixcbiAgICAgICAgbGluZUhlaWdodDogXCI1NnB4XCJcbiAgICAgIH0sXG4gICAgICBcIiYgc3ZnXCI6IHtcbiAgICAgICAgd2lkdGg6IFwiMzJweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzJweFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIiYkc21cIjoge1xuICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgIG1pbldpZHRoOiBcIjMwcHhcIixcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcbiAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjI5cHhcIlxuICAgICAgfSxcbiAgICAgIFwiJiBzdmdcIjoge1xuICAgICAgICB3aWR0aDogXCIxN3B4XCIsXG4gICAgICAgIGhlaWdodDogXCIxN3B4XCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1dHRvblN0eWxlO1xuIiwiaW1wb3J0IHtcbiAgcHJpbWFyeUNvbG9yLFxuICBkYW5nZXJDb2xvcixcbiAgc3VjY2Vzc0NvbG9yLFxuICBkZWZhdWx0Rm9udFxufSBmcm9tIFwiLi4vLi4vbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuXG5jb25zdCBjdXN0b21JbnB1dFN0eWxlID0ge1xuICBkaXNhYmxlZDoge1xuICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnQgIWltcG9ydGFudFwiXG4gICAgfVxuICB9LFxuICB1bmRlcmxpbmU6IHtcbiAgICBcIiY6aG92ZXI6bm90KCRkaXNhYmxlZCk6YmVmb3JlLCY6YmVmb3JlXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBcIiNEMkQyRDIgIWltcG9ydGFudFwiLFxuICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4ICFpbXBvcnRhbnRcIlxuICAgIH0sXG4gICAgXCImOmFmdGVyXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBwcmltYXJ5Q29sb3JcbiAgICB9XG4gIH0sXG4gIHVuZGVybGluZUVycm9yOiB7XG4gICAgXCImOmFmdGVyXCI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBkYW5nZXJDb2xvclxuICAgIH1cbiAgfSxcbiAgdW5kZXJsaW5lU3VjY2Vzczoge1xuICAgIFwiJjphZnRlclwiOiB7XG4gICAgICBib3JkZXJDb2xvcjogc3VjY2Vzc0NvbG9yXG4gICAgfVxuICB9LFxuICB3aGl0ZVVuZGVybGluZToge1xuICAgIFwiJjpob3Zlcjpub3QoJGRpc2FibGVkKTpiZWZvcmUsJjpiZWZvcmVcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgfSxcbiAgICBcIiY6YWZ0ZXJcIjoge1xuICAgICAgYm9yZGVyQ29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgfVxuICB9LFxuICBsYWJlbFJvb3Q6IHtcbiAgICAuLi5kZWZhdWx0Rm9udCxcbiAgICBjb2xvcjogXCIjQUFBQUFBICFpbXBvcnRhbnRcIixcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTdcIixcbiAgICB0b3A6IFwiMTBweFwiLFxuICAgIGxldHRlclNwYWNpbmc6IFwidW5zZXRcIixcbiAgICBcIiYgKyAkdW5kZXJsaW5lXCI6IHtcbiAgICAgIG1hcmdpblRvcDogXCIwcHhcIlxuICAgIH1cbiAgfSxcbiAgbGFiZWxSb290RXJyb3I6IHtcbiAgICBjb2xvcjogZGFuZ2VyQ29sb3IgKyBcIiAhaW1wb3J0YW50XCJcbiAgfSxcbiAgbGFiZWxSb290U3VjY2Vzczoge1xuICAgIGNvbG9yOiBzdWNjZXNzQ29sb3IgKyBcIiAhaW1wb3J0YW50XCJcbiAgfSxcbiAgZm9ybUNvbnRyb2w6IHtcbiAgICBtYXJnaW46IFwiMCAwIDE3cHggMFwiLFxuICAgIHBhZGRpbmdUb3A6IFwiMjdweFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgXCImIHN2ZywmIC5mYWIsJiAuZmFyLCYgLmZhbCwmIC5mYXMsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xuICAgICAgY29sb3I6IFwiIzQ5NTA1N1wiXG4gICAgfVxuICB9LFxuICBpbnB1dDoge1xuICAgIGNvbG9yOiBcIiM0OTUwNTdcIixcbiAgICBoZWlnaHQ6IFwidW5zZXRcIixcbiAgICBcIiYsJjo6cGxhY2Vob2xkZXJcIjoge1xuICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgZm9udEZhbWlseTogJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZicsXG4gICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgbGluZUhlaWdodDogXCIxLjQyODU3XCIsXG4gICAgICBvcGFjaXR5OiBcIjFcIlxuICAgIH0sXG4gICAgXCImOjpwbGFjZWhvbGRlclwiOiB7XG4gICAgICBjb2xvcjogXCIjQUFBQUFBXCJcbiAgICB9XG4gIH0sXG4gIHdoaXRlSW5wdXQ6IHtcbiAgICBcIiYsJjo6cGxhY2Vob2xkZXJcIjoge1xuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgb3BhY2l0eTogXCIxXCJcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbUlucHV0U3R5bGU7XG4iLCJpbXBvcnQge1xuICBwcmltYXJ5Q29sb3IsXG4gIHdhcm5pbmdDb2xvcixcbiAgZGFuZ2VyQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgaW5mb0NvbG9yLFxuICByb3NlQ29sb3IsXG4gIGdyYXlDb2xvcixcbiAgdGl0bGVcbn0gZnJvbSBcIi4uLy4uLy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzXCI7XG5cbmNvbnN0IGluZm9TdHlsZSA9IHtcbiAgaW5mb0FyZWE6IHtcbiAgICBtYXhXaWR0aDogXCIzNjBweFwiLFxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICBwYWRkaW5nOiBcIjBweFwiXG4gIH0sXG4gIGljb25XcmFwcGVyOiB7XG4gICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgIG1hcmdpblRvcDogXCIyNHB4XCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiMTBweFwiXG4gIH0sXG4gIHByaW1hcnk6IHtcbiAgICBjb2xvcjogcHJpbWFyeUNvbG9yXG4gIH0sXG4gIHdhcm5pbmc6IHtcbiAgICBjb2xvcjogd2FybmluZ0NvbG9yXG4gIH0sXG4gIGRhbmdlcjoge1xuICAgIGNvbG9yOiBkYW5nZXJDb2xvclxuICB9LFxuICBzdWNjZXNzOiB7XG4gICAgY29sb3I6IHN1Y2Nlc3NDb2xvclxuICB9LFxuICBpbmZvOiB7XG4gICAgY29sb3I6IGluZm9Db2xvclxuICB9LFxuICByb3NlOiB7XG4gICAgY29sb3I6IHJvc2VDb2xvclxuICB9LFxuICBncmF5OiB7XG4gICAgY29sb3I6IGdyYXlDb2xvclxuICB9LFxuICBpY29uOiB7XG4gICAgd2lkdGg6IFwiMzZweFwiLFxuICAgIGhlaWdodDogXCIzNnB4XCJcbiAgfSxcbiAgZGVzY3JpcHRpb25XcmFwcGVyOiB7XG4gICAgY29sb3I6IGdyYXlDb2xvcixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxuICB9LFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBjb2xvcjogZ3JheUNvbG9yLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIG1hcmdpblRvcDogXCIwcHhcIixcbiAgICBmb250U2l6ZTogXCIxNHB4XCJcbiAgfSxcbiAgaWNvbldyYXBwZXJWZXJ0aWNhbDoge1xuICAgIGZsb2F0OiBcIm5vbmVcIlxuICB9LFxuICBpY29uVmVydGljYWw6IHtcbiAgICB3aWR0aDogXCI2MXB4XCIsXG4gICAgaGVpZ2h0OiBcIjYxcHhcIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmZvU3R5bGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbmltcG9ydCBDaGF0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiO1xuaW1wb3J0IFZlcmlmaWVkVXNlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlclwiO1xuaW1wb3J0IEZpbmdlcnByaW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmluZ2VycHJpbnRcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc1wiO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzXCI7XG5pbXBvcnQgSW5mb0FyZWEgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0luZm9BcmVhL0luZm9BcmVhLmpzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RTZWN0aW9uKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICA8R3JpZENvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezh9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlRhbGsgRGF0YSB0byBNZTwvaDI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBJIGFtIGFsd2F5cyBsb29raW5nIHRvIGFkZCBtb3JlIGRldmVsb3BlcnMgdG8gdGhlIFNwb3J0c0RhdGF2ZXJzZSBkZXZlbG9wZXIgZ3JvdXAgd2hvIHNoYXJlIGNvbW1vbiBjYXVzZVxuICAgICAgICAgICAgd2l0aCB0aGUgYWltIHRvIG1ha2UgdGhlIHNwb3J0cyBkYXRhIGluZHVzdHJ5IG1vcmUgZGl2ZXJzZSBhbmQgaW5jbHVzaXZlLiBUaGUgU3BvcnRzRGF0YXZlcnNlIGlzIGFcbiAgICAgICAgICAgIGNvbmNlcHQgSSBoYXZlIGJlZW4gd29ya2luZyBvbiB3aXRoIGEgaGFuZGZ1bCBvZiBvdGhlciBwZW9wbGUgdG8gY3JlYXRlIGFuZCBkZXZlbG9wIHBhY2thZ2VzIGluIFB5dGhvbiwgUiBhbmQgTm9kZS5qcy5cbiAgICAgICAgICAgIEFtb25nIHRoZSBnb2FscyBvZiB0aGUgU3BvcnRzRGF0YXZlcnNlIGlzIHRvIGZsYXR0ZW4gdGhlIGxlYXJuaW5nIGN1cnZlIHRoZSBhdmVyYWdlIHVzZXIgaGFzIHRvIGdvIHRocm91Z2ggdG8gZ2V0IGFjY2VzcyB0byB0aGUgaGlnaGVzdCBxdWFsaXR5IG9wZW4tc291cmNlIGRhdGEgYW5kIGFuYWx5dGljc1xuICAgICAgICAgIDwvaDQ+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICB7LyogPGRpdj5cbiAgICAgICAgPEdyaWRDb250YWluZXI+XG4gICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17NH0+XG4gICAgICAgICAgICA8SW5mb0FyZWFcbiAgICAgICAgICAgICAgdGl0bGU9XCJGcmVlIENoYXRcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpdmlkZSBkZXRhaWxzIGFib3V0IHlvdXIgcHJvZHVjdCBvciBhZ2VuY3kgd29yayBpbnRvIHBhcnRzLiBXcml0ZSBhIGZldyBsaW5lcyBhYm91dCBlYWNoIG9uZS4gQSBwYXJhZ3JhcGggZGVzY3JpYmluZyBhIGZlYXR1cmUgd2lsbCBiZSBlbm91Z2guXCJcbiAgICAgICAgICAgICAgaWNvbj17Q2hhdH1cbiAgICAgICAgICAgICAgaWNvbkNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgIHZlcnRpY2FsXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17NH0+XG4gICAgICAgICAgICA8SW5mb0FyZWFcbiAgICAgICAgICAgICAgdGl0bGU9XCJWZXJpZmllZCBVc2Vyc1wiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGl2aWRlIGRldGFpbHMgYWJvdXQgeW91ciBwcm9kdWN0IG9yIGFnZW5jeSB3b3JrIGludG8gcGFydHMuIFdyaXRlIGEgZmV3IGxpbmVzIGFib3V0IGVhY2ggb25lLiBBIHBhcmFncmFwaCBkZXNjcmliaW5nIGEgZmVhdHVyZSB3aWxsIGJlIGVub3VnaC5cIlxuICAgICAgICAgICAgICBpY29uPXtWZXJpZmllZFVzZXJ9XG4gICAgICAgICAgICAgIGljb25Db2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPEluZm9BcmVhXG4gICAgICAgICAgICAgIHRpdGxlPVwiRmluZ2VycHJpbnRcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpdmlkZSBkZXRhaWxzIGFib3V0IHlvdXIgcHJvZHVjdCBvciBhZ2VuY3kgd29yayBpbnRvIHBhcnRzLiBXcml0ZSBhIGZldyBsaW5lcyBhYm91dCBlYWNoIG9uZS4gQSBwYXJhZ3JhcGggZGVzY3JpYmluZyBhIGZlYXR1cmUgd2lsbCBiZSBlbm91Z2guXCJcbiAgICAgICAgICAgICAgaWNvbj17RmluZ2VycHJpbnR9XG4gICAgICAgICAgICAgIGljb25Db2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAgIHZlcnRpY2FsXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qc1wiO1xuaW1wb3J0IEN1c3RvbUlucHV0IGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9DdXN0b21JbnB1dC9DdXN0b21JbnB1dC5qc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvU2hhcmVkLm1vZHVsZS5jc3MnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya1NlY3Rpb24oKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgIDxHcmlkQ29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPEdyaWRJdGVtIGNzPXsxMn0gc209ezEyfSBtZD17OH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+V29yayB3aXRoIHVzPC9oMj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIEFyZSB5b3UgaW50ZXJlc3RlZCBpbiB3b3JraW5nIHdpdGggc3BvcnRzIGRhdGEsIGRldmVsb3Bpbmcgb3Blbi1zb3VyY2UgcGFja2FnZXNcbiAgICAgICAgICAgIGFuZCBoZWxwaW5nIHRlYWNoIG90aGVycyB0byBkbyB0aGUgc2FtZT8gT3VyIGdyb3VwIGlzIGRlZGljYXRlZCB0byB0aGUgY2F1c2Ugb2ZcbiAgICAgICAgICAgIHRyeWluZyB0byBpbmNsdWRlIHBlb3BsZSBmcm9tIG1vcmUgZGl2ZXJzZSBiYWNrZ3JvdW5kcyBhbmQgdW5kZXJyZXByZXNlbnRlZFxuICAgICAgICAgICAgZ3JvdXBzIGluIHNwb3J0cy4gQWRkaXRpb25hbGx5LCB3ZSBhcmUgbWFraW5nIHRoZSBwdWJsaWNseSBhdmFpbGFibGUgc3BvcnRzXG4gICAgICAgICAgICBkYXRhIG11Y2ggbW9yZSBhY2Nlc3NpYmxlIHRvIHRoZSBjb21tb24gcGVyc29uLiBUaGUgZGVzaXJlZCBnb2FsIGlzIHRvIGNyZWF0ZVxuICAgICAgICAgICAgYSBzdXBwb3J0aXZlIGNvbW11bml0eSB0aGF0IHdpbGwgcHJvdmlkZSBndWlkYW5jZSBhbmQgbWVudG9yIHRob3NlIHdobyB3YW50IHRvXG4gICAgICAgICAgICBiZSBhIHBhcnQgb2YgdGhlIHNvbHV0aW9uLiBEcm9wIG1lIGEgYnJpZWYgbWVzc2FnZSBiZWxvdyBzbyB0aGF0IEkgY2FuIHJlYWNoIG91dCB0byB5b3UhXG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tSW5wdXRcbiAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIllvdXIgTmFtZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XG4gICAgICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJZb3VyIEVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiWW91ciBNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0QXJlYVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgcm93czogNVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0Q2VudGVyfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlNlbmQgTWVzc2FnZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuXHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSdcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzXCI7XHJcbmltcG9ydCBQYXJhbGxheCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvUGFyYWxsYXgvUGFyYWxsYXguanNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9TaGFyZWQubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgTkFNRSwgTkFNRV9BTkRfRE9NQUlOIH0gZnJvbSAnLi4vc3JjL3R5cGVzL2NvbnN0YW50cydcclxuXHJcbi8vIFNlY3Rpb25zIGZvciB0aGlzIHBhZ2VcclxuaW1wb3J0IFByb2R1Y3RTZWN0aW9uIGZyb20gXCIuLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9Qcm9kdWN0U2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgVGVhbVNlY3Rpb24gZnJvbSBcIi4uL3BhZ2VzLXNlY3Rpb25zL0xhbmRpbmdQYWdlLVNlY3Rpb25zL1RlYW1TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBXb3JrU2VjdGlvbiBmcm9tIFwiLi4vcGFnZXMtc2VjdGlvbnMvTGFuZGluZ1BhZ2UtU2VjdGlvbnMvV29ya1NlY3Rpb24uanNcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZ1BhZ2UocHJvcHMpIHtcclxuICBjb25zdCBsYXJnZSA9IHVzZU1lZGlhUXVlcnkoJyhtaW4td2lkdGg6NzAwcHgpJylcclxuICBjb25zdCB7IC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+e05BTUV9OiBCdWlsZGluZyB0aGUgU3BvcnRzRGF0YXZlcnNlPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e2Ake05BTUV9IGlzIGEgYmxvZyBvbiB2YXJpb3VzIHRvcGljcyBpbiBmdWxsIHN0YWNrIGRldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgd2l0aCBhIGZvY3VzIG9uIGN1cnJlbnQgdGVjaG5vbG9naWVzIGxpa2UgUmVhY3QsIE5leHRKUyBhbmQgUiBwcm9ncmFtbWluZy5gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmdzfT5cclxuICAgICAgICAgICAgPEJveCBwPXs1fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXtsYXJnZSA/ICdoMScgOiAnaDQnfT57TkFNRV9BTkRfRE9NQUlOfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRIZWFkaW5nfSB2YXJpYW50PXtsYXJnZSA/ICdoMycgOiAnaDYnfT5cclxuICAgICAgICAgICAgICBCdWlsZGluZyB0aGUgU3BvcnRzRGF0YXZlcnNlLlxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5tYWluLCBzdHlsZXMubWFpblJhaXNlZCl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ3N9PlxyXG4gICAgICAgICAgey8qIDxUZWFtU2VjdGlvbiAvPiAqL31cclxuICAgICAgICAgIDxQcm9kdWN0U2VjdGlvbiAvPlxyXG4gICAgICAgICAgPFdvcmtTZWN0aW9uIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcblxuaW1wb3J0IGJ1dHRvblN0eWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9idXR0b25TdHlsZS5qc1wiO1xuXG5jb25zdCBtYWtlQ29tcG9uZW50U3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xuICAuLi5idXR0b25TdHlsZVxufSkpO1xuXG5jb25zdCBSZWd1bGFyQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgY29sb3IsXG4gICAgcm91bmQsXG4gICAgY2hpbGRyZW4sXG4gICAgZnVsbFdpZHRoLFxuICAgIGRpc2FibGVkLFxuICAgIHNpbXBsZSxcbiAgICBzaXplLFxuICAgIGJsb2NrLFxuICAgIGxpbmssXG4gICAganVzdEljb24sXG4gICAgY2xhc3NOYW1lLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBtYWtlQ29tcG9uZW50U3R5bGVzKCk7XG5cbiAgY29uc3QgYnRuQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmJ1dHRvbl06IHRydWUsXG4gICAgW2NsYXNzZXNbc2l6ZV1dOiBzaXplLFxuICAgIFtjbGFzc2VzW2NvbG9yXV06IGNvbG9yLFxuICAgIFtjbGFzc2VzLnJvdW5kXTogcm91bmQsXG4gICAgW2NsYXNzZXMuZnVsbFdpZHRoXTogZnVsbFdpZHRoLFxuICAgIFtjbGFzc2VzLmRpc2FibGVkXTogZGlzYWJsZWQsXG4gICAgW2NsYXNzZXMuc2ltcGxlXTogc2ltcGxlLFxuICAgIFtjbGFzc2VzLmJsb2NrXTogYmxvY2ssXG4gICAgW2NsYXNzZXMubGlua106IGxpbmssXG4gICAgW2NsYXNzZXMuanVzdEljb25dOiBqdXN0SWNvbixcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxCdXR0b24gey4uLnJlc3R9IHJlZj17cmVmfSBjbGFzc2VzPXt7IHJvb3Q6IGJ0bkNsYXNzZXMgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9CdXR0b24+XG4gICk7XG59KTtcblxuUmVndWxhckJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwicHJpbWFyeVwiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gICAgXCJyb3NlXCIsXG4gICAgXCJ3aGl0ZVwiLFxuICAgIFwiZmFjZWJvb2tcIixcbiAgICBcInR3aXR0ZXJcIixcbiAgICBcImdvb2dsZVwiLFxuICAgIFwiZ2l0aHViXCIsXG4gICAgXCJ0cmFuc3BhcmVudFwiXG4gIF0pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJsZ1wiXSksXG4gIHNpbXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHJvdW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBibG9jazogUHJvcFR5cGVzLmJvb2wsXG4gIGxpbms6IFByb3BUeXBlcy5ib29sLFxuICBqdXN0SWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWd1bGFyQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2NvbXBvbmVudHMvY3VzdG9tSW5wdXRTdHlsZS5qc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUlucHV0KHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qge1xuICAgIGZvcm1Db250cm9sUHJvcHMsXG4gICAgbGFiZWxUZXh0LFxuICAgIGlkLFxuICAgIGxhYmVsUHJvcHMsXG4gICAgaW5wdXRQcm9wcyxcbiAgICBlcnJvcixcbiAgICB3aGl0ZSxcbiAgICBpbnB1dFJvb3RDdXN0b21DbGFzc2VzLFxuICAgIHN1Y2Nlc3NcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGxhYmVsQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtcIiBcIiArIGNsYXNzZXMubGFiZWxSb290RXJyb3JdOiBlcnJvcixcbiAgICBbXCIgXCIgKyBjbGFzc2VzLmxhYmVsUm9vdFN1Y2Nlc3NdOiBzdWNjZXNzICYmICFlcnJvclxuICB9KTtcbiAgY29uc3QgdW5kZXJsaW5lQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLnVuZGVybGluZUVycm9yXTogZXJyb3IsXG4gICAgW2NsYXNzZXMudW5kZXJsaW5lU3VjY2Vzc106IHN1Y2Nlc3MgJiYgIWVycm9yLFxuICAgIFtjbGFzc2VzLnVuZGVybGluZV06IHRydWUsXG4gICAgW2NsYXNzZXMud2hpdGVVbmRlcmxpbmVdOiB3aGl0ZVxuICB9KTtcbiAgY29uc3QgbWFyZ2luVG9wID0gY2xhc3NOYW1lcyh7XG4gICAgW2lucHV0Um9vdEN1c3RvbUNsYXNzZXNdOiBpbnB1dFJvb3RDdXN0b21DbGFzc2VzICE9PSB1bmRlZmluZWRcbiAgfSk7XG4gIGNvbnN0IGlucHV0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmlucHV0XTogdHJ1ZSxcbiAgICBbY2xhc3Nlcy53aGl0ZUlucHV0XTogd2hpdGVcbiAgfSk7XG4gIHZhciBmb3JtQ29udHJvbENsYXNzZXM7XG4gIGlmIChmb3JtQ29udHJvbFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICBmb3JtQ29udHJvbENsYXNzZXMgPSBjbGFzc05hbWVzKFxuICAgICAgZm9ybUNvbnRyb2xQcm9wcy5jbGFzc05hbWUsXG4gICAgICBjbGFzc2VzLmZvcm1Db250cm9sXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBmb3JtQ29udHJvbENsYXNzZXMgPSBjbGFzc2VzLmZvcm1Db250cm9sO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sIHsuLi5mb3JtQ29udHJvbFByb3BzfSBjbGFzc05hbWU9e2Zvcm1Db250cm9sQ2xhc3Nlc30+XG4gICAgICB7bGFiZWxUZXh0ICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgIDxJbnB1dExhYmVsXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsUm9vdCArIFwiIFwiICsgbGFiZWxDbGFzc2VzfVxuICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsVGV4dH1cbiAgICAgICAgPC9JbnB1dExhYmVsPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8SW5wdXRcbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIGlucHV0OiBpbnB1dENsYXNzZXMsXG4gICAgICAgICAgcm9vdDogbWFyZ2luVG9wLFxuICAgICAgICAgIGRpc2FibGVkOiBjbGFzc2VzLmRpc2FibGVkLFxuICAgICAgICAgIHVuZGVybGluZTogdW5kZXJsaW5lQ2xhc3Nlc1xuICAgICAgICB9fVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICA8L0Zvcm1Db250cm9sPlxuICApO1xufVxuXG5DdXN0b21JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmb3JtQ29udHJvbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpbnB1dFJvb3RDdXN0b21DbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHN1Y2Nlc3M6IFByb3BUeXBlcy5ib29sLFxuICB3aGl0ZTogUHJvcFR5cGVzLmJvb2xcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyOiBGQyA9ICh7fSk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mb290ZXJ9PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBkaXNwbGF5PVwiaW5saW5lXCIgY2xhc3NOYW1lPXtzdHlsZVsnZm9vdGVyLWNvbnRlbnQnXX0+XHJcbiAgICAgICAgQ29weXJpZ2h0IMKpIDIwMjF7JyAnfVxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmdpdGh1Yi5jb20vc2FpZW1naWxhbmlcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICBTYWllbSBHaWxhbmlcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBncmlkOiB7XG4gICAgbWFyZ2luUmlnaHQ6IFwiLTE1cHhcIixcbiAgICBtYXJnaW5MZWZ0OiBcIi0xNXB4XCIsXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIlxuICB9XG59O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWRDb250YWluZXIocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciB7Li4ucmVzdH0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWQgKyBcIiBcIiArIGNsYXNzTmFtZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HcmlkPlxuICApO1xufVxuXG5HcmlkQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiXG59O1xuXG5HcmlkQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ3JpZDoge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIG1pbkhlaWdodDogXCIxcHhcIixcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMTVweFwiLFxuICAgIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcbiAgICBmbGV4QmFzaXM6IFwiYXV0b1wiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIlxuICB9XG59O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWRJdGVtKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBpdGVtIHsuLi5yZXN0fSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZCArIFwiIFwiICsgY2xhc3NOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cbkdyaWRJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiXG59O1xuXG5HcmlkSXRlbS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9pbmZvU3R5bGUuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvQXJlYShwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpY29uQ29sb3IsIHZlcnRpY2FsIH0gPSBwcm9wcztcbiAgY29uc3QgaWNvbldyYXBwZXIgPSBjbGFzc05hbWVzKHtcbiAgICBbY2xhc3Nlcy5pY29uV3JhcHBlcl06IHRydWUsXG4gICAgW2NsYXNzZXNbaWNvbkNvbG9yXV06IHRydWUsXG4gICAgW2NsYXNzZXMuaWNvbldyYXBwZXJWZXJ0aWNhbF06IHZlcnRpY2FsXG4gIH0pO1xuICBjb25zdCBpY29uQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmljb25dOiB0cnVlLFxuICAgIFtjbGFzc2VzLmljb25WZXJ0aWNhbF06IHZlcnRpY2FsXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9BcmVhfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpY29uV3JhcHBlcn0+XG4gICAgICAgIDxwcm9wcy5pY29uIGNsYXNzTmFtZT17aWNvbkNsYXNzZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9uV3JhcHBlcn0+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0aXRsZX08L2g0PlxuICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuSW5mb0FyZWEuZGVmYXVsdFByb3BzID0ge1xuICBpY29uQ29sb3I6IFwiZ3JheVwiXG59O1xuXG5JbmZvQXJlYS5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSkuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWNvbkNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwicHJpbWFyeVwiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJpbmZvXCIsXG4gICAgXCJyb3NlXCIsXG4gICAgXCJncmF5XCJcbiAgXSksXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbFxufTtcbiIsImV4cG9ydCBjb25zdCBOQU1FID0gJ1NHJ1xyXG5leHBvcnQgY29uc3QgTkFNRV9BTkRfRE9NQUlOID0gJ1NHJ1xyXG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9zYWllbWdpbGFuaS5tZSdcclxuZXhwb3J0IGNvbnN0IERFUExPWU1FTlRTX1VSTCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3NhaWVtZ2lsYW5pL3NhaWVtLWJsb2cvZGVwbG95bWVudHMnXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzMxN2lLXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkaW5nc1wiOiBcIlNoYXJlZF9oZWFkaW5nc19fcjN5NzJcIixcblx0XCJzZWNvbmRIZWFkaW5nXCI6IFwiU2hhcmVkX3NlY29uZEhlYWRpbmdfX2dxQXhPXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmluZ2VycHJpbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9