import React from 'react'
import { CgArrowLeft } from "react-icons/cg"
import { IoIosNotificationsOutline } from "react-icons/io"
import { CiSettings } from "react-icons/ci"
import { BiMessageSquareDots } from "react-icons/bi"
import nft from '../../assets/nft.webp'
import { Link, useNavigate} from 'react-router'
import { FaPlus } from 'react-icons/fa6'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='mb-4'>
        <nav className='flex justify-between items-center p-4'>
          <div className='flex items-center gap-4'>
              <CgArrowLeft className='bg-white p-1 text-4xl rounded-lg shadow-md w-14 cursor-pointer' onClick={()=> navigate(-1)} />
            <input type="text" placeholder='search' className='outline-none p-2 w-80 bg-[#ebeaef] rounded-2xl' />
          </div>

        <div className='flex items-center gap-6'>
            <IoIosNotificationsOutline className='text-4xl bg-gray-100 p-1 rounded-full cursor-pointer'/>
            <BiMessageSquareDots className='text-4xl bg-gray-100 p-1 rounded-full cursor-pointer' onClick={()=>navigate("/message")}/>
            <CiSettings className='text-4xl bg-gray-100 p-1 rounded-full cursor-pointer' onClick={()=>navigate("/settings")}/>
            <img src={nft} alt="" className='size-14 rounded-full cursor-pointer w-10 h-10' />
        </div>
      </nav>
      <div className="flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold py-1">Tasks</h1>
        <Link to="/addnew" className="text-lg flex items-center font-bold bg-[#7273e6] text-white p-2 rounded-lg">
          Add New
          <span className="rounded-md p-2  ml-3">
            <FaPlus className='' />
          </span>
        </Link>
      </div> 
    </div>
    
  )
}

export default Navbar


