import {useState} from 'react'
import dynamic from 'next/dynamic'
import {convertFromRaw} from 'draft-js'
const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {ssr: false})

import {
   Container,
   Heading
} from '@chakra-ui/react'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


export default function Home() {
   const [contentState, setContentState] = useState(convertFromRaw({}))

   return (
      <Container>
         <Heading mb={6}>Editor</Heading>
      <Editor 
      onContentStateChange={setContentState}
      />
      </Container>
   )
}
