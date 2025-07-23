# React-Froala Integration
React integration of Froala WYSIWYG Editor with reusable components and example configuration for modern web apps.

## 🔧 Step-by-Step Guide in VS Code

### ✅ 1. Open VS Code Terminal
- Open **VS Code**
- Open the terminal:  
  `View > Terminal` or use the shortcut <kbd>Ctrl</kbd> + <kbd>`</kbd>

---

### ✅ 2. Create a React App
In the terminal, run:

`npx create-react-app froala-editor-demo`

`cd froala-editor-demo`

---

### ✅ 3. Install Froala
In the terminal, run:

`npm install react-froala-wysiwyg froala-editor --save`

---

### ✅ 4. Create the Component
1. In the Explorer sidebar:

  - Go to `src/`

  - Right-click → New Folder → name it `components`

  - Inside `components/`, create a file named `TextEditor.jsx`

2. Paste the following code inside `TextEditor.jsx`:

```
import React from 'react';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import './TextEditor.css';

const TextEditor = ({ value, onChange }) => {
  const config = {
    placeholderText: 'Start typing...',
    toolbarButtons: ['bold', 'italic', 'underline', 'formatOL', 'formatUL'],
    heightMin: 200,
  };

  return (
    <div className="editor-wrapper">
      <FroalaEditorComponent
        model={value}
        onModelChange={onChange}
        config={config}
      />
    </div>
  );
};

export default TextEditor;
```

3. Next to it, create a file named TextEditor.css and paste the following:

 ```
.editor-wrapper {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
```

---

### ✅ 5. Edit App.js

Replace everything in src/App.js with the following:

```
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
```

---

### ✅ 6. Start Your App

Back in the terminal, run:

`npm start`

Your browser will open to http://localhost:3000 with the Froala Rich Text Editor integrated into your React app!
   
