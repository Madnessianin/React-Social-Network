/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Api/Api.js":
/*!********************!*\
  !*** ./Api/Api.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"token\": function() { return /* binding */ token; },\n/* harmony export */   \"usersAPI\": function() { return /* binding */ usersAPI; },\n/* harmony export */   \"authAPI\": function() { return /* binding */ authAPI; },\n/* harmony export */   \"profileAPI\": function() { return /* binding */ profileAPI; },\n/* harmony export */   \"ChatsAPI\": function() { return /* binding */ ChatsAPI; },\n/* harmony export */   \"securityAPI\": function() { return /* binding */ securityAPI; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/asyncToGenerator/_index.mjs\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar token = localStorage.getItem(\"user\");\nvar instance = axios__WEBPACK_IMPORTED_MODULE_2__.create({\n  withCredentials: true,\n  headers: {\n    \"API-KEY\": \"17ce7864-7abb-4461-acc2-1f1b971290ad\",\n    token: token\n  },\n  baseURL: \"https://d130650747d6.ngrok.io/\",\n  responseType: \"json\"\n});\nvar usersAPI = {\n  getUsers: function getUsers(currentPage, pageSize) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return instance.get(\"profile/users?page=\".concat(currentPage, \"&count=\").concat(pageSize));\n\n            case 2:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }\n};\nvar authAPI = {\n  getAuth: function getAuth() {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return instance.get(\"auth/me\");\n\n            case 2:\n              return _context2.abrupt(\"return\", _context2.sent);\n\n            case 3:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }))();\n  },\n  postAuth: function postAuth(data) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return instance.post(\"/auth/login\", data);\n\n            case 2:\n              return _context3.abrupt(\"return\", _context3.sent);\n\n            case 3:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }))();\n  },\n  deleteAuth: function deleteAuth() {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return instance.delete(\"/auth/login\");\n\n            case 2:\n              return _context4.abrupt(\"return\", _context4.sent);\n\n            case 3:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }))();\n  },\n  registration: function registration(data) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              _context5.next = 2;\n              return instance.post(\"auth/reg\", data);\n\n            case 2:\n              return _context5.abrupt(\"return\", _context5.sent);\n\n            case 3:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    }))();\n  }\n};\nvar profileAPI = {\n  getUserProfile: function getUserProfile(id) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              _context6.next = 2;\n              return instance.get(\"profile/\" + id);\n\n            case 2:\n              return _context6.abrupt(\"return\", _context6.sent);\n\n            case 3:\n            case \"end\":\n              return _context6.stop();\n          }\n        }\n      }, _callee6);\n    }))();\n  },\n  updateStatus: function updateStatus(status) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee7() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee7$(_context7) {\n        while (1) {\n          switch (_context7.prev = _context7.next) {\n            case 0:\n              _context7.next = 2;\n              return instance.put(\"profile/status\", {\n                status: status\n              });\n\n            case 2:\n              return _context7.abrupt(\"return\", _context7.sent);\n\n            case 3:\n            case \"end\":\n              return _context7.stop();\n          }\n        }\n      }, _callee7);\n    }))();\n  },\n  dispachPhoto: function dispachPhoto(photo) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee8() {\n      var formData;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee8$(_context8) {\n        while (1) {\n          switch (_context8.prev = _context8.next) {\n            case 0:\n              formData = new FormData();\n              formData.append(\"image\", photo);\n              _context8.next = 4;\n              return instance.put(\"profile/photo\", formData, {\n                headers: {\n                  \"Content-Type\": \"multipart/form-data\"\n                }\n              });\n\n            case 4:\n              return _context8.abrupt(\"return\", _context8.sent);\n\n            case 5:\n            case \"end\":\n              return _context8.stop();\n          }\n        }\n      }, _callee8);\n    }))();\n  },\n  dispachProfileInfo: function dispachProfileInfo(profile) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee9() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee9$(_context9) {\n        while (1) {\n          switch (_context9.prev = _context9.next) {\n            case 0:\n              _context9.next = 2;\n              return instance.put(\"profile\", profile);\n\n            case 2:\n              return _context9.abrupt(\"return\", _context9.sent);\n\n            case 3:\n            case \"end\":\n              return _context9.stop();\n          }\n        }\n      }, _callee9);\n    }))();\n  },\n  postUser: function postUser(id) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee10() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee10$(_context10) {\n        while (1) {\n          switch (_context10.prev = _context10.next) {\n            case 0:\n              _context10.next = 2;\n              return instance.post(\"profile/follow/\".concat(id), {});\n\n            case 2:\n              return _context10.abrupt(\"return\", _context10.sent);\n\n            case 3:\n            case \"end\":\n              return _context10.stop();\n          }\n        }\n      }, _callee10);\n    }))();\n  },\n  deleteUser: function deleteUser(id) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee11() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee11$(_context11) {\n        while (1) {\n          switch (_context11.prev = _context11.next) {\n            case 0:\n              _context11.next = 2;\n              return instance.delete(\"profile/follow/\".concat(id));\n\n            case 2:\n              return _context11.abrupt(\"return\", _context11.sent);\n\n            case 3:\n            case \"end\":\n              return _context11.stop();\n          }\n        }\n      }, _callee11);\n    }))();\n  },\n  getPosts: function getPosts(id) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee12() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee12$(_context12) {\n        while (1) {\n          switch (_context12.prev = _context12.next) {\n            case 0:\n              _context12.next = 2;\n              return instance.get(\"profile/posts/\".concat(id));\n\n            case 2:\n              return _context12.abrupt(\"return\", _context12.sent);\n\n            case 3:\n            case \"end\":\n              return _context12.stop();\n          }\n        }\n      }, _callee12);\n    }))();\n  },\n  addPost: function addPost(data) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee13() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee13$(_context13) {\n        while (1) {\n          switch (_context13.prev = _context13.next) {\n            case 0:\n              _context13.next = 2;\n              return instance.post(\"profile/post\", data);\n\n            case 2:\n              return _context13.abrupt(\"return\", _context13.sent);\n\n            case 3:\n            case \"end\":\n              return _context13.stop();\n          }\n        }\n      }, _callee13);\n    }))();\n  },\n  deletePost: function deletePost(id) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee14() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee14$(_context14) {\n        while (1) {\n          switch (_context14.prev = _context14.next) {\n            case 0:\n              _context14.next = 2;\n              return instance.delete(\"profile/post/\".concat(id));\n\n            case 2:\n              return _context14.abrupt(\"return\", _context14.sent);\n\n            case 3:\n            case \"end\":\n              return _context14.stop();\n          }\n        }\n      }, _callee14);\n    }))();\n  },\n  changePost: function changePost(id, data) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee15() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee15$(_context15) {\n        while (1) {\n          switch (_context15.prev = _context15.next) {\n            case 0:\n              _context15.next = 2;\n              return instance.put(\"profile/post/\".concat(id), data);\n\n            case 2:\n              return _context15.abrupt(\"return\", _context15.sent);\n\n            case 3:\n            case \"end\":\n              return _context15.stop();\n          }\n        }\n      }, _callee15);\n    }))();\n  },\n  getFriends: function getFriends(id) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee16() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee16$(_context16) {\n        while (1) {\n          switch (_context16.prev = _context16.next) {\n            case 0:\n              _context16.next = 2;\n              return instance.get(\"profile/followers/\".concat(id));\n\n            case 2:\n              return _context16.abrupt(\"return\", _context16.sent);\n\n            case 3:\n            case \"end\":\n              return _context16.stop();\n          }\n        }\n      }, _callee16);\n    }))();\n  }\n};\nvar ChatsAPI = {\n  getChats: function getChats() {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee17() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee17$(_context17) {\n        while (1) {\n          switch (_context17.prev = _context17.next) {\n            case 0:\n              _context17.next = 2;\n              return instance.get(\"chats\");\n\n            case 2:\n              return _context17.abrupt(\"return\", _context17.sent);\n\n            case 3:\n            case \"end\":\n              return _context17.stop();\n          }\n        }\n      }, _callee17);\n    }))();\n  },\n  getMessages: function getMessages(id, count) {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee18() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee18$(_context18) {\n        while (1) {\n          switch (_context18.prev = _context18.next) {\n            case 0:\n              _context18.next = 2;\n              return instance.get(\"chats?room=\".concat(id, \"&count=\").concat(count));\n\n            case 2:\n              return _context18.abrupt(\"return\", _context18.sent);\n\n            case 3:\n            case \"end\":\n              return _context18.stop();\n          }\n        }\n      }, _callee18);\n    }))();\n  }\n};\nvar securityAPI = {\n  getCaptchaURL: function getCaptchaURL() {\n    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee19() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee19$(_context19) {\n        while (1) {\n          switch (_context19.prev = _context19.next) {\n            case 0:\n              _context19.next = 2;\n              return instance.get(\"security/get-captcha-url\");\n\n            case 2:\n              return _context19.abrupt(\"return\", _context19.sent);\n\n            case 3:\n            case \"end\":\n              return _context19.stop();\n          }\n        }\n      }, _callee19);\n    }))();\n  }\n};\n\n//# sourceURL=webpack:///./Api/Api.js?");

/***/ }),

/***/ "./App.js":
/*!****************!*\
  !*** ./App.js ***!
  \****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ \"./App.scss\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _Redux_app_app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Redux/app/app-reducer */ \"./Redux/app/app-reducer.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Components_Common_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Common/Preloader/Preloader */ \"./Components/Common/Preloader/Preloader.jsx\");\n/* harmony import */ var _Redux_app_app_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Redux/app/app-selectors */ \"./Redux/app/app-selectors.js\");\n/* harmony import */ var _Components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Page/Page */ \"./Components/Page/Page.jsx\");\n/* harmony import */ var _Components_Authorization_Login_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Authorization/Login/Login */ \"./Components/Authorization/Login/Login.jsx\");\n/* harmony import */ var _Components_Authorization_Registration_Registration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/Authorization/Registration/Registration */ \"./Components/Authorization/Registration/Registration.jsx\");\n\n\n\n\n\n\n\n\n\n\n\nvar App = function App() {\n  var dispach = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n  var initialized = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {\n    return (0,_Redux_app_app_selectors__WEBPACK_IMPORTED_MODULE_5__.getInitialized)(state);\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    dispach((0,_Redux_app_app_reducer__WEBPACK_IMPORTED_MODULE_2__.initializeApp)());\n  }, []);\n\n  if (!initialized) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Common_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_4__.default, null);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"conteiner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    exact: true,\n    path: \"/\",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {\n        to: \"/app\"\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: \"/login\",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Authorization_Login_Login__WEBPACK_IMPORTED_MODULE_7__.default, null);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: \"/reg\",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Authorization_Registration_Registration__WEBPACK_IMPORTED_MODULE_8__.default, null);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: \"/app\",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.default, null);\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./App.js?");

/***/ }),

/***/ "./Components/Authorization/Registration/RegReducer.js":
/*!*************************************************************!*\
  !*** ./Components/Authorization/Registration/RegReducer.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setVisibleMode\": function() { return /* binding */ setVisibleMode; },\n/* harmony export */   \"setSubtitle\": function() { return /* binding */ setSubtitle; },\n/* harmony export */   \"setDataLoginForm\": function() { return /* binding */ setDataLoginForm; },\n/* harmony export */   \"setDataGeneralForm\": function() { return /* binding */ setDataGeneralForm; },\n/* harmony export */   \"setDataContactsForm\": function() { return /* binding */ setDataContactsForm; },\n/* harmony export */   \"setDataPhotoForm\": function() { return /* binding */ setDataPhotoForm; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"../node_modules/@babel/runtime/helpers/defineProperty/_index.mjs\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar SET_DATA_LOGIN_FORM = \"SET_DATA_LOGIN_FORM\";\nvar SET_DATA_GENERAL_FORM = \"SET_DATA_GENERAL_FORM\";\nvar SET_DATA_CONTACTS_FORM = \"SET_DATA_CONTACT_FORM\";\nvar SET_DATA_PHOTO_FORM = \"SET_DATA_PHOTO_FORM\";\nvar SET_VISIBLE_MODE = \"SET_VISIBLE_MODE\";\nvar SET_SUBTITLE = \"SET_SUBTITLE\";\n\nvar regReducer = function regReducer(state, action) {\n  switch (action.type) {\n    case SET_DATA_LOGIN_FORM:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          dataForm: _objectSpread(_objectSpread({}, state.dataForm), {}, {\n            loginForm: action.data\n          })\n        });\n      }\n\n    case SET_VISIBLE_MODE:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, action.key, action.isVisible));\n      }\n\n    case SET_SUBTITLE:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          subtitle: action.subtitle\n        });\n      }\n\n    case SET_DATA_GENERAL_FORM:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          dataForm: _objectSpread(_objectSpread({}, state.dataForm), {}, {\n            generalForm: action.data\n          })\n        });\n      }\n\n    case SET_DATA_CONTACTS_FORM:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          dataForm: _objectSpread(_objectSpread({}, state.dataForm), {}, {\n            contactsForm: action.data\n          })\n        });\n      }\n\n    case SET_DATA_PHOTO_FORM:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          dataForm: _objectSpread(_objectSpread({}, state.dataForm), {}, {\n            photo: action.data\n          })\n        });\n      }\n\n    default:\n      {\n        return state;\n      }\n  }\n};\n\nvar setVisibleMode = function setVisibleMode(key, isVisible) {\n  return {\n    type: SET_VISIBLE_MODE,\n    key: key,\n    isVisible: isVisible\n  };\n};\nvar setSubtitle = function setSubtitle(subtitle) {\n  return {\n    type: SET_SUBTITLE,\n    subtitle: subtitle\n  };\n};\nvar setDataLoginForm = function setDataLoginForm(data) {\n  return {\n    type: SET_DATA_LOGIN_FORM,\n    data: data\n  };\n};\nvar setDataGeneralForm = function setDataGeneralForm(data) {\n  return {\n    type: SET_DATA_GENERAL_FORM,\n    data: data\n  };\n};\nvar setDataContactsForm = function setDataContactsForm(data) {\n  return {\n    type: SET_DATA_CONTACTS_FORM,\n    data: data\n  };\n};\nvar setDataPhotoForm = function setDataPhotoForm(data) {\n  return {\n    type: SET_DATA_PHOTO_FORM,\n    data: data\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (regReducer);\n\n//# sourceURL=webpack:///./Components/Authorization/Registration/RegReducer.js?");

/***/ }),

