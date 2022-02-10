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

/***/ "./src/lib/responsive/Media.ts":
/*!*************************************!*\
  !*** ./src/lib/responsive/Media.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mediaStyles\": function() { return /* binding */ mediaStyles; },\n/* harmony export */   \"Media\": function() { return /* binding */ Media; },\n/* harmony export */   \"MediaContextProvider\": function() { return /* binding */ MediaContextProvider; }\n/* harmony export */ });\n/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @artsy/fresnel */ \"./node_modules/.pnpm/@artsy+fresnel@3.2.2_react@17.0.2/node_modules/@artsy/fresnel/dist/index.js\");\n/* harmony import */ var _theme_Breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/Breakpoints */ \"./src/theme/Breakpoints.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar ExampleAppMedia = (0,_artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__.createMedia)({\n    interactions: {\n        landscape: \"not all and (orientation: landscape)\",\n        portrait: \"not all and (orientation: portrait)\",\n        hover: \"(hover: hover)\",\n        notHover: \"(hover: none)\"\n    },\n    breakpoints: {\n        sm: _theme_Breakpoints__WEBPACK_IMPORTED_MODULE_1__.BREAKPOINT.sm,\n        md: _theme_Breakpoints__WEBPACK_IMPORTED_MODULE_1__.BREAKPOINT.md,\n        lg: _theme_Breakpoints__WEBPACK_IMPORTED_MODULE_1__.BREAKPOINT.lg,\n        xl: _theme_Breakpoints__WEBPACK_IMPORTED_MODULE_1__.BREAKPOINT.xl\n    }\n});\n// Make styles for injection into the header of the page\nvar mediaStyles = ExampleAppMedia.createMediaStyle();\nvar Media = ExampleAppMedia.Media, MediaContextProvider = ExampleAppMedia.MediaContextProvider;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL3Jlc3BvbnNpdmUvTWVkaWEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBQ1E7QUFFcEQsR0FBSyxDQUFDRSxlQUFlLEdBQUdGLDJEQUFXLENBQUMsQ0FBQztJQUNuQ0csWUFBWSxFQUFFLENBQUM7UUFDYkMsU0FBUyxFQUFFLENBQXNDO1FBQ2pEQyxRQUFRLEVBQUUsQ0FBcUM7UUFDL0NDLEtBQUssRUFBRSxDQUFnQjtRQUN2QkMsUUFBUSxFQUFFLENBQWU7SUFDM0IsQ0FBQztJQUNEQyxXQUFXLEVBQUUsQ0FBQztRQUNaQyxFQUFFLEVBQUVSLDZEQUFhO1FBQ2pCUyxFQUFFLEVBQUVULDZEQUFhO1FBQ2pCVSxFQUFFLEVBQUVWLDZEQUFhO1FBQ2pCVyxFQUFFLEVBQUVYLDZEQUFhO0lBQ25CLENBQUM7QUFDSCxDQUFDO0FBRUQsRUFBd0Q7QUFDakQsR0FBSyxDQUFDWSxXQUFXLEdBQUdYLGVBQWUsQ0FBQ1ksZ0JBQWdCO0FBRXBELEdBQUssQ0FBR0MsS0FBSyxHQUEyQmIsZUFBZSxDQUEvQ2EsS0FBSyxFQUFFQyxvQkFBb0IsR0FBS2QsZUFBZSxDQUF4Q2Msb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvcmVzcG9uc2l2ZS9NZWRpYS50cz9hZTRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSBcIkBhcnRzeS9mcmVzbmVsXCI7XG5pbXBvcnQgeyBCUkVBS1BPSU5UIH0gZnJvbSBcIi4uLy4uL3RoZW1lL0JyZWFrcG9pbnRzXCI7XG5cbmNvbnN0IEV4YW1wbGVBcHBNZWRpYSA9IGNyZWF0ZU1lZGlhKHtcbiAgaW50ZXJhY3Rpb25zOiB7XG4gICAgbGFuZHNjYXBlOiBcIm5vdCBhbGwgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiLFxuICAgIHBvcnRyYWl0OiBcIm5vdCBhbGwgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIsXG4gICAgaG92ZXI6IFwiKGhvdmVyOiBob3ZlcilcIixcbiAgICBub3RIb3ZlcjogXCIoaG92ZXI6IG5vbmUpXCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgc206IEJSRUFLUE9JTlQuc20sXG4gICAgbWQ6IEJSRUFLUE9JTlQubWQsXG4gICAgbGc6IEJSRUFLUE9JTlQubGcsXG4gICAgeGw6IEJSRUFLUE9JTlQueGwsXG4gIH0sXG59KTtcblxuLy8gTWFrZSBzdHlsZXMgZm9yIGluamVjdGlvbiBpbnRvIHRoZSBoZWFkZXIgb2YgdGhlIHBhZ2VcbmV4cG9ydCBjb25zdCBtZWRpYVN0eWxlcyA9IEV4YW1wbGVBcHBNZWRpYS5jcmVhdGVNZWRpYVN0eWxlKCk7XG5cbmV4cG9ydCBjb25zdCB7IE1lZGlhLCBNZWRpYUNvbnRleHRQcm92aWRlciB9ID0gRXhhbXBsZUFwcE1lZGlhO1xuIl0sIm5hbWVzIjpbImNyZWF0ZU1lZGlhIiwiQlJFQUtQT0lOVCIsIkV4YW1wbGVBcHBNZWRpYSIsImludGVyYWN0aW9ucyIsImxhbmRzY2FwZSIsInBvcnRyYWl0IiwiaG92ZXIiLCJub3RIb3ZlciIsImJyZWFrcG9pbnRzIiwic20iLCJtZCIsImxnIiwieGwiLCJtZWRpYVN0eWxlcyIsImNyZWF0ZU1lZGlhU3R5bGUiLCJNZWRpYSIsIk1lZGlhQ29udGV4dFByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/responsive/Media.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/.pnpm/@chakra-ui+react@1.8.3_db0d5dc181a8aadc4486fc4ebfdbba43/node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _views_layout_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/layout/Layout/Layout */ \"./src/views/layout/Layout/Layout.tsx\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/.pnpm/@chakra-ui+theme-tools@1.3.4_@chakra-ui+system@1.10.3/node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n/* harmony import */ var _theme_Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/Color */ \"./src/theme/Color.ts\");\n/* harmony import */ var _lib_responsive_Media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/responsive/Media */ \"./src/lib/responsive/Media.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.extendTheme)({\n    styles: {\n        global: function(props) {\n            return {\n                // styles for the `body`\n                body: {\n                    bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_6__.mode)(_theme_Color__WEBPACK_IMPORTED_MODULE_3__.COLOR[_theme_Color__WEBPACK_IMPORTED_MODULE_3__.COLORNAME.foreground1], _theme_Color__WEBPACK_IMPORTED_MODULE_3__.COLOR[_theme_Color__WEBPACK_IMPORTED_MODULE_3__.COLORNAME.background1_dark])(props),\n                    color: \"white\"\n                }\n            };\n        }\n    }\n});\nvar Website = function(props) {\n    var router = props.router, pageProps = props.pageProps, Component = props.Component;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ChakraProvider, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_responsive_Media__WEBPACK_IMPORTED_MODULE_4__.MediaContextProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_layout_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                router: router,\n                children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread({}, pageProps, {\n                    key: router.route,\n                    __source: {\n                        fileName: \"/Users/neekh/htw/other/portfolio/space/src/pages/_app.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    },\n                    __self: _this\n                }))\n            }, void 0, false, {\n                fileName: \"/Users/neekh/htw/other/portfolio/space/src/pages/_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/neekh/htw/other/portfolio/space/src/pages/_app.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/neekh/htw/other/portfolio/space/src/pages/_app.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this));\n};\n_c = Website;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Website);\nvar _c;\n$RefreshReg$(_c, \"Website\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNLO0FBRVI7QUFDRDtBQUNJO0FBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RCxHQUFLLENBQUNPLEtBQUssR0FBR0wsNkRBQVcsQ0FBQyxDQUFDO0lBQ3pCTSxNQUFNLEVBQUUsQ0FBQztRQUNQQyxNQUFNLEVBQUUsUUFBUSxDQUFQQyxLQUFLO1lBQUssTUFDcEIsQ0FEcUIsQ0FBQztnQkFDbkIsRUFBd0I7Z0JBQ3hCQyxJQUFJLEVBQUUsQ0FBQztvQkFDTEMsRUFBRSxFQUFFVCw0REFBSSxDQUNOQywrQ0FBSyxDQUFDQywrREFBcUIsR0FDM0JELCtDQUFLLENBQUNDLG9FQUEwQixHQUNoQ0ssS0FBSztvQkFDUEssS0FBSyxFQUFFLENBQU87Z0JBQ2hCLENBQUM7WUFDSCxDQUFDOztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsR0FBSyxDQUFDQyxPQUFPLEdBQUcsUUFBUSxDQUFQTixLQUFlLEVBQUssQ0FBQztJQUNwQyxHQUFLLENBQUdPLE1BQU0sR0FBMkJQLEtBQUssQ0FBdENPLE1BQU0sRUFBRUMsU0FBUyxHQUFnQlIsS0FBSyxDQUE5QlEsU0FBUyxFQUFFQyxTQUFTLEdBQUtULEtBQUssQ0FBbkJTLFNBQVM7SUFDcEMsTUFBTSw2RUFDSG5CLDREQUFjO1FBQUNPLEtBQUssRUFBRUEsS0FBSzs4RkFDekJELHVFQUFvQjtrR0FDbEJMLCtEQUFNO2dCQUFDZ0IsTUFBTSxFQUFFQSxNQUFNOzZGQUNuQkUsU0FBUyxvQkFBS0QsU0FBUztvQkFBRUUsR0FBRyxFQUFFSCxNQUFNLENBQUNJLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JELENBQUM7S0FYS0wsT0FBTztBQWFiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL3ZpZXdzL2xheW91dC9MYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgbW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCI7XG5pbXBvcnQgeyBDT0xPUiwgQ09MT1JOQU1FIH0gZnJvbSBcIi4uL3RoZW1lL0NvbG9yXCI7XG5pbXBvcnQgeyBNZWRpYUNvbnRleHRQcm92aWRlciB9IGZyb20gXCIuLi9saWIvcmVzcG9uc2l2ZS9NZWRpYVwiO1xuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgc3R5bGVzOiB7XG4gICAgZ2xvYmFsOiAocHJvcHMpID0+ICh7XG4gICAgICAvLyBzdHlsZXMgZm9yIHRoZSBgYm9keWBcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgYmc6IG1vZGUoXG4gICAgICAgICAgQ09MT1JbQ09MT1JOQU1FLmZvcmVncm91bmQxXSxcbiAgICAgICAgICBDT0xPUltDT0xPUk5BTUUuYmFja2dyb3VuZDFfZGFya11cbiAgICAgICAgKShwcm9wcyksXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxufSk7XG5cbmNvbnN0IFdlYnNpdGUgPSAocHJvcHM6IEFwcFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcm91dGVyLCBwYWdlUHJvcHMsIENvbXBvbmVudCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDxMYXlvdXQgcm91dGVyPXtyb3V0ZXJ9PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2Vic2l0ZTtcbiJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsIkxheW91dCIsImV4dGVuZFRoZW1lIiwibW9kZSIsIkNPTE9SIiwiQ09MT1JOQU1FIiwiTWVkaWFDb250ZXh0UHJvdmlkZXIiLCJ0aGVtZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiZm9yZWdyb3VuZDEiLCJiYWNrZ3JvdW5kMV9kYXJrIiwiY29sb3IiLCJXZWJzaXRlIiwicm91dGVyIiwicGFnZVByb3BzIiwiQ29tcG9uZW50Iiwia2V5Iiwicm91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/views/layout/Layout/Layout.tsx":
