import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

const PageLayout = () => {
  return (
    <div className='max-w-[19200px] mx-auto rounded-2xl bg-[#F5F4F9] border-4 p-2 h-screen'>
        <div className='grid grid-cols-5 mx-auto h-full '>
            <div className='col-span-1'>
                <Sidebar />
            </div>
            <div className='col-span-4  overflow-auto'>
                <Navbar />
                <Outlet />
            </div>
        </div>
    </div>
    
  )
}

export default PageLayout