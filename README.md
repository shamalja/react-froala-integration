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

3. 
4. 
   
