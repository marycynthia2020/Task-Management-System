import { FiSearch, FiTrash2 } from "react-icons/fi";
import { FaRegPenToSquare } from "react-icons/fa6";
import { useContext } from "react";
import  { taskContext } from "../context/TasksContext";
import { useNavigate } from "react-router";

const TAskCard = ({allTasks}) => {
    const {tasks, setTasks, formData, setFormData} = useContext(taskContext)
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
            // const foundTask = tasks.filter(task => task.id === id)
            // console.log(foundTask)
            // navigate("/addnew")
            // setFormData({
            //     title: foundTask.title,
            //     description: foundTask.description,
            //     dueDate: foundTask.dueDate,
            //     priority: foundTask.priority,
            // })
            

     }
  return (
     <div className="overflow-x-auto">
              <table className="min-w-full  text-left border rounded text-gray-500">
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
                  {allTasks.map((task) => (
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
                        <FaRegPenToSquare className="cursor-pointer hover:text-blue-500" onClick={()=> handleEdit(task.id)} />
                        <FiTrash2 className="cursor-pointer hover:text-red-500" onClick={()=> handleDelete(task.id)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
  )
}

export default TAskCard