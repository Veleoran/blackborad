/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"header\": \"Home_header__GCVRv\",\n\t\"logocontainer\": \"Home_logocontainer__lNQA6\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"moviesContainer\": \"Home_moviesContainer__wYhoj\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215bW92aXotcGFydDEvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2IxNzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJoZWFkZXJcIjogXCJIb21lX2hlYWRlcl9fR0NWUnZcIixcblx0XCJsb2dvY29udGFpbmVyXCI6IFwiSG9tZV9sb2dvY29udGFpbmVyX19sTlFBNlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzI3X3RiXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcIm1vdmllc0NvbnRhaW5lclwiOiBcIkhvbWVfbW92aWVzQ29udGFpbmVyX193WWhvalwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./styles/Movie.module.css":
/*!*********************************!*\
  !*** ./styles/Movie.module.css ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"movie\": \"Movie_movie__Q_He4\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvTW92aWUubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215bW92aXotcGFydDEvLi9zdHlsZXMvTW92aWUubW9kdWxlLmNzcz8zZWY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vdmllXCI6IFwiTW92aWVfbW92aWVfX1FfSGU0XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Movie.module.css\n");

/***/ }),

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Movie */ \"./components/Movie.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Movie__WEBPACK_IMPORTED_MODULE_2__]);\n_Movie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst Home = ()=>{\n    const content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Movie 1\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Movie 2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Movie 3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Movie 4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n    const movies = [];\n    for(let i = 0; i < 10; i++){\n        movies.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Movie__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            title: `Movie ${i + 1}`,\n            image: `/placeholder.png`\n        }, i, false, {\n            fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n            lineNumber: 19,\n            columnNumber: 17\n        }, undefined));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().logocontainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/logo.png\",\n                                alt: \"Logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                                src: \"/logoletter.png\",\n                                alt: \"Letter logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Popover, {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().Popover),\n                        content: content,\n                        title: \"Liked movies\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            type: \"primary\",\n                            children: \"\\u2665 4 movies\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: [\n                            \"Welcome to \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org\",\n                                children: \"Next.js!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                                lineNumber: 35,\n                                columnNumber: 22\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().subtitle),\n                        children: \"Last releases\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().moviesContainer),\n                        children: movies\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Home.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDRTtBQUNXO0FBQ1g7QUFDbUI7QUFFL0MsTUFBTUssSUFBSSxHQUFHLElBQU07SUFDakIsTUFBTUMsT0FBTyxpQkFDWCw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNDLEdBQUM7MEJBQUMsU0FBTzs7Ozs7eUJBQUk7MEJBQ2QsOERBQUNBLEdBQUM7MEJBQUMsU0FBTzs7Ozs7eUJBQUk7MEJBQ2QsOERBQUNBLEdBQUM7MEJBQUMsU0FBTzs7Ozs7eUJBQUk7MEJBQ2QsOERBQUNBLEdBQUM7MEJBQUMsU0FBTzs7Ozs7eUJBQUk7Ozs7OztpQkFDVjtJQUdSLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0lBQ2pCLElBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLENBQUU7UUFDM0JELE1BQU0sQ0FBQ0UsSUFBSSxlQUFDLDhEQUFDViw4Q0FBSztZQUFTVyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUVGLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUFFRyxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztXQUFyREgsQ0FBQzs7OztxQkFBd0QsQ0FBQyxDQUFDO0tBQ3BGO0lBRUQscUJBQ0UsOERBQUNILEtBQUc7OzBCQUNGLDhEQUFDTyxRQUFNO2dCQUFDQyxTQUFTLEVBQUVYLHVFQUFhOztrQ0FDOUIsOERBQUNHLEtBQUc7d0JBQUNRLFNBQVMsRUFBRVgsOEVBQW9COzswQ0FDbEMsOERBQUNhLEtBQUc7Z0NBQUNDLEdBQUcsRUFBQyxXQUFXO2dDQUFDQyxHQUFHLEVBQUMsTUFBTTs7Ozs7eUNBQUc7MENBQ2xDLDhEQUFDRixLQUFHO2dDQUFDRixTQUFTLEVBQUVYLHFFQUFXO2dDQUFFYyxHQUFHLEVBQUMsaUJBQWlCO2dDQUFDQyxHQUFHLEVBQUMsYUFBYTs7Ozs7eUNBQUc7Ozs7OztpQ0FDbkU7a0NBQ04sOERBQUNqQix5Q0FBTzt3QkFBQ2EsU0FBUyxFQUFFWCx3RUFBYzt3QkFBRUUsT0FBTyxFQUFFQSxPQUFPO3dCQUFFTSxLQUFLLEVBQUMsY0FBYztrQ0FDeEUsNEVBQUNULHdDQUFNOzRCQUFDa0IsSUFBSSxFQUFDLFNBQVM7c0NBQUMsaUJBQVU7Ozs7O3FDQUFTOzs7OztpQ0FDbEM7Ozs7Ozt5QkFDSDswQkFDVCw4REFBQ0MsTUFBSTtnQkFBQ1AsU0FBUyxFQUFFWCxxRUFBVzs7a0NBQzFCLDhEQUFDbUIsSUFBRTt3QkFBQ1IsU0FBUyxFQUFFWCxzRUFBWTs7NEJBQUUsYUFDaEI7MENBQUEsOERBQUNvQixHQUFDO2dDQUFDQyxJQUFJLEVBQUMsb0JBQW9COzBDQUFDLFVBQVE7Ozs7O3lDQUFJOzs7Ozs7aUNBQ2pEO2tDQUNMLDhEQUFDQyxJQUFFO3dCQUFDWCxTQUFTLEVBQUVYLHlFQUFlO2tDQUFFLGVBQWE7Ozs7O2lDQUFLO2tDQUNsRCw4REFBQ0csS0FBRzt3QkFBQ1EsU0FBUyxFQUFFWCxnRkFBc0I7a0NBQ25DSyxNQUFNOzs7OztpQ0FDSDs7Ozs7O3lCQUNEOzs7Ozs7aUJBQ0gsQ0FDTjtDQUNIO0FBRUQsaUVBQWVKLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215bW92aXotcGFydDEvLi9jb21wb25lbnRzL0hvbWUuanM/NGIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTW92aWUgZnJvbSAnLi9Nb3ZpZSc7XHJcbmltcG9ydCB7IFBvcG92ZXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD5Nb3ZpZSAxPC9wPlxyXG4gICAgICA8cD5Nb3ZpZSAyPC9wPlxyXG4gICAgICA8cD5Nb3ZpZSAzPC9wPlxyXG4gICAgICA8cD5Nb3ZpZSA0PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbW92aWVzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBtb3ZpZXMucHVzaCg8TW92aWUga2V5PXtpfSB0aXRsZT17YE1vdmllICR7aSArIDF9YH0gaW1hZ2U9e2AvcGxhY2Vob2xkZXIucG5nYH0gLz4pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gc3JjPVwiL2xvZ29sZXR0ZXIucG5nXCIgYWx0PVwiTGV0dGVyIGxvZ29cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQb3BvdmVyIGNsYXNzTmFtZT17c3R5bGVzLlBvcG92ZXJ9IGNvbnRlbnQ9e2NvbnRlbnR9IHRpdGxlPVwiTGlrZWQgbW92aWVzXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+4pmlIDQgbW92aWVzPC9CdXR0b24+XHJcbiAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIFdlbGNvbWUgdG8gPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiPk5leHQuanMhPC9hPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5MYXN0IHJlbGVhc2VzPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmllc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7bW92aWVzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTW92aWUiLCJQb3BvdmVyIiwiQnV0dG9uIiwic3R5bGVzIiwiSG9tZSIsImNvbnRlbnQiLCJkaXYiLCJwIiwibW92aWVzIiwiaSIsInB1c2giLCJ0aXRsZSIsImltYWdlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibG9nb2NvbnRhaW5lciIsImltZyIsInNyYyIsImFsdCIsImxvZ28iLCJ0eXBlIiwibWFpbiIsImgxIiwiYSIsImhyZWYiLCJoMiIsInN1YnRpdGxlIiwibW92aWVzQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Home.js\n");

