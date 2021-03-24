/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Components_Dialogs_DialogsConteiner_jsx"],{

/***/ "./Redux/dialogs-selectors.js":
/*!************************************!*\
  !*** ./Redux/dialogs-selectors.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDialogs\": function() { return /* binding */ getDialogs; },\n/* harmony export */   \"getMessages\": function() { return /* binding */ getMessages; }\n/* harmony export */ });\nvar getDialogs = function getDialogs(state) {\n  return state.dialogsPage.dialogs;\n};\nvar getMessages = function getMessages(state) {\n  return state.dialogsPage.messages;\n};\n\n//# sourceURL=webpack:///./Redux/dialogs-selectors.js?");

/***/ }),

/***/ "./Utils/Validators/validators.js":
/*!****************************************!*\
  !*** ./Utils/Validators/validators.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"required\": function() { return /* binding */ required; },\n/* harmony export */   \"maxLengthCreator\": function() { return /* binding */ maxLengthCreator; }\n/* harmony export */ });\nvar required = function required(value) {\n  if (value) return undefined;\n  return \"Field is required\";\n};\nvar maxLengthCreator = function maxLengthCreator(maxLength) {\n  return function (value) {\n    if (value.length > maxLength) return \"Max length is \".concat(maxLength, \" symbols\");\n    return undefined;\n  };\n};\n\n//# sourceURL=webpack:///./Utils/Validators/validators.js?");

/***/ }),

/***/ "./Components/Dialogs/DialogItem/DialogItem.jsx":
/*!******************************************************!*\
  !*** ./Components/Dialogs/DialogItem/DialogItem.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Dialogs.module.css */ \"./Components/Dialogs/Dialogs.module.css\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\nvar DialogItem = function DialogItem(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__.default.avatar\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/18/10/avatar.jpg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__.default.link,\n    activeClassName: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__.default.active,\n    to: \"/dialogs/\" + props.id\n  }, props.name));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DialogItem);\n\n//# sourceURL=webpack:///./Components/Dialogs/DialogItem/DialogItem.jsx?");

/***/ }),

/***/ "./Components/Dialogs/Dialogs.jsx":
/*!****************************************!*\
  !*** ./Components/Dialogs/Dialogs.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialogs.module.css */ \"./Components/Dialogs/Dialogs.module.css\");\n/* harmony import */ var _DialogItem_DialogItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DialogItem/DialogItem */ \"./Components/Dialogs/DialogItem/DialogItem.jsx\");\n/* harmony import */ var _Message_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message/Message */ \"./Components/Dialogs/Message/Message.jsx\");\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-form */ \"../node_modules/redux-form/es/Field.js\");\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-form */ \"../node_modules/redux-form/es/reduxForm.js\");\n/* harmony import */ var _Utils_Validators_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utils/Validators/validators */ \"./Utils/Validators/validators.js\");\n/* harmony import */ var _Common_FormsControl_FormsControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/FormsControl/FormsControl */ \"./Components/Common/FormsControl/FormsControl.jsx\");\n\n\n\n\n\n\n\nvar maxLength50 = (0,_Utils_Validators_validators__WEBPACK_IMPORTED_MODULE_4__.maxLengthCreator)(50);\n\nvar SendNewMessage = function SendNewMessage(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    onSubmit: props.handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_6__.default, {\n    component: _Common_FormsControl_FormsControl__WEBPACK_IMPORTED_MODULE_5__.Textarea,\n    name: \"newMessageText\",\n    placeholder: \"Enter new message\",\n    validate: [_Utils_Validators_validators__WEBPACK_IMPORTED_MODULE_4__.required, maxLength50]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", null, \"Send\")));\n};\n\nvar SendNewMessageRedux = (0,redux_form__WEBPACK_IMPORTED_MODULE_7__.default)({\n  form: \"addMessage\"\n})(SendNewMessage);\n\nvar Dialogs = function Dialogs(props) {\n  var dialogsElements = props.dialogs.map(function (dialog) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: dialog.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DialogItem_DialogItem__WEBPACK_IMPORTED_MODULE_2__.default, {\n      name: dialog.name,\n      id: dialog.id\n    }));\n  }),\n      messagesElements = props.messages.map(function (message) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: message.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Message_Message__WEBPACK_IMPORTED_MODULE_3__.default, {\n      message: message.message\n    }));\n  }),\n      addMessage = function addMessage(data) {\n    props.sendMessage(data.newMessageText);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__.default.dialogs\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__.default.inner\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__.default.items\n  }, dialogsElements), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__.default.messages\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, messagesElements), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SendNewMessageRedux, {\n    onSubmit: addMessage\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dialogs);\n\n//# sourceURL=webpack:///./Components/Dialogs/Dialogs.jsx?");

/***/ }),

/***/ "./Components/Dialogs/DialogsConteiner.jsx":
/*!*************************************************!*\
  !*** ./Components/Dialogs/DialogsConteiner.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _Redux_dialogs_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Redux/dialogs-reducer */ \"./Redux/dialogs-reducer.js\");\n/* harmony import */ var _Dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialogs */ \"./Components/Dialogs/Dialogs.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Hoc_withAuthRedirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Hoc/withAuthRedirect */ \"./Components/Hoc/withAuthRedirect.jsx\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ \"../node_modules/redux/es/redux.js\");\n/* harmony import */ var _Redux_dialogs_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Redux/dialogs-selectors */ \"./Redux/dialogs-selectors.js\");\n\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    dialogs: (0,_Redux_dialogs_selectors__WEBPACK_IMPORTED_MODULE_5__.getDialogs)(state),\n    messages: (0,_Redux_dialogs_selectors__WEBPACK_IMPORTED_MODULE_5__.getMessages)(state)\n  };\n};\n\nvar mapDispatchToProps = {\n  sendMessage: _Redux_dialogs_reducer__WEBPACK_IMPORTED_MODULE_1__.sendMessage\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,redux__WEBPACK_IMPORTED_MODULE_6__.compose)((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps), _Hoc_withAuthRedirect__WEBPACK_IMPORTED_MODULE_4__.withAuthRedirect)(_Dialogs__WEBPACK_IMPORTED_MODULE_2__.default));\n\n//# sourceURL=webpack:///./Components/Dialogs/DialogsConteiner.jsx?");

/***/ }),

/***/ "./Components/Dialogs/Message/Message.jsx":
/*!************************************************!*\
  !*** ./Components/Dialogs/Message/Message.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Dialogs.module.css */ \"./Components/Dialogs/Dialogs.module.css\");\n\n\n\nvar Messege = function Messege(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__.default.messages_item\n  }, props.message);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Messege);\n\n//# sourceURL=webpack:///./Components/Dialogs/Message/Message.jsx?");

/***/ }),

/***/ "./Components/Dialogs/Dialogs.module.css":
/*!***********************************************!*\
  !*** ./Components/Dialogs/Dialogs.module.css ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"dialogs\":\"ydvaudMgx2fuQYuFZrHim\",\"inner\":\"pwCdHk7PfFryuy4kf8sCJ\",\"avatar\":\"_1tNJIW7TWAqgBD3p2m0Wyr\",\"link\":\"VFsIs4C7d3-4wpjjxyo4-\",\"active\":\"_3AiwNrGdkPUTe2etrUNfcm\"});\n    if(true) {\n      // 1616601008366\n      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":true});\n      module.hot.dispose(cssReload);\n      \n    }\n  \n\n//# sourceURL=webpack:///./Components/Dialogs/Dialogs.module.css?");

/***/ })

}]);