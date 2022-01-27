import '../styles/globals.css'
import '@christiankaindl/lyts/style.css'
import '../styles/index.css'
import type { AppProps } from 'next/app'
import { MediaContextProvider } from '@/components/MediaQuery/MediaQuery'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MediaContextProvider>
      <Component {...pageProps} />
    </MediaContextProvider>
  )
}

export default MyApp
