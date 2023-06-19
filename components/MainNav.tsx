import { logo, profile } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { FaChevronDown} from 'react-icons/fa'

const MainNav = () => {
  return (
    <div className='flex items-center justify-between border-b-4 border-[#fff] w-full bg-Bar px-9 py-2.5'>
        <div className='flex items-center space-x-2'>
            <Image src={logo} alt="logo" className='w-[48px] h-[48px] object-contain' />
            <span>TradeVerse</span>
        </div>
        <button className='border-2 border-green px-5 py-2.5 rounded-full flex space-x-2 items-center'>
          <Image src={profile} alt="profile" className='w-[24px] h-[24px] object-cover' /> 
          <span className='text-green'>Connect wallet</span>
          <FaChevronDown size={25} className='text-green'/>
        </button>
    </div>
  )
}

export default MainNav