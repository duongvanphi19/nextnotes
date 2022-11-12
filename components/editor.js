import {useState, useEffect} from 'react'
import {Editor} from 'react-draft-wysiwyg'
import {EditorState} from 'draft-js'
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