/***/ "./Redux/app/app-reducer.js":
/*!**********************************!*\
  !*** ./Redux/app/app-reducer.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializedSucsess\": function() { return /* binding */ initializedSucsess; },\n/* harmony export */   \"initializeApp\": function() { return /* binding */ initializeApp; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/asyncToGenerator/_index.mjs\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"../node_modules/@babel/runtime/helpers/defineProperty/_index.mjs\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_auth_reducer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth-reducer.js */ \"./Redux/auth/auth-reducer.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar INITIALIZED_SUCCSESS = \"social-network/app/INITIALIZED_SUCCSESS\";\nvar initialState = {\n  initialized: false\n};\n\nvar appReducer = function appReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case INITIALIZED_SUCCSESS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          initialized: true\n        });\n      }\n\n    default:\n      return state;\n  }\n};\n\nvar initializedSucsess = function initializedSucsess() {\n  return {\n    type: INITIALIZED_SUCCSESS\n  };\n};\nvar initializeApp = function initializeApp() {\n  return /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(dispatch) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return dispatch((0,_auth_auth_reducer_js__WEBPACK_IMPORTED_MODULE_3__.setAuth)());\n\n            case 2:\n              dispatch(initializedSucsess());\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (appReducer);\n\n//# sourceURL=webpack:///./Redux/app/app-reducer.js?");

/***/ }),

/***/ "./Redux/app/app-selectors.js":
/*!************************************!*\
  !*** ./Redux/app/app-selectors.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInitialized\": function() { return /* binding */ getInitialized; }\n/* harmony export */ });\nvar getInitialized = function getInitialized(state) {\n  return state.app.initialized;\n};\n\n//# sourceURL=webpack:///./Redux/app/app-selectors.js?");

/***/ }),

/***/ "./Redux/auth/auth-reducer.js":
/*!************************************!*\
  !*** ./Redux/auth/auth-reducer.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setAuthUserData\": function() { return /* binding */ setAuthUserData; },\n/* harmony export */   \"setCaptchaURL\": function() { return /* binding */ setCaptchaURL; },\n/* harmony export */   \"setCaptchaText\": function() { return /* binding */ setCaptchaText; },\n/* harmony export */   \"setAuthUser\": function() { return /* binding */ setAuthUser; },\n/* harmony export */   \"setAuth\": function() { return /* binding */ setAuth; },\n/* harmony export */   \"getAuthUser\": function() { return /* binding */ getAuthUser; },\n/* harmony export */   \"login\": function() { return /* binding */ login; },\n/* harmony export */   \"logout\": function() { return /* binding */ logout; },\n/* harmony export */   \"getCaptchaURL\": function() { return /* binding */ getCaptchaURL; },\n/* harmony export */   \"registration\": function() { return /* binding */ registration; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/asyncToGenerator/_index.mjs\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"../node_modules/@babel/runtime/helpers/defineProperty/_index.mjs\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-form */ \"../node_modules/redux-form/es/index.js\");\n/* harmony import */ var _Api_Api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Api/Api.js */ \"./Api/Api.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar SET_USER_DATA = \"social-network/auth/SET_USER_DATA\";\nvar SET_CAPTCHA_URL = \"social-network/auth/SET_CAPTCHA_URL\";\nvar SET_AUTORIZED_USER = \"social-network/auth/SET_AUTORIZED_USER\";\nvar SET_CAPTCHA_TEXT = \"social-network/auth/SET_CAPTCHA_TEXT\";\nvar initialState = {\n  id: null,\n  email: null,\n  login: null,\n  isAuth: false,\n  captcha: {\n    captchaURL: null,\n    captchaText: null\n  },\n  profile: null\n};\n\nvar setToken = function setToken(response) {\n  var token = response.data.token;\n  localStorage.setItem(\"user\", token);\n};\n\nvar authReducer = function authReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case SET_USER_DATA:\n      {\n        return _objectSpread(_objectSpread({}, state), action.data);\n      }\n\n    case SET_CAPTCHA_URL:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          captcha: _objectSpread(_objectSpread({}, state.captcha), {}, {\n            captchaURL: action.captcha\n          })\n        });\n      }\n\n    case SET_CAPTCHA_TEXT:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          captcha: _objectSpread(_objectSpread({}, state.captcha), {}, {\n            captchaText: action.captchaText\n          })\n        });\n      }\n\n    case SET_AUTORIZED_USER:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          profile: _objectSpread({}, action.profile)\n        });\n      }\n\n    default:\n      return state;\n  }\n};\n\nvar setAuthUserData = function setAuthUserData(userId, email, login, isAuth) {\n  return {\n    type: SET_USER_DATA,\n    data: {\n      userId: userId,\n      email: email,\n      login: login,\n      isAuth: isAuth\n    }\n  };\n};\nvar setCaptchaURL = function setCaptchaURL(captcha) {\n  return {\n    type: SET_CAPTCHA_URL,\n    captcha: captcha\n  };\n};\nvar setCaptchaText = function setCaptchaText(captchaText) {\n  return {\n    type: SET_CAPTCHA_TEXT,\n    captchaText: captchaText\n  };\n};\nvar setAuthUser = function setAuthUser(profile) {\n  return {\n    type: SET_AUTORIZED_USER,\n    profile: profile\n  };\n};\nvar setAuth = function setAuth() {\n  return /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(dispatch) {\n      var response, _response$data$data, id, email, _login;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _Api_Api_js__WEBPACK_IMPORTED_MODULE_3__.authAPI.getAuth();\n\n            case 2:\n              response = _context.sent;\n\n              if (response.data.resultCode === 0) {\n                _response$data$data = response.data.data, id = _response$data$data.id, email = _response$data$data.email, _login = _response$data$data.login;\n                dispatch(setAuthUserData(id, email, _login, true));\n                dispatch(getAuthUser(id));\n              }\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar getAuthUser = function getAuthUser(id) {\n  return /*#__PURE__*/function () {\n    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(dispatch) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return _Api_Api_js__WEBPACK_IMPORTED_MODULE_3__.profileAPI.getUserProfile(id);\n\n            case 2:\n              response = _context2.sent;\n              dispatch(setAuthUser(response.data));\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\nvar login = function login(data) {\n  return /*#__PURE__*/function () {\n    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(dispatch, getState) {\n      var _getState$authPage$ca, captchaURL, captchaText, newData, response, message;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _getState$authPage$ca = getState().authPage.captcha, captchaURL = _getState$authPage$ca.captchaURL, captchaText = _getState$authPage$ca.captchaText;\n              newData = _objectSpread({}, data);\n\n              if (captchaURL) {\n                newData.captcha = captchaText;\n              }\n\n              _context3.next = 5;\n              return _Api_Api_js__WEBPACK_IMPORTED_MODULE_3__.authAPI.postAuth(newData);\n\n            case 5:\n              response = _context3.sent;\n\n              if (response.data.resultCode === 0) {\n                dispatch(setAuth());\n                setToken(response);\n                dispatch(setCaptchaURL(null));\n              } else {\n                if (response.data.resultCode === 10) {\n                  dispatch(getCaptchaURL());\n                } else {\n                  message = response.data.messages.length > 0 ? response.data.messages[0] : \"Some error\";\n                  dispatch((0,redux_form__WEBPACK_IMPORTED_MODULE_4__.stopSubmit)(\"login\", {\n                    _error: message\n                  }));\n                }\n              }\n\n            case 7:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x3, _x4) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\nvar logout = function logout() {\n  return /*#__PURE__*/function () {\n    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(dispatch) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return _Api_Api_js__WEBPACK_IMPORTED_MODULE_3__.authAPI.deleteAuth();\n\n            case 2:\n              response = _context4.sent;\n\n              if (response.data.resultCode === 0) {\n                dispatch(setAuthUserData(null, null, null, false));\n              }\n\n            case 4:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function (_x5) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n};\nvar getCaptchaURL = function getCaptchaURL() {\n  return /*#__PURE__*/function () {\n    var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(dispatch) {\n      var responseCaptcha;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              _context5.next = 2;\n              return _Api_Api_js__WEBPACK_IMPORTED_MODULE_3__.securityAPI.getCaptchaURL();\n\n            case 2:\n              responseCaptcha = _context5.sent;\n              dispatch(setCaptchaURL(responseCaptcha.data.url));\n\n            case 4:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    }));\n\n    return function (_x6) {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n};\nvar registration = function registration(data) {\n  return /*#__PURE__*/function () {\n    var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6(dispatch) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              _context6.next = 2;\n              return _Api_Api_js__WEBPACK_IMPORTED_MODULE_3__.authAPI.registration(data);\n\n            case 2:\n              response = _context6.sent;\n\n              if (response.data.resultCode === 0) {\n                setToken(response.data);\n              }\n\n            case 4:\n            case \"end\":\n              return _context6.stop();\n          }\n        }\n      }, _callee6);\n    }));\n\n    return function (_x7) {\n      return _ref6.apply(this, arguments);\n    };\n  }();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);\n\n//# sourceURL=webpack:///./Redux/auth/auth-reducer.js?");

/***/ }),

/***/ "./Redux/auth/auth-selectors.js":
/*!**************************************!*\
  !*** ./Redux/auth/auth-selectors.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getIsAuth\": function() { return /* binding */ getIsAuth; },\n/* harmony export */   \"getLogin\": function() { return /* binding */ getLogin; },\n/* harmony export */   \"getAutorizedUserId\": function() { return /* binding */ getAutorizedUserId; },\n/* harmony export */   \"getCaptcha\": function() { return /* binding */ getCaptcha; },\n/* harmony export */   \"getAuthUserPhoto\": function() { return /* binding */ getAuthUserPhoto; },\n/* harmony export */   \"getAuthUserName\": function() { return /* binding */ getAuthUserName; },\n/* harmony export */   \"getAuthUserProfile\": function() { return /* binding */ getAuthUserProfile; }\n/* harmony export */ });\nvar getIsAuth = function getIsAuth(state) {\n  return state.authPage.isAuth;\n};\nvar getLogin = function getLogin(state) {\n  return state.authPage.login;\n};\nvar getAutorizedUserId = function getAutorizedUserId(state) {\n  return state.authPage.userId;\n};\nvar getCaptcha = function getCaptcha(state) {\n  return state.authPage.captcha.captchaURL;\n};\nvar getAuthUserPhoto = function getAuthUserPhoto(state) {\n  return state.authPage.profile.photos.large;\n};\nvar getAuthUserName = function getAuthUserName(state) {\n  return state.authPage.profile.fullName;\n};\nvar getAuthUserProfile = function getAuthUserProfile(state) {\n  return state.authPage.profile;\n};\n\n//# sourceURL=webpack:///./Redux/auth/auth-selectors.js?");

/***/ }),

/***/ "./Redux/chats/chats-reducer.js":
/*!**************************************!*\
  !*** ./Redux/chats/chats-reducer.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addMessage\": function() { return /* binding */ addMessage; },\n/* harmony export */   \"setChats\": function() { return /* binding */ setChats; },\n/* harmony export */   \"setRoom\": function() { return /* binding */ setRoom; },\n/* harmony export */   \"removeMessege\": function() { return /* binding */ removeMessege; },\n/* harmony export */   \"getChats\": function() { return /* binding */ getChats; },\n/* harmony export */   \"getMessages\": function() { return /* binding */ getMessages; },\n/* harmony export */   \"sendMessage\": function() { return /* binding */ sendMessage; },\n/* harmony export */   \"sendNewMessage\": function() { return /* binding */ sendNewMessage; },\n/* harmony export */   \"deleteMessage\": function() { return /* binding */ deleteMessage; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/asyncToGenerator/_index.mjs\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/toConsumableArray/_index.mjs\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"../node_modules/@babel/runtime/helpers/defineProperty/_index.mjs\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Api/Api */ \"./Api/Api.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"../node_modules/socket.io-client/wrapper.mjs\");\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar SEND_MESSAGE = \"social-network/chats/SEND_MESSAGE\";\nvar SET_CHATS = \"social-network/chats/SET_CHATS\";\nvar SET_ROOM = \"social-network/chats/SET_ROOM\";\nvar DELETE_MESSAGE = \"social-network/chats/DELETE_MESSAGE\";\nvar initialState = {\n  dialogs: [],\n  room: {\n    chatInfo: {},\n    members: [],\n    messages: []\n  }\n};\n\nvar chatsReducer = function chatsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case SET_CHATS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          dialogs: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(action.chats)\n        });\n      }\n\n    case SET_ROOM:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          room: {\n            chatInfo: _objectSpread({}, action.chatInfo),\n            members: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(action.data.users),\n            messages: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(action.data.messages)\n          }\n        });\n      }\n\n    case SEND_MESSAGE:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          room: _objectSpread(_objectSpread({}, state.room), {}, {\n            messages: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(state.room.messages), [action.newMessage])\n          })\n        });\n      }\n\n    case DELETE_MESSAGE:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          room: _objectSpread(_objectSpread({}, state.room), {}, {\n            messages: state.room.messages.filter(function (message) {\n              return message.id !== action.messageId;\n            })\n          })\n        });\n      }\n\n    default:\n      return state;\n  }\n};\n\nvar addMessage = function addMessage(newMessage) {\n  return {\n    type: SEND_MESSAGE,\n    newMessage: newMessage\n  };\n};\nvar setChats = function setChats(chats) {\n  return {\n    type: SET_CHATS,\n    chats: chats\n  };\n};\nvar setRoom = function setRoom(data, chatInfo) {\n  return {\n    type: SET_ROOM,\n    data: data,\n    chatInfo: chatInfo\n  };\n};\nvar removeMessege = function removeMessege(messageId) {\n  return {\n    type: DELETE_MESSAGE,\n    messageId: messageId\n  };\n};\n/* Thunk */\n\nvar getChats = function getChats() {\n  return /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(dispatch) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _Api_Api__WEBPACK_IMPORTED_MODULE_4__.ChatsAPI.getChats();\n\n            case 2:\n              response = _context.sent;\n\n              if (response.data.resultCode === 0) {\n                dispatch(setChats(response.data.items));\n              }\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar getMessages = function getMessages(id) {\n  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n  return /*#__PURE__*/function () {\n    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(dispatch, getState) {\n      var response, chatInfo;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return _Api_Api__WEBPACK_IMPORTED_MODULE_4__.ChatsAPI.getMessages(id, count);\n\n            case 2:\n              response = _context2.sent;\n\n              if (response.data.resultCode === 0) {\n                chatInfo = getState().chatsPage.dialogs[id - 1];\n                dispatch(setRoom(response.data.items, chatInfo));\n              }\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x2, _x3) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\nvar sendMessage = function sendMessage(message, userId, room) {\n  return /*#__PURE__*/function () {\n    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(dispatch) {\n      var socket;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__.default)(\"ws://d130650747d6.ngrok.io/\");\n              socket.emit(\"join\", {\n                userId: userId,\n                room: room\n              });\n              _context3.next = 4;\n              return socket.emit(\"sendMessage\", {\n                message: message,\n                userId: userId,\n                room: room\n              });\n\n            case 4:\n              _context3.next = 6;\n              return socket.on(\"responseSendMessage\", function (_ref4) {\n                var data = _ref4.data;\n                dispatch(addMessage(data));\n              });\n\n            case 6:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x4) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\nvar sendNewMessage = function sendNewMessage(message, from, to) {\n  return /*#__PURE__*/function () {\n    var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(dispatch) {\n      var socket;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__.default)(\"ws://d130650747d6.ngrok.io/\");\n              _context4.next = 3;\n              return socket.emit(\"sendMessage\", {\n                message: message,\n                from: from,\n                to: to\n              });\n\n            case 3:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function (_x5) {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n};\nvar deleteMessage = function deleteMessage(id, room) {\n  return /*#__PURE__*/function () {\n    var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(dispatch) {\n      var socket;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__.default)(\"ws://d130650747d6.ngrok.io/\");\n              _context5.next = 3;\n              return socket.emit(\"removeMessage\", {\n                room: room,\n                id: id\n              });\n\n            case 3:\n              _context5.next = 5;\n              return socket.on(\"responseRemoveMessage\", function (_ref7) {\n                var data = _ref7.data;\n                dispatch(getMessages(room));\n              });\n\n            case 5:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    }));\n\n    return function (_x6) {\n      return _ref6.apply(this, arguments);\n    };\n  }();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chatsReducer);\n\n//# sourceURL=webpack:///./Redux/chats/chats-reducer.js?");

