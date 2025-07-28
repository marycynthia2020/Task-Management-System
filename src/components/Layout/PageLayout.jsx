import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

const PageLayout = () => {
  return (
    <div className='max-w-[1920px] mx-auto rounded-2xl  bg-white  border-4 p-2 h-screen'>
        <div className='grid grid-cols-5 mx-auto h-screen '>
            <div className='lg:col-span-1'>
                <Sidebar />
            </div>
            <div className='lg:col-span-4 col-span-5 overflow-auto'>
                <Navbar />
                <Outlet />
            </div>
        </div>
    </div>
    
  )
}

export default PageLayout