import React, { useCallback, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Editor = () => {


    const [editorHtml, setEditorHtml] = useState('');

    const handleEditor = (html) => {
        setEditorHtml(html);
    };
    return (
        <div>
            <ReactQuill
                value={editorHtml}
                onChange={handleEditor}
                modules={Editor.modules}
                formats={Editor.formats}
            />
        </div>
    )
}


Editor.modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']  
    ],
  };
  
  
  Editor.formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'image',
  ];
  

export default Editor