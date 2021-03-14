webpackHotUpdate_N_E("pages/landing",{

/***/ "./assets/jss/nextjs-material-kit.js":
/*!*******************************************!*\
  !*** ./assets/jss/nextjs-material-kit.js ***!
  \*******************************************/
/*! exports provided: hexToRGBAlpha, drawerWidth, transition, container, conatinerFluid, boxShadow, card, defaultFont, primaryColor, warningColor, dangerColor, successColor, infoColor, roseColor, grayColor, primaryBoxShadow, infoBoxShadow, successBoxShadow, warningBoxShadow, dangerBoxShadow, roseBoxShadow, warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader, cardActions, cardHeader, defaultBoxShadow, title, smallTitle, cardTitle, cardLink, cardSubtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGBAlpha", function() { return hexToRGBAlpha; });
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
/* harmony import */ var C_Users_saiem_Documents_GitHub_saiem_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_saiem_Documents_GitHub_saiem_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var hexColorToRGB = function hexColorToRGB(hexColor) {
  var detectShorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // #000 vs #000000

  hexColor = hexColor.replace(detectShorthand, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var hex_array = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor); // #000000 to #ffffff

  return hex_array ? {
    r: parseInt(hex_array[1], 16),
    // 0-255
    g: parseInt(hex_array[2], 16),
    // 0-255
    b: parseInt(hex_array[3], 16) // 0-255

  } : null;
};

var hexToRGBAlpha = function hexToRGBAlpha(hexColor, alpha) {
  var rgb = hexColorToRGB(hexColor);
  return "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(alpha, ")");
};

var drawerWidth = 260;
var transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
var conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

var container = _objectSpread(_objectSpread({}, conatinerFluid), {}, {
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

var boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};
var card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};
var defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
var primaryColor = "#9c27b0";
var warningColor = "#ff9800";
var dangerColor = "#f44336";
var successColor = "#4caf50";
var infoColor = "#00acc1";
var roseColor = "#e91e63";
var grayColor = "#999999";
var primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px ".concat(hexToRGBAlpha(primaryColor, 0.28), ", 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ").concat(hexToRGBAlpha(primaryColor, 0.2))
};
var infoBoxShadow = {
  boxShadow: "0 12px 20px -10px ".concat(hexToRGBAlpha(infoColor, 0.28), ", 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ").concat(hexToRGBAlpha(infoColor, 0.2))
};
var successBoxShadow = {
  boxShadow: "0 12px 20px -10px ".concat(hexToRGBAlpha(successColor, 0.28), ", 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ").concat(hexToRGBAlpha(successColor, 0.2))
};
var warningBoxShadow = {
  boxShadow: "0 12px 20px -10px ".concat(hexToRGBAlpha(warningColor, 0.28), ", 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ").concat(hexToRGBAlpha(warningColor, 0.2))
};
var dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px ".concat(hexToRGBAlpha(dangerColor, 0.28), ", 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ").concat(hexToRGBAlpha(dangerColor, 0.2))
};
var roseBoxShadow = {
  boxShadow: "0 4px 20px 0px ".concat(hexToRGBAlpha("#000", 0.14), ", 0 7px 10px -5px ").concat(hexToRGBAlpha(roseColor, 0.4))
};

var warningCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)"
}, warningBoxShadow);

var successCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)"
}, successBoxShadow);

var dangerCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)"
}, dangerBoxShadow);

var infoCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)"
}, infoBoxShadow);

var primaryCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)"
}, primaryBoxShadow);

var roseCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)"
}, roseBoxShadow);

var cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto"
}, defaultFont);

var cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
var defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
var title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: "\"Roboto Slab\", \"Times New Roman\", serif"
};

var smallTitle = _objectSpread(_objectSpread({}, title), {}, {
  marginTop: ".625rem"
});

var cardTitle = _objectSpread(_objectSpread({}, smallTitle), {}, {
  marginTop: ".625rem"
});

var cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
var cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzIl0sIm5hbWVzIjpbImhleENvbG9yVG9SR0IiLCJoZXhDb2xvciIsImRldGVjdFNob3J0aGFuZCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJiIiwiaGV4X2FycmF5IiwiZXhlYyIsInBhcnNlSW50IiwiaGV4VG9SR0JBbHBoYSIsImFscGhhIiwicmdiIiwiZHJhd2VyV2lkdGgiLCJ0cmFuc2l0aW9uIiwiY29uYXRpbmVyRmx1aWQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiY29udGFpbmVyIiwibWF4V2lkdGgiLCJib3hTaGFkb3ciLCJjYXJkIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdEZvbnQiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJwcmltYXJ5Q29sb3IiLCJ3YXJuaW5nQ29sb3IiLCJkYW5nZXJDb2xvciIsInN1Y2Nlc3NDb2xvciIsImluZm9Db2xvciIsInJvc2VDb2xvciIsImdyYXlDb2xvciIsInByaW1hcnlCb3hTaGFkb3ciLCJpbmZvQm94U2hhZG93Iiwic3VjY2Vzc0JveFNoYWRvdyIsIndhcm5pbmdCb3hTaGFkb3ciLCJkYW5nZXJCb3hTaGFkb3ciLCJyb3NlQm94U2hhZG93Iiwid2FybmluZ0NhcmRIZWFkZXIiLCJzdWNjZXNzQ2FyZEhlYWRlciIsImRhbmdlckNhcmRIZWFkZXIiLCJpbmZvQ2FyZEhlYWRlciIsInByaW1hcnlDYXJkSGVhZGVyIiwicm9zZUNhcmRIZWFkZXIiLCJjYXJkQWN0aW9ucyIsInBhZGRpbmdUb3AiLCJib3JkZXJUb3AiLCJoZWlnaHQiLCJjYXJkSGVhZGVyIiwicGFkZGluZyIsImRlZmF1bHRCb3hTaGFkb3ciLCJib3JkZXIiLCJ0aXRsZSIsInRleHREZWNvcmF0aW9uIiwic21hbGxUaXRsZSIsIm1hcmdpblRvcCIsImNhcmRUaXRsZSIsImNhcmRMaW5rIiwiY2FyZFN1YnRpdGxlIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBU0MsUUFBVCxFQUFtQjtBQUN2QyxNQUFJQyxlQUFlLEdBQUcsa0NBQXRCLENBRHVDLENBQ21COztBQUMxREQsVUFBUSxHQUFHQSxRQUFRLENBQUNFLE9BQVQsQ0FBaUJELGVBQWpCLEVBQWtDLFVBQVNFLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxDQUFsQixFQUFxQjtBQUNoRSxXQUFPRixDQUFDLEdBQUdBLENBQUosR0FBUUMsQ0FBUixHQUFZQSxDQUFaLEdBQWdCQyxDQUFoQixHQUFvQkEsQ0FBM0I7QUFDRCxHQUZVLENBQVg7QUFJQSxNQUFNQyxTQUFTLEdBQUcsNENBQTRDQyxJQUE1QyxDQUFpRFIsUUFBakQsQ0FBbEIsQ0FOdUMsQ0FNdUM7O0FBQzlFLFNBQU9PLFNBQVMsR0FDWjtBQUNFSCxLQUFDLEVBQUVLLFFBQVEsQ0FBQ0YsU0FBUyxDQUFDLENBQUQsQ0FBVixFQUFlLEVBQWYsQ0FEYjtBQUNpQztBQUMvQkYsS0FBQyxFQUFFSSxRQUFRLENBQUNGLFNBQVMsQ0FBQyxDQUFELENBQVYsRUFBZSxFQUFmLENBRmI7QUFFaUM7QUFDL0JELEtBQUMsRUFBRUcsUUFBUSxDQUFDRixTQUFTLENBQUMsQ0FBRCxDQUFWLEVBQWUsRUFBZixDQUhiLENBR2dDOztBQUhoQyxHQURZLEdBTVosSUFOSjtBQU9ELENBZEQ7O0FBZ0JBLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBU1YsUUFBVCxFQUFtQlcsS0FBbkIsRUFBMEI7QUFDOUMsTUFBSUMsR0FBRyxHQUFHYixhQUFhLENBQUNDLFFBQUQsQ0FBdkI7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QUU7QUFOVyxDQUF6QjtBQVNBLElBQU1nRCxLQUFLLEdBQUc7QUFDWmpDLE9BQUssRUFBRSxTQURLO0FBRVpGLFFBQU0sRUFBRSxvQkFGSTtBQUdab0MsZ0JBQWMsRUFBRSxNQUhKO0FBSVo5QixZQUFVLEVBQUUsS0FKQTtBQUtaRCxZQUFVO0FBTEUsQ0FBZDs7QUFRQSxJQUFNZ0MsVUFBVSxtQ0FDWEYsS0FEVztBQUVkRyxXQUFTLEVBQUU7QUFGRyxFQUFoQjs7QUFLQSxJQUFNQyxTQUFTLG1DQUNWRixVQURVO0FBRWJDLFdBQVMsRUFBRTtBQUZFLEVBQWY7O0FBS0EsSUFBTUUsUUFBUSxHQUFHO0FBQ2YsbUJBQWlCO0FBQ2ZoRCxjQUFVLEVBQUU7QUFERztBQURGLENBQWpCO0FBTUEsSUFBTWlELFlBQVksR0FBRztBQUNuQkMsY0FBWSxFQUFFLEdBREs7QUFFbkJKLFdBQVMsRUFBRTtBQUZRLENBQXJCO0FBS0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGFuZGluZy5mN2E2YzA0YWVmZmQzMTc2MjcwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBoZXhDb2xvclRvUkdCID0gZnVuY3Rpb24oaGV4Q29sb3IpIHtcbiAgbGV0IGRldGVjdFNob3J0aGFuZCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7IC8vICMwMDAgdnMgIzAwMDAwMFxuICBoZXhDb2xvciA9IGhleENvbG9yLnJlcGxhY2UoZGV0ZWN0U2hvcnRoYW5kLCBmdW5jdGlvbihtLCByLCBnLCBiKSB7XG4gICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcbiAgfSk7XG5cbiAgY29uc3QgaGV4X2FycmF5ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleENvbG9yKTsgLy8gIzAwMDAwMCB0byAjZmZmZmZmXG4gIHJldHVybiBoZXhfYXJyYXlcbiAgICA/IHtcbiAgICAgICAgcjogcGFyc2VJbnQoaGV4X2FycmF5WzFdLCAxNiksIC8vIDAtMjU1XG4gICAgICAgIGc6IHBhcnNlSW50KGhleF9hcnJheVsyXSwgMTYpLCAvLyAwLTI1NVxuICAgICAgICBiOiBwYXJzZUludChoZXhfYXJyYXlbM10sIDE2KSAvLyAwLTI1NVxuICAgICAgfVxuICAgIDogbnVsbDtcbn07XG5cbmNvbnN0IGhleFRvUkdCQWxwaGEgPSBmdW5jdGlvbihoZXhDb2xvciwgYWxwaGEpIHtcbiAgbGV0IHJnYiA9IGhleENvbG9yVG9SR0IoaGV4Q29sb3IpO1xuICByZXR1cm4gYHJnYmEoJHtyZ2Iucn0sJHtyZ2IuZ30sJHtyZ2IuYn0sJHthbHBoYX0pYDtcbn07XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMjYwO1xuXG5jb25zdCB0cmFuc2l0aW9uID0ge1xuICB0cmFuc2l0aW9uOiBcImFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpXCJcbn07XG5cbmNvbnN0IGNvbmF0aW5lckZsdWlkID0ge1xuICBwYWRkaW5nUmlnaHQ6IFwiMTVweFwiLFxuICBwYWRkaW5nTGVmdDogXCIxNXB4XCIsXG4gIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gIHdpZHRoOiBcIjEwMCVcIlxufTtcbmNvbnN0IGNvbnRhaW5lciA9IHtcbiAgLi4uY29uYXRpbmVyRmx1aWQsXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KVwiOiB7XG4gICAgbWF4V2lkdGg6IFwiNTQwcHhcIlxuICB9LFxuICBcIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjcyMHB4XCJcbiAgfSxcbiAgXCJAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpXCI6IHtcbiAgICBtYXhXaWR0aDogXCI5NjBweFwiXG4gIH0sXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjExNDBweFwiXG4gIH1cbn07XG5cbmNvbnN0IGJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMHB4IDMwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCA0cHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiXG59O1xuXG5jb25zdCBjYXJkID0ge1xuICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIG1hcmdpbjogXCIyNXB4IDBcIixcbiAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNClcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuODcpXCIsXG4gIGJhY2tncm91bmQ6IFwiI2ZmZlwiXG59O1xuXG5jb25zdCBkZWZhdWx0Rm9udCA9IHtcbiAgZm9udEZhbWlseTogJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZicsXG4gIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gIGxpbmVIZWlnaHQ6IFwiMS41ZW1cIlxufTtcblxuY29uc3QgcHJpbWFyeUNvbG9yID0gXCIjOWMyN2IwXCI7XG5jb25zdCB3YXJuaW5nQ29sb3IgPSBcIiNmZjk4MDBcIjtcbmNvbnN0IGRhbmdlckNvbG9yID0gXCIjZjQ0MzM2XCI7XG5jb25zdCBzdWNjZXNzQ29sb3IgPSBcIiM0Y2FmNTBcIjtcbmNvbnN0IGluZm9Db2xvciA9IFwiIzAwYWNjMVwiO1xuY29uc3Qgcm9zZUNvbG9yID0gXCIjZTkxZTYzXCI7XG5jb25zdCBncmF5Q29sb3IgPSBcIiM5OTk5OTlcIjtcblxuY29uc3QgcHJpbWFyeUJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHByaW1hcnlDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgcHJpbWFyeUNvbG9yLFxuICAgIDAuMlxuICApfWBcbn07XG5jb25zdCBpbmZvQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDEycHggMjBweCAtMTBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgaW5mb0NvbG9yLFxuICAgIDAuMjhcbiAgKX0sIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBpbmZvQ29sb3IsXG4gICAgMC4yXG4gICl9YFxufTtcbmNvbnN0IHN1Y2Nlc3NCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBzdWNjZXNzQ29sb3IsXG4gICAgMC4yOFxuICApfSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHN1Y2Nlc3NDb2xvcixcbiAgICAwLjJcbiAgKX1gXG59O1xuY29uc3Qgd2FybmluZ0JveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHdhcm5pbmdDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgd2FybmluZ0NvbG9yLFxuICAgIDAuMlxuICApfWBcbn07XG5jb25zdCBkYW5nZXJCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBkYW5nZXJDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgZGFuZ2VyQ29sb3IsXG4gICAgMC4yXG4gICl9YFxufTtcbmNvbnN0IHJvc2VCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgNHB4IDIwcHggMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBcIiMwMDBcIixcbiAgICAwLjE0XG4gICl9LCAwIDdweCAxMHB4IC01cHggJHtoZXhUb1JHQkFscGhhKHJvc2VDb2xvciwgMC40KX1gXG59O1xuXG5jb25zdCB3YXJuaW5nQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2ZmYTcyNiwgI2ZiOGMwMClcIixcbiAgLi4ud2FybmluZ0JveFNoYWRvd1xufTtcbmNvbnN0IHN1Y2Nlc3NDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNjZiYjZhLCAjNDNhMDQ3KVwiLFxuICAuLi5zdWNjZXNzQm94U2hhZG93XG59O1xuY29uc3QgZGFuZ2VyQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2VmNTM1MCwgI2U1MzkzNSlcIixcbiAgLi4uZGFuZ2VyQm94U2hhZG93XG59O1xuY29uc3QgaW5mb0NhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMyNmM2ZGEsICMwMGFjYzEpXCIsXG4gIC4uLmluZm9Cb3hTaGFkb3dcbn07XG5jb25zdCBwcmltYXJ5Q2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgI2FiNDdiYywgIzhlMjRhYSlcIixcbiAgLi4ucHJpbWFyeUJveFNoYWRvd1xufTtcbmNvbnN0IHJvc2VDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWM0MDdhLCAjZDgxYjYwKVwiLFxuICAuLi5yb3NlQm94U2hhZG93XG59O1xuY29uc3QgY2FyZEFjdGlvbnMgPSB7XG4gIG1hcmdpbjogXCIwIDIwcHggMTBweFwiLFxuICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZWVlZWVlXCIsXG4gIGhlaWdodDogXCJhdXRvXCIsXG4gIC4uLmRlZmF1bHRGb250XG59O1xuXG5jb25zdCBjYXJkSGVhZGVyID0ge1xuICBtYXJnaW46IFwiLTMwcHggMTVweCAwXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgcGFkZGluZzogXCIxNXB4XCJcbn07XG5cbmNvbnN0IGRlZmF1bHRCb3hTaGFkb3cgPSB7XG4gIGJvcmRlcjogXCIwXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgYm94U2hhZG93OlxuICAgIFwiMCAxMHB4IDIwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCAzcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxuICBwYWRkaW5nOiBcIjEwcHggMFwiLFxuICB0cmFuc2l0aW9uOiBcImFsbCAxNTBtcyBlYXNlIDBzXCJcbn07XG5cbmNvbnN0IHRpdGxlID0ge1xuICBjb2xvcjogXCIjM0M0ODU4XCIsXG4gIG1hcmdpbjogXCIxLjc1cmVtIDAgMC44NzVyZW1cIixcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICBmb250RmFtaWx5OiBgXCJSb2JvdG8gU2xhYlwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZmBcbn07XG5cbmNvbnN0IHNtYWxsVGl0bGUgPSB7XG4gIC4uLnRpdGxlLFxuICBtYXJnaW5Ub3A6IFwiLjYyNXJlbVwiXG59O1xuXG5jb25zdCBjYXJkVGl0bGUgPSB7XG4gIC4uLnNtYWxsVGl0bGUsXG4gIG1hcmdpblRvcDogXCIuNjI1cmVtXCJcbn07XG5cbmNvbnN0IGNhcmRMaW5rID0ge1xuICBcIiYgKyAkY2FyZExpbmtcIjoge1xuICAgIG1hcmdpbkxlZnQ6IFwiMS4yNXJlbVwiXG4gIH1cbn07XG5cbmNvbnN0IGNhcmRTdWJ0aXRsZSA9IHtcbiAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgbWFyZ2luVG9wOiBcIi0uMzc1cmVtXCJcbn07XG5cbmV4cG9ydCB7XG4gIGhleFRvUkdCQWxwaGEsXG4gIC8vdmFyaWFibGVzXG4gIGRyYXdlcldpZHRoLFxuICB0cmFuc2l0aW9uLFxuICBjb250YWluZXIsXG4gIGNvbmF0aW5lckZsdWlkLFxuICBib3hTaGFkb3csXG4gIGNhcmQsXG4gIGRlZmF1bHRGb250LFxuICBwcmltYXJ5Q29sb3IsXG4gIHdhcm5pbmdDb2xvcixcbiAgZGFuZ2VyQ29sb3IsXG4gIHN1Y2Nlc3NDb2xvcixcbiAgaW5mb0NvbG9yLFxuICByb3NlQ29sb3IsXG4gIGdyYXlDb2xvcixcbiAgcHJpbWFyeUJveFNoYWRvdyxcbiAgaW5mb0JveFNoYWRvdyxcbiAgc3VjY2Vzc0JveFNoYWRvdyxcbiAgd2FybmluZ0JveFNoYWRvdyxcbiAgZGFuZ2VyQm94U2hhZG93LFxuICByb3NlQm94U2hhZG93LFxuICB3YXJuaW5nQ2FyZEhlYWRlcixcbiAgc3VjY2Vzc0NhcmRIZWFkZXIsXG4gIGRhbmdlckNhcmRIZWFkZXIsXG4gIGluZm9DYXJkSGVhZGVyLFxuICBwcmltYXJ5Q2FyZEhlYWRlcixcbiAgcm9zZUNhcmRIZWFkZXIsXG4gIGNhcmRBY3Rpb25zLFxuICBjYXJkSGVhZGVyLFxuICBkZWZhdWx0Qm94U2hhZG93LFxuICB0aXRsZSxcbiAgc21hbGxUaXRsZSxcbiAgY2FyZFRpdGxlLFxuICBjYXJkTGluayxcbiAgY2FyZFN1YnRpdGxlXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==