/***/ }),

/***/ "./Redux/profile/profile-reducer.js":
/*!******************************************!*\
  !*** ./Redux/profile/profile-reducer.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPost\": function() { return /* binding */ addPost; },\n/* harmony export */   \"deleteThisPost\": function() { return /* binding */ deleteThisPost; },\n/* harmony export */   \"changeThisPost\": function() { return /* binding */ changeThisPost; },\n/* harmony export */   \"setUsersProfile\": function() { return /* binding */ setUsersProfile; },\n/* harmony export */   \"setUserStatus\": function() { return /* binding */ setUserStatus; },\n/* harmony export */   \"savePhotosSucsess\": function() { return /* binding */ savePhotosSucsess; },\n/* harmony export */   \"likeDislikeSucsess\": function() { return /* binding */ likeDislikeSucsess; },\n/* harmony export */   \"setPosts\": function() { return /* binding */ setPosts; },\n/* harmony export */   \"setFriends\": function() { return /* binding */ setFriends; },\n/* harmony export */   \"getUser\": function() { return /* binding */ getUser; },\n/* harmony export */   \"getFriendList\": function() { return /* binding */ getFriendList; },\n/* harmony export */   \"getAllPosts\": function() { return /* binding */ getAllPosts; },\n/* harmony export */   \"sendNewPost\": function() { return /* binding */ sendNewPost; },\n/* harmony export */   \"deletePost\": function() { return /* binding */ deletePost; },\n/* harmony export */   \"changePost\": function() { return /* binding */ changePost; },\n/* harmony export */   \"updateStatus\": function() { return /* binding */ updateStatus; },\n/* harmony export */   \"savePhoto\": function() { return /* binding */ savePhoto; },\n/* harmony export */   \"saveProfileInfo\": function() { return /* binding */ saveProfileInfo; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/asyncToGenerator/_index.mjs\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/toConsumableArray/_index.mjs\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"../node_modules/@babel/runtime/helpers/defineProperty/_index.mjs\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-form */ \"../node_modules/redux-form/es/index.js\");\n/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Api/Api */ \"./Api/Api.js\");\n\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar ADD_POST = \"social-network/profile/ADD_POST\";\nvar SET_USER_PROFILE = \"social-network/profile/SET_USER_PROFILE\";\nvar SET_USER_STATUS = \"social-network/profile/SET_USER_STATUS\";\nvar SAVE_PHOTO_SUCSESS = \"social-network/profile/SAVE_PHOTO_SUCSESS\";\nvar LIKEDISLAKEPOST = \"social-network/profile/LIKEDISLAKEPOST\";\nvar SET_POSTS = \"social-network/profile/SET_POSTS\";\nvar DELETE_POST = \"social-network/profile/DELETE_POST\";\nvar CHANGE_POST = \"social-network/profile/CHANGE_POST\";\nvar SET_FRIENDS = \"social-network/profile/SET_FRIENDS\";\nvar initialState = {\n  userId: \"\",\n  status: \"\",\n  aboutMe: \"\",\n  lookingForAJob: true,\n  lookingForAJobDescription: \"\",\n  fullName: \"\",\n  contacts: {\n    youtube: \"https://www.youtube.com/\",\n    facebook: \"https://www.facebook.com/\",\n    vk: \"https://vk.com/\",\n    github: \"https://github.com/\",\n    twitter: \"https://twitter.com/\"\n  },\n  posts: [],\n  photos: {},\n  friends: []\n};\n\nvar profileReducer = function profileReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          posts: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(state.posts), [action.newPost])\n        });\n      }\n\n    case CHANGE_POST:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          posts: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(state.posts.map(function (post) {\n            return post.id !== action.post.id ? post : action.post;\n          }))\n        });\n      }\n\n    case DELETE_POST:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          posts: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(state.posts.filter(function (post) {\n            return post.id !== action.id;\n          }))\n        });\n      }\n\n    case SET_USER_PROFILE:\n      {\n        return _objectSpread(_objectSpread({}, state), action.profile);\n      }\n\n    case SET_USER_STATUS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          status: action.status\n        });\n      }\n\n    case SAVE_PHOTO_SUCSESS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          photos: action.photos\n        });\n      }\n\n    case SET_POSTS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          posts: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(action.posts)\n        });\n      }\n\n    case LIKEDISLAKEPOST:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          posts: state.posts.map(function (post) {\n            if (post.id == action.postId) {\n              if (action.isLikes) {\n                return _objectSpread(_objectSpread({}, post), {}, {\n                  likesCount: parseInt(post.likesCount) - 1,\n                  isLikes: !action.isLikes\n                });\n              } else {\n                return _objectSpread(_objectSpread({}, post), {}, {\n                  likesCount: parseInt(post.likesCount) + 1,\n                  isLikes: !action.isLikes\n                });\n              }\n            }\n\n            return post;\n          })\n        });\n      }\n\n    case SET_FRIENDS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          friends: action.friends\n        });\n      }\n\n    default:\n      return state;\n  }\n};\n\nvar addPost = function addPost(newPost) {\n  return {\n    type: ADD_POST,\n    newPost: newPost\n  };\n};\nvar deleteThisPost = function deleteThisPost(id) {\n  return {\n    type: DELETE_POST,\n    id: id\n  };\n};\nvar changeThisPost = function changeThisPost(post) {\n  return {\n    type: CHANGE_POST,\n    post: post\n  };\n};\nvar setUsersProfile = function setUsersProfile(profile) {\n  return {\n    type: SET_USER_PROFILE,\n    profile: profile\n  };\n};\nvar setUserStatus = function setUserStatus(status) {\n  return {\n    type: SET_USER_STATUS,\n    status: status\n  };\n};\nvar savePhotosSucsess = function savePhotosSucsess(photos) {\n  return {\n    type: SAVE_PHOTO_SUCSESS,\n    photos: photos\n  };\n};\nvar likeDislikeSucsess = function likeDislikeSucsess(postId, isLikes) {\n  return {\n    type: LIKEDISLAKEPOST,\n    postId: postId,\n    isLikes: isLikes\n  };\n};\nvar setPosts = function setPosts(posts) {\n  return {\n    type: SET_POSTS,\n    posts: posts\n  };\n};\nvar setFriends = function setFriends(friends) {\n  return {\n    type: SET_FRIENDS,\n    friends: friends\n  };\n};\n/* Thunk */\n\nvar getUser = function getUser(userId) {\n  return /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(dispatch) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _Api_Api__WEBPACK_IMPORTED_MODULE_4__.profileAPI.getUserProfile(userId);\n\n            case 2:\n              response = _context.sent;\n              dispatch(setUsersProfile(response.data));\n              dispatch(getAllPosts());\n              dispatch(getFriendList(userId));\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar getFriendList = function getFriendList(userId) {\n  return /*#__PURE__*/function () {\n    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(dispatch) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return _Api_Api__WEBPACK_IMPORTED_MODULE_4__.profileAPI.getFriends(userId);\n\n            case 2:\n              response = _context2.sent;\n              dispatch(setFriends(response.data.items));\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\nvar getAllPosts = function getAllPosts() {\n  return /*#__PURE__*/function () {\n    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(dispatch, getState) {\n      var id, response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              id = getState().profilePage.id;\n              _context3.next = 3;\n              return _Api_Api__WEBPACK_IMPORTED_MODULE_4__.profileAPI.getPosts(id);\n\n            case 3:\n              response = _context3.sent;\n              dispatch(setPosts(response.data.items));\n\n            case 5:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x3, _x4) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\nvar sendNewPost = function sendNewPost(post, pageId) {\n  return /*#__PURE__*/function () {\n    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(dispatch) {\n      var newPost, response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              newPost = _objectSpread(_objectSpread({}, post), {}, {\n                userPage: pageId\n              });\n              _context4.next = 3;\n              return _Api_Api__WEBPACK_IMPORTED_MODULE_4__.profileAPI.addPost(newPost);\n\n            case 3:\n              response = _context4.sent;\n\n              if (response.data.resultCode === 0) {\n                dispatch(addPost(response.data.data));\n              }\n\n            case 5:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function (_x5) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n};\nvar deletePost = function deletePost(id) {\n  return /*#__PURE__*/function () {\n    var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(dispatch) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              _context5.next = 2;\n              return _Api_Api__WEBPACK_IMPORTED_MODULE_4__.profileAPI.deletePost(id);\n\n            case 2:\n              response = _context5.sent;\n\n              if (response.data.resultCode === 0) {\n                dispatch(deleteThisPost(id));\n              }\n\n            case 4:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    }));\n\n    return function (_x6) {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n};\nvar changePost = function changePost(id, post) {\n  return /*#__PURE__*/function () {\n    var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee6(dispatch) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              _context6.next = 2;\n              return _Api_Api__WEBPACK_IMPORTED_MODULE_4__.profileAPI.changePost(id, post);\n\n            case 2:\n              response = _context6.sent;\n\n              if (response.data.resultCode === 0) {\n                console.log(response.data.data);\n                dispatch(changeThisPost(response.data.data));\n              }\n\n            case 4:\n            case \"end\":\n              return _context6.stop();\n          }\n        }\n      }, _callee6);\n    }));\n\n    return function (_x7) {\n      return _ref6.apply(this, arguments);\n    };\n  }();\n};\nvar updateStatus = function updateStatus(status) {\n  return /*#__PURE__*/function () {\n    var _ref7 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee7(dispatch) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee7$(_context7) {\n        while (1) {\n          switch (_context7.prev = _context7.next) {\n            case 0:\n              _context7.next = 2;\n              return _Api_Api__WEBPACK_IMPORTED_MODULE_4__.profileAPI.updateStatus(status);\n\n            case 2:\n              response = _context7.sent;\n\n              if (response.data.resultCode === 0) {\n                dispatch(setUserStatus(status));\n              }\n\n            case 4:\n            case \"end\":\n              return _context7.stop();\n          }\n        }\n      }, _callee7);\n    }));\n\n    return function (_x8) {\n      return _ref7.apply(this, arguments);\n    };\n  }();\n};\nvar savePhoto = function savePhoto(photo) {\n  return /*#__PURE__*/function () {\n    var _ref8 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee8(dispatch) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee8$(_context8) {\n        while (1) {\n          switch (_context8.prev = _context8.next) {\n            case 0:\n              _context8.next = 2;\n              return _Api_Api__WEBPACK_IMPORTED_MODULE_4__.profileAPI.dispachPhoto(photo);\n\n            case 2:\n              response = _context8.sent;\n\n              if (response.data.resultCode === 0) {\n                dispatch(savePhotosSucsess(response.data.data));\n              }\n\n            case 4:\n            case \"end\":\n              return _context8.stop();\n          }\n        }\n      }, _callee8);\n    }));\n\n    return function (_x9) {\n      return _ref8.apply(this, arguments);\n    };\n  }();\n};\nvar saveProfileInfo = function saveProfileInfo(profile, nameForm) {\n  return /*#__PURE__*/function () {\n    var _ref9 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee9(dispatch, getState) {\n      var response, contacts, _iterator, _step, error, errorName;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee9$(_context9) {\n        while (1) {\n          switch (_context9.prev = _context9.next) {\n            case 0:\n              _context9.next = 2;\n              return _Api_Api__WEBPACK_IMPORTED_MODULE_4__.profileAPI.dispachProfileInfo(profile);\n\n            case 2:\n              response = _context9.sent;\n\n              if (!(response.resultCode === 0)) {\n                _context9.next = 7;\n                break;\n              }\n\n              dispatch(getUser(getState().auth.id));\n              _context9.next = 13;\n              break;\n\n            case 7:\n              if (!(response.data.messages.length > 0)) {\n                _context9.next = 13;\n                break;\n              }\n\n              contacts = {};\n              _iterator = _createForOfIteratorHelper(response.data.messages);\n\n              try {\n                for (_iterator.s(); !(_step = _iterator.n()).done;) {\n                  error = _step.value;\n                  errorName = error.slice(error.indexOf(\">\") + 1, -1).toLowerCase();\n                  contacts[errorName] = error.slice(0, error.indexOf(\"(\"));\n                }\n              } catch (err) {\n                _iterator.e(err);\n              } finally {\n                _iterator.f();\n              }\n\n              dispatch((0,redux_form__WEBPACK_IMPORTED_MODULE_5__.stopSubmit)(nameForm, {\n                contacts: contacts\n              }));\n              return _context9.abrupt(\"return\", Promise.reject(response.data.messages[0]));\n\n            case 13:\n            case \"end\":\n              return _context9.stop();\n          }\n        }\n      }, _callee9);\n    }));\n\n    return function (_x10, _x11) {\n      return _ref9.apply(this, arguments);\n    };\n  }();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (profileReducer);\n\n//# sourceURL=webpack:///./Redux/profile/profile-reducer.js?");

/***/ }),

