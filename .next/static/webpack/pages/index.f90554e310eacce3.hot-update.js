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

/***/ "./components/CommentEditor.tsx":
/*!**************************************!*\
  !*** ./components/CommentEditor.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _davatar_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @davatar/react */ \"./node_modules/@davatar/react/dist/index.js\");\n/* harmony import */ var _davatar_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_davatar_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _hooks_useAddComment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useAddComment */ \"./hooks/useAddComment.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CommentEditor = function(param) {\n    var topic = param.topic;\n    var ref;\n    _s();\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(\"\"), 2), message = ref1[0], setMessage = ref1[1];\n    var mutation = (0,_hooks_useAddComment__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    var ref2 = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(), 1), accountQuery = ref2[0];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n        spacing: 3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {\n                spacing: 3,\n                alignItems: \"start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_davatar_react__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        size: 48,\n                        address: ((ref = accountQuery.data) === null || ref === void 0 ? void 0 : ref.address) || ethers__WEBPACK_IMPORTED_MODULE_6__.constants.AddressZero\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/pr0/comments-with-polygon/components/CommentEditor.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Textarea, {\n                        value: message,\n                        onChange: function(e) {\n                            return setMessage(e.target.value);\n                        },\n                        placeholder: \"Write a message..\",\n                        p: 3,\n                        flex: 1,\n                        bg: \"whiteAlpha.100\",\n                        rounded: \"2xl\",\n                        fontSize: \"lg\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/pr0/comments-with-polygon/components/CommentEditor.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/pr0/comments-with-polygon/components/CommentEditor.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                size: \"sm\",\n                colorScheme: \"pink\",\n                alignSelf: \"flex-end\",\n                onClick: function() {\n                    mutation.mutateAsync({\n                        message: message,\n                        topic: topic\n                    }).then(function() {\n                        return setMessage(\"\");\n                    });\n                },\n                isLoading: mutation.isLoading,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/pr0/comments-with-polygon/components/CommentEditor.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/pr0/comments-with-polygon/components/CommentEditor.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this));\n};\n_s(CommentEditor, \"fqF+NqQmsnxczIvS5NfmfRgUWB4=\", false, function() {\n    return [\n        _hooks_useAddComment__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = CommentEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentEditor);\nvar _c;\n$RefreshReg$(_c, \"CommentEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRFZGl0b3IudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDb0M7QUFDaEM7QUFDQztBQUNEO0FBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxELEdBQUssQ0FBQ1MsYUFBYSxHQUFnRCxRQUMvRCxRQUNFLENBQUM7UUFETEMsS0FBSyxTQUFMQSxLQUFLO1FBV1lDLEdBQWlCOztJQVRsQyxHQUFLLENBQXlCWCxJQUFrQixrQkFBbEJBLDJDQUFjLENBQUMsQ0FBRSxRQUF4Q2EsT0FBTyxHQUFnQmIsSUFBa0IsS0FBaENjLFVBQVUsR0FBSWQsSUFBa0I7SUFDaEQsR0FBSyxDQUFDZSxRQUFRLEdBQUdQLGdFQUFhO0lBQzlCLEdBQUssQ0FBa0JELElBQVksa0JBQVpBLGlEQUFVLFFBQTFCSSxZQUFZLEdBQUlKLElBQVk7SUFFbkMsTUFBTSw2RUFDSEosbURBQUs7UUFBQ2EsT0FBTyxFQUFFLENBQUM7O3dGQUNkZCxvREFBTTtnQkFBQ2MsT0FBTyxFQUFFLENBQUM7Z0JBQUVDLFVBQVUsRUFBQyxDQUFPOztnR0FDbkNYLHVEQUFNO3dCQUNMWSxJQUFJLEVBQUUsRUFBRTt3QkFDUkMsT0FBTyxJQUFFUixHQUFpQixHQUFqQkEsWUFBWSxDQUFDUyxJQUFJLGNBQWpCVCxHQUFpQixLQUFqQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsR0FBaUIsQ0FBRVEsT0FBTyxLQUFJZCx5REFBcUI7Ozs7OztnR0FFN0RELHNEQUFRO3dCQUNQa0IsS0FBSyxFQUFFVCxPQUFPO3dCQUNkVSxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLVixNQUFNLENBQU5BLFVBQVUsQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7O3dCQUMxQ0ksV0FBVyxFQUFDLENBQW1CO3dCQUMvQkMsQ0FBQyxFQUFFLENBQUM7d0JBQ0pDLElBQUksRUFBRSxDQUFDO3dCQUNQQyxFQUFFLEVBQUMsQ0FBZ0I7d0JBQ25CQyxPQUFPLEVBQUMsQ0FBSzt3QkFDYkMsUUFBUSxFQUFDLENBQUk7Ozs7Ozs7Ozs7Ozt3RkFHaEI5QixvREFBTTtnQkFDTGlCLElBQUksRUFBQyxDQUFJO2dCQUNUYyxXQUFXLEVBQUMsQ0FBTTtnQkFDbEJDLFNBQVMsRUFBQyxDQUFVO2dCQUNwQkMsT0FBTyxFQUFFLFFBQVEsR0FBRixDQUFDO29CQUNkbkIsUUFBUSxDQUNMb0IsV0FBVyxDQUFDLENBQUM7d0JBQ1p0QixPQUFPLEVBQVBBLE9BQU87d0JBQ1BILEtBQUssRUFBTEEsS0FBSztvQkFDUCxDQUFDLEVBQ0EwQixJQUFJLENBQUMsUUFBUTt3QkFBRnRCLE1BQU0sQ0FBTkEsVUFBVSxDQUFDLENBQUU7O2dCQUM3QixDQUFDO2dCQUNEdUIsU0FBUyxFQUFFdEIsUUFBUSxDQUFDc0IsU0FBUzswQkFDOUIsQ0FFRDs7Ozs7Ozs7Ozs7O0FBR04sQ0FBQztHQTNDSzVCLGFBQWE7O1FBSUFELDREQUFhO1FBQ1BELDZDQUFVOzs7S0FMN0JFLGFBQWE7QUE2Q25CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50RWRpdG9yLnRzeD8yZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEhTdGFjaywgU3RhY2ssIFRleHRhcmVhIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAZGF2YXRhci9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB1c2VBZGRDb21tZW50IGZyb20gXCIuLi9ob29rcy91c2VBZGRDb21tZW50XCI7XHJcblxyXG5pbnRlcmZhY2UgQ29tbWVudEVkaXRvclByb3BzIHtcclxuICB0b3BpYzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDb21tZW50RWRpdG9yOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxDb21tZW50RWRpdG9yUHJvcHM+ID0gKHtcclxuICB0b3BpYyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IG11dGF0aW9uID0gdXNlQWRkQ29tbWVudCgpO1xyXG4gIGNvbnN0IFthY2NvdW50UXVlcnldID0gdXNlQWNjb3VudCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0YWNrIHNwYWNpbmc9ezN9PlxyXG4gICAgICA8SFN0YWNrIHNwYWNpbmc9ezN9IGFsaWduSXRlbXM9XCJzdGFydFwiPlxyXG4gICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgIHNpemU9ezQ4fVxyXG4gICAgICAgICAgYWRkcmVzcz17YWNjb3VudFF1ZXJ5LmRhdGE/LmFkZHJlc3MgfHwgY29uc3RhbnRzLkFkZHJlc3NaZXJvfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgbWVzc2FnZS4uXCJcclxuICAgICAgICAgIHA9ezN9XHJcbiAgICAgICAgICBmbGV4PXsxfVxyXG4gICAgICAgICAgYmc9XCJ3aGl0ZUFscGhhLjEwMFwiXHJcbiAgICAgICAgICByb3VuZGVkPVwiMnhsXCJcclxuICAgICAgICAgIGZvbnRTaXplPVwibGdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSFN0YWNrPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICBjb2xvclNjaGVtZT1cInBpbmtcIlxyXG4gICAgICAgIGFsaWduU2VsZj1cImZsZXgtZW5kXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBtdXRhdGlvblxyXG4gICAgICAgICAgICAubXV0YXRlQXN5bmMoe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgdG9waWMsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHNldE1lc3NhZ2UoXCJcIikpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgaXNMb2FkaW5nPXttdXRhdGlvbi5pc0xvYWRpbmd9XHJcbiAgICAgID5cclxuICAgICAgICBTdWJtaXRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1N0YWNrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50RWRpdG9yOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkhTdGFjayIsIlN0YWNrIiwiVGV4dGFyZWEiLCJjb25zdGFudHMiLCJBdmF0YXIiLCJ1c2VBY2NvdW50IiwidXNlQWRkQ29tbWVudCIsIkNvbW1lbnRFZGl0b3IiLCJ0b3BpYyIsImFjY291bnRRdWVyeSIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtdXRhdGlvbiIsInNwYWNpbmciLCJhbGlnbkl0ZW1zIiwic2l6ZSIsImFkZHJlc3MiLCJkYXRhIiwiQWRkcmVzc1plcm8iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicCIsImZsZXgiLCJiZyIsInJvdW5kZWQiLCJmb250U2l6ZSIsImNvbG9yU2NoZW1lIiwiYWxpZ25TZWxmIiwib25DbGljayIsIm11dGF0ZUFzeW5jIiwidGhlbiIsImlzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CommentEditor.tsx\n");

