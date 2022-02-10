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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/.pnpm/@chakra-ui+react@1.8.3_db0d5dc181a8aadc4486fc4ebfdbba43/node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _views_layout_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/layout/Layout/Layout */ \"./src/views/layout/Layout/Layout.tsx\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/.pnpm/@chakra-ui+theme-tools@1.3.4_@chakra-ui+system@1.10.3/node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n/* harmony import */ var _theme_Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/Color */ \"./src/theme/Color.ts\");\n/* harmony import */ var _lib_hoc_ViewportProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/hoc/ViewportProvider */ \"./src/lib/hoc/ViewportProvider.tsx\");\n/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @artsy/fresnel */ \"./node_modules/.pnpm/@artsy+fresnel@3.2.2_react@17.0.2/node_modules/@artsy/fresnel/dist/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.extendTheme)({\n    styles: {\n        global: function(props) {\n            return {\n                // styles for the `body`\n                body: {\n                    bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_7__.mode)(_theme_Color__WEBPACK_IMPORTED_MODULE_3__.COLOR[_theme_Color__WEBPACK_IMPORTED_MODULE_3__.COLORNAME.foreground1], _theme_Color__WEBPACK_IMPORTED_MODULE_3__.COLOR[_theme_Color__WEBPACK_IMPORTED_MODULE_3__.COLORNAME.background1_dark])(props),\n                    color: \"white\"\n                }\n            };\n        }\n    }\n});\nvar ref = (0,_artsy_fresnel__WEBPACK_IMPORTED_MODULE_5__.createMedia)({\n    breakpoints: {\n        sm: 0,\n        md: 768,\n        lg: 1024,\n        xl: 1192\n    }\n}), MediaContextProvider = ref.MediaContextProvider, Media = ref.Media;\nvar Website = function(props) {\n    var router = props.router, pageProps = props.pageProps, Component = props.Component;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ChakraProvider, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_hoc_ViewportProvider__WEBPACK_IMPORTED_MODULE_4__.ViewportProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MediaContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_layout_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                    router: router,\n                    children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread({}, pageProps, {\n                        key: router.route,\n                        __source: {\n                            fileName: \"/Users/neekh/htw/other/portfolio/space/src/pages/_app.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        },\n                        __self: _this\n                    }))\n                }, void 0, false, {\n                    fileName: \"/Users/neekh/htw/other/portfolio/space/src/pages/_app.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/neekh/htw/other/portfolio/space/src/pages/_app.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/neekh/htw/other/portfolio/space/src/pages/_app.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/neekh/htw/other/portfolio/space/src/pages/_app.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this));\n};\n_c = Website;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Website);\nvar _c;\n$RefreshReg$(_c, \"Website\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDSztBQUVSO0FBQ0Q7QUFDSTtBQUNhO0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsR0FBSyxDQUFDUSxLQUFLLEdBQUdOLDZEQUFXLENBQUMsQ0FBQztJQUN6Qk8sTUFBTSxFQUFFLENBQUM7UUFDUEMsTUFBTSxFQUFFLFFBQVEsQ0FBUEMsS0FBSztZQUFLLE1BQ3BCLENBRHFCLENBQUM7Z0JBQ25CLEVBQXdCO2dCQUN4QkMsSUFBSSxFQUFFLENBQUM7b0JBQ0xDLEVBQUUsRUFBRVYsNERBQUksQ0FDTkMsK0NBQUssQ0FBQ0MsK0RBQXFCLEdBQzNCRCwrQ0FBSyxDQUFDQyxvRUFBMEIsR0FDaENNLEtBQUs7b0JBQ1BLLEtBQUssRUFBRSxDQUFPO2dCQUNoQixDQUFDO1lBQ0gsQ0FBQzs7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBbUNULEdBT3RDLEdBUHNDQSwyREFBVyxDQUFDLENBQUM7SUFDbkRVLFdBQVcsRUFBRSxDQUFDO1FBQ1pDLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEVBQUUsRUFBRSxHQUFHO1FBQ1BDLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLEVBQUUsRUFBRSxJQUFJO0lBQ1YsQ0FBQztBQUNILENBQUMsR0FQT0Msb0JBQW9CLEdBQVlmLEdBT3RDLENBUE1lLG9CQUFvQixFQUFFQyxLQUFLLEdBQUtoQixHQU90QyxDQVA0QmdCLEtBQUs7QUFTbkMsR0FBSyxDQUFDQyxPQUFPLEdBQUcsUUFBUSxDQUFQYixLQUFlLEVBQUssQ0FBQztJQUNwQyxHQUFLLENBQUdjLE1BQU0sR0FBMkJkLEtBQUssQ0FBdENjLE1BQU0sRUFBRUMsU0FBUyxHQUFnQmYsS0FBSyxDQUE5QmUsU0FBUyxFQUFFQyxTQUFTLEdBQUtoQixLQUFLLENBQW5CZ0IsU0FBUztJQUNwQyxNQUFNLDZFQUNIM0IsNERBQWM7UUFBQ1EsS0FBSyxFQUFFQSxLQUFLOzhGQUN6QkYsdUVBQWdCO2tHQUNkZ0Isb0JBQW9CO3NHQUNsQnJCLCtEQUFNO29CQUFDd0IsTUFBTSxFQUFFQSxNQUFNO2lHQUNuQkUsU0FBUyxvQkFBS0QsU0FBUzt3QkFBRUUsR0FBRyxFQUFFSCxNQUFNLENBQUNJLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkQsQ0FBQztLQWJLTCxPQUFPO0FBZWIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vdmlld3MvbGF5b3V0L0xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBtb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIjtcbmltcG9ydCB7IENPTE9SLCBDT0xPUk5BTUUgfSBmcm9tIFwiLi4vdGhlbWUvQ29sb3JcIjtcbmltcG9ydCB7IFZpZXdwb3J0UHJvdmlkZXIgfSBmcm9tIFwiLi4vbGliL2hvYy9WaWV3cG9ydFByb3ZpZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVNZWRpYSB9IGZyb20gXCJAYXJ0c3kvZnJlc25lbFwiO1xuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgc3R5bGVzOiB7XG4gICAgZ2xvYmFsOiAocHJvcHMpID0+ICh7XG4gICAgICAvLyBzdHlsZXMgZm9yIHRoZSBgYm9keWBcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgYmc6IG1vZGUoXG4gICAgICAgICAgQ09MT1JbQ09MT1JOQU1FLmZvcmVncm91bmQxXSxcbiAgICAgICAgICBDT0xPUltDT0xPUk5BTUUuYmFja2dyb3VuZDFfZGFya11cbiAgICAgICAgKShwcm9wcyksXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxufSk7XG5cbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgc206IDAsXG4gICAgbWQ6IDc2OCxcbiAgICBsZzogMTAyNCxcbiAgICB4bDogMTE5MixcbiAgfSxcbn0pO1xuXG5jb25zdCBXZWJzaXRlID0gKHByb3BzOiBBcHBQcm9wcykgPT4ge1xuICBjb25zdCB7IHJvdXRlciwgcGFnZVByb3BzLCBDb21wb25lbnQgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPFZpZXdwb3J0UHJvdmlkZXI+XG4gICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICA8TGF5b3V0IHJvdXRlcj17cm91dGVyfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8L1ZpZXdwb3J0UHJvdmlkZXI+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlYnNpdGU7XG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJMYXlvdXQiLCJleHRlbmRUaGVtZSIsIm1vZGUiLCJDT0xPUiIsIkNPTE9STkFNRSIsIlZpZXdwb3J0UHJvdmlkZXIiLCJjcmVhdGVNZWRpYSIsInRoZW1lIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiYmciLCJmb3JlZ3JvdW5kMSIsImJhY2tncm91bmQxX2RhcmsiLCJjb2xvciIsImJyZWFrcG9pbnRzIiwic20iLCJtZCIsImxnIiwieGwiLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiV2Vic2l0ZSIsInJvdXRlciIsInBhZ2VQcm9wcyIsIkNvbXBvbmVudCIsImtleSIsInJvdXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

});