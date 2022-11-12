import {useState} from 'react'
import {convertFromRaw} from 'draft-js'
import {
   Container,
   Heading
} from '@chakra-ui/react'

import MyEditor from '../components/editor'
export default function Home() {
   const [contentState, setContentState] = useState(convertFromRaw({}))

   return (
      <Container>
         <Heading mb={6}>Editor</Heading>
      <MyEditor onContentStateChange={setContentState}/>
      <textarea>{JSON.stringify(contentState, null, 3)}</textarea>
      </Container>
   )
}
