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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Dialogs.module.scss */ \"./Components/Dialogs/Dialogs.module.scss\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\nvar DialogItem = function DialogItem(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.avatar\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/18/10/avatar.jpg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n    className: _Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.link,\n    activeClassName: _Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.active,\n    to: \"/dialogs/\" + props.id\n  }, props.name));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DialogItem);\n\n//# sourceURL=webpack:///./Components/Dialogs/DialogItem/DialogItem.jsx?");

/***/ }),

/***/ "./Components/Dialogs/Dialogs.jsx":
/*!****************************************!*\
  !*** ./Components/Dialogs/Dialogs.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialogs.module.scss */ \"./Components/Dialogs/Dialogs.module.scss\");\n/* harmony import */ var _DialogItem_DialogItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DialogItem/DialogItem */ \"./Components/Dialogs/DialogItem/DialogItem.jsx\");\n/* harmony import */ var _Message_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message/Message */ \"./Components/Dialogs/Message/Message.jsx\");\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-form */ \"../node_modules/redux-form/es/Field.js\");\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-form */ \"../node_modules/redux-form/es/reduxForm.js\");\n/* harmony import */ var _Utils_Validators_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utils/Validators/validators */ \"./Utils/Validators/validators.js\");\n/* harmony import */ var _Common_FormsControl_FormsControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/FormsControl/FormsControl */ \"./Components/Common/FormsControl/FormsControl.jsx\");\n\n\n\n\n\n\n\nvar maxLength50 = (0,_Utils_Validators_validators__WEBPACK_IMPORTED_MODULE_4__.maxLengthCreator)(50);\n\nvar SendNewMessage = function SendNewMessage(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    onSubmit: props.handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_6__.default, {\n    component: _Common_FormsControl_FormsControl__WEBPACK_IMPORTED_MODULE_5__.Textarea,\n    name: \"newMessageText\",\n    placeholder: \"Enter new message\",\n    validate: [_Utils_Validators_validators__WEBPACK_IMPORTED_MODULE_4__.required, maxLength50]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", null, \"Send\")));\n};\n\nvar SendNewMessageRedux = (0,redux_form__WEBPACK_IMPORTED_MODULE_7__.default)({\n  form: \"addMessage\"\n})(SendNewMessage);\n\nvar Dialogs = function Dialogs(props) {\n  var dialogsElements = props.dialogs.map(function (dialog) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: dialog.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DialogItem_DialogItem__WEBPACK_IMPORTED_MODULE_2__.default, {\n      name: dialog.name,\n      id: dialog.id\n    }));\n  }),\n      messagesElements = props.messages.map(function (message) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: message.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Message_Message__WEBPACK_IMPORTED_MODULE_3__.default, {\n      message: message.message\n    }));\n  }),\n      addMessage = function addMessage(data) {\n    props.sendMessage(data.newMessageText);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.dialogs\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.inner\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.items\n  }, dialogsElements), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.messages\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, messagesElements), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SendNewMessageRedux, {\n    onSubmit: addMessage\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dialogs);\n\n//# sourceURL=webpack:///./Components/Dialogs/Dialogs.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Dialogs.module.scss */ \"./Components/Dialogs/Dialogs.module.scss\");\n\n\n\nvar Messege = function Messege(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.messages_item\n  }, props.message);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Messege);\n\n//# sourceURL=webpack:///./Components/Dialogs/Message/Message.jsx?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Dialogs/Dialogs.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Dialogs/Dialogs.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Dialogs_dialogs__1OhGi {\\n  display: grid;\\n  grid-template-columns: 8fr 2fr;\\n  grid-template-areas: \\\"c n\\\"; }\\n\\n.Dialogs_inner__eK73U {\\n  grid-area: c;\\n  display: grid;\\n  grid-template-columns: 3fr 5fr;\\n  margin: 15px;\\n  padding: 15px;\\n  border-radius: 15px;\\n  background: #111436; }\\n\\n.Dialogs_avatar__i81SH {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  margin-bottom: 10px; }\\n\\n.Dialogs_avatar__i81SH img {\\n  width: 50px;\\n  height: 50px;\\n  margin-right: 10px;\\n  border-radius: 50%; }\\n\\n.Dialogs_link__Kr-yV {\\n  text-decoration: none;\\n  color: #fff; }\\n\\n.Dialogs_avatar__i81SH a.Dialogs_active__1Tnwi {\\n  color: #00d7b2; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./Components/Dialogs/Dialogs.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,0BAA0B,EAAE;;AAE9B;EACE,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB,EAAE;;AAEvB;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,mBAAmB,EAAE;;AAEvB;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB,EAAE;;AAEtB;EACE,qBAAqB;EACrB,WAAW,EAAE;;AAEf;EACE,cAAc,EAAE\",\"sourcesContent\":[\".dialogs {\\n  display: grid;\\n  grid-template-columns: 8fr 2fr;\\n  grid-template-areas: \\\"c n\\\"; }\\n\\n.inner {\\n  grid-area: c;\\n  display: grid;\\n  grid-template-columns: 3fr 5fr;\\n  margin: 15px;\\n  padding: 15px;\\n  border-radius: 15px;\\n  background: #111436; }\\n\\n.avatar {\\n  display: flex;\\n  align-items: center;\\n  margin-bottom: 10px; }\\n\\n.avatar img {\\n  width: 50px;\\n  height: 50px;\\n  margin-right: 10px;\\n  border-radius: 50%; }\\n\\n.link {\\n  text-decoration: none;\\n  color: #fff; }\\n\\n.avatar a.active {\\n  color: #00d7b2; }\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"dialogs\": \"Dialogs_dialogs__1OhGi\",\n\t\"inner\": \"Dialogs_inner__eK73U\",\n\t\"avatar\": \"Dialogs_avatar__i81SH\",\n\t\"link\": \"Dialogs_link__Kr-yV\",\n\t\"active\": \"Dialogs_active__1Tnwi\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./Components/Dialogs/Dialogs.module.scss?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B1%5D!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B3%5D!../node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B4%5D");

/***/ }),

/***/ "./Components/Dialogs/Dialogs.module.scss":
/*!************************************************!*\
  !*** ./Components/Dialogs/Dialogs.module.scss ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Dialogs.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Dialogs/Dialogs.module.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Dialogs.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Dialogs/Dialogs.module.scss\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Dialogs.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Dialogs/Dialogs.module.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_Dialogs_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./Components/Dialogs/Dialogs.module.scss?");

/***/ })

}]);