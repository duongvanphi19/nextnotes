import {
   Container,
   Heading
} from '@chakra-ui/react'

import { Editor } from '../components/editor'
export default function Home() {
   return (
      <Container>
         <Heading >This is Chakra UI Heading</Heading>
      <Editor/>
      </Container>
   )
}
