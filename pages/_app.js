import {AnimatePresence} from 'framer-motion'
import {ChakraProvider} from '@chakra-ui/react'
import Layout from "./components/layout'
function MyApp({Component, pageProps}) {
   return (
      <AnimatePresence>
         <ChakraProvider>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </ChakraProvider>
      </AnimatePresence>
   )
}

export default MyApp
