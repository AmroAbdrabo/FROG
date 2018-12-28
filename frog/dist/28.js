(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "../ac/ac-prox/src/ActivityRunner.js":
/*!*******************************************!*\
  !*** ../ac/ac-prox/src/ActivityRunner.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"../node_modules/react/index.js\"));\n\nvar _NoGroupPanel = _interopRequireDefault(__webpack_require__(/*! ./NoGroupPanel */ \"../ac/ac-prox/src/NoGroupPanel.js\"));\n\nvar _GroupPanel = _interopRequireDefault(__webpack_require__(/*! ./GroupPanel */ \"../ac/ac-prox/src/GroupPanel.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = function _default(props) {\n  var data = props.data,\n      id = props.userInfo.id;\n  var hasGroup = data.students[id];\n  return _react.default.createElement(\"div\", {\n    className: \"bootstrap\",\n    style: {\n      margin: '5%'\n    }\n  }, hasGroup ? _react.default.createElement(_GroupPanel.default, props) : _react.default.createElement(_NoGroupPanel.default, props));\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///../ac/ac-prox/src/ActivityRunner.js?");

/***/ }),

/***/ "../ac/ac-prox/src/GroupPanel.js":
/*!***************************************!*\
  !*** ../ac/ac-prox/src/GroupPanel.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"../node_modules/react/index.js\"));\n\nvar _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.es.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  margin: 5px;\\n  display: flex;\\n  flex-flow: row wrap;\\n  align-items: center;\\n  justify-content: center;\\n  flex: 0 0 auto;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar Main = _styledComponents.default.div(_templateObject());\n\nvar Panel = _styledComponents.default.div(_templateObject2());\n\nvar GroupPanel = function GroupPanel(_ref) {\n  var logger = _ref.logger,\n      data = _ref.data,\n      dataFn = _ref.dataFn,\n      id = _ref.userInfo.id;\n  var currentGroup = data.students[id];\n\n  var onClickCancel = function onClickCancel() {\n    logger({\n      type: 'group.leave',\n      itemId: currentGroup\n    });\n    dataFn.objInsert(null, ['students', id]);\n  };\n\n  var inGroupCount = Object.values(data.students).reduce(function (acc, x) {\n    return x === currentGroup ? acc + 1 : acc;\n  }, 0);\n  return _react.default.createElement(Main, null, _react.default.createElement(Panel, null, _react.default.createElement(\"span\", {\n    style: {\n      color: 'slategrey',\n      fontSize: 'x-large',\n      margin: '5px'\n    }\n  }, \"Group:\"), _react.default.createElement(\"span\", {\n    className: \"well\",\n    style: {\n      flex: '0 1 150px',\n      margin: '5px'\n    }\n  }, currentGroup), _react.default.createElement(\"button\", {\n    className: \"btn btn-danger\",\n    onClick: onClickCancel,\n    style: {\n      height: '60px',\n      margin: '5px'\n    }\n  }, \"Leave this group\")), _react.default.createElement(\"span\", {\n    style: {\n      fontSize: 'large'\n    }\n  }, ' ', \"Your group has \", inGroupCount, \" members\", ' '));\n};\n\nGroupPanel.displayName = 'GroupPanel';\nvar _default = GroupPanel;\nexports.default = _default;\n\n//# sourceURL=webpack:///../ac/ac-prox/src/GroupPanel.js?");

/***/ }),

