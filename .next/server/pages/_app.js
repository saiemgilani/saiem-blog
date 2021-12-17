(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./src/theme/index.ts + 2 modules
var theme = __webpack_require__(4644);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(8358);
;// CONCATENATED MODULE: external "@material-ui/icons/WbSunnyOutlined"
const WbSunnyOutlined_namespaceObject = require("@material-ui/icons/WbSunnyOutlined");
var WbSunnyOutlined_default = /*#__PURE__*/__webpack_require__.n(WbSunnyOutlined_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/ViewHeadline"
const ViewHeadline_namespaceObject = require("@material-ui/icons/ViewHeadline");
var ViewHeadline_default = /*#__PURE__*/__webpack_require__.n(ViewHeadline_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Brightness2Outlined"
const Brightness2Outlined_namespaceObject = require("@material-ui/icons/Brightness2Outlined");
var Brightness2Outlined_default = /*#__PURE__*/__webpack_require__.n(Brightness2Outlined_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Code"
const Code_namespaceObject = require("@material-ui/icons/Code");
var Code_default = /*#__PURE__*/__webpack_require__.n(Code_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(5258);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useScrollTrigger/useScrollTrigger.js
var useScrollTrigger = __webpack_require__(7369);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./src/types/constants.ts
var constants = __webpack_require__(4812);
// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__(4190);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/TopBar.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const useStyles = (0,makeStyles/* default */.Z)({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#7B1729",
    width: "100%",
    backgroundColor: "#7B1729",
    boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset"
  },
  absolute: {
    position: "absolute"
  },
  fixed: {
    position: "fixed"
  },
  show: {
    transform: 'translateY(0)',
    transition: 'transform .5s'
  },
  hide: {
    transform: 'translateY(-110%)',
    transition: 'transform .5s'
  },
  toolbar: {
    paddingLeft: '5%'
  },
  toolbarContent: {
    paddingLeft: 70
  },
  toolbarRight: {
    right: 0,
    position: 'absolute',
    paddingRight: '5%'
  },
  container: _objectSpread(_objectSpread({}, nextjs_material_kit/* container */.nC), {}, {
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  })
});
const TopBar = () => {
  const trigger = (0,useScrollTrigger/* default */.Z)();
  const classes = useStyles();
  const {
    toggleTheme,
    isDark
  } = (0,external_react_.useContext)(theme/* ToggleThemeContext */.Xm);
  return /*#__PURE__*/jsx_runtime_.jsx(AppBar/* default */.Z, {
    className: trigger ? classes.hide : classes.show,
    position: "sticky",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Toolbar/* default */.Z, {
      className: classes.toolbar,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/logo/logo2.png",
            height: "25px",
            alt: "saiemgilani.me",
            style: {
              paddingRight: 10,
              verticalAlign: 'bottom'
            }
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            variant: "h6",
            style: !isDark ? {
              color: '#fff'
            } : {},
            children: constants/* NAME_AND_DOMAIN */.mG
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.toolbarContent,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/blog",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
            variant: "text",
            color: "inherit",
            children: [/*#__PURE__*/jsx_runtime_.jsx((ViewHeadline_default()), {}), "\xA0Blog"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/topics",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
            variant: "text",
            color: "inherit",
            children: [/*#__PURE__*/jsx_runtime_.jsx((Code_default()), {}), "\xA0Topics"]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.toolbarRight,
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Tooltip, {
          title: "Toggle Theme",
          children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            variant: "text",
            color: "inherit",
            onClick: toggleTheme,
            children: isDark ? /*#__PURE__*/jsx_runtime_.jsx((WbSunnyOutlined_default()), {}) : /*#__PURE__*/jsx_runtime_.jsx((Brightness2Outlined_default()), {})
          })
        })
      })]
    })
  });
};
/* harmony default export */ const components_TopBar = (TopBar);
// EXTERNAL MODULE: ./src/components/Footer.tsx
var Footer = __webpack_require__(8739);
// EXTERNAL MODULE: ./styles/App.module.css
var App_module = __webpack_require__(4916);
var App_module_default = /*#__PURE__*/__webpack_require__.n(App_module);
;// CONCATENATED MODULE: ./pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const MyApp = ({
  Component,
  pageProps
}) => {
  const {
    0: style,
    1: setStyle
  } = (0,external_react_.useState)({
    visibility: 'hidden'
  });
  (0,external_react_.useEffect)(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    setStyle({});
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (App_module_default())["app-container"],
      style: style,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(theme/* ThemeProvider */.f6, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (App_module_default())["content-container"],
          children: [/*#__PURE__*/jsx_runtime_.jsx(components_TopBar, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))]
        }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* Footer */.$, {})]
      })
    })
  });
};

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 4916:
/***/ ((module) => {

// Exports
module.exports = {
	"app-container": "App_app-container__2Yjqs",
	"content-container": "App_content-container__HRPw7"
};


/***/ }),

/***/ 1731:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ 4047:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ 9137:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/system");

/***/ }),

/***/ 2958:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/utils");

/***/ }),

/***/ 3536:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 4642:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 4229:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 3810:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [120,664,282,935,408,907,644], () => (__webpack_exec__(9660)));
module.exports = __webpack_exports__;

})();