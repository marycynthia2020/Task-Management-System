import { useContext } from 'react';
import TAskCard from '../components/TAskCard';
import { taskContext } from '../context/TasksContext';

const All = ({tasks}) => {
  return (
    <div className=''>
        <h2 className='bg-yellow-600 px-6 py-2  rounded-lg text-lg w-fit text-white mb-4'>All Tasks</h2>
        <TAskCard  allTasks={tasks} />
    </div>
  )
}

export default All