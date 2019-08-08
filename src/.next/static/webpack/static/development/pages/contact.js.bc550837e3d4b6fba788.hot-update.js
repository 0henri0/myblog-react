webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "../node_modules/@material-ui/core/esm/Badge/Badge.js":
/*!************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Badge/Badge.js ***!
  \************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/helpers */ "../node_modules/@material-ui/core/esm/utils/helpers.js");







var RADIUS = 10;
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      display: 'inline-flex',
      // For correct alignment with the text.
      verticalAlign: 'middle'
    },

    /* Styles applied to the badge `span` element. */
    badge: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      right: 0,
      boxSizing: 'border-box',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(12),
      minWidth: RADIUS * 2,
      padding: '0 4px',
      height: RADIUS * 2,
      borderRadius: RADIUS,
      backgroundColor: theme.palette.color,
      color: theme.palette.textColor,
      zIndex: 1,
      // Render the badge on top of potential ripples.
      transform: 'scale(1) translate(50%, -50%)',
      transformOrigin: '100% 0%',
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.enteringScreen
      })
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

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText
    },

    /* Styles applied to the badge `span` element if `invisible={true}`. */
    invisible: {
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.leavingScreen
      }),
      transform: 'scale(0) translate(50%, -50%)',
      transformOrigin: '100% 0%'
    },

    /* Styles applied to the root element if `variant="dot"`. */
    dot: {
      height: 6,
      minWidth: 6,
      padding: 0
    }
  };
};
var Badge = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Badge(props, ref) {
  var badgeContent = props.badgeContent,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      ComponentProp = _props$component === void 0 ? 'span' : _props$component,
      invisibleProp = props.invisible,
      _props$max = props.max,
      max = _props$max === void 0 ? 99 : _props$max,
      _props$showZero = props.showZero,
      showZero = _props$showZero === void 0 ? false : _props$showZero,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["badgeContent", "children", "classes", "className", "color", "component", "invisible", "max", "showZero", "variant"]);

  var invisible = invisibleProp;

  if (invisibleProp == null && (badgeContent === 0 && !showZero || badgeContent == null && variant !== 'dot')) {
    invisible = true;
  }

  var displayValue = '';

  if (variant !== 'dot') {
    displayValue = badgeContent > max ? "".concat(max, "+") : badgeContent;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ComponentProp, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    ref: ref
  }, other), children, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.badge, color !== 'default' && classes["color".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["capitalize"])(color))], invisible && classes.invisible, {
      dot: classes.dot
    }[variant])
  }, displayValue));
});
 true ? Badge.propTypes = {
  /**
   * The content rendered within the badge.
   */
  badgeContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The badge will be added relative to this node.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'primary', 'secondary', 'error']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * If `true`, the badge will be invisible.
   */
  invisible: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Max count to show.
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   */
  showZero: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['standard', 'dot'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiBadge'
})(Badge));

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Badge/index.js":
/*!************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Badge/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badge */ "../node_modules/@material-ui/core/esm/Badge/Badge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Badge__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Button/Button.js":
false,

/***/ "../node_modules/@material-ui/core/esm/Button/index.js":
false,

/***/ "../node_modules/@material-ui/core/esm/FormControl/FormControlContext.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/FormControl/FormControlContext.js ***!
  \*******************************************************************************/
/*! exports provided: useFormControl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormControl", function() { return useFormControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var FormControlContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(FormControlContext);
}
/* harmony default export */ __webpack_exports__["default"] = (FormControlContext);

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/FormControl/formControlState.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/FormControl/formControlState.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formControlState; });
function formControlState(_ref) {
  var props = _ref.props,
      states = _ref.states,
      muiFormControl = _ref.muiFormControl;
  return states.reduce(function (acc, state) {
    acc[state] = props[state];

    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Grow/Grow.js":
/*!**********************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Grow/Grow.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ "../node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/useTheme */ "../node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transitions/utils */ "../node_modules/@material-ui/core/esm/transitions/utils.js");
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/reactHelpers */ "../node_modules/@material-ui/core/esm/utils/reactHelpers.js");









function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}

var styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};
/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Grow(props, ref) {
  var children = props.children,
      inProp = props.in,
      onEnter = props.onEnter,
      onExit = props.onExit,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "in", "onEnter", "onExit", "style", "timeout"]);

  var timer = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var autoTimeout = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var handleRef = Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_7__["useForkRef"])(children.ref, ref);
  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var handleEnter = function handleEnter(node) {
    Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_6__["reflow"])(node); // So the animation always start from the start.

    var _getTransitionProps = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_6__["getTransitionProps"])({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration,
        delay = _getTransitionProps.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay
    })].join(',');

    if (onEnter) {
      onEnter(node);
    }
  };

  var handleExit = function handleExit(node) {
    var _getTransitionProps2 = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_6__["getTransitionProps"])({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration,
        delay = _getTransitionProps2.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay || duration * 0.333
    })].join(',');
    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    if (onExit) {
      onExit(node);
    }
  };

  var addEndListener = function addEndListener(_, next) {
    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["Transition"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    appear: true,
    in: inProp,
    onEnter: handleEnter,
    onExit: handleExit,
    addEndListener: addEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], {}, style, {}, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 true ? Grow.propTypes = {
  /**
   * A single child content element.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    enter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  }), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['auto'])])
} : undefined;
Grow.muiSupportAuto = true;
/* harmony default export */ __webpack_exports__["default"] = (Grow);

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Grow/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Grow/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grow */ "../node_modules/@material-ui/core/esm/Grow/Grow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Grow__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/esm/InputBase/InputBase.js":
/*!********************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/InputBase/InputBase.js ***!
  \********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "../node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/formControlState */ "../node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormControl/FormControlContext */ "../node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/reactHelpers */ "../node_modules/@material-ui/core/esm/utils/reactHelpers.js");
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../TextareaAutosize */ "../node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "../node_modules/@material-ui/core/esm/InputBase/utils.js");




/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */










var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: '0 !important'
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    /* Styles applied to the root element. */
    root: {
      // Mimics the default input display property used by browsers for an input.
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: '1.1875em',
      // Reset (19px), match the native input line-height
      boxSizing: 'border-box',
      // Prevent padding issue with fullWidth.
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Styles applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      '&$marginDense': {
        paddingTop: 4 - 1
      }
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      color: 'currentColor',
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.1875em',
      // Reset (19px), match the native input line-height
      margin: 0,
      // Reset for Safari
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE 11 width issue
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },

    /* Styles applied to the `input` element if `select={true}`. */
    inputSelect: {
      paddingRight: 24
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      height: 'auto',
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {},

    /* Styles applied to the `input` element if `hiddenLabel={true}`. */
    inputHiddenLabel: {}
  };
};
var useEnhancedEffect =  false ? undefined : react__WEBPACK_IMPORTED_MODULE_3___default.a.useLayoutEffect;
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */

var InputBase = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function InputBase(props, ref) {
  var ariaDescribedby = props['aria-describedby'],
      autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      classes = props.classes,
      classNameProp = props.className,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      endAdornment = props.endAdornment,
      error = props.error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      id = props.id,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$inputProps = props.inputProps;
  _props$inputProps = _props$inputProps === void 0 ? {} : _props$inputProps;

  var inputPropsClassName = _props$inputProps.className,
      inputPropsProp = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_props$inputProps, ["className"]),
      inputRefProp = props.inputRef,
      margin = props.margin,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      placeholder = props.placeholder,
      readOnly = props.readOnly,
      renderPrefix = props.renderPrefix,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$select = props.select,
      select = _props$select === void 0 ? false : _props$select,
      startAdornment = props.startAdornment,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderPrefix", "rows", "rowsMax", "select", "startAdornment", "type", "value"]);

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var handleInputRefWarning = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function (instance) {
     true ? warning__WEBPACK_IMPORTED_MODULE_5___default()(!instance || instance instanceof HTMLInputElement || instance.focus, ['Material-UI: you have provided a `inputComponent` to the input component', 'that does not correctly handle the `inputRef` prop.', 'Make sure the `inputRef` prop is called with a HTMLInputElement.'].join('\n')) : undefined;
  }, []);
  var handleInputPropsRefProp = Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_10__["useForkRef"])(inputPropsProp.ref, handleInputRefWarning);
  var handleInputRefProp = Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_10__["useForkRef"])(inputRefProp, handleInputPropsRefProp);
  var handleInputRef = Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_10__["useForkRef"])(inputRef, handleInputRefProp);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      focused = _React$useState2[0],
      setFocused = _React$useState2[1];

  var muiFormControl = Object(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_8__["useFormControl"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled']
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);

      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  var checkDirty = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function (obj) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_12__["isFilled"])(obj)) {
      if (muiFormControl && muiFormControl.onFilled) {
        muiFormControl.onFilled();
      }
    } else if (muiFormControl && muiFormControl.onEmpty) {
      muiFormControl.onEmpty();
    }
  }, [muiFormControl]);
  useEnhancedEffect(function () {
    if (isControlled) {
      checkDirty({
        value: value
      });
    }
  }, [value, checkDirty, isControlled]);

  var handleFocus = function handleFocus(event) {
    // Fix a bug with IE 11 where the focus/blur events are triggered
    // while the input is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      var element = event.target || inputRef.current;

      if (element == null) {
        throw new TypeError('Material-UI: Expected valid input target. ' + 'Did you use a custom `inputComponent` and forget to forward refs? ' + 'See https://material-ui.com/r/input-component-ref-interface for more info.');
      }

      checkDirty({
        value: element.value
      });
    } // Perform in the willUpdate


    if (onChange) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      onChange.apply(void 0, [event].concat(args));
    }
  };

  var handleClick = function handleClick(event) {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  var InputComponent = inputComponent;

  var inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, inputPropsProp, {
    ref: handleInputRef
  });

  if (typeof InputComponent !== 'string') {
    inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef: handleInputRef,
      type: type
    }, inputProps, {
      ref: null
    });
  } else if (multiline) {
    if (rows && !rowsMax) {
      InputComponent = 'textarea';
    } else {
      inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        rows: rows,
        rowsMax: rowsMax
      }, inputProps);
      InputComponent = _TextareaAutosize__WEBPACK_IMPORTED_MODULE_11__["default"];
    }
  } else {
    inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: type
    }, inputProps);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, classNameProp, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, {
      dense: classes.marginDense
    }[fcs.margin]),
    onClick: handleClick,
    ref: ref
  }, other), renderPrefix ? renderPrefix(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fcs, {
    startAdornment: startAdornment
  })) : null, startAdornment, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
    value: null
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.input, inputPropsClassName, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, select && classes.inputSelect, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, {
      search: classes.inputTypeSearch
    }[type], {
      dense: classes.inputMarginDense
    }[fcs.margin]),
    defaultValue: defaultValue,
    disabled: fcs.disabled,
    id: id,
    name: name,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    placeholder: placeholder,
    readOnly: readOnly,
    required: fcs.required,
    rows: rows,
    value: value
  }, inputProps))), endAdornment);
});
 true ? InputBase.propTypes = {
  /**
   * @ignore
   */
  'aria-describedby': prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * The CSS class name of the wrapper element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a DOM element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * This prop can be used to pass a ref callback to the `input` element.
   */
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  renderPrefix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),

  /**
   * Should be `true` when the component hosts a select.
   */
  select: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__["default"])(styles, {
  name: 'MuiInputBase'
})(InputBase));

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/InputBase/index.js":
/*!****************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/InputBase/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputBase */ "../node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InputBase__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/esm/InputBase/utils.js":
/*!****************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/InputBase/utils.js ***!
  \****************************************************************/
/*! exports provided: hasValue, isFilled, isAdornedStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return hasValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilled", function() { return isFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdornedStart", function() { return isAdornedStart; });
// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/List/List.js":
/*!**********************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/List/List.js ***!
  \**********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ListContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListContext */ "../node_modules/@material-ui/core/esm/List/ListContext.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  },

  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },

  /* Styles applied to the root element if dense. */
  dense: {},

  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};
var List = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function List(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disablePadding = props.disablePadding,
      disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding,
      subheader = props.subheader,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    return {
      dense: dense
    };
  }, [dense]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ListContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: context
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
    ref: ref
  }, other), subheader, children));
});
 true ? List.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   */
  dense: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiList'
})(List));

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/List/ListContext.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/List/ListContext.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var ListContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
/* harmony default export */ __webpack_exports__["default"] = (ListContext);

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/List/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/List/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "../node_modules/@material-ui/core/esm/List/List.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _List__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/esm/ListItem/ListItem.js":
/*!******************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/ListItem/ListItem.js ***!
  \******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "../node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ButtonBase */ "../node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/reactHelpers */ "../node_modules/@material-ui/core/esm/utils/reactHelpers.js");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../List/ListContext */ "../node_modules/@material-ui/core/esm/List/ListContext.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! warning */ "../node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_11__);












var styles = function styles(theme) {
  return {
    /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      paddingTop: 8,
      paddingBottom: 8,
      '&$focusVisible': {
        backgroundColor: theme.palette.action.selected
      },
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.action.selected
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
    container: {
      position: 'relative'
    },

    /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
    focusVisible: {},

    /* Styles applied to the `component` element if dense. */
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },

    /* Styles applied to the `component` element if `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      alignItems: 'flex-start'
    },

    /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the inner `component` element if `divider={true}`. */
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: 'padding-box'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the inner `component` element if `button={true}`. */
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    },

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {}
  };
};
var useEnhancedEffect =  false ? undefined : react__WEBPACK_IMPORTED_MODULE_2___default.a.useLayoutEffect;
/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */

var ListItem = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function ListItem(props, ref) {
  var _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$button = props.button,
      button = _props$button === void 0 ? false : _props$button,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      componentProp = props.component,
      _props$ContainerCompo = props.ContainerComponent,
      ContainerComponent = _props$ContainerCompo === void 0 ? 'li' : _props$ContainerCompo,
      _props$ContainerProps = props.ContainerProps;
  _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;

  var ContainerClassName = _props$ContainerProps.className,
      ContainerProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_props$ContainerProps, ["className"]),
      dense = props.dense,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$divider = props.divider,
      divider = _props$divider === void 0 ? false : _props$divider,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_9__["default"]);
  var childContext = {
    dense: dense || context.dense || false,
    alignItems: alignItems
  };
  var listItemRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  useEnhancedEffect(function () {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else {
         true ? warning__WEBPACK_IMPORTED_MODULE_11___default()(false, 'Material-UI: unable to set focus to a ListItem whose component has not been rendered.') : undefined;
      }
    }
  }, [autoFocus]);
  var children = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.toArray(childrenProp);
  var hasSecondaryAction = children.length && Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_8__["isMuiElement"])(children[children.length - 1], ['ListItemSecondaryAction']);
  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (instance) {
    // #StrictMode ready
    listItemRef.current = react_dom__WEBPACK_IMPORTED_MODULE_10___default.a.findDOMNode(instance);
  }, []);
  var handleRef = Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_8__["useForkRef"])(handleOwnRef, ref);

  var componentProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled: disabled
  }, other);

  var Component = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.focusVisible, focusVisibleClassName);
    Component = _ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"];
  }

  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_List_ListContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
      value: childContext
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ContainerComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, componentProps, children), children.pop()));
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_List_ListContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
    value: childContext
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: handleRef
  }, componentProps), children));
});
 true ? ListItem.propTypes = {
  /**
   * Defines the `align-items` style property.
   */
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['flex-start', 'center']),

  /**
   * If `true`, the list item will be focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the list item will be a button (using `ButtonBase`).
   */
  button: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The content of the component. If a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node, function (props) {
    var children = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.toArray(props.children); // React.Children.toArray(props.children).findLastIndex(isListItemSecondaryAction)

    var secondaryActionIndex = -1;

    for (var i = children.length - 1; i >= 0; i -= 1) {
      var child = children[i];

      if (Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_8__["isMuiElement"])(child, ['ListItemSecondaryAction'])) {
        secondaryActionIndex = i;
        break;
      }
    } //  is ListItemSecondaryAction the last child of ListItem


    if (secondaryActionIndex !== -1 && secondaryActionIndex !== children.length - 1) {
      return new Error('Material-UI: you used an element after ListItemSecondaryAction. ' + 'For ListItem to detect that it has a secondary action ' + 'you must pass it as the last child to ListItem.');
    }

    return null;
  }),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   */
  ContainerComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * Props applied to the container component if used.
   */
  ContainerProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the list item will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Use to apply selected styling.
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiListItem'
})(ListItem));

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/ListItem/index.js":
/*!***************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/ListItem/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItem */ "../node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ListItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Menu/Menu.js":
/*!**********************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Menu/Menu.js ***!
  \**********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Popover */ "../node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MenuList */ "../node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! warning */ "../node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/reactHelpers */ "../node_modules/@material-ui/core/esm/utils/reactHelpers.js");











var RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
var styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  },

  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none'
  }
};
var Menu = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Menu(props, ref) {
  var autoFocusProp = props.autoFocus,
      children = props.children,
      classes = props.classes,
      _props$disableAutoFoc = props.disableAutoFocusItem,
      disableAutoFocusItem = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$MenuListProps = props.MenuListProps,
      MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps,
      onClose = props.onClose,
      onEntering = props.onEntering,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      PopoverClasses = props.PopoverClasses,
      theme = props.theme,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "theme", "transitionDuration", "variant"]);

  var autoFocus = (autoFocusProp !== undefined ? autoFocusProp : !disableAutoFocusItem) && open;
  var menuListActionsRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  var firstValidItemRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  var firstSelectedItemRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);

  var getContentAnchorEl = function getContentAnchorEl() {
    return firstSelectedItemRef.current || firstValidItemRef.current;
  };

  var handleEntering = function handleEntering(element) {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }

    if (onEntering) {
      onEntering(element);
    }
  };

  var handleListKeyDown = function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();

      if (onClose) {
        onClose(event, 'tabKeyDown');
      }
    }
  };

  var firstValidElementIndex = null;
  var firstSelectedIndex = null;
  var items = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.map(children, function (child, index) {
    if (!react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(child)) {
      return null;
    }

     true ? warning__WEBPACK_IMPORTED_MODULE_8___default()(child.type !== react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, ["Material-UI: the Menu component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n')) : undefined;

    if (firstValidElementIndex === null) {
      firstValidElementIndex = index;
    }

    var newChildProps = null;

    if (variant !== "menu" && firstSelectedIndex === null && child.props.selected && !child.props.disabled) {
      firstSelectedIndex = index;
      newChildProps = {};

      if (autoFocus) {
        newChildProps.autoFocus = true;
      }

      if (child.props.tabIndex === undefined) {
        newChildProps.tabIndex = 0;
      }

      newChildProps.ref = function (instance) {
        // #StrictMode ready
        firstSelectedItemRef.current = react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.findDOMNode(instance);
        Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_10__["setRef"])(child.ref, instance);
      };
    } else if (index === firstValidElementIndex) {
      newChildProps = {
        ref: function ref(instance) {
          // #StrictMode ready
          firstValidItemRef.current = react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.findDOMNode(instance);
          Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_10__["setRef"])(child.ref, instance);
        }
      };
    }

    if (newChildProps !== null) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, newChildProps);
    }

    return child;
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Popover__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    getContentAnchorEl: getContentAnchorEl,
    classes: PopoverClasses,
    onClose: onClose,
    onEntering: handleEntering,
    anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, PaperProps, {
      classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    open: open,
    ref: ref,
    transitionDuration: transitionDuration
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuList__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onKeyDown: handleListKeyDown,
    actions: menuListActionsRef,
    autoFocus: autoFocus && firstSelectedIndex === null
  }, MenuListProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.list, MenuListProps.className)
  }), items));
});
 true ? Menu.propTypes = {
  /**
   * The DOM element used to set the position of the menu.
   */
  anchorEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),

  /**
   * If `true` (default), the menu list (possibly a particular item depending on the menu variant) will receive focus on open.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * Same as `autoFocus=false`.
   * @deprecated Use `autoFocus` instead
   */
  disableAutoFocusItem: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Props applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired before the Menu enters.
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired before the Menu exits.
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the Menu has exited.
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, the menu is visible.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,

  /**
   * @ignore
   */
  PaperProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * `classes` prop applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    enter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  }), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['auto'])]),

  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['menu', 'selectedMenu'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiMenu',
  withTheme: true
})(Menu));

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Menu/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Menu/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "../node_modules/@material-ui/core/esm/Menu/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/esm/MenuItem/MenuItem.js":
/*!******************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/MenuItem/MenuItem.js ***!
  \******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ListItem */ "../node_modules/@material-ui/core/esm/ListItem/index.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.subtitle1, {
      minHeight: 48,
      paddingTop: 4,
      paddingBottom: 4,
      boxSizing: 'border-box',
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }),

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the root element if dense. */
    dense: {
      minHeight: 'auto'
    }
  };
};
var MenuItem = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function MenuItem(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$role = props.role,
      role = _props$role === void 0 ? 'menuitem' : _props$role,
      selected = props.selected,
      tabIndexProp = props.tabIndex,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["classes", "className", "component", "disableGutters", "role", "selected", "tabIndex"]);

  var tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    button: true,
    role: role,
    tabIndex: tabIndex,
    component: component,
    selected: selected,
    disableGutters: disableGutters,
    classes: {
      dense: classes.dense
    },
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 true ? MenuItem.propTypes = {
  /**
   * Menu item contents.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiMenuItem'
})(MenuItem));

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/MenuItem/index.js":
/*!***************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/MenuItem/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItem */ "../node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/esm/MenuList/MenuList.js":
/*!******************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/MenuList/MenuList.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ownerDocument */ "../node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../List */ "../node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getScrollbarSize */ "../node_modules/@material-ui/core/esm/utils/getScrollbarSize.js");
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/reactHelpers */ "../node_modules/@material-ui/core/esm/utils/reactHelpers.js");










