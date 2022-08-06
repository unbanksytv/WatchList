import Header from '../components/Header';
import Trending from '../components/Trending';
import ChcTable from '../components/chc-table/ChcTable'
import Head from 'next/head';
import SwapCryptoModal from '../components/SwapCryptoModal';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Head>
      <title>Top 33 Market Cap</title>
      </Head>
     <Header/>
     <SwapCryptoModal/>
     <div className='mt-10'/>
     <Trending/>
     <div className='mt-20'/>
     <ChcTable/>

    </div>
  )
}
