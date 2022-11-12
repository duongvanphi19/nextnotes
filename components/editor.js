import {useState, useEffect} from 'react'
import {Editor as Draft} from 'react-draft-wysiwyg'
import {EdittorState} from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default function Editor() {
   const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
   );
   useEffect(() => {
      console.log(editorState);
   }, [editorState]);
   return (
      <Draft
         editorState={editorState}
         onEditorStateChange={setEditorState}
      />

   );
}

