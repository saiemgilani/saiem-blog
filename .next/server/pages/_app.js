(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/AppBar/AppBar.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");








var styles = function styles(theme) {
  var backgroundColorDefault = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },

    /* Styles applied to the root element if `position="fixed"`. */
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0,
      '@media print': {
        // Prevent the app bar to be visible on each printed page.
        position: 'absolute'
      }
    },

    /* Styles applied to the root element if `position="absolute"`. */
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="sticky"`. */
    positionSticky: {
      // ⚠️ sticky is not supported by IE 11.
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {
      position: 'static'
    },

    /* Styles applied to the root element if `position="relative"`. */
    positionRelative: {
      position: 'relative'
    },

    /* Styles applied to the root element if `color="default"`. */
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="transparent"`. */
    colorTransparent: {
      backgroundColor: 'transparent',
      color: 'inherit'
    }
  };
};
var AppBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function AppBar(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$position = props.position,
      position = _props$position === void 0 ? 'fixed' : _props$position,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "color", "position"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Paper__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    square: true,
    component: "header",
    elevation: 4,
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, classes["position".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(position))], classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(color))], className, position === 'fixed' && 'mui-fixed'),
    ref: ref
  }, other));
});
 true ? AppBar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['default', 'inherit', 'primary', 'secondary', 'transparent']),

  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   */
  position: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiAppBar'
})(AppBar));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/AppBar/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/AppBar/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _AppBar__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useIsFocusVisible */ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js");
/* harmony import */ var _TouchRipple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TouchRipple */ "./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js");













var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&$disabled': {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    },
    '@media print': {
      colorAdjust: 'exact'
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Pseudo-class applied to the root element if keyboard focused. */
  focusVisible: {}
};
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

var ButtonBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ButtonBase(props, ref) {
  var action = props.action,
      buttonRefProp = props.buttonRef,
      _props$centerRipple = props.centerRipple,
      centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableRipple = props.disableRipple,
      disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
      _props$disableTouchRi = props.disableTouchRipple,
      disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi,
      _props$focusRipple = props.focusRipple,
      focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple,
      focusVisibleClassName = props.focusVisibleClassName,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onFocusVisible = props.onFocusVisible,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      onMouseDown = props.onMouseDown,
      onMouseLeave = props.onMouseLeave,
      onMouseUp = props.onMouseUp,
      onTouchEnd = props.onTouchEnd,
      onTouchMove = props.onTouchMove,
      onTouchStart = props.onTouchStart,
      onDragLeave = props.onDragLeave,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      TouchRippleProps = props.TouchRippleProps,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);

  var buttonRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);

  function getButtonNode() {
    // #StrictMode ready
    return react_dom__WEBPACK_IMPORTED_MODULE_4__.findDOMNode(buttonRef.current);
  }

  var rippleRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      focusVisible = _React$useState[0],
      setFocusVisible = _React$useState[1];

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  var _useIsFocusVisible = (0,_utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_7__.default)(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle(action, function () {
    return {
      focusVisible: function focusVisible() {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);

  function useRippleHandler(rippleAction, eventCallback) {
    var skipRippleAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : disableTouchRipple;
    return (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__.default)(function (event) {
      if (eventCallback) {
        eventCallback(event);
      }

      var ignore = skipRippleAction;

      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  var handleMouseDown = useRippleHandler('start', onMouseDown);
  var handleDragLeave = useRippleHandler('stop', onDragLeave);
  var handleMouseUp = useRippleHandler('stop', onMouseUp);
  var handleMouseLeave = useRippleHandler('stop', function (event) {
    if (focusVisible) {
      event.preventDefault();
    }

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  var handleTouchStart = useRippleHandler('start', onTouchStart);
  var handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  var handleTouchMove = useRippleHandler('stop', onTouchMove);
  var handleBlur = useRippleHandler('stop', function (event) {
    if (focusVisible) {
      onBlurVisible(event);
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  }, false);
  var handleFocus = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__.default)(function (event) {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    if (isFocusVisible(event)) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  var isNonNativeButton = function isNonNativeButton() {
    var button = getButtonNode();
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  /**
   * IE 11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */


  var keydownRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(false);
  var handleKeyDown = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__.default)(function (event) {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      event.persist();
      rippleRef.current.stop(event, function () {
        rippleRef.current.start(event);
      });
    }

    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    } // Keyboard accessibility for non interactive elements


    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();

      if (onClick) {
        onClick(event);
      }
    }
  });
  var handleKeyUp = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__.default)(function (event) {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      event.persist();
      rippleRef.current.stop(event, function () {
        rippleRef.current.pulsate(event);
      });
    }

    if (onKeyUp) {
      onKeyUp(event);
    } // Keyboard accessibility for non interactive elements


    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  var ComponentProp = component;

  if (ComponentProp === 'button' && other.href) {
    ComponentProp = 'a';
  }

  var buttonProps = {};

  if (ComponentProp === 'button') {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    if (ComponentProp !== 'a' || !other.href) {
      buttonProps.role = 'button';
    }

    buttonProps['aria-disabled'] = disabled;
  }

  var handleUserRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__.default)(buttonRefProp, ref);
  var handleOwnRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__.default)(focusVisibleRef, buttonRef);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__.default)(handleUserRef, handleOwnRef);

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      mountedState = _React$useState2[0],
      setMountedState = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    setMountedState(true);
  }, []);
  var enableTouchRipple = mountedState && !disableRipple && !disabled;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(['Material-UI: The `component` prop provided to ButtonBase is invalid.', 'Please make sure the children prop is rendered in this custom component.'].join('\n'));
      }
    }, [enableTouchRipple]);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ComponentProp, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
    onBlur: handleBlur,
    onClick: onClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex
  }, buttonProps, other), children, enableTouchRipple ?
  /*#__PURE__*/

  /* TouchRipple is only needed client-side, x2 boost on the server. */
  react__WEBPACK_IMPORTED_MODULE_2__.createElement(_TouchRipple__WEBPACK_IMPORTED_MODULE_10__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: rippleRef,
    center: centerRipple
  }, TouchRippleProps)) : null);
});
 true ? ButtonBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.refType,

  /**
   * @ignore
   *
   * Use that prop to pass a ref to the native button component.
   * @deprecated Use `ref` instead.
   */
  buttonRef: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_11__.default)(_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.refType, 'Use `ref` instead.'),

  /**
   * If `true`, the ripples will be centered.
   * They won't start at the cursor interaction position.
   */
  centerRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.elementTypeAcceptingRef,

  /**
   * If `true`, the base button will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   */
  disableRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the touch ripple effect will be disabled.
   */
  disableTouchRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the base button will have a keyboard focus ripple.
   */
  focusRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * @ignore
   */
  href: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * @ignore
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onDragLeave: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onKeyUp: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onMouseDown: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onMouseLeave: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onMouseUp: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onTouchEnd: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onTouchMove: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onTouchStart: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['button', 'reset', 'submit']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__.default)(styles, {
  name: 'MuiButtonBase'
})(ButtonBase));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");




var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
/**
 * @ignore - internal component.
 */

function Ripple(props) {
  var classes = props.classes,
      _props$pulsate = props.pulsate,
      pulsate = _props$pulsate === void 0 ? false : _props$pulsate,
      rippleX = props.rippleX,
      rippleY = props.rippleY,
      rippleSize = props.rippleSize,
      inProp = props.in,
      _props$onExited = props.onExited,
      onExited = _props$onExited === void 0 ? function () {} : _props$onExited,
      timeout = props.timeout;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      leaving = _React$useState[0],
      setLeaving = _React$useState[1];

  var rippleClassName = clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  var rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  var childClassName = clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  var handleExited = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_3__.default)(onExited); // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority

  useEnhancedEffect(function () {
    if (!inProp) {
      // react-transition-group#onExit
      setLeaving(true); // react-transition-group#onExited

      var timeoutId = setTimeout(handleExited, timeout);
      return function () {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [handleExited, inProp, timeout]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: rippleClassName,
    style: rippleStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: childClassName
  }));
}

 true ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),

  /**
   * @ignore - injected from TransitionGroup
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * Diameter of the ripple.
   */
  rippleSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /**
   * Horizontal position of the ripple center.
   */
  rippleX: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /**
   * Vertical position of the ripple center.
   */
  rippleY: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /**
   * exit delay
   */
  timeout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ripple);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DELAY_RIPPLE": () => (/* binding */ DELAY_RIPPLE),
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Ripple */ "./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js");









var DURATION = 550;
var DELAY_RIPPLE = 80;
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: 'inherit'
    },

    /* Styles applied to the internal `Ripple` components `ripple` class. */
    ripple: {
      opacity: 0,
      position: 'absolute'
    },

    /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
    rippleVisible: {
      opacity: 0.3,
      transform: 'scale(1)',
      animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },

    /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },

    /* Styles applied to the internal `Ripple` components `child` class. */
    child: {
      opacity: 1,
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    },

    /* Styles applied to the internal `Ripple` components `childLeaving` class. */
    childLeaving: {
      opacity: 0,
      animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },

    /* Styles applied to the internal `Ripple` components `childPulsate` class. */
    childPulsate: {
      position: 'absolute',
      left: 0,
      top: 0,
      animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
    },
    '@keyframes enter': {
      '0%': {
        transform: 'scale(0)',
        opacity: 0.1
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 0.3
      }
    },
    '@keyframes exit': {
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    },
    '@keyframes pulsate': {
      '0%': {
        transform: 'scale(1)'
      },
      '50%': {
        transform: 'scale(0.92)'
      },
      '100%': {
        transform: 'scale(1)'
      }
    }
  };
};
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */

var TouchRipple = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function TouchRipple(props, ref) {
  var _props$center = props.center,
      centerProp = _props$center === void 0 ? false : _props$center,
      classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["center", "classes", "className"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState([]),
      ripples = _React$useState[0],
      setRipples = _React$useState[1];

  var nextKey = react__WEBPACK_IMPORTED_MODULE_3__.useRef(0);
  var rippleCallback = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]); // Used to filter out mouse emulated events on mobile.

  var ignoringMouseDown = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.

  var startTimer = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null); // This is the hook called once the previous timeout is ready.

  var startTimerCommit = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  var container = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    return function () {
      clearTimeout(startTimer.current);
    };
  }, []);
  var startCommit = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function (params) {
    var pulsate = params.pulsate,
        rippleX = params.rippleX,
        rippleY = params.rippleY,
        rippleSize = params.rippleSize,
        cb = params.cb;
    setRipples(function (oldRipples) {
      return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(oldRipples), [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Ripple__WEBPACK_IMPORTED_MODULE_7__.default, {
        key: nextKey.current,
        classes: classes,
        timeout: DURATION,
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize
      })]);
    });
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  var start = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function () {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments.length > 2 ? arguments[2] : undefined;
    var _options$pulsate = options.pulsate,
        pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
        _options$center = options.center,
        center = _options$center === void 0 ? centerProp || options.pulsate : _options$center,
        _options$fakeElement = options.fakeElement,
        fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

    if (event.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }

    if (event.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }

    var element = fakeElement ? null : container.current;
    var rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }; // Get the size of the ripple

    var rippleX;
    var rippleY;
    var rippleSize;

    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      var _ref = event.touches ? event.touches[0] : event,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    } // Touche devices


    if (event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = function () {
          startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }; // Delay the execution of the ripple effect.


        startTimer.current = setTimeout(function () {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize,
        cb: cb
      });
    }
  }, [centerProp, startCommit]);
  var pulsate = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function () {
    start({}, {
      pulsate: true
    });
  }, [start]);
  var stop = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function (event, cb) {
    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
    // We still want to show ripple effect.

    if (event.type === 'touchend' && startTimerCommit.current) {
      event.persist();
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(function () {
        stop(event, cb);
      });
      return;
    }

    startTimerCommit.current = null;
    setRipples(function (oldRipples) {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }

      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  react__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle(ref, function () {
    return {
      pulsate: pulsate,
      start: start,
      stop: stop
    };
  }, [pulsate, start, stop]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_6___default()(classes.root, className),
    ref: container
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.TransitionGroup, {
    component: null,
    exit: true
  }, ripples));
});
 true ? TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  flip: false,
  name: 'MuiTouchRipple'
})( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.memo(TouchRipple)));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ButtonBase__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Button/Button.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Button/Button.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, theme.typography.button, {
      boxSizing: 'border-box',
      minWidth: 64,
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // Ensure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `variant="text"`. */
    text: {
      padding: '6px 8px'
    },

    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      padding: '5px 15px',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabledBackground)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.secondary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none'
      },
      '&$focusVisible': {
        boxShadow: 'none'
      },
      '&:active': {
        boxShadow: 'none'
      },
      '&$disabled': {
        boxShadow: 'none'
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit',
      borderColor: 'currentColor'
    },

    /* Styles applied to the root element if `size="small"` and `variant="text"`. */
    textSizeSmall: {
      padding: '4px 5px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="text"`. */
    textSizeLarge: {
      padding: '8px 11px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
    outlinedSizeSmall: {
      padding: '3px 9px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
    outlinedSizeLarge: {
      padding: '7px 21px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
    containedSizeSmall: {
      padding: '4px 10px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
    containedSizeLarge: {
      padding: '8px 22px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {},

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the startIcon element if supplied. */
    startIcon: {
      display: 'inherit',
      marginRight: 8,
      marginLeft: -4,
      '&$iconSizeSmall': {
        marginLeft: -2
      }
    },

    /* Styles applied to the endIcon element if supplied. */
    endIcon: {
      display: 'inherit',
      marginRight: -4,
      marginLeft: 8,
      '&$iconSizeSmall': {
        marginRight: -2
      }
    },

    /* Styles applied to the icon element if supplied and `size="small"`. */
    iconSizeSmall: {
      '& > *:first-child': {
        fontSize: 18
      }
    },

    /* Styles applied to the icon element if supplied and `size="medium"`. */
    iconSizeMedium: {
      '& > *:first-child': {
        fontSize: 20
      }
    },

    /* Styles applied to the icon element if supplied and `size="large"`. */
    iconSizeLarge: {
      '& > *:first-child': {
        fontSize: 22
      }
    }
  };
};
var Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Button(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableElevati = props.disableElevation,
      disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      endIconProp = props.endIcon,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      startIconProp = props.startIcon,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);

  var startIcon = startIconProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.startIcon, classes["iconSize".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(size))])
  }, startIconProp);
  var endIcon = endIconProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.endIcon, classes["iconSize".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(size))])
  }, endIconProp);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, classes[variant], className, color === 'inherit' ? classes.colorInherit : color !== 'default' && classes["".concat(variant).concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(color))], size !== 'medium' && [classes["".concat(variant, "Size").concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(size))], classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.focusVisible, focusVisibleClassName),
    ref: ref,
    type: type
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
 true ? Button.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the button.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, no elevation is used.
   */
  disableElevation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   */
  disableRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Element placed after the children.
   */
  endIcon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * @ignore
   */
  focusVisibleClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['large', 'medium', 'small']),

  /**
   * Element placed before the children.
   */
  startIcon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['button', 'reset', 'submit']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['contained', 'outlined', 'text'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiButton'
})(Button));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Button/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Button/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/Paper.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/Paper.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Paper(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 1 : _props$elevation,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'elevation' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["classes", "className", "component", "square", "elevation", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref: ref
  }, other));
});
 true ? Paper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), function (props) {
    var classes = props.classes,
        elevation = props.elevation; // in case `withStyles` fails to inject we don't need this warning

    if (classes === undefined) {
      return null;
    }

    if (elevation != null && classes["elevation".concat(elevation)] === undefined) {
      return new Error("Material-UI: This elevation `".concat(elevation, "` is not implemented."));
    }

    return null;
  }),

  /**
   * If `true`, rounded corners are disabled.
   */
  square: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['elevation', 'outlined'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiPaper'
})(Paper));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Paper__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }),

    /* Styles applied to the root element if `variant="regular"`. */
    regular: theme.mixins.toolbar,

    /* Styles applied to the root element if `variant="dense"`. */
    dense: {
      minHeight: 48
    }
  };
};
var Toolbar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Toolbar(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'regular' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "component", "disableGutters", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, classes[variant], className, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 true ? Toolbar.propTypes = {
  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * If `true`, disables gutter padding.
   */
  disableGutters: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['regular', 'dense'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiToolbar'
})(Toolbar));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Toolbar/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Toolbar/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Toolbar__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Typography/Typography.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Typography/Typography.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      margin: 0
    },

    /* Styles applied to the root element if `variant="body2"`. */
    body2: theme.typography.body2,

    /* Styles applied to the root element if `variant="body1"`. */
    body1: theme.typography.body1,

    /* Styles applied to the root element if `variant="caption"`. */
    caption: theme.typography.caption,

    /* Styles applied to the root element if `variant="button"`. */
    button: theme.typography.button,

    /* Styles applied to the root element if `variant="h1"`. */
    h1: theme.typography.h1,

    /* Styles applied to the root element if `variant="h2"`. */
    h2: theme.typography.h2,

    /* Styles applied to the root element if `variant="h3"`. */
    h3: theme.typography.h3,

    /* Styles applied to the root element if `variant="h4"`. */
    h4: theme.typography.h4,

    /* Styles applied to the root element if `variant="h5"`. */
    h5: theme.typography.h5,

    /* Styles applied to the root element if `variant="h6"`. */
    h6: theme.typography.h6,

    /* Styles applied to the root element if `variant="subtitle1"`. */
    subtitle1: theme.typography.subtitle1,

    /* Styles applied to the root element if `variant="subtitle2"`. */
    subtitle2: theme.typography.subtitle2,

    /* Styles applied to the root element if `variant="overline"`. */
    overline: theme.typography.overline,

    /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
    srOnly: {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `nowrap={true}`. */
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the root element if `gutterBottom={true}`. */
    gutterBottom: {
      marginBottom: '0.35em'
    },

    /* Styles applied to the root element if `paragraph={true}`. */
    paragraph: {
      marginBottom: 16
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="textPrimary"`. */
    colorTextPrimary: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `color="textSecondary"`. */
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `display="inline"`. */
    displayInline: {
      display: 'inline'
    },

    /* Styles applied to the root element if `display="block"`. */
    displayBlock: {
      display: 'block'
    }
  };
};
var defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
};
var Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Typography(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'initial' : _props$color,
      component = props.component,
      _props$display = props.display,
      display = _props$display === void 0 ? 'initial' : _props$display,
      _props$gutterBottom = props.gutterBottom,
      gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
      _props$noWrap = props.noWrap,
      noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'body1' : _props$variant,
      _props$variantMapping = props.variantMapping,
      variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

  var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__.default)(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__.default)(align))], display !== 'initial' && classes["display".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__.default)(display))]),
    ref: ref
  }, other));
});
 true ? Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['inherit', 'left', 'center', 'right', 'justify']),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the `variantMapping` prop.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Controls the display type
   */
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['initial', 'block', 'inline']),

  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Applies the theme typography styles.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit']),

  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   */
  variantMapping: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiTypography'
})(Typography));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Typography/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Typography/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Typography__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/blue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blue);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/common.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (common);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/green.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (green);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/grey.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/indigo.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (indigo);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/orange.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orange);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/pink.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pink);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/red.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (red);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/colorManipulator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToRgb": () => (/* binding */ hexToRgb),
/* harmony export */   "rgbToHex": () => (/* binding */ rgbToHex),
/* harmony export */   "hslToRgb": () => (/* binding */ hslToRgb),
/* harmony export */   "decomposeColor": () => (/* binding */ decomposeColor),
/* harmony export */   "recomposeColor": () => (/* binding */ recomposeColor),
/* harmony export */   "getContrastRatio": () => (/* binding */ getContrastRatio),
/* harmony export */   "getLuminance": () => (/* binding */ getLuminance),
/* harmony export */   "emphasize": () => (/* binding */ emphasize),
/* harmony export */   "fade": () => (/* binding */ fade),
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "darken": () => (/* binding */ darken),
/* harmony export */   "lighten": () => (/* binding */ lighten)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : 0);
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
var warnedOnce = false;
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 *
 * @deprecated
 * Use `import { alpha } from '@material-ui/core/styles'` instead.
 */

function fade(color, value) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.', '', "You should use `import { alpha } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return alpha(color, value);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha value is overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0-1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "default": () => (/* binding */ createBreakpoints)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  var warnedOnce = false;

  function width(key) {
    if (true) {
      if (!warnedOnce) {
        warnedOnce = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", 'Use the `theme.breakpoints.values` instead.'].join('\n'));
      }
    }

    return values[key];
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMixins.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMixins)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.warn(['Material-UI: theme.mixins.gutters() is deprecated.', 'You can use the source of the mixin directly:', "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join('\n'));
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, breakpoints.up('sm'), (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMuiStrictModeTheme)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");


function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _createTheme__WEBPACK_IMPORTED_MODULE_1__.default.apply(void 0, [(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)({
    unstable_strictMode: true
  }, options)].concat(args));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createPalette.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "light": () => (/* binding */ light),
/* harmony export */   "dark": () => (/* binding */ dark),
/* harmony export */   "default": () => (/* binding */ createPalette)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _colors_orange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../colors/orange */ "./node_modules/@material-ui/core/esm/colors/orange.js");
/* harmony import */ var _colors_blue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../colors/blue */ "./node_modules/@material-ui/core/esm/colors/blue.js");
/* harmony import */ var _colors_green__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../colors/green */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");













var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.lighten)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.darken)(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[300],
    main: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[500],
    dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A200,
    main: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A400,
    dark: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[300],
    main: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[500],
    dark: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[300],
    main: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[500],
    dark: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[300],
    main: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[500],
    dark: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[300],
    main: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[500],
    dark: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : 0);
    }

    if (typeof color.main !== 'string') {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });") : 0);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createSpacing.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSpacing)
/* harmony export */ });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__);

var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_0__.createUnarySpacing)({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createStyles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createStyles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
 // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)(styles);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTheme.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTheme.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMuiTheme": () => (/* binding */ createMuiTheme),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/esm/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/esm/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/esm/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/esm/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/esm/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/esm/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");













function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = (0,_createPalette__WEBPACK_IMPORTED_MODULE_3__.default)(paletteInput);
  var breakpoints = (0,_createBreakpoints__WEBPACK_IMPORTED_MODULE_4__.default)(breakpointsInput);
  var spacing = (0,_createSpacing__WEBPACK_IMPORTED_MODULE_5__.default)(spacingInput);
  var muiTheme = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0,_createMixins__WEBPACK_IMPORTED_MODULE_6__.default)(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_7__.default,
    typography: (0,_createTypography__WEBPACK_IMPORTED_MODULE_8__.default)(palette, typographyInput),
    spacing: spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_9__.default,
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_10__.default,
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_11__.default
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

var warnedOnce = false;
function createMuiTheme() {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: the createMuiTheme function was renamed to createTheme.', '', "You should use `import { createTheme } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return createTheme.apply(void 0, arguments);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTypography.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTypography)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var warnedOnce = false;

function roundWithDeprecationWarning(value) {
  if (true) {
    if (!warnedOnce) {
      console.warn(['Material-UI: The `theme.typography.round` helper is deprecated.', 'Head to https://material-ui.com/r/migration-v4/#theme for a migration path.'].join('\n'));
      warnedOnce = true;
    }
  }

  return round(value);
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: roundWithDeprecationWarning,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/cssUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/cssUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUnitless": () => (/* binding */ isUnitless),
/* harmony export */   "getUnit": () => (/* binding */ getUnit),
/* harmony export */   "toUnitless": () => (/* binding */ toUnitless),
/* harmony export */   "convertLength": () => (/* binding */ convertLength),
/* harmony export */   "alignProperty": () => (/* binding */ alignProperty),
/* harmony export */   "fontGrid": () => (/* binding */ fontGrid),
/* harmony export */   "responsiveProperty": () => (/* binding */ responsiveProperty)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return function (length, toUnit) {
    var fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    var pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
        return length;
      }
    } // Convert length in pixels to the output unit


    var outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty(_ref) {
  var size = _ref.size,
      grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight,
      pixels = _ref2.pixels,
      htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$unit = _ref3.unit,
      unit = _ref3$unit === void 0 ? 'rem' : _ref3$unit,
      _ref3$breakpoints = _ref3.breakpoints,
      breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints,
      _ref3$transform = _ref3.transform,
      transform = _ref3$transform === void 0 ? null : _ref3$transform;

  var output = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(min).concat(unit));

  var factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function (breakpoint) {
    var value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output["@media (min-width:".concat(breakpoint, "px)")] = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(Math.round(value * 10000) / 10000).concat(unit));
  });
  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/defaultTheme.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");

var defaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTheme": () => (/* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "createMuiTheme": () => (/* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_1__.createMuiTheme),
/* harmony export */   "unstable_createMuiStrictModeTheme": () => (/* reexport safe */ _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "createStyles": () => (/* reexport safe */ _createStyles__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "makeStyles": () => (/* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "responsiveFontSizes": () => (/* reexport safe */ _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "styled": () => (/* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "useTheme": () => (/* reexport safe */ _useTheme__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "withStyles": () => (/* reexport safe */ _withStyles__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "withTheme": () => (/* reexport safe */ _withTheme__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "createGenerateClassName": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.createGenerateClassName),
/* harmony export */   "jssPreset": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.jssPreset),
/* harmony export */   "ServerStyleSheets": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ServerStyleSheets),
/* harmony export */   "StylesProvider": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.StylesProvider),
/* harmony export */   "MuiThemeProvider": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider),
/* harmony export */   "ThemeProvider": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider)
/* harmony export */ });
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _colorManipulator__WEBPACK_IMPORTED_MODULE_0__) if(["default","createTheme","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _colorManipulator__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMuiStrictModeTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js");
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsiveFontSizes */ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/esm/styles/styled.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _transitions__WEBPACK_IMPORTED_MODULE_7__) if(["default","createTheme","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _transitions__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/esm/styles/withTheme.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__);

 // eslint-disable-next-line camelcase












/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/makeStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/makeStyles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ responsiveFontSizes)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@material-ui/core/esm/styles/cssUtils.js");



function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints,
      breakpoints = _options$breakpoints === void 0 ? ['sm', 'md', 'lg'] : _options$breakpoints,
      _options$disableAlign = options.disableAlign,
      disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign,
      _options$factor = options.factor,
      factor = _options$factor === void 0 ? 2 : _options$factor,
      _options$variants = options.variants,
      variants = _options$variants === void 0 ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'] : _options$variants;

  var theme = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, themeInput);

  theme.typography = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, theme.typography);
  var typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  var convert = (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.convertLength)(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function (x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function (variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.isUnitless)(lineHeight) && !disableAlign) {
      throw new Error( true ? "Material-UI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead." : 0);
    }

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.isUnitless)(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    var transform = null;

    if (!disableAlign) {
      transform = function transform(value) {
        return (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.alignProperty)({
          size: value,
          grid: (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.fontGrid)({
            pixels: 4,
            lineHeight: lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }

    typography[variant] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, style, (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.responsiveProperty)({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform: transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shadows.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shadows);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shape.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shape = {
  borderRadius: 4
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shape);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/styled.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/styled.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




var styled = function styled(Component) {
  var componentCreator = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(Component);
  return function (style, options) {
    return componentCreator(style, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
    }, options));
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/transitions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easing": () => (/* binding */ easing),
/* harmony export */   "duration": () => (/* binding */ duration),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");



function useTheme() {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_1___default().useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withStyles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function withStyles(stylesOrCreator, options) {
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withTheme.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");


var withTheme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.withThemeCreator)({
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__.default
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/zIndex.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zIndex);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/useScrollTrigger/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/useScrollTrigger/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _useScrollTrigger__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _useScrollTrigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useScrollTrigger */ "./node_modules/@material-ui/core/esm/useScrollTrigger/useScrollTrigger.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/useScrollTrigger/useScrollTrigger.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/useScrollTrigger/useScrollTrigger.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useScrollTrigger)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function defaultTrigger(store, options) {
  var _options$disableHyste = options.disableHysteresis,
      disableHysteresis = _options$disableHyste === void 0 ? false : _options$disableHyste,
      _options$threshold = options.threshold,
      threshold = _options$threshold === void 0 ? 100 : _options$threshold,
      target = options.target;
  var previous = store.current;

  if (target) {
    // Get vertical scroll
    store.current = target.pageYOffset !== undefined ? target.pageYOffset : target.scrollTop;
  }

  if (!disableHysteresis && previous !== undefined) {
    if (store.current < previous) {
      return false;
    }
  }

  return store.current > threshold;
}

var defaultTarget = typeof window !== 'undefined' ? window : null;
function useScrollTrigger() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$getTrigger = options.getTrigger,
      getTrigger = _options$getTrigger === void 0 ? defaultTrigger : _options$getTrigger,
      _options$target = options.target,
      target = _options$target === void 0 ? defaultTarget : _options$target,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(options, ["getTrigger", "target"]);

  var store = react__WEBPACK_IMPORTED_MODULE_2__.useRef();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(function () {
    return getTrigger(store, other);
  }),
      trigger = _React$useState[0],
      setTrigger = _React$useState[1];

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    var handleScroll = function handleScroll() {
      setTrigger(getTrigger(store, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        target: target
      }, other)));
    };

    handleScroll(); // Re-evaluate trigger when dependencies change

    target.addEventListener('scroll', handleScroll);
    return function () {
      target.removeEventListener('scroll', handleScroll);
    }; // See Option 3. https://github.com/facebook/react/issues/14476#issuecomment-471199055
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, getTrigger, JSON.stringify(other)]);
  return trigger;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/capitalize.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/capitalize.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ capitalize)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( true ? "Material-UI: capitalize(string) expects a string argument." : 0);
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deprecatedPropType)
/* harmony export */ });
function deprecatedPropType(validator, reason) {
  if (false) {}

  return function (props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined') {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }

    return null;
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/setRef.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/setRef.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setRef)
/* harmony export */ });
// TODO v5: consider to make it private
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useEventCallback.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEventCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */

function useEventCallback(fn) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    return (0, ref.current).apply(void 0, arguments);
  }, []);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useForkRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useForkRef.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useForkRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");


function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    if (refA == null && refB == null) {
      return null;
    }

    return function (refValue) {
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__.default)(refA, refValue);
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__.default)(refB, refValue);
    };
  }, [refA, refB]);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "teardown": () => (/* binding */ teardown),
/* harmony export */   "default": () => (/* binding */ useIsFocusVisible)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js


var hadKeyboardEvent = true;
var hadFocusVisibleRecently = false;
var hadFocusVisibleRecentlyTimeout = null;
var inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @return {boolean}
 */

function focusTriggersKeyboardModality(node) {
  var type = node.type,
      tagName = node.tagName;

  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */


function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */


function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function teardown(doc) {
  doc.removeEventListener('keydown', handleKeyDown, true);
  doc.removeEventListener('mousedown', handlePointerDown, true);
  doc.removeEventListener('pointerdown', handlePointerDown, true);
  doc.removeEventListener('touchstart', handlePointerDown, true);
  doc.removeEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  var target = event.target;

  try {
    return target.matches(':focus-visible');
  } catch (error) {} // browsers not implementing :focus-visible will throw a SyntaxError
  // we use our own heuristic for those browsers
  // rethrow might be better if it's not the expected error but do we really
  // want to crash if focus-visible malfunctioned?
  // no need for validFocusTarget check. the user does that by attaching it to
  // focusable events only


  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
/**
 * Should be called if a blur event is fired on a focus-visible element
 */


function handleBlurVisible() {
  // To detect a tab/window switch, we look for a blur event followed
  // rapidly by a visibility change.
  // If we don't see a visibility change within 100ms, it's probably a
  // regular focus change.
  hadFocusVisibleRecently = true;
  window.clearTimeout(hadFocusVisibleRecentlyTimeout);
  hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
    hadFocusVisibleRecently = false;
  }, 100);
}

function useIsFocusVisible() {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (instance) {
    var node = react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(instance);

    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue(isFocusVisible);
  }

  return {
    isFocusVisible: isFocusVisible,
    onBlurVisible: handleBlurVisible,
    ref: ref
  };
}

/***/ }),

/***/ "./assets/jss/nextjs-material-kit.js":
/*!*******************************************!*\
  !*** ./assets/jss/nextjs-material-kit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToRGBAlpha": () => (/* binding */ hexToRGBAlpha),
/* harmony export */   "drawerWidth": () => (/* binding */ drawerWidth),
/* harmony export */   "transition": () => (/* binding */ transition),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "conatinerFluid": () => (/* binding */ conatinerFluid),
/* harmony export */   "boxShadow": () => (/* binding */ boxShadow),
/* harmony export */   "card": () => (/* binding */ card),
/* harmony export */   "defaultFont": () => (/* binding */ defaultFont),
/* harmony export */   "primaryColor": () => (/* binding */ primaryColor),
/* harmony export */   "warningColor": () => (/* binding */ warningColor),
/* harmony export */   "dangerColor": () => (/* binding */ dangerColor),
/* harmony export */   "successColor": () => (/* binding */ successColor),
/* harmony export */   "infoColor": () => (/* binding */ infoColor),
/* harmony export */   "roseColor": () => (/* binding */ roseColor),
/* harmony export */   "grayColor": () => (/* binding */ grayColor),
/* harmony export */   "primaryBoxShadow": () => (/* binding */ primaryBoxShadow),
/* harmony export */   "infoBoxShadow": () => (/* binding */ infoBoxShadow),
/* harmony export */   "successBoxShadow": () => (/* binding */ successBoxShadow),
/* harmony export */   "warningBoxShadow": () => (/* binding */ warningBoxShadow),
/* harmony export */   "dangerBoxShadow": () => (/* binding */ dangerBoxShadow),
/* harmony export */   "roseBoxShadow": () => (/* binding */ roseBoxShadow),
/* harmony export */   "warningCardHeader": () => (/* binding */ warningCardHeader),
/* harmony export */   "successCardHeader": () => (/* binding */ successCardHeader),
/* harmony export */   "dangerCardHeader": () => (/* binding */ dangerCardHeader),
/* harmony export */   "infoCardHeader": () => (/* binding */ infoCardHeader),
/* harmony export */   "primaryCardHeader": () => (/* binding */ primaryCardHeader),
/* harmony export */   "roseCardHeader": () => (/* binding */ roseCardHeader),
/* harmony export */   "cardActions": () => (/* binding */ cardActions),
/* harmony export */   "cardHeader": () => (/* binding */ cardHeader),
/* harmony export */   "defaultBoxShadow": () => (/* binding */ defaultBoxShadow),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "smallTitle": () => (/* binding */ smallTitle),
/* harmony export */   "cardTitle": () => (/* binding */ cardTitle),
/* harmony export */   "cardLink": () => (/* binding */ cardLink),
/* harmony export */   "cardSubtitle": () => (/* binding */ cardSubtitle)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/theme */ "./src/theme/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_TopBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/TopBar */ "./src/components/TopBar.tsx");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer.tsx");
/* harmony import */ var _styles_App_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/App.module.css */ "./styles/App.module.css");
/* harmony import */ var _styles_App_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_App_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\GitHub-Data\\saiem-blog\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MyApp = ({
  Component,
  pageProps
}) => {
  const {
    0: style,
    1: setStyle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    visibility: 'hidden'
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    setStyle({});
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_App_module_css__WEBPACK_IMPORTED_MODULE_5___default()["app-container"]),
      style: style,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_theme__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_App_module_css__WEBPACK_IMPORTED_MODULE_5___default()["content-container"]),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_TopBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_Footer__WEBPACK_IMPORTED_MODULE_3__.Footer, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Footer.module.css */ "./styles/Footer.module.css");
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\GitHub-Data\\saiem-blog\\src\\components\\Footer.tsx";




