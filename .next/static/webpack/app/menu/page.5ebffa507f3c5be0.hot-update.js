"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/menu/page",{

/***/ "(app-client)/./app/Context/store.tsx":
/*!*******************************!*\
  !*** ./app/Context/store.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalContextProvider: function() { return /* binding */ GlobalContextProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BGMusic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BGMusic */ \"(app-client)/./app/components/BGMusic.tsx\");\n/* __next_internal_client_entry_do_not_use__ GlobalContextProvider,useGlobalContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    ...{}\n});\nconst GlobalContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    // Game State\n    const remainingState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const scoreState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const roundState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3);\n    const tabState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Object Detection\n    const isSubmitingState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const matchedState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    // User State\n    const username = \"soham\";\n    // const username = window.localStorage.getItem(\"username\") || \"unknown\";\n    const [_BGMusic, _setBGMusic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const BGMusicState = {\n        state: _BGMusic,\n        toggle: ()=>{\n            _setBGMusic(!_BGMusic);\n        // window.localStorage.setItem(\"bgMusic\", _BGMusic.toString());\n        }\n    };\n    const volumelevel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const restartGame = ()=>{\n        remainingState[1](10);\n        // roundState[1](3);\n        isSubmitingState[1](false);\n        matchedState[1](-1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            remainingState,\n            scoreState,\n            roundState,\n            isSubmitingState,\n            matchedState,\n            tabState,\n            restartGame,\n            username: username,\n            BGMusicState,\n            volumelevel\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BGMusic__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                state: BGMusicState.state\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\imeet\\\\OneDrive\\\\Desktop\\\\ObjHunt\\\\app\\\\Context\\\\store.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\imeet\\\\OneDrive\\\\Desktop\\\\ObjHunt\\\\app\\\\Context\\\\store.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GlobalContextProvider, \"8Ql6DykowDZY89RX9aA7R/KaneE=\");\n_c = GlobalContextProvider;\nconst useGlobalContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n};\n_s1(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"GlobalContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL0NvbnRleHQvc3RvcmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTREO0FBRWhCO0FBRTVDLE1BQU1JLDhCQUFnQkosb0RBQWFBLENBQU07SUFDdkMsR0FBSSxDQUFDLENBQUM7QUFDUjtBQUVPLE1BQU1LLHdCQUF3QjtRQUFDLEVBQUVDLFFBQVEsRUFBTzs7SUFDckQsYUFBYTtJQUNiLE1BQU1DLGlCQUFpQkwsK0NBQVFBLENBQUM7SUFDaEMsTUFBTU0sYUFBYU4sK0NBQVFBLENBQUM7SUFDNUIsTUFBTU8sYUFBYVAsK0NBQVFBLENBQUM7SUFFNUIsTUFBTVEsV0FBV1IsK0NBQVFBLENBQUM7SUFFMUIsbUJBQW1CO0lBQ25CLE1BQU1TLG1CQUFtQlQsK0NBQVFBLENBQUM7SUFDbEMsTUFBTVUsZUFBZVYsK0NBQVFBLENBQUMsQ0FBQztJQUUvQixhQUFhO0lBQ2IsTUFBTVcsV0FBVztJQUNqQix5RUFBeUU7SUFDekUsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1jLGVBQWU7UUFDbkJDLE9BQU9IO1FBQ1BJLFFBQVE7WUFDTkgsWUFBWSxDQUFDRDtRQUNiLCtEQUErRDtRQUNqRTtJQUNGO0lBRUEsTUFBTUssY0FBY2pCLCtDQUFRQSxDQUFDO0lBRTdCLE1BQU1rQixjQUFjO1FBQ2xCYixjQUFjLENBQUMsRUFBRSxDQUFDO1FBQ2xCLG9CQUFvQjtRQUNwQkksZ0JBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ3BCQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ1IsY0FBY2lCO1FBQ2JDLE9BQU87WUFDTGY7WUFDQUM7WUFDQUM7WUFDQUU7WUFDQUM7WUFDQUY7WUFDQVU7WUFDQVAsVUFBVUE7WUFDVkc7WUFDQUc7UUFDRjs7MEJBRUEsOERBQUNoQiwyREFBT0E7Z0JBQUNjLE9BQU9ELGFBQWFDOzs7Ozs7WUFDNUJYOzs7Ozs7O0FBR1AsRUFBRTtHQXBEV0Q7S0FBQUE7QUFzRE4sTUFBTWtCLG1CQUFtQjs7SUFBTXRCLE9BQUFBLGlEQUFVQSxDQUFDRztBQUFhLEVBQUU7SUFBbkRtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQ29udGV4dC9zdG9yZS50c3g/ZTQ0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEJHTXVzaWMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQkdNdXNpY1wiO1xuXG5jb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxhbnk+KHtcbiAgLi4uKHt9IGFzIGFueSksXG59KTtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xuICAvLyBHYW1lIFN0YXRlXG4gIGNvbnN0IHJlbWFpbmluZ1N0YXRlID0gdXNlU3RhdGUoMTApO1xuICBjb25zdCBzY29yZVN0YXRlID0gdXNlU3RhdGUoNSk7XG4gIGNvbnN0IHJvdW5kU3RhdGUgPSB1c2VTdGF0ZSgzKTtcblxuICBjb25zdCB0YWJTdGF0ZSA9IHVzZVN0YXRlKDApO1xuXG4gIC8vIE9iamVjdCBEZXRlY3Rpb25cbiAgY29uc3QgaXNTdWJtaXRpbmdTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbWF0Y2hlZFN0YXRlID0gdXNlU3RhdGUoLTEpO1xuXG4gIC8vIFVzZXIgU3RhdGVcbiAgY29uc3QgdXNlcm5hbWUgPSBcInNvaGFtXCI7XG4gIC8vIGNvbnN0IHVzZXJuYW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIikgfHwgXCJ1bmtub3duXCI7XG4gIGNvbnN0IFtfQkdNdXNpYywgX3NldEJHTXVzaWNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IEJHTXVzaWNTdGF0ZSA9IHtcbiAgICBzdGF0ZTogX0JHTXVzaWMsXG4gICAgdG9nZ2xlOiAoKSA9PiB7XG4gICAgICBfc2V0QkdNdXNpYyghX0JHTXVzaWMpO1xuICAgICAgLy8gd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmdNdXNpY1wiLCBfQkdNdXNpYy50b1N0cmluZygpKTtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHZvbHVtZWxldmVsID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgcmVtYWluaW5nU3RhdGVbMV0oMTApO1xuICAgIC8vIHJvdW5kU3RhdGVbMV0oMyk7XG4gICAgaXNTdWJtaXRpbmdTdGF0ZVsxXShmYWxzZSk7XG4gICAgbWF0Y2hlZFN0YXRlWzFdKC0xKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICByZW1haW5pbmdTdGF0ZSxcbiAgICAgICAgc2NvcmVTdGF0ZSxcbiAgICAgICAgcm91bmRTdGF0ZSxcbiAgICAgICAgaXNTdWJtaXRpbmdTdGF0ZSxcbiAgICAgICAgbWF0Y2hlZFN0YXRlLFxuICAgICAgICB0YWJTdGF0ZSxcbiAgICAgICAgcmVzdGFydEdhbWUsXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgQkdNdXNpY1N0YXRlLFxuICAgICAgICB2b2x1bWVsZXZlbCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEJHTXVzaWMgc3RhdGU9e0JHTXVzaWNTdGF0ZS5zdGF0ZX0vPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VHbG9iYWxDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQkdNdXNpYyIsIkdsb2JhbENvbnRleHQiLCJHbG9iYWxDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlbWFpbmluZ1N0YXRlIiwic2NvcmVTdGF0ZSIsInJvdW5kU3RhdGUiLCJ0YWJTdGF0ZSIsImlzU3VibWl0aW5nU3RhdGUiLCJtYXRjaGVkU3RhdGUiLCJ1c2VybmFtZSIsIl9CR011c2ljIiwiX3NldEJHTXVzaWMiLCJCR011c2ljU3RhdGUiLCJzdGF0ZSIsInRvZ2dsZSIsInZvbHVtZWxldmVsIiwicmVzdGFydEdhbWUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlR2xvYmFsQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/Context/store.tsx\n"));

/***/ })

});