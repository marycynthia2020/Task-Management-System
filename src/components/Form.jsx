import React from 'react'

const Form = ({handleChange, handleSubmit, formData, keyFunction}) => {
  return (
    <div className="  max-w-[600px] mx-auto bg-white rounded-2xl p-2 lg:p-6 border text-[#67748E] text-lg">
        <h1 className="text-2xl md:text-3xl text-center font-bold mb-2 text-bg-[#7273e6]">Add a Task</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="title">Task Name</label>
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
              <p>Priority</p>
              <div className="flex gap-2">
                <label htmlFor="urgentPriority">Urgent</label>
                <input type="radio" name="priority" id="urgentPriority" value="Urgent" checked={formData.priority === "Urgent"} onChange={handleChange} />
                <label htmlFor="normalPriority">Normal</label>
                <input type="radio" name="priority" id="normalPriority"  value="Normal" checked={formData.priority === "Normal"} onChange={handleChange} />
              </div>
          </div>
          <button type="submit" className="w-full bg-[#7273e6] rounded-lg p-2 text-white mb-4">{keyFunction}</button>
      </form>
      </div>
  )
}

export default Form