/***/ "./Redux/profile/profile-selectors.js":
/*!********************************************!*\
  !*** ./Redux/profile/profile-selectors.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProfile\": function() { return /* binding */ getProfile; },\n/* harmony export */   \"getUserStatus\": function() { return /* binding */ getUserStatus; },\n/* harmony export */   \"getPosts\": function() { return /* binding */ getPosts; },\n/* harmony export */   \"getProfilePhoto\": function() { return /* binding */ getProfilePhoto; },\n/* harmony export */   \"getContacts\": function() { return /* binding */ getContacts; },\n/* harmony export */   \"getFriends\": function() { return /* binding */ getFriends; },\n/* harmony export */   \"getProfileName\": function() { return /* binding */ getProfileName; },\n/* harmony export */   \"getGeneralData\": function() { return /* binding */ getGeneralData; },\n/* harmony export */   \"getFollowed\": function() { return /* binding */ getFollowed; }\n/* harmony export */ });\nvar getProfile = function getProfile(state) {\n  return state.profilePage;\n};\nvar getUserStatus = function getUserStatus(state) {\n  return state.profilePage.status;\n};\nvar getPosts = function getPosts(state) {\n  return state.profilePage.posts;\n};\nvar getProfilePhoto = function getProfilePhoto(state) {\n  return state.profilePage.photos.large;\n};\nvar getContacts = function getContacts(state) {\n  return state.profilePage.contacts;\n};\nvar getFriends = function getFriends(state) {\n  return state.profilePage.friends;\n};\nvar getProfileName = function getProfileName(state) {\n  return state.profilePage.fullName;\n};\nvar getGeneralData = function getGeneralData(_ref) {\n  var _ref$profilePage = _ref.profilePage,\n      fullName = _ref$profilePage.fullName,\n      aboutMe = _ref$profilePage.aboutMe,\n      lookingForAJob = _ref$profilePage.lookingForAJob,\n      lookingForAJobDescription = _ref$profilePage.lookingForAJobDescription;\n  return {\n    fullName: fullName,\n    aboutMe: aboutMe,\n    lookingForAJob: lookingForAJob,\n    lookingForAJobDescription: lookingForAJobDescription\n  };\n};\nvar getFollowed = function getFollowed(state) {\n  return state.profilePage.followed;\n};\n\n//# sourceURL=webpack:///./Redux/profile/profile-selectors.js?");

/***/ }),

/***/ "./Redux/store.js":
/*!************************!*\
  !*** ./Redux/store.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ \"../node_modules/redux/es/redux.js\");\n/* harmony import */ var _profile_profile_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile-reducer */ \"./Redux/profile/profile-reducer.js\");\n/* harmony import */ var _chats_chats_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats/chats-reducer */ \"./Redux/chats/chats-reducer.js\");\n/* harmony import */ var _users_users_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users-reducer */ \"./Redux/users/users-reducer.js\");\n/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-reducer */ \"./Redux/auth/auth-reducer.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ \"../node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-form */ \"../node_modules/redux-form/es/reducer.js\");\n/* harmony import */ var _app_app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app-reducer */ \"./Redux/app/app-reducer.js\");\n\n\n\n\n\n\n\n\nvar reducers = (0,redux__WEBPACK_IMPORTED_MODULE_6__.combineReducers)({\n  profilePage: _profile_profile_reducer__WEBPACK_IMPORTED_MODULE_0__.default,\n  chatsPage: _chats_chats_reducer__WEBPACK_IMPORTED_MODULE_1__.default,\n  usersPage: _users_users_reducer__WEBPACK_IMPORTED_MODULE_2__.default,\n  authPage: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__.default,\n  form: redux_form__WEBPACK_IMPORTED_MODULE_7__.default,\n  app: _app_app_reducer__WEBPACK_IMPORTED_MODULE_5__.default\n});\nvar composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_6__.compose;\nvar store = (0,redux__WEBPACK_IMPORTED_MODULE_6__.createStore)(reducers, composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_6__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_4__.default)));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./Redux/store.js?");

/***/ }),

/***/ "./Redux/users/users-reducer.js":
/*!**************************************!*\
  !*** ./Redux/users/users-reducer.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"followSuccess\": function() { return /* binding */ followSuccess; },\n/* harmony export */   \"unfollowSuccess\": function() { return /* binding */ unfollowSuccess; },\n/* harmony export */   \"setUsers\": function() { return /* binding */ setUsers; },\n/* harmony export */   \"setCurrentPage\": function() { return /* binding */ setCurrentPage; },\n/* harmony export */   \"setTotalUsersCount\": function() { return /* binding */ setTotalUsersCount; },\n/* harmony export */   \"toggleIsFetching\": function() { return /* binding */ toggleIsFetching; },\n/* harmony export */   \"toggleFollowingProgress\": function() { return /* binding */ toggleFollowingProgress; },\n/* harmony export */   \"getUsers\": function() { return /* binding */ getUsers; },\n/* harmony export */   \"follow\": function() { return /* binding */ follow; },\n/* harmony export */   \"unfollow\": function() { return /* binding */ unfollow; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/asyncToGenerator/_index.mjs\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/toConsumableArray/_index.mjs\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"../node_modules/@babel/runtime/helpers/defineProperty/_index.mjs\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Api_Api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Api/Api.js */ \"./Api/Api.js\");\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar FOLLOW = \"social-network/users/FOLLOW\",\n    UNFOLLOW = \"social-network/users/UNFOLLOW\",\n    SET_USERS = \"social-network/users/SET_USERS\",\n    SET_CURRENT_PAGE = \"social-network/users/SET_CURRENT_PAGE\",\n    SET_TOTAL_USERS_COUNT = \"social-network/users/SET_TOTAL_USERS_COUNT\",\n    TOGGLE_IS_FETCHING = \"social-network/users/TOGGLE_IS_FETCHING\",\n    TOGGLE_IS_FOLLOWING_PROGRESS = \"social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS\";\nvar initialState = {\n  users: [],\n  pageSize: 10,\n  totalUsersCount: 0,\n  currentPage: 1,\n  isFetching: true,\n  followingIsProgress: []\n};\n\nvar usersReducer = function usersReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case FOLLOW:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        users: state.users.map(function (user) {\n          if (user.id === action.userId) {\n            return _objectSpread(_objectSpread({}, user), {}, {\n              followed: true\n            });\n          }\n\n          return user;\n        })\n      });\n\n    case UNFOLLOW:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        users: state.users.map(function (user) {\n          if (user.id == action.userId) {\n            return _objectSpread(_objectSpread({}, user), {}, {\n              followed: false\n            });\n          }\n\n          return user;\n        })\n      });\n\n    case SET_USERS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        users: action.users\n      });\n\n    case SET_CURRENT_PAGE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        currentPage: action.currentPage\n      });\n\n    case SET_TOTAL_USERS_COUNT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        totalUsersCount: action.totalUsersCount\n      });\n\n    case TOGGLE_IS_FETCHING:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isFetching: action.isFetching\n      });\n\n    case TOGGLE_IS_FOLLOWING_PROGRESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        followingIsProgress: action.isFetching ? [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(state.followingIsProgress), [action.userId]) : state.followingIsProgress.filter(function (id) {\n          return id !== action.userId;\n        })\n      });\n\n    default:\n      return state;\n  }\n};\n/* Action Creators */\n\n\nvar followSuccess = function followSuccess(userId) {\n  return {\n    type: FOLLOW,\n    userId: userId\n  };\n};\nvar unfollowSuccess = function unfollowSuccess(userId) {\n  return {\n    type: UNFOLLOW,\n    userId: userId\n  };\n};\nvar setUsers = function setUsers(users) {\n  return {\n    type: SET_USERS,\n    users: users\n  };\n};\nvar setCurrentPage = function setCurrentPage(currentPage) {\n  return {\n    type: SET_CURRENT_PAGE,\n    currentPage: currentPage\n  };\n};\nvar setTotalUsersCount = function setTotalUsersCount(totalUsersCount) {\n  return {\n    type: SET_TOTAL_USERS_COUNT,\n    totalUsersCount: totalUsersCount\n  };\n};\nvar toggleIsFetching = function toggleIsFetching(isFetching) {\n  return {\n    type: TOGGLE_IS_FETCHING,\n    isFetching: isFetching\n  };\n};\nvar toggleFollowingProgress = function toggleFollowingProgress(isFetching, userId) {\n  return {\n    type: TOGGLE_IS_FOLLOWING_PROGRESS,\n    isFetching: isFetching,\n    userId: userId\n  };\n};\n/* Thunk */\n\nvar getUsers = function getUsers(currentPage, pageSize) {\n  return /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(dispatch) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch(toggleIsFetching(true));\n              _context.next = 3;\n              return _Api_Api_js__WEBPACK_IMPORTED_MODULE_4__.usersAPI.getUsers(currentPage, pageSize);\n\n            case 3:\n              response = _context.sent;\n              dispatch(toggleIsFetching(false));\n              dispatch(setUsers(response.data.items));\n              dispatch(setTotalUsersCount(response.data.totalCount));\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar follow = function follow(userId) {\n  return /*#__PURE__*/function () {\n    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(dispatch) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              dispatch(toggleFollowingProgress(true, userId));\n              _context2.next = 3;\n              return _Api_Api_js__WEBPACK_IMPORTED_MODULE_4__.profileAPI.postUser(userId);\n\n            case 3:\n              response = _context2.sent;\n\n              if (response.data.resultCode === 0) {\n                dispatch(followSuccess(userId));\n              }\n\n              dispatch(toggleFollowingProgress(false, userId));\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\nvar unfollow = function unfollow(userId) {\n  return /*#__PURE__*/function () {\n    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(dispatch) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              dispatch(toggleFollowingProgress(true, userId));\n              _context3.next = 3;\n              return _Api_Api_js__WEBPACK_IMPORTED_MODULE_4__.profileAPI.deleteUser(userId);\n\n            case 3:\n              response = _context3.sent;\n\n              if (response.data.resultCode === 0) {\n                dispatch(unfollowSuccess(userId));\n              }\n\n              dispatch(toggleFollowingProgress(false, userId));\n\n            case 6:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (usersReducer);\n\n//# sourceURL=webpack:///./Redux/users/users-reducer.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./index.scss\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./App.js\");\n/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Redux/store */ \"./Redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n  store: _Redux_store__WEBPACK_IMPORTED_MODULE_4__.default\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__.default, null))), document.getElementById(\"root\"));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./Components/Authorization/Authtorization.jsx":
/*!*****************************************************!*\
  !*** ./Components/Authorization/Authtorization.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Redux_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Redux/auth/auth-selectors */ \"./Redux/auth/auth-selectors.js\");\n\n\n\n\n\nvar authorization = function authorization(Component) {\n  return function (props) {\n    var isAuth = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n      return (0,_Redux_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.getIsAuth)(state);\n    });\n\n    if (isAuth) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {\n        to: \"app/profile\"\n      });\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props);\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authorization);\n\n//# sourceURL=webpack:///./Components/Authorization/Authtorization.jsx?");

/***/ }),

/***/ "./Components/Authorization/Login/Login.jsx":
/*!**************************************************!*\
  !*** ./Components/Authorization/Login/Login.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ \"../node_modules/antd/lib/modal/style/index.js\");\n/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! antd/lib/modal */ \"../node_modules/antd/lib/modal/index.js\");\n/* harmony import */ var antd_lib_image_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/image/style */ \"../node_modules/antd/lib/image/style/index.js\");\n/* harmony import */ var antd_lib_image_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_image_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! antd/lib/image */ \"../node_modules/antd/lib/image/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ \"../node_modules/antd/lib/button/style/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/button */ \"../node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/checkbox/style */ \"../node_modules/antd/lib/checkbox/style/index.js\");\n/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/checkbox */ \"../node_modules/antd/lib/checkbox/index.js\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form/style */ \"../node_modules/antd/lib/form/style/index.js\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/form */ \"../node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input/style */ \"../node_modules/antd/lib/input/style/index.js\");\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/input */ \"../node_modules/antd/lib/input/index.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"../node_modules/@babel/runtime/helpers/slicedToArray/_index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Login.module.scss */ \"./Components/Authorization/Login/Login.module.scss\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Redux_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Redux/auth/auth-reducer */ \"./Redux/auth/auth-reducer.js\");\n/* harmony import */ var _Redux_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Redux/auth/auth-selectors */ \"./Redux/auth/auth-selectors.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/LockOutlined.js\");\n/* harmony import */ var _Authtorization__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Authtorization */ \"./Components/Authorization/Authtorization.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _assets_images_logo192_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../assets/images/logo192.png */ \"./assets/images/logo192.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar LoginForm = function LoginForm() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__.default)(_useState, 2),\n      visibleMode = _useState2[0],\n      setVisibleMode = _useState2[1];\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();\n  var captchaURL = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {\n    return (0,_Redux_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_11__.getCaptcha)(state);\n  });\n\n  var onSubmit = function onSubmit(data) {\n    dispatch((0,_Redux_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_10__.login)(data));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {\n    if (captchaURL) {\n      setVisibleMode(true);\n    }\n  }, [captchaURL]);\n\n  var setCaptcha = function setCaptcha(data) {\n    dispatch((0,_Redux_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_10__.setCaptchaText)(data.captchaText));\n    setVisibleMode(false);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14__.default, {\n    name: \"login\",\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.form,\n    initialValues: {\n      rememberMe: true\n    },\n    onFinish: onSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14__.default.Item, {\n    name: \"email\",\n    rules: [{\n      required: true,\n      message: \"Пожалуйста, введите свое имя!\"\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_15__.default, {\n    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_16__.default, null),\n    placeholder: \"\\u0418\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\",\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.input\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14__.default.Item, {\n    name: \"password\",\n    rules: [{\n      required: true,\n      message: \"Пожалуйста, введите пароль!\"\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_15__.default.Password, {\n    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__.default, null),\n    type: \"password\",\n    placeholder: \"password\",\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.input\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.checkboxBlock\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14__.default.Item, {\n    name: \"rememberMe\",\n    valuePropName: \"checked\",\n    noStyle: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_18__.default, {\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.checkbox\n  }, \"\\u0417\\u0430\\u043F\\u043E\\u043C\\u043D\\u0438\\u0442\\u044C \\u043C\\u0435\\u043D\\u044F\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_19__.default, {\n    type: \"link\",\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.btnLink\n  }, \"\\u0417\\u0430\\u0431\\u044B\\u043B\\u0438 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C?\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.formBtns\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_19__.default, {\n    type: \"primary\",\n    htmlType: \"submit\",\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.formBtnsItem\n  }, \"\\u0412\\u043E\\u0439\\u0442\\u0438\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_19__.default, {\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.formBtnsItem\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {\n    to: \"/reg\"\n  }, \"\\u0417\\u0430\\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(ModalForm, {\n    visible: visibleMode,\n    captchaURL: captchaURL,\n    setCaptcha: setCaptcha\n  }));\n};\n\nvar ModalForm = function ModalForm(_ref) {\n  var visible = _ref.visible,\n      setCaptcha = _ref.setCaptcha,\n      captchaURL = _ref.captchaURL;\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(visible),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__.default)(_useState3, 2),\n      isVisible = _useState4[0],\n      setIsVisible = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {\n    setIsVisible(visible);\n  }, [visible]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_21__.default, {\n    title: \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0441 \\u043A\\u0430\\u0440\\u0442\\u0438\\u043D\\u043A\\u0438, \\u0434\\u043B\\u044F \\u043F\\u043E\\u0434\\u0442\\u0432\\u0435\\u0440\\u0436\\u0434\\u0435\\u043D\\u0438\\u044F, \\u0447\\u0442\\u043E \\u0432\\u044B \\u043D\\u0435 \\u0440\\u043E\\u0431\\u043E\\u0442! \",\n    visible: isVisible,\n    centered: true,\n    footer: null\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14__.default, {\n    name: \"captcha\",\n    onFinish: setCaptcha\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.captchaImg\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_image__WEBPACK_IMPORTED_MODULE_22__.default, {\n    src: captchaURL,\n    width: 300\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14__.default.Item, {\n    name: \"captchaText\",\n    rules: [{\n      required: true,\n      message: \"Подтвердите, что вы не робот:)\"\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_15__.default, {\n    placeholder: \"\\u0422\\u0435\\u043A\\u0441\\u0442 \\u0441 \\u043A\\u0430\\u0440\\u0442\\u0438\\u043D\\u043A\\u0438\",\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.input\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.modalBtns\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_19__.default, {\n    type: \"primary\",\n    htmlType: \"submit\",\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.formBtnsItem\n  }, \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\"))));\n};\n\nvar Login = function Login() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.inner\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.logo\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"img\", {\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.logoImg,\n    src: _assets_images_logo192_png__WEBPACK_IMPORTED_MODULE_13__\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.content\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"h3\", {\n    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.title\n  }, \"\\u0421\\u043E\\u0446\\u0438\\u0430\\u043B\\u044C\\u043D\\u0430\\u044F \\u0441\\u0435\\u0442\\u044C\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(LoginForm, null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_Authtorization__WEBPACK_IMPORTED_MODULE_12__.default)(Login));\n\n//# sourceURL=webpack:///./Components/Authorization/Login/Login.jsx?");

