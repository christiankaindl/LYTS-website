import '../styles/globals.css'
import '@christiankaindl/lyts/style.css'
import '../styles/index.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
