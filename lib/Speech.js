"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _sweetalert = _interopRequireDefault(require("sweetalert"));
var _bowser = _interopRequireDefault(require("bowser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//Initialize speech recognition related variables.
var browser = _bowser["default"].getParser(window.navigator.userAgent);
var browserName = browser.getBrowserName();
var osName = browser.getOSName();
var browserIsSupported = browserName === 'Chrome' && osName !== 'iOS';
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
var recognition = new SpeechRecognition();
var Speech = function Speech(_ref) {
  var onSpeech = _ref.onSpeech;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showAlert = _useState2[0],
    setShowAlert = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    recognitionStarted = _useState4[0],
    setRecognitionStarted = _useState4[1];
  (0, _react.useEffect)(function () {
    // Check for supported browsers.
    if (!browserIsSupported) return;

    // Initialize speech recognition using the web speech api.
    // Use JSpeech Grammar Format.
    var grammar = '#JSGF V1.0;';
    var speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    // Handle speech recognition results.
    recognition.onresult = function (event) {
      var last = event.results.length - 1;
      var command = event.results[last][0].transcript.toLowerCase();
      console.log(command);
      onSpeech(command);
      setRecognitionStarted(false);
    };

    // Handle speech ending
    recognition.onspeechend = function () {
      setShowAlert(false);
      browserIsSupported && recognition.stop();
    };

    // Handle speech recognition starting
    recognition.onstart = function () {
      setRecognitionStarted(true);
    };
    return function () {};
  }, []);
  var handleVoiceRecognition = function handleVoiceRecognition() {
    setShowAlert(true);
    if (!recognitionStarted) setTimeout(function () {
      return recognition.start();
    }, 100);
  };
  if (!browserIsSupported) return null;
  return /*#__PURE__*/React.createElement("span", {
    className: "input-group-addon ms-2 me-3"
  }, /*#__PURE__*/React.createElement("i", {
    onClick: handleVoiceRecognition,
    className: "fas fa-2x fa-microphone"
  }));
};
var _default = Speech;
exports["default"] = _default;