/***/ }),

/***/ "./Components/Authorization/Registration/Registration.jsx":
/*!****************************************************************!*\
  !*** ./Components/Authorization/Registration/Registration.jsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"../node_modules/@babel/runtime/helpers/extends/_index.mjs\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form/style */ \"../node_modules/antd/lib/form/style/index.js\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/form */ \"../node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style */ \"../node_modules/antd/lib/input/style/index.js\");\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/input */ \"../node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_result_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/result/style */ \"../node_modules/antd/lib/result/style/index.js\");\n/* harmony import */ var antd_lib_result_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_result_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/result */ \"../node_modules/antd/lib/result/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ \"../node_modules/antd/lib/button/style/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/button */ \"../node_modules/antd/lib/button/index.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"../node_modules/@babel/runtime/helpers/slicedToArray/_index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _Authtorization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Authtorization */ \"./Components/Authorization/Authtorization.jsx\");\n/* harmony import */ var _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Registration.module.scss */ \"./Components/Authorization/Registration/Registration.module.scss\");\n/* harmony import */ var _RegReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RegReducer */ \"./Components/Authorization/Registration/RegReducer.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/MailOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/LockOutlined.js\");\n/* harmony import */ var _Edit_EditForms_GeneralSettings_GeneralSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Edit/EditForms/GeneralSettings/GeneralSettings */ \"./Components/Edit/EditForms/GeneralSettings/GeneralSettings.jsx\");\n/* harmony import */ var _Edit_EditForms_ContactsSettings_ContactsSettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Edit/EditForms/ContactsSettings/ContactsSettings */ \"./Components/Edit/EditForms/ContactsSettings/ContactsSettings.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Redux_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Redux/auth/auth-reducer */ \"./Redux/auth/auth-reducer.js\");\n/* harmony import */ var _assets_images_logo192_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../assets/images/logo192.png */ \"./assets/images/logo192.png\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar initState = {\n  dataForm: {\n    loginForm: null,\n    photos: null,\n    generalForm: null,\n    contactsForm: null\n  },\n  subtitle: \"Данные учетной записи:\",\n  login: true,\n  general: false,\n  contacts: false,\n  photos: false\n};\nvar layout = {\n  labelCol: {\n    span: 8\n  },\n  wrapperCol: {\n    span: 16\n  }\n};\n\nvar Registration = function Registration() {\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_6__.useReducer)(_RegReducer__WEBPACK_IMPORTED_MODULE_9__.default, initState),\n      _useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.default)(_useReducer, 2),\n      stateReg = _useReducer2[0],\n      dispatchReg = _useReducer2[1];\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.default)(_useState, 2),\n      visibleSuccses = _useState2[0],\n      seVisibleSuccses = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    var _stateReg$dataForm = stateReg.dataForm,\n        loginForm = _stateReg$dataForm.loginForm,\n        generalForm = _stateReg$dataForm.generalForm,\n        contactsForm = _stateReg$dataForm.contactsForm;\n\n    if (loginForm !== null && generalForm !== null && contactsForm !== null) {\n      dispatch((0,_Redux_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_13__.registration)(stateReg.dataForm));\n    }\n  }, [stateReg]);\n\n  var saveLogin = function saveLogin(data) {\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setDataLoginForm)(data));\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setVisibleMode)(\"login\", false));\n    setGeneral();\n  };\n\n  var saveGeneral = function saveGeneral(data) {\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setDataGeneralForm)(data));\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setVisibleMode)(\"general\", false));\n    setContacts();\n  };\n\n  var saveContacts = function saveContacts(data) {\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setDataContactsForm)(data));\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setVisibleMode)(\"contacts\", false));\n    seVisibleSuccses(true);\n  };\n\n  var setLogin = function setLogin() {\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setSubtitle)(\"Данные учетной записи:\"));\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setVisibleMode)(\"login\", true));\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setVisibleMode)(\"general\", false));\n  };\n\n  var setGeneral = function setGeneral() {\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setSubtitle)(\"Основная информация:\"));\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setVisibleMode)(\"general\", true));\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setVisibleMode)(\"contacts\", false));\n  };\n\n  var setContacts = function setContacts() {\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setSubtitle)(\"Мои контакты:\"));\n    dispatchReg((0,_RegReducer__WEBPACK_IMPORTED_MODULE_9__.setVisibleMode)(\"contacts\", true));\n  };\n\n  var _stateReg$dataForm2 = stateReg.dataForm,\n      loginForm = _stateReg$dataForm2.loginForm,\n      generalForm = _stateReg$dataForm2.generalForm,\n      contactsForm = _stateReg$dataForm2.contactsForm;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.inner\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.header\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.title\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"img\", {\n    src: _assets_images_logo192_png__WEBPACK_IMPORTED_MODULE_14__,\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.titleLogo\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"h1\", {\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.titleText\n  }, \"\\u0421\\u043E\\u0437\\u0434\\u0430\\u0439\\u0442\\u0435 \\u0430\\u043A\\u043A\\u0430\\u0443\\u043D\\u0442 \\u0432 \\u043D\\u0430\\u0448\\u0435\\u0439 \\u0441\\u043E\\u0446\\u0438\\u0430\\u043B\\u044C\\u043D\\u043E\\u0439 \\u0441\\u0435\\u0442\\u0438\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"h4\", {\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.subtitle\n  }, stateReg.subtitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.forms\n  }, stateReg.login ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(CreateAuthData, {\n    onSubmit: saveLogin,\n    data: loginForm\n  }) : null, stateReg.general ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_Edit_EditForms_GeneralSettings_GeneralSettings__WEBPACK_IMPORTED_MODULE_10__.GeneralForm, {\n    onSubmit: saveGeneral,\n    data: generalForm,\n    textBtn: \"\\u0414\\u0430\\u043B\\u0435\\u0435\",\n    isAddBtn: true,\n    action: setLogin\n  }) : null, stateReg.contacts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_Edit_EditForms_ContactsSettings_ContactsSettings__WEBPACK_IMPORTED_MODULE_11__.ContactsForm, {\n    onSubmit: saveContacts,\n    contacts: contactsForm,\n    textBtn: \"\\u0414\\u0430\\u043B\\u0435\\u0435\",\n    isAddBtn: true,\n    action: setGeneral\n  }) : null, visibleSuccses ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(Succsess, null) : null));\n};\n\nvar Succsess = function Succsess() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_result__WEBPACK_IMPORTED_MODULE_15__.default, {\n    status: \"success\",\n    title: \"\\u0420\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0430\\u0446\\u0438\\u044F \\u043F\\u0440\\u043E\\u0448\\u043B\\u0430 \\u0443\\u0441\\u043F\\u0435\\u0448\\u043D\\u043E!\",\n    extra: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_16__.default, {\n      type: \"primary\",\n      key: \"console\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {\n      to: \"/login\"\n    }, \"\\u0410\\u0432\\u0442\\u043E\\u0440\\u0438\\u0437\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))]\n  });\n};\n\nvar CreateAuthData = function CreateAuthData(_ref) {\n  var onSubmit = _ref.onSubmit,\n      data = _ref.data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_18__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n    name: \"createLogin\"\n  }, layout, {\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.form,\n    initialValues: data,\n    onFinish: onSubmit\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_18__.default.Item, {\n    name: \"login\",\n    label: \"\\u041B\\u043E\\u0433\\u0438\\u043D:\",\n    rules: [{\n      required: true,\n      message: \"Пожалуйста, введите свое имя!\"\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_19__.default, {\n    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_20__.default, null),\n    placeholder: \"\\u041B\\u043E\\u0433\\u0438\\u043D \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\",\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.input\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_18__.default.Item, {\n    name: \"email\",\n    label: \"\\u041F\\u043E\\u0447\\u0442\\u0430:\",\n    rules: [{\n      required: true,\n      message: \"Пожалуйста, введите свое имя!\"\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_19__.default, {\n    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_21__.default, null),\n    placeholder: \"\\u041F\\u043E\\u0447\\u0442\\u0430: \",\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.input\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_18__.default.Item, {\n    name: \"password\",\n    label: \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C: \",\n    rules: [{\n      required: true,\n      message: \"Пожалуйста, введите пароль!\"\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_19__.default.Password, {\n    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_22__.default, null),\n    type: \"password\",\n    placeholder: \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C: \",\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.input\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_18__.default.Item, {\n    name: \"passwordClone\",\n    label: \"\\u041F\\u043E\\u0432\\u0442\\u043E\\u0440\\u0438\\u0442\\u0435 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C: \",\n    dependencies: [\"password\"],\n    rules: [{\n      required: true,\n      message: \"Пожалуйста, введите пароль!\"\n    }, function (_ref2) {\n      var getFieldValue = _ref2.getFieldValue;\n      return {\n        validator: function validator(_, value) {\n          if (!value || getFieldValue(\"password\") === value) {\n            return Promise.resolve();\n          }\n\n          return Promise.reject(new Error(\"Пароли не совпадают!\"));\n        }\n      };\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_19__.default.Password, {\n    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_22__.default, null),\n    type: \"password\",\n    placeholder: \"\\u041F\\u043E\\u0434\\u0442\\u0432\\u0435\\u0440\\u0436\\u0434\\u0435\\u043D\\u0438\\u0435 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044F: \",\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.input\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.formBtns\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_16__.default, {\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.formBtnsItem,\n    disabled: true\n  }, \"\\u041D\\u0430\\u0437\\u0430\\u0434\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_16__.default, {\n    type: \"primary\",\n    htmlType: \"submit\",\n    className: _Registration_module_scss__WEBPACK_IMPORTED_MODULE_8__.default.formBtnsItem\n  }, \"\\u0414\\u0430\\u043B\\u0435\\u0435\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_Authtorization__WEBPACK_IMPORTED_MODULE_7__.default)(Registration));\n\n//# sourceURL=webpack:///./Components/Authorization/Registration/Registration.jsx?");

/***/ }),

/***/ "./Components/Common/Hoc/withAuthRedirect.jsx":
/*!****************************************************!*\
  !*** ./Components/Common/Hoc/withAuthRedirect.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _Redux_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Redux/auth/auth-selectors */ \"./Redux/auth/auth-selectors.js\");\n\n\n\n\n\nvar withAuthRedirect = function withAuthRedirect(Component) {\n  var RedirectComponent = function RedirectComponent(props) {\n    var isAuth = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n      return (0,_Redux_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.getIsAuth)(state);\n    });\n    if (!isAuth) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {\n      to: \"/login\"\n    });\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props);\n  };\n\n  return RedirectComponent;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withAuthRedirect);\n\n//# sourceURL=webpack:///./Components/Common/Hoc/withAuthRedirect.jsx?");

/***/ }),

/***/ "./Components/Common/Hoc/withSuspense.jsx":
/*!************************************************!*\
  !*** ./Components/Common/Hoc/withSuspense.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _Preloader_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Preloader/Preloader */ \"./Components/Common/Preloader/Preloader.jsx\");\n\n\n\nvar withSuspense = function withSuspense(Component) {\n  return function (props) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_1__.default, null)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props));\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withSuspense);\n\n//# sourceURL=webpack:///./Components/Common/Hoc/withSuspense.jsx?");

/***/ }),

/***/ "./Components/Common/Preloader/Preloader.jsx":
/*!***************************************************!*\
  !*** ./Components/Common/Preloader/Preloader.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _assets_images_Preloader_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/images/Preloader.svg */ \"./assets/images/Preloader.svg\");\n/* harmony import */ var _Preloader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Preloader.module.scss */ \"./Components/Common/Preloader/Preloader.module.scss\");\n\n\n\n\nvar Preloader = function Preloader() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Preloader_module_scss__WEBPACK_IMPORTED_MODULE_2__.default.inner\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    className: _Preloader_module_scss__WEBPACK_IMPORTED_MODULE_2__.default.img,\n    src: _assets_images_Preloader_svg__WEBPACK_IMPORTED_MODULE_1__\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Preloader);\n\n//# sourceURL=webpack:///./Components/Common/Preloader/Preloader.jsx?");

/***/ }),

/***/ "./Components/Edit/AddSideBar/AddSideBar.jsx":
/*!***************************************************!*\
  !*** ./Components/Edit/AddSideBar/AddSideBar.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style */ \"../node_modules/antd/lib/menu/style/index.js\");\n/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ \"../node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout/style */ \"../node_modules/antd/lib/layout/style/index.js\");\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/layout */ \"../node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _AddSideBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddSideBar.module.scss */ \"./Components/Edit/AddSideBar/AddSideBar.module.scss\");\n\n\n\n\n\n //import style from \"../../SideBar/NavBar.module.css\";\n\n\nvar Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_4__.default.Sider;\n\nvar AddSideBar = function AddSideBar() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Sider, {\n    style: {\n      width: \"200px\",\n      height: \"100%\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__.default, {\n    mode: \"inline\",\n    defaultSelectedKeys: [\"1\"],\n    style: {\n      height: \"100%\",\n      borderRight: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__.default.Item, {\n    key: \"1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {\n    to: \"/app/edit/general\"\n  }, \"\\u041E\\u0441\\u043D\\u043E\\u0432\\u043D\\u043E\\u0435\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__.default.Item, {\n    key: \"2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {\n    to: \"/app/edit/contacts\"\n  }, \"\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u044B\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddSideBar);\n\n//# sourceURL=webpack:///./Components/Edit/AddSideBar/AddSideBar.jsx?");

