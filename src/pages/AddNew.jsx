import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { taskContext } from "../context/TasksContext"

const AddNew = () => {
    const navigate = useNavigate()
    const {tasks, setTasks, formData, setFormData} = useContext(taskContext)
    const index = tasks.length + 1

    
    const handleChange =(e)=>{
         setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault()

        if(formData.title && formData.description && formData.dueDate && formData.priority){
            const newTasks = {id: index, title: formData.title,  description: formData.description, dueDate: formData.dueDate, priority: formData.priority, completed: false }
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
      <div className=" w-4/5  max-w-[600px] mx-auto bg-white rounded-2xl p-6 shadow-2xl text-[#67748E] text-lg">
        <h1 className="text-2xl md:text-3xl text-center font-bold mb-2 text-bg-[#7273e6]">Add a Task</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="titlee">Task Name</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}  placeholder="Enter your  task name" minLength={5} className="border h-10 p-2 outline-none rounded-lg" />
          </div>
          <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="description">Task Description</label>
              <input type="text" id="description" name="description" value={formData.description} onChange={handleChange}   placeholder="Enter task description" minLength={5}  className="border h-10 p-2 outline-none rounded-lg" />
          </div>
          <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="dueDate">Due Date</label>
              <input type="date" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleChange}   placeholder="Enter task due date" minLength={5}  className="border h-10 p-2 outline-none rounded-lg" />
          </div>
          <div className="flex flex-col gap-2 mb-4">
              <label>Priority</label>
              <div className="flex gap-2">
                <label htmlFor="priority">Urgent</label>
                <input type="radio" name="priority" id="priority" value="Urgency" checked={formData.priority === "Urgency"} onChange={handleChange} />
                <label htmlFor="priority">Normal</label>
                <input type="radio" name="priority" id="priority"  value="Normal" checked={formData.priority === "Normal"} onChange={handleChange} />
              </div>
          </div>
          <button type="submit" className="w-full bg-[#7273e6] rounded-lg p-2 text-white mb-4">Add Task </button>
      </form>
      </div>
  )
}

export default AddNew