/***/ }),

/***/ "./components/Comments.tsx":
/*!*********************************!*\
  !*** ./components/Comments.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _hooks_useComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useComments */ \"./hooks/useComments.ts\");\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comment */ \"./components/Comment.tsx\");\n/* harmony import */ var _CommentEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentEditor */ \"./components/CommentEditor.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Comments = function(param) {\n    var topic = param.topic;\n    var _this1 = _this;\n    var ref;\n    _s();\n    var query = (0,_hooks_useComments__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        topic: topic\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            query.isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Center, {\n                p: 8,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {}, void 0, false, {\n                    fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comments.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comments.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                spacing: 4,\n                children: [\n                    (ref = query.data) === null || ref === void 0 ? void 0 : ref.map(function(comment) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Comment__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            comment: comment\n                        }, comment.id, false, {\n                            fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comments.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this1);\n                    }),\n                    query.isFetched && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentEditor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        topic: topic\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comments.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 29\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comments.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/pr0/comments-with-polygon/components/Comments.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this));\n};\n_s(Comments, \"CJT8+pdLHVpjqQcenB8UKPhqaY0=\", false, function() {\n    return [\n        _hooks_useComments__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Comments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNnQztBQUNoQjtBQUNmO0FBQ1k7OztBQU0zQyxHQUFLLENBQUNRLFFBQVEsR0FBMkMsUUFBUSxRQUFPLENBQUM7UUFBYkMsS0FBSyxTQUFMQSxLQUFLOztRQVd4REMsR0FBVTs7SUFWakIsR0FBSyxDQUFDQSxLQUFLLEdBQUdMLDhEQUFXLENBQUMsQ0FBQztRQUFDSSxLQUFLLEVBQUxBLEtBQUs7SUFBQyxDQUFDO0lBRW5DLE1BQU0sNkVBQ0hSLGlEQUFHOztZQUNEUyxLQUFLLENBQUNDLFNBQVMsZ0ZBQ2JQLG9EQUFNO2dCQUFDUSxDQUFDLEVBQUUsQ0FBQztzR0FDVFYscURBQU87Ozs7Ozs7Ozs7d0ZBR1hDLG1EQUFLO2dCQUFDVSxPQUFPLEVBQUUsQ0FBQzs7cUJBQ2RILEdBQVUsR0FBVkEsS0FBSyxDQUFDSSxJQUFJLGNBQVZKLEdBQVUsS0FBVkEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLElBQUksQ0FBSkEsQ0FBZSxHQUFmQSxHQUFVLENBQUVLLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU87c0NBQ3ZCLE1BQU0sK0RBQUxWLGdEQUFPOzRCQUFrQlUsT0FBTyxFQUFFQSxPQUFPOzJCQUE1QkEsT0FBTyxDQUFDQyxFQUFFOzs7Ozs7b0JBRXpCUCxLQUFLLENBQUNRLFNBQVMsZ0ZBQUtYLHNEQUFhO3dCQUFDRSxLQUFLLEVBQUVBLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl2RCxDQUFDO0dBbEJLRCxRQUFROztRQUNFSCwwREFBVzs7O0tBRHJCRyxRQUFRO0FBb0JkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50cy50c3g/MTc5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBTcGlubmVyLCBTdGFjaywgQ2VudGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHVzZUNvbW1lbnRzIGZyb20gXCIuLi9ob29rcy91c2VDb21tZW50c1wiO1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi9Db21tZW50XCI7XHJcbmltcG9ydCBDb21tZW50RWRpdG9yIGZyb20gXCIuL0NvbW1lbnRFZGl0b3JcIjtcclxuXHJcbmludGVyZmFjZSBDb21tZW50c1Byb3BzIHtcclxuICB0b3BpYzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDb21tZW50czogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8Q29tbWVudHNQcm9wcz4gPSAoeyB0b3BpYyB9KSA9PiB7XHJcbiAgY29uc3QgcXVlcnkgPSB1c2VDb21tZW50cyh7IHRvcGljIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAge3F1ZXJ5LmlzTG9hZGluZyAmJiAoXHJcbiAgICAgICAgPENlbnRlciBwPXs4fT5cclxuICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgPC9DZW50ZXI+XHJcbiAgICAgICl9XHJcbiAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT5cclxuICAgICAgICB7cXVlcnkuZGF0YT8ubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICAgICAgICA8Q29tbWVudCBrZXk9e2NvbW1lbnQuaWR9IGNvbW1lbnQ9e2NvbW1lbnR9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge3F1ZXJ5LmlzRmV0Y2hlZCAmJiA8Q29tbWVudEVkaXRvciB0b3BpYz17dG9waWN9IC8+fVxyXG4gICAgICA8L1N0YWNrPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIlNwaW5uZXIiLCJTdGFjayIsIkNlbnRlciIsInVzZUNvbW1lbnRzIiwiQ29tbWVudCIsIkNvbW1lbnRFZGl0b3IiLCJDb21tZW50cyIsInRvcGljIiwicXVlcnkiLCJpc0xvYWRpbmciLCJwIiwic3BhY2luZyIsImRhdGEiLCJtYXAiLCJjb21tZW50IiwiaWQiLCJpc0ZldGNoZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Comments.tsx\n");

