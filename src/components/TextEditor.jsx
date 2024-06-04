import React, { useCallback} from 'react';
import Quill from "quill"
import "quill/dist/quill.snow.css"
import Tiptap from './TipTap';

// we will be using tiptap 

const TextEditor = () => {
  return (
    <div>
        <Tiptap/>
    </div>
  );
};

export default TextEditor;
