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

/***/ "(app-client)/./app/components/BGMusic.tsx":
/*!************************************!*\
  !*** ./app/components/BGMusic.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction BGMusic(props) {\n    _s();\n    const canPlay = props.state;\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const volumelevel = props.volumelevel;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _audioRef_current, _audioRef_current1;\n        canPlay ? audioRef === null || audioRef === void 0 ? void 0 : (_audioRef_current = audioRef.current) === null || _audioRef_current === void 0 ? void 0 : _audioRef_current.play() : audioRef === null || audioRef === void 0 ? void 0 : (_audioRef_current1 = audioRef.current) === null || _audioRef_current1 === void 0 ? void 0 : _audioRef_current1.pause();\n        if (audioRef.current) {\n            audioRef.current.volume = volumelevel;\n        }\n    }, [\n        canPlay,\n        volumelevel\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n            volume: volumelevel,\n            ref: audioRef,\n            autoPlay: canPlay,\n            loop: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                src: \"/bg.mpga\",\n                type: \"audio/mpeg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\imeet\\\\OneDrive\\\\Desktop\\\\ObjHunt\\\\app\\\\components\\\\BGMusic.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\imeet\\\\OneDrive\\\\Desktop\\\\ObjHunt\\\\app\\\\components\\\\BGMusic.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\imeet\\\\OneDrive\\\\Desktop\\\\ObjHunt\\\\app\\\\components\\\\BGMusic.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(BGMusic, \"+byXHHf22FzALubYzgUeSQRtz1Y=\");\n_c = BGMusic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BGMusic);\nvar _c;\n$RefreshReg$(_c, \"BGMusic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvQkdNdXNpYy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTWU7QUFPZixTQUFTRyxRQUFRQyxLQUFZOztJQUMzQixNQUFNQyxVQUFVRCxNQUFNRTtJQUN0QixNQUFNQyxXQUFXTCw2Q0FBTUEsQ0FBbUI7SUFDMUMsTUFBTU0sY0FBY0osTUFBTUk7SUFFMUJQLGdEQUFTQSxDQUFDO1lBQ0VNLG1CQUE0QkE7UUFBdENGLFVBQVVFLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsb0JBQUFBLFNBQVVFLHFCQUFWRiwrQkFBQUEsS0FBQUEsSUFBQUEsa0JBQW1CRyxTQUFTSCxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLHFCQUFBQSxTQUFVRSxxQkFBVkYsZ0NBQUFBLEtBQUFBLElBQUFBLG1CQUFtQkk7UUFDekQsSUFBR0osU0FBU0UsU0FBUTtZQUNsQkYsU0FBU0UsUUFBUUcsU0FBU0o7UUFDNUI7SUFDRixHQUFHO1FBQUNIO1FBQVNHO0tBQVk7SUFFekIscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQU9ILFFBQVFKO1lBQVlRLEtBQUtUO1lBQVVVLFVBQVVaO1lBQVNhLElBQUk7c0JBQ2hFLDRFQUFDQztnQkFBT0MsS0FBSztnQkFBWUMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QztHQW5CU2xCO0tBQUFBO0FBcUJULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0JHTXVzaWMudHN4P2UxYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIERpc3BhdGNoLFxuICBTZXRTdGF0ZUFjdGlvbixcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc3RhdGU6IGJvb2xlYW47XG4gIHZvbHVtZWxldmVsOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIEJHTXVzaWMocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IGNhblBsYXkgPSBwcm9wcy5zdGF0ZTtcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHZvbHVtZWxldmVsID0gcHJvcHMudm9sdW1lbGV2ZWxcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNhblBsYXkgPyBhdWRpb1JlZj8uY3VycmVudD8ucGxheSgpIDogYXVkaW9SZWY/LmN1cnJlbnQ/LnBhdXNlKCk7XG4gICAgaWYoYXVkaW9SZWYuY3VycmVudCl7XG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnZvbHVtZSA9IHZvbHVtZWxldmVsO1xuICAgIH1cbiAgfSwgW2NhblBsYXksIHZvbHVtZWxldmVsXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlXCI+XG4gICAgICA8YXVkaW8gIHZvbHVtZT17dm9sdW1lbGV2ZWx9cmVmPXthdWRpb1JlZn0gYXV0b1BsYXk9e2NhblBsYXl9IGxvb3A+XG4gICAgICAgIDxzb3VyY2Ugc3JjPXtcIi9iZy5tcGdhXCJ9IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cbiAgICAgIDwvYXVkaW8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJHTXVzaWM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJCR011c2ljIiwicHJvcHMiLCJjYW5QbGF5Iiwic3RhdGUiLCJhdWRpb1JlZiIsInZvbHVtZWxldmVsIiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsInZvbHVtZSIsImRpdiIsImNsYXNzTmFtZSIsImF1ZGlvIiwicmVmIiwiYXV0b1BsYXkiLCJsb29wIiwic291cmNlIiwic3JjIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/BGMusic.tsx\n"));

/***/ })

});