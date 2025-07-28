import { FiSearch, FiTrash2 } from "react-icons/fi";
import { FaCableCar, FaRegPenToSquare } from "react-icons/fa6";
import { useContext } from "react";
import  { taskContext } from "../context/TasksContext";
import { useNavigate } from "react-router";
import { FcCalendar } from "react-icons/fc";

const TAskCard = ({allTasks}) => {
  const navigate = useNavigate()
    const {tasks, setTasks, foundTask, setFoundTask} = useContext(taskContext)
    
    const handleDelete = (id) =>{
            const updatedTasks = tasks.filter(task => task.id !== id)
            setTasks(updatedTasks)
        }
        const handleCompleted = (id)=>{
          const foundTask = tasks.find(task => task.id === id)
          const newFoundTask = {...foundTask, completed: !foundTask.completed}
          const newTaskArray = tasks.map(task =>{
            if (task.id === id){
              return newFoundTask
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
     <div className="overflow-x-auto w-full ">
       <div className="lg:hidden grid md:grid-cols-2 gap-4  ">{
        allTasks.map(task => (
          <div key={task.id} className="bg-white shadow-xl border p-4 rounded-lg flex flex-col gap-y-2">
            <p className={`p-2 px-8 rounded-lg w-fit ${task.priority === "Urgent" ? "text-red-800 bg-red-200" : "text-yellow-700 bg-yellow-100"}`}>{task.priority}</p>
            <p className="font-medium text-lg">{task.title}</p>
            <p>{task.description}</p>
            <p className="flex gap-1 items-center"><FcCalendar /> <span>{task.dueDate}</span></p>
          <div className="flex items-center gap-2 text-gray-500">
            {!task.completed && <FaRegPenToSquare className="cursor-pointer hover:text-blue-500" onClick={()=> handleEdit(task.id)} />}
            <FiTrash2 className="cursor-pointer hover:text-red-500" onClick={()=> handleDelete(task.id)} />
          </div>
          </div>
        ))
        }</div>
              <table className="hidden lg:table min-w-full  text-left border rounded text-gray-500">
                <thead className=" text-gray-600">
                  <tr className="border">
                    <th></th>
                    <th className="p-3 ">Task Name</th>
                    <th className="p-3 ">Description</th>
                    <th className="p-3 ">Due Date</th>
                    <th className="p-3 ">Priority</th>
                  </tr>
                </thead>
                <tbody className="">
                  {allTasks.length > 0 ? allTasks.map((task) => (
                    <tr
                      key={task.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-3  text-center"><input type="checkbox" checked={task.completed? true: false} onChange={()=>handleCompleted(task.id)} className='size-4 rounded-full accent-[#7273e6]' /></td>
                      <td className="p-3 ">{task.title}</td>
                      <td className="p-3 ">{task.description}</td>
                      <td className="p-3 ">{task.dueDate}</td>
                      <td className={`${task.priority === "Urgent" ? "text-red-500" : "text-yellow-600"}`}>{task.priority}</td>
                      <td className="p-3  flex items-center gap-2 text-gray-500">
                        {!task.completed && <FaRegPenToSquare className="cursor-pointer hover:text-blue-500" onClick={()=> handleEdit(task.id)} />}
                        <FiTrash2 className="cursor-pointer hover:text-red-500" onClick={()=> handleDelete(task.id)} />
                      </td>
                    </tr>
                  )) : <p className="font-bold text-2xl ">No Task</p>}
                </tbody>
              </table>
            </div>
  )
}

export default TAskCard