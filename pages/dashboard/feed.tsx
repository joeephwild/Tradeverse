import { Mainbody, Navbar, Sidebar } from '@/components'
import React from 'react'

const home = () => {
  return (
    <>
    <Navbar />
    <div className='flex items-start'>
        <Sidebar />
        <Mainbody />
    </div>
    </>
  )
}

export default home