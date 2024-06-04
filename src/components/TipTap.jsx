// src/Tiptap.jsx
import * as Y from "yjs"
import { EditorContent, EditorProvider, useCurrentEditor, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolkit from './Toolkit'
import { WebrtcProvider } from "y-webrtc";
import Underline from "@tiptap/extension-underline";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import History from "@tiptap/extension-history";
import Color from "@tiptap/extension-color";
const ydoc = new Y.Doc();

const provider = new WebrtcProvider("GoogleDocsClone", ydoc)

// define your extension array
const extensions = [
  StarterKit,
  Underline, 
  FontFamily, 
  TextStyle,
  Color
  // History
]

const content = '<p>Hello World!</p>'


const Tiptap = () =>{
  const editor = useEditor({
    content, 
    extensions,
  
  })
  return (
    <>
      <div className="prose max-w-none p-4 border rounded">
        {/* <EditorProvider
        editorProps={{ ydoc, provider }}
          extensions={extensions}
          content={content}
          slotBefore={<Toolkit/>}
        /> */}
        <Toolkit editor={editor}/>
        <EditorContent className="" editor={editor} />

      </div>
    </>
  )

}



export default Tiptap