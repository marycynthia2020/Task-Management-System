import React, { useContext, useState } from 'react'
import TAskCard from '../components/TAskCard'
import { taskContext } from '../context/TasksContext'

const Pending = ({pendingTasks}) => {
  return (
    <div className='mt-6'>
         <h2 className='bg-red-500 px-6 py-2  rounded-lg text-lg w-fit text-white mb-4'>Pending</h2>
         <TAskCard allTasks={pendingTasks} />
    </div>
  )
}

export default Pending