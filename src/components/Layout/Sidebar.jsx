import React from 'react'
import logo from '/logo.png'


const Sidebar = () => {
  return (
      <div className='hidden lg:block bg-[#F5F4F9]  text-gray-500 shadow-2xl border-4  rounded-lg h-full p-4'>
         <div  className='flex items-center gap-2'>
            <img src={logo} alt="" className='size-10' />
            <h2 className='font-bold text-2xl'>Task.co</h2>
         </div>
         
      </div>
  )
}

export default Sidebar