/*!********************************************!*\
  !*** ./src/views/layout/Layout/Layout.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/.pnpm/@chakra-ui+react@1.8.3_db0d5dc181a8aadc4486fc4ebfdbba43/node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/.pnpm/next@12.0.10_d5abbaeffd538e81ebdb9da980300710/node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_desktop_background_layered_waves_haikei_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/desktop/background/layered-waves-haikei.svg */ \"./src/assets/desktop/background/layered-waves-haikei.svg\");\n/* harmony import */ var _assets_mobile_background_layered_waves_haikei_mobile_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/mobile/background/layered-waves-haikei-mobile.svg */ \"./src/assets/mobile/background/layered-waves-haikei-mobile.svg\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar Layout = function(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        as: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/neekh/htw/other/portfolio/space/src/views/layout/Layout/Layout.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Henk - Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/neekh/htw/other/portfolio/space/src/views/layout/Layout/Layout.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/Users/neekh/htw/other/portfolio/space/src/views/layout/Layout/Layout.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/neekh/htw/other/portfolio/space/src/views/layout/Layout/Layout.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/neekh/htw/other/portfolio/space/src/views/layout/Layout/Layout.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/neekh/htw/other/portfolio/space/src/views/layout/Layout/Layout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                overflow: \"hidden\",\n                height: \"100vh\",\n                width: \"100vw\",\n                position: \"absolute\",\n                zIndex: -1,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Media, {}, void 0, false, {\n                        fileName: \"/Users/neekh/htw/other/portfolio/space/src/views/layout/Layout/Layout.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RenderResponsive, {\n                        mobile: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_mobile_background_layered_waves_haikei_mobile_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, void 0, void 0),\n                        desktop: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_desktop_background_layered_waves_haikei_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"/Users/neekh/htw/other/portfolio/space/src/views/layout/Layout/Layout.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/neekh/htw/other/portfolio/space/src/views/layout/Layout/Layout.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                maxW: \"container.md\",\n                pt: 14,\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/Users/neekh/htw/other/portfolio/space/src/views/layout/Layout/Layout.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/neekh/htw/other/portfolio/space/src/views/layout/Layout/Layout.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this));\n};\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvbGF5b3V0L0xheW91dC9MYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFFckI7QUFDK0Q7QUFDSzs7QUFPekYsR0FBSyxDQUFDSyxNQUFNLEdBQW9CLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7SUFDakQsTUFBTSw2RUFDSE4saURBQUc7UUFBQ08sRUFBRSxFQUFFLENBQU07O3dGQUNaTCxrREFBSTs7Z0dBQ0ZNLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFVO3dCQUFDQyxPQUFPLEVBQUMsQ0FBdUM7Ozs7OztnR0FDcEVDLENBQUs7a0NBQUMsQ0FBVzs7Ozs7O2dHQUNqQkMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQVk7d0JBQUNDLElBQUksRUFBQyxDQUE4Qjs7Ozs7O2dHQUN6REYsQ0FBSTt3QkFDSEMsR0FBRyxFQUFDLENBQVk7d0JBQ2hCQyxJQUFJLEVBQUMsQ0FBMkI7d0JBQ2hDQyxXQUFXLEVBQUUsQ0FBVzs7Ozs7O2dHQUV6QkgsQ0FBSTt3QkFDSEUsSUFBSSxFQUFDLENBQXVHO3dCQUM1R0QsR0FBRyxFQUFDLENBQVk7Ozs7Ozs7Ozs7Ozt3RkFHbkJiLGlEQUFHO2dCQUNGZ0IsUUFBUSxFQUFFLENBQVE7Z0JBQ2xCQyxNQUFNLEVBQUUsQ0FBTztnQkFDZkMsS0FBSyxFQUFFLENBQU87Z0JBQ2RDLFFBQVEsRUFBRSxDQUFVO2dCQUNwQkMsTUFBTSxHQUFHLENBQUM7O2dHQUVUQyxLQUFLOzs7OztnR0FDTEMsZ0JBQWdCO3dCQUNmQyxNQUFNLDhFQUFHbkIsaUdBQWdCO3dCQUN6Qm9CLE9BQU8sOEVBQUdyQiwyRkFBaUI7Ozs7Ozs7Ozs7Ozt3RkFHOUJGLHVEQUFTO2dCQUFDd0IsSUFBSSxFQUFDLENBQWM7Z0JBQUNDLEVBQUUsRUFBRSxFQUFFOzBCQUNsQ3BCLEtBQUssQ0FBQ3FCLFFBQVE7Ozs7Ozs7Ozs7OztBQUl2QixDQUFDO0tBbkNZdEIsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdmlld3MvbGF5b3V0L0xheW91dC9MYXlvdXQudHN4PzJmYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDb250YWluZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBCYWNrZ3JvdW5kRGVza3RvcCBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2Rlc2t0b3AvYmFja2dyb3VuZC9sYXllcmVkLXdhdmVzLWhhaWtlaS5zdmdcIjtcbmltcG9ydCBCYWNrZ3JvdW5kTW9iaWxlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvbW9iaWxlL2JhY2tncm91bmQvbGF5ZXJlZC13YXZlcy1oYWlrZWktbW9iaWxlLnN2Z1wiO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuZXhwb3J0IHR5cGUgTGF5b3V0UHJvcHMgPSB7XG4gIHJvdXRlcjogQXBwUHJvcHNbXCJyb3V0ZXJcIl07XG59O1xuXG5leHBvcnQgY29uc3QgTGF5b3V0OiBGQzxMYXlvdXRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPXtcIm1haW5cIn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8dGl0bGU+SGVuayAtIEhvbWU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInByZWNvbm5lY3RcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17XCJhbm9ueW1vdXNcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PdXRmaXQ6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJveFxuICAgICAgICBvdmVyZmxvdz17XCJoaWRkZW5cIn1cbiAgICAgICAgaGVpZ2h0PXtcIjEwMHZoXCJ9XG4gICAgICAgIHdpZHRoPXtcIjEwMHZ3XCJ9XG4gICAgICAgIHBvc2l0aW9uPXtcImFic29sdXRlXCJ9XG4gICAgICAgIHpJbmRleD17LTF9XG4gICAgICA+XG4gICAgICAgIDxNZWRpYT48L01lZGlhPlxuICAgICAgICA8UmVuZGVyUmVzcG9uc2l2ZVxuICAgICAgICAgIG1vYmlsZT17PEJhY2tncm91bmRNb2JpbGUgLz59XG4gICAgICAgICAgZGVza3RvcD17PEJhY2tncm91bmREZXNrdG9wIC8+fVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIubWRcIiBwdD17MTR9PlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiQm94IiwiQ29udGFpbmVyIiwiSGVhZCIsIkJhY2tncm91bmREZXNrdG9wIiwiQmFja2dyb3VuZE1vYmlsZSIsIkxheW91dCIsInByb3BzIiwiYXMiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiY3Jvc3NPcmlnaW4iLCJvdmVyZmxvdyIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJNZWRpYSIsIlJlbmRlclJlc3BvbnNpdmUiLCJtb2JpbGUiLCJkZXNrdG9wIiwibWF4VyIsInB0IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/layout/Layout/Layout.tsx\n");

/***/ })

});