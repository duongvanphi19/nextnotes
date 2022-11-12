import Head from 'next/head'
import {
   Container,
   Text,
   Icon,
   Button,
   Link
} from '@chakra-ui/react'
import {IoLogoVercel} from 'react-icons/io5'

export default function Layout({children}) {
   return (
      <>
         <Head>
            <title>Next Note</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>
         {children}
         <Container
            as={"footer"}
            textAlign={"center"}
            width={"100%"}
            padding={6}
         >
            <Text>
               Made with Nextjs and ChakraUI
            </Text>
            <Text fontWeight={"bold"}>
               Deployed by
               <Link href={"https://vercel.com/"}>
                  <Icon as={IoLogoVercel} /> Vercel
               </Link>
            </Text>

         </Container>
      </>
   )
}
