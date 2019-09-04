webpackHotUpdate("static/development/pages/auth/login.js",{

/***/ "./utils/Http.js":
/*!***********************!*\
  !*** ./utils/Http.js ***!
  \***********************/
/*! exports provided: statusCode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusCode", function() { return statusCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Http; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);






var DEFAULT_CONFIG = {
  baseURL: "http://localhost:8000/api/",
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
};
var statusCode = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

var Http =
/*#__PURE__*/
function () {
  function Http() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Http);

    this.config = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, DEFAULT_CONFIG, config);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Http, [{
    key: "authenticated",
    value: function authenticated() {
      var storedData = localStorage.getItem('access_token'); // get token from localstorage

      if (storedData) {
        this.config.headers['Authorization'] = 'Bearer ' + storedData;
      }

      return this;
    }
  }, {
    key: "get",
    value: function get(url, params) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.executeRequest(url, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, config, {
        params: params
      }));
    }
  }, {
    key: "post",
    value: function post(url, data) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.executeRequest(url, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
        method: 'post'
      }, config, {
        data: data
      }));
    }
  }, {
    key: "patch",
    value: function patch(url, data) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.executeRequest(url, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
        method: 'patch'
      }, config, {
        data: data
      }));
    }
  }, {
    key: "put",
    value: function put(url, data) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.executeRequest(url, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
        method: 'put'
      }, config, {
        data: data
      }));
    }
  }, {
    key: "delete",
    value: function _delete(url, data) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.executeRequest(url, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
        method: 'delete'
      }, config, {
        data: data
      }));
    }
  }, {
    key: "executeRequest",
    value: function executeRequest(url, config) {
      var finalHeaderConfig = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.config.headers, config.headers);

      var finalConfig = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.config, {
        url: url
      }, config, {
        headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, finalHeaderConfig)
      });

      console.log(finalConfig);
      return axios__WEBPACK_IMPORTED_MODULE_5___default.a.request(finalConfig).then(function (response) {
        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(response);
      })["catch"](function (error) {
        if (error.response && error.response.status === statusCode.UNAUTHORIZED) {
          if (url != 'login') {
            window.location.href = '/login';
          }
        }

        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
      });
    }
  }]);

  return Http;
}();



/***/ })

})
//# sourceMappingURL=login.js.e55563f3771494ae8d89.hot-update.js.map