function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return disableListWrap ? null : list.firstChild;
}

function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return disableListWrap ? null : list.lastChild;
}

function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === undefined) {
    return true;
  }

  var text = nextFocus.innerText;

  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent;
  }

  if (text === undefined) {
    return false;
  }

  text = text.trim().toLowerCase();

  if (text.length === 0) {
    return false;
  }

  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }

  return text.indexOf(textCriteria.keys.join('')) === 0;
}

function moveFocus(list, currentFocus, disableListWrap, traversalFunction, textCriteria) {
  var wrappedOnce = false;
  var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }

      wrappedOnce = true;
    } // Move to the next element.


    if (!nextFocus.hasAttribute('tabindex') || nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true' || !textCriteriaMatches(nextFocus, textCriteria)) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }

  return false;
}

var useEnhancedEffect =  false ? undefined : react__WEBPACK_IMPORTED_MODULE_2___default.a.useLayoutEffect;
var MenuList = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function MenuList(props, ref) {
  var actions = props.actions,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      className = props.className,
      onKeyDown = props.onKeyDown,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["actions", "autoFocus", "className", "onKeyDown", "disableListWrap"]);

  var listRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  var textCriteriaRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect(function () {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useImperativeHandle(actions, function () {
    return {
      adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
        // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.
        var noExplicitWidth = !listRef.current.style.width;

        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          var scrollbarSize = "".concat(Object(_utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_7__["default"])(true), "px");
          listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
          listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
        }

        return listRef.current;
      }
    };
  }, []);

  var handleKeyDown = function handleKeyDown(event) {
    var list = listRef.current;
    var key = event.key;
    /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */

    var currentFocus = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_5__["default"])(list).activeElement;

    if (key === 'ArrowDown') {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, nextItem);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, previousItem);
    } else if (key === 'Home') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, nextItem);
    } else if (key === 'End') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, previousItem);
    } else if (key.length === 1) {
      var criteria = textCriteriaRef.current;
      var lowerKey = key.toLowerCase();
      var currTime = performance.now();

      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }

      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (instance) {
    // #StrictMode ready
    listRef.current = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(instance);
  }, []);
  var handleRef = Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_8__["useForkRef"])(handleOwnRef, ref);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "menu",
    ref: handleRef,
    className: className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other));
});
 true ? MenuList.propTypes = {
  /**
   * @ignore
   */
  actions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
  }),

  /**
   * If `true`, the list will be focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the menu items will not wrap focus.
   */
  disableListWrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (MenuList);

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/MenuList/index.js":
/*!***************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/MenuList/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuList */ "../node_modules/@material-ui/core/esm/MenuList/MenuList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuList__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Modal/Modal.js":
/*!************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Modal/Modal.js ***!
  \************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/utils */ "../node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ownerDocument */ "../node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Portal */ "../node_modules/@material-ui/core/esm/Portal/index.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/helpers */ "../node_modules/@material-ui/core/esm/utils/helpers.js");
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/reactHelpers */ "../node_modules/@material-ui/core/esm/utils/reactHelpers.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/useEventCallback */ "../node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _styles_zIndex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/zIndex */ "../node_modules/@material-ui/core/esm/styles/zIndex.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ModalManager */ "../node_modules/@material-ui/core/esm/Modal/ModalManager.js");
/* harmony import */ var _TrapFocus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TrapFocus */ "../node_modules/@material-ui/core/esm/Modal/TrapFocus.js");
/* harmony import */ var _SimpleBackdrop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SimpleBackdrop */ "../node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js");


















function getContainer(container) {
  container = typeof container === 'function' ? container() : container;
  return react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(container);
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


var defaultManager = new _ModalManager__WEBPACK_IMPORTED_MODULE_14__["default"]();
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },

    /* Styles applied to the root element if the `Modal` has exited. */
    hidden: {
      visibility: 'hidden'
    }
  };
};
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

