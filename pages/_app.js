import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { CoinHawkProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider serverUrl='https://3oa9fiq65tsf.usemoralis.com:2053/server' appId='LyRGmHA5fdpucYf6RRXR2s8uB5Kl4sILd2G0GP9y'>
      <CoinHawkProvider>
        <Component {...pageProps} />
      </CoinHawkProvider>
  </MoralisProvider>
  )
}

export default MyApp
