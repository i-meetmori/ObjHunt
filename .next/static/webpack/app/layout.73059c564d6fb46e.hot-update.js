"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b391fcb0c6ae\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/NjE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImIzOTFmY2IwYzZhZVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./app/Context/store.tsx":
/*!*******************************!*\
  !*** ./app/Context/store.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalContextProvider: function() { return /* binding */ GlobalContextProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BGMusic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BGMusic */ \"(app-client)/./app/components/BGMusic.tsx\");\n/* __next_internal_client_entry_do_not_use__ GlobalContextProvider,useGlobalContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    ...{}\n});\nconst GlobalContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    // Game State\n    const remainingState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const scoreState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const roundState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3);\n    const tabState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Object Detection\n    const isSubmitingState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const matchedState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    // User State\n    const username = \"soham\";\n    // const username = window.localStorage.getItem(\"username\") || \"unknown\";\n    const [_BGMusic, _setBGMusic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const BGMusicState = {\n        state: _BGMusic,\n        toggle: ()=>{\n            _setBGMusic(!_BGMusic);\n        // window.localStorage.setItem(\"bgMusic\", _BGMusic.toString());\n        }\n    };\n    const [volumepercent, setVolumepercent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const changeVolume = {\n        change: (vol)=>{\n            setVolumepercent;\n        }\n    };\n    const restartGame = ()=>{\n        remainingState[1](10);\n        // roundState[1](3);\n        isSubmitingState[1](false);\n        matchedState[1](-1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            remainingState,\n            scoreState,\n            roundState,\n            isSubmitingState,\n            matchedState,\n            tabState,\n            restartGame,\n            username: username,\n            BGMusicState,\n            volumepercent\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BGMusic__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                state: BGMusicState.state,\n                volumelevel: Number(volumepercent)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\imeet\\\\OneDrive\\\\Desktop\\\\ObjHunt\\\\app\\\\Context\\\\store.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\imeet\\\\OneDrive\\\\Desktop\\\\ObjHunt\\\\app\\\\Context\\\\store.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GlobalContextProvider, \"07xR3R/5VXrgvmVu75UyTwmVOa8=\");\n_c = GlobalContextProvider;\nconst useGlobalContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n};\n_s1(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"GlobalContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL0NvbnRleHQvc3RvcmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTREO0FBRWhCO0FBRTVDLE1BQU1JLDhCQUFnQkosb0RBQWFBLENBQU07SUFDdkMsR0FBSSxDQUFDLENBQUM7QUFDUjtBQUVPLE1BQU1LLHdCQUF3QjtRQUFDLEVBQUVDLFFBQVEsRUFBTzs7SUFDckQsYUFBYTtJQUNiLE1BQU1DLGlCQUFpQkwsK0NBQVFBLENBQUM7SUFDaEMsTUFBTU0sYUFBYU4sK0NBQVFBLENBQUM7SUFDNUIsTUFBTU8sYUFBYVAsK0NBQVFBLENBQUM7SUFFNUIsTUFBTVEsV0FBV1IsK0NBQVFBLENBQUM7SUFFMUIsbUJBQW1CO0lBQ25CLE1BQU1TLG1CQUFtQlQsK0NBQVFBLENBQUM7SUFDbEMsTUFBTVUsZUFBZVYsK0NBQVFBLENBQUMsQ0FBQztJQUUvQixhQUFhO0lBQ2IsTUFBTVcsV0FBVztJQUNqQix5RUFBeUU7SUFDekUsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1jLGVBQWU7UUFDbkJDLE9BQU9IO1FBQ1BJLFFBQVE7WUFDTkgsWUFBWSxDQUFDRDtRQUNiLCtEQUErRDtRQUNqRTtJQUNGO0lBRUEsTUFBTSxDQUFDSyxlQUFlQyxpQkFBaUIsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU1tQixlQUFlO1FBQ25CQyxRQUFRLENBQUNDO1lBQ1BIO1FBQ0Y7SUFDRjtJQUdBLE1BQU1JLGNBQWM7UUFDbEJqQixjQUFjLENBQUMsRUFBRSxDQUFDO1FBQ2xCLG9CQUFvQjtRQUNwQkksZ0JBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ3BCQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ1IsY0FBY3FCO1FBQ2JDLE9BQU87WUFDTG5CO1lBQ0FDO1lBQ0FDO1lBQ0FFO1lBQ0FDO1lBQ0FGO1lBQ0FjO1lBQ0FYLFVBQVVBO1lBQ1ZHO1lBQ0FHO1FBQ0Y7OzBCQUVBLDhEQUFDaEIsMkRBQU9BO2dCQUFDYyxPQUFPRCxhQUFhQztnQkFBT1UsYUFBYUMsT0FBT1Q7Ozs7OztZQUN2RGI7Ozs7Ozs7QUFHUCxFQUFFO0dBMURXRDtLQUFBQTtBQTRETixNQUFNd0IsbUJBQW1COztJQUFNNUIsT0FBQUEsaURBQVVBLENBQUNHO0FBQWEsRUFBRTtJQUFuRHlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Db250ZXh0L3N0b3JlLnRzeD9lNDRiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQkdNdXNpYyBmcm9tIFwiLi4vY29tcG9uZW50cy9CR011c2ljXCI7XG5cbmNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0PGFueT4oe1xuICAuLi4oe30gYXMgYW55KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiB7XG4gIC8vIEdhbWUgU3RhdGVcbiAgY29uc3QgcmVtYWluaW5nU3RhdGUgPSB1c2VTdGF0ZSgxMCk7XG4gIGNvbnN0IHNjb3JlU3RhdGUgPSB1c2VTdGF0ZSg1KTtcbiAgY29uc3Qgcm91bmRTdGF0ZSA9IHVzZVN0YXRlKDMpO1xuXG4gIGNvbnN0IHRhYlN0YXRlID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gT2JqZWN0IERldGVjdGlvblxuICBjb25zdCBpc1N1Ym1pdGluZ1N0YXRlID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBtYXRjaGVkU3RhdGUgPSB1c2VTdGF0ZSgtMSk7XG5cbiAgLy8gVXNlciBTdGF0ZVxuICBjb25zdCB1c2VybmFtZSA9IFwic29oYW1cIjtcbiAgLy8gY29uc3QgdXNlcm5hbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKSB8fCBcInVua25vd25cIjtcbiAgY29uc3QgW19CR011c2ljLCBfc2V0QkdNdXNpY10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgQkdNdXNpY1N0YXRlID0ge1xuICAgIHN0YXRlOiBfQkdNdXNpYyxcbiAgICB0b2dnbGU6ICgpID0+IHtcbiAgICAgIF9zZXRCR011c2ljKCFfQkdNdXNpYyk7XG4gICAgICAvLyB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ011c2ljXCIsIF9CR011c2ljLnRvU3RyaW5nKCkpO1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgW3ZvbHVtZXBlcmNlbnQsIHNldFZvbHVtZXBlcmNlbnRdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgY2hhbmdlVm9sdW1lID0ge1xuICAgIGNoYW5nZTogKHZvbDpudW1iZXIpID0+IHtcbiAgICAgIHNldFZvbHVtZXBlcmNlbnRcbiAgICB9XG4gIH1cbiAgXG5cbiAgY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgcmVtYWluaW5nU3RhdGVbMV0oMTApO1xuICAgIC8vIHJvdW5kU3RhdGVbMV0oMyk7XG4gICAgaXNTdWJtaXRpbmdTdGF0ZVsxXShmYWxzZSk7XG4gICAgbWF0Y2hlZFN0YXRlWzFdKC0xKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICByZW1haW5pbmdTdGF0ZSxcbiAgICAgICAgc2NvcmVTdGF0ZSxcbiAgICAgICAgcm91bmRTdGF0ZSxcbiAgICAgICAgaXNTdWJtaXRpbmdTdGF0ZSxcbiAgICAgICAgbWF0Y2hlZFN0YXRlLFxuICAgICAgICB0YWJTdGF0ZSxcbiAgICAgICAgcmVzdGFydEdhbWUsXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgQkdNdXNpY1N0YXRlLFxuICAgICAgICB2b2x1bWVwZXJjZW50LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QkdNdXNpYyBzdGF0ZT17QkdNdXNpY1N0YXRlLnN0YXRlfSB2b2x1bWVsZXZlbD17TnVtYmVyKHZvbHVtZXBlcmNlbnQpfS8+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbENvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJCR011c2ljIiwiR2xvYmFsQ29udGV4dCIsIkdsb2JhbENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwicmVtYWluaW5nU3RhdGUiLCJzY29yZVN0YXRlIiwicm91bmRTdGF0ZSIsInRhYlN0YXRlIiwiaXNTdWJtaXRpbmdTdGF0ZSIsIm1hdGNoZWRTdGF0ZSIsInVzZXJuYW1lIiwiX0JHTXVzaWMiLCJfc2V0QkdNdXNpYyIsIkJHTXVzaWNTdGF0ZSIsInN0YXRlIiwidG9nZ2xlIiwidm9sdW1lcGVyY2VudCIsInNldFZvbHVtZXBlcmNlbnQiLCJjaGFuZ2VWb2x1bWUiLCJjaGFuZ2UiLCJ2b2wiLCJyZXN0YXJ0R2FtZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ2b2x1bWVsZXZlbCIsIk51bWJlciIsInVzZUdsb2JhbENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/Context/store.tsx\n"));

/***/ })

});