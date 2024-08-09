"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.jsx":
/*!**************************!*\
  !*** ./pages/search.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Search(props) {\n    var ref;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    async function handleSubmit(e) {\n        e.preventDefault();\n        if (!search) return;\n        router.replace(router.pathname + \"?search=\" + search);\n    }\n    console.log(props.searchResults);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"FitQuest | Exercise Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"FitQuest\"\n                    }, void 0, false, {\n                        fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isLoggedIn: props.isLoggedIn\n            }, void 0, false, {\n                fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Exercise Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Search for exercises by muscle group.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"exercise-search\",\n                                id: \"exercise-search\",\n                                value: search,\n                                onChange: (e)=>setSearch(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    ((ref = props.searchResults) === null || ref === void 0 ? void 0 : ref.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExerciseList, {\n                            exercise: props.searchResults\n                        }, data.title, false, {\n                            fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 32\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 23\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No results.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 23\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Search, \"543PQG904eSRSggFJqaIqSaT5Ao=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Search;\nfunction ExerciseList(param) {\n    let { title , type , equipment , difficulty , instructions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: type\n            }, void 0, false, {\n                fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: equipment\n            }, void 0, false, {\n                fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: difficulty\n            }, void 0, false, {\n                fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: instructions\n            }, void 0, false, {\n                fileName: \"/Users/margaret/Desktop/UF/coding/exercise-app-pope/pages/search.jsx\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = ExerciseList;\nvar _c, _c1;\n$RefreshReg$(_c, \"Search\");\n$RefreshReg$(_c1, \"ExerciseList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBcUM7QUFFUjtBQUNBO0FBRVk7QUFDWDtBQUNnQjs7QUE4Qi9CLFNBQVNNLE9BQU9DLEtBQUssRUFBRTtRQTZCbEJBOztJQTVCaEIsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNyQyxlQUFlTyxhQUFhQyxDQUFDLEVBQUU7UUFDM0JBLEVBQUVDLGNBQWM7UUFDcEIsSUFBSSxDQUFDSixRQUFRO1FBQ2JELE9BQU9NLE9BQU8sQ0FBRU4sT0FBT08sUUFBUSxHQUFHLGFBQWFOO0lBQy9DO0lBQ0FPLFFBQVFDLEdBQUcsQ0FBQ1YsTUFBTVcsYUFBYTtJQUMvQixxQkFDSTs7MEJBQ0ksOERBQUNqQixrREFBSUE7O2tDQUNELDhEQUFDa0I7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFckMsOERBQUNuQiwwREFBTUE7Z0JBQUNvQixZQUFZaEIsTUFBTWdCLFVBQVU7Ozs7OzswQkFDcEMsOERBQUNDOztrQ0FDRyw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQUtDLFVBQVVoQjs7MENBQ1osOERBQUNpQjswQ0FBTTs7Ozs7OzBDQUNQLDhEQUFDQztnQ0FDR0MsTUFBSztnQ0FDTFQsTUFBSztnQ0FDTFUsSUFBRztnQ0FDSEMsT0FBT3ZCO2dDQUNQd0IsVUFBVXJCLENBQUFBLElBQUtGLFVBQVVFLEVBQUVzQixNQUFNLENBQUNGLEtBQUs7Ozs7OzswQ0FDM0MsOERBQUNHO2dDQUFPTCxNQUFLOzBDQUFTOzs7Ozs7Ozs7Ozs7b0JBR3RCdkIsQ0FBQUEsQ0FBQUEsTUFBQUEsTUFBTVcsYUFBYSxjQUFuQlgsaUJBQUFBLEtBQUFBLElBQUFBLElBQXFCNkIsTUFBTSxrQkFDekIsOERBQUNDO2tDQUFRLDRFQUFDQzs0QkFBOEJDLFVBQVloQyxNQUFNVyxhQUFhOzJCQUEzQ3NCLEtBQUtyQixLQUFLOzs7Ozs7Ozs7NkNBQ3RDLDhEQUFDc0I7a0NBQUU7Ozs7OzRCQUFlOzs7Ozs7Ozs7QUFLeEMsQ0FBQztHQXBDdUJuQzs7UUFDTE4sa0RBQVNBOzs7S0FESk07QUFzQ3hCLFNBQVNnQyxhQUFhLEtBQWtELEVBQUU7UUFBcEQsRUFBQ25CLE1BQUssRUFBRVcsS0FBSSxFQUFFWSxVQUFTLEVBQUVDLFdBQVUsRUFBRUMsYUFBWSxFQUFDLEdBQWxEO0lBQ2xCLHFCQUNJOzswQkFDSSw4REFBQ25COzBCQUFJTjs7Ozs7OzBCQUNMLDhEQUFDc0I7MEJBQUdYOzs7Ozs7MEJBQ0osOERBQUNXOzBCQUFHQzs7Ozs7OzBCQUNKLDhEQUFDRDswQkFBR0U7Ozs7OzswQkFDSiw4REFBQ0Y7MEJBQUdHOzs7Ozs7OztBQUdoQjtNQVZTTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2guanN4PzlmYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB3aXRoSXJvblNlc3Npb25Tc3IgfSBmcm9tIFwiaXJvbi1zZXNzaW9uL25leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzZXNzaW9uT3B0aW9ucyBmcm9tIFwiLi4vY29uZmlnL3Nlc3Npb25cIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCJcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhJcm9uU2Vzc2lvblNzcihcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3JlcSwgcXVlcnl9KSB7XG4gICAgICAgIGNvbnN0IHt1c2VyfSA9IHJlcS5zZXNzaW9uO1xuICAgICAgICBjb25zdCB7c2VhcmNofSA9IHF1ZXJ5XG4gICAgICAgIGNvbnN0IHByb3BzID0ge307XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBwcm9wcy51c2VyID0gcmVxLnNlc3Npb24udXNlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCAoXG4gICAgICAgICAgICAgICAgYGh0dHBzOi8vYXBpLmFwaS1uaW5qYXMuY29tL3YxL2V4ZXJjaXNlcz9tdXNjbGU9JHtzZWFyY2h9YCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdYLUFwaS1LZXknOiBwcm9jZXNzLmVudi5BUElfS0VZXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgICAgICBwcm9wcy5zZWFyY2hSZXN1bHRzID0gZGF0YVxuICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJvcHMuaXNMb2dnZWRJbiA9ICEhdXNlcjtcbiAgICAgICAgcmV0dXJuIHtwcm9wc307XG4gICAgfSxcbiAgICBzZXNzaW9uT3B0aW9uc1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKHByb3BzKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIilcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoIXNlYXJjaCkgcmV0dXJuXG4gICAgcm91dGVyLnJlcGxhY2UgKHJvdXRlci5wYXRobmFtZSArIFwiP3NlYXJjaD1cIiArIHNlYXJjaClcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJvcHMuc2VhcmNoUmVzdWx0cylcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkZpdFF1ZXN0IHwgRXhlcmNpc2UgU2VhcmNoPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRml0UXVlc3RcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPEhlYWRlciBpc0xvZ2dlZEluPXtwcm9wcy5pc0xvZ2dlZElufS8+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8aDE+RXhlcmNpc2UgU2VhcmNoPC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNlYXJjaCBmb3IgZXhlcmNpc2VzIGJ5IG11c2NsZSBncm91cC48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJleGVyY2lzZS1zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGVyY2lzZS1zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2VhcmNoUmVzdWx0cz8ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgID8gPHNlY3Rpb24+PEV4ZXJjaXNlTGlzdCBrZXk9e2RhdGEudGl0bGV9IGV4ZXJjaXNlID0ge3Byb3BzLnNlYXJjaFJlc3VsdHN9Lz48L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDogPHA+Tm8gcmVzdWx0cy48L3A+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEV4ZXJjaXNlTGlzdCh7dGl0bGUsIHR5cGUsIGVxdWlwbWVudCwgZGlmZmljdWx0eSwgaW5zdHJ1Y3Rpb25zfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cD57dHlwZX08L3A+XG4gICAgICAgICAgICA8cD57ZXF1aXBtZW50fTwvcD5cbiAgICAgICAgICAgIDxwPntkaWZmaWN1bHR5fTwvcD5cbiAgICAgICAgICAgIDxwPntpbnN0cnVjdGlvbnN9PC9wPlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiSGVhZCIsIkxpbmsiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlNlYXJjaCIsInByb3BzIiwicm91dGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVwbGFjZSIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsInNlYXJjaFJlc3VsdHMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImlzTG9nZ2VkSW4iLCJtYWluIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsImxlbmd0aCIsInNlY3Rpb24iLCJFeGVyY2lzZUxpc3QiLCJleGVyY2lzZSIsImRhdGEiLCJwIiwiZXF1aXBtZW50IiwiZGlmZmljdWx0eSIsImluc3RydWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search.jsx\n"));

/***/ })

});