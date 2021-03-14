webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_highlight_js_styles_monokai_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/highlight.js/styles/monokai.css */ "./node_modules/highlight.js/styles/monokai.css");
/* harmony import */ var _node_modules_highlight_js_styles_monokai_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_highlight_js_styles_monokai_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/highlight.js/lib/highlight */ "./node_modules/highlight.js/lib/highlight.js");
/* harmony import */ var _node_modules_highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Slug.module.css */ "./styles/Slug.module.css");
/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_PageHeading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/components/PageHeading */ "./src/components/PageHeading.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_components_TopicsDisplay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/components/TopicsDisplay */ "./src/components/TopicsDisplay.tsx");
/* harmony import */ var _src_components_PreviewCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/components/PreviewCard */ "./src/components/PreviewCard.tsx");
/* harmony import */ var _src_types_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/types/constants */ "./src/types/constants.ts");



var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\pages\\blog\\[slug].tsx",
    _this = undefined,
    _s = $RefreshSig$();















var Slug = function Slug(_ref) {
  _s();

  var postData = _ref.postData,
      nextPath = _ref.nextPath;
  marked__WEBPACK_IMPORTED_MODULE_2___default.a.setOptions({
    highlight: function highlight(code) {
      return highlight_js__WEBPACK_IMPORTED_MODULE_4___default.a.highlightAuto(code).value;
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.querySelectorAll('pre code').forEach(function (block) {
      highlight_js__WEBPACK_IMPORTED_MODULE_4___default.a.highlightBlock(block);
    });
  }, [postData]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: postData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: postData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "article:published_time",
        content: "".concat(postData.date, "T10:00:00Z")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:card",
        content: "summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:description",
        content: postData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:title",
        content: postData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:image",
        content: "".concat(_src_types_constants__WEBPACK_IMPORTED_MODULE_13__["BASE_URL"], "/small/").concat(postData.id, ".png")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "article"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: postData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: postData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "".concat(_src_types_constants__WEBPACK_IMPORTED_MODULE_13__["BASE_URL"], "/blog/").concat(postData.id)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: _src_types_constants__WEBPACK_IMPORTED_MODULE_13__["NAME"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "".concat(_src_types_constants__WEBPACK_IMPORTED_MODULE_13__["BASE_URL"], "/small/").concat(postData.id, ".png")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:secure_url",
        content: "".concat(_src_types_constants__WEBPACK_IMPORTED_MODULE_13__["BASE_URL"], "/small/").concat(postData.id, ".png")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7___default.a['text-content'],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_PageHeading__WEBPACK_IMPORTED_MODULE_8__["PageHeading"], {
        title: postData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7___default.a['image-container'],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.info,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
          variant: "body1",
          children: [postData.date, " \u2014 written by", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "http://www.github.com/saiemgilani",
            target: "_blank",
            rel: "noreferrer",
            style: {
              display: 'inline-flex',
              alignItems: 'center'
            },
            children: ["Saiem Gilani ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_10___default.a, {
              fontSize: "small",
              style: {
                marginLeft: 10
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 28
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_TopicsDisplay__WEBPACK_IMPORTED_MODULE_11__["default"], {
          topics: postData.topics,
          n: 10,
          noMargin: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7___default.a['image-container'],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardMedia"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: postData.title,
            loading: "lazy",
            src: "/large/".concat(postData.id, ".png")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7___default.a['post-container'],
      dangerouslySetInnerHTML: {
        __html: marked__WEBPACK_IMPORTED_MODULE_2___default()(postData.content)
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7___default.a['post-container'],
      style: {
        paddingTop: 50
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        variant: "h4",
        component: "p",
        style: {
          paddingBottom: 20
        },
        children: "Recommended"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_PreviewCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        post: nextPath,
        noMargin: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Slug, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Slug;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Slug);

var _c;

$RefreshReg$(_c, "Slug");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10udHN4Il0sIm5hbWVzIjpbIlNsdWciLCJwb3N0RGF0YSIsIm5leHRQYXRoIiwibWFya2VkIiwic2V0T3B0aW9ucyIsImhpZ2hsaWdodCIsImNvZGUiLCJobGpzIiwiaGlnaGxpZ2h0QXV0byIsInZhbHVlIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJsb2NrIiwiaGlnaGxpZ2h0QmxvY2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsIkJBU0VfVVJMIiwiaWQiLCJOQU1FIiwic3R5bGVzIiwiaW5mbyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luTGVmdCIsInRvcGljcyIsImltYWdlIiwiX19odG1sIiwiY29udGVudCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxJQUFlLEdBQUcsU0FBbEJBLElBQWtCLE9BQTBDO0FBQUE7O0FBQUEsTUFBdkNDLFFBQXVDLFFBQXZDQSxRQUF1QztBQUFBLE1BQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFDaEVDLCtDQUFNLENBQUNDLFVBQVAsQ0FBa0I7QUFDaEJDLGFBQVMsRUFBRSxtQkFBVUMsSUFBVixFQUFnQjtBQUN6QixhQUFPQyxtREFBSSxDQUFDQyxhQUFMLENBQW1CRixJQUFuQixFQUF5QkcsS0FBaEM7QUFDRDtBQUhlLEdBQWxCO0FBTUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxZQUFRLENBQUNDLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDQyxPQUF0QyxDQUE4QyxVQUFDQyxLQUFELEVBQXdCO0FBQ3BFUCx5REFBSSxDQUFDUSxj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QUFDLGdCQUFELENBQXRCO0FBQTBDLFdBQUssRUFBRTtBQUFFUyxrQkFBVSxFQUFFO0FBQWQsT0FBakQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyw0REFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUF5QixpQkFBUyxFQUFDLEdBQW5DO0FBQXVDLGFBQUssRUFBRTtBQUFFQyx1QkFBYSxFQUFFO0FBQWpCLFNBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFLRSxxRUFBQyxvRUFBRDtBQUFhLFlBQUksRUFBRTlCLFFBQW5CO0FBQTZCLGdCQUFRO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvQ0Y7QUFBQSxrQkFERjtBQXlERCxDQXRFRDs7R0FBTUYsSTs7S0FBQUEsSTs7QUErR1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cvW3NsdWddLmM2NTI5ZThmNTkwYjFlNmNjMjU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGdldFBvc3QsIGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uLy4uL3NyYy9saWIvcG9zdHMnXHJcbmltcG9ydCB7IFBvc3REYXRhIH0gZnJvbSAnLi4vLi4vc3JjL3R5cGVzL3Bvc3RzJ1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wc0NvbnRleHQsIEdldFN0YXRpY1Byb3BzUmVzdWx0IH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzJ1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL21vbm9rYWkuY3NzJ1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2hpZ2hsaWdodCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvU2x1Zy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBQYWdlSGVhZGluZyB9IGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL1BhZ2VIZWFkaW5nJ1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkTWVkaWEsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1YidcclxuaW1wb3J0IFRvcGljc0Rpc3BsYXkgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvVG9waWNzRGlzcGxheSdcclxuaW1wb3J0IFByZXZpZXdDYXJkIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL1ByZXZpZXdDYXJkJ1xyXG5pbXBvcnQgeyBCQVNFX1VSTCwgTkFNRSB9IGZyb20gJy4uLy4uL3NyYy90eXBlcy9jb25zdGFudHMnXHJcblxyXG50eXBlIFByb3BzID0geyBwb3N0RGF0YTogUG9zdERhdGE7IG5leHRQYXRoOiBQb3N0RGF0YSB9XHJcblxyXG5jb25zdCBTbHVnOiBGQzxQcm9wcz4gPSAoeyBwb3N0RGF0YSwgbmV4dFBhdGggfSk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgbWFya2VkLnNldE9wdGlvbnMoe1xyXG4gICAgaGlnaGxpZ2h0OiBmdW5jdGlvbiAoY29kZSkge1xyXG4gICAgICByZXR1cm4gaGxqcy5oaWdobGlnaHRBdXRvKGNvZGUpLnZhbHVlXHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZScpLmZvckVhY2goKGJsb2NrOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKVxyXG4gICAgfSlcclxuICB9LCBbcG9zdERhdGFdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwb3N0RGF0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3REYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiIGNvbnRlbnQ9e2Ake3Bvc3REYXRhLmRhdGV9VDEwOjAwOjAwWmB9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3REYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17cG9zdERhdGEudGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtgJHtCQVNFX1VSTH0vc21hbGwvJHtwb3N0RGF0YS5pZH0ucG5nYH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3Bvc3REYXRhLnRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0RGF0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2Ake0JBU0VfVVJMfS9ibG9nLyR7cG9zdERhdGEuaWR9YH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e05BTUV9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake0JBU0VfVVJMfS9zbWFsbC8ke3Bvc3REYXRhLmlkfS5wbmdgfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiIGNvbnRlbnQ9e2Ake0JBU0VfVVJMfS9zbWFsbC8ke3Bvc3REYXRhLmlkfS5wbmdgfSAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RleHQtY29udGVudCddfT5cclxuICAgICAgICA8UGFnZUhlYWRpbmcgdGl0bGU9e3Bvc3REYXRhLnRpdGxlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snaW1hZ2UtY29udGFpbmVyJ119PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cclxuICAgICAgICAgICAge3Bvc3REYXRhLmRhdGV9IOKAlCB3cml0dGVuIGJ5eycgJ31cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5naXRodWIuY29tL3NhaWVtZ2lsYW5pXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNhaWVtIEdpbGFuaSA8R2l0SHViSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAgfX0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFRvcGljc0Rpc3BsYXkgdG9waWNzPXtwb3N0RGF0YS50b3BpY3N9IG49ezEwfSBub01hcmdpbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snaW1hZ2UtY29udGFpbmVyJ119PlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT5cclxuICAgICAgICAgIDxDYXJkTWVkaWE+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PXtwb3N0RGF0YS50aXRsZX0gbG9hZGluZz1cImxhenlcIiBzcmM9e2AvbGFyZ2UvJHtwb3N0RGF0YS5pZH0ucG5nYH0gLz5cclxuICAgICAgICAgIDwvQ2FyZE1lZGlhPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3Bvc3QtY29udGFpbmVyJ119IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWFya2VkKHBvc3REYXRhLmNvbnRlbnQpIH19IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3Bvc3QtY29udGFpbmVyJ119IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDUwIH19PlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cInBcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAyMCB9fT5cclxuICAgICAgICAgIFJlY29tbWVuZGVkXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxQcmV2aWV3Q2FyZCBwb3N0PXtuZXh0UGF0aH0gbm9NYXJnaW4gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbnR5cGUgU3RhdGljUGF0aHMgPSB7IHBhdGhzOiB7IHBhcmFtczogeyBzbHVnOiBzdHJpbmcgfSB9W107IGZhbGxiYWNrOiBib29sZWFuIH1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7XHJcbiAgcGFyYW1zOiB7IHNsdWcgfSxcclxufTogR2V0U3RhdGljUHJvcHNDb250ZXh0PHsgc2x1Zzogc3RyaW5nIH0+KTogUHJvbWlzZTxcclxuICBHZXRTdGF0aWNQcm9wc1Jlc3VsdDx7XHJcbiAgICBwb3N0RGF0YTogUG9zdERhdGFcclxuICAgIG5leHRQYXRoOiBQb3N0RGF0YVxyXG4gIH0+XHJcbj4gPT4ge1xyXG4gIGNvbnN0IHBvc3REYXRhID0gZ2V0UG9zdChzbHVnLCB0cnVlKVxyXG5cclxuICBjb25zdCBwYXRocyA9IGdldFNvcnRlZFBvc3RzRGF0YSgpXHJcblxyXG4gIGNvbnN0IG5leHRQYXRoID0gIXBvc3REYXRhLnJlY29tbWVuZGVkXHJcbiAgICA/IHBhdGhzLnJlZHVjZSgocHJldiwgY3VyciwgaSkgPT4gKGN1cnIuaWQgPT09IHNsdWcgJiYgaSA+PSAxID8gcGF0aHNbaSAtIDFdIDogY3VyciksIHBhdGhzW3BhdGhzLmxlbmd0aCAtIDFdKVxyXG4gICAgOiBwYXRocy5maWx0ZXIoKHApID0+IHAuaWQgPT09IHBvc3REYXRhLnJlY29tbWVuZGVkKS5wb3AoKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdERhdGEsXHJcbiAgICAgIG5leHRQYXRoLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpOiBQcm9taXNlPFN0YXRpY1BhdGhzPiA9PiB7XHJcbiAgY29uc3QgcGF0aHMgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKS5tYXAoKHsgaWQgfSkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBzbHVnOiBpZCxcclxuICAgIH0sXHJcbiAgfSkpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsdWdcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==