/***/ }),

/***/ "./Components/Edit/Edit.jsx":
/*!**********************************!*\
  !*** ./Components/Edit/Edit.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ \"../node_modules/antd/lib/layout/style/index.js\");\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ \"../node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _EditForms_GeneralSettings_GeneralSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditForms/GeneralSettings/GeneralSettings */ \"./Components/Edit/EditForms/GeneralSettings/GeneralSettings.jsx\");\n/* harmony import */ var _EditForms_ContactsSettings_ContactsSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditForms/ContactsSettings/ContactsSettings */ \"./Components/Edit/EditForms/ContactsSettings/ContactsSettings.jsx\");\n/* harmony import */ var _AddSideBar_AddSideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddSideBar/AddSideBar */ \"./Components/Edit/AddSideBar/AddSideBar.jsx\");\n\n\n\n\n\n\n\nvar Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__.default.Content;\n\nvar Edit = function Edit(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {\n    exact: true,\n    path: \"/app/edit\",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Redirect, {\n        to: \"/app/edit/general\"\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {\n    path: \"/app/edit/general\",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_EditForms_GeneralSettings_GeneralSettings__WEBPACK_IMPORTED_MODULE_2__.default, {\n        title: \"\\u041E\\u0441\\u043D\\u043E\\u0432\\u043D\\u0430\\u044F \\u0438\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u044F: \"\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {\n    path: \"/app/edit/contacts\",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_EditForms_ContactsSettings_ContactsSettings__WEBPACK_IMPORTED_MODULE_3__.default, {\n        title: \"\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u044B: \"\n      });\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_AddSideBar_AddSideBar__WEBPACK_IMPORTED_MODULE_4__.default, null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\n\n//# sourceURL=webpack:///./Components/Edit/Edit.jsx?");

/***/ }),

/***/ "./Components/Edit/EditForms/ContactsSettings/ContactsSettings.jsx":
/*!*************************************************************************!*\
  !*** ./Components/Edit/EditForms/ContactsSettings/ContactsSettings.jsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContactsForm\": function() { return /* binding */ ContactsForm; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"../node_modules/@babel/runtime/helpers/extends/_index.mjs\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button/style */ \"../node_modules/antd/lib/button/style/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/button */ \"../node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ \"../node_modules/antd/lib/form/style/index.js\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/form */ \"../node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input/style */ \"../node_modules/antd/lib/input/style/index.js\");\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/input */ \"../node_modules/antd/lib/input/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Redux_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Redux/profile/profile-selectors */ \"./Redux/profile/profile-selectors.js\");\n/* harmony import */ var _EditForm_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../EditForm.module.scss */ \"./Components/Edit/EditForms/EditForm.module.scss\");\n/* harmony import */ var _EditForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../EditForm */ \"./Components/Edit/EditForms/EditForm.jsx\");\n/* harmony import */ var _Redux_profile_profile_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../Redux/profile/profile-reducer */ \"./Redux/profile/profile-reducer.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ContactsForm = function ContactsForm(_ref) {\n  var onSubmit = _ref.onSubmit,\n      contacts = _ref.contacts,\n      textBtn = _ref.textBtn,\n      isAddBtn = _ref.isAddBtn,\n      action = _ref.action;\n  var layout = {\n    labelCol: {\n      span: 8\n    },\n    wrapperCol: {\n      span: 16\n    }\n  };\n  var contactsKey = {\n    youtube: null,\n    facebook: null,\n    vk: null,\n    github: null,\n    twitter: null\n  };\n  var arrayContacts = Object.keys(contactsKey).map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10__.default.Item, {\n      key: item,\n      name: item,\n      label: item,\n      rules: [{\n        required: true,\n        message: \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u0443\\u0439\\u0441\\u0442\\u0430, \\u0432\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0430\\u0434\\u0440\\u0435\\u0441 \".concat(item, \"!\")\n      }]\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_11__.default, null));\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n    className: _EditForm_module_scss__WEBPACK_IMPORTED_MODULE_7__.default.form,\n    onFinish: onSubmit,\n    name: \"contacts\",\n    initialValues: contacts\n  }, layout), arrayContacts, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"div\", {\n    className: _EditForm_module_scss__WEBPACK_IMPORTED_MODULE_7__.default.btnInner\n  }, isAddBtn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_12__.default, {\n    className: _EditForm_module_scss__WEBPACK_IMPORTED_MODULE_7__.default.formBtn,\n    onClick: action\n  }, \"Назад\") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_12__.default, {\n    className: _EditForm_module_scss__WEBPACK_IMPORTED_MODULE_7__.default.formBtn,\n    htmlType: \"submit\",\n    type: \"primary\"\n  }, textBtn || \"Сохранить изменения\")));\n};\nvar ContactsSettings = (0,_EditForm__WEBPACK_IMPORTED_MODULE_8__.default)(function (_ref2) {\n  var title = _ref2.title;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n  var contacts = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {\n    return (0,_Redux_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_6__.getContacts)(state);\n  });\n\n  var onSubmit = function onSubmit(data) {\n    dispatch((0,_Redux_profile_profile_reducer__WEBPACK_IMPORTED_MODULE_9__.saveProfileInfo)(data));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(ContactsForm, {\n    title: title,\n    onSubmit: onSubmit,\n    contacts: contacts\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactsSettings);\n\n//# sourceURL=webpack:///./Components/Edit/EditForms/ContactsSettings/ContactsSettings.jsx?");

/***/ }),

/***/ "./Components/Edit/EditForms/EditForm.jsx":
/*!************************************************!*\
  !*** ./Components/Edit/EditForms/EditForm.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"../node_modules/@babel/runtime/helpers/objectWithoutProperties/_index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _EditForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditForm.module.scss */ \"./Components/Edit/EditForms/EditForm.module.scss\");\n\n\n\n\nvar editForm = function editForm(Component) {\n  return function (_ref) {\n    var title = _ref.title,\n        rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, [\"title\"]);\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: _EditForm_module_scss__WEBPACK_IMPORTED_MODULE_2__.default.inner\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h3\", {\n      className: _EditForm_module_scss__WEBPACK_IMPORTED_MODULE_2__.default.title\n    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, rest));\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (editForm);\n\n//# sourceURL=webpack:///./Components/Edit/EditForms/EditForm.jsx?");

/***/ }),

/***/ "./Components/Edit/EditForms/GeneralSettings/GeneralSettings.jsx":
/*!***********************************************************************!*\
  !*** ./Components/Edit/EditForms/GeneralSettings/GeneralSettings.jsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GeneralForm\": function() { return /* binding */ GeneralForm; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"../node_modules/@babel/runtime/helpers/extends/_index.mjs\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button/style */ \"../node_modules/antd/lib/button/style/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/button */ \"../node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select/style */ \"../node_modules/antd/lib/select/style/index.js\");\n/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/select */ \"../node_modules/antd/lib/select/index.js\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form/style */ \"../node_modules/antd/lib/form/style/index.js\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/form */ \"../node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input/style */ \"../node_modules/antd/lib/input/style/index.js\");\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/input */ \"../node_modules/antd/lib/input/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Redux_profile_profile_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Redux/profile/profile-reducer */ \"./Redux/profile/profile-reducer.js\");\n/* harmony import */ var _Redux_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Redux/profile/profile-selectors */ \"./Redux/profile/profile-selectors.js\");\n/* harmony import */ var _EditForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../EditForm */ \"./Components/Edit/EditForms/EditForm.jsx\");\n/* harmony import */ var _EditForm_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../EditForm.module.scss */ \"./Components/Edit/EditForms/EditForm.module.scss\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar GeneralForm = function GeneralForm(_ref) {\n  var onSubmit = _ref.onSubmit,\n      data = _ref.data,\n      textBtn = _ref.textBtn,\n      isAddBtn = _ref.isAddBtn,\n      action = _ref.action;\n  var layout = {\n    labelCol: {\n      span: 8\n    },\n    wrapperCol: {\n      span: 16\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n    className: _EditForm_module_scss__WEBPACK_IMPORTED_MODULE_10__.default.form,\n    onFinish: onSubmit,\n    name: \"general\",\n    initialValues: data\n  }, layout), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_11__.default.Item, {\n    name: \"fullName\",\n    label: \"\\u0418\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F: \",\n    rules: [{\n      required: true,\n      message: \"Пожалуйста, введите новое имя!\"\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_12__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_11__.default.Item, {\n    name: \"aboutMe\",\n    label: \"\\u0418\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u044F \\u043E \\u0441\\u0435\\u0431\\u0435: \",\n    rules: [{\n      required: true,\n      message: \"Пожалуйста, введите информацию о себе!\"\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_12__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_11__.default.Item, {\n    name: \"lookingForAJob\",\n    label: \"\\u0421\\u0442\\u0430\\u0442\\u0443\\u0441: \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_13__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_13__.default.Option, {\n    value: true\n  }, \"\\u0418\\u0449\\u0443 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0443\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_13__.default.Option, {\n    value: false\n  }, \"\\u041D\\u0435 \\u0438\\u0449\\u0443 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0443\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_11__.default.Item, {\n    name: \"lookingForAJobDescription\",\n    label: \"\\u0422\\u0435\\u0445\\u043D\\u043E\\u043B\\u043E\\u0433\\u0438\\u0447\\u0435\\u0441\\u043A\\u0438\\u0439 \\u0441\\u0442\\u0435\\u043A: \",\n    rules: [{\n      required: true,\n      message: \"Пожалуйста, введите информацию о себе!\"\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_12__.default.TextArea, {\n    autoSize: {\n      minRows: 1,\n      maxRows: 3\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"div\", {\n    className: _EditForm_module_scss__WEBPACK_IMPORTED_MODULE_10__.default.btnInner\n  }, isAddBtn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_14__.default, {\n    className: _EditForm_module_scss__WEBPACK_IMPORTED_MODULE_10__.default.formBtn,\n    onClick: action\n  }, \"Назад\") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_14__.default, {\n    className: _EditForm_module_scss__WEBPACK_IMPORTED_MODULE_10__.default.formBtn,\n    htmlType: \"submit\",\n    type: \"primary\"\n  }, textBtn || \"Сохранить изменения\")));\n};\nvar GeneralSettings = (0,_EditForm__WEBPACK_IMPORTED_MODULE_9__.default)(function (_ref2) {\n  var title = _ref2.title;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n\n  var onSubmit = function onSubmit(data) {\n    dispatch((0,_Redux_profile_profile_reducer__WEBPACK_IMPORTED_MODULE_7__.saveProfileInfo)(data));\n  };\n\n  var general = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {\n    return (0,_Redux_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_8__.getGeneralData)(state);\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(GeneralForm, {\n    title: title,\n    onSubmit: onSubmit,\n    data: general\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (GeneralSettings);\n\n//# sourceURL=webpack:///./Components/Edit/EditForms/GeneralSettings/GeneralSettings.jsx?");

/***/ }),

/***/ "./Components/Header/Header.jsx":
/*!**************************************!*\
  !*** ./Components/Header/Header.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style */ \"../node_modules/antd/lib/menu/style/index.js\");\n/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu */ \"../node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.scss */ \"./Components/Header/Header.scss\");\n/* harmony import */ var _assets_images_logo192_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/logo192.png */ \"./assets/images/logo192.png\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Redux_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Redux/auth/auth-reducer */ \"./Redux/auth/auth-reducer.js\");\n/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/layout/layout */ \"../node_modules/antd/lib/layout/layout.js\");\n/* harmony import */ var _Redux_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Redux/auth/auth-selectors */ \"./Redux/auth/auth-selectors.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/MenuUnfoldOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/SettingOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/ToolOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/ExportOutlined.js\");\n\n\n\n\n\n\n\n\n\n\nvar SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__.default.SubMenu;\n\nvar MyHeader = function MyHeader() {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var logOut = function logOut() {\n    dispatch((0,_Redux_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_5__.logout)());\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_8__.Header, {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"header_inner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    className: \"header_logo\",\n    src: _assets_images_logo192_png__WEBPACK_IMPORTED_MODULE_3__\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DropDownMenu, {\n    event: logOut\n  })));\n};\n\nvar DropDownMenu = function DropDownMenu(_ref) {\n  var event = _ref.event;\n  var login = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return (0,_Redux_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_6__.getLogin)(state);\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__.default, {\n    mode: \"horizontal\",\n    className: \"dropdown_menu\",\n    style: {\n      width: \"200px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(SubMenu, {\n    key: \"menu\",\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.default, {\n      className: \"dropdown_menu_icon\"\n    }),\n    title: login\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__.default.Item, {\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.default, null),\n    key: \"1\"\n  }, \"\\u041E\\u0431\\u0449\\u0438\\u0435 \\u043D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__.default.Item, {\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__.default, null),\n    key: \"2\"\n  }, \"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438 \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u044F\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__.default.Item, {\n    onClick: event,\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__.default, null),\n    key: \"3\"\n  }, \"\\u0412\\u044B\\u0439\\u0442\\u0438\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyHeader);\n\n//# sourceURL=webpack:///./Components/Header/Header.jsx?");

/***/ }),

/***/ "./Components/Music/Music.jsx":
/*!************************************!*\
  !*** ./Components/Music/Music.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\n\nvar Music = function Music() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Music);\n\n//# sourceURL=webpack:///./Components/Music/Music.jsx?");

/***/ }),

/***/ "./Components/News/News.jsx":
/*!**********************************!*\
  !*** ./Components/News/News.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\n\nvar News = function News() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\n//# sourceURL=webpack:///./Components/News/News.jsx?");

/***/ }),