/***/ }),

/***/ "./components/Movie.js":
/*!*****************************!*\
  !*** ./components/Movie.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Movie.module.css */ \"./styles/Movie.module.css\");\n/* harmony import */ var _styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__]);\n_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Movie = ({ title , image ,  })=>{\n    const stars = [];\n    for(let i = 0; i < 10; i++){\n        stars.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar\n        }, i, false, {\n            fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Movie.js\",\n            lineNumber: 12,\n            columnNumber: 16\n        }, undefined));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),\n                src: image,\n                alt: \"Poster\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Movie.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_4___default().Container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_4___default().name),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Movie.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_4___default().description)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Movie.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_4___default().vote),\n                        children: stars\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Movie.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Movie.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\components\\\\Movie.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movie);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vdmllLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUEwQjtBQUNzQjtBQUNpQjtBQUNOO0FBRTNELE1BQU1JLEtBQUssR0FBRyxDQUFDLEVBQUVDLEtBQUssR0FBRUMsS0FBSyxLQUFHLEdBQUs7SUFFbkMsTUFBTUMsS0FBSyxHQUFHLEVBQUU7SUFDaEIsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFQSxDQUFDLEVBQUUsQ0FBRTtRQUMzQkQsS0FBSyxDQUFDRSxJQUFJLGVBQUMsOERBQUNQLDJFQUFlO1lBQVNRLElBQUksRUFBRVAscUVBQU07V0FBZkssQ0FBQzs7OztxQkFBa0IsQ0FBQyxDQUFDO0tBQ3ZEO0lBRUQscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFFWCxzRUFBVzs7MEJBQ3pCLDhEQUFDYSxLQUFHO2dCQUFDRixTQUFTLEVBQUVYLHVFQUFZO2dCQUFFYyxHQUFHLEVBQUVULEtBQUs7Z0JBQUVVLEdBQUcsRUFBQyxRQUFROzs7Ozt5QkFBRzswQkFDekQsOERBQUNMLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVgsMkVBQWdCOztrQ0FDOUIsOERBQUNpQixNQUFJO3dCQUFDTixTQUFTLEVBQUVYLHNFQUFXO2tDQUFHSSxLQUFLOzs7OztpQ0FBUTtrQ0FDNUMsOERBQUNlLEdBQUM7d0JBQUNSLFNBQVMsRUFBRVgsNkVBQWtCOzs7OztpQ0FFNUI7a0NBQ0osOERBQUNVLEtBQUc7d0JBQUNDLFNBQVMsRUFBRVgsc0VBQVc7a0NBQUdNLEtBQUs7Ozs7O2lDQUFPOzs7Ozs7eUJBQ3RDOzs7Ozs7aUJBQ0YsQ0FDTjtDQUNIO0FBRUQsaUVBQWVILEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215bW92aXotcGFydDEvLi9jb21wb25lbnRzL01vdmllLmpzP2ZlNTIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Nb3ZpZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmNvbnN0IE1vdmllID0gKHsgdGl0bGUsIGltYWdlLCB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHN0YXJzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBzdGFycy5wdXNoKDxGb250QXdlc29tZUljb24ga2V5PXtpfSBpY29uPXtmYVN0YXJ9IC8+KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzcmM9e2ltYWdlfSBhbHQ9XCJQb3N0ZXJcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbnRhaW5lcn0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e3RpdGxlfTwvc3Bhbj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICB7LyogQWpvdXRleiBsYSBkZXNjcmlwdGlvbiBkdSBmaWxtIGljaSAqL31cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlfT57c3RhcnN9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJGb250QXdlc29tZUljb24iLCJmYVN0YXIiLCJNb3ZpZSIsInRpdGxlIiwiaW1hZ2UiLCJzdGFycyIsImkiLCJwdXNoIiwiaWNvbiIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJpbWciLCJzcmMiLCJhbHQiLCJDb250YWluZXIiLCJzcGFuIiwibmFtZSIsInAiLCJkZXNjcmlwdGlvbiIsInZvdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Movie.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home */ \"./components/Home.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Home__WEBPACK_IMPORTED_MODULE_1__]);\n_components_Home__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Index() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erwan\\\\Desktop\\\\lacapsule-fullstack-js\\\\week4\\\\mymoviz-part1\\\\pages\\\\index.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBc0M7QUFFdEMsU0FBU0MsS0FBSyxHQUFHO0lBQ2YscUJBQU8sOERBQUNELHdEQUFJOzs7O1lBQUcsQ0FBQztDQUNqQjtBQUVELGlFQUFlQyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teW1vdml6LXBhcnQxLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUnO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgcmV0dXJuIDxIb21lIC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbIkhvbWUiLCJJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();