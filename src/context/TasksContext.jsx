import { createContext, useEffect, useState } from "react"
import { allTAsks } from "../data"

export const taskContext = createContext()

const TasksContext = ({children}) => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || allTAsks)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "Urgency",
        completed: false
    })
    
    const value = {
        tasks,
        setTasks,
        formData,
        setFormData
    }
    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])
  return (
   <taskContext.Provider value={value}>
    {children}
   </taskContext.Provider>
  )
}

export default TasksContext