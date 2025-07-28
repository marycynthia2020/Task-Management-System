import { createContext, useEffect, useState } from "react"
import { allTAsks } from "../data"

export const taskContext = createContext()

const TasksContext = ({children}) => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || allTAsks)
    const [foundTask, setFoundTask] = useState()
    
    const value = {
        tasks,
        setTasks,
        foundTask,
        setFoundTask
    }
    
  return (
   <taskContext.Provider value={value}>
    {children}
   </taskContext.Provider>
  )
}

export default TasksContext