var Modal = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function Modal(props, ref) {
  var _props$BackdropCompon = props.BackdropComponent,
      BackdropComponent = _props$BackdropCompon === void 0 ? _SimpleBackdrop__WEBPACK_IMPORTED_MODULE_16__["default"] : _props$BackdropCompon,
      BackdropProps = props.BackdropProps,
      children = props.children,
      _props$closeAfterTran = props.closeAfterTransition,
      closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
      container = props.container,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      _props$disableScrollL = props.disableScrollLock,
      disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL,
      _props$hideBackdrop = props.hideBackdrop,
      hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      _props$manager = props.manager,
      manager = _props$manager === void 0 ? defaultManager : _props$manager,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onRendered = props.onRendered,
      open = props.open,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);

  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      exited = _React$useState2[0],
      setExited = _React$useState2[1];

  var modal = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef({});
  var mountNodeRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);
  var modalRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);
  var handleRef = Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_11__["useForkRef"])(modalRef, ref);
  var hasTransition = getHasTransition(props);

  var getDoc = function getDoc() {
    return Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__["default"])(mountNodeRef.current);
  };

  var getModal = function getModal() {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  var handleMounted = function handleMounted() {
    manager.mount(getModal(), {
      disableScrollLock: disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  var handleOpen = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(function () {
    var resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  var isTopModal = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function () {
    return manager.isTopModal(getModal());
  }, [manager]);
  var handlePortalRef = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(function (node) {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (onRendered) {
      onRendered();
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      Object(_ModalManager__WEBPACK_IMPORTED_MODULE_14__["ariaHidden"])(modalRef.current, true);
    }
  });
  var handleClose = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function () {
    manager.remove(getModal());
  }, [manager]);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    return function () {
      handleClose();
    };
  }, [handleClose]);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleExited = function handleExited() {
    setExited(true);

    if (closeAfterTransition) {
      handleClose();
    }
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // We don't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviours like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    } // Swallow the event, in case someone is listening for the escape key on the body.


    event.stopPropagation();

    if (onEscapeKeyDown) {
      onEscapeKeyDown(event);
    }

    if (!disableEscapeKeyDown && onClose) {
      onClose(event, 'escapeKeyDown');
    }
  };

  var inlineStyle = styles(theme || {
    zIndex: _styles_zIndex__WEBPACK_IMPORTED_MODULE_13__["default"]
  });
  var childProps = {}; // FixMe: Always apply document role. Revisit once React Flare is released

  if (children.role === undefined) {
    childProps.role = children.role || 'document';
  }

  if (children.tabIndex === undefined) {
    childProps.tabIndex = children.tabIndex || '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_10__["createChainedFunction"])(handleEnter, children.props.onEnter);
    childProps.onExited = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_10__["createChainedFunction"])(handleExited, children.props.onExited);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: handleRef,
    onKeyDown: handleKeyDown,
    role: "presentation"
  }, other, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, inlineStyle.root, {}, !open && exited ? inlineStyle.hidden : {}, {}, other.style)
  }), hideBackdrop ? null : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(BackdropComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: open,
    onClick: handleBackdropClick
  }, BackdropProps)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TrapFocus__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disableEnforceFocus: disableEnforceFocus,
    disableAutoFocus: disableAutoFocus,
    disableRestoreFocus: disableRestoreFocus,
    getDoc: getDoc,
    isEnabled: isTopModal,
    open: open
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(children, childProps))));
});
 true ? Modal.propTypes = {
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   */
  BackdropComponent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.elementType,

  /**
   * Props applied to the [`Backdrop`](/api/backdrop/) element.
   */
  BackdropProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * A single child content element.
   */
  children: _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__["elementAcceptingRef"].isRequired,

  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   */
  closeAfterTransition: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * If `true`, clicking the backdrop will not fire any callback.
   */
  disableBackdropClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * If `true`, hitting escape will not fire any callback.
   */
  disableEscapeKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Disable the scroll lock behavior.
   */
  disableScrollLock: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * @ignore
   */
  manager: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` prop took effect.
   *
   * This prop will be deprecated and removed in v5, the ref can be used instead.
   */
  onRendered: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * If `true`, the modal is open.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Modal/ModalManager.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Modal/ModalManager.js ***!
  \*******************************************************************/
/*! exports provided: ariaHidden, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ariaHidden", function() { return ariaHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalManager; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getScrollbarSize */ "../node_modules/@material-ui/core/esm/utils/getScrollbarSize.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ownerDocument */ "../node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ownerWindow */ "../node_modules/@material-ui/core/esm/utils/ownerWindow.js");





 // Do we have a vertical scrollbar?

function isOverflowing(container) {
  var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_4__["default"])(container);

  if (doc.body === container) {
    var win = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_5__["default"])(doc);
    return win.innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(node, show) {
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(node) {
  return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0;
}

var BLACKLIST = ['template', 'script', 'style'];

function isHideable(node) {
  return node.nodeType === 1 && BLACKLIST.indexOf(node.tagName.toLowerCase()) === -1;
}

function siblings(container, mount, currentNode, nodesToExclude, callback) {
  var blacklist = [mount, currentNode].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(nodesToExclude));
  [].forEach.call(container.children, function (node) {
    if (blacklist.indexOf(node) === -1 && isHideable(node)) {
      callback(node);
    }
  });
}

function ariaHiddenSiblings(container, mountNode, currentNode) {
  var nodesToExclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var show = arguments.length > 4 ? arguments[4] : undefined;
  siblings(container, mountNode, currentNode, nodesToExclude, function (node) {
    return ariaHidden(node, show);
  });
}

function findIndexOf(containerInfo, callback) {
  var idx = -1;
  containerInfo.some(function (item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  var restoreStyle = {};
  var style = {};
  var restorePaddings = [];
  var fixedNodes;

  if (!props.disableScrollLock) {
    restoreStyle.overflow = containerInfo.container.style.overflow;
    restoreStyle['padding-right'] = containerInfo.container.style.paddingRight;
    style.overflow = 'hidden';

    if (isOverflowing(containerInfo.container)) {
      var scrollbarSize = Object(_utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Use computed style, here to get the real padding to add our scrollbar width.

      style['padding-right'] = "".concat(getPaddingRight(containerInfo.container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

      fixedNodes = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_4__["default"])(containerInfo.container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedNodes, function (node) {
        restorePaddings.push(node.style.paddingRight);
        node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
      });
    }
  }

  Object.keys(style).forEach(function (key) {
    containerInfo.container.style[key] = style[key];
  });

  var restore = function restore() {
    if (fixedNodes) {
      [].forEach.call(fixedNodes, function (node, i) {
        if (restorePaddings[i]) {
          node.style.paddingRight = restorePaddings[i];
        } else {
          node.style.removeProperty('padding-right');
        }
      });
    }

    Object.keys(restoreStyle).forEach(function (key) {
      if (restoreStyle[key]) {
        containerInfo.container.style.setProperty(key, restoreStyle[key]);
      } else {
        containerInfo.container.style.removeProperty(key);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  var hiddenSiblings = [];
  [].forEach.call(container.children, function (node) {
    if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(node);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */


var ModalManager =
/*#__PURE__*/
function () {
  function ModalManager() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ModalManager);

    // this.modals[modalIndex] = modal
    this.modals = []; // this.contaniners[containerIndex] = {
    //   modals: [],
    //   container,
    //   restore: null,
    // }

    this.contaniners = [];
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ModalManager, [{
    key: "add",
    value: function add(modal, container) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex !== -1) {
        return modalIndex;
      }

      modalIndex = this.modals.length;
      this.modals.push(modal); // If the modal we are adding is already in the DOM.

      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }

      var hiddenSiblingNodes = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
      var containerIndex = findIndexOf(this.contaniners, function (item) {
        return item.container === container;
      });

      if (containerIndex !== -1) {
        this.contaniners[containerIndex].modals.push(modal);
        return modalIndex;
      }

      this.contaniners.push({
        modals: [modal],
        container: container,
        restore: null,
        hiddenSiblingNodes: hiddenSiblingNodes
      });
      return modalIndex;
    }
  }, {
    key: "mount",
    value: function mount(modal, props) {
      var containerIndex = findIndexOf(this.contaniners, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.contaniners[containerIndex];

      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
  }, {
    key: "remove",
    value: function remove(modal) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex === -1) {
        return modalIndex;
      }

      var containerIndex = findIndexOf(this.contaniners, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.contaniners[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

      if (containerInfo.modals.length === 0) {
        // The modal might be closed before it had the chance to be mounted in the DOM.
        if (containerInfo.restore) {
          containerInfo.restore();
        }

        if (modal.modalRef) {
          // In case the modal wasn't in the DOM yet.
          ariaHidden(modal.modalRef, true);
        }

        ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
        this.contaniners.splice(containerIndex, 1);
      } else {
        // Otherwise make sure the next top modal is visible to a screen reader.
        var nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
        // aria-hidden because the dom element doesn't exist either
        // when modal was unmounted before modalRef gets null

        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }

      return modalIndex;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal(modal) {
      return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
    }
  }]);

  return ModalManager;
}();



/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js ***!
  \*********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var styles = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    // Disable scroll capabilities.
    touchAction: 'none'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
/**
 * @ignore - internal component.
 */

var SimpleBackdrop = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function SimpleBackdrop(props, ref) {
  var _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["invisible", "open"]);

  return open ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-hidden": true,
    ref: ref
  }, other, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.root, {}, invisible ? styles.invisible : {}, {}, other.style)
  })) : null;
});
 true ? SimpleBackdrop.propTypes = {
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the backdrop is open.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (SimpleBackdrop);

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Modal/TrapFocus.js":
/*!****************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Modal/TrapFocus.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! warning */ "../node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ownerDocument */ "../node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/reactHelpers */ "../node_modules/@material-ui/core/esm/utils/reactHelpers.js");
/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */






/**
 * @ignore - internal component.
 */

function TrapFocus(props) {
  var children = props.children,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      getDoc = props.getDoc,
      isEnabled = props.isEnabled,
      open = props.open;
  var ignoreNextEnforceFocus = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  var sentinelStart = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  var sentinelEnd = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  var nodeToRestore = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  var rootRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (instance) {
    // #StrictMode ready
    rootRef.current = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(instance);
  }, []);
  var handleRef = Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_5__["useForkRef"])(children.ref, handleOwnRef); // ⚠️ You may rely on React.useMemo as a performance optimization, not as a semantic guarantee.
  // https://reactjs.org/docs/hooks-reference.html#usememo

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    if (!open || "object" === 'undefined') {
      return;
    }

    nodeToRestore.current = getDoc().activeElement;
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (!open) {
      return;
    }

    var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_4__["default"])(rootRef.current); // We might render an empty child.

    if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
         true ? warning__WEBPACK_IMPORTED_MODULE_3___default()(false, ['Material-UI: the modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n')) : undefined;
        rootRef.current.setAttribute('tabIndex', -1);
      }

      rootRef.current.focus();
    }

    var contain = function contain() {
      if (disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        rootRef.current.focus();
      }
    };

    var loopFocus = function loopFocus(event) {
      // 9 = Tab
      if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
        return;
      } // Make sure the next tab starts from the right place.


      if (doc.activeElement === rootRef.current) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;

        if (event.shiftKey) {
          sentinelEnd.current.focus();
        } else {
          sentinelStart.current.focus();
        }
      }
    };

    doc.addEventListener('focus', contain, true);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    var interval = setInterval(function () {
      contain();
    }, 50);
    return function () {
      clearInterval(interval);
      doc.removeEventListener('focus', contain, true);
      doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

      if (!disableRestoreFocus) {
        // In IE 11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE 11 have a focus method.
        // Once IE 11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    tabIndex: 0,
    ref: sentinelStart,
    "data-test": "sentinelStart"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    ref: handleRef
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    tabIndex: 0,
    ref: sentinelEnd,
    "data-test": "sentinelEnd"
  }));
}

 true ? TrapFocus.propTypes = {
  /**
   * A single child content element.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired,

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Return the document to consider.
   * We use it to implement the restore focus between different browser documents.
   */
  getDoc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
   * Do we still want to enforce the focus?
   * This prop helps nesting TrapFocus elements.
   */
  isEnabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
   * If `true`, the modal is open.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
} : undefined;
/*

In the future, we should be able to replace TrapFocus with:
https://github.com/facebook/react/blob/master/packages/react-events/docs/FocusScope.md

```jsx
import FocusScope from 'react-dom/FocusScope';

function TrapFocus(props) {
  const {
    children
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    open,
  } = props;

  if (!open) {
    return children;
  }

  return (
    <FocusScope
      autoFocus={!disableAutoFocus}
      contain={!disableEnforceFocus}
      restoreFocus={!disableRestoreFocus}
    >
      {children}
    </FocusScope>
  );
}
```

*/

/* harmony default export */ __webpack_exports__["default"] = (TrapFocus);

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Modal/index.js":
/*!************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Modal/index.js ***!
  \************************************************************/
/*! exports provided: default, ModalManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "../node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Modal__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalManager */ "../node_modules/@material-ui/core/esm/Modal/ModalManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalManager", function() { return _ModalManager__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Popover/Popover.js":
/*!****************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Popover/Popover.js ***!
  \****************************************************************/
/*! exports provided: getOffsetTop, getOffsetLeft, styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetTop", function() { return getOffsetTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetLeft", function() { return getOffsetLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "../node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/debounce */ "../node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/utils */ "../node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ownerDocument */ "../node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/ownerWindow */ "../node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/helpers */ "../node_modules/@material-ui/core/esm/utils/helpers.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Modal */ "../node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Grow */ "../node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
















function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}
function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? "".concat(n, "px") : n;
  }).join(' ');
} // Sum the scrollTop between two elements.


function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentNode;
    scrollTop += element.scrollTop;
  }

  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none'
  }
};
var Popover = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Popover(props, ref) {
  var action = props.action,
      anchorEl = props.anchorEl,
      _props$anchorOrigin = props.anchorOrigin,
      anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$anchorOrigin,
      anchorPosition = props.anchorPosition,
      _props$anchorReferenc = props.anchorReference,
      anchorReference = _props$anchorReferenc === void 0 ? 'anchorEl' : _props$anchorReferenc,
      children = props.children,
      classes = props.classes,
      containerProp = props.container,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 8 : _props$elevation,
      getContentAnchorEl = props.getContentAnchorEl,
      _props$marginThreshol = props.marginThreshold,
      marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol,
      ModalClasses = props.ModalClasses,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$transformOrigi = props.transformOrigin,
      transformOrigin = _props$transformOrigi === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$transformOrigi,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Grow__WEBPACK_IMPORTED_MODULE_14__["default"] : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDurationProp = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$TransitionProp = props.TransitionProps,
      TransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "container", "elevation", "getContentAnchorEl", "marginThreshold", "ModalClasses", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  var paperRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var handleResizeRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(function () {});
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useImperativeHandle(action, function () {
    return {
      updatePosition: handleResizeRef.current
    };
  }, []); // Returns the top/left offset of the position
  // to attach to on the anchor element (or body if none is provided)

  var getAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (contentAnchorOffset) {
    if (anchorReference === 'anchorPosition') {
       true ? warning__WEBPACK_IMPORTED_MODULE_5___default()(anchorPosition, 'Material-UI: you need to provide a `anchorPosition` prop when using ' + '<Popover anchorReference="anchorPosition" />.') : undefined;
      return anchorPosition;
    }

    var resolvedAnchorEl = getAnchorEl(anchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

    var anchorElement = resolvedAnchorEl instanceof Element ? resolvedAnchorEl : Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_9__["default"])(paperRef.current).body;
    var anchorRect = anchorElement.getBoundingClientRect();
    var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the vertical offset of inner content to anchor the transform on if provided

  var getContentAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (element) {
    var contentAnchorOffset = 0;

    if (getContentAnchorEl && anchorReference === 'anchorEl') {
      var contentAnchorEl = getContentAnchorEl(element);

      if (contentAnchorEl && element.contains(contentAnchorEl)) {
        var scrollTop = getScrollParent(element, contentAnchorEl);
        contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
      } // != the default value


       true ? warning__WEBPACK_IMPORTED_MODULE_5___default()(anchorOrigin.vertical === 'top', ['Material-UI: you can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` prop to the popover component.', 'Only use one of the two props.', 'Set `getContentAnchorEl` to `null | undefined`' + ' or leave `anchorOrigin.vertical` unchanged.'].join('\n')) : undefined;
    }

    return contentAnchorOffset;
  }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]); // Return the base transform origin using the element
  // and taking the content anchor offset into account if in use

  var getTransformOrigin = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (elemRect) {
    var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  var getPositioningStyle = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (element) {
    // Check if the parent has requested anchoring on an inner content node
    var contentAnchorOffset = getContentAnchorOffset(element);
    var elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    }; // Get the transform origin point on the element itself

    var elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);

    if (anchorReference === 'none') {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    } // Get the offset of of the anchoring element


    var anchorOffset = getAnchorOffset(contentAnchorOffset); // Calculate element positioning

    var top = anchorOffset.top - elemTransformOrigin.vertical;
    var left = anchorOffset.left - elemTransformOrigin.horizontal;
    var bottom = top + elemRect.height;
    var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

    var containerWindow = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_10__["default"])(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

    var heightThreshold = containerWindow.innerHeight - marginThreshold;
    var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

    if (top < marginThreshold) {
      var diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      var _diff = bottom - heightThreshold;

      top -= _diff;
      elemTransformOrigin.vertical += _diff;
    }

     true ? warning__WEBPACK_IMPORTED_MODULE_5___default()(elemRect.height <= heightThreshold || !elemRect.height || !heightThreshold, ['Material-UI: the popover component is too tall.', "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), 'Please consider adding a `max-height` to improve the user-experience.'].join('\n')) : undefined; // Check if the horizontal axis needs shifting

    if (left < marginThreshold) {
      var _diff2 = left - marginThreshold;

      left -= _diff2;
      elemTransformOrigin.horizontal += _diff2;
    } else if (right > widthThreshold) {
      var _diff3 = right - widthThreshold;

      left -= _diff3;
      elemTransformOrigin.horizontal += _diff3;
    }

    return {
      top: "".concat(top, "px"),
      left: "".concat(left, "px"),
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
  var setPositioningStyles = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (element) {
    var positioning = getPositioningStyle(element);

    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }

    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }

    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);

  var handleEntering = function handleEntering(element) {
    if (onEntering) {
      onEntering(element);
    }

    setPositioningStyles(element);
  };

  var handlePaperRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (instance) {
    // #StrictMode ready
    paperRef.current = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(instance);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    handleResizeRef.current = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
      // Because we debounce the event, the open prop might no longer be true
      // when the callback resolves.
      if (!open) {
        return;
      }

      setPositioningStyles(paperRef.current);
    });
    window.addEventListener('resize', handleResizeRef.current);
    return function () {
      handleResizeRef.current.clear();
      window.removeEventListener('resize', handleResizeRef.current);
    };
  }, [open, setPositioningStyles]);
  var transitionDuration = transitionDurationProp;

  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  } // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container


  var container = containerProp || (anchorEl ? Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_9__["default"])(getAnchorEl(anchorEl)).body : undefined);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    classes: ModalClasses,
    container: container,
    open: open,
    ref: ref,
    BackdropProps: {
      invisible: true
    }
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    appear: true,
    in: open,
    onEnter: onEnter,
    onEntered: onEntered,
    onExit: onExit,
    onExited: onExited,
    onExiting: onExiting,
    timeout: transitionDuration
  }, TransitionProps, {
    onEntering: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_11__["createChainedFunction"])(handleEntering, TransitionProps.onEntering)
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    elevation: elevation,
    ref: handlePaperRef
  }, PaperProps, {
    // eslint-disable-next-line react/prop-types
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.paper, PaperProps.className)
  }), children)));
});
 true ? Popover.propTypes = {
  /**
   * This is callback prop. It's called by the component on mount.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports updatePosition() action.
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * This is the DOM element, or a function that returns the DOM element,
   * that may be used to set the position of the popover.
   */
  anchorEl: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_8__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]), function (props) {
    if (props.open && (!props.anchorReference || props.anchorReference === 'anchorEl')) {
      var resolvedAnchorEl = getAnchorEl(props.anchorEl);

      if (resolvedAnchorEl instanceof Element) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['Material-UI: the `anchorEl` prop provided to the component is invalid.', 'The node element should be visible.'].join('\n'));
        }
      } else {
        return new Error(['Material-UI: the `anchorEl` prop provided to the component is invalid.', "It should be an Element instance but it's `".concat(resolvedAnchorEl, "` instead.")].join('\n'));
      }
    }

    return null;
  }),

  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'center', 'right'])]).isRequired,
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['top', 'center', 'bottom'])]).isRequired
  }),

  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    left: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
    top: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
  }),

  /*
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['anchorEl', 'anchorPosition', 'none']),

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),

  /**
   * The elevation of the popover.
   */
  elevation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` prop.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * `classes` prop applied to the [`Modal`](/api/modal/) element.
   */
  ModalClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired before the component is entering.
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component has entered.
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component is entering.
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired before the component is exiting.
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component has exited.
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component is exiting.
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, the popover is visible.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,

  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    component: _material_ui_utils__WEBPACK_IMPORTED_MODULE_8__["elementTypeAcceptingRef"]
  }),

  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'center', 'right'])]).isRequired,
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['top', 'center', 'bottom'])]).isRequired
  }),

  /**
   * The component used for the transition.
   */
  TransitionComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    enter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  }), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['auto'])]),

  /**
   * Props applied to the `Transition` element.
   */
  TransitionProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__["default"])(styles, {
  name: 'MuiPopover'
})(Popover));

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Popover/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Popover/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popover */ "../node_modules/@material-ui/core/esm/Popover/Popover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Popover__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Portal/Portal.js":
/*!**************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Portal/Portal.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "../node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/reactHelpers */ "../node_modules/@material-ui/core/esm/utils/reactHelpers.js");







function getContainer(container) {
  container = typeof container === 'function' ? container() : container; // #StrictMode ready

  return react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.findDOMNode(container);
}

var useEnhancedEffect =  true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.useLayoutEffect : undefined;
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

var Portal = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function Portal(props, ref) {
  var children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      onRendered = props.onRendered;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      mountNode = _React$useState2[0],
      setMountNode = _React$useState2[1];

  var handleRef = Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_5__["useForkRef"])(children.ref, ref);
  useEnhancedEffect(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(function () {
    if (mountNode && !disablePortal) {
      Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_5__["setRef"])(ref, mountNode);
      return function () {
        Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_5__["setRef"])(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect(function () {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);

  if (disablePortal) {
    react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(children);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
      ref: handleRef
    });
  }

  return mountNode ? react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(children, mountNode) : mountNode;
});
 true ? Portal.propTypes = {
  /**
   * The children to render into the `container`.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Callback fired once the children has been mounted into the `container`.
   *
   * This prop will be deprecated and removed in v5, the ref can be used instead.
   */
  onRendered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
} : undefined;

if (true) {
  // eslint-disable-next-line
  Portal['propTypes' + ''] = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_4__["exactProp"])(Portal.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Portal/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Portal/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portal */ "../node_modules/@material-ui/core/esm/Portal/Portal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Portal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/debounce */ "../node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/reactHelpers */ "../node_modules/@material-ui/core/esm/utils/reactHelpers.js");








function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

var useEnhancedEffect =  true ? react__WEBPACK_IMPORTED_MODULE_3___default.a.useLayoutEffect : undefined;
var styles = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0
  }
};
var TextareaAutosize = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function TextareaAutosize(props, ref) {
  var onChange = props.onChange,
      rows = props.rows,
      rowsMax = props.rowsMax,
      style = props.style,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["onChange", "rows", "rowsMax", "style", "value"]);

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);
  var handleRef = Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_6__["useForkRef"])(ref, inputRef);
  var shadowRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({}),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var syncHeight = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function () {
    var input = inputRef.current;
    var computedStyle = window.getComputedStyle(input);
    var inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';
    var boxSizing = computedStyle['box-sizing'];
    var padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
    var border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

    var innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

    inputShallow.value = 'x';
    var singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

    var outerHeight = innerHeight;

    if (rows != null) {
      outerHeight = Math.max(Number(rows) * singleRowHeight, outerHeight);
    }

    if (rowsMax != null) {
      outerHeight = Math.min(Number(rowsMax) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

    var outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    setState(function (prevState) {
      // Need a large enough different to update the height.
      // This prevents infinite rendering loop.
      if (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1) {
        return {
          innerHeight: innerHeight,
          outerHeight: outerHeight,
          outerHeightStyle: outerHeightStyle
        };
      }

      return prevState;
    });
  }, [setState, rows, rowsMax, props.placeholder]);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
      syncHeight();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [syncHeight]);
  useEnhancedEffect(function () {
    syncHeight();
  });

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("textarea", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: value,
    onChange: handleChange,
    ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
    ,
    rows: rows || 1,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      height: state.outerHeightStyle,
      // Need a large enough different to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: Math.abs(state.outerHeight - state.innerHeight) <= 1 ? 'hidden' : null
    }, style)
  }, other)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.shadow, {}, style)
  }));
});
 true ? TextareaAutosize.propTypes = {
  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * @ignore
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Minimum umber of rows to display.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),

  /**
   * Maximum number of rows to display.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (TextareaAutosize);

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/TextareaAutosize/index.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/TextareaAutosize/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextareaAutosize */ "../node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/esm/transitions/utils.js":
/*!******************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/transitions/utils.js ***!
  \******************************************************************/
/*! exports provided: reflow, getTransitionProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reflow", function() { return reflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionProps", function() { return getTransitionProps; });
var reflow = function reflow(node) {
  return node.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/utils/debounce.js":
/*!***************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/utils/debounce.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
  var timeout;

  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // eslint-disable-next-line consistent-this
    var that = this;

    var later = function later() {
      func.apply(that, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = function () {
    clearTimeout(timeout);
  };

  return debounced;
}

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/utils/getScrollbarSize.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/utils/getScrollbarSize.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
function getScrollbarSize() {
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarSize;
}

/* harmony default export */ __webpack_exports__["default"] = (getScrollbarSize);

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/utils/ownerDocument.js":
/*!********************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/utils/ownerDocument.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/* harmony default export */ __webpack_exports__["default"] = (ownerDocument);

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/utils/ownerWindow.js":
/*!******************************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/utils/ownerWindow.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "../node_modules/@material-ui/core/esm/utils/ownerDocument.js");


function ownerWindow(node) {
  var doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return doc.defaultView || window;
}

/* harmony default export */ __webpack_exports__["default"] = (ownerWindow);

/***/ }),

/***/ "../node_modules/@material-ui/icons/AccountCircle.js":
/*!***********************************************************!*\
  !*** ../node_modules/@material-ui/icons/AccountCircle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
}), 'AccountCircle');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/Mail.js":
/*!**************************************************!*\
  !*** ../node_modules/@material-ui/icons/Mail.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
}), 'Mail');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/MoreVert.js":
/*!******************************************************!*\
  !*** ../node_modules/@material-ui/icons/MoreVert.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreVert');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/Notifications.js":
/*!***********************************************************!*\
  !*** ../node_modules/@material-ui/icons/Notifications.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
}), 'Notifications');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/Search.js":
/*!****************************************************!*\
  !*** ../node_modules/@material-ui/icons/Search.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), 'Search');

exports.default = _default;

/***/ }),

/***/ "./components/layouts/header.js":
/*!**************************************!*\
  !*** ./components/layouts/header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "../node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "../node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputBase */ "../node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Badge */ "../node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "../node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Menu */ "../node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "../node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Search */ "../node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "../node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Mail */ "../node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "../node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "../node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "D:\\React\\mynblog-react\\src\\components\\layouts\\header.js";

















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  };
});

var Header = function Header() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "open drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.title,
    variant: "h6",
    noWrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Material-UI"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.search,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.searchIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7__["default"], {
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'search'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sectionDesktop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "show 4 new mails",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_8__["default"], {
    badgeContent: 4,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "show 17 new notifications",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_8__["default"], {
    badgeContent: 17,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    edge: "end",
    "aria-label": "account of current user",
    "aria-controls": menuId,
    "aria-haspopup": "true",
    onClick: handleProfileMenuOpen,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sectionMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "show more",
    "aria-controls": mobileMenuId,
    "aria-haspopup": "true",
    onClick: handleMobileMenuOpen,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }))))), renderMobileMenu, renderMenu));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=contact.js.bc550837e3d4b6fba788.hot-update.js.map