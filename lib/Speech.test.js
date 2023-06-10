"use strict";

var _react = require("@testing-library/react");
var _startsysReactSpeechRecognition = _interopRequireDefault(require("startsys-react-speech-recognition"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Mock the SpeechRecognition interface
global.SpeechRecognition = jest.fn().mockImplementation(function () {
  return {
    start: jest.fn(),
    stop: jest.fn()
    // You can add other methods and properties as needed
  };
});

test('starts speech recognition when the microphone icon is clicked', function () {
  var _render = (0, _react.render)( /*#__PURE__*/React.createElement(_startsysReactSpeechRecognition["default"], {
      onSpeech: function onSpeech() {}
    })),
    getByRole = _render.getByRole;
  _react.fireEvent.click(getByRole('button'));
  expect(global.SpeechRecognition.prototype.start).toHaveBeenCalled();
});