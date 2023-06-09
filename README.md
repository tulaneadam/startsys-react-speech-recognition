# startsys-react-speech-recognition

A simple React component to transcribe speech to text using the Web Speech API.

## Installation

You can install the package using npm:

```bash
npm install startsys-react-speech-recognition
```

## Peer Dependencies

This package depends on the following peer dependencies, which you should install in your project:

- `react`
- `sweetalert`
- `bowser`

Install them with:

```bash
npm install react sweetalert bowser
```

## Usage

Here is a sample usage of the `startsys-react-speech-recognition` component:

```jsx
import React, { useState } from 'react';
import Speech from 'startsys-react-speech-recognition';

const App = () => {
    const [text, setText] = useState('');

    const handleSpeech = (transcript) => {
        setText(transcript);
    }

    return (
        <div className="container">
            <h1>Speech to Text App</h1>
            <Speech onSpeech={handleSpeech} />
            <input type="text" value={text} readOnly />
        </div>
    );
}

export default App;
```

In this example, the `Speech` component will start transcribing when the microphone icon is clicked. The transcribed text will then be displayed in an input field.

Please note that this is an experimental technology and browser support is limited. It's currently supported in Chrome and Edge but not supported in Firefox, Safari, or Internet Explorer. The app also needs to be served over HTTPS for this feature to work, except on localhost.

## Contributing

Contributions are welcome! Please submit a pull request on our GitHub page.

## License

This project is licensed under the MIT License.
