(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "../ac/ac-stroop/src/ActivityRunner.js":
/*!*********************************************!*\
  !*** ../ac/ac-stroop/src/ActivityRunner.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"../node_modules/react/index.js\"));\n\nvar _frogUtils = __webpack_require__(/*! frog-utils */ \"../frog-utils/src/index.js\");\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"../node_modules/react-bootstrap/es/index.js\");\n\nvar _recompose = __webpack_require__(/*! recompose */ \"../node_modules/recompose/dist/Recompose.esm.js\");\n\nvar _mousetrap = _interopRequireDefault(__webpack_require__(/*! mousetrap */ \"../node_modules/mousetrap/mousetrap.js\"));\n\nvar _lodash = __webpack_require__(/*! lodash */ \"../node_modules/lodash/lodash.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar styles = {\n  button: {\n    width: '90px',\n    margin: 'auto',\n    position: 'absolute'\n  },\n  text: {\n    width: '100%',\n    fontSize: 'xx-large',\n    textAlign: 'center'\n  },\n  guidelines: {\n    width: '100%'\n  },\n  main: {\n    width: '100%',\n    height: '100%',\n    backgroundColor: '#ddd',\n    overflow: 'auto',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  container: {\n    width: '500px',\n    maxWidth: '100%',\n    flex: '1 1 auto',\n    margin: 'auto',\n    display: 'flex',\n    flexDirection: 'column',\n    justifyContent: 'center',\n    alignItems: 'center'\n  },\n  commands: {\n    width: '250px',\n    maxWidth: '100%',\n    height: '50px',\n    position: 'relative'\n  }\n}; // const randIndex = max => Math.round(max * Math.random() - 0.5);\n//\n// // returns an index different than `toAvoid`\n// const notIndex = (max, toAvoid) => (1 + toAvoid + randIndex(max - 1)) % max;\n// const generateExample = (objects, colors, colorsFill) => {\n//   const N = objects.length;\n//\n//   const isConsistent = Math.random() < 0.5;\n//   const isCorrect = Math.random() < 0.5;\n//\n//   const objectIndex = randIndex(N);\n//   const colorIndex = isCorrect ? objectIndex : notIndex(N, objectIndex);\n//   const colorFillIndex = isConsistent ? colorIndex : notIndex(N, colorIndex);\n//\n//   const objectName = objects[objectIndex];\n//   const colorName = colors[colorIndex];\n//   const colorFill = colorsFill[colorFillIndex];\n//\n//   const startTime = Date.now();\n//\n//   return {\n//     isConsistent,\n//     isCorrect,\n//     objectName,\n//     colorName,\n//     colorFill,\n//     startTime\n//   };\n// };\n\nvar hardcodedList = (0, _lodash.shuffle)([{\n  isConsistent: false,\n  isCorrect: true,\n  fr: {\n    objectName: 'citron',\n    colorName: 'jaune'\n  },\n  en: {\n    objectName: 'lemons',\n    colorName: 'yellow'\n  },\n  colorFill: 'red'\n}, {\n  isConsistent: false,\n  isCorrect: false,\n  fr: {\n    objectName: 'bois',\n    colorName: 'jaune'\n  },\n  en: {\n    objectName: 'wood',\n    colorName: 'yellow'\n  },\n  colorFill: 'red'\n}, {\n  isConsistent: true,\n  isCorrect: true,\n  fr: {\n    objectName: 'sang',\n    colorName: 'rouge'\n  },\n  en: {\n    objectName: 'blood',\n    colorName: 'red'\n  },\n  colorFill: 'red'\n}, {\n  isConsistent: true,\n  isCorrect: false,\n  fr: {\n    objectName: 'gazon',\n    colorName: 'rouge'\n  },\n  en: {\n    objectName: 'grass',\n    colorName: 'red'\n  },\n  colorFill: 'red'\n}, {\n  isConsistent: true,\n  isCorrect: true,\n  fr: {\n    objectName: 'citron',\n    colorName: 'jaune'\n  },\n  en: {\n    objectName: 'lemons',\n    colorName: 'yellow'\n  },\n  colorFill: 'yellow'\n}, {\n  isConsistent: true,\n  isCorrect: false,\n  fr: {\n    objectName: 'sang',\n    colorName: 'jaune'\n  },\n  en: {\n    objectName: 'blood',\n    colorName: 'yellow'\n  },\n  colorFill: 'yellow'\n}, {\n  isConsistent: false,\n  isCorrect: true,\n  fr: {\n    objectName: 'sang',\n    colorName: 'rouge'\n  },\n  en: {\n    objectName: 'blood',\n    colorName: 'red'\n  },\n  colorFill: 'yellow'\n}, {\n  isConsistent: false,\n  isCorrect: false,\n  fr: {\n    objectName: 'ciel',\n    colorName: 'rouge'\n  },\n  en: {\n    objectName: 'the sky',\n    colorName: 'red'\n  },\n  colorFill: 'yellow'\n}, {\n  isConsistent: true,\n  isCorrect: true,\n  fr: {\n    objectName: 'ciel',\n    colorName: 'bleu'\n  },\n  en: {\n    objectName: 'the sky',\n    colorName: 'blue'\n  },\n  colorFill: 'blue'\n}, {\n  isConsistent: true,\n  isCorrect: false,\n  fr: {\n    objectName: 'bois',\n    colorName: 'bleu'\n  },\n  en: {\n    objectName: 'wood',\n    colorName: 'blue'\n  },\n  colorFill: 'blue'\n}, {\n  isConsistent: false,\n  isCorrect: false,\n  fr: {\n    objectName: 'sang',\n    colorName: 'vert'\n  },\n  en: {\n    objectName: 'blood',\n    colorName: 'green'\n  },\n  colorFill: 'blue'\n}, {\n  isConsistent: false,\n  isCorrect: true,\n  fr: {\n    objectName: 'gazon',\n    colorName: 'vert'\n  },\n  en: {\n    objectName: 'grass',\n    colorName: 'green'\n  },\n  colorFill: 'blue'\n}, {\n  isConsistent: true,\n  isCorrect: false,\n  fr: {\n    objectName: 'ciel',\n    colorName: 'vert'\n  },\n  en: {\n    objectName: 'the sky',\n    colorName: 'green'\n  },\n  colorFill: 'green'\n}, {\n  isConsistent: true,\n  isCorrect: true,\n  fr: {\n    objectName: 'gazon',\n    colorName: 'vert'\n  },\n  en: {\n    objectName: 'grass',\n    colorName: 'green'\n  },\n  colorFill: 'green'\n}, {\n  isConsistent: false,\n  isCorrect: true,\n  fr: {\n    objectName: 'bois',\n    colorName: 'marron'\n  },\n  en: {\n    objectName: 'wood',\n    colorName: 'brown'\n  },\n  colorFill: 'green'\n}, {\n  isConsistent: false,\n  isCorrect: false,\n  fr: {\n    objectName: 'gazon',\n    colorName: 'marron'\n  },\n  en: {\n    objectName: 'grass',\n    colorName: 'brown'\n  },\n  colorFill: 'green'\n}, {\n  isConsistent: true,\n  isCorrect: false,\n  fr: {\n    objectName: 'citron',\n    colorName: 'marron'\n  },\n  en: {\n    objectName: 'lemons',\n    colorName: 'brown'\n  },\n  colorFill: 'brown'\n}, {\n  isConsistent: true,\n  isCorrect: true,\n  fr: {\n    objectName: 'bois',\n    colorName: 'marron'\n  },\n  en: {\n    objectName: 'wood',\n    colorName: 'brown'\n  },\n  colorFill: 'brown'\n}, {\n  isConsistent: false,\n  isCorrect: true,\n  fr: {\n    objectName: 'ciel',\n    colorName: 'bleu'\n  },\n  en: {\n    objectName: 'the sky',\n    colorName: 'blue'\n  },\n  colorFill: 'brown'\n}, {\n  isConsistent: false,\n  isCorrect: false,\n  fr: {\n    objectName: 'citron',\n    colorName: 'bleu'\n  },\n  en: {\n    objectName: 'lemons',\n    colorName: 'blue'\n  },\n  colorFill: 'brown'\n}]);\n\nvar generateExample = function generateExample(progress, lang) {\n  var ex = hardcodedList[progress % hardcodedList.length];\n  var isConsistent = ex.isConsistent,\n      isCorrect = ex.isCorrect,\n      colorFill = ex.colorFill;\n  var _ex$lang = ex[lang],\n      objectName = _ex$lang.objectName,\n      colorName = _ex$lang.colorName;\n  var startTime = Date.now();\n  return {\n    isConsistent: isConsistent,\n    isCorrect: isCorrect,\n    objectName: objectName,\n    colorName: colorName,\n    colorFill: colorFill,\n    startTime: startTime\n  };\n};\n\nvar texts = {\n  en: {\n    start: 'Start',\n    yes: 'YES',\n    no: 'NO',\n    colorSentence: function colorSentence(name) {\n      return \"The color of \".concat(name, \" is \");\n    },\n    wait: 'Waiting for next question',\n    end: 'Activity completed! Thank you'\n  },\n  fr: {\n    start: 'Commencer',\n    yes: 'OUI',\n    no: 'NON',\n    colorSentence: function colorSentence(name) {\n      return \"La couleur du \".concat(name, \" est \");\n    },\n    wait: 'Attendez la question suivante',\n    end: 'Activité terminée! Merci'\n  }\n};\nvar noAnswerTimeout;\nvar delayTimeout;\nvar Form = (0, _recompose.withState)('language', 'setLanguage', null)(function (_ref) {\n  var language = _ref.language,\n      setLanguage = _ref.setLanguage,\n      onSubmit = _ref.onSubmit,\n      name = _ref.name;\n  return React.createElement(React.Fragment, null, React.createElement(\"div\", {\n    style: styles.text\n  }, \"Welcome \", name, \"!\"), React.createElement(\"div\", {\n    style: styles.text\n  }, \"Choisis ton langage\"), React.createElement(\"div\", {\n    style: styles.text\n  }, \"Choose your language\"), React.createElement(\"div\", {\n    style: styles.commands\n  }, React.createElement(_reactBootstrap.Button, {\n    style: _objectSpread({}, styles.button, {\n      left: 0\n    }),\n    bsStyle: language === 'fr' ? 'success' : 'default',\n    onClick: function onClick() {\n      return setLanguage('fr');\n    }\n  }, \"Fran\\xE7ais\"), React.createElement(_reactBootstrap.Button, {\n    style: _objectSpread({}, styles.button, {\n      right: 0\n    }),\n    bsStyle: language === 'en' ? 'success' : 'default',\n    onClick: function onClick() {\n      return setLanguage('en');\n    }\n  }, \"English\")), language !== null && React.createElement(\"div\", {\n    style: _objectSpread({}, styles.commands, {\n      width: '100px'\n    })\n  }, React.createElement(_reactBootstrap.Button, {\n    style: _objectSpread({}, styles.button, {\n      width: '100%'\n    }),\n    onClick: function onClick() {\n      return onSubmit(language);\n    },\n    bsStyle: \"primary\"\n  }, \"Submit\")));\n});\n\nvar Guidelines = function Guidelines(_ref2) {\n  var start = _ref2.start,\n      guidelines = _ref2.guidelines,\n      lang = _ref2.lang;\n  return React.createElement(React.Fragment, null, React.createElement(\"div\", {\n    style: styles.guidelines\n  }, guidelines), React.createElement(\"div\", {\n    style: _objectSpread({}, styles.commands, {\n      width: '120px'\n    })\n  }, React.createElement(_reactBootstrap.Button, {\n    style: _objectSpread({}, styles.button, {\n      width: '100%'\n    }),\n    onClick: start\n  }, texts[lang].start)));\n};\n\nvar CountDownTimer = (0, _frogUtils.TimedComponent)(function (_ref3) {\n  var timeNow = _ref3.timeNow,\n      length = _ref3.length,\n      start = _ref3.start;\n  var timeLeft = Math.ceil((length - Math.ceil(timeNow - start)) / 1000);\n  return React.createElement(\"div\", {\n    style: styles.text\n  }, timeLeft + ' s');\n}, 100);\n\nvar Delay = function Delay(_ref4) {\n  var next = _ref4.next,\n      delay = _ref4.delay,\n      lang = _ref4.lang;\n  clearTimeout(delayTimeout);\n  delayTimeout = setTimeout(next, delay);\n  return React.createElement(React.Fragment, null, React.createElement(\"div\", {\n    style: styles.text\n  }, texts[lang].wait), React.createElement(CountDownTimer, {\n    start: Date.now(),\n    length: delay\n  }));\n};\n\nvar Question = function Question(props) {\n  var setQuestion = props.setQuestion,\n      question = props.question,\n      logger = props.logger,\n      data = props.data,\n      dataFn = props.dataFn,\n      activityData = props.activityData;\n  var objectName = question.objectName,\n      colorName = question.colorName,\n      colorFill = question.colorFill,\n      isCorrect = question.isCorrect,\n      startTime = question.startTime;\n  var lang = data.language;\n\n  var onClick = function onClick(answer) {\n    return function () {\n      clearTimeout(noAnswerTimeout); // Logs the question and answer provided\n\n      var answerTime = Date.now(); // Increases the progress and logs the new progress\n\n      dataFn.numIncr(1, 'progress'); // Increases the score and logs the new score\n\n      var isCorrectAnswer = isCorrect === answer ? 1 : 0;\n      var timeIncr = Date.now() - startTime;\n      var value = [data.score + isCorrectAnswer, -(data.time + timeIncr)];\n      logger([{\n        type: 'answer',\n        payload: _objectSpread({}, question, {\n          answer: answer,\n          answerTime: answerTime\n        })\n      }, {\n        type: 'progress',\n        value: (data.progress + 1) / activityData.config.maxQuestions\n      }, {\n        type: 'score',\n        value: value\n      }]);\n      dataFn.numIncr(isCorrectAnswer, 'score');\n      dataFn.numIncr(timeIncr, 'time'); // Goes on to next question\n\n      setQuestion('waiting');\n\n      _mousetrap.default.reset();\n    };\n  };\n\n  _mousetrap.default.bind('y', onClick(true));\n\n  _mousetrap.default.bind('o', onClick(true));\n\n  _mousetrap.default.bind('n', onClick(false));\n\n  clearTimeout(noAnswerTimeout);\n  noAnswerTimeout = setTimeout(onClick(undefined), activityData.config.maxTime);\n  return React.createElement(React.Fragment, null, React.createElement(\"div\", {\n    style: styles.text\n  }, texts[lang].colorSentence(objectName), React.createElement(\"span\", {\n    style: {\n      color: colorFill\n    }\n  }, colorName)), React.createElement(\"div\", {\n    style: styles.commands\n  }, React.createElement(_reactBootstrap.Button, {\n    style: _objectSpread({}, styles.button, {\n      left: 0\n    }),\n    onClick: onClick(true)\n  }, texts[lang].yes), React.createElement(_reactBootstrap.Button, {\n    style: _objectSpread({}, styles.button, {\n      right: 0\n    }),\n    onClick: onClick(false)\n  }, texts[lang].no)), React.createElement(CountDownTimer, {\n    start: Date.now(),\n    length: activityData.config.maxTime\n  }));\n};\n\nvar Main = (0, _recompose.withState)('question', 'setQuestion', null)(function (props) {\n  var activityData = props.activityData,\n      question = props.question,\n      setQuestion = props.setQuestion,\n      data = props.data,\n      dataFn = props.dataFn,\n      logger = props.logger;\n  var _activityData$config = activityData.config,\n      maxQuestions = _activityData$config.maxQuestions,\n      delay = _activityData$config.delay;\n  var lang = data.language;\n  var name = props.userInfo.name;\n\n  if (!lang) {\n    return React.createElement(Form, {\n      onSubmit: function onSubmit(l) {\n        return dataFn.objInsert(l, 'language');\n      },\n      name: name\n    });\n  } else if (question === null) {\n    var start = function start() {\n      setQuestion('waiting');\n      logger([{\n        type: 'progress',\n        value: data.progress / activityData.config.questions.length\n      }]);\n    };\n\n    var guidelines = activityData.config[lang].guidelines;\n    return React.createElement(Guidelines, {\n      start: start,\n      guidelines: guidelines,\n      lang: lang\n    });\n  } else if (question === 'waiting') {\n    var next = function next() {\n      setQuestion(generateExample(data.progress, lang));\n    };\n\n    return React.createElement(Delay, {\n      next: next,\n      delay: delay,\n      props: props,\n      lang: lang\n    });\n  } else if (data.progress < maxQuestions) {\n    return React.createElement(Question, props);\n  } else {\n    return React.createElement(\"div\", {\n      style: styles.text\n    }, texts[lang].end);\n  }\n}); // the actual component that the student sees\n\nvar Runner = function Runner(props) {\n  var data = props.data,\n      activityData = props.activityData;\n  var maxQuestions = activityData.config.maxQuestions;\n  var p = Math.round(data.progress / maxQuestions * 100);\n  return React.createElement(\"div\", {\n    style: styles.main\n  }, React.createElement(_reactBootstrap.ProgressBar, {\n    now: p,\n    label: \"\".concat(p, \"%\")\n  }), React.createElement(\"div\", {\n    style: styles.container\n  }, React.createElement(Main, props)));\n};\n\nvar ActivityRunner =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(ActivityRunner, _React$Component);\n\n  function ActivityRunner() {\n    _classCallCheck(this, ActivityRunner);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ActivityRunner).apply(this, arguments));\n  }\n\n  _createClass(ActivityRunner, [{\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      _mousetrap.default.reset();\n\n      clearTimeout(delayTimeout);\n      clearTimeout(noAnswerTimeout);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return this.props.data && React.createElement(Runner, this.props);\n    }\n  }]);\n\n  return ActivityRunner;\n}(React.Component);\n\nexports.default = ActivityRunner;\n\n//# sourceURL=webpack:///../ac/ac-stroop/src/ActivityRunner.js?");

/***/ })

}]);