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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"4fc6c9b15a17\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/NjE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjRmYzZjOWIxNWExN1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./app/components/BGMusic.tsx":
/*!************************************!*\
  !*** ./app/components/BGMusic.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction BGMusic(props) {\n    _s();\n    const canPlay = props.state;\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const volumelevel = props.volumelevel;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _audioRef_current, _audioRef_current1;\n        canPlay ? audioRef === null || audioRef === void 0 ? void 0 : (_audioRef_current = audioRef.current) === null || _audioRef_current === void 0 ? void 0 : _audioRef_current.play() : audioRef === null || audioRef === void 0 ? void 0 : (_audioRef_current1 = audioRef.current) === null || _audioRef_current1 === void 0 ? void 0 : _audioRef_current1.pause();\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n            src: \"\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\imeet\\\\OneDrive\\\\Desktop\\\\ObjHunt\\\\app\\\\components\\\\BGMusic.tsx\",\n            lineNumber: 21,\n            columnNumber: 5\n        }, this);\n    }, [\n        canPlay\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n            volume: volumelevel,\n            ref: audioRef,\n            autoPlay: canPlay,\n            loop: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                src: \"/bg.mpga\",\n                type: \"audio/mpeg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\imeet\\\\OneDrive\\\\Desktop\\\\ObjHunt\\\\app\\\\components\\\\BGMusic.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\imeet\\\\OneDrive\\\\Desktop\\\\ObjHunt\\\\app\\\\components\\\\BGMusic.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\imeet\\\\OneDrive\\\\Desktop\\\\ObjHunt\\\\app\\\\components\\\\BGMusic.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(BGMusic, \"+byXHHf22FzALubYzgUeSQRtz1Y=\");\n_c = BGMusic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BGMusic);\nvar _c;\n$RefreshReg$(_c, \"BGMusic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvQkdNdXNpYy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTWU7QUFPZixTQUFTRyxRQUFRQyxLQUFZOztJQUMzQixNQUFNQyxVQUFVRCxNQUFNRTtJQUN0QixNQUFNQyxXQUFXTCw2Q0FBTUEsQ0FBbUI7SUFDMUMsTUFBTU0sY0FBY0osTUFBTUk7SUFFMUJQLGdEQUFTQSxDQUFDO1lBQ0VNLG1CQUE0QkE7UUFBdENGLFVBQVVFLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsb0JBQUFBLFNBQVVFLHFCQUFWRiwrQkFBQUEsS0FBQUEsSUFBQUEsa0JBQW1CRyxTQUFTSCxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLHFCQUFBQSxTQUFVRSxxQkFBVkYsZ0NBQUFBLEtBQUFBLElBQUFBLG1CQUFtQkk7c0JBQ3pELDhEQUFDQztZQUFNQyxLQUFJOzs7Ozs7SUFDYixHQUFHO1FBQUNSO0tBQVE7SUFFWixxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0g7WUFBT0ksUUFBUVI7WUFBWVMsS0FBS1Y7WUFBVVcsVUFBVWI7WUFBU2MsSUFBSTtzQkFDaEUsNEVBQUNDO2dCQUFPUCxLQUFLO2dCQUFZUSxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXRDO0dBakJTbEI7S0FBQUE7QUFtQlQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQkdNdXNpYy50c3g/ZTFiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgRGlzcGF0Y2gsXG4gIFNldFN0YXRlQWN0aW9uLFxuICB1c2VFZmZlY3QsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzdGF0ZTogYm9vbGVhbjtcbiAgdm9sdW1lbGV2ZWw6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gQkdNdXNpYyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgY2FuUGxheSA9IHByb3BzLnN0YXRlO1xuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50PihudWxsKTtcbiAgY29uc3Qgdm9sdW1lbGV2ZWwgPSBwcm9wcy52b2x1bWVsZXZlbFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2FuUGxheSA/IGF1ZGlvUmVmPy5jdXJyZW50Py5wbGF5KCkgOiBhdWRpb1JlZj8uY3VycmVudD8ucGF1c2UoKTtcbiAgICA8YXVkaW8gc3JjPVwiXCI+PC9hdWRpbz5cbiAgfSwgW2NhblBsYXldKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGVcIj5cbiAgICAgIDxhdWRpbyAgdm9sdW1lPXt2b2x1bWVsZXZlbH1yZWY9e2F1ZGlvUmVmfSBhdXRvUGxheT17Y2FuUGxheX0gbG9vcD5cbiAgICAgICAgPHNvdXJjZSBzcmM9e1wiL2JnLm1wZ2FcIn0gdHlwZT1cImF1ZGlvL21wZWdcIiAvPlxuICAgICAgPC9hdWRpbz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQkdNdXNpYztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkJHTXVzaWMiLCJwcm9wcyIsImNhblBsYXkiLCJzdGF0ZSIsImF1ZGlvUmVmIiwidm9sdW1lbGV2ZWwiLCJjdXJyZW50IiwicGxheSIsInBhdXNlIiwiYXVkaW8iLCJzcmMiLCJkaXYiLCJjbGFzc05hbWUiLCJ2b2x1bWUiLCJyZWYiLCJhdXRvUGxheSIsImxvb3AiLCJzb3VyY2UiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/BGMusic.tsx\n"));

/***/ })

});