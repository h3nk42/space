"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/.pnpm/@chakra-ui+react@1.8.3_db0d5dc181a8aadc4486fc4ebfdbba43/node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _views_layout_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/layout/Layout/Layout */ \"./src/views/layout/Layout/Layout.tsx\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/.pnpm/@chakra-ui+theme-tools@1.3.4_@chakra-ui+system@1.10.3/node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.extendTheme)({\n    styles: {\n        global: function(props) {\n            return {\n                // styles for the `body`\n                body: {\n                    bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_4__.mode)(\"white\", \"gray.800\")(props),\n                    color: \"white\"\n                },\n                // styles for the `a`\n                a: {\n                    color: \"teal.500\",\n                    _hover: {\n                        textDecoration: \"underline\"\n                    }\n                }\n            };\n        }\n    }\n});\nvar Website = function(props) {\n    var router = props.router, pageProps = props.pageProps, Component = props.Component;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_layout_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n            router: router,\n            children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread({}, pageProps, {\n                key: router.route,\n                __source: {\n                    fileName: \"/Users/neekh/htw/other/portfolio/space/src/pages/_app.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                },\n                __self: _this\n            }))\n        }, void 0, false, {\n            fileName: \"/Users/neekh/htw/other/portfolio/space/src/pages/_app.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/neekh/htw/other/portfolio/space/src/pages/_app.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this));\n};\n_c = Website;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Website);\nvar _c;\n$RefreshReg$(_c, \"Website\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDSztBQUVSO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxHQUFLLENBQUNJLEtBQUssR0FBR0YsNkRBQVcsQ0FBQyxDQUFDO0lBQ3pCRyxNQUFNLEVBQUUsQ0FBQztRQUNQQyxNQUFNLEVBQUUsUUFBUSxDQUFQQyxLQUFLO1lBQUssTUFDcEIsQ0FEcUIsQ0FBQztnQkFDbkIsRUFBd0I7Z0JBQ3hCQyxJQUFJLEVBQUUsQ0FBQztvQkFDTEMsRUFBRSxFQUFFTiw0REFBSSxDQUFDLENBQU8sUUFBRSxDQUFVLFdBQUVJLEtBQUs7b0JBQ25DRyxLQUFLLEVBQUUsQ0FBTztnQkFDaEIsQ0FBQztnQkFDRCxFQUFxQjtnQkFDckJDLENBQUMsRUFBRSxDQUFDO29CQUNGRCxLQUFLLEVBQUUsQ0FBVTtvQkFDakJFLE1BQU0sRUFBRSxDQUFDO3dCQUNQQyxjQUFjLEVBQUUsQ0FBVztvQkFDN0IsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQzs7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQVEsQ0FBUFAsS0FBZSxFQUFLLENBQUM7SUFDcEMsR0FBSyxDQUFHUSxNQUFNLEdBQTJCUixLQUFLLENBQXRDUSxNQUFNLEVBQUVDLFNBQVMsR0FBZ0JULEtBQUssQ0FBOUJTLFNBQVMsRUFBRUMsU0FBUyxHQUFLVixLQUFLLENBQW5CVSxTQUFTO0lBQ3BDLE1BQU0sNkVBQ0hqQiw0REFBYztRQUFDSSxLQUFLLEVBQUVBLEtBQUs7OEZBQ3pCSCwrREFBTTtZQUFDYyxNQUFNLEVBQUVBLE1BQU07eUZBQ25CRSxTQUFTLG9CQUFLRCxTQUFTO2dCQUFFRSxHQUFHLEVBQUVILE1BQU0sQ0FBQ0ksS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5ELENBQUM7S0FUS0wsT0FBTztBQVdiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL3ZpZXdzL2xheW91dC9MYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgbW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCI7XG5cbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBzdHlsZXM6IHtcbiAgICBnbG9iYWw6IChwcm9wcykgPT4gKHtcbiAgICAgIC8vIHN0eWxlcyBmb3IgdGhlIGBib2R5YFxuICAgICAgYm9keToge1xuICAgICAgICBiZzogbW9kZShcIndoaXRlXCIsIFwiZ3JheS44MDBcIikocHJvcHMpLFxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgfSxcbiAgICAgIC8vIHN0eWxlcyBmb3IgdGhlIGBhYFxuICAgICAgYToge1xuICAgICAgICBjb2xvcjogXCJ0ZWFsLjUwMFwiLFxuICAgICAgICBfaG92ZXI6IHtcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG59KTtcblxuY29uc3QgV2Vic2l0ZSA9IChwcm9wczogQXBwUHJvcHMpID0+IHtcbiAgY29uc3QgeyByb3V0ZXIsIHBhZ2VQcm9wcywgQ29tcG9uZW50IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxMYXlvdXQgcm91dGVyPXtyb3V0ZXJ9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlYnNpdGU7XG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJMYXlvdXQiLCJleHRlbmRUaGVtZSIsIm1vZGUiLCJ0aGVtZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29sb3IiLCJhIiwiX2hvdmVyIiwidGV4dERlY29yYXRpb24iLCJXZWJzaXRlIiwicm91dGVyIiwicGFnZVByb3BzIiwiQ29tcG9uZW50Iiwia2V5Iiwicm91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

});