/***/ }),

/***/ "./hooks/useAddComment.ts":
/*!********************************!*\
  !*** ./hooks/useAddComment.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mnt_c_pr0_comments_with_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _mnt_c_pr0_comments_with_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mnt_c_pr0_comments_with_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _useCommentsContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useCommentsContract */ \"./hooks/useCommentsContract.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar useAddComment = function() {\n    var contract = (0,_useCommentsContract__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(function() {\n        var _ref = _asyncToGenerator(_mnt_c_pr0_comments_with_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var topic, message;\n            return _mnt_c_pr0_comments_with_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        topic = param.topic, message = param.message;\n                        _ctx.next = 3;\n                        return contract.addComment(topic, message);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }());\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useAddComment);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VBZGRDb21tZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZELEdBQUssQ0FBQ0UsYUFBYSxHQUFHLFFBQVEsR0FBRixDQUFDO0lBQzNCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHRixnRUFBbUI7SUFFcEMsTUFBTSxDQUFDRCx3REFBVztpTEFBQyxRQUFRLGdCQUE0QyxDQUFDO2dCQUE1Q0ksS0FBSyxFQUFFQyxPQUFPOzs7O3dCQUFkRCxLQUFLLFNBQUxBLEtBQUssRUFBRUMsT0FBTyxTQUFQQSxPQUFPOzsrQkFDbENGLFFBQVEsQ0FBQ0csVUFBVSxDQUFDRixLQUFLLEVBQUVDLE9BQU87Ozs7OztRQUMxQyxDQUFDOzs7OztBQUNILENBQUM7QUFFRCwrREFBZUgsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZUFkZENvbW1lbnQudHM/YWUzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgdXNlQ29tbWVudHNDb250cmFjdCBmcm9tIFwiLi91c2VDb21tZW50c0NvbnRyYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgVXNlQWRkQ29tbWVudFBheWxvYWQge1xyXG4gIHRvcGljOiBzdHJpbmc7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCB1c2VBZGRDb21tZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRyYWN0ID0gdXNlQ29tbWVudHNDb250cmFjdCgpO1xyXG5cclxuICByZXR1cm4gdXNlTXV0YXRpb24oYXN5bmMgKHsgdG9waWMsIG1lc3NhZ2UgfTogVXNlQWRkQ29tbWVudFBheWxvYWQpID0+IHtcclxuICAgIGF3YWl0IGNvbnRyYWN0LmFkZENvbW1lbnQodG9waWMsIG1lc3NhZ2UpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQWRkQ29tbWVudDsiXSwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJ1c2VDb21tZW50c0NvbnRyYWN0IiwidXNlQWRkQ29tbWVudCIsImNvbnRyYWN0IiwidG9waWMiLCJtZXNzYWdlIiwiYWRkQ29tbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useAddComment.ts\n");

/***/ })

});