const Footer = ({}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
      variant: "body1",
      display: "inline",
      className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default()["footer-content"]),
      children: ["Copyright \xA9 2021", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
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

/***/ "./src/components/TopBar.tsx":
/*!***********************************!*\
  !*** ./src/components/TopBar.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBar": () => (/* binding */ TopBar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_icons_WbSunnyOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/WbSunnyOutlined */ "@material-ui/icons/WbSunnyOutlined");
/* harmony import */ var _material_ui_icons_WbSunnyOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WbSunnyOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_ViewHeadline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ViewHeadline */ "@material-ui/icons/ViewHeadline");
/* harmony import */ var _material_ui_icons_ViewHeadline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewHeadline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Brightness2Outlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Brightness2Outlined */ "@material-ui/icons/Brightness2Outlined");
/* harmony import */ var _material_ui_icons_Brightness2Outlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Brightness2Outlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Code */ "@material-ui/icons/Code");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/esm/useScrollTrigger/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ "./src/theme/index.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _types_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types/constants */ "./src/types/constants.ts");
/* harmony import */ var _assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "D:\\GitHub-Data\\saiem-blog\\src\\components\\TopBar.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__.makeStyles)({
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
  container: _objectSpread(_objectSpread({}, _assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_9__.container), {}, {
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  })
});
const TopBar = () => {
  const trigger = (0,_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_12__.default)();
  const classes = useStyles();
  const {
    toggleTheme,
    isDark
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_theme__WEBPACK_IMPORTED_MODULE_5__.ToggleThemeContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_13__.default, {
    className: trigger ? classes.hide : classes.show,
    position: "sticky",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__.default, {
      className: classes.toolbar,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
            src: "/logo/logo2.png",
            height: "25px",
            alt: "saiemgilani.me",
            style: {
              paddingRight: 10,
              verticalAlign: 'bottom'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__.default, {
            variant: "h6",
            style: !isDark ? {
              color: '#fff'
            } : {},
            children: _types_constants__WEBPACK_IMPORTED_MODULE_8__.NAME_AND_DOMAIN
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: classes.toolbarContent,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: "/blog",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
            variant: "text",
            color: "inherit",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_material_ui_icons_ViewHeadline__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, undefined), "\xA0Blog"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: "/topics",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
            variant: "text",
            color: "inherit",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, undefined), "\xA0Topics"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: classes.toolbarRight,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
          title: "Toggle Theme",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
            variant: "text",
            color: "inherit",
            onClick: toggleTheme,
            children: isDark ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_material_ui_icons_WbSunnyOutlined__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 25
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_material_ui_icons_Brightness2Outlined__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 39
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopBar);

/***/ }),

/***/ "./src/theme/ThemeProvider.tsx":
/*!*************************************!*\
  !*** ./src/theme/ThemeProvider.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleThemeContext": () => (/* binding */ ToggleThemeContext),
/* harmony export */   "ThemeProvider": () => (/* binding */ ThemeProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./src/theme/theme.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\GitHub-Data\\saiem-blog\\src\\theme\\ThemeProvider.tsx";




const ToggleThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  toggleTheme: () => {
    console.log();
  },
  isDark: false
});
const ThemeProvider = ({
  children
}) => {
  const {
    0: selectedTheme,
    1: setSelectedTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    appliedTheme: _theme__WEBPACK_IMPORTED_MODULE_2__.darkTheme,
    themeName: 'darkTheme'
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const theme = localStorage.getItem('theme');

    if (theme && theme === 'lightTheme') {
      setSelectedTheme({
        appliedTheme: _theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme,
        themeName: 'lightTheme'
      });
    }
  }, []);
  const toggleTheme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!selectedTheme || selectedTheme.themeName === 'darkTheme') {
      setSelectedTheme({
        appliedTheme: _theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme,
        themeName: 'lightTheme'
      });
      localStorage.setItem('theme', 'lightTheme');
    } else {
      setSelectedTheme({
        appliedTheme: _theme__WEBPACK_IMPORTED_MODULE_2__.darkTheme,
        themeName: 'darkTheme'
      });
      localStorage.setItem('theme', 'darkTheme');
    }
  }, [selectedTheme, setSelectedTheme]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ToggleThemeContext.Provider, {
    value: {
      toggleTheme,
      isDark: !(selectedTheme.themeName === 'lightTheme')
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MuiThemeProvider, {
      theme: selectedTheme.appliedTheme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CssBaseline, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);

/***/ }),

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./src/theme/theme.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _theme__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _theme__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeProvider */ "./src/theme/ThemeProvider.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _ThemeProvider__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _ThemeProvider__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./src/theme/theme.ts":
/*!****************************!*\
  !*** ./src/theme/theme.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paletteColorsDark": () => (/* binding */ paletteColorsDark),
/* harmony export */   "paletteColorsLight": () => (/* binding */ paletteColorsLight),
/* harmony export */   "darkTheme": () => (/* binding */ darkTheme),
/* harmony export */   "lightTheme": () => (/* binding */ lightTheme),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

const paletteColorsDark = {
  primary: '#7B1729',
  secondary: '#500F1B',
  error: '#E44C65',
  background: '#500F1B',
  text: '#FEF4E8'
};
const paletteColorsLight = {
  primary: '#7B1729',
  secondary: '#ffe0ac',
  error: '#E44C65',
  background: '#FEF4E8',
  text: '#050505'
};

const options = dark => {
  const paletteColors = dark ? paletteColorsDark : paletteColorsLight;
  return {
    palette: {
      type: dark ? 'dark' : 'light',
      primary: {
        main: paletteColors.primary
      },
      secondary: {
        main: paletteColors.secondary
      },
      error: {
        main: paletteColors.error
      },
      background: {
        default: paletteColors.background
      },
      text: {
        primary: paletteColors.text
      }
    },
    typography: {
      fontFamily: 'Lato',
      h1: {
        fontFamily: 'Roboto Slab',
        fontWeight: 300,
        fontSize: '96px',
        lineHeight: '127px',
        letterSpacing: '-1.5px'
      },
      h2: {
        fontFamily: 'Roboto Slab',
        fontWeight: 400,
        fontSize: '48px',
        lineHeight: '40px',
        letterSpacing: '-0.5px'
      },
      h3: {
        fontFamily: 'Roboto Slab',
        fontSize: '36px',
        lineHeight: '40px'
      },
      h4: {
        fontFamily: 'Roboto Slab',
        fontSize: '34px',
        lineHeight: '45px',
        letterSpacing: '0.25px'
      },
      h5: {
        fontFamily: 'Chivo',
        fontSize: '24px',
        lineHeight: '32px'
      },
      h6: {
        fontFamily: 'Chivo',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '26px',
        letterSpacing: '0.15px'
      },
      subtitle1: {
        fontFamily: 'Roboto Slab',
        fontSize: '16px',
        lineHeight: '19px',
        letterSpacing: '0.15px'
      },
      subtitle2: {
        fontFamily: 'Roboto Slab',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16.41px',
        letterSpacing: '0.1px'
      },
      body1: {
        fontFamily: 'Roboto Slab',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '150%',
        letterSpacing: '0.5px'
      },
      body2: {
        fontFamily: 'Lato',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '16px',
        letterSpacing: '0.25px'
      },
      button: {
        fontFamily: 'Lato',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '1.25px'
      },
      caption: {
        fontFamily: 'Lato',
        fontSize: '12px',
        lineHeight: '14px',
        letterSpacing: '0.4px'
      },
      overline: {
        fontFamily: 'Chivo',
        fontSize: '10px',
        lineHeight: '12px',
        letterSpacing: '1.5px'
      }
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            height: '100%',
            padding: 0,
            margin: 0,
            width: '100vw'
          },
          body: {
            height: '100%',
            padding: 0,
            margin: 0,
            width: '100vw',
            overflowX: 'hidden'
          },
          a: {
            textDecoration: 'none',
            fontWeight: 900,
            color: paletteColors.text
          }
        }
      }
    }
  };
};

const darkTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)(options(true));
const lightTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)(options(false));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (darkTheme);

/***/ }),

/***/ "./src/types/constants.ts":
/*!********************************!*\
  !*** ./src/types/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAME": () => (/* binding */ NAME),
/* harmony export */   "NAME_AND_DOMAIN": () => (/* binding */ NAME_AND_DOMAIN),
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
/* harmony export */   "DEPLOYMENTS_URL": () => (/* binding */ DEPLOYMENTS_URL)
/* harmony export */ });
const NAME = 'SG';
const NAME_AND_DOMAIN = 'SG';
const BASE_URL = 'https://saiemgilani.me';
const DEPLOYMENTS_URL = 'https://api.github.com/repos/saiemgilani/saiem-blog/deployments';

/***/ }),

/***/ "./styles/App.module.css":
/*!*******************************!*\
  !*** ./styles/App.module.css ***!
  \*******************************/
/***/ ((module) => {

// Exports
module.exports = {
	"app-container": "App_app-container__2Yjqs",
	"content-container": "App_content-container__HRPw7"
};


/***/ }),

/***/ "./styles/Footer.module.css":
/*!**********************************!*\
  !*** ./styles/Footer.module.css ***!
  \**********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__317iK"
};


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons/Brightness2Outlined":
/*!*********************************************************!*\
  !*** external "@material-ui/icons/Brightness2Outlined" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Brightness2Outlined");

/***/ }),

/***/ "@material-ui/icons/Code":
/*!******************************************!*\
  !*** external "@material-ui/icons/Code" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Code");

/***/ }),

/***/ "@material-ui/icons/ViewHeadline":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ViewHeadline" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/ViewHeadline");

/***/ }),

