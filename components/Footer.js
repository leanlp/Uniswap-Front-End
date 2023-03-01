import React from 'react'
import { useEffect, useState } from 'react'
import TokenBalance from './TokenBalance'
import { useAccount } from 'wagmi'



const Footer = () => {

  const [tokenBalComp, setTokenBalComp] = useState()

  const { address } = useAccount()
  

  return (
    <div className='flex fixed bottom-4 left-1/2 -translate-x-1/2'>
      <TokenBalance name={'0xLean'} walletAddress={address}/>
      <TokenBalance name={'0xBuild'} walletAddress={address} />
     <TokenBalance name={'0xCLS'} walletAddress={address} />
    </div>
  )
}

export default Footer
