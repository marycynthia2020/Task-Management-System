import { useContext, useState } from 'react'
import TAskCard from '../components/TAskCard'
import { taskContext } from '../context/TasksContext'

const Completed = ({completedTasks, handleDelete, handleCompleted, handleEdit}) => {
  return (
    <div className='mt-6 p-4 '>
         <div className='flex items-center gap-3 text-lg mb-4'>
          <h2 className='bg-green-300 px-6 py-2  rounded-lg text-lg w-fit text-white'>Completed</h2>
          <p className='p-2 px-4 rounded-lg border bg-gray-200'>{completedTasks.length}</p>
         </div>
         <TAskCard allTasks={completedTasks} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />
    </div>
  )
}

export default Completed