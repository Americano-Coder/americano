// pages/_app.js

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react'
import { useSSR } from '@nextui-org/react'
import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const { isBrowser } = useSSR()
  // 2. Use at the root of your app
  return (
    isBrowser && (
      <ChakraProvider>
        <NextUIProvider>
          <Head>
            <title>Americano</title>
          </Head>
          <Component {...pageProps} />
        </NextUIProvider>
      </ChakraProvider>
    )
  )
}

export default MyApp