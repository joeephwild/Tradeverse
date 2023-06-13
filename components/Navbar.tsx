import { logo, profile } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { FaSearch, FaChevronDown } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='border-b-4 border-[#fff] bg-Bar flex w-full items-center justify-between py-3.5 px-5'>
        <div className='flex items-center space-x-4'>
            <Image src={logo} alt="logo" className='w-[48px] h-[36px] object-contain' />
            <span className='text-[24px] font-bold'>TradeVerse</span>
            <div className='flex items-center inputbg w-[480px] px-4 py-2.5 rounded-[48px] space-x-3'>
               <FaSearch />
               <input type="text" placeholder='Search Marketplace' className='w-full border-none outline-none bg-transparent text-Foundation placeholder:text-[#A3A3A3]' />
            </div>
        </div>

        <button className='border-green border px-4 py-2.5 text-green rounded-[48px] flex items-center space-x-4'>
            <Image src={profile} alt="profile" />
            <span>0x...23set534ft</span>
            <FaChevronDown />
        </button>
    </nav>
  )
}

export default Navbar