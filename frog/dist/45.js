(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "../ac/ac-video/src/ActivityRunner.js":
/*!********************************************!*\
  !*** ../ac/ac-video/src/ActivityRunner.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"../node_modules/react/index.js\"));\n\nvar _reactPlayer = _interopRequireDefault(__webpack_require__(/*! react-player */ \"../node_modules/react-player/lib/ReactPlayer.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar ActivityRunner =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(ActivityRunner, _React$Component);\n\n  function ActivityRunner() {\n    _classCallCheck(this, ActivityRunner);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ActivityRunner).apply(this, arguments));\n  }\n\n  _createClass(ActivityRunner, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.ref.seekTo(this.props.data.play);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var _this$props = this.props,\n          activityData = _this$props.activityData,\n          logger = _this$props.logger,\n          dataFn = _this$props.dataFn;\n      var url = activityData.config.url;\n      return React.createElement(_reactPlayer.default, {\n        ref: function ref(_ref) {\n          return _this.ref = _ref;\n        },\n        url: url,\n        playing: activityData.config.playing,\n        controls: true,\n        loop: activityData.config.loop,\n        onStart: function onStart() {\n          return logger({\n            type: 'start',\n            itemId: url\n          });\n        },\n        onPause: function onPause() {\n          return logger({\n            type: 'pause',\n            itemId: url\n          });\n        },\n        onPlay: function onPlay() {\n          return logger({\n            type: 'play',\n            itemId: url\n          });\n        },\n        onEnded: function onEnded() {\n          return logger({\n            type: 'finishPlaying',\n            itemId: url\n          });\n        },\n        onProgress: function onProgress(x) {\n          logger({\n            type: 'videoProgress',\n            value: x.played,\n            itemId: url\n          });\n          dataFn.objInsert({\n            play: x.playedSeconds\n          });\n        },\n        width: \"100%\",\n        height: \"100%\"\n      });\n    }\n  }]);\n\n  return ActivityRunner;\n}(React.Component);\n\nvar _default = ActivityRunner;\nexports.default = _default;\n\n//# sourceURL=webpack:///../ac/ac-video/src/ActivityRunner.js?");

/***/ })

}]);