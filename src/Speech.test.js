import { render, fireEvent } from '@testing-library/react';
import Speech from 'startsys-react-speech-recognition';

// Mock the SpeechRecognition interface
global.SpeechRecognition = jest.fn().mockImplementation(() => {
  return {
    start: jest.fn(),
    stop: jest.fn(),
    // You can add other methods and properties as needed
  };
});

test('starts speech recognition when the microphone icon is clicked', () => {
  const { getByRole } = render(<Speech onSpeech={() => {}} />);
  
  fireEvent.click(getByRole('button'));
  
  expect(global.SpeechRecognition.prototype.start).toHaveBeenCalled();
});