/***/ "./Components/Page/Page.jsx":
/*!**********************************!*\
  !*** ./Components/Page/Page.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ \"../node_modules/antd/lib/layout/style/index.js\");\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/layout */ \"../node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _News_News__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../News/News */ \"./Components/News/News.jsx\");\n/* harmony import */ var _Music_Music__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Music/Music */ \"./Components/Music/Music.jsx\");\n/* harmony import */ var _Settings_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Settings/Settings */ \"./Components/Settings/Settings.jsx\");\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Header/Header */ \"./Components/Header/Header.jsx\");\n/* harmony import */ var _SideBar_SideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SideBar/SideBar */ \"./Components/SideBar/SideBar.jsx\");\n/* harmony import */ var _Edit_Edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Edit/Edit */ \"./Components/Edit/Edit.jsx\");\n/* harmony import */ var _Common_Hoc_withAuthRedirect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Common/Hoc/withAuthRedirect */ \"./Components/Common/Hoc/withAuthRedirect.jsx\");\n/* harmony import */ var _Common_Hoc_withSuspense__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Common/Hoc/withSuspense */ \"./Components/Common/Hoc/withSuspense.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! socket.io-client */ \"../node_modules/socket.io-client/wrapper.mjs\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_11__.default.Content,\n    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_11__.default.Footer;\nvar Chats = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_antd_lib_avatar_index_js-node_modules_antd_lib_avatar_style_index_js-nod-17038e\"), __webpack_require__.e(\"Components_Chats_Chats_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Chats/Chats */ \"./Components/Chats/Chats.jsx\"));\n});\nvar Profile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_antd_lib_avatar_index_js-node_modules_antd_lib_avatar_style_index_js-nod-17038e\"), __webpack_require__.e(\"vendors-node_modules_ant-design_icons_es_icons_CameraOutlined_js-node_modules_ant-design_icon-73f524\"), __webpack_require__.e(\"Components_Common_FollowBtn_FollowBtn_jsx-Components_Common_Hoc_isOwner_jsx-Components_Common-5fc901\"), __webpack_require__.e(\"Components_Profile_Profile_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Profile/Profile */ \"./Components/Profile/Profile.jsx\"));\n});\nvar Users = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_antd_lib_avatar_index_js-node_modules_antd_lib_avatar_style_index_js-nod-17038e\"), __webpack_require__.e(\"Components_Common_FollowBtn_FollowBtn_jsx-Components_Common_Hoc_isOwner_jsx-Components_Common-5fc901\"), __webpack_require__.e(\"node_modules_ant-design_icons_es_icons_CameraOutlined_js-node_modules_ant-design_icons_es_ico-8fbc19\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Users/Users */ \"./Components/Users/Users.jsx\"));\n});\n\nvar Page = function Page() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_11__.default, {\n    style: {\n      minHeight: \"100vh\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_11__.default, {\n    style: {\n      padding: \"15px 7%\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_11__.default, {\n    style: {\n      padding: \"0 24px 24px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {\n    exact: true,\n    path: \"/app\",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Redirect, {\n        to: \"/app/profile\"\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {\n    path: \"/app/profile/:userId?\",\n    render: (0,_Common_Hoc_withSuspense__WEBPACK_IMPORTED_MODULE_9__.default)(Profile)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {\n    path: \"/app/dialogs\",\n    render: (0,_Common_Hoc_withSuspense__WEBPACK_IMPORTED_MODULE_9__.default)(Chats)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {\n    path: \"/app/news\",\n    component: _News_News__WEBPACK_IMPORTED_MODULE_2__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {\n    path: \"/app/music\",\n    component: _Music_Music__WEBPACK_IMPORTED_MODULE_3__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {\n    path: \"/app/users\",\n    render: (0,_Common_Hoc_withSuspense__WEBPACK_IMPORTED_MODULE_9__.default)(Users)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {\n    path: \"/app/settings\",\n    component: _Settings_Settings__WEBPACK_IMPORTED_MODULE_4__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {\n    path: \"/app/edit\",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Edit_Edit__WEBPACK_IMPORTED_MODULE_7__.default, null);\n    }\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Footer, {\n    style: {\n      textAlign: \"center\"\n    }\n  }, \"Social network. Created Alex\"));\n};\n/**/\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_Common_Hoc_withAuthRedirect__WEBPACK_IMPORTED_MODULE_8__.default)(Page));\n\n//# sourceURL=webpack:///./Components/Page/Page.jsx?");

/***/ }),

/***/ "./Components/Settings/Settings.jsx":
/*!******************************************!*\
  !*** ./Components/Settings/Settings.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\n\nvar Settings = function Settings() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\n//# sourceURL=webpack:///./Components/Settings/Settings.jsx?");

/***/ }),

/***/ "./Components/SideBar/SideBar.jsx":
/*!****************************************!*\
  !*** ./Components/SideBar/SideBar.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style */ \"../node_modules/antd/lib/menu/style/index.js\");\n/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu */ \"../node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"../node_modules/@babel/runtime/helpers/slicedToArray/_index.mjs\");\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style */ \"../node_modules/antd/lib/layout/style/index.js\");\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ \"../node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _Sidebar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar.scss */ \"./Components/SideBar/Sidebar.scss\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\n\n\n\n\nvar Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__.default.Sider;\n\nvar SideBar = function SideBar() {\n  var url = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)().pathname.slice(5);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(url),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),\n      urlKey = _useState2[0],\n      setUrlKey = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    setUrlKey(url);\n  }, [url]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Sider, {\n    style: {\n      width: \"200px\",\n      height: \"100%\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__.default, {\n    mode: \"inline\",\n    selectedKeys: [urlKey],\n    style: {\n      height: \"100%\",\n      borderRight: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__.default.Item, {\n    key: \"profile\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n    to: \"/app/profile\"\n  }, \"\\u041C\\u043E\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__.default.Item, {\n    key: \"dialogs\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n    to: \"/app/dialogs\"\n  }, \"\\u041C\\u043E\\u0438 \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u044F\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__.default.Item, {\n    key: \"news\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n    to: \"/app/news\"\n  }, \"\\u041D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0438\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__.default.Item, {\n    key: \"music\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n    to: \"/app/music\"\n  }, \"\\u041C\\u0443\\u0437\\u044B\\u043A\\u0430\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__.default.Item, {\n    key: \"users\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n    to: \"/app/users\"\n  }, \"\\u041F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u0438\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\n\n//# sourceURL=webpack:///./Components/SideBar/SideBar.jsx?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Authorization/Login/Login.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Authorization/Login/Login.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Login_inner__2GdUr {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  padding: 20px;\\n  background-color: #fff; }\\n\\n.Login_content__1Sc1N {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap; }\\n\\n.Login_title__S2vbe {\\n  width: 100%;\\n  text-align: center;\\n  font-size: 24px;\\n  font-weight: 500; }\\n\\n.Login_logo__2cnsA {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  width: 45%; }\\n\\n.Login_logoImg__t2tRa {\\n  width: 200px;\\n  height: 200px; }\\n\\n.Login_form__UbTr8 {\\n  width: 100%; }\\n\\n.Login_input__1cVsC {\\n  height: 40px;\\n  font-size: 16px;\\n  font-weight: 400; }\\n\\n.Login_formBtns__3Akvj {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n\\n.Login_formBtnsItem__2n9j1 {\\n  text-align: center;\\n  width: 45%;\\n  height: 40px;\\n  font-size: 16px;\\n  font-weight: 400; }\\n\\n.Login_checkboxBlock__3JGfV {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  margin-bottom: 10px; }\\n\\n.Login_checkbox__9fhfi,\\n.Login_btnLink__3wt7- {\\n  font-size: 16px;\\n  font-weight: 400;\\n  padding-right: 0; }\\n\\n.Login_modalBtns__2B5pz,\\n.Login_captchaImg__1eT2q {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./Components/Authorization/Login/Login.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,wBAAuB;MAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,aAAa;EACb,sBAAsB,EAAE;;AAE1B;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,wBAAuB;MAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,mBAAe;MAAf,eAAe,EAAE;;AAEnB;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,gBAAgB,EAAE;;AAEpB;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,wBAAuB;MAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,UAAU,EAAE;;AAEd;EACE,YAAY;EACZ,aAAa,EAAE;;AAEjB;EACE,WAAW,EAAE;;AAEf;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB,EAAE;;AAEpB;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,yBAA8B;MAA9B,sBAA8B;UAA9B,8BAA8B;EAC9B,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB,EAAE;;AAEvB;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,eAAe;EACf,gBAAgB,EAAE;;AAEpB;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,yBAA8B;MAA9B,sBAA8B;UAA9B,8BAA8B;EAC9B,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,mBAAmB,EAAE;;AAEvB;;EAEE,eAAe;EACf,gBAAgB;EAChB,gBAAgB,EAAE;;AAEpB;;EAEE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,wBAAuB;MAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB,EAAE\",\"sourcesContent\":[\".inner {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 20px;\\n  background-color: #fff; }\\n\\n.content {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap; }\\n\\n.title {\\n  width: 100%;\\n  text-align: center;\\n  font-size: 24px;\\n  font-weight: 500; }\\n\\n.logo {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 45%; }\\n\\n.logoImg {\\n  width: 200px;\\n  height: 200px; }\\n\\n.form {\\n  width: 100%; }\\n\\n.input {\\n  height: 40px;\\n  font-size: 16px;\\n  font-weight: 400; }\\n\\n.formBtns {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.formBtnsItem {\\n  text-align: center;\\n  width: 45%;\\n  height: 40px;\\n  font-size: 16px;\\n  font-weight: 400; }\\n\\n.checkboxBlock {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 10px; }\\n\\n.checkbox,\\n.btnLink {\\n  font-size: 16px;\\n  font-weight: 400;\\n  padding-right: 0; }\\n\\n.modalBtns,\\n.captchaImg {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"inner\": \"Login_inner__2GdUr\",\n\t\"content\": \"Login_content__1Sc1N\",\n\t\"title\": \"Login_title__S2vbe\",\n\t\"logo\": \"Login_logo__2cnsA\",\n\t\"logoImg\": \"Login_logoImg__t2tRa\",\n\t\"form\": \"Login_form__UbTr8\",\n\t\"input\": \"Login_input__1cVsC\",\n\t\"formBtns\": \"Login_formBtns__3Akvj\",\n\t\"formBtnsItem\": \"Login_formBtnsItem__2n9j1\",\n\t\"checkboxBlock\": \"Login_checkboxBlock__3JGfV\",\n\t\"checkbox\": \"Login_checkbox__9fhfi\",\n\t\"btnLink\": \"Login_btnLink__3wt7-\",\n\t\"modalBtns\": \"Login_modalBtns__2B5pz\",\n\t\"captchaImg\": \"Login_captchaImg__1eT2q\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./Components/Authorization/Login/Login.module.scss?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B1%5D!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B3%5D!../node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B4%5D");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Authorization/Registration/Registration.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Authorization/Registration/Registration.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Registration_inner__CBGzq {\\n  min-width: 600px;\\n  padding: 20px;\\n  background-color: #fff; }\\n\\n.Registration_header__2tDkU {\\n  width: 80%;\\n  margin: 0 auto 10px; }\\n\\n.Registration_titleLogo__4b6Aj {\\n  width: 50px;\\n  height: 50px; }\\n\\n.Registration_titleText__SG027 {\\n  margin: 0;\\n  font-size: 18px;\\n  font-weight: 500; }\\n\\n.Registration_subtitle__3_sNu {\\n  margin-top: 5px;\\n  font-size: 16px;\\n  font-weight: 500;\\n  text-align: center; }\\n\\n.Registration_title__STSia,\\n.Registration_formBtns__20N86 {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n\\n.Registration_formBtns__20N86 {\\n  width: 60%;\\n  margin: 0 auto; }\\n\\n.Registration_formBtnsItem__3Oj0O {\\n  height: 35px;\\n  width: 150px;\\n  font-size: 16px;\\n  font-weight: 400; }\\n\\n.Registration_forms__J_FuA {\\n  width: 100%; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./Components/Authorization/Registration/Registration.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB,EAAE;;AAE1B;EACE,UAAU;EACV,mBAAmB,EAAE;;AAEvB;EACE,WAAW;EACX,YAAY,EAAE;;AAEhB;EACE,SAAS;EACT,eAAe;EACf,gBAAgB,EAAE;;AAEpB;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,kBAAkB,EAAE;;AAEtB;;EAEE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,yBAA8B;MAA9B,sBAA8B;UAA9B,8BAA8B;EAC9B,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB,EAAE;;AAEvB;EACE,UAAU;EACV,cAAc,EAAE;;AAElB;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,gBAAgB,EAAE;;AAEpB;EACE,WAAW,EAAE\",\"sourcesContent\":[\".inner {\\n  min-width: 600px;\\n  padding: 20px;\\n  background-color: #fff; }\\n\\n.header {\\n  width: 80%;\\n  margin: 0 auto 10px; }\\n\\n.titleLogo {\\n  width: 50px;\\n  height: 50px; }\\n\\n.titleText {\\n  margin: 0;\\n  font-size: 18px;\\n  font-weight: 500; }\\n\\n.subtitle {\\n  margin-top: 5px;\\n  font-size: 16px;\\n  font-weight: 500;\\n  text-align: center; }\\n\\n.title,\\n.formBtns {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.formBtns {\\n  width: 60%;\\n  margin: 0 auto; }\\n\\n.formBtnsItem {\\n  height: 35px;\\n  width: 150px;\\n  font-size: 16px;\\n  font-weight: 400; }\\n\\n.forms {\\n  width: 100%; }\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"inner\": \"Registration_inner__CBGzq\",\n\t\"header\": \"Registration_header__2tDkU\",\n\t\"titleLogo\": \"Registration_titleLogo__4b6Aj\",\n\t\"titleText\": \"Registration_titleText__SG027\",\n\t\"subtitle\": \"Registration_subtitle__3_sNu\",\n\t\"title\": \"Registration_title__STSia\",\n\t\"formBtns\": \"Registration_formBtns__20N86\",\n\t\"formBtnsItem\": \"Registration_formBtnsItem__3Oj0O\",\n\t\"forms\": \"Registration_forms__J_FuA\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./Components/Authorization/Registration/Registration.module.scss?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B1%5D!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B3%5D!../node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B4%5D");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/Preloader/Preloader.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/Preloader/Preloader.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Preloader_inner__2bV06 {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n\\n.Preloader_img__2-VfF {\\n  width: 300px;\\n  height: 300px; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./Components/Common/Preloader/Preloader.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,wBAAuB;MAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB,EAAE;;AAEvB;EACE,YAAY;EACZ,aAAa,EAAE\",\"sourcesContent\":[\".inner {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n\\n.img {\\n  width: 300px;\\n  height: 300px; }\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"inner\": \"Preloader_inner__2bV06\",\n\t\"img\": \"Preloader_img__2-VfF\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./Components/Common/Preloader/Preloader.module.scss?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B1%5D!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B3%5D!../node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B4%5D");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Edit/AddSideBar/AddSideBar.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Edit/AddSideBar/AddSideBar.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".AddSideBar_item__2tppV a {\\n  padding-left: 10px;\\n  text-decoration: none;\\n  color: #fff;\\n  border-left: 3px solid transparent;\\n  -webkit-transition: color 0.2s linear, border 0.2s linear;\\n  transition: color 0.2s linear, border 0.2s linear; }\\n\\n.AddSideBar_item__2tppV a:hover {\\n  color: #00d7b2; }\\n\\n.AddSideBar_item__2tppV a.AddSideBar_active__1_e0B {\\n  border-left: 3px solid #00d7b2;\\n  color: #00d7b2; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./Components/Edit/AddSideBar/AddSideBar.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,kCAAkC;EAClC,yDAAiD;EAAjD,iDAAiD,EAAE;;AAErD;EACE,cAAc,EAAE;;AAElB;EACE,8BAA8B;EAC9B,cAAc,EAAE\",\"sourcesContent\":[\".item a {\\n  padding-left: 10px;\\n  text-decoration: none;\\n  color: #fff;\\n  border-left: 3px solid transparent;\\n  transition: color 0.2s linear, border 0.2s linear; }\\n\\n.item a:hover {\\n  color: #00d7b2; }\\n\\n.item a.active {\\n  border-left: 3px solid #00d7b2;\\n  color: #00d7b2; }\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"item\": \"AddSideBar_item__2tppV\",\n\t\"active\": \"AddSideBar_active__1_e0B\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./Components/Edit/AddSideBar/AddSideBar.module.scss?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B1%5D!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B3%5D!../node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B4%5D");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Edit/EditForms/EditForm.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Edit/EditForms/EditForm.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".EditForm_inner__34Oh9 {\\n  padding: 16px 20px;\\n  margin-right: 24px;\\n  background-color: #fff; }\\n\\n.EditForm_title__JZ4In {\\n  margin: 0;\\n  margin-bottom: 20px;\\n  font-size: 16px;\\n  font-weight: 400;\\n  text-align: center; }\\n\\n.EditForm_btnInner__3_u0Z {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  width: 60%;\\n  margin: 0 auto; }\\n\\n.EditForm_formBtn__1D-aS {\\n  width: 150px;\\n  height: 35px;\\n  font-size: 16px;\\n  font-weight: 400; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./Components/Edit/EditForms/EditForm.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB,EAAE;;AAE1B;EACE,SAAS;EACT,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,kBAAkB,EAAE;;AAEtB;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,yBAA8B;MAA9B,sBAA8B;UAA9B,8BAA8B;EAC9B,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,UAAU;EACV,cAAc,EAAE;;AAElB;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,gBAAgB,EAAE\",\"sourcesContent\":[\".inner {\\n  padding: 16px 20px;\\n  margin-right: 24px;\\n  background-color: #fff; }\\n\\n.title {\\n  margin: 0;\\n  margin-bottom: 20px;\\n  font-size: 16px;\\n  font-weight: 400;\\n  text-align: center; }\\n\\n.btnInner {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 60%;\\n  margin: 0 auto; }\\n\\n.formBtn {\\n  width: 150px;\\n  height: 35px;\\n  font-size: 16px;\\n  font-weight: 400; }\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"inner\": \"EditForm_inner__34Oh9\",\n\t\"title\": \"EditForm_title__JZ4In\",\n\t\"btnInner\": \"EditForm_btnInner__3_u0Z\",\n\t\"formBtn\": \"EditForm_formBtn__1D-aS\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./Components/Edit/EditForms/EditForm.module.scss?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B1%5D!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B3%5D!../node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B4%5D");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./App.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./App.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".conteiner {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  min-height: 100vh; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./App.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,wBAAuB;MAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,iBAAiB,EAAE\",\"sourcesContent\":[\".conteiner {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  min-height: 100vh; }\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./App.scss?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B1%5D!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B3%5D!../node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B4%5D");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Components/Header/Header.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Components/Header/Header.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".header {\\n  width: 100%;\\n  height: 70px;\\n  padding: 0 200px; }\\n\\n.header_inner {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n\\n.header_wrapper {\\n  position: relative;\\n  z-index: 1; }\\n\\n.header_logo {\\n  width: 45px;\\n  height: 45px;\\n  margin: 8px 0;\\n  border-radius: 50%; }\\n\\n.login_block {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -ms-flex-wrap: nowrap;\\n      flex-wrap: nowrap;\\n  background: transparent;\\n  width: 300px; }\\n  .login_block .anticon-down {\\n    margin-top: 3px;\\n    color: #fff; }\\n\\n.dropdown_menu {\\n  font-size: 20px;\\n  font-weight: 400;\\n  position: absolute;\\n  top: 0;\\n  right: 205px;\\n  z-index: 2;\\n  width: 200px;\\n  background: transparent;\\n  border: none;\\n  color: #fff; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./Components/Header/Header.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB,EAAE;;AAEpB;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,yBAA8B;MAA9B,sBAA8B;UAA9B,8BAA8B;EAC9B,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB,EAAE;;AAEvB;EACE,kBAAkB;EAClB,UAAU,EAAE;;AAEd;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,kBAAkB,EAAE;;AAEtB;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,qBAAiB;MAAjB,iBAAiB;EACjB,uBAAuB;EACvB,YAAY,EAAE;EACd;IACE,eAAe;IACf,WAAW,EAAE;;AAEjB;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,WAAW,EAAE\",\"sourcesContent\":[\".header {\\n  width: 100%;\\n  height: 70px;\\n  padding: 0 200px; }\\n\\n.header_inner {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.header_wrapper {\\n  position: relative;\\n  z-index: 1; }\\n\\n.header_logo {\\n  width: 45px;\\n  height: 45px;\\n  margin: 8px 0;\\n  border-radius: 50%; }\\n\\n.login_block {\\n  display: flex;\\n  align-items: center;\\n  flex-wrap: nowrap;\\n  background: transparent;\\n  width: 300px; }\\n  .login_block .anticon-down {\\n    margin-top: 3px;\\n    color: #fff; }\\n\\n.dropdown_menu {\\n  font-size: 20px;\\n  font-weight: 400;\\n  position: absolute;\\n  top: 0;\\n  right: 205px;\\n  z-index: 2;\\n  width: 200px;\\n  background: transparent;\\n  border: none;\\n  color: #fff; }\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./Components/Header/Header.scss?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B1%5D!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B3%5D!../node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B4%5D");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Components/SideBar/Sidebar.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Components/SideBar/Sidebar.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\",{\"version\":3,\"sources\":[],\"names\":[],\"mappings\":\"\",\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./Components/SideBar/Sidebar.scss?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B1%5D!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B3%5D!../node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B4%5D");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./index.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./index.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Roboto\\\", \\\"Oxygen\\\", \\\"Ubuntu\\\", \\\"Cantarell\\\", \\\"Fira Sans\\\", \\\"Droid Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; }\\n\\ncode {\\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \\\"Courier New\\\", monospace; }\\n\\n.ant-upload-list {\\n  display: none; }\\n\\n.ant-upload {\\n  width: 100%; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./index.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,SAAS;EACT,8JAA8J;EAC9J,mCAAmC;EACnC,kCAAkC,EAAE;;AAEtC;EACE,+EAA+E,EAAE;;AAEnF;EACE,aAAa,EAAE;;AAEjB;EACE,WAAW,EAAE\",\"sourcesContent\":[\"body {\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Roboto\\\", \\\"Oxygen\\\", \\\"Ubuntu\\\", \\\"Cantarell\\\", \\\"Fira Sans\\\", \\\"Droid Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; }\\n\\ncode {\\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \\\"Courier New\\\", monospace; }\\n\\n.ant-upload-list {\\n  display: none; }\\n\\n.ant-upload {\\n  width: 100%; }\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./index.scss?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B1%5D!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B3%5D!../node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B4%5D");

/***/ }),

