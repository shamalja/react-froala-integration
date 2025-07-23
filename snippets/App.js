import React, { useState } from 'react';
import TextEditor from './components/TextEditor';

function App() {
  const [content, setContent] = useState('');

  return (
    <div className="App">
      <h2>React + Froala Editor Demo</h2>
      <TextEditor value={content} onChange={setContent} />
      <h4>Editor Output:</h4>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default App;
