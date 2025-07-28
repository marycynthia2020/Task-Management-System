import React, { useContext, useEffect, useState } from 'react'
import All from './All'
import Pending from './Pending'
import Completed from './Completed'
import { taskContext } from '../context/TasksContext'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()
  const {tasks, setTasks, setFoundTask} = useContext(taskContext)
  const [completedTasks, setCompletedTasks] = useState([])
  const [pendingTasks, setPendingTasks] = useState([])

  useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
        setCompletedTasks(tasks.filter(task => task.completed === true))
        setPendingTasks(tasks.filter(task => task.completed === false))
    }, [tasks])

    const handleDelete = (id) =>{
            const updatedTasks = tasks.filter(task => task.id !== id)
            setTasks(updatedTasks)
    }
    const handleCompleted = (id)=>{
          const taskClicked = tasks.find(task => task.id === id)
          const newClickedTask = {...taskClicked, completed: !taskClicked.completed}
          const newTaskArray = tasks.map(task =>{
            if (task.id === id){
              return newClickedTask
            } return task
          })
          setTasks(newTaskArray)
    }
    const handleEdit = (id)=>{
            const taskToEdit = tasks.find(task => task.id === id)
            navigate("/editask")
            setFoundTask(taskToEdit)
     }

  return (
    <div className='py-4'>
      <All tasks={tasks} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit}/>
      <Pending  pendingTasks={pendingTasks } handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit}/>
      <Completed completedTasks={completedTasks} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />
    </div>
  )
}

export default Home