/***/ "./Components/Authorization/Login/Login.module.scss":
/*!**********************************************************!*\
  !*** ./Components/Authorization/Login/Login.module.scss ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Login_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Login.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Authorization/Login/Login.module.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Login_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Login_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Login_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Login.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Authorization/Login/Login.module.scss\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Login_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Login.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Authorization/Login/Login.module.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Login_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Login_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Login_module_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Login_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./Components/Authorization/Login/Login.module.scss?");

/***/ }),

/***/ "./Components/Authorization/Registration/Registration.module.scss":
/*!************************************************************************!*\
  !*** ./Components/Authorization/Registration/Registration.module.scss ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Registration_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Registration.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Authorization/Registration/Registration.module.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Registration_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Registration_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Registration_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Registration.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Authorization/Registration/Registration.module.scss\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Registration_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Registration.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Authorization/Registration/Registration.module.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Registration_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Registration_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Registration_module_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Registration_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./Components/Authorization/Registration/Registration.module.scss?");

/***/ }),

/***/ "./Components/Common/Preloader/Preloader.module.scss":
/*!***********************************************************!*\
  !*** ./Components/Common/Preloader/Preloader.module.scss ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Preloader.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/Preloader/Preloader.module.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Preloader.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/Preloader/Preloader.module.scss\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Preloader.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/Preloader/Preloader.module.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./Components/Common/Preloader/Preloader.module.scss?");

/***/ }),

/***/ "./Components/Edit/AddSideBar/AddSideBar.module.scss":
/*!***********************************************************!*\
  !*** ./Components/Edit/AddSideBar/AddSideBar.module.scss ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AddSideBar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./AddSideBar.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Edit/AddSideBar/AddSideBar.module.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AddSideBar_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AddSideBar_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AddSideBar_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./AddSideBar.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Edit/AddSideBar/AddSideBar.module.scss\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AddSideBar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./AddSideBar.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Edit/AddSideBar/AddSideBar.module.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AddSideBar_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AddSideBar_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AddSideBar_module_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AddSideBar_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./Components/Edit/AddSideBar/AddSideBar.module.scss?");

/***/ }),

/***/ "./Components/Edit/EditForms/EditForm.module.scss":
/*!********************************************************!*\
  !*** ./Components/Edit/EditForms/EditForm.module.scss ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_EditForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./EditForm.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Edit/EditForms/EditForm.module.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_EditForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_EditForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_EditForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./EditForm.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Edit/EditForms/EditForm.module.scss\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_EditForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./EditForm.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Edit/EditForms/EditForm.module.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_EditForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_EditForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_EditForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_EditForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./Components/Edit/EditForms/EditForm.module.scss?");

/***/ }),

/***/ "./App.scss":
/*!******************!*\
  !*** ./App.scss ***!
  \******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./App.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./App.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_App_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_App_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_App_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./App.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./App.scss\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./App.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./App.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_App_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_App_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_App_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_App_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./App.scss?");

/***/ }),

/***/ "./Components/Header/Header.scss":
/*!***************************************!*\
  !*** ./Components/Header/Header.scss ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Header.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Components/Header/Header.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Header.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Components/Header/Header.scss\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Header.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Components/Header/Header.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./Components/Header/Header.scss?");

/***/ }),

/***/ "./Components/SideBar/Sidebar.scss":
/*!*****************************************!*\
  !*** ./Components/SideBar/Sidebar.scss ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Sidebar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Sidebar.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Components/SideBar/Sidebar.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Sidebar_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Sidebar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Sidebar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Sidebar.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Components/SideBar/Sidebar.scss\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Sidebar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Sidebar.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./Components/SideBar/Sidebar.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Sidebar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Sidebar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Sidebar_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_Sidebar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./Components/SideBar/Sidebar.scss?");

/***/ }),

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./index.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./index.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./index.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./index.scss\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./index.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[9].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].use[4]!./index.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_index_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_9_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_use_4_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./index.scss?");

/***/ }),

/***/ "./assets/images/Preloader.svg":
/*!*************************************!*\
  !*** ./assets/images/Preloader.svg ***!
  \*************************************/
/***/ (function(module) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9Im1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bzsiIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSIyMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4NCjxnIHRyYW5zZm9ybT0icm90YXRlKDAgNTAgNTApIj4NCiAgPHJlY3QgeD0iNDciIHk9IjI0IiByeD0iMyIgcnk9IjYiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjMDBkN2IyIj4NCiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjkxNjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPg0KICA8L3JlY3Q+DQo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzAgNTAgNTApIj4NCiAgPHJlY3QgeD0iNDciIHk9IjI0IiByeD0iMyIgcnk9IjYiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjMDBkN2IyIj4NCiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjgzMzMzMzMzMzMzMzMzMzRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPg0KICA8L3JlY3Q+DQo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNjAgNTAgNTApIj4NCiAgPHJlY3QgeD0iNDciIHk9IjI0IiByeD0iMyIgcnk9IjYiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjMDBkN2IyIj4NCiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjc1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4NCiAgPC9yZWN0Pg0KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSI+DQogIDxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjMiIHJ5PSI2IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzAwZDdiMiI+DQogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC42NjY2NjY2NjY2NjY2NjY2cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4NCiAgPC9yZWN0Pg0KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiPg0KICA8cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSIzIiByeT0iNiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIGZpbGw9IiMwMGQ3YjIiPg0KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuNTgzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+DQogIDwvcmVjdD4NCjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTAgNTApIj4NCiAgPHJlY3QgeD0iNDciIHk9IjI0IiByeD0iMyIgcnk9IjYiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjMDBkN2IyIj4NCiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPg0KICA8L3JlY3Q+DQo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDUwIDUwKSI+DQogIDxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjMiIHJ5PSI2IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzAwZDdiMiI+DQogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC40MTY2NjY2NjY2NjY2NjY3cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4NCiAgPC9yZWN0Pg0KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDIxMCA1MCA1MCkiPg0KICA8cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSIzIiByeT0iNiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIGZpbGw9IiMwMGQ3YjIiPg0KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuMzMzMzMzMzMzMzMzMzMzM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+DQogIDwvcmVjdD4NCjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyNDAgNTAgNTApIj4NCiAgPHJlY3QgeD0iNDciIHk9IjI0IiByeD0iMyIgcnk9IjYiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjMDBkN2IyIj4NCiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4NCiAgPC9yZWN0Pg0KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCA1MCA1MCkiPg0KICA8cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSIzIiByeT0iNiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIGZpbGw9IiMwMGQ3YjIiPg0KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuMTY2NjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPg0KICA8L3JlY3Q+DQo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzAwIDUwIDUwKSI+DQogIDxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjMiIHJ5PSI2IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzAwZDdiMiI+DQogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC4wODMzMzMzMzMzMzMzMzMzM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+DQogIDwvcmVjdD4NCjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMzAgNTAgNTApIj4NCiAgPHJlY3QgeD0iNDciIHk9IjI0IiByeD0iMyIgcnk9IjYiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjMDBkN2IyIj4NCiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPg0KICA8L3JlY3Q+DQo8L2c+DQo8IS0tIFtsZGlvXSBnZW5lcmF0ZWQgYnkgaHR0cHM6Ly9sb2FkaW5nLmlvLyAtLT48L3N2Zz4=\";\n\n//# sourceURL=webpack:///./assets/images/Preloader.svg?");

/***/ }),

/***/ "./assets/images/logo192.png":
/*!***********************************!*\
  !*** ./assets/images/logo192.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"64b6abdbeb9a1690d34c.png\";\n\n//# sourceURL=webpack:///./assets/images/logo192.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "main." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "a5d73d5b0d293581bf94"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = function(options) {
/******/ 			return { dispose: function() {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: function() {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = function(chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach(function(chunkId) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				const oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise(function(resolve, reject) {
/******/ 					var tag = createStylesheet(chunkId, fullhref, function() {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./index.js","vendors-node_modules_ant-design_icons_es_icons_ExportOutlined_js-node_modules_ant-design_icon-ec0fc6"]
/******/ 		];
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) {
/******/ 								installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							});
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;