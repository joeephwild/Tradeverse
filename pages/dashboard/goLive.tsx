import { Navbar, Sidebar, StartLiveVideo } from '@/components'
import React from 'react'

const Live = () => {
  return (
    <>
    <Navbar />
    <div className='flex items-start'>
        <Sidebar />
        <div className='flex-1 mx-[157px] mb-[64px] mt-[80px]'>
            <StartLiveVideo />
        </div>
    </div>
    </>
  )
}

export default Live