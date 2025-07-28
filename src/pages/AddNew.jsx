import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { taskContext } from "../context/TasksContext"
import { v4 as uuidv4 } from 'uuid';
import Form from "../components/Form";

const AddNew = () => {
    const navigate = useNavigate()
    const {tasks, setTasks} = useContext(taskContext)
     const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "Urgency",
        completed: false
    })
    
    const handleChange =(e)=>{
         setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault()

        if(formData.title && formData.description && formData.dueDate && formData.priority){
            const newTasks = {id: uuidv4() , title: formData.title,  description: formData.description, dueDate: formData.dueDate, priority: formData.priority, completed: false }
            setTasks( prev => ([newTasks, ...prev]))
            setFormData({
                title: "", 
                description: "",
                dueDate: "",
                priority: ""

            })
            navigate("/")
            return 
        } alert("All fields are required")
    }

  return (
      <div>
        <Form handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} keyFunction={"Add Task"} />
      </div>
  )
}

export default AddNew