/***/ "@material-ui/icons/WbSunnyOutlined":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/WbSunnyOutlined" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/WbSunnyOutlined");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/system");

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/utils");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw2QkFBNkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNidUQ7QUFDSjtBQUNzQjtBQUNsQjtBQUN4QztBQUNmLFNBQVMsOERBQWlCLFNBQVMsNERBQWUsU0FBUyx1RUFBMEIsU0FBUyw4REFBaUI7QUFDL0c7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUQ7QUFDdEM7QUFDZjtBQUNBLG9DQUFvQyw2REFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLDZEQUFnQjtBQUN0RyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9BcHBCYXIvQXBwQmFyLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9BcHBCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0J1dHRvbkJhc2UvQnV0dG9uQmFzZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQnV0dG9uQmFzZS9SaXBwbGUuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0J1dHRvbkJhc2UvVG91Y2hSaXBwbGUuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0J1dHRvbkJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vUGFwZXIvUGFwZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1BhcGVyL2luZGV4LmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Ub29sYmFyL1Rvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1Rvb2xiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1R5cG9ncmFwaHkvVHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVHlwb2dyYXBoeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2JsdWUuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ncmVlbi5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2dyZXkuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9pbmRpZ28uanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9vcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9waW5rLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvcmVkLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlTWl4aW5zLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlUGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVNwYWNpbmcuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVUaGVtZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVR5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jc3NVdGlscy5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2RlZmF1bHRUaGVtZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvbWFrZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3Jlc3BvbnNpdmVGb250U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9zaGFkb3dzLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy90cmFuc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3VzZVRoZW1lLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvd2l0aFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3dpdGhUaGVtZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3pJbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXNlU2Nyb2xsVHJpZ2dlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXNlU2Nyb2xsVHJpZ2dlci91c2VTY3JvbGxUcmlnZ2VyLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9jYXBpdGFsaXplLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9kZXByZWNhdGVkUHJvcFR5cGUuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL3NldFJlZi5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvdXNlRXZlbnRDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvdXNlRm9ya1JlZi5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvdXNlSXNGb2N1c1Zpc2libGUuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9zcmMvY29tcG9uZW50cy9Ub3BCYXIudHN4Iiwid2VicGFjazovL25leHRqcy1ibG9nLy4vc3JjL3RoZW1lL1RoZW1lUHJvdmlkZXIudHN4Iiwid2VicGFjazovL25leHRqcy1ibG9nLy4vc3JjL3RoZW1lL2luZGV4LnRzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vc3JjL3RoZW1lL3RoZW1lLnRzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vc3JjL3R5cGVzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL3N0eWxlcy9BcHAubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3MyT3V0bGluZWRcIiIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Db2RlXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld0hlYWRsaW5lXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIiIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL25leHRqcy1ibG9nL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25leHRqcy1ibG9nL2lnbm9yZWR8RDpcXEdpdEh1Yi1EYXRhXFxzYWllbS1ibG9nXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIiwid2VicGFjazovL25leHRqcy1ibG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCBQYXBlciBmcm9tICcuLi9QYXBlcic7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF07XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIC8vIFByZXZlbnQgcGFkZGluZyBpc3N1ZSB3aXRoIHRoZSBNb2RhbCBhbmQgZml4ZWQgcG9zaXRpb25lZCBBcHBCYXIuXG4gICAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5hcHBCYXIsXG4gICAgICBmbGV4U2hyaW5rOiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHBvc2l0aW9uPVwiZml4ZWRcImAuICovXG4gICAgcG9zaXRpb25GaXhlZDoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAnYXV0bycsXG4gICAgICByaWdodDogMCxcbiAgICAgICdAbWVkaWEgcHJpbnQnOiB7XG4gICAgICAgIC8vIFByZXZlbnQgdGhlIGFwcCBiYXIgdG8gYmUgdmlzaWJsZSBvbiBlYWNoIHByaW50ZWQgcGFnZS5cbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcG9zaXRpb249XCJhYnNvbHV0ZVwiYC4gKi9cbiAgICBwb3NpdGlvbkFic29sdXRlOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgIHJpZ2h0OiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHBvc2l0aW9uPVwic3RpY2t5XCJgLiAqL1xuICAgIHBvc2l0aW9uU3RpY2t5OiB7XG4gICAgICAvLyDimqDvuI8gc3RpY2t5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUgMTEuXG4gICAgICBwb3NpdGlvbjogJ3N0aWNreScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAnYXV0bycsXG4gICAgICByaWdodDogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBwb3NpdGlvbj1cInN0YXRpY1wiYC4gKi9cbiAgICBwb3NpdGlvblN0YXRpYzoge1xuICAgICAgcG9zaXRpb246ICdzdGF0aWMnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHBvc2l0aW9uPVwicmVsYXRpdmVcImAuICovXG4gICAgcG9zaXRpb25SZWxhdGl2ZToge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJkZWZhdWx0XCJgLiAqL1xuICAgIGNvbG9yRGVmYXVsdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3JEZWZhdWx0LFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KGJhY2tncm91bmRDb2xvckRlZmF1bHQpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwicHJpbWFyeVwiYC4gKi9cbiAgICBjb2xvclByaW1hcnk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cImluaGVyaXRcImAuICovXG4gICAgY29sb3JJbmhlcml0OiB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwidHJhbnNwYXJlbnRcImAuICovXG4gICAgY29sb3JUcmFuc3BhcmVudDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgY29sb3I6ICdpbmhlcml0J1xuICAgIH1cbiAgfTtcbn07XG52YXIgQXBwQmFyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQXBwQmFyKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ3ByaW1hcnknIDogX3Byb3BzJGNvbG9yLFxuICAgICAgX3Byb3BzJHBvc2l0aW9uID0gcHJvcHMucG9zaXRpb24sXG4gICAgICBwb3NpdGlvbiA9IF9wcm9wcyRwb3NpdGlvbiA9PT0gdm9pZCAwID8gJ2ZpeGVkJyA6IF9wcm9wcyRwb3NpdGlvbixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJwb3NpdGlvblwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhcGVyLCBfZXh0ZW5kcyh7XG4gICAgc3F1YXJlOiB0cnVlLFxuICAgIGNvbXBvbmVudDogXCJoZWFkZXJcIixcbiAgICBlbGV2YXRpb246IDQsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlc1tcInBvc2l0aW9uXCIuY29uY2F0KGNhcGl0YWxpemUocG9zaXRpb24pKV0sIGNsYXNzZXNbXCJjb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldLCBjbGFzc05hbWUsIHBvc2l0aW9uID09PSAnZml4ZWQnICYmICdtdWktZml4ZWQnKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBBcHBCYXIucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2luaGVyaXQnLCAncHJpbWFyeScsICdzZWNvbmRhcnknLCAndHJhbnNwYXJlbnQnXSksXG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbmluZyB0eXBlLiBUaGUgYmVoYXZpb3Igb2YgdGhlIGRpZmZlcmVudCBvcHRpb25zIGlzIGRlc2NyaWJlZFxuICAgKiBbaW4gdGhlIE1ETiB3ZWIgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9MZWFybi9DU1MvQ1NTX2xheW91dC9Qb3NpdGlvbmluZykuXG4gICAqIE5vdGU6IGBzdGlja3lgIGlzIG5vdCB1bml2ZXJzYWxseSBzdXBwb3J0ZWQgYW5kIHdpbGwgZmFsbCBiYWNrIHRvIGBzdGF0aWNgIHdoZW4gdW5hdmFpbGFibGUuXG4gICAqL1xuICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnYWJzb2x1dGUnLCAnZml4ZWQnLCAncmVsYXRpdmUnLCAnc3RhdGljJywgJ3N0aWNreSddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlBcHBCYXInXG59KShBcHBCYXIpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0FwcEJhcic7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IGVsZW1lbnRUeXBlQWNjZXB0aW5nUmVmLCByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnLi4vdXRpbHMvdXNlRXZlbnRDYWxsYmFjayc7XG5pbXBvcnQgZGVwcmVjYXRlZFByb3BUeXBlIGZyb20gJy4uL3V0aWxzL2RlcHJlY2F0ZWRQcm9wVHlwZSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgdXNlSXNGb2N1c1Zpc2libGUgZnJvbSAnLi4vdXRpbHMvdXNlSXNGb2N1c1Zpc2libGUnO1xuaW1wb3J0IFRvdWNoUmlwcGxlIGZyb20gJy4vVG91Y2hSaXBwbGUnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgLy8gUmVzZXQgZGVmYXVsdCB2YWx1ZVxuICAgIC8vIFdlIGRpc2FibGUgdGhlIGZvY3VzIHJpbmcgZm9yIG1vdXNlLCB0b3VjaCBhbmQga2V5Ym9hcmQgdXNlcnMuXG4gICAgb3V0bGluZTogMCxcbiAgICBib3JkZXI6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIC8vIFJlbW92ZSB0aGUgbWFyZ2luIGluIFNhZmFyaVxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIC8vIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBGaXJlZm94XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgLy8gUmVzZXRcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgIC8vIFJlc2V0XG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAvLyBTbyB3ZSB0YWtlIHByZWNlZGVudCBvdmVyIHRoZSBzdHlsZSBvZiBhIG5hdGl2ZSA8YSAvPiBlbGVtZW50LlxuICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgJyY6Oi1tb3otZm9jdXMtaW5uZXInOiB7XG4gICAgICBib3JkZXJTdHlsZTogJ25vbmUnIC8vIFJlbW92ZSBGaXJlZm94IGRvdHRlZCBvdXRsaW5lLlxuXG4gICAgfSxcbiAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIC8vIERpc2FibGUgbGluayBpbnRlcmFjdGlvbnNcbiAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgfSxcbiAgICAnQG1lZGlhIHByaW50Jzoge1xuICAgICAgY29sb3JBZGp1c3Q6ICdleGFjdCdcbiAgICB9XG4gIH0sXG5cbiAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgZGlzYWJsZWQ6IHt9LFxuXG4gIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYga2V5Ym9hcmQgZm9jdXNlZC4gKi9cbiAgZm9jdXNWaXNpYmxlOiB7fVxufTtcbi8qKlxuICogYEJ1dHRvbkJhc2VgIGNvbnRhaW5zIGFzIGZldyBzdHlsZXMgYXMgcG9zc2libGUuXG4gKiBJdCBhaW1zIHRvIGJlIGEgc2ltcGxlIGJ1aWxkaW5nIGJsb2NrIGZvciBjcmVhdGluZyBhIGJ1dHRvbi5cbiAqIEl0IGNvbnRhaW5zIGEgbG9hZCBvZiBzdHlsZSByZXNldCBhbmQgc29tZSBmb2N1cy9yaXBwbGUgbG9naWMuXG4gKi9cblxudmFyIEJ1dHRvbkJhc2UgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBCdXR0b25CYXNlKHByb3BzLCByZWYpIHtcbiAgdmFyIGFjdGlvbiA9IHByb3BzLmFjdGlvbixcbiAgICAgIGJ1dHRvblJlZlByb3AgPSBwcm9wcy5idXR0b25SZWYsXG4gICAgICBfcHJvcHMkY2VudGVyUmlwcGxlID0gcHJvcHMuY2VudGVyUmlwcGxlLFxuICAgICAgY2VudGVyUmlwcGxlID0gX3Byb3BzJGNlbnRlclJpcHBsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkY2VudGVyUmlwcGxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdidXR0b24nIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGRpc2FibGVSaXBwbGUgPSBwcm9wcy5kaXNhYmxlUmlwcGxlLFxuICAgICAgZGlzYWJsZVJpcHBsZSA9IF9wcm9wcyRkaXNhYmxlUmlwcGxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlUmlwcGxlLFxuICAgICAgX3Byb3BzJGRpc2FibGVUb3VjaFJpID0gcHJvcHMuZGlzYWJsZVRvdWNoUmlwcGxlLFxuICAgICAgZGlzYWJsZVRvdWNoUmlwcGxlID0gX3Byb3BzJGRpc2FibGVUb3VjaFJpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlVG91Y2hSaSxcbiAgICAgIF9wcm9wcyRmb2N1c1JpcHBsZSA9IHByb3BzLmZvY3VzUmlwcGxlLFxuICAgICAgZm9jdXNSaXBwbGUgPSBfcHJvcHMkZm9jdXNSaXBwbGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZvY3VzUmlwcGxlLFxuICAgICAgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lID0gcHJvcHMuZm9jdXNWaXNpYmxlQ2xhc3NOYW1lLFxuICAgICAgb25CbHVyID0gcHJvcHMub25CbHVyLFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIG9uRm9jdXNWaXNpYmxlID0gcHJvcHMub25Gb2N1c1Zpc2libGUsXG4gICAgICBvbktleURvd24gPSBwcm9wcy5vbktleURvd24sXG4gICAgICBvbktleVVwID0gcHJvcHMub25LZXlVcCxcbiAgICAgIG9uTW91c2VEb3duID0gcHJvcHMub25Nb3VzZURvd24sXG4gICAgICBvbk1vdXNlTGVhdmUgPSBwcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICBvbk1vdXNlVXAgPSBwcm9wcy5vbk1vdXNlVXAsXG4gICAgICBvblRvdWNoRW5kID0gcHJvcHMub25Ub3VjaEVuZCxcbiAgICAgIG9uVG91Y2hNb3ZlID0gcHJvcHMub25Ub3VjaE1vdmUsXG4gICAgICBvblRvdWNoU3RhcnQgPSBwcm9wcy5vblRvdWNoU3RhcnQsXG4gICAgICBvbkRyYWdMZWF2ZSA9IHByb3BzLm9uRHJhZ0xlYXZlLFxuICAgICAgX3Byb3BzJHRhYkluZGV4ID0gcHJvcHMudGFiSW5kZXgsXG4gICAgICB0YWJJbmRleCA9IF9wcm9wcyR0YWJJbmRleCA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyR0YWJJbmRleCxcbiAgICAgIFRvdWNoUmlwcGxlUHJvcHMgPSBwcm9wcy5Ub3VjaFJpcHBsZVByb3BzLFxuICAgICAgX3Byb3BzJHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdHlwZSA9IF9wcm9wcyR0eXBlID09PSB2b2lkIDAgPyAnYnV0dG9uJyA6IF9wcm9wcyR0eXBlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFjdGlvblwiLCBcImJ1dHRvblJlZlwiLCBcImNlbnRlclJpcHBsZVwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcImRpc2FibGVkXCIsIFwiZGlzYWJsZVJpcHBsZVwiLCBcImRpc2FibGVUb3VjaFJpcHBsZVwiLCBcImZvY3VzUmlwcGxlXCIsIFwiZm9jdXNWaXNpYmxlQ2xhc3NOYW1lXCIsIFwib25CbHVyXCIsIFwib25DbGlja1wiLCBcIm9uRm9jdXNcIiwgXCJvbkZvY3VzVmlzaWJsZVwiLCBcIm9uS2V5RG93blwiLCBcIm9uS2V5VXBcIiwgXCJvbk1vdXNlRG93blwiLCBcIm9uTW91c2VMZWF2ZVwiLCBcIm9uTW91c2VVcFwiLCBcIm9uVG91Y2hFbmRcIiwgXCJvblRvdWNoTW92ZVwiLCBcIm9uVG91Y2hTdGFydFwiLCBcIm9uRHJhZ0xlYXZlXCIsIFwidGFiSW5kZXhcIiwgXCJUb3VjaFJpcHBsZVByb3BzXCIsIFwidHlwZVwiXSk7XG5cbiAgdmFyIGJ1dHRvblJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiBnZXRCdXR0b25Ob2RlKCkge1xuICAgIC8vICNTdHJpY3RNb2RlIHJlYWR5XG4gICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKGJ1dHRvblJlZi5jdXJyZW50KTtcbiAgfVxuXG4gIHZhciByaXBwbGVSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIGZvY3VzVmlzaWJsZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldEZvY3VzVmlzaWJsZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICBpZiAoZGlzYWJsZWQgJiYgZm9jdXNWaXNpYmxlKSB7XG4gICAgc2V0Rm9jdXNWaXNpYmxlKGZhbHNlKTtcbiAgfVxuXG4gIHZhciBfdXNlSXNGb2N1c1Zpc2libGUgPSB1c2VJc0ZvY3VzVmlzaWJsZSgpLFxuICAgICAgaXNGb2N1c1Zpc2libGUgPSBfdXNlSXNGb2N1c1Zpc2libGUuaXNGb2N1c1Zpc2libGUsXG4gICAgICBvbkJsdXJWaXNpYmxlID0gX3VzZUlzRm9jdXNWaXNpYmxlLm9uQmx1clZpc2libGUsXG4gICAgICBmb2N1c1Zpc2libGVSZWYgPSBfdXNlSXNGb2N1c1Zpc2libGUucmVmO1xuXG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUoYWN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvY3VzVmlzaWJsZTogZnVuY3Rpb24gZm9jdXNWaXNpYmxlKCkge1xuICAgICAgICBzZXRGb2N1c1Zpc2libGUodHJ1ZSk7XG4gICAgICAgIGJ1dHRvblJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChmb2N1c1Zpc2libGUgJiYgZm9jdXNSaXBwbGUgJiYgIWRpc2FibGVSaXBwbGUpIHtcbiAgICAgIHJpcHBsZVJlZi5jdXJyZW50LnB1bHNhdGUoKTtcbiAgICB9XG4gIH0sIFtkaXNhYmxlUmlwcGxlLCBmb2N1c1JpcHBsZSwgZm9jdXNWaXNpYmxlXSk7XG5cbiAgZnVuY3Rpb24gdXNlUmlwcGxlSGFuZGxlcihyaXBwbGVBY3Rpb24sIGV2ZW50Q2FsbGJhY2spIHtcbiAgICB2YXIgc2tpcFJpcHBsZUFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZGlzYWJsZVRvdWNoUmlwcGxlO1xuICAgIHJldHVybiB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50Q2FsbGJhY2spIHtcbiAgICAgICAgZXZlbnRDYWxsYmFjayhldmVudCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpZ25vcmUgPSBza2lwUmlwcGxlQWN0aW9uO1xuXG4gICAgICBpZiAoIWlnbm9yZSAmJiByaXBwbGVSZWYuY3VycmVudCkge1xuICAgICAgICByaXBwbGVSZWYuY3VycmVudFtyaXBwbGVBY3Rpb25dKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgaGFuZGxlTW91c2VEb3duID0gdXNlUmlwcGxlSGFuZGxlcignc3RhcnQnLCBvbk1vdXNlRG93bik7XG4gIHZhciBoYW5kbGVEcmFnTGVhdmUgPSB1c2VSaXBwbGVIYW5kbGVyKCdzdG9wJywgb25EcmFnTGVhdmUpO1xuICB2YXIgaGFuZGxlTW91c2VVcCA9IHVzZVJpcHBsZUhhbmRsZXIoJ3N0b3AnLCBvbk1vdXNlVXApO1xuICB2YXIgaGFuZGxlTW91c2VMZWF2ZSA9IHVzZVJpcHBsZUhhbmRsZXIoJ3N0b3AnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZm9jdXNWaXNpYmxlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChvbk1vdXNlTGVhdmUpIHtcbiAgICAgIG9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZVRvdWNoU3RhcnQgPSB1c2VSaXBwbGVIYW5kbGVyKCdzdGFydCcsIG9uVG91Y2hTdGFydCk7XG4gIHZhciBoYW5kbGVUb3VjaEVuZCA9IHVzZVJpcHBsZUhhbmRsZXIoJ3N0b3AnLCBvblRvdWNoRW5kKTtcbiAgdmFyIGhhbmRsZVRvdWNoTW92ZSA9IHVzZVJpcHBsZUhhbmRsZXIoJ3N0b3AnLCBvblRvdWNoTW92ZSk7XG4gIHZhciBoYW5kbGVCbHVyID0gdXNlUmlwcGxlSGFuZGxlcignc3RvcCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChmb2N1c1Zpc2libGUpIHtcbiAgICAgIG9uQmx1clZpc2libGUoZXZlbnQpO1xuICAgICAgc2V0Rm9jdXNWaXNpYmxlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAob25CbHVyKSB7XG4gICAgICBvbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfSwgZmFsc2UpO1xuICB2YXIgaGFuZGxlRm9jdXMgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIEZpeCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy83NzY5XG4gICAgaWYgKCFidXR0b25SZWYuY3VycmVudCkge1xuICAgICAgYnV0dG9uUmVmLmN1cnJlbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIH1cblxuICAgIGlmIChpc0ZvY3VzVmlzaWJsZShldmVudCkpIHtcbiAgICAgIHNldEZvY3VzVmlzaWJsZSh0cnVlKTtcblxuICAgICAgaWYgKG9uRm9jdXNWaXNpYmxlKSB7XG4gICAgICAgIG9uRm9jdXNWaXNpYmxlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob25Gb2N1cykge1xuICAgICAgb25Gb2N1cyhldmVudCk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgaXNOb25OYXRpdmVCdXR0b24gPSBmdW5jdGlvbiBpc05vbk5hdGl2ZUJ1dHRvbigpIHtcbiAgICB2YXIgYnV0dG9uID0gZ2V0QnV0dG9uTm9kZSgpO1xuICAgIHJldHVybiBjb21wb25lbnQgJiYgY29tcG9uZW50ICE9PSAnYnV0dG9uJyAmJiAhKGJ1dHRvbi50YWdOYW1lID09PSAnQScgJiYgYnV0dG9uLmhyZWYpO1xuICB9O1xuICAvKipcbiAgICogSUUgMTEgc2hpbSBmb3IgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQvcmVwZWF0XG4gICAqL1xuXG5cbiAgdmFyIGtleWRvd25SZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICB2YXIgaGFuZGxlS2V5RG93biA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gQ2hlY2sgaWYga2V5IGlzIGFscmVhZHkgZG93biB0byBhdm9pZCByZXBlYXRzIGJlaW5nIGNvdW50ZWQgYXMgbXVsdGlwbGUgYWN0aXZhdGlvbnNcbiAgICBpZiAoZm9jdXNSaXBwbGUgJiYgIWtleWRvd25SZWYuY3VycmVudCAmJiBmb2N1c1Zpc2libGUgJiYgcmlwcGxlUmVmLmN1cnJlbnQgJiYgZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgIGtleWRvd25SZWYuY3VycmVudCA9IHRydWU7XG4gICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICByaXBwbGVSZWYuY3VycmVudC5zdG9wKGV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJpcHBsZVJlZi5jdXJyZW50LnN0YXJ0KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQgJiYgaXNOb25OYXRpdmVCdXR0b24oKSAmJiBldmVudC5rZXkgPT09ICcgJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAob25LZXlEb3duKSB7XG4gICAgICBvbktleURvd24oZXZlbnQpO1xuICAgIH0gLy8gS2V5Ym9hcmQgYWNjZXNzaWJpbGl0eSBmb3Igbm9uIGludGVyYWN0aXZlIGVsZW1lbnRzXG5cblxuICAgIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQgJiYgaXNOb25OYXRpdmVCdXR0b24oKSAmJiBldmVudC5rZXkgPT09ICdFbnRlcicgJiYgIWRpc2FibGVkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAob25DbGljaykge1xuICAgICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICB2YXIgaGFuZGxlS2V5VXAgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIGNhbGxpbmcgcHJldmVudERlZmF1bHQgaW4ga2V5VXAgb24gYSA8YnV0dG9uPiB3aWxsIG5vdCBkaXNwYXRjaCBhIGNsaWNrIGV2ZW50IGlmIFNwYWNlIGlzIHByZXNzZWRcbiAgICAvLyBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvYnV0dG9uLWtleXVwLXByZXZlbnRkZWZhdWx0LWRuN2YwXG4gICAgaWYgKGZvY3VzUmlwcGxlICYmIGV2ZW50LmtleSA9PT0gJyAnICYmIHJpcHBsZVJlZi5jdXJyZW50ICYmIGZvY3VzVmlzaWJsZSAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAga2V5ZG93blJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICByaXBwbGVSZWYuY3VycmVudC5zdG9wKGV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJpcHBsZVJlZi5jdXJyZW50LnB1bHNhdGUoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9uS2V5VXApIHtcbiAgICAgIG9uS2V5VXAoZXZlbnQpO1xuICAgIH0gLy8gS2V5Ym9hcmQgYWNjZXNzaWJpbGl0eSBmb3Igbm9uIGludGVyYWN0aXZlIGVsZW1lbnRzXG5cblxuICAgIGlmIChvbkNsaWNrICYmIGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCAmJiBpc05vbk5hdGl2ZUJ1dHRvbigpICYmIGV2ZW50LmtleSA9PT0gJyAnICYmICFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH0pO1xuICB2YXIgQ29tcG9uZW50UHJvcCA9IGNvbXBvbmVudDtcblxuICBpZiAoQ29tcG9uZW50UHJvcCA9PT0gJ2J1dHRvbicgJiYgb3RoZXIuaHJlZikge1xuICAgIENvbXBvbmVudFByb3AgPSAnYSc7XG4gIH1cblxuICB2YXIgYnV0dG9uUHJvcHMgPSB7fTtcblxuICBpZiAoQ29tcG9uZW50UHJvcCA9PT0gJ2J1dHRvbicpIHtcbiAgICBidXR0b25Qcm9wcy50eXBlID0gdHlwZTtcbiAgICBidXR0b25Qcm9wcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9IGVsc2Uge1xuICAgIGlmIChDb21wb25lbnRQcm9wICE9PSAnYScgfHwgIW90aGVyLmhyZWYpIHtcbiAgICAgIGJ1dHRvblByb3BzLnJvbGUgPSAnYnV0dG9uJztcbiAgICB9XG5cbiAgICBidXR0b25Qcm9wc1snYXJpYS1kaXNhYmxlZCddID0gZGlzYWJsZWQ7XG4gIH1cblxuICB2YXIgaGFuZGxlVXNlclJlZiA9IHVzZUZvcmtSZWYoYnV0dG9uUmVmUHJvcCwgcmVmKTtcbiAgdmFyIGhhbmRsZU93blJlZiA9IHVzZUZvcmtSZWYoZm9jdXNWaXNpYmxlUmVmLCBidXR0b25SZWYpO1xuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihoYW5kbGVVc2VyUmVmLCBoYW5kbGVPd25SZWYpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxuICAgICAgbW91bnRlZFN0YXRlID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldE1vdW50ZWRTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRNb3VudGVkU3RhdGUodHJ1ZSk7XG4gIH0sIFtdKTtcbiAgdmFyIGVuYWJsZVRvdWNoUmlwcGxlID0gbW91bnRlZFN0YXRlICYmICFkaXNhYmxlUmlwcGxlICYmICFkaXNhYmxlZDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZW5hYmxlVG91Y2hSaXBwbGUgJiYgIXJpcHBsZVJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIGBjb21wb25lbnRgIHByb3AgcHJvdmlkZWQgdG8gQnV0dG9uQmFzZSBpcyBpbnZhbGlkLicsICdQbGVhc2UgbWFrZSBzdXJlIHRoZSBjaGlsZHJlbiBwcm9wIGlzIHJlbmRlcmVkIGluIHRoaXMgY3VzdG9tIGNvbXBvbmVudC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfSwgW2VuYWJsZVRvdWNoUmlwcGxlXSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50UHJvcCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgZm9jdXNWaXNpYmxlICYmIFtjbGFzc2VzLmZvY3VzVmlzaWJsZSwgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lXSwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCksXG4gICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgb25Gb2N1czogaGFuZGxlRm9jdXMsXG4gICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgIG9uS2V5VXA6IGhhbmRsZUtleVVwLFxuICAgIG9uTW91c2VEb3duOiBoYW5kbGVNb3VzZURvd24sXG4gICAgb25Nb3VzZUxlYXZlOiBoYW5kbGVNb3VzZUxlYXZlLFxuICAgIG9uTW91c2VVcDogaGFuZGxlTW91c2VVcCxcbiAgICBvbkRyYWdMZWF2ZTogaGFuZGxlRHJhZ0xlYXZlLFxuICAgIG9uVG91Y2hFbmQ6IGhhbmRsZVRvdWNoRW5kLFxuICAgIG9uVG91Y2hNb3ZlOiBoYW5kbGVUb3VjaE1vdmUsXG4gICAgb25Ub3VjaFN0YXJ0OiBoYW5kbGVUb3VjaFN0YXJ0LFxuICAgIHJlZjogaGFuZGxlUmVmLFxuICAgIHRhYkluZGV4OiBkaXNhYmxlZCA/IC0xIDogdGFiSW5kZXhcbiAgfSwgYnV0dG9uUHJvcHMsIG90aGVyKSwgY2hpbGRyZW4sIGVuYWJsZVRvdWNoUmlwcGxlID9cbiAgLyojX19QVVJFX18qL1xuXG4gIC8qIFRvdWNoUmlwcGxlIGlzIG9ubHkgbmVlZGVkIGNsaWVudC1zaWRlLCB4MiBib29zdCBvbiB0aGUgc2VydmVyLiAqL1xuICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvdWNoUmlwcGxlLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByaXBwbGVSZWYsXG4gICAgY2VudGVyOiBjZW50ZXJSaXBwbGVcbiAgfSwgVG91Y2hSaXBwbGVQcm9wcykpIDogbnVsbCk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEJ1dHRvbkJhc2UucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQSByZWYgZm9yIGltcGVyYXRpdmUgYWN0aW9ucy5cbiAgICogSXQgY3VycmVudGx5IG9ubHkgc3VwcG9ydHMgYGZvY3VzVmlzaWJsZSgpYCBhY3Rpb24uXG4gICAqL1xuICBhY3Rpb246IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogVXNlIHRoYXQgcHJvcCB0byBwYXNzIGEgcmVmIHRvIHRoZSBuYXRpdmUgYnV0dG9uIGNvbXBvbmVudC5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIGByZWZgIGluc3RlYWQuXG4gICAqL1xuICBidXR0b25SZWY6IGRlcHJlY2F0ZWRQcm9wVHlwZShyZWZUeXBlLCAnVXNlIGByZWZgIGluc3RlYWQuJyksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHJpcHBsZXMgd2lsbCBiZSBjZW50ZXJlZC5cbiAgICogVGhleSB3b24ndCBzdGFydCBhdCB0aGUgY3Vyc29yIGludGVyYWN0aW9uIHBvc2l0aW9uLlxuICAgKi9cbiAgY2VudGVyUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogZWxlbWVudFR5cGVBY2NlcHRpbmdSZWYsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJhc2UgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICpcbiAgICog4pqg77iPIFdpdGhvdXQgYSByaXBwbGUgdGhlcmUgaXMgbm8gc3R5bGluZyBmb3IgOmZvY3VzLXZpc2libGUgYnkgZGVmYXVsdC4gQmUgc3VyZVxuICAgKiB0byBoaWdobGlnaHQgdGhlIGVsZW1lbnQgYnkgYXBwbHlpbmcgc2VwYXJhdGUgc3R5bGVzIHdpdGggdGhlIGBmb2N1c1Zpc2libGVDbGFzc05hbWVgLlxuICAgKi9cbiAgZGlzYWJsZVJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRvdWNoIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVUb3VjaFJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJhc2UgYnV0dG9uIHdpbGwgaGF2ZSBhIGtleWJvYXJkIGZvY3VzIHJpcHBsZS5cbiAgICovXG4gIGZvY3VzUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhpcyBwcm9wIGNhbiBoZWxwIGlkZW50aWZ5IHdoaWNoIGVsZW1lbnQgaGFzIGtleWJvYXJkIGZvY3VzLlxuICAgKiBUaGUgY2xhc3MgbmFtZSB3aWxsIGJlIGFwcGxpZWQgd2hlbiB0aGUgZWxlbWVudCBnYWlucyB0aGUgZm9jdXMgdGhyb3VnaCBrZXlib2FyZCBpbnRlcmFjdGlvbi5cbiAgICogSXQncyBhIHBvbHlmaWxsIGZvciB0aGUgW0NTUyA6Zm9jdXMtdmlzaWJsZSBzZWxlY3Rvcl0oaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL3NlbGVjdG9ycy00LyN0aGUtZm9jdXMtdmlzaWJsZS1wc2V1ZG8pLlxuICAgKiBUaGUgcmF0aW9uYWxlIGZvciB1c2luZyB0aGlzIGZlYXR1cmUgW2lzIGV4cGxhaW5lZCBoZXJlXShodHRwczovL2dpdGh1Yi5jb20vV0lDRy9mb2N1cy12aXNpYmxlL2Jsb2IvbWFzdGVyL2V4cGxhaW5lci5tZCkuXG4gICAqIEEgW3BvbHlmaWxsIGNhbiBiZSB1c2VkXShodHRwczovL2dpdGh1Yi5jb20vV0lDRy9mb2N1cy12aXNpYmxlKSB0byBhcHBseSBhIGBmb2N1cy12aXNpYmxlYCBjbGFzcyB0byBvdGhlciBjb21wb25lbnRzXG4gICAqIGlmIG5lZWRlZC5cbiAgICovXG4gIGZvY3VzVmlzaWJsZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRHJhZ0xlYXZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmb2N1c2VkIHdpdGggYSBrZXlib2FyZC5cbiAgICogV2UgdHJpZ2dlciBhIGBvbkZvY3VzYCBjYWxsYmFjayB0b28uXG4gICAqL1xuICBvbkZvY3VzVmlzaWJsZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uS2V5VXA6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbk1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uTW91c2VVcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uVG91Y2hFbmQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvblRvdWNoTW92ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uVG91Y2hTdGFydDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIGBUb3VjaFJpcHBsZWAgZWxlbWVudC5cbiAgICovXG4gIFRvdWNoUmlwcGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2J1dHRvbicsICdyZXNldCcsICdzdWJtaXQnXSksIFByb3BUeXBlcy5zdHJpbmddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlCdXR0b25CYXNlJ1xufSkoQnV0dG9uQmFzZSk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnLi4vdXRpbHMvdXNlRXZlbnRDYWxsYmFjayc7XG52YXIgdXNlRW5oYW5jZWRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IFJlYWN0LnVzZUVmZmVjdCA6IFJlYWN0LnVzZUxheW91dEVmZmVjdDtcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG5mdW5jdGlvbiBSaXBwbGUocHJvcHMpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgX3Byb3BzJHB1bHNhdGUgPSBwcm9wcy5wdWxzYXRlLFxuICAgICAgcHVsc2F0ZSA9IF9wcm9wcyRwdWxzYXRlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRwdWxzYXRlLFxuICAgICAgcmlwcGxlWCA9IHByb3BzLnJpcHBsZVgsXG4gICAgICByaXBwbGVZID0gcHJvcHMucmlwcGxlWSxcbiAgICAgIHJpcHBsZVNpemUgPSBwcm9wcy5yaXBwbGVTaXplLFxuICAgICAgaW5Qcm9wID0gcHJvcHMuaW4sXG4gICAgICBfcHJvcHMkb25FeGl0ZWQgPSBwcm9wcy5vbkV4aXRlZCxcbiAgICAgIG9uRXhpdGVkID0gX3Byb3BzJG9uRXhpdGVkID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9wcm9wcyRvbkV4aXRlZCxcbiAgICAgIHRpbWVvdXQgPSBwcm9wcy50aW1lb3V0O1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBsZWF2aW5nID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0TGVhdmluZyA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgcmlwcGxlQ2xhc3NOYW1lID0gY2xzeChjbGFzc2VzLnJpcHBsZSwgY2xhc3Nlcy5yaXBwbGVWaXNpYmxlLCBwdWxzYXRlICYmIGNsYXNzZXMucmlwcGxlUHVsc2F0ZSk7XG4gIHZhciByaXBwbGVTdHlsZXMgPSB7XG4gICAgd2lkdGg6IHJpcHBsZVNpemUsXG4gICAgaGVpZ2h0OiByaXBwbGVTaXplLFxuICAgIHRvcDogLShyaXBwbGVTaXplIC8gMikgKyByaXBwbGVZLFxuICAgIGxlZnQ6IC0ocmlwcGxlU2l6ZSAvIDIpICsgcmlwcGxlWFxuICB9O1xuICB2YXIgY2hpbGRDbGFzc05hbWUgPSBjbHN4KGNsYXNzZXMuY2hpbGQsIGxlYXZpbmcgJiYgY2xhc3Nlcy5jaGlsZExlYXZpbmcsIHB1bHNhdGUgJiYgY2xhc3Nlcy5jaGlsZFB1bHNhdGUpO1xuICB2YXIgaGFuZGxlRXhpdGVkID0gdXNlRXZlbnRDYWxsYmFjayhvbkV4aXRlZCk7IC8vIFJpcHBsZSBpcyB1c2VkIGZvciB1c2VyIGZlZWRiYWNrIChlLmcuIGNsaWNrIG9yIHByZXNzKSBzbyB3ZSB3YW50IHRvIGFwcGx5IHN0eWxlcyB3aXRoIHRoZSBoaWdoZXN0IHByaW9yaXR5XG5cbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaW5Qcm9wKSB7XG4gICAgICAvLyByZWFjdC10cmFuc2l0aW9uLWdyb3VwI29uRXhpdFxuICAgICAgc2V0TGVhdmluZyh0cnVlKTsgLy8gcmVhY3QtdHJhbnNpdGlvbi1ncm91cCNvbkV4aXRlZFxuXG4gICAgICB2YXIgdGltZW91dElkID0gc2V0VGltZW91dChoYW5kbGVFeGl0ZWQsIHRpbWVvdXQpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sIFtoYW5kbGVFeGl0ZWQsIGluUHJvcCwgdGltZW91dF0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IHJpcHBsZUNsYXNzTmFtZSxcbiAgICBzdHlsZTogcmlwcGxlU3R5bGVzXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBjaGlsZENsYXNzTmFtZVxuICB9KSk7XG59XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFJpcHBsZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZSAtIGluamVjdGVkIGZyb20gVHJhbnNpdGlvbkdyb3VwXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmUgLSBpbmplY3RlZCBmcm9tIFRyYW5zaXRpb25Hcm91cFxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSByaXBwbGUgcHVsc2F0ZXMsIHR5cGljYWxseSBpbmRpY2F0aW5nIHRoZSBrZXlib2FyZCBmb2N1cyBzdGF0ZSBvZiBhbiBlbGVtZW50LlxuICAgKi9cbiAgcHVsc2F0ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERpYW1ldGVyIG9mIHRoZSByaXBwbGUuXG4gICAqL1xuICByaXBwbGVTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBIb3Jpem9udGFsIHBvc2l0aW9uIG9mIHRoZSByaXBwbGUgY2VudGVyLlxuICAgKi9cbiAgcmlwcGxlWDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVmVydGljYWwgcG9zaXRpb24gb2YgdGhlIHJpcHBsZSBjZW50ZXIuXG4gICAqL1xuICByaXBwbGVZOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBleGl0IGRlbGF5XG4gICAqL1xuICB0aW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCBSaXBwbGU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFJpcHBsZSBmcm9tICcuL1JpcHBsZSc7XG52YXIgRFVSQVRJT04gPSA1NTA7XG5leHBvcnQgdmFyIERFTEFZX1JJUFBMRSA9IDgwO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgekluZGV4OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGBSaXBwbGVgIGNvbXBvbmVudHMgYHJpcHBsZWAgY2xhc3MuICovXG4gICAgcmlwcGxlOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGBSaXBwbGVgIGNvbXBvbmVudHMgYHJpcHBsZVZpc2libGVgIGNsYXNzLiAqL1xuICAgIHJpcHBsZVZpc2libGU6IHtcbiAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgIGFuaW1hdGlvbjogXCIkZW50ZXIgXCIuY29uY2F0KERVUkFUSU9OLCBcIm1zIFwiKS5jb25jYXQodGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VJbk91dClcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGBSaXBwbGVgIGNvbXBvbmVudHMgYHJpcHBsZVB1bHNhdGVgIGNsYXNzLiAqL1xuICAgIHJpcHBsZVB1bHNhdGU6IHtcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBcIlwiLmNvbmNhdCh0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyLCBcIm1zXCIpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBgUmlwcGxlYCBjb21wb25lbnRzIGBjaGlsZGAgY2xhc3MuICovXG4gICAgY2hpbGQ6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGBSaXBwbGVgIGNvbXBvbmVudHMgYGNoaWxkTGVhdmluZ2AgY2xhc3MuICovXG4gICAgY2hpbGRMZWF2aW5nOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgYW5pbWF0aW9uOiBcIiRleGl0IFwiLmNvbmNhdChEVVJBVElPTiwgXCJtcyBcIikuY29uY2F0KHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlSW5PdXQpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBgUmlwcGxlYCBjb21wb25lbnRzIGBjaGlsZFB1bHNhdGVgIGNsYXNzLiAqL1xuICAgIGNoaWxkUHVsc2F0ZToge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgYW5pbWF0aW9uOiBcIiRwdWxzYXRlIDI1MDBtcyBcIi5jb25jYXQodGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VJbk91dCwgXCIgMjAwbXMgaW5maW5pdGVcIilcbiAgICB9LFxuICAgICdAa2V5ZnJhbWVzIGVudGVyJzoge1xuICAgICAgJzAlJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgICAgIG9wYWNpdHk6IDAuMVxuICAgICAgfSxcbiAgICAgICcxMDAlJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgICAgIG9wYWNpdHk6IDAuM1xuICAgICAgfVxuICAgIH0sXG4gICAgJ0BrZXlmcmFtZXMgZXhpdCc6IHtcbiAgICAgICcwJSc6IHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSxcbiAgICAgICcxMDAlJzoge1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9XG4gICAgfSxcbiAgICAnQGtleWZyYW1lcyBwdWxzYXRlJzoge1xuICAgICAgJzAlJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICAgIH0sXG4gICAgICAnNTAlJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjkyKSdcbiAgICAgIH0sXG4gICAgICAnMTAwJSc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqXG4gKiBUT0RPIHY1OiBNYWtlIHByaXZhdGVcbiAqL1xuXG52YXIgVG91Y2hSaXBwbGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUb3VjaFJpcHBsZShwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkY2VudGVyID0gcHJvcHMuY2VudGVyLFxuICAgICAgY2VudGVyUHJvcCA9IF9wcm9wcyRjZW50ZXIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGNlbnRlcixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNlbnRlclwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShbXSksXG4gICAgICByaXBwbGVzID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0UmlwcGxlcyA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgbmV4dEtleSA9IFJlYWN0LnVzZVJlZigwKTtcbiAgdmFyIHJpcHBsZUNhbGxiYWNrID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChyaXBwbGVDYWxsYmFjay5jdXJyZW50KSB7XG4gICAgICByaXBwbGVDYWxsYmFjay5jdXJyZW50KCk7XG4gICAgICByaXBwbGVDYWxsYmFjay5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sIFtyaXBwbGVzXSk7IC8vIFVzZWQgdG8gZmlsdGVyIG91dCBtb3VzZSBlbXVsYXRlZCBldmVudHMgb24gbW9iaWxlLlxuXG4gIHZhciBpZ25vcmluZ01vdXNlRG93biA9IFJlYWN0LnVzZVJlZihmYWxzZSk7IC8vIFdlIHVzZSBhIHRpbWVyIGluIG9yZGVyIHRvIG9ubHkgc2hvdyB0aGUgcmlwcGxlcyBmb3IgdG91Y2ggXCJjbGlja1wiIGxpa2UgZXZlbnRzLlxuICAvLyBXZSBkb24ndCB3YW50IHRvIGRpc3BsYXkgdGhlIHJpcHBsZSBmb3IgdG91Y2ggc2Nyb2xsIGV2ZW50cy5cblxuICB2YXIgc3RhcnRUaW1lciA9IFJlYWN0LnVzZVJlZihudWxsKTsgLy8gVGhpcyBpcyB0aGUgaG9vayBjYWxsZWQgb25jZSB0aGUgcHJldmlvdXMgdGltZW91dCBpcyByZWFkeS5cblxuICB2YXIgc3RhcnRUaW1lckNvbW1pdCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGNvbnRhaW5lciA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHN0YXJ0VGltZXIuY3VycmVudCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICB2YXIgc3RhcnRDb21taXQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgdmFyIHB1bHNhdGUgPSBwYXJhbXMucHVsc2F0ZSxcbiAgICAgICAgcmlwcGxlWCA9IHBhcmFtcy5yaXBwbGVYLFxuICAgICAgICByaXBwbGVZID0gcGFyYW1zLnJpcHBsZVksXG4gICAgICAgIHJpcHBsZVNpemUgPSBwYXJhbXMucmlwcGxlU2l6ZSxcbiAgICAgICAgY2IgPSBwYXJhbXMuY2I7XG4gICAgc2V0UmlwcGxlcyhmdW5jdGlvbiAob2xkUmlwcGxlcykge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkob2xkUmlwcGxlcyksIFsvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSaXBwbGUsIHtcbiAgICAgICAga2V5OiBuZXh0S2V5LmN1cnJlbnQsXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXMsXG4gICAgICAgIHRpbWVvdXQ6IERVUkFUSU9OLFxuICAgICAgICBwdWxzYXRlOiBwdWxzYXRlLFxuICAgICAgICByaXBwbGVYOiByaXBwbGVYLFxuICAgICAgICByaXBwbGVZOiByaXBwbGVZLFxuICAgICAgICByaXBwbGVTaXplOiByaXBwbGVTaXplXG4gICAgICB9KV0pO1xuICAgIH0pO1xuICAgIG5leHRLZXkuY3VycmVudCArPSAxO1xuICAgIHJpcHBsZUNhbGxiYWNrLmN1cnJlbnQgPSBjYjtcbiAgfSwgW2NsYXNzZXNdKTtcbiAgdmFyIHN0YXJ0ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBjYiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICAgIHZhciBfb3B0aW9ucyRwdWxzYXRlID0gb3B0aW9ucy5wdWxzYXRlLFxuICAgICAgICBwdWxzYXRlID0gX29wdGlvbnMkcHVsc2F0ZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRwdWxzYXRlLFxuICAgICAgICBfb3B0aW9ucyRjZW50ZXIgPSBvcHRpb25zLmNlbnRlcixcbiAgICAgICAgY2VudGVyID0gX29wdGlvbnMkY2VudGVyID09PSB2b2lkIDAgPyBjZW50ZXJQcm9wIHx8IG9wdGlvbnMucHVsc2F0ZSA6IF9vcHRpb25zJGNlbnRlcixcbiAgICAgICAgX29wdGlvbnMkZmFrZUVsZW1lbnQgPSBvcHRpb25zLmZha2VFbGVtZW50LFxuICAgICAgICBmYWtlRWxlbWVudCA9IF9vcHRpb25zJGZha2VFbGVtZW50ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGZha2VFbGVtZW50O1xuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGlnbm9yaW5nTW91c2VEb3duLmN1cnJlbnQpIHtcbiAgICAgIGlnbm9yaW5nTW91c2VEb3duLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICBpZ25vcmluZ01vdXNlRG93bi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGZha2VFbGVtZW50ID8gbnVsbCA6IGNvbnRhaW5lci5jdXJyZW50O1xuICAgIHZhciByZWN0ID0gZWxlbWVudCA/IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDBcbiAgICB9OyAvLyBHZXQgdGhlIHNpemUgb2YgdGhlIHJpcHBsZVxuXG4gICAgdmFyIHJpcHBsZVg7XG4gICAgdmFyIHJpcHBsZVk7XG4gICAgdmFyIHJpcHBsZVNpemU7XG5cbiAgICBpZiAoY2VudGVyIHx8IGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCB8fCAhZXZlbnQuY2xpZW50WCAmJiAhZXZlbnQudG91Y2hlcykge1xuICAgICAgcmlwcGxlWCA9IE1hdGgucm91bmQocmVjdC53aWR0aCAvIDIpO1xuICAgICAgcmlwcGxlWSA9IE1hdGgucm91bmQocmVjdC5oZWlnaHQgLyAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9yZWYgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50LFxuICAgICAgICAgIGNsaWVudFggPSBfcmVmLmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSA9IF9yZWYuY2xpZW50WTtcblxuICAgICAgcmlwcGxlWCA9IE1hdGgucm91bmQoY2xpZW50WCAtIHJlY3QubGVmdCk7XG4gICAgICByaXBwbGVZID0gTWF0aC5yb3VuZChjbGllbnRZIC0gcmVjdC50b3ApO1xuICAgIH1cblxuICAgIGlmIChjZW50ZXIpIHtcbiAgICAgIHJpcHBsZVNpemUgPSBNYXRoLnNxcnQoKDIgKiBNYXRoLnBvdyhyZWN0LndpZHRoLCAyKSArIE1hdGgucG93KHJlY3QuaGVpZ2h0LCAyKSkgLyAzKTsgLy8gRm9yIHNvbWUgcmVhc29uIHRoZSBhbmltYXRpb24gaXMgYnJva2VuIG9uIE1vYmlsZSBDaHJvbWUgaWYgdGhlIHNpemUgaWYgZXZlbi5cblxuICAgICAgaWYgKHJpcHBsZVNpemUgJSAyID09PSAwKSB7XG4gICAgICAgIHJpcHBsZVNpemUgKz0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNpemVYID0gTWF0aC5tYXgoTWF0aC5hYnMoKGVsZW1lbnQgPyBlbGVtZW50LmNsaWVudFdpZHRoIDogMCkgLSByaXBwbGVYKSwgcmlwcGxlWCkgKiAyICsgMjtcbiAgICAgIHZhciBzaXplWSA9IE1hdGgubWF4KE1hdGguYWJzKChlbGVtZW50ID8gZWxlbWVudC5jbGllbnRIZWlnaHQgOiAwKSAtIHJpcHBsZVkpLCByaXBwbGVZKSAqIDIgKyAyO1xuICAgICAgcmlwcGxlU2l6ZSA9IE1hdGguc3FydChNYXRoLnBvdyhzaXplWCwgMikgKyBNYXRoLnBvdyhzaXplWSwgMikpO1xuICAgIH0gLy8gVG91Y2hlIGRldmljZXNcblxuXG4gICAgaWYgKGV2ZW50LnRvdWNoZXMpIHtcbiAgICAgIC8vIGNoZWNrIHRoYXQgdGhpcyBpc24ndCBhbm90aGVyIHRvdWNoc3RhcnQgZHVlIHRvIG11bHRpdG91Y2hcbiAgICAgIC8vIG90aGVyd2lzZSB3ZSB3aWxsIG9ubHkgY2xlYXIgYSBzaW5nbGUgdGltZXIgd2hlbiB1bm1vdW50aW5nIHdoaWxlIHR3b1xuICAgICAgLy8gYXJlIHJ1bm5pbmdcbiAgICAgIGlmIChzdGFydFRpbWVyQ29tbWl0LmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgLy8gUHJlcGFyZSB0aGUgcmlwcGxlIGVmZmVjdC5cbiAgICAgICAgc3RhcnRUaW1lckNvbW1pdC5jdXJyZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN0YXJ0Q29tbWl0KHtcbiAgICAgICAgICAgIHB1bHNhdGU6IHB1bHNhdGUsXG4gICAgICAgICAgICByaXBwbGVYOiByaXBwbGVYLFxuICAgICAgICAgICAgcmlwcGxlWTogcmlwcGxlWSxcbiAgICAgICAgICAgIHJpcHBsZVNpemU6IHJpcHBsZVNpemUsXG4gICAgICAgICAgICBjYjogY2JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTsgLy8gRGVsYXkgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgcmlwcGxlIGVmZmVjdC5cblxuXG4gICAgICAgIHN0YXJ0VGltZXIuY3VycmVudCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChzdGFydFRpbWVyQ29tbWl0LmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZXJDb21taXQuY3VycmVudCgpO1xuICAgICAgICAgICAgc3RhcnRUaW1lckNvbW1pdC5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIERFTEFZX1JJUFBMRSk7IC8vIFdlIGhhdmUgdG8gbWFrZSBhIHRyYWRlb2ZmIHdpdGggdGhpcyB2YWx1ZS5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRDb21taXQoe1xuICAgICAgICBwdWxzYXRlOiBwdWxzYXRlLFxuICAgICAgICByaXBwbGVYOiByaXBwbGVYLFxuICAgICAgICByaXBwbGVZOiByaXBwbGVZLFxuICAgICAgICByaXBwbGVTaXplOiByaXBwbGVTaXplLFxuICAgICAgICBjYjogY2JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2NlbnRlclByb3AsIHN0YXJ0Q29tbWl0XSk7XG4gIHZhciBwdWxzYXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHN0YXJ0KHt9LCB7XG4gICAgICBwdWxzYXRlOiB0cnVlXG4gICAgfSk7XG4gIH0sIFtzdGFydF0pO1xuICB2YXIgc3RvcCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCwgY2IpIHtcbiAgICBjbGVhclRpbWVvdXQoc3RhcnRUaW1lci5jdXJyZW50KTsgLy8gVGhlIHRvdWNoIGludGVyYWN0aW9uIG9jY3VycyB0b28gcXVpY2tseS5cbiAgICAvLyBXZSBzdGlsbCB3YW50IHRvIHNob3cgcmlwcGxlIGVmZmVjdC5cblxuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hlbmQnICYmIHN0YXJ0VGltZXJDb21taXQuY3VycmVudCkge1xuICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgc3RhcnRUaW1lckNvbW1pdC5jdXJyZW50KCk7XG4gICAgICBzdGFydFRpbWVyQ29tbWl0LmN1cnJlbnQgPSBudWxsO1xuICAgICAgc3RhcnRUaW1lci5jdXJyZW50ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0b3AoZXZlbnQsIGNiKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0YXJ0VGltZXJDb21taXQuY3VycmVudCA9IG51bGw7XG4gICAgc2V0UmlwcGxlcyhmdW5jdGlvbiAob2xkUmlwcGxlcykge1xuICAgICAgaWYgKG9sZFJpcHBsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gb2xkUmlwcGxlcy5zbGljZSgxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9sZFJpcHBsZXM7XG4gICAgfSk7XG4gICAgcmlwcGxlQ2FsbGJhY2suY3VycmVudCA9IGNiO1xuICB9LCBbXSk7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHB1bHNhdGU6IHB1bHNhdGUsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBzdG9wOiBzdG9wXG4gICAgfTtcbiAgfSwgW3B1bHNhdGUsIHN0YXJ0LCBzdG9wXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgcmVmOiBjb250YWluZXJcbiAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXAsIHtcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgZXhpdDogdHJ1ZVxuICB9LCByaXBwbGVzKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRvdWNoUmlwcGxlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHJpcHBsZSBzdGFydHMgYXQgdGhlIGNlbnRlciBvZiB0aGUgY29tcG9uZW50XG4gICAqIHJhdGhlciB0aGFuIGF0IHRoZSBwb2ludCBvZiBpbnRlcmFjdGlvbi5cbiAgICovXG4gIGNlbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBmbGlwOiBmYWxzZSxcbiAgbmFtZTogJ011aVRvdWNoUmlwcGxlJ1xufSkoIC8qI19fUFVSRV9fKi9SZWFjdC5tZW1vKFRvdWNoUmlwcGxlKSk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQnV0dG9uQmFzZSc7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgYWxwaGEgfSBmcm9tICcuLi9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICcuLi9CdXR0b25CYXNlJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbiwge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtaW5XaWR0aDogNjQsXG4gICAgICBwYWRkaW5nOiAnNnB4IDE2cHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydiYWNrZ3JvdW5kLWNvbG9yJywgJ2JveC1zaGFkb3cnLCAnYm9yZGVyJ10sIHtcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0XG4gICAgICB9KSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFscGhhKHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LCB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3Zlck9wYWNpdHkpLFxuICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgIH0sXG4gICAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZFxuICAgICAgfVxuICAgIH0pLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNwYW4gZWxlbWVudCB0aGF0IHdyYXBzIHRoZSBjaGlsZHJlbi4gKi9cbiAgICBsYWJlbDoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIC8vIEVuc3VyZSB0aGUgY29ycmVjdCB3aWR0aCBmb3IgaU9TIFNhZmFyaVxuICAgICAgZGlzcGxheTogJ2luaGVyaXQnLFxuICAgICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwidGV4dFwiYC4gKi9cbiAgICB0ZXh0OiB7XG4gICAgICBwYWRkaW5nOiAnNnB4IDhweCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInRleHRcImAgYW5kIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgdGV4dFByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFscGhhKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLCB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3Zlck9wYWNpdHkpLFxuICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInRleHRcImAgYW5kIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICB0ZXh0U2Vjb25kYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFscGhhKHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sIHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyT3BhY2l0eSksXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgb3V0bGluZWQ6IHtcbiAgICAgIHBhZGRpbmc6ICc1cHggMTVweCcsXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAncmdiYSgwLCAwLCAwLCAwLjIzKScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIzKScpLFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkQmFja2dyb3VuZClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgIGFuZCBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIG91dGxpbmVkUHJpbWFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQoYWxwaGEodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sIDAuNSkpLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluKSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhbHBoYSh0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXJPcGFjaXR5KSxcbiAgICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcbiAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYCBhbmQgYGNvbG9yPVwic2Vjb25kYXJ5XCJgLiAqL1xuICAgIG91dGxpbmVkU2Vjb25kYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgXCIuY29uY2F0KGFscGhhKHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sIDAuNSkpLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4pLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFscGhhKHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sIHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyT3BhY2l0eSksXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImNvbnRhaW5lZFwiYC4gKi9cbiAgICBjb250YWluZWQ6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLmdyZXlbMzAwXSksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVszMDBdLFxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5LkExMDAsXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s0XSxcbiAgICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcbiAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVszMDBdXG4gICAgICAgIH0sXG4gICAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRCYWNrZ3JvdW5kXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJiRmb2N1c1Zpc2libGUnOiB7XG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s2XVxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzhdXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZCxcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzBdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkQmFja2dyb3VuZFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiY29udGFpbmVkXCJgIGFuZCBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIGNvbnRhaW5lZFByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJjb250YWluZWRcImAgYW5kIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBjb250YWluZWRTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxuICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZUVsZXZhdGlvbj17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVFbGV2YXRpb246IHtcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJveFNoYWRvdzogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJyYkZm9jdXNWaXNpYmxlJzoge1xuICAgICAgICBib3hTaGFkb3c6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIEJ1dHRvbkJhc2Ugcm9vdCBlbGVtZW50IGlmIHRoZSBidXR0b24gaXMga2V5Ym9hcmQgZm9jdXNlZC4gKi9cbiAgICBmb2N1c1Zpc2libGU6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cImluaGVyaXRcImAuICovXG4gICAgY29sb3JJbmhlcml0OiB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNpemU9XCJzbWFsbFwiYCBhbmQgYHZhcmlhbnQ9XCJ0ZXh0XCJgLiAqL1xuICAgIHRleHRTaXplU21hbGw6IHtcbiAgICAgIHBhZGRpbmc6ICc0cHggNXB4JyxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTMpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNpemU9XCJsYXJnZVwiYCBhbmQgYHZhcmlhbnQ9XCJ0ZXh0XCJgLiAqL1xuICAgIHRleHRTaXplTGFyZ2U6IHtcbiAgICAgIHBhZGRpbmc6ICc4cHggMTFweCcsXG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDE1KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzaXplPVwic21hbGxcImAgYW5kIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgb3V0bGluZWRTaXplU21hbGw6IHtcbiAgICAgIHBhZGRpbmc6ICczcHggOXB4JyxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTMpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNpemU9XCJsYXJnZVwiYCBhbmQgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBvdXRsaW5lZFNpemVMYXJnZToge1xuICAgICAgcGFkZGluZzogJzdweCAyMXB4JyxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTUpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNpemU9XCJzbWFsbFwiYCBhbmQgYHZhcmlhbnQ9XCJjb250YWluZWRcImAuICovXG4gICAgY29udGFpbmVkU2l6ZVNtYWxsOiB7XG4gICAgICBwYWRkaW5nOiAnNHB4IDEwcHgnLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMylcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2l6ZT1cImxhcmdlXCJgIGFuZCBgdmFyaWFudD1cImNvbnRhaW5lZFwiYC4gKi9cbiAgICBjb250YWluZWRTaXplTGFyZ2U6IHtcbiAgICAgIHBhZGRpbmc6ICc4cHggMjJweCcsXG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDE1KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzaXplPVwic21hbGxcImAuICovXG4gICAgc2l6ZVNtYWxsOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNpemU9XCJsYXJnZVwiYC4gKi9cbiAgICBzaXplTGFyZ2U6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gICAgZnVsbFdpZHRoOiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzdGFydEljb24gZWxlbWVudCBpZiBzdXBwbGllZC4gKi9cbiAgICBzdGFydEljb246IHtcbiAgICAgIGRpc3BsYXk6ICdpbmhlcml0JyxcbiAgICAgIG1hcmdpblJpZ2h0OiA4LFxuICAgICAgbWFyZ2luTGVmdDogLTQsXG4gICAgICAnJiRpY29uU2l6ZVNtYWxsJzoge1xuICAgICAgICBtYXJnaW5MZWZ0OiAtMlxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgZW5kSWNvbiBlbGVtZW50IGlmIHN1cHBsaWVkLiAqL1xuICAgIGVuZEljb246IHtcbiAgICAgIGRpc3BsYXk6ICdpbmhlcml0JyxcbiAgICAgIG1hcmdpblJpZ2h0OiAtNCxcbiAgICAgIG1hcmdpbkxlZnQ6IDgsXG4gICAgICAnJiRpY29uU2l6ZVNtYWxsJzoge1xuICAgICAgICBtYXJnaW5SaWdodDogLTJcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gZWxlbWVudCBpZiBzdXBwbGllZCBhbmQgYHNpemU9XCJzbWFsbFwiYC4gKi9cbiAgICBpY29uU2l6ZVNtYWxsOiB7XG4gICAgICAnJiA+ICo6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgIGZvbnRTaXplOiAxOFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiBlbGVtZW50IGlmIHN1cHBsaWVkIGFuZCBgc2l6ZT1cIm1lZGl1bVwiYC4gKi9cbiAgICBpY29uU2l6ZU1lZGl1bToge1xuICAgICAgJyYgPiAqOmZpcnN0LWNoaWxkJzoge1xuICAgICAgICBmb250U2l6ZTogMjBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gZWxlbWVudCBpZiBzdXBwbGllZCBhbmQgYHNpemU9XCJsYXJnZVwiYC4gKi9cbiAgICBpY29uU2l6ZUxhcmdlOiB7XG4gICAgICAnJiA+ICo6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgIGZvbnRTaXplOiAyMlxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG52YXIgQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQnV0dG9uKHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgY29sb3IgPSBfcHJvcHMkY29sb3IgPT09IHZvaWQgMCA/ICdkZWZhdWx0JyA6IF9wcm9wcyRjb2xvcixcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBjb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnYnV0dG9uJyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkID0gX3Byb3BzJGRpc2FibGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlRWxldmF0aSA9IHByb3BzLmRpc2FibGVFbGV2YXRpb24sXG4gICAgICBkaXNhYmxlRWxldmF0aW9uID0gX3Byb3BzJGRpc2FibGVFbGV2YXRpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlRWxldmF0aSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlRm9jdXNSaSA9IHByb3BzLmRpc2FibGVGb2N1c1JpcHBsZSxcbiAgICAgIGRpc2FibGVGb2N1c1JpcHBsZSA9IF9wcm9wcyRkaXNhYmxlRm9jdXNSaSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUZvY3VzUmksXG4gICAgICBlbmRJY29uUHJvcCA9IHByb3BzLmVuZEljb24sXG4gICAgICBmb2N1c1Zpc2libGVDbGFzc05hbWUgPSBwcm9wcy5mb2N1c1Zpc2libGVDbGFzc05hbWUsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgX3Byb3BzJHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgc2l6ZSA9IF9wcm9wcyRzaXplID09PSB2b2lkIDAgPyAnbWVkaXVtJyA6IF9wcm9wcyRzaXplLFxuICAgICAgc3RhcnRJY29uUHJvcCA9IHByb3BzLnN0YXJ0SWNvbixcbiAgICAgIF9wcm9wcyR0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIHR5cGUgPSBfcHJvcHMkdHlwZSA9PT0gdm9pZCAwID8gJ2J1dHRvbicgOiBfcHJvcHMkdHlwZSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3RleHQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNhYmxlZFwiLCBcImRpc2FibGVFbGV2YXRpb25cIiwgXCJkaXNhYmxlRm9jdXNSaXBwbGVcIiwgXCJlbmRJY29uXCIsIFwiZm9jdXNWaXNpYmxlQ2xhc3NOYW1lXCIsIFwiZnVsbFdpZHRoXCIsIFwic2l6ZVwiLCBcInN0YXJ0SWNvblwiLCBcInR5cGVcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgc3RhcnRJY29uID0gc3RhcnRJY29uUHJvcCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnN0YXJ0SWNvbiwgY2xhc3Nlc1tcImljb25TaXplXCIuY29uY2F0KGNhcGl0YWxpemUoc2l6ZSkpXSlcbiAgfSwgc3RhcnRJY29uUHJvcCk7XG4gIHZhciBlbmRJY29uID0gZW5kSWNvblByb3AgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5lbmRJY29uLCBjbGFzc2VzW1wiaWNvblNpemVcIi5jb25jYXQoY2FwaXRhbGl6ZShzaXplKSldKVxuICB9LCBlbmRJY29uUHJvcCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25CYXNlLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlc1t2YXJpYW50XSwgY2xhc3NOYW1lLCBjb2xvciA9PT0gJ2luaGVyaXQnID8gY2xhc3Nlcy5jb2xvckluaGVyaXQgOiBjb2xvciAhPT0gJ2RlZmF1bHQnICYmIGNsYXNzZXNbXCJcIi5jb25jYXQodmFyaWFudCkuY29uY2F0KGNhcGl0YWxpemUoY29sb3IpKV0sIHNpemUgIT09ICdtZWRpdW0nICYmIFtjbGFzc2VzW1wiXCIuY29uY2F0KHZhcmlhbnQsIFwiU2l6ZVwiKS5jb25jYXQoY2FwaXRhbGl6ZShzaXplKSldLCBjbGFzc2VzW1wic2l6ZVwiLmNvbmNhdChjYXBpdGFsaXplKHNpemUpKV1dLCBkaXNhYmxlRWxldmF0aW9uICYmIGNsYXNzZXMuZGlzYWJsZUVsZXZhdGlvbiwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCwgZnVsbFdpZHRoICYmIGNsYXNzZXMuZnVsbFdpZHRoKSxcbiAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgZm9jdXNSaXBwbGU6ICFkaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuZm9jdXNWaXNpYmxlLCBmb2N1c1Zpc2libGVDbGFzc05hbWUpLFxuICAgIHJlZjogcmVmLFxuICAgIHR5cGU6IHR5cGVcbiAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5sYWJlbFxuICB9LCBzdGFydEljb24sIGNoaWxkcmVuLCBlbmRJY29uKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIG5vIGVsZXZhdGlvbiBpcyB1c2VkLlxuICAgKi9cbiAgZGlzYWJsZUVsZXZhdGlvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlICBrZXlib2FyZCBmb2N1cyByaXBwbGUgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVGb2N1c1JpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICpcbiAgICog4pqg77iPIFdpdGhvdXQgYSByaXBwbGUgdGhlcmUgaXMgbm8gc3R5bGluZyBmb3IgOmZvY3VzLXZpc2libGUgYnkgZGVmYXVsdC4gQmUgc3VyZVxuICAgKiB0byBoaWdobGlnaHQgdGhlIGVsZW1lbnQgYnkgYXBwbHlpbmcgc2VwYXJhdGUgc3R5bGVzIHdpdGggdGhlIGBmb2N1c1Zpc2libGVDbGFzc05hbWVgLlxuICAgKi9cbiAgZGlzYWJsZVJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVsZW1lbnQgcGxhY2VkIGFmdGVyIHRoZSBjaGlsZHJlbi5cbiAgICovXG4gIGVuZEljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBmb2N1c1Zpc2libGVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICogSWYgZGVmaW5lZCwgYW4gYGFgIGVsZW1lbnQgd2lsbCBiZSB1c2VkIGFzIHRoZSByb290IG5vZGUuXG4gICAqL1xuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgYnV0dG9uLlxuICAgKiBgc21hbGxgIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGRlbnNlIGJ1dHRvbiBzdHlsaW5nLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnbGFyZ2UnLCAnbWVkaXVtJywgJ3NtYWxsJ10pLFxuXG4gIC8qKlxuICAgKiBFbGVtZW50IHBsYWNlZCBiZWZvcmUgdGhlIGNoaWxkcmVuLlxuICAgKi9cbiAgc3RhcnRJY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYnV0dG9uJywgJ3Jlc2V0JywgJ3N1Ym1pdCddKSwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydjb250YWluZWQnLCAnb3V0bGluZWQnLCAndGV4dCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlCdXR0b24nXG59KShCdXR0b24pOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0J1dHRvbic7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGVsZXZhdGlvbnMgPSB7fTtcbiAgdGhlbWUuc2hhZG93cy5mb3JFYWNoKGZ1bmN0aW9uIChzaGFkb3csIGluZGV4KSB7XG4gICAgZWxldmF0aW9uc1tcImVsZXZhdGlvblwiLmNvbmNhdChpbmRleCldID0ge1xuICAgICAgYm94U2hhZG93OiBzaGFkb3dcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdib3gtc2hhZG93JylcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc3F1YXJlPXtmYWxzZX1gLiAqL1xuICAgIHJvdW5kZWQ6IHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBvdXRsaW5lZDoge1xuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5kaXZpZGVyKVxuICAgIH1cbiAgfSwgZWxldmF0aW9ucyk7XG59O1xudmFyIFBhcGVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gUGFwZXIocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJHNxdWFyZSA9IHByb3BzLnNxdWFyZSxcbiAgICAgIHNxdWFyZSA9IF9wcm9wcyRzcXVhcmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHNxdWFyZSxcbiAgICAgIF9wcm9wcyRlbGV2YXRpb24gPSBwcm9wcy5lbGV2YXRpb24sXG4gICAgICBlbGV2YXRpb24gPSBfcHJvcHMkZWxldmF0aW9uID09PSB2b2lkIDAgPyAxIDogX3Byb3BzJGVsZXZhdGlvbixcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ2VsZXZhdGlvbicgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwic3F1YXJlXCIsIFwiZWxldmF0aW9uXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgdmFyaWFudCA9PT0gJ291dGxpbmVkJyA/IGNsYXNzZXMub3V0bGluZWQgOiBjbGFzc2VzW1wiZWxldmF0aW9uXCIuY29uY2F0KGVsZXZhdGlvbildLCAhc3F1YXJlICYmIGNsYXNzZXMucm91bmRlZCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUGFwZXIucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBTaGFkb3cgZGVwdGgsIGNvcnJlc3BvbmRzIHRvIGBkcGAgaW4gdGhlIHNwZWMuXG4gICAqIEl0IGFjY2VwdHMgdmFsdWVzIGJldHdlZW4gMCBhbmQgMjQgaW5jbHVzaXZlLlxuICAgKi9cbiAgZWxldmF0aW9uOiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMubnVtYmVyLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICAgIGVsZXZhdGlvbiA9IHByb3BzLmVsZXZhdGlvbjsgLy8gaW4gY2FzZSBgd2l0aFN0eWxlc2AgZmFpbHMgdG8gaW5qZWN0IHdlIGRvbid0IG5lZWQgdGhpcyB3YXJuaW5nXG5cbiAgICBpZiAoY2xhc3NlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZWxldmF0aW9uICE9IG51bGwgJiYgY2xhc3Nlc1tcImVsZXZhdGlvblwiLmNvbmNhdChlbGV2YXRpb24pXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoaXMgZWxldmF0aW9uIGBcIi5jb25jYXQoZWxldmF0aW9uLCBcImAgaXMgbm90IGltcGxlbWVudGVkLlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHJvdW5kZWQgY29ybmVycyBhcmUgZGlzYWJsZWQuXG4gICAqL1xuICBzcXVhcmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydlbGV2YXRpb24nLCAnb3V0bGluZWQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUGFwZXInXG59KShQYXBlcik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUGFwZXInOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlR3V0dGVycz17ZmFsc2V9YC4gKi9cbiAgICBndXR0ZXJzOiBfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMilcbiAgICB9LCB0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSwge1xuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMylcbiAgICB9KSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJyZWd1bGFyXCJgLiAqL1xuICAgIHJlZ3VsYXI6IHRoZW1lLm1peGlucy50b29sYmFyLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImRlbnNlXCJgLiAqL1xuICAgIGRlbnNlOiB7XG4gICAgICBtaW5IZWlnaHQ6IDQ4XG4gICAgfVxuICB9O1xufTtcbnZhciBUb29sYmFyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVG9vbGJhcihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnZGl2JyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkZGlzYWJsZUd1dHRlcnMgPSBwcm9wcy5kaXNhYmxlR3V0dGVycyxcbiAgICAgIGRpc2FibGVHdXR0ZXJzID0gX3Byb3BzJGRpc2FibGVHdXR0ZXJzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlR3V0dGVycyxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3JlZ3VsYXInIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcImRpc2FibGVHdXR0ZXJzXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbdmFyaWFudF0sIGNsYXNzTmFtZSwgIWRpc2FibGVHdXR0ZXJzICYmIGNsYXNzZXMuZ3V0dGVycyksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVG9vbGJhci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUb29sYmFyIGNoaWxkcmVuLCB1c3VhbGx5IGEgbWl4dHVyZSBvZiBgSWNvbkJ1dHRvbmAsIGBCdXR0b25gIGFuZCBgVHlwb2dyYXBoeWAuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGRpc2FibGVzIGd1dHRlciBwYWRkaW5nLlxuICAgKi9cbiAgZGlzYWJsZUd1dHRlcnM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydyZWd1bGFyJywgJ2RlbnNlJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVRvb2xiYXInXG59KShUb29sYmFyKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Ub29sYmFyJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBtYXJnaW46IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImJvZHkyXCJgLiAqL1xuICAgIGJvZHkyOiB0aGVtZS50eXBvZ3JhcGh5LmJvZHkyLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImJvZHkxXCJgLiAqL1xuICAgIGJvZHkxOiB0aGVtZS50eXBvZ3JhcGh5LmJvZHkxLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImNhcHRpb25cImAuICovXG4gICAgY2FwdGlvbjogdGhlbWUudHlwb2dyYXBoeS5jYXB0aW9uLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImJ1dHRvblwiYC4gKi9cbiAgICBidXR0b246IHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImgxXCJgLiAqL1xuICAgIGgxOiB0aGVtZS50eXBvZ3JhcGh5LmgxLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImgyXCJgLiAqL1xuICAgIGgyOiB0aGVtZS50eXBvZ3JhcGh5LmgyLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImgzXCJgLiAqL1xuICAgIGgzOiB0aGVtZS50eXBvZ3JhcGh5LmgzLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImg0XCJgLiAqL1xuICAgIGg0OiB0aGVtZS50eXBvZ3JhcGh5Lmg0LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImg1XCJgLiAqL1xuICAgIGg1OiB0aGVtZS50eXBvZ3JhcGh5Lmg1LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImg2XCJgLiAqL1xuICAgIGg2OiB0aGVtZS50eXBvZ3JhcGh5Lmg2LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInN1YnRpdGxlMVwiYC4gKi9cbiAgICBzdWJ0aXRsZTE6IHRoZW1lLnR5cG9ncmFwaHkuc3VidGl0bGUxLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInN1YnRpdGxlMlwiYC4gKi9cbiAgICBzdWJ0aXRsZTI6IHRoZW1lLnR5cG9ncmFwaHkuc3VidGl0bGUyLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm92ZXJsaW5lXCJgLiAqL1xuICAgIG92ZXJsaW5lOiB0aGVtZS50eXBvZ3JhcGh5Lm92ZXJsaW5lLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInNyT25seVwiYC4gT25seSBhY2Nlc3NpYmxlIHRvIHNjcmVlbiByZWFkZXJzLiAqL1xuICAgIHNyT25seToge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImxlZnRcImAuICovXG4gICAgYWxpZ25MZWZ0OiB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImNlbnRlclwiYC4gKi9cbiAgICBhbGlnbkNlbnRlcjoge1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cInJpZ2h0XCJgLiAqL1xuICAgIGFsaWduUmlnaHQ6IHtcbiAgICAgIHRleHRBbGlnbjogJ3JpZ2h0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImp1c3RpZnlcImAuICovXG4gICAgYWxpZ25KdXN0aWZ5OiB7XG4gICAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBub3dyYXA9e3RydWV9YC4gKi9cbiAgICBub1dyYXA6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGd1dHRlckJvdHRvbT17dHJ1ZX1gLiAqL1xuICAgIGd1dHRlckJvdHRvbToge1xuICAgICAgbWFyZ2luQm90dG9tOiAnMC4zNWVtJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBwYXJhZ3JhcGg9e3RydWV9YC4gKi9cbiAgICBwYXJhZ3JhcGg6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMTZcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJpbmhlcml0XCJgLiAqL1xuICAgIGNvbG9ySW5oZXJpdDoge1xuICAgICAgY29sb3I6ICdpbmhlcml0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwidGV4dFByaW1hcnlcImAuICovXG4gICAgY29sb3JUZXh0UHJpbWFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwidGV4dFNlY29uZGFyeVwiYC4gKi9cbiAgICBjb2xvclRleHRTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiZXJyb3JcImAuICovXG4gICAgY29sb3JFcnJvcjoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNwbGF5PVwiaW5saW5lXCJgLiAqL1xuICAgIGRpc3BsYXlJbmxpbmU6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc3BsYXk9XCJibG9ja1wiYC4gKi9cbiAgICBkaXNwbGF5QmxvY2s6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9XG4gIH07XG59O1xudmFyIGRlZmF1bHRWYXJpYW50TWFwcGluZyA9IHtcbiAgaDE6ICdoMScsXG4gIGgyOiAnaDInLFxuICBoMzogJ2gzJyxcbiAgaDQ6ICdoNCcsXG4gIGg1OiAnaDUnLFxuICBoNjogJ2g2JyxcbiAgc3VidGl0bGUxOiAnaDYnLFxuICBzdWJ0aXRsZTI6ICdoNicsXG4gIGJvZHkxOiAncCcsXG4gIGJvZHkyOiAncCdcbn07XG52YXIgVHlwb2dyYXBoeSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFR5cG9ncmFwaHkocHJvcHMsIHJlZikge1xuICB2YXIgX3Byb3BzJGFsaWduID0gcHJvcHMuYWxpZ24sXG4gICAgICBhbGlnbiA9IF9wcm9wcyRhbGlnbiA9PT0gdm9pZCAwID8gJ2luaGVyaXQnIDogX3Byb3BzJGFsaWduLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAnaW5pdGlhbCcgOiBfcHJvcHMkY29sb3IsXG4gICAgICBjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBfcHJvcHMkZGlzcGxheSA9IHByb3BzLmRpc3BsYXksXG4gICAgICBkaXNwbGF5ID0gX3Byb3BzJGRpc3BsYXkgPT09IHZvaWQgMCA/ICdpbml0aWFsJyA6IF9wcm9wcyRkaXNwbGF5LFxuICAgICAgX3Byb3BzJGd1dHRlckJvdHRvbSA9IHByb3BzLmd1dHRlckJvdHRvbSxcbiAgICAgIGd1dHRlckJvdHRvbSA9IF9wcm9wcyRndXR0ZXJCb3R0b20gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGd1dHRlckJvdHRvbSxcbiAgICAgIF9wcm9wcyRub1dyYXAgPSBwcm9wcy5ub1dyYXAsXG4gICAgICBub1dyYXAgPSBfcHJvcHMkbm9XcmFwID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRub1dyYXAsXG4gICAgICBfcHJvcHMkcGFyYWdyYXBoID0gcHJvcHMucGFyYWdyYXBoLFxuICAgICAgcGFyYWdyYXBoID0gX3Byb3BzJHBhcmFncmFwaCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkcGFyYWdyYXBoLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnYm9keTEnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBfcHJvcHMkdmFyaWFudE1hcHBpbmcgPSBwcm9wcy52YXJpYW50TWFwcGluZyxcbiAgICAgIHZhcmlhbnRNYXBwaW5nID0gX3Byb3BzJHZhcmlhbnRNYXBwaW5nID09PSB2b2lkIDAgPyBkZWZhdWx0VmFyaWFudE1hcHBpbmcgOiBfcHJvcHMkdmFyaWFudE1hcHBpbmcsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWxpZ25cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNwbGF5XCIsIFwiZ3V0dGVyQm90dG9tXCIsIFwibm9XcmFwXCIsIFwicGFyYWdyYXBoXCIsIFwidmFyaWFudFwiLCBcInZhcmlhbnRNYXBwaW5nXCJdKTtcblxuICB2YXIgQ29tcG9uZW50ID0gY29tcG9uZW50IHx8IChwYXJhZ3JhcGggPyAncCcgOiB2YXJpYW50TWFwcGluZ1t2YXJpYW50XSB8fCBkZWZhdWx0VmFyaWFudE1hcHBpbmdbdmFyaWFudF0pIHx8ICdzcGFuJztcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgdmFyaWFudCAhPT0gJ2luaGVyaXQnICYmIGNsYXNzZXNbdmFyaWFudF0sIGNvbG9yICE9PSAnaW5pdGlhbCcgJiYgY2xhc3Nlc1tcImNvbG9yXCIuY29uY2F0KGNhcGl0YWxpemUoY29sb3IpKV0sIG5vV3JhcCAmJiBjbGFzc2VzLm5vV3JhcCwgZ3V0dGVyQm90dG9tICYmIGNsYXNzZXMuZ3V0dGVyQm90dG9tLCBwYXJhZ3JhcGggJiYgY2xhc3Nlcy5wYXJhZ3JhcGgsIGFsaWduICE9PSAnaW5oZXJpdCcgJiYgY2xhc3Nlc1tcImFsaWduXCIuY29uY2F0KGNhcGl0YWxpemUoYWxpZ24pKV0sIGRpc3BsYXkgIT09ICdpbml0aWFsJyAmJiBjbGFzc2VzW1wiZGlzcGxheVwiLmNvbmNhdChjYXBpdGFsaXplKGRpc3BsYXkpKV0pLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFR5cG9ncmFwaHkucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogU2V0IHRoZSB0ZXh0LWFsaWduIG9uIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnaW5oZXJpdCcsICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCcsICdqdXN0aWZ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnaW5pdGlhbCcsICdpbmhlcml0JywgJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ3RleHRQcmltYXJ5JywgJ3RleHRTZWNvbmRhcnknLCAnZXJyb3InXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICogT3ZlcnJpZGVzIHRoZSBiZWhhdmlvciBvZiB0aGUgYHZhcmlhbnRNYXBwaW5nYCBwcm9wLlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSBkaXNwbGF5IHR5cGVcbiAgICovXG4gIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZihbJ2luaXRpYWwnLCAnYmxvY2snLCAnaW5saW5lJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0ZXh0IHdpbGwgaGF2ZSBhIGJvdHRvbSBtYXJnaW4uXG4gICAqL1xuICBndXR0ZXJCb3R0b206IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0ZXh0IHdpbGwgbm90IHdyYXAsIGJ1dCBpbnN0ZWFkIHdpbGwgdHJ1bmNhdGUgd2l0aCBhIHRleHQgb3ZlcmZsb3cgZWxsaXBzaXMuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0ZXh0IG92ZXJmbG93IGNhbiBvbmx5IGhhcHBlbiB3aXRoIGJsb2NrIG9yIGlubGluZS1ibG9jayBsZXZlbCBlbGVtZW50c1xuICAgKiAodGhlIGVsZW1lbnQgbmVlZHMgdG8gaGF2ZSBhIHdpZHRoIGluIG9yZGVyIHRvIG92ZXJmbG93KS5cbiAgICovXG4gIG5vV3JhcDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRleHQgd2lsbCBoYXZlIGEgYm90dG9tIG1hcmdpbi5cbiAgICovXG4gIHBhcmFncmFwaDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIHRoZW1lIHR5cG9ncmFwaHkgc3R5bGVzLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnc3VidGl0bGUxJywgJ3N1YnRpdGxlMicsICdib2R5MScsICdib2R5MicsICdjYXB0aW9uJywgJ2J1dHRvbicsICdvdmVybGluZScsICdzck9ubHknLCAnaW5oZXJpdCddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCBtYXBzIHRoZSB2YXJpYW50IHByb3AgdG8gYSByYW5nZSBvZiBkaWZmZXJlbnQgSFRNTCBlbGVtZW50IHR5cGVzLlxuICAgKiBGb3IgaW5zdGFuY2UsIHN1YnRpdGxlMSB0byBgPGg2PmAuXG4gICAqIElmIHlvdSB3aXNoIHRvIGNoYW5nZSB0aGF0IG1hcHBpbmcsIHlvdSBjYW4gcHJvdmlkZSB5b3VyIG93bi5cbiAgICogQWx0ZXJuYXRpdmVseSwgeW91IGNhbiB1c2UgdGhlIGBjb21wb25lbnRgIHByb3AuXG4gICAqL1xuICB2YXJpYW50TWFwcGluZzogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUeXBvZ3JhcGh5J1xufSkoVHlwb2dyYXBoeSk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVHlwb2dyYXBoeSc7IiwidmFyIGJsdWUgPSB7XG4gIDUwOiAnI2UzZjJmZCcsXG4gIDEwMDogJyNiYmRlZmInLFxuICAyMDA6ICcjOTBjYWY5JyxcbiAgMzAwOiAnIzY0YjVmNicsXG4gIDQwMDogJyM0MmE1ZjUnLFxuICA1MDA6ICcjMjE5NmYzJyxcbiAgNjAwOiAnIzFlODhlNScsXG4gIDcwMDogJyMxOTc2ZDInLFxuICA4MDA6ICcjMTU2NWMwJyxcbiAgOTAwOiAnIzBkNDdhMScsXG4gIEExMDA6ICcjODJiMWZmJyxcbiAgQTIwMDogJyM0NDhhZmYnLFxuICBBNDAwOiAnIzI5NzlmZicsXG4gIEE3MDA6ICcjMjk2MmZmJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGJsdWU7IiwidmFyIGNvbW1vbiA9IHtcbiAgYmxhY2s6ICcjMDAwJyxcbiAgd2hpdGU6ICcjZmZmJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbW1vbjsiLCJ2YXIgZ3JlZW4gPSB7XG4gIDUwOiAnI2U4ZjVlOScsXG4gIDEwMDogJyNjOGU2YzknLFxuICAyMDA6ICcjYTVkNmE3JyxcbiAgMzAwOiAnIzgxYzc4NCcsXG4gIDQwMDogJyM2NmJiNmEnLFxuICA1MDA6ICcjNGNhZjUwJyxcbiAgNjAwOiAnIzQzYTA0NycsXG4gIDcwMDogJyMzODhlM2MnLFxuICA4MDA6ICcjMmU3ZDMyJyxcbiAgOTAwOiAnIzFiNWUyMCcsXG4gIEExMDA6ICcjYjlmNmNhJyxcbiAgQTIwMDogJyM2OWYwYWUnLFxuICBBNDAwOiAnIzAwZTY3NicsXG4gIEE3MDA6ICcjMDBjODUzJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGdyZWVuOyIsInZhciBncmV5ID0ge1xuICA1MDogJyNmYWZhZmEnLFxuICAxMDA6ICcjZjVmNWY1JyxcbiAgMjAwOiAnI2VlZWVlZScsXG4gIDMwMDogJyNlMGUwZTAnLFxuICA0MDA6ICcjYmRiZGJkJyxcbiAgNTAwOiAnIzllOWU5ZScsXG4gIDYwMDogJyM3NTc1NzUnLFxuICA3MDA6ICcjNjE2MTYxJyxcbiAgODAwOiAnIzQyNDI0MicsXG4gIDkwMDogJyMyMTIxMjEnLFxuICBBMTAwOiAnI2Q1ZDVkNScsXG4gIEEyMDA6ICcjYWFhYWFhJyxcbiAgQTQwMDogJyMzMDMwMzAnLFxuICBBNzAwOiAnIzYxNjE2MSdcbn07XG5leHBvcnQgZGVmYXVsdCBncmV5OyIsInZhciBpbmRpZ28gPSB7XG4gIDUwOiAnI2U4ZWFmNicsXG4gIDEwMDogJyNjNWNhZTknLFxuICAyMDA6ICcjOWZhOGRhJyxcbiAgMzAwOiAnIzc5ODZjYicsXG4gIDQwMDogJyM1YzZiYzAnLFxuICA1MDA6ICcjM2Y1MWI1JyxcbiAgNjAwOiAnIzM5NDlhYicsXG4gIDcwMDogJyMzMDNmOWYnLFxuICA4MDA6ICcjMjgzNTkzJyxcbiAgOTAwOiAnIzFhMjM3ZScsXG4gIEExMDA6ICcjOGM5ZWZmJyxcbiAgQTIwMDogJyM1MzZkZmUnLFxuICBBNDAwOiAnIzNkNWFmZScsXG4gIEE3MDA6ICcjMzA0ZmZlJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGluZGlnbzsiLCJ2YXIgb3JhbmdlID0ge1xuICA1MDogJyNmZmYzZTAnLFxuICAxMDA6ICcjZmZlMGIyJyxcbiAgMjAwOiAnI2ZmY2M4MCcsXG4gIDMwMDogJyNmZmI3NGQnLFxuICA0MDA6ICcjZmZhNzI2JyxcbiAgNTAwOiAnI2ZmOTgwMCcsXG4gIDYwMDogJyNmYjhjMDAnLFxuICA3MDA6ICcjZjU3YzAwJyxcbiAgODAwOiAnI2VmNmMwMCcsXG4gIDkwMDogJyNlNjUxMDAnLFxuICBBMTAwOiAnI2ZmZDE4MCcsXG4gIEEyMDA6ICcjZmZhYjQwJyxcbiAgQTQwMDogJyNmZjkxMDAnLFxuICBBNzAwOiAnI2ZmNmQwMCdcbn07XG5leHBvcnQgZGVmYXVsdCBvcmFuZ2U7IiwidmFyIHBpbmsgPSB7XG4gIDUwOiAnI2ZjZTRlYycsXG4gIDEwMDogJyNmOGJiZDAnLFxuICAyMDA6ICcjZjQ4ZmIxJyxcbiAgMzAwOiAnI2YwNjI5MicsXG4gIDQwMDogJyNlYzQwN2EnLFxuICA1MDA6ICcjZTkxZTYzJyxcbiAgNjAwOiAnI2Q4MWI2MCcsXG4gIDcwMDogJyNjMjE4NWInLFxuICA4MDA6ICcjYWQxNDU3JyxcbiAgOTAwOiAnIzg4MGU0ZicsXG4gIEExMDA6ICcjZmY4MGFiJyxcbiAgQTIwMDogJyNmZjQwODEnLFxuICBBNDAwOiAnI2Y1MDA1NycsXG4gIEE3MDA6ICcjYzUxMTYyJ1xufTtcbmV4cG9ydCBkZWZhdWx0IHBpbms7IiwidmFyIHJlZCA9IHtcbiAgNTA6ICcjZmZlYmVlJyxcbiAgMTAwOiAnI2ZmY2RkMicsXG4gIDIwMDogJyNlZjlhOWEnLFxuICAzMDA6ICcjZTU3MzczJyxcbiAgNDAwOiAnI2VmNTM1MCcsXG4gIDUwMDogJyNmNDQzMzYnLFxuICA2MDA6ICcjZTUzOTM1JyxcbiAgNzAwOiAnI2QzMmYyZicsXG4gIDgwMDogJyNjNjI4MjgnLFxuICA5MDA6ICcjYjcxYzFjJyxcbiAgQTEwMDogJyNmZjhhODAnLFxuICBBMjAwOiAnI2ZmNTI1MicsXG4gIEE0MDA6ICcjZmYxNzQ0JyxcbiAgQTcwMDogJyNkNTAwMDAnXG59O1xuZXhwb3J0IGRlZmF1bHQgcmVkOyIsImltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBudW1iZXIgd2hvc2UgdmFsdWUgaXMgbGltaXRlZCB0byB0aGUgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjbGFtcGVkXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBsb3dlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFRoZSB1cHBlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIG51bWJlciBpbiB0aGUgcmFuZ2UgW21pbiwgbWF4XVxuICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSkge1xuICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHZhbHVlIDwgbWluIHx8IHZhbHVlID4gbWF4KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSB2YWx1ZSBwcm92aWRlZCBcIi5jb25jYXQodmFsdWUsIFwiIGlzIG91dCBvZiByYW5nZSBbXCIpLmNvbmNhdChtaW4sIFwiLCBcIikuY29uY2F0KG1heCwgXCJdLlwiKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgdmFsdWUpLCBtYXgpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gQ1NTIGhleCBmb3JtYXQgdG8gQ1NTIHJnYiBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gSGV4IGNvbG9yLCBpLmUuICNubm4gb3IgI25ubm5ublxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgcmdiIGNvbG9yIHN0cmluZ1xuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGNvbG9yKSB7XG4gIGNvbG9yID0gY29sb3Iuc3Vic3RyKDEpO1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiLnsxLFwiLmNvbmNhdChjb2xvci5sZW5ndGggPj0gNiA/IDIgOiAxLCBcIn1cIiksICdnJyk7XG4gIHZhciBjb2xvcnMgPSBjb2xvci5tYXRjaChyZSk7XG5cbiAgaWYgKGNvbG9ycyAmJiBjb2xvcnNbMF0ubGVuZ3RoID09PSAxKSB7XG4gICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIG4gKyBuO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9ycyA/IFwicmdiXCIuY29uY2F0KGNvbG9ycy5sZW5ndGggPT09IDQgPyAnYScgOiAnJywgXCIoXCIpLmNvbmNhdChjb2xvcnMubWFwKGZ1bmN0aW9uIChuLCBpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA8IDMgPyBwYXJzZUludChuLCAxNikgOiBNYXRoLnJvdW5kKHBhcnNlSW50KG4sIDE2KSAvIDI1NSAqIDEwMDApIC8gMTAwMDtcbiAgfSkuam9pbignLCAnKSwgXCIpXCIpIDogJyc7XG59XG5cbmZ1bmN0aW9uIGludFRvSGV4KGludCkge1xuICB2YXIgaGV4ID0gaW50LnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIi5jb25jYXQoaGV4KSA6IGhleDtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIENTUyByZ2IgZm9ybWF0IHRvIENTUyBoZXggZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIFJHQiBjb2xvciwgaS5lLiByZ2IobiwgbiwgbilcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIHJnYiBjb2xvciBzdHJpbmcsIGkuZS4gI25ubm5ublxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KGNvbG9yKSB7XG4gIC8vIElkZW1wb3RlbnRcbiAgaWYgKGNvbG9yLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIHZhciBfZGVjb21wb3NlQ29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvciksXG4gICAgICB2YWx1ZXMgPSBfZGVjb21wb3NlQ29sb3IudmFsdWVzO1xuXG4gIHJldHVybiBcIiNcIi5jb25jYXQodmFsdWVzLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBpbnRUb0hleChuKTtcbiAgfSkuam9pbignJykpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gaHNsIGZvcm1hdCB0byByZ2IgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIEhTTCBjb2xvciB2YWx1ZXNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHJnYiBjb2xvciB2YWx1ZXNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaHNsVG9SZ2IoY29sb3IpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhciBfY29sb3IgPSBjb2xvcixcbiAgICAgIHZhbHVlcyA9IF9jb2xvci52YWx1ZXM7XG4gIHZhciBoID0gdmFsdWVzWzBdO1xuICB2YXIgcyA9IHZhbHVlc1sxXSAvIDEwMDtcbiAgdmFyIGwgPSB2YWx1ZXNbMl0gLyAxMDA7XG4gIHZhciBhID0gcyAqIE1hdGgubWluKGwsIDEgLSBsKTtcblxuICB2YXIgZiA9IGZ1bmN0aW9uIGYobikge1xuICAgIHZhciBrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAobiArIGggLyAzMCkgJSAxMjtcbiAgICByZXR1cm4gbCAtIGEgKiBNYXRoLm1heChNYXRoLm1pbihrIC0gMywgOSAtIGssIDEpLCAtMSk7XG4gIH07XG5cbiAgdmFyIHR5cGUgPSAncmdiJztcbiAgdmFyIHJnYiA9IFtNYXRoLnJvdW5kKGYoMCkgKiAyNTUpLCBNYXRoLnJvdW5kKGYoOCkgKiAyNTUpLCBNYXRoLnJvdW5kKGYoNCkgKiAyNTUpXTtcblxuICBpZiAoY29sb3IudHlwZSA9PT0gJ2hzbGEnKSB7XG4gICAgdHlwZSArPSAnYSc7XG4gICAgcmdiLnB1c2godmFsdWVzWzNdKTtcbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcih7XG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZXM6IHJnYlxuICB9KTtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBhbmQgdmFsdWVzIG9mIGEgY29sb3IuXG4gKlxuICogTm90ZTogRG9lcyBub3Qgc3VwcG9ydCByZ2IgJSB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge29iamVjdH0gLSBBIE1VSSBjb2xvciBvYmplY3Q6IHt0eXBlOiBzdHJpbmcsIHZhbHVlczogbnVtYmVyW119XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29tcG9zZUNvbG9yKGNvbG9yKSB7XG4gIC8vIElkZW1wb3RlbnRcbiAgaWYgKGNvbG9yLnR5cGUpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBpZiAoY29sb3IuY2hhckF0KDApID09PSAnIycpIHtcbiAgICByZXR1cm4gZGVjb21wb3NlQ29sb3IoaGV4VG9SZ2IoY29sb3IpKTtcbiAgfVxuXG4gIHZhciBtYXJrZXIgPSBjb2xvci5pbmRleE9mKCcoJyk7XG4gIHZhciB0eXBlID0gY29sb3Iuc3Vic3RyaW5nKDAsIG1hcmtlcik7XG5cbiAgaWYgKFsncmdiJywgJ3JnYmEnLCAnaHNsJywgJ2hzbGEnXS5pbmRleE9mKHR5cGUpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBVbnN1cHBvcnRlZCBgXCIuY29uY2F0KGNvbG9yLCBcImAgY29sb3IuXFxuV2Ugc3VwcG9ydCB0aGUgZm9sbG93aW5nIGZvcm1hdHM6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKCkuXCIpIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSgzLCBjb2xvcikpO1xuICB9XG5cbiAgdmFyIHZhbHVlcyA9IGNvbG9yLnN1YnN0cmluZyhtYXJrZXIgKyAxLCBjb2xvci5sZW5ndGggLSAxKS5zcGxpdCgnLCcpO1xuICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZXM6IHZhbHVlc1xuICB9O1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIG9iamVjdCB3aXRoIHR5cGUgYW5kIHZhbHVlcyB0byBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29sb3IgLSBEZWNvbXBvc2VkIGNvbG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IudHlwZSAtIE9uZSBvZjogJ3JnYicsICdyZ2JhJywgJ2hzbCcsICdoc2xhJ1xuICogQHBhcmFtIHthcnJheX0gY29sb3IudmFsdWVzIC0gW24sbixuXSBvciBbbixuLG4sbl1cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbXBvc2VDb2xvcihjb2xvcikge1xuICB2YXIgdHlwZSA9IGNvbG9yLnR5cGU7XG4gIHZhciB2YWx1ZXMgPSBjb2xvci52YWx1ZXM7XG5cbiAgaWYgKHR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgLy8gT25seSBjb252ZXJ0IHRoZSBmaXJzdCAzIHZhbHVlcyB0byBpbnQgKGkuZS4gbm90IGFscGhhKVxuICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgIHJldHVybiBpIDwgMyA/IHBhcnNlSW50KG4sIDEwKSA6IG47XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICB2YWx1ZXNbMV0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMV0sIFwiJVwiKTtcbiAgICB2YWx1ZXNbMl0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMl0sIFwiJVwiKTtcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdCh0eXBlLCBcIihcIikuY29uY2F0KHZhbHVlcy5qb2luKCcsICcpLCBcIilcIik7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbnRyYXN0IHJhdGlvIGJldHdlZW4gdHdvIGNvbG9ycy5cbiAqXG4gKiBGb3JtdWxhOiBodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLVRFQ0hTL0cxNy5odG1sI0cxNy10ZXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JlZ3JvdW5kIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtzdHJpbmd9IGJhY2tncm91bmQgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIGNvbnRyYXN0IHJhdGlvIHZhbHVlIGluIHRoZSByYW5nZSAwIC0gMjEuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYXN0UmF0aW8oZm9yZWdyb3VuZCwgYmFja2dyb3VuZCkge1xuICB2YXIgbHVtQSA9IGdldEx1bWluYW5jZShmb3JlZ3JvdW5kKTtcbiAgdmFyIGx1bUIgPSBnZXRMdW1pbmFuY2UoYmFja2dyb3VuZCk7XG4gIHJldHVybiAoTWF0aC5tYXgobHVtQSwgbHVtQikgKyAwLjA1KSAvIChNYXRoLm1pbihsdW1BLCBsdW1CKSArIDAuMDUpO1xufVxuLyoqXG4gKiBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiBhbnkgcG9pbnQgaW4gYSBjb2xvciBzcGFjZSxcbiAqIG5vcm1hbGl6ZWQgdG8gMCBmb3IgZGFya2VzdCBibGFjayBhbmQgMSBmb3IgbGlnaHRlc3Qgd2hpdGUuXG4gKlxuICogRm9ybXVsYTogaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC1URUNIUy9HMTcuaHRtbCNHMTctdGVzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiB0aGUgY29sb3IgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEx1bWluYW5jZShjb2xvcikge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFyIHJnYiA9IGNvbG9yLnR5cGUgPT09ICdoc2wnID8gZGVjb21wb3NlQ29sb3IoaHNsVG9SZ2IoY29sb3IpKS52YWx1ZXMgOiBjb2xvci52YWx1ZXM7XG4gIHJnYiA9IHJnYi5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgIHZhbCAvPSAyNTU7IC8vIG5vcm1hbGl6ZWRcblxuICAgIHJldHVybiB2YWwgPD0gMC4wMzkyOCA/IHZhbCAvIDEyLjkyIDogTWF0aC5wb3coKHZhbCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICB9KTsgLy8gVHJ1bmNhdGUgYXQgMyBkaWdpdHNcblxuICByZXR1cm4gTnVtYmVyKCgwLjIxMjYgKiByZ2JbMF0gKyAwLjcxNTIgKiByZ2JbMV0gKyAwLjA3MjIgKiByZ2JbMl0pLnRvRml4ZWQoMykpO1xufVxuLyoqXG4gKiBEYXJrZW4gb3IgbGlnaHRlbiBhIGNvbG9yLCBkZXBlbmRpbmcgb24gaXRzIGx1bWluYW5jZS5cbiAqIExpZ2h0IGNvbG9ycyBhcmUgZGFya2VuZWQsIGRhcmsgY29sb3JzIGFyZSBsaWdodGVuZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50PTAuMTUgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1waGFzaXplKGNvbG9yKSB7XG4gIHZhciBjb2VmZmljaWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMC4xNTtcbiAgcmV0dXJuIGdldEx1bWluYW5jZShjb2xvcikgPiAwLjUgPyBkYXJrZW4oY29sb3IsIGNvZWZmaWNpZW50KSA6IGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KTtcbn1cbnZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG4vKipcbiAqIFNldCB0aGUgYWJzb2x1dGUgdHJhbnNwYXJlbmN5IG9mIGEgY29sb3IuXG4gKiBBbnkgZXhpc3RpbmcgYWxwaGEgdmFsdWVzIGFyZSBvdmVyd3JpdHRlbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSB2YWx1ZSB0byBzZXQgdGhlIGFscGhhIGNoYW5uZWwgdG8gaW4gdGhlIHJhbmdlIDAgLTFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqIFVzZSBgaW1wb3J0IHsgYWxwaGEgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnYCBpbnN0ZWFkLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmYWRlKGNvbG9yLCB2YWx1ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghd2FybmVkT25jZSkge1xuICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBgZmFkZWAgY29sb3IgdXRpbGl0eSB3YXMgcmVuYW1lZCB0byBgYWxwaGFgIHRvIGJldHRlciBkZXNjcmliZSBpdHMgZnVuY3Rpb25hbGl0eS4nLCAnJywgXCJZb3Ugc2hvdWxkIHVzZSBgaW1wb3J0IHsgYWxwaGEgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnYFwiXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFscGhhKGNvbG9yLCB2YWx1ZSk7XG59XG4vKipcbiAqIFNldCB0aGUgYWJzb2x1dGUgdHJhbnNwYXJlbmN5IG9mIGEgY29sb3IuXG4gKiBBbnkgZXhpc3RpbmcgYWxwaGEgdmFsdWUgaXMgb3ZlcndyaXR0ZW4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gdmFsdWUgdG8gc2V0IHRoZSBhbHBoYSBjaGFubmVsIHRvIGluIHRoZSByYW5nZSAwLTFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFscGhhKGNvbG9yLCB2YWx1ZSkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFsdWUgPSBjbGFtcCh2YWx1ZSk7XG5cbiAgaWYgKGNvbG9yLnR5cGUgPT09ICdyZ2InIHx8IGNvbG9yLnR5cGUgPT09ICdoc2wnKSB7XG4gICAgY29sb3IudHlwZSArPSAnYSc7XG4gIH1cblxuICBjb2xvci52YWx1ZXNbM10gPSB2YWx1ZTtcbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKGNvbG9yKTtcbn1cbi8qKlxuICogRGFya2VucyBhIGNvbG9yLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2VmZmljaWVudCAtIG11bHRpcGxpZXIgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkYXJrZW4oY29sb3IsIGNvZWZmaWNpZW50KSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICBjb2VmZmljaWVudCA9IGNsYW1wKGNvZWZmaWNpZW50KTtcblxuICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICBjb2xvci52YWx1ZXNbMl0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICB9IGVsc2UgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGNvbG9yLnZhbHVlc1tpXSAqPSAxIC0gY29lZmZpY2llbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKGNvbG9yKTtcbn1cbi8qKlxuICogTGlnaHRlbnMgYSBjb2xvci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGlnaHRlbihjb2xvciwgY29lZmZpY2llbnQpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIGNvZWZmaWNpZW50ID0gY2xhbXAoY29lZmZpY2llbnQpO1xuXG4gIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ2hzbCcpICE9PSAtMSkge1xuICAgIGNvbG9yLnZhbHVlc1syXSArPSAoMTAwIC0gY29sb3IudmFsdWVzWzJdKSAqIGNvZWZmaWNpZW50O1xuICB9IGVsc2UgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGNvbG9yLnZhbHVlc1tpXSArPSAoMjU1IC0gY29sb3IudmFsdWVzW2ldKSAqIGNvZWZmaWNpZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuLy8gU29ydGVkIEFTQyBieSBzaXplLiBUaGF0J3MgaW1wb3J0YW50LlxuLy8gSXQgY2FuJ3QgYmUgY29uZmlndXJlZCBhcyBpdCdzIHVzZWQgc3RhdGljYWxseSBmb3IgcHJvcFR5cGVzLlxuZXhwb3J0IHZhciBrZXlzID0gWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddOyAvLyBLZWVwIGluIG1pbmQgdGhhdCBAbWVkaWEgaXMgaW5jbHVzaXZlIGJ5IHRoZSBDU1Mgc3BlY2lmaWNhdGlvbi5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQnJlYWtwb2ludHMoYnJlYWtwb2ludHMpIHtcbiAgdmFyIF9icmVha3BvaW50cyR2YWx1ZXMgPSBicmVha3BvaW50cy52YWx1ZXMsXG4gICAgICB2YWx1ZXMgPSBfYnJlYWtwb2ludHMkdmFsdWVzID09PSB2b2lkIDAgPyB7XG4gICAgeHM6IDAsXG4gICAgc206IDYwMCxcbiAgICBtZDogOTYwLFxuICAgIGxnOiAxMjgwLFxuICAgIHhsOiAxOTIwXG4gIH0gOiBfYnJlYWtwb2ludHMkdmFsdWVzLFxuICAgICAgX2JyZWFrcG9pbnRzJHVuaXQgPSBicmVha3BvaW50cy51bml0LFxuICAgICAgdW5pdCA9IF9icmVha3BvaW50cyR1bml0ID09PSB2b2lkIDAgPyAncHgnIDogX2JyZWFrcG9pbnRzJHVuaXQsXG4gICAgICBfYnJlYWtwb2ludHMkc3RlcCA9IGJyZWFrcG9pbnRzLnN0ZXAsXG4gICAgICBzdGVwID0gX2JyZWFrcG9pbnRzJHN0ZXAgPT09IHZvaWQgMCA/IDUgOiBfYnJlYWtwb2ludHMkc3RlcCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGJyZWFrcG9pbnRzLCBbXCJ2YWx1ZXNcIiwgXCJ1bml0XCIsIFwic3RlcFwiXSk7XG5cbiAgZnVuY3Rpb24gdXAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gdHlwZW9mIHZhbHVlc1trZXldID09PSAnbnVtYmVyJyA/IHZhbHVlc1trZXldIDoga2V5O1xuICAgIHJldHVybiBcIkBtZWRpYSAobWluLXdpZHRoOlwiLmNvbmNhdCh2YWx1ZSkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd24oa2V5KSB7XG4gICAgdmFyIGVuZEluZGV4ID0ga2V5cy5pbmRleE9mKGtleSkgKyAxO1xuICAgIHZhciB1cHBlcmJvdW5kID0gdmFsdWVzW2tleXNbZW5kSW5kZXhdXTtcblxuICAgIGlmIChlbmRJbmRleCA9PT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgIC8vIHhsIGRvd24gYXBwbGllcyB0byBhbGwgc2l6ZXNcbiAgICAgIHJldHVybiB1cCgneHMnKTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSB0eXBlb2YgdXBwZXJib3VuZCA9PT0gJ251bWJlcicgJiYgZW5kSW5kZXggPiAwID8gdXBwZXJib3VuZCA6IGtleTtcbiAgICByZXR1cm4gXCJAbWVkaWEgKG1heC13aWR0aDpcIi5jb25jYXQodmFsdWUgLSBzdGVwIC8gMTAwKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmV0d2VlbihzdGFydCwgZW5kKSB7XG4gICAgdmFyIGVuZEluZGV4ID0ga2V5cy5pbmRleE9mKGVuZCk7XG5cbiAgICBpZiAoZW5kSW5kZXggPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIHVwKHN0YXJ0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJAbWVkaWEgKG1pbi13aWR0aDpcIi5jb25jYXQodHlwZW9mIHZhbHVlc1tzdGFydF0gPT09ICdudW1iZXInID8gdmFsdWVzW3N0YXJ0XSA6IHN0YXJ0KS5jb25jYXQodW5pdCwgXCIpIGFuZCBcIikgKyBcIihtYXgtd2lkdGg6XCIuY29uY2F0KChlbmRJbmRleCAhPT0gLTEgJiYgdHlwZW9mIHZhbHVlc1trZXlzW2VuZEluZGV4ICsgMV1dID09PSAnbnVtYmVyJyA/IHZhbHVlc1trZXlzW2VuZEluZGV4ICsgMV1dIDogZW5kKSAtIHN0ZXAgLyAxMDApLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBvbmx5KGtleSkge1xuICAgIHJldHVybiBiZXR3ZWVuKGtleSwga2V5KTtcbiAgfVxuXG4gIHZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gd2lkdGgoa2V5KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghd2FybmVkT25jZSkge1xuICAgICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS53YXJuKFtcIk1hdGVyaWFsLVVJOiBUaGUgYHRoZW1lLmJyZWFrcG9pbnRzLndpZHRoYCB1dGlsaXR5IGlzIGRlcHJlY2F0ZWQgYmVjYXVzZSBpdCdzIHJlZHVuZGFudC5cIiwgJ1VzZSB0aGUgYHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlc2AgaW5zdGVhZC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlc1trZXldO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBrZXlzOiBrZXlzLFxuICAgIHZhbHVlczogdmFsdWVzLFxuICAgIHVwOiB1cCxcbiAgICBkb3duOiBkb3duLFxuICAgIGJldHdlZW46IGJldHdlZW4sXG4gICAgb25seTogb25seSxcbiAgICB3aWR0aDogd2lkdGhcbiAgfSwgb3RoZXIpO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1peGlucyhicmVha3BvaW50cywgc3BhY2luZywgbWl4aW5zKSB7XG4gIHZhciBfdG9vbGJhcjtcblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGd1dHRlcnM6IGZ1bmN0aW9uIGd1dHRlcnMoKSB7XG4gICAgICB2YXIgc3R5bGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiB0aGVtZS5taXhpbnMuZ3V0dGVycygpIGlzIGRlcHJlY2F0ZWQuJywgJ1lvdSBjYW4gdXNlIHRoZSBzb3VyY2Ugb2YgdGhlIG1peGluIGRpcmVjdGx5OicsIFwiXFxuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcXG4gICAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxcbiAgICAgIH0sXFxuICAgICAgXCJdLmpvaW4oJ1xcbicpKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDIpLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcoMilcbiAgICAgIH0sIHN0eWxlcywgX2RlZmluZVByb3BlcnR5KHt9LCBicmVha3BvaW50cy51cCgnc20nKSwgX2V4dGVuZHMoe1xuICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygzKSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDMpXG4gICAgICB9LCBzdHlsZXNbYnJlYWtwb2ludHMudXAoJ3NtJyldKSkpO1xuICAgIH0sXG4gICAgdG9vbGJhcjogKF90b29sYmFyID0ge1xuICAgICAgbWluSGVpZ2h0OiA1NlxuICAgIH0sIF9kZWZpbmVQcm9wZXJ0eShfdG9vbGJhciwgXCJcIi5jb25jYXQoYnJlYWtwb2ludHMudXAoJ3hzJyksIFwiIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIiksIHtcbiAgICAgIG1pbkhlaWdodDogNDhcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF90b29sYmFyLCBicmVha3BvaW50cy51cCgnc20nKSwge1xuICAgICAgbWluSGVpZ2h0OiA2NFxuICAgIH0pLCBfdG9vbGJhcilcbiAgfSwgbWl4aW5zKTtcbn0iLCJpbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNyZWF0ZVRoZW1lIGZyb20gJy4vY3JlYXRlVGhlbWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lKG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVRoZW1lLmFwcGx5KHZvaWQgMCwgW2RlZXBtZXJnZSh7XG4gICAgdW5zdGFibGVfc3RyaWN0TW9kZTogdHJ1ZVxuICB9LCBvcHRpb25zKV0uY29uY2F0KGFyZ3MpKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcbmltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY29tbW9uIGZyb20gJy4uL2NvbG9ycy9jb21tb24nO1xuaW1wb3J0IGdyZXkgZnJvbSAnLi4vY29sb3JzL2dyZXknO1xuaW1wb3J0IGluZGlnbyBmcm9tICcuLi9jb2xvcnMvaW5kaWdvJztcbmltcG9ydCBwaW5rIGZyb20gJy4uL2NvbG9ycy9waW5rJztcbmltcG9ydCByZWQgZnJvbSAnLi4vY29sb3JzL3JlZCc7XG5pbXBvcnQgb3JhbmdlIGZyb20gJy4uL2NvbG9ycy9vcmFuZ2UnO1xuaW1wb3J0IGJsdWUgZnJvbSAnLi4vY29sb3JzL2JsdWUnO1xuaW1wb3J0IGdyZWVuIGZyb20gJy4uL2NvbG9ycy9ncmVlbic7XG5pbXBvcnQgeyBkYXJrZW4sIGdldENvbnRyYXN0UmF0aW8sIGxpZ2h0ZW4gfSBmcm9tICcuL2NvbG9yTWFuaXB1bGF0b3InO1xuZXhwb3J0IHZhciBsaWdodCA9IHtcbiAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHN0eWxlIHRoZSB0ZXh0LlxuICB0ZXh0OiB7XG4gICAgLy8gVGhlIG1vc3QgaW1wb3J0YW50IHRleHQuXG4gICAgcHJpbWFyeTogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIC8vIFNlY29uZGFyeSB0ZXh0LlxuICAgIHNlY29uZGFyeTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIC8vIERpc2FibGVkIHRleHQgaGF2ZSBldmVuIGxvd2VyIHZpc3VhbCBwcm9taW5lbmNlLlxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjM4KScsXG4gICAgLy8gVGV4dCBoaW50cy5cbiAgICBoaW50OiAncmdiYSgwLCAwLCAwLCAwLjM4KSdcbiAgfSxcbiAgLy8gVGhlIGNvbG9yIHVzZWQgdG8gZGl2aWRlIGRpZmZlcmVudCBlbGVtZW50cy5cbiAgZGl2aWRlcjogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAvLyBUaGUgYmFja2dyb3VuZCBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgc3VyZmFjZXMuXG4gIC8vIENvbnNpc3RlbmN5IGJldHdlZW4gdGhlc2UgdmFsdWVzIGlzIGltcG9ydGFudC5cbiAgYmFja2dyb3VuZDoge1xuICAgIHBhcGVyOiBjb21tb24ud2hpdGUsXG4gICAgZGVmYXVsdDogZ3JleVs1MF1cbiAgfSxcbiAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHN0eWxlIHRoZSBhY3Rpb24gZWxlbWVudHMuXG4gIGFjdGlvbjoge1xuICAgIC8vIFRoZSBjb2xvciBvZiBhbiBhY3RpdmUgYWN0aW9uIGxpa2UgYW4gaWNvbiBidXR0b24uXG4gICAgYWN0aXZlOiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGFuIGhvdmVyZWQgYWN0aW9uLlxuICAgIGhvdmVyOiAncmdiYSgwLCAwLCAwLCAwLjA0KScsXG4gICAgaG92ZXJPcGFjaXR5OiAwLjA0LFxuICAgIC8vIFRoZSBjb2xvciBvZiBhIHNlbGVjdGVkIGFjdGlvbi5cbiAgICBzZWxlY3RlZDogJ3JnYmEoMCwgMCwgMCwgMC4wOCknLFxuICAgIHNlbGVjdGVkT3BhY2l0eTogMC4wOCxcbiAgICAvLyBUaGUgY29sb3Igb2YgYSBkaXNhYmxlZCBhY3Rpb24uXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMjYpJyxcbiAgICAvLyBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiBhIGRpc2FibGVkIGFjdGlvbi5cbiAgICBkaXNhYmxlZEJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgICBkaXNhYmxlZE9wYWNpdHk6IDAuMzgsXG4gICAgZm9jdXM6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgICBmb2N1c09wYWNpdHk6IDAuMTIsXG4gICAgYWN0aXZhdGVkT3BhY2l0eTogMC4xMlxuICB9XG59O1xuZXhwb3J0IHZhciBkYXJrID0ge1xuICB0ZXh0OiB7XG4gICAgcHJpbWFyeTogY29tbW9uLndoaXRlLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICAgIGhpbnQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICAgIGljb246ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknXG4gIH0sXG4gIGRpdmlkZXI6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgYmFja2dyb3VuZDoge1xuICAgIHBhcGVyOiBncmV5WzgwMF0sXG4gICAgZGVmYXVsdDogJyMzMDMwMzAnXG4gIH0sXG4gIGFjdGlvbjoge1xuICAgIGFjdGl2ZTogY29tbW9uLndoaXRlLFxuICAgIGhvdmVyOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KScsXG4gICAgaG92ZXJPcGFjaXR5OiAwLjA4LFxuICAgIHNlbGVjdGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KScsXG4gICAgc2VsZWN0ZWRPcGFjaXR5OiAwLjE2LFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpJyxcbiAgICBkaXNhYmxlZEJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgICBkaXNhYmxlZE9wYWNpdHk6IDAuMzgsXG4gICAgZm9jdXM6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgICBmb2N1c09wYWNpdHk6IDAuMTIsXG4gICAgYWN0aXZhdGVkT3BhY2l0eTogMC4yNFxuICB9XG59O1xuXG5mdW5jdGlvbiBhZGRMaWdodE9yRGFyayhpbnRlbnQsIGRpcmVjdGlvbiwgc2hhZGUsIHRvbmFsT2Zmc2V0KSB7XG4gIHZhciB0b25hbE9mZnNldExpZ2h0ID0gdG9uYWxPZmZzZXQubGlnaHQgfHwgdG9uYWxPZmZzZXQ7XG4gIHZhciB0b25hbE9mZnNldERhcmsgPSB0b25hbE9mZnNldC5kYXJrIHx8IHRvbmFsT2Zmc2V0ICogMS41O1xuXG4gIGlmICghaW50ZW50W2RpcmVjdGlvbl0pIHtcbiAgICBpZiAoaW50ZW50Lmhhc093blByb3BlcnR5KHNoYWRlKSkge1xuICAgICAgaW50ZW50W2RpcmVjdGlvbl0gPSBpbnRlbnRbc2hhZGVdO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGlnaHQnKSB7XG4gICAgICBpbnRlbnQubGlnaHQgPSBsaWdodGVuKGludGVudC5tYWluLCB0b25hbE9mZnNldExpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2RhcmsnKSB7XG4gICAgICBpbnRlbnQuZGFyayA9IGRhcmtlbihpbnRlbnQubWFpbiwgdG9uYWxPZmZzZXREYXJrKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGFsZXR0ZShwYWxldHRlKSB7XG4gIHZhciBfcGFsZXR0ZSRwcmltYXJ5ID0gcGFsZXR0ZS5wcmltYXJ5LFxuICAgICAgcHJpbWFyeSA9IF9wYWxldHRlJHByaW1hcnkgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogaW5kaWdvWzMwMF0sXG4gICAgbWFpbjogaW5kaWdvWzUwMF0sXG4gICAgZGFyazogaW5kaWdvWzcwMF1cbiAgfSA6IF9wYWxldHRlJHByaW1hcnksXG4gICAgICBfcGFsZXR0ZSRzZWNvbmRhcnkgPSBwYWxldHRlLnNlY29uZGFyeSxcbiAgICAgIHNlY29uZGFyeSA9IF9wYWxldHRlJHNlY29uZGFyeSA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBwaW5rLkEyMDAsXG4gICAgbWFpbjogcGluay5BNDAwLFxuICAgIGRhcms6IHBpbmsuQTcwMFxuICB9IDogX3BhbGV0dGUkc2Vjb25kYXJ5LFxuICAgICAgX3BhbGV0dGUkZXJyb3IgPSBwYWxldHRlLmVycm9yLFxuICAgICAgZXJyb3IgPSBfcGFsZXR0ZSRlcnJvciA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiByZWRbMzAwXSxcbiAgICBtYWluOiByZWRbNTAwXSxcbiAgICBkYXJrOiByZWRbNzAwXVxuICB9IDogX3BhbGV0dGUkZXJyb3IsXG4gICAgICBfcGFsZXR0ZSR3YXJuaW5nID0gcGFsZXR0ZS53YXJuaW5nLFxuICAgICAgd2FybmluZyA9IF9wYWxldHRlJHdhcm5pbmcgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogb3JhbmdlWzMwMF0sXG4gICAgbWFpbjogb3JhbmdlWzUwMF0sXG4gICAgZGFyazogb3JhbmdlWzcwMF1cbiAgfSA6IF9wYWxldHRlJHdhcm5pbmcsXG4gICAgICBfcGFsZXR0ZSRpbmZvID0gcGFsZXR0ZS5pbmZvLFxuICAgICAgaW5mbyA9IF9wYWxldHRlJGluZm8gPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogYmx1ZVszMDBdLFxuICAgIG1haW46IGJsdWVbNTAwXSxcbiAgICBkYXJrOiBibHVlWzcwMF1cbiAgfSA6IF9wYWxldHRlJGluZm8sXG4gICAgICBfcGFsZXR0ZSRzdWNjZXNzID0gcGFsZXR0ZS5zdWNjZXNzLFxuICAgICAgc3VjY2VzcyA9IF9wYWxldHRlJHN1Y2Nlc3MgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogZ3JlZW5bMzAwXSxcbiAgICBtYWluOiBncmVlbls1MDBdLFxuICAgIGRhcms6IGdyZWVuWzcwMF1cbiAgfSA6IF9wYWxldHRlJHN1Y2Nlc3MsXG4gICAgICBfcGFsZXR0ZSR0eXBlID0gcGFsZXR0ZS50eXBlLFxuICAgICAgdHlwZSA9IF9wYWxldHRlJHR5cGUgPT09IHZvaWQgMCA/ICdsaWdodCcgOiBfcGFsZXR0ZSR0eXBlLFxuICAgICAgX3BhbGV0dGUkY29udHJhc3RUaHJlID0gcGFsZXR0ZS5jb250cmFzdFRocmVzaG9sZCxcbiAgICAgIGNvbnRyYXN0VGhyZXNob2xkID0gX3BhbGV0dGUkY29udHJhc3RUaHJlID09PSB2b2lkIDAgPyAzIDogX3BhbGV0dGUkY29udHJhc3RUaHJlLFxuICAgICAgX3BhbGV0dGUkdG9uYWxPZmZzZXQgPSBwYWxldHRlLnRvbmFsT2Zmc2V0LFxuICAgICAgdG9uYWxPZmZzZXQgPSBfcGFsZXR0ZSR0b25hbE9mZnNldCA9PT0gdm9pZCAwID8gMC4yIDogX3BhbGV0dGUkdG9uYWxPZmZzZXQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwYWxldHRlLCBbXCJwcmltYXJ5XCIsIFwic2Vjb25kYXJ5XCIsIFwiZXJyb3JcIiwgXCJ3YXJuaW5nXCIsIFwiaW5mb1wiLCBcInN1Y2Nlc3NcIiwgXCJ0eXBlXCIsIFwiY29udHJhc3RUaHJlc2hvbGRcIiwgXCJ0b25hbE9mZnNldFwiXSk7IC8vIFVzZSB0aGUgc2FtZSBsb2dpYyBhc1xuICAvLyBCb290c3RyYXA6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iLzFkNmUzNzEwZGQ0NDdkZTFhMjAwZjI5ZThmYTUyMWY4YTA5MDhmNzAvc2Nzcy9fZnVuY3Rpb25zLnNjc3MjTDU5XG4gIC8vIGFuZCBtYXRlcmlhbC1jb21wb25lbnRzLXdlYiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL2FjNDZiODg2M2M0ZGFiOWZjMjJjNGM2NjJkYzZiZDFiNjVkZDY1MmYvcGFja2FnZXMvbWRjLXRoZW1lL19mdW5jdGlvbnMuc2NzcyNMNTRcblxuXG4gIGZ1bmN0aW9uIGdldENvbnRyYXN0VGV4dChiYWNrZ3JvdW5kKSB7XG4gICAgdmFyIGNvbnRyYXN0VGV4dCA9IGdldENvbnRyYXN0UmF0aW8oYmFja2dyb3VuZCwgZGFyay50ZXh0LnByaW1hcnkpID49IGNvbnRyYXN0VGhyZXNob2xkID8gZGFyay50ZXh0LnByaW1hcnkgOiBsaWdodC50ZXh0LnByaW1hcnk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGNvbnRyYXN0ID0gZ2V0Q29udHJhc3RSYXRpbyhiYWNrZ3JvdW5kLCBjb250cmFzdFRleHQpO1xuXG4gICAgICBpZiAoY29udHJhc3QgPCAzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSBjb250cmFzdCByYXRpbyBvZiBcIi5jb25jYXQoY29udHJhc3QsIFwiOjEgZm9yIFwiKS5jb25jYXQoY29udHJhc3RUZXh0LCBcIiBvbiBcIikuY29uY2F0KGJhY2tncm91bmQpLCAnZmFsbHMgYmVsb3cgdGhlIFdDQUcgcmVjb21tZW5kZWQgYWJzb2x1dGUgbWluaW11bSBjb250cmFzdCByYXRpbyBvZiAzOjEuJywgJ2h0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI3Zpc3VhbC1hdWRpby1jb250cmFzdC1jb250cmFzdCddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJhc3RUZXh0O1xuICB9XG5cbiAgdmFyIGF1Z21lbnRDb2xvciA9IGZ1bmN0aW9uIGF1Z21lbnRDb2xvcihjb2xvcikge1xuICAgIHZhciBtYWluU2hhZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDUwMDtcbiAgICB2YXIgbGlnaHRTaGFkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMzAwO1xuICAgIHZhciBkYXJrU2hhZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDcwMDtcbiAgICBjb2xvciA9IF9leHRlbmRzKHt9LCBjb2xvcik7XG5cbiAgICBpZiAoIWNvbG9yLm1haW4gJiYgY29sb3JbbWFpblNoYWRlXSkge1xuICAgICAgY29sb3IubWFpbiA9IGNvbG9yW21haW5TaGFkZV07XG4gICAgfVxuXG4gICAgaWYgKCFjb2xvci5tYWluKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVGhlIGNvbG9yIHByb3ZpZGVkIHRvIGF1Z21lbnRDb2xvcihjb2xvcikgaXMgaW52YWxpZC5cXG5UaGUgY29sb3Igb2JqZWN0IG5lZWRzIHRvIGhhdmUgYSBgbWFpbmAgcHJvcGVydHkgb3IgYSBgXCIuY29uY2F0KG1haW5TaGFkZSwgXCJgIHByb3BlcnR5LlwiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNCwgbWFpblNoYWRlKSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb2xvci5tYWluICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFRoZSBjb2xvciBwcm92aWRlZCB0byBhdWdtZW50Q29sb3IoY29sb3IpIGlzIGludmFsaWQuXFxuYGNvbG9yLm1haW5gIHNob3VsZCBiZSBhIHN0cmluZywgYnV0IGBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoY29sb3IubWFpbiksIFwiYCB3YXMgcHJvdmlkZWQgaW5zdGVhZC5cXG5cXG5EaWQgeW91IGludGVuZCB0byB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgYXBwcm9hY2hlcz9cXG5cXG5pbXBvcnQge1xceEEwZ3JlZW4gfSBmcm9tIFxcXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcXFwiO1xcblxcbmNvbnN0IHRoZW1lMSA9IGNyZWF0ZVRoZW1lKHsgcGFsZXR0ZToge1xcbiAgcHJpbWFyeTogZ3JlZW4sXFxufSB9KTtcXG5cXG5jb25zdCB0aGVtZTIgPSBjcmVhdGVUaGVtZSh7IHBhbGV0dGU6IHtcXG4gIHByaW1hcnk6IHsgbWFpbjogZ3JlZW5bNTAwXSB9LFxcbn0gfSk7XCIpIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg1LCBKU09OLnN0cmluZ2lmeShjb2xvci5tYWluKSkpO1xuICAgIH1cblxuICAgIGFkZExpZ2h0T3JEYXJrKGNvbG9yLCAnbGlnaHQnLCBsaWdodFNoYWRlLCB0b25hbE9mZnNldCk7XG4gICAgYWRkTGlnaHRPckRhcmsoY29sb3IsICdkYXJrJywgZGFya1NoYWRlLCB0b25hbE9mZnNldCk7XG5cbiAgICBpZiAoIWNvbG9yLmNvbnRyYXN0VGV4dCkge1xuICAgICAgY29sb3IuY29udHJhc3RUZXh0ID0gZ2V0Q29udHJhc3RUZXh0KGNvbG9yLm1haW4pO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvcjtcbiAgfTtcblxuICB2YXIgdHlwZXMgPSB7XG4gICAgZGFyazogZGFyayxcbiAgICBsaWdodDogbGlnaHRcbiAgfTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghdHlwZXNbdHlwZV0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVGhlIHBhbGV0dGUgdHlwZSBgXCIuY29uY2F0KHR5cGUsIFwiYCBpcyBub3Qgc3VwcG9ydGVkLlwiKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBhbGV0dGVPdXRwdXQgPSBkZWVwbWVyZ2UoX2V4dGVuZHMoe1xuICAgIC8vIEEgY29sbGVjdGlvbiBvZiBjb21tb24gY29sb3JzLlxuICAgIGNvbW1vbjogY29tbW9uLFxuICAgIC8vIFRoZSBwYWxldHRlIHR5cGUsIGNhbiBiZSBsaWdodCBvciBkYXJrLlxuICAgIHR5cGU6IHR5cGUsXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBwcmltYXJ5IGludGVyZmFjZSBlbGVtZW50cyBmb3IgYSB1c2VyLlxuICAgIHByaW1hcnk6IGF1Z21lbnRDb2xvcihwcmltYXJ5KSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IHNlY29uZGFyeSBpbnRlcmZhY2UgZWxlbWVudHMgZm9yIGEgdXNlci5cbiAgICBzZWNvbmRhcnk6IGF1Z21lbnRDb2xvcihzZWNvbmRhcnksICdBNDAwJywgJ0EyMDAnLCAnQTcwMCcpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgaW50ZXJmYWNlIGVsZW1lbnRzIHRoYXQgdGhlIHVzZXIgc2hvdWxkIGJlIG1hZGUgYXdhcmUgb2YuXG4gICAgZXJyb3I6IGF1Z21lbnRDb2xvcihlcnJvciksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBwb3RlbnRpYWxseSBkYW5nZXJvdXMgYWN0aW9ucyBvciBpbXBvcnRhbnQgbWVzc2FnZXMuXG4gICAgd2FybmluZzogYXVnbWVudENvbG9yKHdhcm5pbmcpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBwcmVzZW50IGluZm9ybWF0aW9uIHRvIHRoZSB1c2VyIHRoYXQgaXMgbmV1dHJhbCBhbmQgbm90IG5lY2Vzc2FyaWx5IGltcG9ydGFudC5cbiAgICBpbmZvOiBhdWdtZW50Q29sb3IoaW5mbyksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIGluZGljYXRlIHRoZSBzdWNjZXNzZnVsIGNvbXBsZXRpb24gb2YgYW4gYWN0aW9uIHRoYXQgdXNlciB0cmlnZ2VyZWQuXG4gICAgc3VjY2VzczogYXVnbWVudENvbG9yKHN1Y2Nlc3MpLFxuICAgIC8vIFRoZSBncmV5IGNvbG9ycy5cbiAgICBncmV5OiBncmV5LFxuICAgIC8vIFVzZWQgYnkgYGdldENvbnRyYXN0VGV4dCgpYCB0byBtYXhpbWl6ZSB0aGUgY29udHJhc3QgYmV0d2VlblxuICAgIC8vIHRoZSBiYWNrZ3JvdW5kIGFuZCB0aGUgdGV4dC5cbiAgICBjb250cmFzdFRocmVzaG9sZDogY29udHJhc3RUaHJlc2hvbGQsXG4gICAgLy8gVGFrZXMgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCByZXR1cm5zIHRoZSB0ZXh0IGNvbG9yIHRoYXQgbWF4aW1pemVzIHRoZSBjb250cmFzdC5cbiAgICBnZXRDb250cmFzdFRleHQ6IGdldENvbnRyYXN0VGV4dCxcbiAgICAvLyBHZW5lcmF0ZSBhIHJpY2ggY29sb3Igb2JqZWN0LlxuICAgIGF1Z21lbnRDb2xvcjogYXVnbWVudENvbG9yLFxuICAgIC8vIFVzZWQgYnkgdGhlIGZ1bmN0aW9ucyBiZWxvdyB0byBzaGlmdCBhIGNvbG9yJ3MgbHVtaW5hbmNlIGJ5IGFwcHJveGltYXRlbHlcbiAgICAvLyB0d28gaW5kZXhlcyB3aXRoaW4gaXRzIHRvbmFsIHBhbGV0dGUuXG4gICAgLy8gRS5nLiwgc2hpZnQgZnJvbSBSZWQgNTAwIHRvIFJlZCAzMDAgb3IgUmVkIDcwMC5cbiAgICB0b25hbE9mZnNldDogdG9uYWxPZmZzZXRcbiAgfSwgdHlwZXNbdHlwZV0pLCBvdGhlcik7XG4gIHJldHVybiBwYWxldHRlT3V0cHV0O1xufSIsImltcG9ydCB7IGNyZWF0ZVVuYXJ5U3BhY2luZyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zeXN0ZW0nO1xudmFyIHdhcm5PbmNlO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3BhY2luZygpIHtcbiAgdmFyIHNwYWNpbmdJbnB1dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogODtcblxuICAvLyBBbHJlYWR5IHRyYW5zZm9ybWVkLlxuICBpZiAoc3BhY2luZ0lucHV0Lm11aSkge1xuICAgIHJldHVybiBzcGFjaW5nSW5wdXQ7XG4gIH0gLy8gTWF0ZXJpYWwgRGVzaWduIGxheW91dHMgYXJlIHZpc3VhbGx5IGJhbGFuY2VkLiBNb3N0IG1lYXN1cmVtZW50cyBhbGlnbiB0byBhbiA4ZHAgZ3JpZCBhcHBsaWVkLCB3aGljaCBhbGlnbnMgYm90aCBzcGFjaW5nIGFuZCB0aGUgb3ZlcmFsbCBsYXlvdXQuXG4gIC8vIFNtYWxsZXIgY29tcG9uZW50cywgc3VjaCBhcyBpY29ucyBhbmQgdHlwZSwgY2FuIGFsaWduIHRvIGEgNGRwIGdyaWQuXG4gIC8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2xheW91dC91bmRlcnN0YW5kaW5nLWxheW91dC5odG1sI3VzYWdlXG5cblxuICB2YXIgdHJhbnNmb3JtID0gY3JlYXRlVW5hcnlTcGFjaW5nKHtcbiAgICBzcGFjaW5nOiBzcGFjaW5nSW5wdXRcbiAgfSk7XG5cbiAgdmFyIHNwYWNpbmcgPSBmdW5jdGlvbiBzcGFjaW5nKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEoYXJncy5sZW5ndGggPD0gNCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUb28gbWFueSBhcmd1bWVudHMgcHJvdmlkZWQsIGV4cGVjdGVkIGJldHdlZW4gMCBhbmQgNCwgZ290IFwiLmNvbmNhdChhcmdzLmxlbmd0aCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybSgxKTtcbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oYXJnc1swXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3MubWFwKGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50O1xuICAgICAgfVxuXG4gICAgICB2YXIgb3V0cHV0ID0gdHJhbnNmb3JtKGFyZ3VtZW50KTtcbiAgICAgIHJldHVybiB0eXBlb2Ygb3V0cHV0ID09PSAnbnVtYmVyJyA/IFwiXCIuY29uY2F0KG91dHB1dCwgXCJweFwiKSA6IG91dHB1dDtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH07IC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHksIHRvIHJlbW92ZSBpbiB2NS5cblxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcGFjaW5nLCAndW5pdCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghd2Fybk9uY2UgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogdGhlbWUuc3BhY2luZy51bml0IHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuJywgJ0l0IHdpbGwgYmUgcmVtb3ZlZCBpbiB2NS4nLCAnWW91IGNhbiByZXBsYWNlIGB0aGVtZS5zcGFjaW5nLnVuaXQgKiB5YCB3aXRoIGB0aGVtZS5zcGFjaW5nKHkpYC4nLCAnJywgJ1lvdSBjYW4gdXNlIHRoZSBgaHR0cHM6Ly9naXRodWIuY29tL211aS1vcmcvbWF0ZXJpYWwtdWkvdHJlZS9tYXN0ZXIvcGFja2FnZXMvbWF0ZXJpYWwtdWktY29kZW1vZC9SRUFETUUubWQjdGhlbWUtc3BhY2luZy1hcGlgIG1pZ3JhdGlvbiBoZWxwZXIgdG8gbWFrZSB0aGUgcHJvY2VzcyBzbW9vdGhlci4nXS5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cblxuICAgICAgICB3YXJuT25jZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzcGFjaW5nSW5wdXQ7XG4gICAgfVxuICB9KTtcbiAgc3BhY2luZy5tdWkgPSB0cnVlO1xuICByZXR1cm4gc3BhY2luZztcbn0iLCJpbXBvcnQgeyBjcmVhdGVTdHlsZXMgYXMgY3JlYXRlU3R5bGVzT3JpZ2luYWwgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJzsgLy8gbGV0IHdhcm5PbmNlID0gZmFsc2U7XG4vLyBUbyByZW1vdmUgaW4gdjVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3R5bGVzKHN0eWxlcykge1xuICAvLyB3YXJuaW5nKFxuICAvLyAgIHdhcm5PbmNlLFxuICAvLyAgIFtcbiAgLy8gICAgICdNYXRlcmlhbC1VSTogY3JlYXRlU3R5bGVzIGZyb20gQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzIGlzIGRlcHJlY2F0ZWQuJyxcbiAgLy8gICAgICdQbGVhc2UgdXNlIEBtYXRlcmlhbC11aS9zdHlsZXMvY3JlYXRlU3R5bGVzJyxcbiAgLy8gICBdLmpvaW4oJ1xcbicpLFxuICAvLyApO1xuICAvLyB3YXJuT25jZSA9IHRydWU7XG4gIHJldHVybiBjcmVhdGVTdHlsZXNPcmlnaW5hbChzdHlsZXMpO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBjcmVhdGVCcmVha3BvaW50cyBmcm9tICcuL2NyZWF0ZUJyZWFrcG9pbnRzJztcbmltcG9ydCBjcmVhdGVNaXhpbnMgZnJvbSAnLi9jcmVhdGVNaXhpbnMnO1xuaW1wb3J0IGNyZWF0ZVBhbGV0dGUgZnJvbSAnLi9jcmVhdGVQYWxldHRlJztcbmltcG9ydCBjcmVhdGVUeXBvZ3JhcGh5IGZyb20gJy4vY3JlYXRlVHlwb2dyYXBoeSc7XG5pbXBvcnQgc2hhZG93cyBmcm9tICcuL3NoYWRvd3MnO1xuaW1wb3J0IHNoYXBlIGZyb20gJy4vc2hhcGUnO1xuaW1wb3J0IGNyZWF0ZVNwYWNpbmcgZnJvbSAnLi9jcmVhdGVTcGFjaW5nJztcbmltcG9ydCB0cmFuc2l0aW9ucyBmcm9tICcuL3RyYW5zaXRpb25zJztcbmltcG9ydCB6SW5kZXggZnJvbSAnLi96SW5kZXgnO1xuXG5mdW5jdGlvbiBjcmVhdGVUaGVtZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBfb3B0aW9ucyRicmVha3BvaW50cyA9IG9wdGlvbnMuYnJlYWtwb2ludHMsXG4gICAgICBicmVha3BvaW50c0lucHV0ID0gX29wdGlvbnMkYnJlYWtwb2ludHMgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkYnJlYWtwb2ludHMsXG4gICAgICBfb3B0aW9ucyRtaXhpbnMgPSBvcHRpb25zLm1peGlucyxcbiAgICAgIG1peGluc0lucHV0ID0gX29wdGlvbnMkbWl4aW5zID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJG1peGlucyxcbiAgICAgIF9vcHRpb25zJHBhbGV0dGUgPSBvcHRpb25zLnBhbGV0dGUsXG4gICAgICBwYWxldHRlSW5wdXQgPSBfb3B0aW9ucyRwYWxldHRlID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJHBhbGV0dGUsXG4gICAgICBzcGFjaW5nSW5wdXQgPSBvcHRpb25zLnNwYWNpbmcsXG4gICAgICBfb3B0aW9ucyR0eXBvZ3JhcGh5ID0gb3B0aW9ucy50eXBvZ3JhcGh5LFxuICAgICAgdHlwb2dyYXBoeUlucHV0ID0gX29wdGlvbnMkdHlwb2dyYXBoeSA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyR0eXBvZ3JhcGh5LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgW1wiYnJlYWtwb2ludHNcIiwgXCJtaXhpbnNcIiwgXCJwYWxldHRlXCIsIFwic3BhY2luZ1wiLCBcInR5cG9ncmFwaHlcIl0pO1xuXG4gIHZhciBwYWxldHRlID0gY3JlYXRlUGFsZXR0ZShwYWxldHRlSW5wdXQpO1xuICB2YXIgYnJlYWtwb2ludHMgPSBjcmVhdGVCcmVha3BvaW50cyhicmVha3BvaW50c0lucHV0KTtcbiAgdmFyIHNwYWNpbmcgPSBjcmVhdGVTcGFjaW5nKHNwYWNpbmdJbnB1dCk7XG4gIHZhciBtdWlUaGVtZSA9IGRlZXBtZXJnZSh7XG4gICAgYnJlYWtwb2ludHM6IGJyZWFrcG9pbnRzLFxuICAgIGRpcmVjdGlvbjogJ2x0cicsXG4gICAgbWl4aW5zOiBjcmVhdGVNaXhpbnMoYnJlYWtwb2ludHMsIHNwYWNpbmcsIG1peGluc0lucHV0KSxcbiAgICBvdmVycmlkZXM6IHt9LFxuICAgIC8vIEluamVjdCBjdXN0b20gc3R5bGVzXG4gICAgcGFsZXR0ZTogcGFsZXR0ZSxcbiAgICBwcm9wczoge30sXG4gICAgLy8gUHJvdmlkZSBkZWZhdWx0IHByb3BzXG4gICAgc2hhZG93czogc2hhZG93cyxcbiAgICB0eXBvZ3JhcGh5OiBjcmVhdGVUeXBvZ3JhcGh5KHBhbGV0dGUsIHR5cG9ncmFwaHlJbnB1dCksXG4gICAgc3BhY2luZzogc3BhY2luZyxcbiAgICBzaGFwZTogc2hhcGUsXG4gICAgdHJhbnNpdGlvbnM6IHRyYW5zaXRpb25zLFxuICAgIHpJbmRleDogekluZGV4XG4gIH0sIG90aGVyKTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBtdWlUaGVtZSA9IGFyZ3MucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIGRlZXBtZXJnZShhY2MsIGFyZ3VtZW50KTtcbiAgfSwgbXVpVGhlbWUpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIHBzZXVkb0NsYXNzZXMgPSBbJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnZm9jdXNlZCcsICdmb2N1c1Zpc2libGUnLCAncmVxdWlyZWQnLCAnZXhwYW5kZWQnLCAnc2VsZWN0ZWQnXTtcblxuICAgIHZhciB0cmF2ZXJzZSA9IGZ1bmN0aW9uIHRyYXZlcnNlKG5vZGUsIHBhcmVudEtleSkge1xuICAgICAgdmFyIGRlcHRoID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuICAgICAgdmFyIGtleTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pbiwgbm8tcmVzdHJpY3RlZC1zeW50YXhcblxuICAgICAgZm9yIChrZXkgaW4gbm9kZSkge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2tleV07XG5cbiAgICAgICAgaWYgKGRlcHRoID09PSAxKSB7XG4gICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdNdWknKSA9PT0gMCAmJiBjaGlsZCkge1xuICAgICAgICAgICAgdHJhdmVyc2UoY2hpbGQsIGtleSwgZGVwdGggKyAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocHNldWRvQ2xhc3Nlcy5pbmRleE9mKGtleSkgIT09IC0xICYmIE9iamVjdC5rZXlzKGNoaWxkKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSBgXCIuY29uY2F0KHBhcmVudEtleSwgXCJgIGNvbXBvbmVudCBpbmNyZWFzZXMgXCIpICsgXCJ0aGUgQ1NTIHNwZWNpZmljaXR5IG9mIHRoZSBgXCIuY29uY2F0KGtleSwgXCJgIGludGVybmFsIHN0YXRlLlwiKSwgJ1lvdSBjYW4gbm90IG92ZXJyaWRlIGl0IGxpa2UgdGhpczogJywgSlNPTi5zdHJpbmdpZnkobm9kZSwgbnVsbCwgMiksICcnLCAnSW5zdGVhZCwgeW91IG5lZWQgdG8gdXNlIHRoZSAkcnVsZU5hbWUgc3ludGF4OicsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgcm9vdDogX2RlZmluZVByb3BlcnR5KHt9LCBcIiYkXCIuY29uY2F0KGtleSksIGNoaWxkKVxuICAgICAgICAgICAgfSwgbnVsbCwgMiksICcnLCAnaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vci9wc2V1ZG8tY2xhc3Nlcy1ndWlkZSddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICB9IC8vIFJlbW92ZSB0aGUgc3R5bGUgdG8gcHJldmVudCBnbG9iYWwgY29uZmxpY3RzLlxuXG5cbiAgICAgICAgICBub2RlW2tleV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0cmF2ZXJzZShtdWlUaGVtZS5vdmVycmlkZXMpO1xuICB9XG5cbiAgcmV0dXJuIG11aVRoZW1lO1xufVxuXG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11aVRoZW1lKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghd2FybmVkT25jZSkge1xuICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IHRoZSBjcmVhdGVNdWlUaGVtZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCB0byBjcmVhdGVUaGVtZS4nLCAnJywgXCJZb3Ugc2hvdWxkIHVzZSBgaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnYFwiXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVRoZW1lLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRoZW1lOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5cbmZ1bmN0aW9uIHJvdW5kKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMWU1KSAvIDFlNTtcbn1cblxudmFyIHdhcm5lZE9uY2UgPSBmYWxzZTtcblxuZnVuY3Rpb24gcm91bmRXaXRoRGVwcmVjYXRpb25XYXJuaW5nKHZhbHVlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydNYXRlcmlhbC1VSTogVGhlIGB0aGVtZS50eXBvZ3JhcGh5LnJvdW5kYCBoZWxwZXIgaXMgZGVwcmVjYXRlZC4nLCAnSGVhZCB0byBodHRwczovL21hdGVyaWFsLXVpLmNvbS9yL21pZ3JhdGlvbi12NC8jdGhlbWUgZm9yIGEgbWlncmF0aW9uIHBhdGguJ10uam9pbignXFxuJykpO1xuICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJvdW5kKHZhbHVlKTtcbn1cblxudmFyIGNhc2VBbGxDYXBzID0ge1xuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xufTtcbnZhciBkZWZhdWx0Rm9udEZhbWlseSA9ICdcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnO1xuLyoqXG4gKiBAc2VlIEBsaW5re2h0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL3R5cG9ncmFwaHkvdGhlLXR5cGUtc3lzdGVtLmh0bWx9XG4gKiBAc2VlIEBsaW5re2h0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL3R5cG9ncmFwaHkvdW5kZXJzdGFuZGluZy10eXBvZ3JhcGh5Lmh0bWx9XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVHlwb2dyYXBoeShwYWxldHRlLCB0eXBvZ3JhcGh5KSB7XG4gIHZhciBfcmVmID0gdHlwZW9mIHR5cG9ncmFwaHkgPT09ICdmdW5jdGlvbicgPyB0eXBvZ3JhcGh5KHBhbGV0dGUpIDogdHlwb2dyYXBoeSxcbiAgICAgIF9yZWYkZm9udEZhbWlseSA9IF9yZWYuZm9udEZhbWlseSxcbiAgICAgIGZvbnRGYW1pbHkgPSBfcmVmJGZvbnRGYW1pbHkgPT09IHZvaWQgMCA/IGRlZmF1bHRGb250RmFtaWx5IDogX3JlZiRmb250RmFtaWx5LFxuICAgICAgX3JlZiRmb250U2l6ZSA9IF9yZWYuZm9udFNpemUsXG4gICAgICBmb250U2l6ZSA9IF9yZWYkZm9udFNpemUgPT09IHZvaWQgMCA/IDE0IDogX3JlZiRmb250U2l6ZSxcbiAgICAgIF9yZWYkZm9udFdlaWdodExpZ2h0ID0gX3JlZi5mb250V2VpZ2h0TGlnaHQsXG4gICAgICBmb250V2VpZ2h0TGlnaHQgPSBfcmVmJGZvbnRXZWlnaHRMaWdodCA9PT0gdm9pZCAwID8gMzAwIDogX3JlZiRmb250V2VpZ2h0TGlnaHQsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRSZWd1bGEgPSBfcmVmLmZvbnRXZWlnaHRSZWd1bGFyLFxuICAgICAgZm9udFdlaWdodFJlZ3VsYXIgPSBfcmVmJGZvbnRXZWlnaHRSZWd1bGEgPT09IHZvaWQgMCA/IDQwMCA6IF9yZWYkZm9udFdlaWdodFJlZ3VsYSxcbiAgICAgIF9yZWYkZm9udFdlaWdodE1lZGl1bSA9IF9yZWYuZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIGZvbnRXZWlnaHRNZWRpdW0gPSBfcmVmJGZvbnRXZWlnaHRNZWRpdW0gPT09IHZvaWQgMCA/IDUwMCA6IF9yZWYkZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIF9yZWYkZm9udFdlaWdodEJvbGQgPSBfcmVmLmZvbnRXZWlnaHRCb2xkLFxuICAgICAgZm9udFdlaWdodEJvbGQgPSBfcmVmJGZvbnRXZWlnaHRCb2xkID09PSB2b2lkIDAgPyA3MDAgOiBfcmVmJGZvbnRXZWlnaHRCb2xkLFxuICAgICAgX3JlZiRodG1sRm9udFNpemUgPSBfcmVmLmh0bWxGb250U2l6ZSxcbiAgICAgIGh0bWxGb250U2l6ZSA9IF9yZWYkaHRtbEZvbnRTaXplID09PSB2b2lkIDAgPyAxNiA6IF9yZWYkaHRtbEZvbnRTaXplLFxuICAgICAgYWxsVmFyaWFudHMgPSBfcmVmLmFsbFZhcmlhbnRzLFxuICAgICAgcHhUb1JlbTIgPSBfcmVmLnB4VG9SZW0sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJmb250RmFtaWx5XCIsIFwiZm9udFNpemVcIiwgXCJmb250V2VpZ2h0TGlnaHRcIiwgXCJmb250V2VpZ2h0UmVndWxhclwiLCBcImZvbnRXZWlnaHRNZWRpdW1cIiwgXCJmb250V2VpZ2h0Qm9sZFwiLCBcImh0bWxGb250U2l6ZVwiLCBcImFsbFZhcmlhbnRzXCIsIFwicHhUb1JlbVwiXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGZvbnRTaXplICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGBmb250U2l6ZWAgaXMgcmVxdWlyZWQgdG8gYmUgYSBudW1iZXIuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBodG1sRm9udFNpemUgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogYGh0bWxGb250U2l6ZWAgaXMgcmVxdWlyZWQgdG8gYmUgYSBudW1iZXIuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvZWYgPSBmb250U2l6ZSAvIDE0O1xuXG4gIHZhciBweFRvUmVtID0gcHhUb1JlbTIgfHwgZnVuY3Rpb24gKHNpemUpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoc2l6ZSAvIGh0bWxGb250U2l6ZSAqIGNvZWYsIFwicmVtXCIpO1xuICB9O1xuXG4gIHZhciBidWlsZFZhcmlhbnQgPSBmdW5jdGlvbiBidWlsZFZhcmlhbnQoZm9udFdlaWdodCwgc2l6ZSwgbGluZUhlaWdodCwgbGV0dGVyU3BhY2luZywgY2FzaW5nKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0LFxuICAgICAgZm9udFNpemU6IHB4VG9SZW0oc2l6ZSksXG4gICAgICAvLyBVbml0bGVzcyBmb2xsb3dpbmcgaHR0cHM6Ly9tZXllcndlYi5jb20vZXJpYy90aG91Z2h0cy8yMDA2LzAyLzA4L3VuaXRsZXNzLWxpbmUtaGVpZ2h0cy9cbiAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHRcbiAgICB9LCBmb250RmFtaWx5ID09PSBkZWZhdWx0Rm9udEZhbWlseSA/IHtcbiAgICAgIGxldHRlclNwYWNpbmc6IFwiXCIuY29uY2F0KHJvdW5kKGxldHRlclNwYWNpbmcgLyBzaXplKSwgXCJlbVwiKVxuICAgIH0gOiB7fSwgY2FzaW5nLCBhbGxWYXJpYW50cyk7XG4gIH07XG5cbiAgdmFyIHZhcmlhbnRzID0ge1xuICAgIGgxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodExpZ2h0LCA5NiwgMS4xNjcsIC0xLjUpLFxuICAgIGgyOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodExpZ2h0LCA2MCwgMS4yLCAtMC41KSxcbiAgICBoMzogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCA0OCwgMS4xNjcsIDApLFxuICAgIGg0OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDM0LCAxLjIzNSwgMC4yNSksXG4gICAgaDU6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMjQsIDEuMzM0LCAwKSxcbiAgICBoNjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRNZWRpdW0sIDIwLCAxLjYsIDAuMTUpLFxuICAgIHN1YnRpdGxlMTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNiwgMS43NSwgMC4xNSksXG4gICAgc3VidGl0bGUyOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMTQsIDEuNTcsIDAuMSksXG4gICAgYm9keTE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTYsIDEuNSwgMC4xNSksXG4gICAgYm9keTI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTQsIDEuNDMsIDAuMTUpLFxuICAgIGJ1dHRvbjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRNZWRpdW0sIDE0LCAxLjc1LCAwLjQsIGNhc2VBbGxDYXBzKSxcbiAgICBjYXB0aW9uOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDEyLCAxLjY2LCAwLjQpLFxuICAgIG92ZXJsaW5lOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDEyLCAyLjY2LCAxLCBjYXNlQWxsQ2FwcylcbiAgfTtcbiAgcmV0dXJuIGRlZXBtZXJnZShfZXh0ZW5kcyh7XG4gICAgaHRtbEZvbnRTaXplOiBodG1sRm9udFNpemUsXG4gICAgcHhUb1JlbTogcHhUb1JlbSxcbiAgICByb3VuZDogcm91bmRXaXRoRGVwcmVjYXRpb25XYXJuaW5nLFxuICAgIC8vIFRPRE8gdjU6IHJlbW92ZVxuICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IGZvbnRTaXplLFxuICAgIGZvbnRXZWlnaHRMaWdodDogZm9udFdlaWdodExpZ2h0LFxuICAgIGZvbnRXZWlnaHRSZWd1bGFyOiBmb250V2VpZ2h0UmVndWxhcixcbiAgICBmb250V2VpZ2h0TWVkaXVtOiBmb250V2VpZ2h0TWVkaXVtLFxuICAgIGZvbnRXZWlnaHRCb2xkOiBmb250V2VpZ2h0Qm9sZFxuICB9LCB2YXJpYW50cyksIG90aGVyLCB7XG4gICAgY2xvbmU6IGZhbHNlIC8vIE5vIG5lZWQgdG8gY2xvbmUgZGVlcFxuXG4gIH0pO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gaXNVbml0bGVzcyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHBhcnNlRmxvYXQodmFsdWUpKS5sZW5ndGggPT09IFN0cmluZyh2YWx1ZSkubGVuZ3RoO1xufSAvLyBQb3J0ZWQgZnJvbSBDb21wYXNzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vQ29tcGFzcy9jb21wYXNzL2Jsb2IvbWFzdGVyL2NvcmUvc3R5bGVzaGVldHMvY29tcGFzcy90eXBvZ3JhcGh5L191bml0cy5zY3NzXG4vLyBFbXVsYXRlIHRoZSBzYXNzIGZ1bmN0aW9uIFwidW5pdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbml0KGlucHV0KSB7XG4gIHJldHVybiBTdHJpbmcoaW5wdXQpLm1hdGNoKC9bXFxkLlxcLStdKlxccyooLiopLylbMV0gfHwgJyc7XG59IC8vIEVtdWxhdGUgdGhlIHNhc3MgZnVuY3Rpb24gXCJ1bml0bGVzc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXRsZXNzKGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChsZW5ndGgpO1xufSAvLyBDb252ZXJ0IGFueSBDU1MgPGxlbmd0aD4gb3IgPHBlcmNlbnRhZ2U+IHZhbHVlIHRvIGFueSBhbm90aGVyLlxuLy8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vS3lsZUFNYXRoZXdzL2NvbnZlcnQtY3NzLWxlbmd0aFxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydExlbmd0aChiYXNlRm9udFNpemUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChsZW5ndGgsIHRvVW5pdCkge1xuICAgIHZhciBmcm9tVW5pdCA9IGdldFVuaXQobGVuZ3RoKTsgLy8gT3B0aW1pemUgZm9yIGNhc2VzIHdoZXJlIGBmcm9tYCBhbmQgYHRvYCB1bml0cyBhcmUgYWNjaWRlbnRhbGx5IHRoZSBzYW1lLlxuXG4gICAgaWYgKGZyb21Vbml0ID09PSB0b1VuaXQpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSAvLyBDb252ZXJ0IGlucHV0IGxlbmd0aCB0byBwaXhlbHMuXG5cblxuICAgIHZhciBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKTtcblxuICAgIGlmIChmcm9tVW5pdCAhPT0gJ3B4Jykge1xuICAgICAgaWYgKGZyb21Vbml0ID09PSAnZW0nKSB7XG4gICAgICAgIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpICogdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIGlmIChmcm9tVW5pdCA9PT0gJ3JlbScpIHtcbiAgICAgICAgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCkgKiB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICB9XG4gICAgfSAvLyBDb252ZXJ0IGxlbmd0aCBpbiBwaXhlbHMgdG8gdGhlIG91dHB1dCB1bml0XG5cblxuICAgIHZhciBvdXRwdXRMZW5ndGggPSBweExlbmd0aDtcblxuICAgIGlmICh0b1VuaXQgIT09ICdweCcpIHtcbiAgICAgIGlmICh0b1VuaXQgPT09ICdlbScpIHtcbiAgICAgICAgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGggLyB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRvVW5pdCA9PT0gJ3JlbScpIHtcbiAgICAgICAgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGggLyB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZUZsb2F0KG91dHB1dExlbmd0aC50b0ZpeGVkKDUpKSArIHRvVW5pdDtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhbGlnblByb3BlcnR5KF9yZWYpIHtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICBncmlkID0gX3JlZi5ncmlkO1xuICB2YXIgc2l6ZUJlbG93ID0gc2l6ZSAtIHNpemUgJSBncmlkO1xuICB2YXIgc2l6ZUFib3ZlID0gc2l6ZUJlbG93ICsgZ3JpZDtcbiAgcmV0dXJuIHNpemUgLSBzaXplQmVsb3cgPCBzaXplQWJvdmUgLSBzaXplID8gc2l6ZUJlbG93IDogc2l6ZUFib3ZlO1xufSAvLyBmb250R3JpZCBmaW5kcyBhIG1pbmltYWwgZ3JpZCAoaW4gcmVtKSBmb3IgdGhlIGZvbnRTaXplIHZhbHVlcyBzbyB0aGF0IHRoZVxuLy8gbGluZUhlaWdodCBmYWxscyB1bmRlciBhIHggcGl4ZWxzIGdyaWQsIDRweCBpbiB0aGUgY2FzZSBvZiBNYXRlcmlhbCBEZXNpZ24sXG4vLyB3aXRob3V0IGNoYW5naW5nIHRoZSByZWxhdGl2ZSBsaW5lIGhlaWdodFxuXG5leHBvcnQgZnVuY3Rpb24gZm9udEdyaWQoX3JlZjIpIHtcbiAgdmFyIGxpbmVIZWlnaHQgPSBfcmVmMi5saW5lSGVpZ2h0LFxuICAgICAgcGl4ZWxzID0gX3JlZjIucGl4ZWxzLFxuICAgICAgaHRtbEZvbnRTaXplID0gX3JlZjIuaHRtbEZvbnRTaXplO1xuICByZXR1cm4gcGl4ZWxzIC8gKGxpbmVIZWlnaHQgKiBodG1sRm9udFNpemUpO1xufVxuLyoqXG4gKiBnZW5lcmF0ZSBhIHJlc3BvbnNpdmUgdmVyc2lvbiBvZiBhIGdpdmVuIENTUyBwcm9wZXJ0eVxuICogQGV4YW1wbGVcbiAqIHJlc3BvbnNpdmVQcm9wZXJ0eSh7XG4gKiAgIGNzc1Byb3BlcnR5OiAnZm9udFNpemUnLFxuICogICBtaW46IDE1LFxuICogICBtYXg6IDIwLFxuICogICB1bml0OiAncHgnLFxuICogICBicmVha3BvaW50czogWzMwMCwgNjAwXSxcbiAqIH0pXG4gKlxuICogLy8gdGhpcyByZXR1cm5zXG4gKlxuICoge1xuICogICBmb250U2l6ZTogJzE1cHgnLFxuICogICAnQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpJzoge1xuICogICAgIGZvbnRTaXplOiAnMTcuNXB4JyxcbiAqICAgfSxcbiAqICAgJ0BtZWRpYSAobWluLXdpZHRoOjYwMHB4KSc6IHtcbiAqICAgICBmb250U2l6ZTogJzIwcHgnLFxuICogICB9LFxuICogfVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY3NzUHJvcGVydHkgLSBUaGUgQ1NTIHByb3BlcnR5IHRvIGJlIG1hZGUgcmVzcG9uc2l2ZVxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5taW4gLSBUaGUgc21hbGxlc3QgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eVxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5tYXggLSBUaGUgbGFyZ2VzdCB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5XG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy51bml0XSAtIFRoZSB1bml0IHRvIGJlIHVzZWQgZm9yIHRoZSBDU1MgcHJvcGVydHlcbiAqIEBwYXJhbSB7QXJyYXkubnVtYmVyfSBbcGFyYW1zLmJyZWFrcG9pbnRzXSAgLSBBbiBhcnJheSBvZiBicmVha3BvaW50c1xuICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbXMuYWxpZ25TdGVwXSAtIFJvdW5kIHNjYWxlZCB2YWx1ZSB0byBmYWxsIHVuZGVyIHRoaXMgZ3JpZFxuICogQHJldHVybnMge09iamVjdH0gcmVzcG9uc2l2ZSBzdHlsZXMgZm9yIHtwYXJhbXMuY3NzUHJvcGVydHl9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3BvbnNpdmVQcm9wZXJ0eShfcmVmMykge1xuICB2YXIgY3NzUHJvcGVydHkgPSBfcmVmMy5jc3NQcm9wZXJ0eSxcbiAgICAgIG1pbiA9IF9yZWYzLm1pbixcbiAgICAgIG1heCA9IF9yZWYzLm1heCxcbiAgICAgIF9yZWYzJHVuaXQgPSBfcmVmMy51bml0LFxuICAgICAgdW5pdCA9IF9yZWYzJHVuaXQgPT09IHZvaWQgMCA/ICdyZW0nIDogX3JlZjMkdW5pdCxcbiAgICAgIF9yZWYzJGJyZWFrcG9pbnRzID0gX3JlZjMuYnJlYWtwb2ludHMsXG4gICAgICBicmVha3BvaW50cyA9IF9yZWYzJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyBbNjAwLCA5NjAsIDEyODBdIDogX3JlZjMkYnJlYWtwb2ludHMsXG4gICAgICBfcmVmMyR0cmFuc2Zvcm0gPSBfcmVmMy50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmMyR0cmFuc2Zvcm0gPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMyR0cmFuc2Zvcm07XG5cbiAgdmFyIG91dHB1dCA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgY3NzUHJvcGVydHksIFwiXCIuY29uY2F0KG1pbikuY29uY2F0KHVuaXQpKTtcblxuICB2YXIgZmFjdG9yID0gKG1heCAtIG1pbikgLyBicmVha3BvaW50c1ticmVha3BvaW50cy5sZW5ndGggLSAxXTtcbiAgYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoYnJlYWtwb2ludCkge1xuICAgIHZhciB2YWx1ZSA9IG1pbiArIGZhY3RvciAqIGJyZWFrcG9pbnQ7XG5cbiAgICBpZiAodHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgb3V0cHV0W1wiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KGJyZWFrcG9pbnQsIFwicHgpXCIpXSA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgY3NzUHJvcGVydHksIFwiXCIuY29uY2F0KE1hdGgucm91bmQodmFsdWUgKiAxMDAwMCkgLyAxMDAwMCkuY29uY2F0KHVuaXQpKTtcbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59IiwiaW1wb3J0IGNyZWF0ZVRoZW1lIGZyb20gJy4vY3JlYXRlVGhlbWUnO1xudmFyIGRlZmF1bHRUaGVtZSA9IGNyZWF0ZVRoZW1lKCk7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VGhlbWU7IiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvck1hbmlwdWxhdG9yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlVGhlbWUsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnLi9jcmVhdGVUaGVtZSc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN0YWJsZV9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUgfSBmcm9tICcuL2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVN0eWxlcyB9IGZyb20gJy4vY3JlYXRlU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFrZVN0eWxlcyB9IGZyb20gJy4vbWFrZVN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlc3BvbnNpdmVGb250U2l6ZXMgfSBmcm9tICcuL3Jlc3BvbnNpdmVGb250U2l6ZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHlsZWQgfSBmcm9tICcuL3N0eWxlZCc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRpb25zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVGhlbWUgfSBmcm9tICcuL3VzZVRoZW1lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFN0eWxlcyB9IGZyb20gJy4vd2l0aFN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhUaGVtZSB9IGZyb20gJy4vd2l0aFRoZW1lJztcbmV4cG9ydCB7IGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lLCBqc3NQcmVzZXQsIFNlcnZlclN0eWxlU2hlZXRzLCBTdHlsZXNQcm92aWRlciwgVGhlbWVQcm92aWRlciBhcyBNdWlUaGVtZVByb3ZpZGVyLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIGFzIG1ha2VTdHlsZXNXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5cbmZ1bmN0aW9uIG1ha2VTdHlsZXMoc3R5bGVzT3JDcmVhdG9yKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgcmV0dXJuIG1ha2VTdHlsZXNXaXRob3V0RGVmYXVsdChzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxuICB9LCBvcHRpb25zKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXM7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcbmltcG9ydCB7IGlzVW5pdGxlc3MsIGNvbnZlcnRMZW5ndGgsIHJlc3BvbnNpdmVQcm9wZXJ0eSwgYWxpZ25Qcm9wZXJ0eSwgZm9udEdyaWQgfSBmcm9tICcuL2Nzc1V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc3BvbnNpdmVGb250U2l6ZXModGhlbWVJbnB1dCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfb3B0aW9ucyRicmVha3BvaW50cyA9IG9wdGlvbnMuYnJlYWtwb2ludHMsXG4gICAgICBicmVha3BvaW50cyA9IF9vcHRpb25zJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyBbJ3NtJywgJ21kJywgJ2xnJ10gOiBfb3B0aW9ucyRicmVha3BvaW50cyxcbiAgICAgIF9vcHRpb25zJGRpc2FibGVBbGlnbiA9IG9wdGlvbnMuZGlzYWJsZUFsaWduLFxuICAgICAgZGlzYWJsZUFsaWduID0gX29wdGlvbnMkZGlzYWJsZUFsaWduID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGRpc2FibGVBbGlnbixcbiAgICAgIF9vcHRpb25zJGZhY3RvciA9IG9wdGlvbnMuZmFjdG9yLFxuICAgICAgZmFjdG9yID0gX29wdGlvbnMkZmFjdG9yID09PSB2b2lkIDAgPyAyIDogX29wdGlvbnMkZmFjdG9yLFxuICAgICAgX29wdGlvbnMkdmFyaWFudHMgPSBvcHRpb25zLnZhcmlhbnRzLFxuICAgICAgdmFyaWFudHMgPSBfb3B0aW9ucyR2YXJpYW50cyA9PT0gdm9pZCAwID8gWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdzdWJ0aXRsZTEnLCAnc3VidGl0bGUyJywgJ2JvZHkxJywgJ2JvZHkyJywgJ2NhcHRpb24nLCAnYnV0dG9uJywgJ292ZXJsaW5lJ10gOiBfb3B0aW9ucyR2YXJpYW50cztcblxuICB2YXIgdGhlbWUgPSBfZXh0ZW5kcyh7fSwgdGhlbWVJbnB1dCk7XG5cbiAgdGhlbWUudHlwb2dyYXBoeSA9IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5KTtcbiAgdmFyIHR5cG9ncmFwaHkgPSB0aGVtZS50eXBvZ3JhcGh5OyAvLyBDb252ZXJ0IGJldHdlZW4gY3NzIGxlbmd0aHMgZS5nLiBlbS0+cHggb3IgcHgtPnJlbVxuICAvLyBTZXQgdGhlIGJhc2VGb250U2l6ZSBmb3IgeW91ciBwcm9qZWN0LiBEZWZhdWx0cyB0byAxNnB4IChhbHNvIHRoZSBicm93c2VyIGRlZmF1bHQpLlxuXG4gIHZhciBjb252ZXJ0ID0gY29udmVydExlbmd0aCh0eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSk7XG4gIHZhciBicmVha3BvaW50VmFsdWVzID0gYnJlYWtwb2ludHMubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlc1t4XTtcbiAgfSk7XG4gIHZhcmlhbnRzLmZvckVhY2goZnVuY3Rpb24gKHZhcmlhbnQpIHtcbiAgICB2YXIgc3R5bGUgPSB0eXBvZ3JhcGh5W3ZhcmlhbnRdO1xuICAgIHZhciByZW1Gb250U2l6ZSA9IHBhcnNlRmxvYXQoY29udmVydChzdHlsZS5mb250U2l6ZSwgJ3JlbScpKTtcblxuICAgIGlmIChyZW1Gb250U2l6ZSA8PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1heEZvbnRTaXplID0gcmVtRm9udFNpemU7XG4gICAgdmFyIG1pbkZvbnRTaXplID0gMSArIChtYXhGb250U2l6ZSAtIDEpIC8gZmFjdG9yO1xuICAgIHZhciBsaW5lSGVpZ2h0ID0gc3R5bGUubGluZUhlaWdodDtcblxuICAgIGlmICghaXNVbml0bGVzcyhsaW5lSGVpZ2h0KSAmJiAhZGlzYWJsZUFsaWduKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVW5zdXBwb3J0ZWQgbm9uLXVuaXRsZXNzIGxpbmUgaGVpZ2h0IHdpdGggZ3JpZCBhbGlnbm1lbnQuXFxuVXNlIHVuaXRsZXNzIGxpbmUgaGVpZ2h0cyBpbnN0ZWFkLlwiIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg2KSk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1VuaXRsZXNzKGxpbmVIZWlnaHQpKSB7XG4gICAgICAvLyBtYWtlIGl0IHVuaXRsZXNzXG4gICAgICBsaW5lSGVpZ2h0ID0gcGFyc2VGbG9hdChjb252ZXJ0KGxpbmVIZWlnaHQsICdyZW0nKSkgLyBwYXJzZUZsb2F0KHJlbUZvbnRTaXplKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGlmICghZGlzYWJsZUFsaWduKSB7XG4gICAgICB0cmFuc2Zvcm0gPSBmdW5jdGlvbiB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGFsaWduUHJvcGVydHkoe1xuICAgICAgICAgIHNpemU6IHZhbHVlLFxuICAgICAgICAgIGdyaWQ6IGZvbnRHcmlkKHtcbiAgICAgICAgICAgIHBpeGVsczogNCxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQsXG4gICAgICAgICAgICBodG1sRm9udFNpemU6IHR5cG9ncmFwaHkuaHRtbEZvbnRTaXplXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHR5cG9ncmFwaHlbdmFyaWFudF0gPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHJlc3BvbnNpdmVQcm9wZXJ0eSh7XG4gICAgICBjc3NQcm9wZXJ0eTogJ2ZvbnRTaXplJyxcbiAgICAgIG1pbjogbWluRm9udFNpemUsXG4gICAgICBtYXg6IG1heEZvbnRTaXplLFxuICAgICAgdW5pdDogJ3JlbScsXG4gICAgICBicmVha3BvaW50czogYnJlYWtwb2ludFZhbHVlcyxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgfSkpO1xuICB9KTtcbiAgcmV0dXJuIHRoZW1lO1xufSIsInZhciBzaGFkb3dLZXlVbWJyYU9wYWNpdHkgPSAwLjI7XG52YXIgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbnZhciBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRvdygpIHtcbiAgcmV0dXJuIFtcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDIgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDMgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbM10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDQgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDUgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDYgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDcgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbN10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDggPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzEwXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMTEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMTFdLCBcInB4IHJnYmEoMCwwLDAsXCIpLmNvbmNhdChzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSwgXCIpXCIpXS5qb2luKCcsJyk7XG59IC8vIFZhbHVlcyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvYmU4NzQ3Zjk0NTc0NjY5Y2I1ZTdhZGQxYTdjNTRmYTQxYTg5Y2VjNy9wYWNrYWdlcy9tZGMtZWxldmF0aW9uL192YXJpYWJsZXMuc2Nzc1xuXG5cbnZhciBzaGFkb3dzID0gWydub25lJywgY3JlYXRlU2hhZG93KDAsIDIsIDEsIC0xLCAwLCAxLCAxLCAwLCAwLCAxLCAzLCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDEsIC0yLCAwLCAyLCAyLCAwLCAwLCAxLCA1LCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDMsIC0yLCAwLCAzLCA0LCAwLCAwLCAxLCA4LCAwKSwgY3JlYXRlU2hhZG93KDAsIDIsIDQsIC0xLCAwLCA0LCA1LCAwLCAwLCAxLCAxMCwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCA1LCAtMSwgMCwgNSwgOCwgMCwgMCwgMSwgMTQsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgNSwgLTEsIDAsIDYsIDEwLCAwLCAwLCAxLCAxOCwgMCksIGNyZWF0ZVNoYWRvdygwLCA0LCA1LCAtMiwgMCwgNywgMTAsIDEsIDAsIDIsIDE2LCAxKSwgY3JlYXRlU2hhZG93KDAsIDUsIDUsIC0zLCAwLCA4LCAxMCwgMSwgMCwgMywgMTQsIDIpLCBjcmVhdGVTaGFkb3coMCwgNSwgNiwgLTMsIDAsIDksIDEyLCAxLCAwLCAzLCAxNiwgMiksIGNyZWF0ZVNoYWRvdygwLCA2LCA2LCAtMywgMCwgMTAsIDE0LCAxLCAwLCA0LCAxOCwgMyksIGNyZWF0ZVNoYWRvdygwLCA2LCA3LCAtNCwgMCwgMTEsIDE1LCAxLCAwLCA0LCAyMCwgMyksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTIsIDE3LCAyLCAwLCA1LCAyMiwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTMsIDE5LCAyLCAwLCA1LCAyNCwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA5LCAtNCwgMCwgMTQsIDIxLCAyLCAwLCA1LCAyNiwgNCksIGNyZWF0ZVNoYWRvdygwLCA4LCA5LCAtNSwgMCwgMTUsIDIyLCAyLCAwLCA2LCAyOCwgNSksIGNyZWF0ZVNoYWRvdygwLCA4LCAxMCwgLTUsIDAsIDE2LCAyNCwgMiwgMCwgNiwgMzAsIDUpLCBjcmVhdGVTaGFkb3coMCwgOCwgMTEsIC01LCAwLCAxNywgMjYsIDIsIDAsIDYsIDMyLCA1KSwgY3JlYXRlU2hhZG93KDAsIDksIDExLCAtNSwgMCwgMTgsIDI4LCAyLCAwLCA3LCAzNCwgNiksIGNyZWF0ZVNoYWRvdygwLCA5LCAxMiwgLTYsIDAsIDE5LCAyOSwgMiwgMCwgNywgMzYsIDYpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDEzLCAtNiwgMCwgMjAsIDMxLCAzLCAwLCA4LCAzOCwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTMsIC02LCAwLCAyMSwgMzMsIDMsIDAsIDgsIDQwLCA3KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxNCwgLTYsIDAsIDIyLCAzNSwgMywgMCwgOCwgNDIsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTEsIDE0LCAtNywgMCwgMjMsIDM2LCAzLCAwLCA5LCA0NCwgOCksIGNyZWF0ZVNoYWRvdygwLCAxMSwgMTUsIC03LCAwLCAyNCwgMzgsIDMsIDAsIDksIDQ2LCA4KV07XG5leHBvcnQgZGVmYXVsdCBzaGFkb3dzOyIsInZhciBzaGFwZSA9IHtcbiAgYm9yZGVyUmFkaXVzOiA0XG59O1xuZXhwb3J0IGRlZmF1bHQgc2hhcGU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBzdHlsZWQgYXMgc3R5bGVkV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuXG52YXIgc3R5bGVkID0gZnVuY3Rpb24gc3R5bGVkKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50Q3JlYXRvciA9IHN0eWxlZFdpdGhvdXREZWZhdWx0KENvbXBvbmVudCk7XG4gIHJldHVybiBmdW5jdGlvbiAoc3R5bGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY29tcG9uZW50Q3JlYXRvcihzdHlsZSwgX2V4dGVuZHMoe1xuICAgICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgICB9LCBvcHRpb25zKSk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQ7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbi8vIEZvbGxvdyBodHRwczovL21hdGVyaWFsLmdvb2dsZS5jb20vbW90aW9uL2R1cmF0aW9uLWVhc2luZy5odG1sI2R1cmF0aW9uLWVhc2luZy1uYXR1cmFsLWVhc2luZy1jdXJ2ZXNcbi8vIHRvIGxlYXJuIHRoZSBjb250ZXh0IGluIHdoaWNoIGVhY2ggZWFzaW5nIHNob3VsZCBiZSB1c2VkLlxuZXhwb3J0IHZhciBlYXNpbmcgPSB7XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgY29tbW9uIGVhc2luZyBjdXJ2ZS5cbiAgZWFzZUluT3V0OiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgZW50ZXIgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5IGZyb20gb2ZmLXNjcmVlbiBhbmRcbiAgLy8gc2xvd2x5IGRlY2VsZXJhdGUgdG8gYSByZXN0aW5nIHBvaW50LlxuICBlYXNlT3V0OiAnY3ViaWMtYmV6aWVyKDAuMCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgbGVhdmUgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5LiBUaGV5IGRvIG5vdCBkZWNlbGVyYXRlIHdoZW4gb2ZmLXNjcmVlbi5cbiAgZWFzZUluOiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSknLFxuICAvLyBUaGUgc2hhcnAgY3VydmUgaXMgdXNlZCBieSBvYmplY3RzIHRoYXQgbWF5IHJldHVybiB0byB0aGUgc2NyZWVuIGF0IGFueSB0aW1lLlxuICBzaGFycDogJ2N1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSknXG59OyAvLyBGb2xsb3cgaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9kdXJhdGlvbi1lYXNpbmcuaHRtbCNkdXJhdGlvbi1lYXNpbmctY29tbW9uLWR1cmF0aW9uc1xuLy8gdG8gbGVhcm4gd2hlbiB1c2Ugd2hhdCB0aW1pbmdcblxuZXhwb3J0IHZhciBkdXJhdGlvbiA9IHtcbiAgc2hvcnRlc3Q6IDE1MCxcbiAgc2hvcnRlcjogMjAwLFxuICBzaG9ydDogMjUwLFxuICAvLyBtb3N0IGJhc2ljIHJlY29tbWVuZGVkIHRpbWluZ1xuICBzdGFuZGFyZDogMzAwLFxuICAvLyB0aGlzIGlzIHRvIGJlIHVzZWQgaW4gY29tcGxleCBhbmltYXRpb25zXG4gIGNvbXBsZXg6IDM3NSxcbiAgLy8gcmVjb21tZW5kZWQgd2hlbiBzb21ldGhpbmcgaXMgZW50ZXJpbmcgc2NyZWVuXG4gIGVudGVyaW5nU2NyZWVuOiAyMjUsXG4gIC8vIHJlY29tbWVuZGVkIHdoZW4gc29tZXRoaW5nIGlzIGxlYXZpbmcgc2NyZWVuXG4gIGxlYXZpbmdTY3JlZW46IDE5NVxufTtcblxuZnVuY3Rpb24gZm9ybWF0TXMobWlsbGlzZWNvbmRzKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKG1pbGxpc2Vjb25kcyksIFwibXNcIik7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0ucHJvcFxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLmR1cmF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0uZWFzaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW0uZGVsYXlcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWFzaW5nOiBlYXNpbmcsXG4gIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJ2FsbCddO1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHZhciBfb3B0aW9ucyRkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgIGR1cmF0aW9uT3B0aW9uID0gX29wdGlvbnMkZHVyYXRpb24gPT09IHZvaWQgMCA/IGR1cmF0aW9uLnN0YW5kYXJkIDogX29wdGlvbnMkZHVyYXRpb24sXG4gICAgICAgIF9vcHRpb25zJGVhc2luZyA9IG9wdGlvbnMuZWFzaW5nLFxuICAgICAgICBlYXNpbmdPcHRpb24gPSBfb3B0aW9ucyRlYXNpbmcgPT09IHZvaWQgMCA/IGVhc2luZy5lYXNlSW5PdXQgOiBfb3B0aW9ucyRlYXNpbmcsXG4gICAgICAgIF9vcHRpb25zJGRlbGF5ID0gb3B0aW9ucy5kZWxheSxcbiAgICAgICAgZGVsYXkgPSBfb3B0aW9ucyRkZWxheSA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJGRlbGF5LFxuICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJkdXJhdGlvblwiLCBcImVhc2luZ1wiLCBcImRlbGF5XCJdKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgICAgIH07XG5cbiAgICAgIHZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgICAgfTtcblxuICAgICAgaWYgKCFpc1N0cmluZyhwcm9wcykgJiYgIUFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcInByb3BzXCIgbXVzdCBiZSBhIHN0cmluZyBvciBBcnJheS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc051bWJlcihkdXJhdGlvbk9wdGlvbikgJiYgIWlzU3RyaW5nKGR1cmF0aW9uT3B0aW9uKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFxcXCJkdXJhdGlvblxcXCIgbXVzdCBiZSBhIG51bWJlciBvciBhIHN0cmluZyBidXQgZm91bmQgXCIuY29uY2F0KGR1cmF0aW9uT3B0aW9uLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU3RyaW5nKGVhc2luZ09wdGlvbikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwiZWFzaW5nXCIgbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc051bWJlcihkZWxheSkgJiYgIWlzU3RyaW5nKGRlbGF5KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJkZWxheVwiIG11c3QgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhvdGhlcikubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVW5yZWNvZ25pemVkIGFyZ3VtZW50KHMpIFtcIi5jb25jYXQoT2JqZWN0LmtleXMob3RoZXIpLmpvaW4oJywnKSwgXCJdLlwiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KHByb3BzKSA/IHByb3BzIDogW3Byb3BzXSkubWFwKGZ1bmN0aW9uIChhbmltYXRlZFByb3ApIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChhbmltYXRlZFByb3AsIFwiIFwiKS5jb25jYXQodHlwZW9mIGR1cmF0aW9uT3B0aW9uID09PSAnc3RyaW5nJyA/IGR1cmF0aW9uT3B0aW9uIDogZm9ybWF0TXMoZHVyYXRpb25PcHRpb24pLCBcIiBcIikuY29uY2F0KGVhc2luZ09wdGlvbiwgXCIgXCIpLmNvbmNhdCh0eXBlb2YgZGVsYXkgPT09ICdzdHJpbmcnID8gZGVsYXkgOiBmb3JtYXRNcyhkZWxheSkpO1xuICAgIH0pLmpvaW4oJywnKTtcbiAgfSxcbiAgZ2V0QXV0b0hlaWdodER1cmF0aW9uOiBmdW5jdGlvbiBnZXRBdXRvSGVpZ2h0RHVyYXRpb24oaGVpZ2h0KSB7XG4gICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBjb25zdGFudCA9IGhlaWdodCAvIDM2OyAvLyBodHRwczovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPSg0KyUyQisxNSsqKyh4KyUyRiszNispKyoqKzAuMjUrJTJCKyh4KyUyRiszNikrJTJGKzUpKyorMTBcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKCg0ICsgMTUgKiBNYXRoLnBvdyhjb25zdGFudCwgMC4yNSkgKyBjb25zdGFudCAvIDUpICogMTApO1xuICB9XG59OyIsImltcG9ydCB7IHVzZVRoZW1lIGFzIHVzZVRoZW1lV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZVdpdGhvdXREZWZhdWx0KCkgfHwgZGVmYXVsdFRoZW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZSh0aGVtZSk7XG4gIH1cblxuICByZXR1cm4gdGhlbWU7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIGFzIHdpdGhTdHlsZXNXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZXMoc3R5bGVzT3JDcmVhdG9yLCBvcHRpb25zKSB7XG4gIHJldHVybiB3aXRoU3R5bGVzV2l0aG91dERlZmF1bHQoc3R5bGVzT3JDcmVhdG9yLCBfZXh0ZW5kcyh7XG4gICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgfSwgb3B0aW9ucykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzOyIsImltcG9ydCB7IHdpdGhUaGVtZUNyZWF0b3IgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xudmFyIHdpdGhUaGVtZSA9IHdpdGhUaGVtZUNyZWF0b3Ioe1xuICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWU7IiwiLy8gV2UgbmVlZCB0byBjZW50cmFsaXplIHRoZSB6SW5kZXggZGVmaW5pdGlvbnMgYXMgdGhleSB3b3JrXG4vLyBsaWtlIGdsb2JhbCB2YWx1ZXMgaW4gdGhlIGJyb3dzZXIuXG52YXIgekluZGV4ID0ge1xuICBtb2JpbGVTdGVwcGVyOiAxMDAwLFxuICBzcGVlZERpYWw6IDEwNTAsXG4gIGFwcEJhcjogMTEwMCxcbiAgZHJhd2VyOiAxMjAwLFxuICBtb2RhbDogMTMwMCxcbiAgc25hY2tiYXI6IDE0MDAsXG4gIHRvb2x0aXA6IDE1MDBcbn07XG5leHBvcnQgZGVmYXVsdCB6SW5kZXg7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vdXNlU2Nyb2xsVHJpZ2dlcic7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBkZWZhdWx0VHJpZ2dlcihzdG9yZSwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkZGlzYWJsZUh5c3RlID0gb3B0aW9ucy5kaXNhYmxlSHlzdGVyZXNpcyxcbiAgICAgIGRpc2FibGVIeXN0ZXJlc2lzID0gX29wdGlvbnMkZGlzYWJsZUh5c3RlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGRpc2FibGVIeXN0ZSxcbiAgICAgIF9vcHRpb25zJHRocmVzaG9sZCA9IG9wdGlvbnMudGhyZXNob2xkLFxuICAgICAgdGhyZXNob2xkID0gX29wdGlvbnMkdGhyZXNob2xkID09PSB2b2lkIDAgPyAxMDAgOiBfb3B0aW9ucyR0aHJlc2hvbGQsXG4gICAgICB0YXJnZXQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIHByZXZpb3VzID0gc3RvcmUuY3VycmVudDtcblxuICBpZiAodGFyZ2V0KSB7XG4gICAgLy8gR2V0IHZlcnRpY2FsIHNjcm9sbFxuICAgIHN0b3JlLmN1cnJlbnQgPSB0YXJnZXQucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IHRhcmdldC5wYWdlWU9mZnNldCA6IHRhcmdldC5zY3JvbGxUb3A7XG4gIH1cblxuICBpZiAoIWRpc2FibGVIeXN0ZXJlc2lzICYmIHByZXZpb3VzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoc3RvcmUuY3VycmVudCA8IHByZXZpb3VzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0b3JlLmN1cnJlbnQgPiB0aHJlc2hvbGQ7XG59XG5cbnZhciBkZWZhdWx0VGFyZ2V0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBudWxsO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2Nyb2xsVHJpZ2dlcigpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBfb3B0aW9ucyRnZXRUcmlnZ2VyID0gb3B0aW9ucy5nZXRUcmlnZ2VyLFxuICAgICAgZ2V0VHJpZ2dlciA9IF9vcHRpb25zJGdldFRyaWdnZXIgPT09IHZvaWQgMCA/IGRlZmF1bHRUcmlnZ2VyIDogX29wdGlvbnMkZ2V0VHJpZ2dlcixcbiAgICAgIF9vcHRpb25zJHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0LFxuICAgICAgdGFyZ2V0ID0gX29wdGlvbnMkdGFyZ2V0ID09PSB2b2lkIDAgPyBkZWZhdWx0VGFyZ2V0IDogX29wdGlvbnMkdGFyZ2V0LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgW1wiZ2V0VHJpZ2dlclwiLCBcInRhcmdldFwiXSk7XG5cbiAgdmFyIHN0b3JlID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0VHJpZ2dlcihzdG9yZSwgb3RoZXIpO1xuICB9KSxcbiAgICAgIHRyaWdnZXIgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRUcmlnZ2VyID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcbiAgICAgIHNldFRyaWdnZXIoZ2V0VHJpZ2dlcihzdG9yZSwgX2V4dGVuZHMoe1xuICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgfSwgb3RoZXIpKSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVNjcm9sbCgpOyAvLyBSZS1ldmFsdWF0ZSB0cmlnZ2VyIHdoZW4gZGVwZW5kZW5jaWVzIGNoYW5nZVxuXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07IC8vIFNlZSBPcHRpb24gMy4gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xNDQ3NiNpc3N1ZWNvbW1lbnQtNDcxMTk5MDU1XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbdGFyZ2V0LCBnZXRUcmlnZ2VyLCBKU09OLnN0cmluZ2lmeShvdGhlcildKTtcbiAgcmV0dXJuIHRyaWdnZXI7XG59IiwiaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG4vLyBJdCBzaG91bGQgdG8gYmUgbm90ZWQgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzbid0IGVxdWl2YWxlbnQgdG8gYHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplYC5cbi8vXG4vLyBBIHN0cmljdCBjYXBpdGFsaXphdGlvbiBzaG91bGQgdXBwZXJjYXNlIHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCB3b3JkIGEgdGhlIHNlbnRlbmNlLlxuLy8gV2Ugb25seSBoYW5kbGUgdGhlIGZpcnN0IHdvcmQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogY2FwaXRhbGl6ZShzdHJpbmcpIGV4cGVjdHMgYSBzdHJpbmcgYXJndW1lbnQuXCIgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDcpKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVwcmVjYXRlZFByb3BUeXBlKHZhbGlkYXRvciwgcmVhc29uKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBjb21wb25lbnROYW1lU2FmZSA9IGNvbXBvbmVudE5hbWUgfHwgJzw8YW5vbnltb3VzPj4nO1xuICAgIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgaWYgKHR5cGVvZiBwcm9wc1twcm9wTmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiVGhlIFwiLmNvbmNhdChsb2NhdGlvbiwgXCIgYFwiKS5jb25jYXQocHJvcEZ1bGxOYW1lU2FmZSwgXCJgIG9mIFwiKSArIFwiYFwiLmNvbmNhdChjb21wb25lbnROYW1lU2FmZSwgXCJgIGlzIGRlcHJlY2F0ZWQuIFwiKS5jb25jYXQocmVhc29uKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59IiwiLy8gVE9ETyB2NTogY29uc2lkZXIgdG8gbWFrZSBpdCBwcml2YXRlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRSZWYocmVmLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJlZih2YWx1ZSk7XG4gIH0gZWxzZSBpZiAocmVmKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE0MDk5I2lzc3VlY29tbWVudC00NDAwMTM4OTJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUV2ZW50Q2FsbGJhY2soZm4pIHtcbiAgdmFyIHJlZiA9IFJlYWN0LnVzZVJlZihmbik7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IGZuO1xuICB9KTtcbiAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKDAsIHJlZi5jdXJyZW50KS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gIH0sIFtdKTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc2V0UmVmIGZyb20gJy4vc2V0UmVmJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcmtSZWYocmVmQSwgcmVmQikge1xuICAvKipcbiAgICogVGhpcyB3aWxsIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBpZiB0aGUgcmVmIHByb3BzIGNoYW5nZSBhbmQgYXJlIGRlZmluZWQuXG4gICAqIFRoaXMgbWVhbnMgcmVhY3Qgd2lsbCBjYWxsIHRoZSBvbGQgZm9ya1JlZiB3aXRoIGBudWxsYCBhbmQgdGhlIG5ldyBmb3JrUmVmXG4gICAqIHdpdGggdGhlIHJlZi4gQ2xlYW51cCBuYXR1cmFsbHkgZW1lcmdlcyBmcm9tIHRoaXMgYmVoYXZpb3JcbiAgICovXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocmVmQSA9PSBudWxsICYmIHJlZkIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZWZWYWx1ZSkge1xuICAgICAgc2V0UmVmKHJlZkEsIHJlZlZhbHVlKTtcbiAgICAgIHNldFJlZihyZWZCLCByZWZWYWx1ZSk7XG4gICAgfTtcbiAgfSwgW3JlZkEsIHJlZkJdKTtcbn0iLCIvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9mb2N1cy12aXNpYmxlL2Jsb2IvdjQuMS41L3NyYy9mb2N1cy12aXNpYmxlLmpzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xudmFyIGhhZEtleWJvYXJkRXZlbnQgPSB0cnVlO1xudmFyIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gZmFsc2U7XG52YXIgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0ID0gbnVsbDtcbnZhciBpbnB1dFR5cGVzV2hpdGVsaXN0ID0ge1xuICB0ZXh0OiB0cnVlLFxuICBzZWFyY2g6IHRydWUsXG4gIHVybDogdHJ1ZSxcbiAgdGVsOiB0cnVlLFxuICBlbWFpbDogdHJ1ZSxcbiAgcGFzc3dvcmQ6IHRydWUsXG4gIG51bWJlcjogdHJ1ZSxcbiAgZGF0ZTogdHJ1ZSxcbiAgbW9udGg6IHRydWUsXG4gIHdlZWs6IHRydWUsXG4gIHRpbWU6IHRydWUsXG4gIGRhdGV0aW1lOiB0cnVlLFxuICAnZGF0ZXRpbWUtbG9jYWwnOiB0cnVlXG59O1xuLyoqXG4gKiBDb21wdXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgdGhlXG4gKiBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgYmVpbmcgYWRkZWQsIGkuZS4gd2hldGhlciBpdCBzaG91bGQgYWx3YXlzIG1hdGNoXG4gKiBgOmZvY3VzLXZpc2libGVgIHdoZW4gZm9jdXNlZC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShub2RlKSB7XG4gIHZhciB0eXBlID0gbm9kZS50eXBlLFxuICAgICAgdGFnTmFtZSA9IG5vZGUudGFnTmFtZTtcblxuICBpZiAodGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBpbnB1dFR5cGVzV2hpdGVsaXN0W3R5cGVdICYmICFub2RlLnJlYWRPbmx5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyAmJiAhbm9kZS5yZWFkT25seSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKG5vZGUuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogS2VlcCB0cmFjayBvZiBvdXIga2V5Ym9hcmQgbW9kYWxpdHkgc3RhdGUgd2l0aCBgaGFkS2V5Ym9hcmRFdmVudGAuXG4gKiBJZiB0aGUgbW9zdCByZWNlbnQgdXNlciBpbnRlcmFjdGlvbiB3YXMgdmlhIHRoZSBrZXlib2FyZDtcbiAqIGFuZCB0aGUga2V5IHByZXNzIGRpZCBub3QgaW5jbHVkZSBhIG1ldGEsIGFsdC9vcHRpb24sIG9yIGNvbnRyb2wga2V5O1xuICogdGhlbiB0aGUgbW9kYWxpdHkgaXMga2V5Ym9hcmQuIE90aGVyd2lzZSwgdGhlIG1vZGFsaXR5IGlzIG5vdCBrZXlib2FyZC5cbiAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgaWYgKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbn1cbi8qKlxuICogSWYgYXQgYW55IHBvaW50IGEgdXNlciBjbGlja3Mgd2l0aCBhIHBvaW50aW5nIGRldmljZSwgZW5zdXJlIHRoYXQgd2UgY2hhbmdlXG4gKiB0aGUgbW9kYWxpdHkgYXdheSBmcm9tIGtleWJvYXJkLlxuICogVGhpcyBhdm9pZHMgdGhlIHNpdHVhdGlvbiB3aGVyZSBhIHVzZXIgcHJlc3NlcyBhIGtleSBvbiBhbiBhbHJlYWR5IGZvY3VzZWRcbiAqIGVsZW1lbnQsIGFuZCB0aGVuIGNsaWNrcyBvbiBhIGRpZmZlcmVudCBlbGVtZW50LCBmb2N1c2luZyBpdCB3aXRoIGFcbiAqIHBvaW50aW5nIGRldmljZSwgd2hpbGUgd2Ugc3RpbGwgdGhpbmsgd2UncmUgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gKi9cblxuXG5mdW5jdGlvbiBoYW5kbGVQb2ludGVyRG93bigpIHtcbiAgaGFkS2V5Ym9hcmRFdmVudCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCkge1xuICBpZiAodGhpcy52aXNpYmlsaXR5U3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgLy8gSWYgdGhlIHRhYiBiZWNvbWVzIGFjdGl2ZSBhZ2FpbiwgdGhlIGJyb3dzZXIgd2lsbCBoYW5kbGUgY2FsbGluZyBmb2N1c1xuICAgIC8vIG9uIHRoZSBlbGVtZW50IChTYWZhcmkgYWN0dWFsbHkgY2FsbHMgaXQgdHdpY2UpLlxuICAgIC8vIElmIHRoaXMgdGFiIGNoYW5nZSBjYXVzZWQgYSBibHVyIG9uIGFuIGVsZW1lbnQgd2l0aCBmb2N1cy12aXNpYmxlLFxuICAgIC8vIHJlLWFwcGx5IHRoZSBjbGFzcyB3aGVuIHRoZSB1c2VyIHN3aXRjaGVzIGJhY2sgdG8gdGhlIHRhYi5cbiAgICBpZiAoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkpIHtcbiAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlKGRvYykge1xuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24sIHRydWUpO1xuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlUG9pbnRlckRvd24sIHRydWUpO1xuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBoYW5kbGVQb2ludGVyRG93biwgdHJ1ZSk7XG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlUG9pbnRlckRvd24sIHRydWUpO1xuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UsIHRydWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVhcmRvd24oZG9jKSB7XG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93biwgdHJ1ZSk7XG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVQb2ludGVyRG93biwgdHJ1ZSk7XG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGhhbmRsZVBvaW50ZXJEb3duLCB0cnVlKTtcbiAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVQb2ludGVyRG93biwgdHJ1ZSk7XG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzRm9jdXNWaXNpYmxlKGV2ZW50KSB7XG4gIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gdGFyZ2V0Lm1hdGNoZXMoJzpmb2N1cy12aXNpYmxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7fSAvLyBicm93c2VycyBub3QgaW1wbGVtZW50aW5nIDpmb2N1cy12aXNpYmxlIHdpbGwgdGhyb3cgYSBTeW50YXhFcnJvclxuICAvLyB3ZSB1c2Ugb3VyIG93biBoZXVyaXN0aWMgZm9yIHRob3NlIGJyb3dzZXJzXG4gIC8vIHJldGhyb3cgbWlnaHQgYmUgYmV0dGVyIGlmIGl0J3Mgbm90IHRoZSBleHBlY3RlZCBlcnJvciBidXQgZG8gd2UgcmVhbGx5XG4gIC8vIHdhbnQgdG8gY3Jhc2ggaWYgZm9jdXMtdmlzaWJsZSBtYWxmdW5jdGlvbmVkP1xuICAvLyBubyBuZWVkIGZvciB2YWxpZEZvY3VzVGFyZ2V0IGNoZWNrLiB0aGUgdXNlciBkb2VzIHRoYXQgYnkgYXR0YWNoaW5nIGl0IHRvXG4gIC8vIGZvY3VzYWJsZSBldmVudHMgb25seVxuXG5cbiAgcmV0dXJuIGhhZEtleWJvYXJkRXZlbnQgfHwgZm9jdXNUcmlnZ2Vyc0tleWJvYXJkTW9kYWxpdHkodGFyZ2V0KTtcbn1cbi8qKlxuICogU2hvdWxkIGJlIGNhbGxlZCBpZiBhIGJsdXIgZXZlbnQgaXMgZmlyZWQgb24gYSBmb2N1cy12aXNpYmxlIGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIGhhbmRsZUJsdXJWaXNpYmxlKCkge1xuICAvLyBUbyBkZXRlY3QgYSB0YWIvd2luZG93IHN3aXRjaCwgd2UgbG9vayBmb3IgYSBibHVyIGV2ZW50IGZvbGxvd2VkXG4gIC8vIHJhcGlkbHkgYnkgYSB2aXNpYmlsaXR5IGNoYW5nZS5cbiAgLy8gSWYgd2UgZG9uJ3Qgc2VlIGEgdmlzaWJpbGl0eSBjaGFuZ2Ugd2l0aGluIDEwMG1zLCBpdCdzIHByb2JhYmx5IGFcbiAgLy8gcmVndWxhciBmb2N1cyBjaGFuZ2UuXG4gIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gdHJ1ZTtcbiAgd2luZG93LmNsZWFyVGltZW91dChoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQpO1xuICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSBmYWxzZTtcbiAgfSwgMTAwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSXNGb2N1c1Zpc2libGUoKSB7XG4gIHZhciByZWYgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICB2YXIgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGluc3RhbmNlKTtcblxuICAgIGlmIChub2RlICE9IG51bGwpIHtcbiAgICAgIHByZXBhcmUobm9kZS5vd25lckRvY3VtZW50KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUoaXNGb2N1c1Zpc2libGUpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc0ZvY3VzVmlzaWJsZTogaXNGb2N1c1Zpc2libGUsXG4gICAgb25CbHVyVmlzaWJsZTogaGFuZGxlQmx1clZpc2libGUsXG4gICAgcmVmOiByZWZcbiAgfTtcbn0iLCJcbmNvbnN0IGhleENvbG9yVG9SR0IgPSBmdW5jdGlvbihoZXhDb2xvcikge1xuICBsZXQgZGV0ZWN0U2hvcnRoYW5kID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTsgLy8gIzAwMCB2cyAjMDAwMDAwXG4gIGhleENvbG9yID0gaGV4Q29sb3IucmVwbGFjZShkZXRlY3RTaG9ydGhhbmQsIGZ1bmN0aW9uKG0sIHIsIGcsIGIpIHtcbiAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xuICB9KTtcblxuICBjb25zdCBoZXhfYXJyYXkgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4Q29sb3IpOyAvLyAjMDAwMDAwIHRvICNmZmZmZmZcbiAgcmV0dXJuIGhleF9hcnJheVxuICAgID8ge1xuICAgICAgICByOiBwYXJzZUludChoZXhfYXJyYXlbMV0sIDE2KSwgLy8gMC0yNTVcbiAgICAgICAgZzogcGFyc2VJbnQoaGV4X2FycmF5WzJdLCAxNiksIC8vIDAtMjU1XG4gICAgICAgIGI6IHBhcnNlSW50KGhleF9hcnJheVszXSwgMTYpIC8vIDAtMjU1XG4gICAgICB9XG4gICAgOiBudWxsO1xufTtcblxuY29uc3QgaGV4VG9SR0JBbHBoYSA9IGZ1bmN0aW9uKGhleENvbG9yLCBhbHBoYSkge1xuICBsZXQgcmdiID0gaGV4Q29sb3JUb1JHQihoZXhDb2xvcik7XG4gIHJldHVybiBgcmdiYSgke3JnYi5yfSwke3JnYi5nfSwke3JnYi5ifSwke2FscGhhfSlgO1xufTtcblxuY29uc3QgZHJhd2VyV2lkdGggPSAyNjA7XG5cbmNvbnN0IHRyYW5zaXRpb24gPSB7XG4gIHRyYW5zaXRpb246IFwiYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSlcIlxufTtcblxuY29uc3QgY29uYXRpbmVyRmx1aWQgPSB7XG4gIHBhZGRpbmdSaWdodDogXCIxNXB4XCIsXG4gIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcbiAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgd2lkdGg6IFwiMTAwJVwiXG59O1xuY29uc3QgY29udGFpbmVyID0ge1xuICAuLi5jb25hdGluZXJGbHVpZCxcbiAgXCJAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpXCI6IHtcbiAgICBtYXhXaWR0aDogXCI1NDBweFwiXG4gIH0sXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KVwiOiB7XG4gICAgbWF4V2lkdGg6IFwiNzIwcHhcIlxuICB9LFxuICBcIkBtZWRpYSAobWluLXdpZHRoOiA5OTJweClcIjoge1xuICAgIG1heFdpZHRoOiBcIjk2MHB4XCJcbiAgfSxcbiAgXCJAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KVwiOiB7XG4gICAgbWF4V2lkdGg6IFwiMTE0MHB4XCJcbiAgfVxufTtcblxuY29uc3QgYm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6XG4gICAgXCIwIDEwcHggMzBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNDIpLCAwIDRweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpXCJcbn07XG5cbmNvbnN0IGNhcmQgPSB7XG4gIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgbWFyZ2luOiBcIjI1cHggMFwiLFxuICBib3hTaGFkb3c6IFwiMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KVwiLFxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC44NylcIixcbiAgYmFja2dyb3VuZDogXCIjZmZmXCJcbn07XG5cbmNvbnN0IGRlZmF1bHRGb250ID0ge1xuICBmb250RmFtaWx5OiAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJyxcbiAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgbGluZUhlaWdodDogXCIxLjVlbVwiXG59O1xuXG5jb25zdCBwcmltYXJ5Q29sb3IgPSBcIiM5YzI3YjBcIjtcbmNvbnN0IHdhcm5pbmdDb2xvciA9IFwiI2ZmOTgwMFwiO1xuY29uc3QgZGFuZ2VyQ29sb3IgPSBcIiNmNDQzMzZcIjtcbmNvbnN0IHN1Y2Nlc3NDb2xvciA9IFwiIzRjYWY1MFwiO1xuY29uc3QgaW5mb0NvbG9yID0gXCIjMDBhY2MxXCI7XG5jb25zdCByb3NlQ29sb3IgPSBcIiNlOTFlNjNcIjtcbmNvbnN0IGdyYXlDb2xvciA9IFwiIzk5OTk5OVwiO1xuXG5jb25zdCBwcmltYXJ5Qm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDEycHggMjBweCAtMTBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgcHJpbWFyeUNvbG9yLFxuICAgIDAuMjhcbiAgKX0sIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBwcmltYXJ5Q29sb3IsXG4gICAgMC4yXG4gICl9YFxufTtcbmNvbnN0IGluZm9Cb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBpbmZvQ29sb3IsXG4gICAgMC4yOFxuICApfSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgIGluZm9Db2xvcixcbiAgICAwLjJcbiAgKX1gXG59O1xuY29uc3Qgc3VjY2Vzc0JveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHN1Y2Nlc3NDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgc3VjY2Vzc0NvbG9yLFxuICAgIDAuMlxuICApfWBcbn07XG5jb25zdCB3YXJuaW5nQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDEycHggMjBweCAtMTBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgd2FybmluZ0NvbG9yLFxuICAgIDAuMjhcbiAgKX0sIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICB3YXJuaW5nQ29sb3IsXG4gICAgMC4yXG4gICl9YFxufTtcbmNvbnN0IGRhbmdlckJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIGRhbmdlckNvbG9yLFxuICAgIDAuMjhcbiAgKX0sIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBkYW5nZXJDb2xvcixcbiAgICAwLjJcbiAgKX1gXG59O1xuY29uc3Qgcm9zZUJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCA0cHggMjBweCAwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIFwiIzAwMFwiLFxuICAgIDAuMTRcbiAgKX0sIDAgN3B4IDEwcHggLTVweCAke2hleFRvUkdCQWxwaGEocm9zZUNvbG9yLCAwLjQpfWBcbn07XG5cbmNvbnN0IHdhcm5pbmdDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZmZhNzI2LCAjZmI4YzAwKVwiLFxuICAuLi53YXJuaW5nQm94U2hhZG93XG59O1xuY29uc3Qgc3VjY2Vzc0NhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICM2NmJiNmEsICM0M2EwNDcpXCIsXG4gIC4uLnN1Y2Nlc3NCb3hTaGFkb3dcbn07XG5jb25zdCBkYW5nZXJDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWY1MzUwLCAjZTUzOTM1KVwiLFxuICAuLi5kYW5nZXJCb3hTaGFkb3dcbn07XG5jb25zdCBpbmZvQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgIzI2YzZkYSwgIzAwYWNjMSlcIixcbiAgLi4uaW5mb0JveFNoYWRvd1xufTtcbmNvbnN0IHByaW1hcnlDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCAjYWI0N2JjLCAjOGUyNGFhKVwiLFxuICAuLi5wcmltYXJ5Qm94U2hhZG93XG59O1xuY29uc3Qgcm9zZUNhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNlYzQwN2EsICNkODFiNjApXCIsXG4gIC4uLnJvc2VCb3hTaGFkb3dcbn07XG5jb25zdCBjYXJkQWN0aW9ucyA9IHtcbiAgbWFyZ2luOiBcIjAgMjBweCAxMHB4XCIsXG4gIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNlZWVlZWVcIixcbiAgaGVpZ2h0OiBcImF1dG9cIixcbiAgLi4uZGVmYXVsdEZvbnRcbn07XG5cbmNvbnN0IGNhcmRIZWFkZXIgPSB7XG4gIG1hcmdpbjogXCItMzBweCAxNXB4IDBcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICBwYWRkaW5nOiBcIjE1cHhcIlxufTtcblxuY29uc3QgZGVmYXVsdEJveFNoYWRvdyA9IHtcbiAgYm9yZGVyOiBcIjBcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICBib3hTaGFkb3c6XG4gICAgXCIwIDEwcHggMjBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNDIpLCAwIDNweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXG4gIHBhZGRpbmc6IFwiMTBweCAwXCIsXG4gIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGVhc2UgMHNcIlxufTtcblxuY29uc3QgdGl0bGUgPSB7XG4gIGNvbG9yOiBcIiMzQzQ4NThcIixcbiAgbWFyZ2luOiBcIjEuNzVyZW0gMCAwLjg3NXJlbVwiLFxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gIGZvbnRGYW1pbHk6IGBcIlJvYm90byBTbGFiXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmYFxufTtcblxuY29uc3Qgc21hbGxUaXRsZSA9IHtcbiAgLi4udGl0bGUsXG4gIG1hcmdpblRvcDogXCIuNjI1cmVtXCJcbn07XG5cbmNvbnN0IGNhcmRUaXRsZSA9IHtcbiAgLi4uc21hbGxUaXRsZSxcbiAgbWFyZ2luVG9wOiBcIi42MjVyZW1cIlxufTtcblxuY29uc3QgY2FyZExpbmsgPSB7XG4gIFwiJiArICRjYXJkTGlua1wiOiB7XG4gICAgbWFyZ2luTGVmdDogXCIxLjI1cmVtXCJcbiAgfVxufTtcblxuY29uc3QgY2FyZFN1YnRpdGxlID0ge1xuICBtYXJnaW5Cb3R0b206IFwiMFwiLFxuICBtYXJnaW5Ub3A6IFwiLS4zNzVyZW1cIlxufTtcblxuZXhwb3J0IHtcbiAgaGV4VG9SR0JBbHBoYSxcbiAgLy92YXJpYWJsZXNcbiAgZHJhd2VyV2lkdGgsXG4gIHRyYW5zaXRpb24sXG4gIGNvbnRhaW5lcixcbiAgY29uYXRpbmVyRmx1aWQsXG4gIGJveFNoYWRvdyxcbiAgY2FyZCxcbiAgZGVmYXVsdEZvbnQsXG4gIHByaW1hcnlDb2xvcixcbiAgd2FybmluZ0NvbG9yLFxuICBkYW5nZXJDb2xvcixcbiAgc3VjY2Vzc0NvbG9yLFxuICBpbmZvQ29sb3IsXG4gIHJvc2VDb2xvcixcbiAgZ3JheUNvbG9yLFxuICBwcmltYXJ5Qm94U2hhZG93LFxuICBpbmZvQm94U2hhZG93LFxuICBzdWNjZXNzQm94U2hhZG93LFxuICB3YXJuaW5nQm94U2hhZG93LFxuICBkYW5nZXJCb3hTaGFkb3csXG4gIHJvc2VCb3hTaGFkb3csXG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxuICBzdWNjZXNzQ2FyZEhlYWRlcixcbiAgZGFuZ2VyQ2FyZEhlYWRlcixcbiAgaW5mb0NhcmRIZWFkZXIsXG4gIHByaW1hcnlDYXJkSGVhZGVyLFxuICByb3NlQ2FyZEhlYWRlcixcbiAgY2FyZEFjdGlvbnMsXG4gIGNhcmRIZWFkZXIsXG4gIGRlZmF1bHRCb3hTaGFkb3csXG4gIHRpdGxlLFxuICBzbWFsbFRpdGxlLFxuICBjYXJkVGl0bGUsXG4gIGNhcmRMaW5rLFxuICBjYXJkU3VidGl0bGVcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi4vc3JjL3RoZW1lJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1RvcEJhcidcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9BcHAubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xyXG4gIGNvbnN0IFtzdHlsZSwgc2V0U3R5bGVdID0gdXNlU3RhdGU8UmVhY3QuQ1NTUHJvcGVydGllcz4oeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJylcclxuICAgIGlmIChqc3NTdHlsZXMpIHtcclxuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKVxyXG4gICAgfVxyXG4gICAgc2V0U3R5bGUoe30pXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhcHAtY29udGFpbmVyJ119IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjb250ZW50LWNvbnRhaW5lciddfT5cclxuICAgICAgICAgICAgPFRvcEJhciAvPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyOiBGQyA9ICh7fSk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mb290ZXJ9PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBkaXNwbGF5PVwiaW5saW5lXCIgY2xhc3NOYW1lPXtzdHlsZVsnZm9vdGVyLWNvbnRlbnQnXX0+XHJcbiAgICAgICAgQ29weXJpZ2h0IMKpIDIwMjF7JyAnfVxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmdpdGh1Yi5jb20vc2FpZW1naWxhbmlcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICBTYWllbSBHaWxhbmlcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInXHJcbmltcG9ydCBTdW5JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYlN1bm55T3V0bGluZWQnXHJcbmltcG9ydCBWaWV3SGVhZGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaWV3SGVhZGxpbmUnXHJcbmltcG9ydCBNb29uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczJPdXRsaW5lZCdcclxuaW1wb3J0IENvZGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Db2RlJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInXHJcbmltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXInXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IFRvZ2dsZVRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgTkFNRV9BTkRfRE9NQUlOIH0gZnJvbSAnLi4vdHlwZXMvY29uc3RhbnRzJ1xyXG5pbXBvcnQge1xyXG4gIGNvbnRhaW5lcixcclxuICBoZXhUb1JHQkFscGhhLFxyXG4gIGRlZmF1bHRGb250LFxyXG4gIHByaW1hcnlDb2xvcixcclxuICBpbmZvQ29sb3IsXHJcbiAgc3VjY2Vzc0NvbG9yLFxyXG4gIHdhcm5pbmdDb2xvcixcclxuICBkYW5nZXJDb2xvcixcclxuICByb3NlQ29sb3IsXHJcbiAgdHJhbnNpdGlvbixcclxuICBib3hTaGFkb3csXHJcbiAgZHJhd2VyV2lkdGhcclxufSBmcm9tIFwiLi4vLi4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzXCI7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIGFwcEJhcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBib3JkZXI6IFwiMFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gICAgcGFkZGluZzogXCIwLjYyNXJlbSAwXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMjBweFwiLFxyXG4gICAgY29sb3I6IFwiIzdCMTcyOVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM3QjE3MjlcIixcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDRweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjE1KVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgZWFzZSAwc1wiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGZsZXhGbG93OiBcInJvdyBub3dyYXBcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB6SW5kZXg6IFwidW5zZXRcIlxyXG4gIH0sXHJcbiAgYWJzb2x1dGU6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCJcclxuICB9LFxyXG4gIGZpeGVkOiB7XHJcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiXHJcbiAgfSxcclxuICBzaG93OiB7XHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcclxuICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjVzJyxcclxuICB9LFxyXG4gIGhpZGU6IHtcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTExMCUpJyxcclxuICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjVzJyxcclxuICB9LFxyXG4gIHRvb2xiYXI6IHtcclxuICAgIHBhZGRpbmdMZWZ0OiAnNSUnLFxyXG4gIH0sXHJcbiAgdG9vbGJhckNvbnRlbnQ6IHtcclxuICAgIHBhZGRpbmdMZWZ0OiA3MCxcclxuICB9LFxyXG4gIHRvb2xiYXJSaWdodDoge1xyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHBhZGRpbmdSaWdodDogJzUlJyxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgLi4uY29udGFpbmVyLFxyXG4gICAgbWluSGVpZ2h0OiBcIjUwcHhcIixcclxuICAgIGZsZXg6IFwiMVwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwibm93cmFwXCJcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IFRvcEJhciA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKClcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB7IHRvZ2dsZVRoZW1lLCBpc0RhcmsgfSA9IHVzZUNvbnRleHQoVG9nZ2xlVGhlbWVDb250ZXh0KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcEJhciBjbGFzc05hbWU9e3RyaWdnZXIgPyBjbGFzc2VzLmhpZGUgOiBjbGFzc2VzLnNob3d9IHBvc2l0aW9uPVwic3RpY2t5XCI+XHJcbiAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvbG9nby9sb2dvMi5wbmdcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgIGFsdD1cInNhaWVtZ2lsYW5pLm1lXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IDEwLCB2ZXJ0aWNhbEFsaWduOiAnYm90dG9tJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN0eWxlPXshaXNEYXJrID8geyBjb2xvcjogJyNmZmYnIH0gOiB7fX0+XHJcbiAgICAgICAgICAgICAge05BTUVfQU5EX0RPTUFJTn1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyQ29udGVudH0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgIDxWaWV3SGVhZGxpbmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgJm5ic3A7QmxvZ1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdG9waWNzXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICA8Q29kZUljb24gLz5cclxuICAgICAgICAgICAgICAmbmJzcDtUb3BpY3NcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhclJpZ2h0fT5cclxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiVG9nZ2xlIFRoZW1lXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXt0b2dnbGVUaGVtZX0+XHJcbiAgICAgICAgICAgICAge2lzRGFyayA/IDxTdW5JY29uIC8+IDogPE1vb25JY29uIC8+fVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Ub29sYmFyPlxyXG4gICAgPC9BcHBCYXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIsIENzc0Jhc2VsaW5lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IGxpZ2h0VGhlbWUsIGRhcmtUaGVtZSB9IGZyb20gJy4vdGhlbWUnXHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5pbnRlcmZhY2UgVGhlbWVQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUb2dnbGVUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICB0b2dnbGVUaGVtZTogKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coKVxyXG4gIH0sXHJcbiAgaXNEYXJrOiBmYWxzZSxcclxufSlcclxuXHJcbnR5cGUgU2VsZWN0ZWRUaGVtZSA9IHtcclxuICB0aGVtZU5hbWU6IHN0cmluZ1xyXG4gIGFwcGxpZWRUaGVtZTogVGhlbWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRoZW1lUHJvdmlkZXI6IFJlYWN0LkZDPFRoZW1lUHJvdmlkZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiB9OiBUaGVtZVByb3ZpZGVyUHJvcHMpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRUaGVtZSwgc2V0U2VsZWN0ZWRUaGVtZV0gPSB1c2VTdGF0ZTxTZWxlY3RlZFRoZW1lPih7IGFwcGxpZWRUaGVtZTogZGFya1RoZW1lLCB0aGVtZU5hbWU6ICdkYXJrVGhlbWUnIH0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpXHJcbiAgICBpZiAodGhlbWUgJiYgdGhlbWUgPT09ICdsaWdodFRoZW1lJykge1xyXG4gICAgICBzZXRTZWxlY3RlZFRoZW1lKHsgYXBwbGllZFRoZW1lOiBsaWdodFRoZW1lLCB0aGVtZU5hbWU6ICdsaWdodFRoZW1lJyB9KVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCB0b2dnbGVUaGVtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghc2VsZWN0ZWRUaGVtZSB8fCBzZWxlY3RlZFRoZW1lLnRoZW1lTmFtZSA9PT0gJ2RhcmtUaGVtZScpIHtcclxuICAgICAgc2V0U2VsZWN0ZWRUaGVtZSh7IGFwcGxpZWRUaGVtZTogbGlnaHRUaGVtZSwgdGhlbWVOYW1lOiAnbGlnaHRUaGVtZScgfSlcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0VGhlbWUnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VsZWN0ZWRUaGVtZSh7IGFwcGxpZWRUaGVtZTogZGFya1RoZW1lLCB0aGVtZU5hbWU6ICdkYXJrVGhlbWUnIH0pXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrVGhlbWUnKVxyXG4gICAgfVxyXG4gIH0sIFtzZWxlY3RlZFRoZW1lLCBzZXRTZWxlY3RlZFRoZW1lXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2dnbGVUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdG9nZ2xlVGhlbWUsIGlzRGFyazogIShzZWxlY3RlZFRoZW1lLnRoZW1lTmFtZSA9PT0gJ2xpZ2h0VGhlbWUnKSB9fT5cclxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3NlbGVjdGVkVGhlbWUuYXBwbGllZFRoZW1lfT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cclxuICAgIDwvVG9nZ2xlVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWVQcm92aWRlclxyXG4iLCJleHBvcnQgKiBmcm9tICcuL3RoZW1lJ1xyXG5leHBvcnQgKiBmcm9tICcuL1RoZW1lUHJvdmlkZXInXHJcbiIsImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCBUaGVtZU9wdGlvbnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmV4cG9ydCBjb25zdCBwYWxldHRlQ29sb3JzRGFyayA9IHtcclxuICBwcmltYXJ5OiAnIzdCMTcyOScsXHJcbiAgc2Vjb25kYXJ5OiAnIzUwMEYxQicsXHJcbiAgZXJyb3I6ICcjRTQ0QzY1JyxcclxuICBiYWNrZ3JvdW5kOiAnIzUwMEYxQicsXHJcbiAgdGV4dDogJyNGRUY0RTgnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFsZXR0ZUNvbG9yc0xpZ2h0ID0ge1xyXG4gIHByaW1hcnk6ICcjN0IxNzI5JyxcclxuICBzZWNvbmRhcnk6ICcjZmZlMGFjJyxcclxuICBlcnJvcjogJyNFNDRDNjUnLFxyXG4gIGJhY2tncm91bmQ6ICcjRkVGNEU4JyxcclxuICB0ZXh0OiAnIzA1MDUwNScsXHJcbn1cclxuXHJcbmNvbnN0IG9wdGlvbnMgPSAoZGFyazogYm9vbGVhbik6IFRoZW1lT3B0aW9ucyA9PiB7XHJcbiAgY29uc3QgcGFsZXR0ZUNvbG9ycyA9IGRhcmsgPyBwYWxldHRlQ29sb3JzRGFyayA6IHBhbGV0dGVDb2xvcnNMaWdodFxyXG4gIHJldHVybiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHR5cGU6IGRhcmsgPyAnZGFyaycgOiAnbGlnaHQnLFxyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogcGFsZXR0ZUNvbG9ycy5wcmltYXJ5LFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBtYWluOiBwYWxldHRlQ29sb3JzLnNlY29uZGFyeSxcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IHtcclxuICAgICAgICBtYWluOiBwYWxldHRlQ29sb3JzLmVycm9yLFxyXG4gICAgICB9LFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgZGVmYXVsdDogcGFsZXR0ZUNvbG9ycy5iYWNrZ3JvdW5kLFxyXG4gICAgICB9LFxyXG4gICAgICB0ZXh0OiB7XHJcbiAgICAgICAgcHJpbWFyeTogcGFsZXR0ZUNvbG9ycy50ZXh0LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHR5cG9ncmFwaHk6IHtcclxuICAgICAgZm9udEZhbWlseTogJ0xhdG8nLFxyXG4gICAgICBoMToge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8gU2xhYicsXHJcbiAgICAgICAgZm9udFdlaWdodDogMzAwLFxyXG4gICAgICAgIGZvbnRTaXplOiAnOTZweCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzEyN3B4JyxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcclxuICAgICAgfSxcclxuICAgICAgaDI6IHsgZm9udEZhbWlseTogJ1JvYm90byBTbGFiJywgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogJzQ4cHgnLCBsaW5lSGVpZ2h0OiAnNDBweCcsIGxldHRlclNwYWNpbmc6ICctMC41cHgnIH0sXHJcbiAgICAgIGgzOiB7IGZvbnRGYW1pbHk6ICdSb2JvdG8gU2xhYicsIGZvbnRTaXplOiAnMzZweCcsIGxpbmVIZWlnaHQ6ICc0MHB4JyB9LFxyXG4gICAgICBoNDogeyBmb250RmFtaWx5OiAnUm9ib3RvIFNsYWInLCBmb250U2l6ZTogJzM0cHgnLCBsaW5lSGVpZ2h0OiAnNDVweCcsIGxldHRlclNwYWNpbmc6ICcwLjI1cHgnIH0sXHJcbiAgICAgIGg1OiB7IGZvbnRGYW1pbHk6ICdDaGl2bycsIGZvbnRTaXplOiAnMjRweCcsIGxpbmVIZWlnaHQ6ICczMnB4JyB9LFxyXG4gICAgICBoNjogeyBmb250RmFtaWx5OiAnQ2hpdm8nLCBmb250V2VpZ2h0OiA1MDAsIGZvbnRTaXplOiAnMjBweCcsIGxpbmVIZWlnaHQ6ICcyNnB4JywgbGV0dGVyU3BhY2luZzogJzAuMTVweCcgfSxcclxuICAgICAgc3VidGl0bGUxOiB7IGZvbnRGYW1pbHk6ICdSb2JvdG8gU2xhYicsIGZvbnRTaXplOiAnMTZweCcsIGxpbmVIZWlnaHQ6ICcxOXB4JywgbGV0dGVyU3BhY2luZzogJzAuMTVweCcgfSxcclxuICAgICAgc3VidGl0bGUyOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTogJ1JvYm90byBTbGFiJyxcclxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnMTYuNDFweCcsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMXB4JyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTE6IHsgZm9udEZhbWlseTogJ1JvYm90byBTbGFiJywgIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6ICcxOHB4JywgbGluZUhlaWdodDogJzE1MCUnLCBsZXR0ZXJTcGFjaW5nOiAnMC41cHgnIH0sXHJcbiAgICAgIGJvZHkyOiB7IGZvbnRGYW1pbHk6ICdMYXRvJywgIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6ICcxNnB4JywgbGluZUhlaWdodDogJzE2cHgnLCBsZXR0ZXJTcGFjaW5nOiAnMC4yNXB4JyB9LFxyXG4gICAgICBidXR0b246IHsgZm9udEZhbWlseTogJ0xhdG8nLCBmb250V2VpZ2h0OiA1MDAsIGZvbnRTaXplOiAnMTRweCcsIGxldHRlclNwYWNpbmc6ICcxLjI1cHgnIH0sXHJcbiAgICAgIGNhcHRpb246IHsgZm9udEZhbWlseTogJ0xhdG8nLCBmb250U2l6ZTogJzEycHgnLCBsaW5lSGVpZ2h0OiAnMTRweCcsIGxldHRlclNwYWNpbmc6ICcwLjRweCcgfSxcclxuICAgICAgb3ZlcmxpbmU6IHsgZm9udEZhbWlseTogJ0NoaXZvJywgZm9udFNpemU6ICcxMHB4JywgbGluZUhlaWdodDogJzEycHgnLCBsZXR0ZXJTcGFjaW5nOiAnMS41cHgnIH0sXHJcbiAgICB9LFxyXG4gICAgb3ZlcnJpZGVzOiB7XHJcbiAgICAgIE11aUNzc0Jhc2VsaW5lOiB7XHJcbiAgICAgICAgJ0BnbG9iYWwnOiB7XHJcbiAgICAgICAgICBodG1sOiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYToge1xyXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlQ29sb3JzLnRleHQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRhcmtUaGVtZSA9IGNyZWF0ZU11aVRoZW1lKG9wdGlvbnModHJ1ZSkpXHJcbmV4cG9ydCBjb25zdCBsaWdodFRoZW1lID0gY3JlYXRlTXVpVGhlbWUob3B0aW9ucyhmYWxzZSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXJrVGhlbWVcclxuIiwiZXhwb3J0IGNvbnN0IE5BTUUgPSAnU0cnXHJcbmV4cG9ydCBjb25zdCBOQU1FX0FORF9ET01BSU4gPSAnU0cnXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3NhaWVtZ2lsYW5pLm1lJ1xyXG5leHBvcnQgY29uc3QgREVQTE9ZTUVOVFNfVVJMID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3Mvc2FpZW1naWxhbmkvc2FpZW0tYmxvZy9kZXBsb3ltZW50cydcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXBwLWNvbnRhaW5lclwiOiBcIkFwcF9hcHAtY29udGFpbmVyX18yWWpxc1wiLFxuXHRcImNvbnRlbnQtY29udGFpbmVyXCI6IFwiQXBwX2NvbnRlbnQtY29udGFpbmVyX19IUlB3N1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fMzE3aUtcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9CcmlnaHRuZXNzMk91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Db2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9WaWV3SGVhZGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1diU3VubnlPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwiLyogKGlnbm9yZWQpICovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iXSwibmFtZXMiOlsiaGV4Q29sb3JUb1JHQiIsImhleENvbG9yIiwiZGV0ZWN0U2hvcnRoYW5kIiwicmVwbGFjZSIsIm0iLCJyIiwiZyIsImIiLCJoZXhfYXJyYXkiLCJleGVjIiwicGFyc2VJbnQiLCJoZXhUb1JHQkFscGhhIiwiYWxwaGEiLCJyZ2IiLCJkcmF3ZXJXaWR0aCIsInRyYW5zaXRpb24iLCJjb25hdGluZXJGbHVpZCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJjb250YWluZXIiLCJtYXhXaWR0aCIsImJveFNoYWRvdyIsImNhcmQiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImJhY2tncm91bmQiLCJkZWZhdWx0Rm9udCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsInByaW1hcnlDb2xvciIsIndhcm5pbmdDb2xvciIsImRhbmdlckNvbG9yIiwic3VjY2Vzc0NvbG9yIiwiaW5mb0NvbG9yIiwicm9zZUNvbG9yIiwiZ3JheUNvbG9yIiwicHJpbWFyeUJveFNoYWRvdyIsImluZm9Cb3hTaGFkb3ciLCJzdWNjZXNzQm94U2hhZG93Iiwid2FybmluZ0JveFNoYWRvdyIsImRhbmdlckJveFNoYWRvdyIsInJvc2VCb3hTaGFkb3ciLCJ3YXJuaW5nQ2FyZEhlYWRlciIsInN1Y2Nlc3NDYXJkSGVhZGVyIiwiZGFuZ2VyQ2FyZEhlYWRlciIsImluZm9DYXJkSGVhZGVyIiwicHJpbWFyeUNhcmRIZWFkZXIiLCJyb3NlQ2FyZEhlYWRlciIsImNhcmRBY3Rpb25zIiwicGFkZGluZ1RvcCIsImJvcmRlclRvcCIsImhlaWdodCIsImNhcmRIZWFkZXIiLCJwYWRkaW5nIiwiZGVmYXVsdEJveFNoYWRvdyIsImJvcmRlciIsInRpdGxlIiwidGV4dERlY29yYXRpb24iLCJzbWFsbFRpdGxlIiwibWFyZ2luVG9wIiwiY2FyZFRpdGxlIiwiY2FyZExpbmsiLCJjYXJkU3VidGl0bGUiLCJtYXJnaW5Cb3R0b20iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJjb25zb2xlIiwid2FybiIsInAiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJtYXAiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidGhlbiIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsImxlbmd0aCIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwibWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsInNwbGl0Iiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJKU09OIiwic3RyaW5naWZ5IiwieCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyZWxvYWQiLCJiYWNrIiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsIl9pbkZsaWdodFJvdXRlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwibG9jYWxlQ2hhbmdlIiwib25seUFIYXNoQ2hhbmdlIiwiZW1pdCIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVGhlbWVQcm92aWRlciIsIlJlYWN0IiwiVG9wQmFyIiwiRm9vdGVyIiwiTXlBcHAiLCJzdHlsZSIsInNldFN0eWxlIiwidmlzaWJpbGl0eSIsImpzc1N0eWxlcyIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsIlR5cG9ncmFwaHkiLCJmb290ZXIiLCJUb29sYmFyIiwiU3VuSWNvbiIsIlZpZXdIZWFkbGluZUljb24iLCJNb29uSWNvbiIsIkNvZGVJY29uIiwiQnV0dG9uIiwiQXBwQmFyIiwidXNlU2Nyb2xsVHJpZ2dlciIsIm1ha2VTdHlsZXMiLCJUb2dnbGVUaGVtZUNvbnRleHQiLCJUb29sdGlwIiwiTkFNRV9BTkRfRE9NQUlOIiwidXNlU3R5bGVzIiwiYXBwQmFyIiwiYmFja2dyb3VuZENvbG9yIiwiYWxpZ25JdGVtcyIsImZsZXhGbG93IiwianVzdGlmeUNvbnRlbnQiLCJ6SW5kZXgiLCJhYnNvbHV0ZSIsImZpeGVkIiwic2hvdyIsInRyYW5zZm9ybSIsImhpZGUiLCJ0b29sYmFyIiwidG9vbGJhckNvbnRlbnQiLCJ0b29sYmFyUmlnaHQiLCJyaWdodCIsIm1pbkhlaWdodCIsImZsZXgiLCJmbGV4V3JhcCIsInRyaWdnZXIiLCJjbGFzc2VzIiwidG9nZ2xlVGhlbWUiLCJpc0RhcmsiLCJ2ZXJ0aWNhbEFsaWduIiwiTXVpVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwibGlnaHRUaGVtZSIsImRhcmtUaGVtZSIsImNyZWF0ZUNvbnRleHQiLCJsb2ciLCJzZWxlY3RlZFRoZW1lIiwic2V0U2VsZWN0ZWRUaGVtZSIsImFwcGxpZWRUaGVtZSIsInRoZW1lTmFtZSIsInRoZW1lIiwibG9jYWxTdG9yYWdlIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlQ29sb3JzRGFyayIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJwYWxldHRlQ29sb3JzTGlnaHQiLCJkYXJrIiwicGFsZXR0ZUNvbG9ycyIsInBhbGV0dGUiLCJtYWluIiwidHlwb2dyYXBoeSIsImgxIiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsInN1YnRpdGxlMSIsInN1YnRpdGxlMiIsImJvZHkxIiwiYm9keTIiLCJidXR0b24iLCJjYXB0aW9uIiwib3ZlcmxpbmUiLCJvdmVycmlkZXMiLCJNdWlDc3NCYXNlbGluZSIsImh0bWwiLCJvdmVyZmxvd1giLCJhIiwiTkFNRSIsIkJBU0VfVVJMIiwiREVQTE9ZTUVOVFNfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==