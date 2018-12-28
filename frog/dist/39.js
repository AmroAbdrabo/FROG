(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "../ac/ac-spreadsheet/src/ActivityRunner.js":
/*!**************************************************!*\
  !*** ../ac/ac-spreadsheet/src/ActivityRunner.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"../node_modules/react/index.js\"));\n\nvar _frogUtils = __webpack_require__(/*! frog-utils */ \"../frog-utils/src/index.js\");\n\n__webpack_require__(/*! react-datasheet/lib/react-datasheet.css */ \"../node_modules/react-datasheet/lib/react-datasheet.css\");\n\nvar _mathjs = _interopRequireDefault(__webpack_require__(/*! mathjs */ \"../node_modules/mathjs/index.js\"));\n\nvar _lodash = __webpack_require__(/*! lodash */ \"../node_modules/lodash/lodash.js\");\n\nvar _reactDatasheet2 = _interopRequireDefault(__webpack_require__(/*! react-datasheet */ \"../node_modules/react-datasheet/lib/index.js\"));\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"../node_modules/@material-ui/core/index.es.js\");\n\nvar _Add = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Add */ \"../node_modules/@material-ui/icons/Add.js\"));\n\nvar _Remove = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Remove */ \"../node_modules/@material-ui/icons/Remove.js\"));\n\nvar _Dialog = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Dialog */ \"../node_modules/@material-ui/core/Dialog/index.js\"));\n\nvar _DialogActions = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/DialogActions */ \"../node_modules/@material-ui/core/DialogActions/index.js\"));\n\nvar _DialogContent = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/DialogContent */ \"../node_modules/@material-ui/core/DialogContent/index.js\"));\n\nvar _DialogTitle = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/DialogTitle */ \"../node_modules/@material-ui/core/DialogTitle/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar numberRegex = new RegExp(/^-?\\d*\\.?,?\\d+$/);\nvar IsEditing = false;\n\nvar getLetter = function getLetter(index) {\n  return index < 26 ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[index] : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(index / 26) - 1] + getLetter(index - Math.floor(index / 26) * 26);\n};\n\nvar createArrayAlphabet = function createArrayAlphabet(length) {\n  return length < 0 ? [] : _toConsumableArray(createArrayAlphabet(length - 1)).concat([getLetter(length - 1)]);\n};\n\nvar removeCol = function removeCol(props) {\n  return props.data.forEach(function (x, i) {\n    if (x.length > 2) props.dataFn.listDel(x[x.length - 1], [i, x.length - 1]);\n  });\n};\n\nvar removeRow = function removeRow(props) {\n  return props.dataFn.listDel(props.data[props.data.length - 1], props.data.length - 1);\n};\n\nvar AddButton = function AddButton(_ref) {\n  var onClick = _ref.onClick;\n  return React.createElement(_core.Button, {\n    onClick: onClick,\n    variant: \"fab\",\n    style: {\n      width: '35px',\n      height: '30px',\n      backgroundColor: 'white'\n    }\n  }, React.createElement(_Add.default, null));\n};\n\nvar RemoveButton = function RemoveButton(_ref2) {\n  var onClick = _ref2.onClick;\n  return React.createElement(_core.Button, {\n    onClick: onClick,\n    variant: \"fab\",\n    style: {\n      width: '35px',\n      height: '30px',\n      backgroundColor: 'white'\n    }\n  }, React.createElement(_Remove.default, null));\n};\n\nvar DataEditor =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(DataEditor, _React$Component);\n\n  function DataEditor() {\n    _classCallCheck(this, DataEditor);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(DataEditor).apply(this, arguments));\n  }\n\n  _createClass(DataEditor, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      IsEditing = true;\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      IsEditing = false;\n      this.props.parent.forceUpdate();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(_frogUtils.ReactiveText, {\n        type: \"textinput\",\n        focus: true,\n        className: \"data-editor\",\n        style: {\n          height: '100%',\n          width: '100%',\n          fontSize: '20px'\n        },\n        onKeyDown: this.props.onKeyDown,\n        dataFn: this.props.dataFn,\n        path: [this.props.row, this.props.col, 'value']\n      });\n    }\n  }]);\n\n  return DataEditor;\n}(React.Component);\n\nvar ActivityRunner =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(ActivityRunner, _React$Component2);\n\n  function ActivityRunner() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, ActivityRunner);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActivityRunner)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      modalOpen: false,\n      deleting: ''\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"shouldComponentUpdate\", function () {\n      return !IsEditing;\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"onCellsChanged\", function (changes) {\n      changes.forEach(function (_ref3) {\n        var cell = _ref3.cell,\n            value = _ref3.value,\n            col = _ref3.col,\n            row = _ref3.row;\n\n        _this.cellUpdate(cell, value, col, row);\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(ActivityRunner, [{\n    key: \"validateExp\",\n    value: function validateExp(trailKeys, expr) {\n      var _this2 = this;\n\n      var valid = true;\n      var matches = expr.match(/[A-Z][1-9]+/g) || [];\n      matches.forEach(function (match) {\n        if (trailKeys.indexOf(match) > -1) {\n          valid = false;\n        } else {\n          valid = _this2.validateExp(_toConsumableArray(trailKeys).concat([match]), _this2.props.data[match].expr);\n        }\n      });\n      return valid;\n    }\n  }, {\n    key: \"computeExpr\",\n    value: function computeExpr(key, expr, scope) {\n      var value = null;\n\n      if (!expr) {\n        return;\n      }\n\n      if (expr.charAt(0) !== '=') {\n        return {\n          className: '',\n          value: expr,\n          expr: expr\n        };\n      } else {\n        try {\n          value = _mathjs.default.eval(expr.substring(1), scope);\n        } catch (e) {\n          value = null;\n        }\n\n        if (value !== null) {\n          // && this.validateExp([key], expr))\n          return {\n            className: 'equation',\n            value: value,\n            expr: expr\n          };\n        } else {\n          return {\n            className: 'error',\n            value: 'error',\n            expr: ''\n          };\n        }\n      }\n    }\n  }, {\n    key: \"cellUpdate\",\n    value: function cellUpdate(changeCell, expr, col, row, data) {\n      var _this3 = this;\n\n      var scope = (0, _frogUtils.flattenOne)(data || this.props.data).reduce(function (acc, x) {\n        return _objectSpread({}, acc, _defineProperty({}, x.key, Number.isNaN(x.value) ? 0 : parseFloat(x.value)));\n      }, {});\n      var updatedCell = (0, _lodash.assign)({}, changeCell, this.computeExpr(changeCell.key, expr, scope));\n      this.props.dataFn.listReplace(changeCell, updatedCell, [row, col]);\n      var tempData = this.props.data;\n      tempData[row][col] = updatedCell;\n      (0, _lodash.each)((0, _frogUtils.flattenOne)(this.props.data), function (cell, key) {\n        if ((cell === null || cell === void 0 ? void 0 : cell.expr) && cell.expr.charAt(0) === '=' && cell.expr.indexOf(changeCell.key) > -1 && key !== changeCell.key) {\n          _this3.cellUpdate(cell, cell.expr, cell.col, cell.row, tempData);\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      var data = this.props.readOnly ? this.props.data.map(function (x) {\n        return x.map(function (y) {\n          return _objectSpread({}, y, {\n            readOnly: true\n          });\n        });\n      }) : this.props.data;\n      var LearningItem = this.props.dataFn.LearningItem;\n      var config = this.props.activityData.config;\n      return React.createElement(\"div\", {\n        style: {\n          width: '800px',\n          fontSize: '1.3em',\n          display: 'flex',\n          flexDirection: 'column'\n        }\n      }, React.createElement(\"div\", {\n        style: {\n          flexDirection: 'row',\n          display: 'flex'\n        }\n      }, React.createElement(_Dialog.default, {\n        open: this.state.modalOpen\n      }, React.createElement(_DialogTitle.default, null, \"Warning\"), React.createElement(_DialogContent.default, null, \"You are about to delete a non-empty cell\"), React.createElement(_DialogActions.default, null, React.createElement(_core.Button, {\n        onClick: function onClick() {\n          if (_this4.state.deleting === 'column') removeCol(_this4.props);else if (_this4.state.deleting === 'row') removeRow(_this4.props);\n\n          _this4.setState({\n            modalOpen: false,\n            deleting: ''\n          });\n        },\n        color: \"secondary\"\n      }, \"Continue\"), React.createElement(_core.Button, {\n        onClick: function onClick() {\n          _this4.setState({\n            modalOpen: false,\n            deleting: ''\n          });\n        }\n      }, \"Cancel\"))), React.createElement(_reactDatasheet2.default, {\n        data: data,\n        valueRenderer: function valueRenderer(cell) {\n          var _cell$value;\n\n          return ((_cell$value = cell.value) === null || _cell$value === void 0 ? void 0 : _cell$value.li) ? React.createElement(\"div\", {\n            style: {\n              margin: '10px'\n            }\n          }, React.createElement(LearningItem, {\n            type: \"thumbView\",\n            id: cell.value.li\n          })) : cell.value;\n        },\n        dataRenderer: function dataRenderer(cell) {\n          return cell.expr;\n        },\n        dataEditor: function dataEditor(props) {\n          return React.createElement(DataEditor, _extends({}, props, {\n            parent: _this4,\n            dataFn: _this4.props.dataFn\n          }));\n        },\n        cellRenderer: function cellRenderer(props) {\n          var _data$1$props$col;\n\n          return React.createElement(\"td\", {\n            className: props.className,\n            onMouseDown: props.onMouseDown,\n            onMouseOver: props.onMouseOver,\n            onDoubleClick: props.onDoubleClick,\n            style: {\n              width: props.col === 0 || ((_data$1$props$col = data[1][props.col]) === null || _data$1$props$col === void 0 ? void 0 : _data$1$props$col.value) === 'Items' ? '40px' : (config.rowWidth || '80') + 'px',\n              height: '30px',\n              textAlign: numberRegex.test(data[props.row][props.col].value) ? 'right' : 'left'\n            }\n          }, props.children);\n        },\n        onCellsChanged: this.onCellsChanged\n      }), !this.props.readOnly && React.createElement(\"div\", {\n        style: {\n          flexDirection: 'column',\n          display: 'flex',\n          marginLeft: '5px'\n        }\n      }, React.createElement(AddButton, {\n        onClick: function onClick() {\n          data.forEach(function (x, i) {\n            return i === 0 ? _this4.props.dataFn.listAppend({\n              readOnly: true,\n              value: getLetter(x.length - 1)\n            }, i) : _this4.props.dataFn.listAppend({\n              value: '',\n              key: getLetter(x.length - 1) + i,\n              col: x.length,\n              row: i\n            }, i);\n          });\n        }\n      }), React.createElement(RemoveButton, {\n        onClick: function onClick() {\n          var empty = data.reduce(function (acc, curr, index) {\n            return acc && (index === 0 || curr[curr.length - 1].value === '');\n          }, true);\n          if (!empty) _this4.setState({\n            modalOpen: true,\n            deleting: 'column'\n          });else removeCol(_this4.props);\n        }\n      }))), !this.props.readOnly && React.createElement(\"div\", {\n        style: {\n          flexDirection: 'row',\n          display: 'flex',\n          margin: '5px'\n        }\n      }, React.createElement(AddButton, {\n        onClick: function onClick() {\n          _this4.props.dataFn.listAppend(createArrayAlphabet(data[0].length - 1).map(function (col, j) {\n            if (j === 0) {\n              return {\n                readOnly: true,\n                value: data.length\n              };\n            }\n\n            return {\n              value: '',\n              key: col + data.length,\n              col: j,\n              row: data.length\n            };\n          }));\n        }\n      }), React.createElement(RemoveButton, {\n        onClick: function onClick() {\n          if (data.length > 2) {\n            var empty = data[data.length - 1].reduce(function (acc, curr, index) {\n              return acc && (index === 0 || curr.value === '');\n            }, true);\n            if (!empty) _this4.setState({\n              modalOpen: true,\n              deleting: 'row'\n            });else removeRow(_this4.props);\n          }\n        }\n      })));\n    }\n  }]);\n\n  return ActivityRunner;\n}(React.Component);\n\nvar _default = ActivityRunner;\nexports.default = _default;\n\n//# sourceURL=webpack:///../ac/ac-spreadsheet/src/ActivityRunner.js?");

/***/ })

}]);