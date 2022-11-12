import {useState, useEffect} from 'react'
import {EditorState} from 'draft-js'
import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {ssr: false})

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default function MyEditor() {
   const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
   );
   useEffect(() => {
      console.log(editorState);
   }, [editorState]);
   return (
      <Editor
         editorState={editorState}
         onEditorStateChange={setEditorState}
      />

   );
}

