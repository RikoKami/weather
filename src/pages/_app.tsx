import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
