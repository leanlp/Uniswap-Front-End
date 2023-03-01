import React from 'react'
import TokenBalance from './TokenBalance'

const Footer = () => {
  return (
    <div className='flex fixed bottom-4 left-1/2 -translate-x-1/2'>
      <TokenBalance name={'0xLean'} />
      <TokenBalance name={'0xBuild'} />
      <TokenBalance name={'0xCLS'} />
    </div>
  )
}

export default Footer
