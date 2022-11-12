import {
   Container,
   Heading
} from '@chakra-ui/react'

import MyEditor from '../components/editor'
export default function Home() {
   return (
      <Container>
         <Heading >This is Chakra UI Heading</Heading>
      <MyEditor/>
      </Container>
   )
}
