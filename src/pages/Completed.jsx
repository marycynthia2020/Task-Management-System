import { useContext, useState } from 'react'
import TAskCard from '../components/TAskCard'
import { taskContext } from '../context/TasksContext'

const Completed = ({completedTasks}) => {
  return (
    <div className='mt-6'>
         <h2 className='bg-green-300 px-6 py-2  rounded-lg text-lg w-fit text-white mb-4'>Completed</h2>
         <TAskCard allTasks={completedTasks}  />
    </div>
  )
}

export default Completed