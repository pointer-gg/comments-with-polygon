"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Comment.tsx":
/*!********************************!*\
  !*** ./components/Comment.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_timeago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-timeago */ \"./node_modules/react-timeago/es6/index.js\");\n/* harmony import */ var _davatar_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @davatar/react */ \"./node_modules/@davatar/react/dist/index.js\");\n/* harmony import */ var _davatar_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_davatar_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Username__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Username */ \"./components/Username.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar Comment = function(param) {\n    var comment = param.comment;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {\n        spacing: 3,\n        alignItems: \"start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_davatar_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                size: 48,\n                address: comment.creator_address\n            }, void 0, false, {\n                fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comment.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                spacing: 1,\n                flex: 1,\n                bg: \"whiteAlpha.100\",\n                rounded: \"2xl\",\n                p: 3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        color: \"whiteAlpha.900\",\n                        fontSize: \"lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Username__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            address: comment.creator_address\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comment.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comment.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        color: \"whiteAlpha.800\",\n                        fontSize: \"lg\",\n                        children: comment.message\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comment.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        color: \"whiteAlpha.500\",\n                        fontSize: \"md\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_timeago__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            date: comment.created_at.toNumber() * 1000\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comment.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comment.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comment.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comment.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this));\n};\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar _c;\n$RefreshReg$(_c, \"Comment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNpQztBQUM1QjtBQUNBO0FBQ0Y7O0FBT2pDLEdBQUssQ0FBQ1EsT0FBTyxHQUEwQyxRQUFRLFFBQVMsQ0FBQztRQUFmQyxPQUFPLFNBQVBBLE9BQU87SUFDL0QsTUFBTSw2RUFDSE4sb0RBQU07UUFBQ08sT0FBTyxFQUFFLENBQUM7UUFBRUMsVUFBVSxFQUFDLENBQU87O3dGQUNuQ0wsdURBQU07Z0JBQUNNLElBQUksRUFBRSxFQUFFO2dCQUFFQyxPQUFPLEVBQUVKLE9BQU8sQ0FBQ0ssZUFBZTs7Ozs7O3dGQUNqRFYsbURBQUs7Z0JBQUNNLE9BQU8sRUFBRSxDQUFDO2dCQUFFSyxJQUFJLEVBQUUsQ0FBQztnQkFBRUMsRUFBRSxFQUFDLENBQWdCO2dCQUFDQyxPQUFPLEVBQUMsQ0FBSztnQkFBQ0MsQ0FBQyxFQUFFLENBQUM7O2dHQUMvRGhCLHFEQUFPO3dCQUFDaUIsS0FBSyxFQUFDLENBQWdCO3dCQUFDQyxRQUFRLEVBQUMsQ0FBSTs4R0FDMUNiLGlEQUFROzRCQUFDTSxPQUFPLEVBQUVKLE9BQU8sQ0FBQ0ssZUFBZTs7Ozs7Ozs7Ozs7Z0dBRTNDYixrREFBSTt3QkFBQ2tCLEtBQUssRUFBQyxDQUFnQjt3QkFBQ0MsUUFBUSxFQUFDLENBQUk7a0NBQ3ZDWCxPQUFPLENBQUNZLE9BQU87Ozs7OztnR0FFakJwQixrREFBSTt3QkFBQ2tCLEtBQUssRUFBQyxDQUFnQjt3QkFBQ0MsUUFBUSxFQUFDLENBQUk7OEdBQ3ZDZixxREFBTzs0QkFBQ2lCLElBQUksRUFBRWIsT0FBTyxDQUFDYyxVQUFVLENBQUNDLFFBQVEsS0FBSyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3RCxDQUFDO0tBakJLaEIsT0FBTztBQW1CYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbWVudC50c3g/ZjUyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGV4dCwgSGVhZGluZywgSFN0YWNrLCBTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBUaW1lQWdvIGZyb20gXCJyZWFjdC10aW1lYWdvXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBkYXZhdGFyL3JlYWN0XCI7XHJcbmltcG9ydCBVc2VybmFtZSBmcm9tIFwiLi9Vc2VybmFtZVwiO1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSBcIi4uL2hvb2tzL3VzZUNvbW1lbnRzQ29udHJhY3RcIjtcclxuXHJcbmludGVyZmFjZSBDb21tZW50UHJvcHMge1xyXG4gIGNvbW1lbnQ6IENvbW1lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IENvbW1lbnQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PENvbW1lbnRQcm9wcz4gPSAoeyBjb21tZW50IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhTdGFjayBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwic3RhcnRcIj5cclxuICAgICAgPEF2YXRhciBzaXplPXs0OH0gYWRkcmVzcz17Y29tbWVudC5jcmVhdG9yX2FkZHJlc3N9IC8+XHJcbiAgICAgIDxTdGFjayBzcGFjaW5nPXsxfSBmbGV4PXsxfSBiZz1cIndoaXRlQWxwaGEuMTAwXCIgcm91bmRlZD1cIjJ4bFwiIHA9ezN9PlxyXG4gICAgICAgIDxIZWFkaW5nIGNvbG9yPVwid2hpdGVBbHBoYS45MDBcIiBmb250U2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICA8VXNlcm5hbWUgYWRkcmVzcz17Y29tbWVudC5jcmVhdG9yX2FkZHJlc3N9IC8+XHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVBbHBoYS44MDBcIiBmb250U2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICB7Y29tbWVudC5tZXNzYWdlfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlQWxwaGEuNTAwXCIgZm9udFNpemU9XCJtZFwiPlxyXG4gICAgICAgICAgPFRpbWVBZ28gZGF0ZT17Y29tbWVudC5jcmVhdGVkX2F0LnRvTnVtYmVyKCkgKiAxMDAwfSAvPlxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9TdGFjaz5cclxuICAgIDwvSFN0YWNrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlRleHQiLCJIZWFkaW5nIiwiSFN0YWNrIiwiU3RhY2siLCJUaW1lQWdvIiwiQXZhdGFyIiwiVXNlcm5hbWUiLCJDb21tZW50IiwiY29tbWVudCIsInNwYWNpbmciLCJhbGlnbkl0ZW1zIiwic2l6ZSIsImFkZHJlc3MiLCJjcmVhdG9yX2FkZHJlc3MiLCJmbGV4IiwiYmciLCJyb3VuZGVkIiwicCIsImNvbG9yIiwiZm9udFNpemUiLCJtZXNzYWdlIiwiZGF0ZSIsImNyZWF0ZWRfYXQiLCJ0b051bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Comment.tsx\n");

