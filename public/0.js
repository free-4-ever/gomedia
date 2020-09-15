(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Login",
  data: function data() {
    return {
      email: "",
      password: "",
      remember: false
    };
  },
  computed: {
    "in": function _in() {
      return this.$store.state.authenticated;
    }
  },
  created: function created() {
    window.axios.get("/sanctum/csrf-cookie").then(function (response) {// Login...
      // console.log("ok");
    });
  },
  meta: function meta() {
    return {
      title: "Login - Innouts",
      meta: {
        description: {
          name: "description",
          content: "Login to Demo!"
        }
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      var payload = {
        email: this.email,
        password: this.password,
        remember: this.remember
      };
      window.axios({
        url: "/login",
        data: payload,
        method: "POST"
      }).then(function (response) {
        _this.$q.notify({
          color: "positive",
          textColor: "white",
          icon: "flight_land",
          message: "Logged in."
        });

        _this.$store.commit("loggedIn");

        _this.$router.push({
          name: "home"
        });
      })["catch"](function (error) {
        var message = '';

        for (var _i = 0, _Object$entries = Object.entries(error.response.data.errors); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          message + "".concat(value, " \n");
        }

        console.log(message);

        _this.$q.notify({
          color: "negative",
          textColor: "white",
          icon: "error",
          message: error.response.data.message
        });
      });
    },
    resendActivation: function resendActivation() {
      var _this2 = this;

      if (this.email) {
        this.$axios({
          url: "api/resend-activation-link",
          data: {
            email: this.email
          },
          method: "POST"
        }).then(function (response) {
          _this2.$q.notify({
            color: "positive",
            textColor: "white",
            icon: "fas fa-check-circle",
            message: response.data.message
          });
        })["catch"](function (error) {
          _this2.$q.notify({
            color: "negative",
            textColor: "white",
            icon: "fas fa-exclamation-triangle",
            message: error.response.data.error
          });
        });
      } else {
        this.$q.notify({
          color: "negative",
          icon: "fas fa-exclamation-triangle",
          message: "Please enter your email!"
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("q-page", { attrs: { padding: "" } }, [
    _c("div", { staticClass: "row justify-center" }, [
      _c(
        "div",
        { staticClass: "col col-sm-10 col-md-8 col-lg-6" },
        [
          _c(
            "q-card",
            { staticClass: "bg-primar q-pa-md" },
            [
              _c("q-card-section", { staticClass: "q-mb-md" }, [
                _c("div", { staticClass: "text-h5" }, [_vm._v("Login")])
              ]),
              _vm._v(" "),
              _c(
                "q-form",
                { staticClass: "q-gutter-sm", on: { submit: _vm.onSubmit } },
                [
                  _c("q-input", {
                    attrs: {
                      filled: "",
                      type: "email",
                      label: "Email *",
                      "lazy-rules": "",
                      rules: [
                        function(val) {
                          return val !== "" || "Please type a valid email"
                        },
                        function(val) {
                          return (
                            (val.includes("@") && val.includes(".")) ||
                            "Please type a valid email"
                          )
                        }
                      ]
                    },
                    model: {
                      value: _vm.email,
                      callback: function($$v) {
                        _vm.email = $$v
                      },
                      expression: "email"
                    }
                  }),
                  _vm._v(" "),
                  _c("q-input", {
                    attrs: {
                      filled: "",
                      type: "password",
                      label: "Password *",
                      "lazy-rules": "",
                      rules: [
                        function(val) {
                          return (
                            val.length >= 8 || "Please use minimum 8 characters"
                          )
                        }
                      ]
                    },
                    model: {
                      value: _vm.password,
                      callback: function($$v) {
                        _vm.password = $$v
                      },
                      expression: "password"
                    }
                  }),
                  _vm._v(" "),
                  _c("q-checkbox", {
                    attrs: { label: "Remember Me?" },
                    model: {
                      value: _vm.remember,
                      callback: function($$v) {
                        _vm.remember = $$v
                      },
                      expression: "remember"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "q-mb-md q-gutter-sm" },
                    [
                      _c("q-btn", {
                        attrs: {
                          label: "Submit",
                          type: "submit",
                          color: "primary"
                        }
                      }),
                      _vm._v(" "),
                      _c("q-btn", {
                        staticClass: "q-ml-sm",
                        attrs: {
                          to: "/forgot-password",
                          label: "Forgot Password?",
                          type: "a",
                          color: "primary",
                          disable: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("q-btn", {
                        staticClass: "float-right",
                        attrs: {
                          label: "Resend Activation Link?",
                          disable: "",
                          type: "a",
                          color: "info",
                          "text-color": "black",
                          size: "sm"
                        },
                        on: { click: _vm.resendActivation }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=6bdc8b8e& */ "./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=6bdc8b8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);