import React, { useContext, useEffect, useState } from 'react'
import Form from '../components/Form'
import { taskContext } from '../context/TasksContext'
import { useNavigate } from 'react-router'

const EditTask = () => {
    const navigate = useNavigate()
    const {foundTask, tasks, setTasks} = useContext(taskContext)
    const [editFormData, setEditFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "",
        completed: false
        })
    useEffect(()=>{
        if(foundTask) {
            setEditFormData({
                title: foundTask.title,
                description: foundTask.description,
                dueDate: foundTask.dueDate,
                priority: foundTask.priority,
                completed: foundTask.completed
            })
        }
    }, [foundTask])
    const handleChange =(e)=>{
        setEditFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(editFormData.title && editFormData.description && editFormData.dueDate && editFormData.priority){
            const newTask = {id: foundTask.id , title: editFormData.title,  description: editFormData.description, dueDate: editFormData.dueDate, priority: editFormData.priority, completed: false }
            const updatedTasks = tasks.filter(task => task.id !== newTask.id)
            setTasks([newTask, ...updatedTasks])
            navigate("/")
            return 
        } alert("All fields are required")
    }
  return (
    <div>
        <Form handleChange={handleChange} handleSubmit={handleSubmit} formData={editFormData} keyFunction={"Edit Task"} />
    </div>
  )
}

export default EditTask