/***/ }),

/***/ "./components/Username.tsx":
/*!*********************************!*\
  !*** ./components/Username.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var truncate_middle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! truncate-middle */ \"./node_modules/truncate-middle/index.js\");\n/* harmony import */ var truncate_middle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(truncate_middle__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Username = function(_param) {\n    var address = _param.address, otherProps = _objectWithoutProperties(_param, [\n        \"address\"\n    ]);\n    _s();\n    var ref = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useEnsLookup)({\n        address: address\n    }), 1), query = ref[0];\n    // Show ens name if exists, but show truncated address as fallback\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, _objectSpread({\n        display: \"inline\",\n        textTransform: query.data ? \"none\" : \"uppercase\"\n    }, otherProps, {\n        children: query.data || truncate_middle__WEBPACK_IMPORTED_MODULE_2___default()(address || \"\", 5, 4, \"...\")\n    }), void 0, false, {\n        fileName: \"/mnt/c/pr0/comments-with-polygon/components/Username.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this));\n};\n_s(Username, \"xu6kSKogJtJN4jXDXDj86DWMKoA=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useEnsLookup\n    ];\n});\n_c = Username;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Username);\nvar _c;\n$RefreshReg$(_c, \"Username\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJuYW1lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNvQjtBQUNkO0FBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVDLEdBQUssQ0FBQ0ksUUFBUSxHQUEyQyxRQUNyRCxTQUVFLENBQUM7UUFGTEMsT0FBTyxVQUFQQSxPQUFPLEVBQ0pDLFVBQVU7UUFEYkQsQ0FBTzs7O0lBR1AsR0FBSyxDQUFXSCxHQUF5QixrQkFBekJBLG1EQUFZLENBQUMsQ0FBQztRQUFDRyxPQUFPLEVBQVBBLE9BQU87SUFBQyxDQUFDLE9BQWpDRSxLQUFLLEdBQUlMLEdBQXlCO0lBRXpDLEVBQWtFO0lBQ2xFLE1BQU0sNkVBQ0hELGtEQUFJO1FBQ0hPLE9BQU8sRUFBQyxDQUFRO1FBQ2hCQyxhQUFhLEVBQUVGLEtBQUssQ0FBQ0csSUFBSSxHQUFHLENBQU0sUUFBRyxDQUFXO09BQzVDSixVQUFVO2tCQUViQyxLQUFLLENBQUNHLElBQUksSUFBSVAsc0RBQWMsQ0FBQ0UsT0FBTyxJQUFJLENBQUUsR0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUs7Ozs7OztBQUc5RCxDQUFDO0dBaEJLRCxRQUFROztRQUlJRiwrQ0FBWTs7O0tBSnhCRSxRQUFRO0FBa0JkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VybmFtZS50c3g/ZTc5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGV4dCwgVGV4dFByb3BzIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRW5zTG9va3VwIH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB0cnVuY2F0ZU1pZGRsZSBmcm9tIFwidHJ1bmNhdGUtbWlkZGxlXCI7XHJcblxyXG5pbnRlcmZhY2UgVXNlcm5hbWVQcm9wcyBleHRlbmRzIFRleHRQcm9wcyB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBVc2VybmFtZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8VXNlcm5hbWVQcm9wcz4gPSAoe1xyXG4gIGFkZHJlc3MsXHJcbiAgLi4ub3RoZXJQcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW3F1ZXJ5XSA9IHVzZUVuc0xvb2t1cCh7IGFkZHJlc3MgfSk7XHJcblxyXG4gIC8vIFNob3cgZW5zIG5hbWUgaWYgZXhpc3RzLCBidXQgc2hvdyB0cnVuY2F0ZWQgYWRkcmVzcyBhcyBmYWxsYmFja1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGV4dFxyXG4gICAgICBkaXNwbGF5PVwiaW5saW5lXCJcclxuICAgICAgdGV4dFRyYW5zZm9ybT17cXVlcnkuZGF0YSA/IFwibm9uZVwiIDogXCJ1cHBlcmNhc2VcIn1cclxuICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHtxdWVyeS5kYXRhIHx8IHRydW5jYXRlTWlkZGxlKGFkZHJlc3MgfHwgXCJcIiwgNSwgNCwgXCIuLi5cIil9XHJcbiAgICA8L1RleHQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJuYW1lO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUZXh0IiwidXNlRW5zTG9va3VwIiwidHJ1bmNhdGVNaWRkbGUiLCJVc2VybmFtZSIsImFkZHJlc3MiLCJvdGhlclByb3BzIiwicXVlcnkiLCJkaXNwbGF5IiwidGV4dFRyYW5zZm9ybSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Username.tsx\n");

