import React, { useContext, useEffect, useState } from 'react'
import All from './All'
import Pending from './Pending'
import Completed from './Completed'
import { taskContext } from '../context/TasksContext'

const Home = () => {
  const {tasks} = useContext(taskContext)
  const [completedTasks, setCompletedTasks] = useState([])
  const [pendingTasks, setPendingTasks] = useState([])


  useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
        setCompletedTasks(tasks.filter(task => task.completed === true))
        setPendingTasks(tasks.filter(task => task.completed === false))
    }, [tasks])

  return (
    <div className='py-4'>
      <All tasks={tasks}/>
      <Pending  pendingTasks={pendingTasks }/>
      <Completed completedTasks={completedTasks} />
    </div>
  )
}

export default Home