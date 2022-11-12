import Head from 'next/head'

export default function Layout({children}) {
   return (
      <>
         <Head>
            <title>Next Note</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>
         {children}
         <footer>Footer</footer>
      </>
   )
}