/***/ }),

/***/ "./node_modules/truncate-middle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/truncate-middle/index.js ***!
  \***********************************************/
/***/ (function(module) {

eval("\n/**\n * There are cases where important information is at the end of the string and truncating the end isn't helpful.\n * This function solves that.\n *\n * @param  {string} str         String to be truncated\n * @param  {number} frontLen    Number of characters to be remained in front.\n * @param  {number} backLen     Number of characters to be remained at the back.\n * @param  {string} truncateStr String that is replaced the truncated portion\n * @return {string}             Truncated string. Defaults to '&hellip;' if unspecified.\n */\nmodule.exports = function (str, frontLen, backLen, truncateStr) {\n  if (str === null) {\n    return ''\n  }\n  var strLen = str.length\n  // Setting default values\n  frontLen = ~~frontLen // will cast to integer\n  backLen = ~~backLen\n  truncateStr = truncateStr || '&hellip;'\n  if (frontLen === 0 && backLen === 0 || frontLen >= strLen || backLen >= strLen || (frontLen + backLen) >= strLen) {\n    return str\n  } else if (backLen === 0) {\n    return str.slice(0, frontLen) + truncateStr\n  } else {\n    return str.slice(0, frontLen) + truncateStr + str.slice(strLen - backLen)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdHJ1bmNhdGUtbWlkZGxlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxvQkFBb0IsdUNBQXVDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdHJ1bmNhdGUtbWlkZGxlL2luZGV4LmpzPzViNmMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4vKipcbiAqIFRoZXJlIGFyZSBjYXNlcyB3aGVyZSBpbXBvcnRhbnQgaW5mb3JtYXRpb24gaXMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nIGFuZCB0cnVuY2F0aW5nIHRoZSBlbmQgaXNuJ3QgaGVscGZ1bC5cbiAqIFRoaXMgZnVuY3Rpb24gc29sdmVzIHRoYXQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHIgICAgICAgICBTdHJpbmcgdG8gYmUgdHJ1bmNhdGVkXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGZyb250TGVuICAgIE51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIGJlIHJlbWFpbmVkIGluIGZyb250LlxuICogQHBhcmFtICB7bnVtYmVyfSBiYWNrTGVuICAgICBOdW1iZXIgb2YgY2hhcmFjdGVycyB0byBiZSByZW1haW5lZCBhdCB0aGUgYmFjay5cbiAqIEBwYXJhbSAge3N0cmluZ30gdHJ1bmNhdGVTdHIgU3RyaW5nIHRoYXQgaXMgcmVwbGFjZWQgdGhlIHRydW5jYXRlZCBwb3J0aW9uXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAgICAgIFRydW5jYXRlZCBzdHJpbmcuIERlZmF1bHRzIHRvICcmaGVsbGlwOycgaWYgdW5zcGVjaWZpZWQuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0ciwgZnJvbnRMZW4sIGJhY2tMZW4sIHRydW5jYXRlU3RyKSB7XG4gIGlmIChzdHIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuICB2YXIgc3RyTGVuID0gc3RyLmxlbmd0aFxuICAvLyBTZXR0aW5nIGRlZmF1bHQgdmFsdWVzXG4gIGZyb250TGVuID0gfn5mcm9udExlbiAvLyB3aWxsIGNhc3QgdG8gaW50ZWdlclxuICBiYWNrTGVuID0gfn5iYWNrTGVuXG4gIHRydW5jYXRlU3RyID0gdHJ1bmNhdGVTdHIgfHwgJyZoZWxsaXA7J1xuICBpZiAoZnJvbnRMZW4gPT09IDAgJiYgYmFja0xlbiA9PT0gMCB8fCBmcm9udExlbiA+PSBzdHJMZW4gfHwgYmFja0xlbiA+PSBzdHJMZW4gfHwgKGZyb250TGVuICsgYmFja0xlbikgPj0gc3RyTGVuKSB7XG4gICAgcmV0dXJuIHN0clxuICB9IGVsc2UgaWYgKGJhY2tMZW4gPT09IDApIHtcbiAgICByZXR1cm4gc3RyLnNsaWNlKDAsIGZyb250TGVuKSArIHRydW5jYXRlU3RyXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0ci5zbGljZSgwLCBmcm9udExlbikgKyB0cnVuY2F0ZVN0ciArIHN0ci5zbGljZShzdHJMZW4gLSBiYWNrTGVuKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/truncate-middle/index.js\n");

/***/ })

});