/***/ "../ac/ac-prox/src/NoGroupPanel.js":
/*!*****************************************!*\
  !*** ../ac/ac-prox/src/NoGroupPanel.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"../node_modules/react/index.js\"));\n\nvar _lodash = __webpack_require__(/*! lodash */ \"../node_modules/lodash/lodash.js\");\n\nvar _recompose = __webpack_require__(/*! recompose */ \"../node_modules/recompose/dist/Recompose.esm.js\");\n\nvar _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.es.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  border: red solid 2px;\\n  width: 500px;\\n  margin: 5px;\\n  borderradius: 7px;\\n  textalign: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  width: 100%;\\n  max-width: 500px;\\n  margin: auto;\\n  flex-flow: column wrap;\\n  align-items: stretch;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar Main = _styledComponents.default.div(_templateObject());\n\nvar NoGroupPanelState = (0, _recompose.compose)((0, _recompose.withState)('textGrp', 'setText', ''), (0, _recompose.withState)('errLog', 'setErr', ''));\n\nvar NoGroupPanelPure = function NoGroupPanelPure(_ref) {\n  var data = _ref.data,\n      dataFn = _ref.dataFn,\n      id = _ref.userInfo.id,\n      setErr = _ref.setErr,\n      setText = _ref.setText,\n      textGrp = _ref.textGrp,\n      errLog = _ref.errLog,\n      logger = _ref.logger;\n\n  var onClickCreate = function onClickCreate() {\n    var groupCode = genCodeOfNChar(4);\n    dataFn.objInsert(id, ['groups', groupCode]);\n    dataFn.objInsert(groupCode, ['students', id]);\n    setErr('');\n    logger({\n      type: 'group.create',\n      itemId: groupCode\n    });\n  };\n\n  var onClickJoin = function onClickJoin() {\n    var groupToJoin = textGrp.toUpperCase();\n    var groupExists = data.groups[groupToJoin];\n\n    if (groupExists) {\n      dataFn.objInsert(groupToJoin, ['students', id]);\n      setErr('');\n      logger({\n        type: 'group.join',\n        itemId: groupToJoin\n      });\n    } else {\n      setErr('No group found with this name');\n      logger({\n        type: 'group.joinMissing',\n        itemId: groupToJoin\n      });\n    }\n  };\n\n  return _react.default.createElement(Main, null, _react.default.createElement(NewGroupButton, {\n    onClickCreate: onClickCreate\n  }), _react.default.createElement(JoinGroupComponent, {\n    onClickJoin: onClickJoin,\n    setText: setText\n  }), errLog && _react.default.createElement(ErrorLog, null, errLog));\n};\n\nvar NoGroupPanel = NoGroupPanelState(NoGroupPanelPure);\nvar groupchars = 'ABCDEFGHIJKLMNOPQRSTUWXYZ123456789'.split('');\n\nvar genCodeOfNChar = function genCodeOfNChar(n) {\n  return (0, _lodash.shuffle)(groupchars).slice(0, n).join('');\n};\n\nvar NewGroupButton = function NewGroupButton(_ref2) {\n  var onClickCreate = _ref2.onClickCreate;\n  return _react.default.createElement(\"button\", {\n    className: \"btn btn-primary\",\n    onClick: onClickCreate,\n    style: {\n      height: '50px',\n      margin: '5px'\n    }\n  }, _react.default.createElement(\"span\", {\n    className: \"glyphicon glyphicon-plus\",\n    style: {\n      width: '30px'\n    }\n  }), \"New group\");\n};\n\nvar JoinGroupComponent = function JoinGroupComponent(_ref3) {\n  var setText = _ref3.setText,\n      onClickJoin = _ref3.onClickJoin;\n  return _react.default.createElement(\"div\", {\n    className: \"input-group\",\n    style: {\n      margin: '5px'\n    }\n  }, _react.default.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    \"aria-describedby\": \"basic-addon3\",\n    onChange: function onChange(e) {\n      return setText(e.target.value);\n    }\n  }), _react.default.createElement(\"span\", {\n    className: \"input-group-btn\"\n  }, _react.default.createElement(\"button\", {\n    className: \"btn btn-default\",\n    type: \"button\",\n    onClick: onClickJoin\n  }, \"Join existing group\")));\n};\n\nvar ErrorLog = _styledComponents.default.div(_templateObject2());\n\nNoGroupPanel.displayName = 'NoGroupPanel';\nvar _default = NoGroupPanel;\nexports.default = _default;\n\n//# sourceURL=webpack:///../ac/ac-prox/src/NoGroupPanel.js?");

/***/ })

}]);