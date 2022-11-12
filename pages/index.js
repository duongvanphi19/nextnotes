import {
   Container,
   Heading
} from '@chakra-ui/react'

import MyEditor, {editorState, contentState} from '../components/editor'
export default function Home() {
   return (
      <Container>
         <Heading mb={6}>Editor</Heading>
      <MyEditor/>
      <textarea>{JSON.stringify(contentState, null, 3)}</textarea>
      </Container>
   )
}
