module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Y0NT");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "Dov6":
/***/ (function(module, exports) {



/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "Y0NT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ovf6");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Contact = () => {
  return __jsx(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    title: "This Ts Error"
  }, __jsx("h1", {
    className: "text-danger"
  }, "This is error page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "ovf6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/layouts/head.js

var __jsx = external_react_default.a.createElement;


const HeadApp = ({
  title
}) => {
  return __jsx(head_default.a, null, __jsx("title", null, title), __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  }), __jsx("link", {
    rel: "icon",
    href: "/static/img/favicon.png",
    type: "image/png"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/css/bootstrap.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/vendors/linericon/style.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/css/font-awesome.min.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/vendors/lightbox/simpleLightbox.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/vendors/nice-select/css/nice-select.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/vendors/animate-css/animate.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/vendors/jquery-ui/jquery-ui.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/css/style.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/css/responsive.css"
  }));
};

/* harmony default export */ var head = (HeadApp);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/commons/activeLink.js

var activeLink_jsx = external_react_default.a.createElement;

function ActiveLink({
  children,
  href
}) {
  const router = Object(router_["useRouter"])();
  const style = {
    color: router.pathname === href ? 'red' : 'black',
    'marginRight': '10px'
  };

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return activeLink_jsx("li", {
    className: "nav-item"
  }, activeLink_jsx("a", {
    className: "nav-link",
    href: "",
    onClick: handleClick,
    style: style
  }, children));
}
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./components/layouts/header.js

var header_jsx = external_react_default.a.createElement;




const Header = () => {
  return header_jsx("header", {
    className: "header_area"
  }, header_jsx("div", {
    className: "main_menu"
  }, header_jsx(external_react_bootstrap_["Navbar"], {
    collapseOnSelect: true,
    expand: "lg"
  }, header_jsx("div", {
    className: "container box_1620"
  }, header_jsx("a", {
    className: "navbar-brand logo_h",
    href: "/"
  }, header_jsx("img", {
    src: "/static/img/logo.png",
    alt: ""
  })), header_jsx(external_react_bootstrap_["Navbar"].Toggle, {
    "aria-controls": "responsive-navbar-nav"
  }), header_jsx(external_react_bootstrap_["Navbar"].Collapse, {
    id: "responsive-navbar-nav"
  }, header_jsx(external_react_bootstrap_["Nav"], {
    className: "mr-auto"
  }, header_jsx(ActiveLink, {
    href: "/"
  }, "Home"), header_jsx(ActiveLink, {
    href: "/imagegallary"
  }, "ImageGallary"), header_jsx(ActiveLink, {
    href: "/about"
  }, "About"), header_jsx(ActiveLink, {
    href: "/contact"
  }, "Contact"))), header_jsx("div", {
    className: "collapse navbar-collapse offset",
    id: "navbarSupportedContent"
  }, header_jsx("ul", {
    className: "nav navbar-nav menu_nav"
  }), header_jsx("ul", {
    className: "nav navbar-nav navbar-right header_social ml-auto"
  }, header_jsx("li", {
    className: "nav-item"
  }, header_jsx("a", {
    href: "https://www.facebook.com/Thaii1612",
    target: "_blank"
  }, header_jsx("i", {
    className: "fa fa-facebook"
  }))), header_jsx("li", {
    className: "nav-item"
  }, header_jsx("a", {
    href: "https://www.youtube.com/watch?v=iDPso7C0vy4&list=PL4pGmis-Dgye_qjaaCeR0VOltmWSoBdSF",
    target: "_blank"
  }, header_jsx("i", {
    className: "fa fa-youtube"
  }))), header_jsx("li", {
    className: "nav-item"
  }, header_jsx("a", {
    href: "https://github.com/0henri0",
    target: "_blank"
  }, header_jsx("i", {
    className: "fa fa-github"
  })))))))), header_jsx("div", {
    className: "logo_part"
  }, header_jsx("div", {
    className: "container"
  }, header_jsx(link_default.a, {
    href: "/"
  }, header_jsx("a", {
    className: "logo",
    href: "/"
  }, header_jsx("img", {
    src: "/static/img/logo.png",
    alt: ""
  }))))));
};

/* harmony default export */ var header = (Header);
// CONCATENATED MODULE: ./components/layouts/footer.js

var footer_jsx = external_react_default.a.createElement;

const Footer = () => {
  return footer_jsx("footer", {
    className: "footer-area"
  }, footer_jsx("div", {
    className: "container"
  }, footer_jsx("div", {
    className: "row"
  }, footer_jsx("div", {
    className: "col-lg-3  col-md-6 col-sm-6"
  }, footer_jsx("div", {
    className: "single-footer-widget"
  }, footer_jsx("h6", {
    className: "footer_title"
  }, "About Us"), footer_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), footer_jsx("div", {
    className: "col-lg-4 col-md-6 col-sm-6"
  }, footer_jsx("div", {
    className: "single-footer-widget"
  }, footer_jsx("h6", {
    className: "footer_title"
  }, "Newsletter"), footer_jsx("p", null, "Stay updated with our latest trends"), footer_jsx("div", {
    id: "mc_embed_signup"
  }, footer_jsx("form", {
    target: "_blank",
    action: "https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01",
    method: "get",
    className: "subscribe_form relative"
  }, footer_jsx("div", {
    className: "input-group d-flex flex-row"
  }, footer_jsx("input", {
    name: "EMAIL",
    placeholder: "Email Address",
    classrequired: "true",
    type: "email"
  }), footer_jsx("button", {
    className: "btn sub-btn"
  }, footer_jsx("span", {
    className: "lnr lnr-arrow-right"
  }))), footer_jsx("div", {
    className: "mt-10 info"
  }))))), footer_jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-6"
  }, footer_jsx("div", {
    className: "single-footer-widget instafeed"
  }, footer_jsx("h6", {
    className: "footer_title"
  }, "Instagram Feed"), footer_jsx("ul", {
    className: "list instafeed d-flex flex-wrap"
  }, footer_jsx("li", null, footer_jsx("img", {
    src: "/static/img/instagram/Image-01.jpg",
    alt: ""
  })), footer_jsx("li", null, footer_jsx("img", {
    src: "/static/img/instagram/Image-02.jpg",
    alt: ""
  })), footer_jsx("li", null, footer_jsx("img", {
    src: "/static/img/instagram/Image-03.jpg",
    alt: ""
  })), footer_jsx("li", null, footer_jsx("img", {
    src: "/static/img/instagram/Image-04.jpg",
    alt: ""
  })), footer_jsx("li", null, footer_jsx("img", {
    src: "/static/img/instagram/Image-05.jpg",
    alt: ""
  })), footer_jsx("li", null, footer_jsx("img", {
    src: "/static/img/instagram/Image-06.jpg",
    alt: ""
  })), footer_jsx("li", null, footer_jsx("img", {
    src: "/static/img/instagram/Image-07.jpg",
    alt: ""
  })), footer_jsx("li", null, footer_jsx("img", {
    src: "/static/img/instagram/Image-08.jpg",
    alt: ""
  }))))), footer_jsx("div", {
    className: "col-lg-2 col-md-6 col-sm-6"
  }, footer_jsx("div", {
    className: "single-footer-widget f_social_wd"
  }, footer_jsx("h6", {
    className: "footer_title"
  }, "Follow Us"), footer_jsx("p", null, "Let us be social"), footer_jsx("div", {
    className: "f_social"
  }, footer_jsx("a", {
    href: "#"
  }, footer_jsx("i", {
    className: "fa fa-facebook"
  })), footer_jsx("a", {
    href: "#"
  }, footer_jsx("i", {
    className: "fa fa-twitter"
  })), footer_jsx("a", {
    href: "#"
  }, footer_jsx("i", {
    className: "fa fa-dribbble"
  })), footer_jsx("a", {
    href: "#"
  }, footer_jsx("i", {
    className: "fa fa-behance"
  })))))), footer_jsx("div", {
    className: "row footer-bottom d-flex justify-content-between align-items-center"
  }, footer_jsx("p", {
    className: "col-lg-12 footer-text text-center text-light"
  }, "Copyright \xA9 All rights reserved | This template is made with ", footer_jsx("i", {
    className: "fa fa-heart-o",
    "aria-hidden": "true"
  }), " by ", footer_jsx("a", {
    href: "https://colorlib.com",
    target: "_blank"
  }, "Colorlib")))));
};

/* harmony default export */ var footer = (Footer);
// EXTERNAL MODULE: ./static/app.js
var app = __webpack_require__("Dov6");

// CONCATENATED MODULE: ./components/layouts/layout.js

var layout_jsx = external_react_default.a.createElement;




// import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = ({
  children,
  title = 'This is the default title'
}) => layout_jsx(external_react_["Fragment"], null, layout_jsx(head, {
  title: title
}), layout_jsx(header, null), layout_jsx("div", {
  className: "main"
}, children), layout_jsx(footer, null));

/* harmony default export */ var layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });