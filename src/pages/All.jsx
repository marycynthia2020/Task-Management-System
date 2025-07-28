import { useContext } from 'react';
import TAskCard from '../components/TAskCard';
import { taskContext } from '../context/TasksContext';

const All = ({tasks}) => {
  return (
    <div className='p-4 '>
       <div className='flex items-center gap-3 text-lg mb-4'>
         <h2 className='bg-yellow-600 px-6 py-2  rounded-lg  w-fit text-white '>All Tasks</h2>
         <p className='p-2 px-4 rounded-lg border bg-gray-200'>{tasks.length}</p>
       </div>
        <TAskCard  allTasks={tasks} />
    </div>
  )
}

export default All