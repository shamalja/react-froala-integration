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
