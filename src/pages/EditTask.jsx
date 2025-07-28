import React, { useContext, useEffect, useState } from 'react'
import Form from '../components/Form'
import { taskContext } from '../context/TasksContext'

const EditTask = () => {
    const {foundTask} = useContext(taskContext)
    console.log(foundTask)
    const [editFormData, setEditFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "Urgency",
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
        console.log(editFormData)
    }
  return (
    <div>
        <Form handleChange={handleChange} handleSubmit={handleSubmit} formData={editFormData} keyFunction={"Edit Task"} />
    </div>
  )
}

export default EditTask