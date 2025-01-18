import Head from 'next/head'

export default function FirstPost() {
   return (
      <>
            <Head>
               <title>Environment Variables</title>
            </Head>
            <h1>Database Credentials</h1>
               <p>Host: {process.env.NEXT_PUBLIC_DB_HOST}</p>
      </>	  
   )
}

