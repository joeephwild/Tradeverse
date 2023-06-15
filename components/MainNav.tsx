import { logo } from '@/assets'
import Image from 'next/image'
import React from 'react'

const MainNav = () => {
  return (
    <div className='flex items-center justify-between w-full bg-Bar px-6 py-3.5'>
        <div className='flex items-center space-x-2'>
            <Image src={logo} alt="logo" className='w-[48px] h-[48px] object-contain' />
            <span>TradeVerse</span>
        </div>
        
    </div>
  )
}

export default MainNav