import Head from 'next/head'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }
}
export default function Home() {

  return (
    <div>
      <Head>
        <title>Azuki Mint Site</title>
        <meta name="description" content="Azuki Mint Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='body-container'>
        <div className="azuki-sample">

        </div>
        <div className="mint-info">
          <h1>Minting status: LIVE</h1>
          <h2>Total minted: {1}</h2>
          <button disabled={false} onClick={() => mint()}>Mint</button>
        </div>
      </div>


    </div>
  )
}
