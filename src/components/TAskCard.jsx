import { FiSearch, FiTrash2 } from "react-icons/fi";
import { FaCableCar, FaRegPenToSquare } from "react-icons/fa6";
import { useContext } from "react";
import  { taskContext } from "../context/TasksContext";
import { useNavigate } from "react-router";
import { FcCalendar } from "react-icons/fc";

const TAskCard = ({allTasks, handleDelete, handleCompleted, handleEdit}) => {
  return (
     <div className="overflow-x-auto w-full ">
       {allTasks.length > 0 ? <div className="lg:hidden grid md:grid-cols-2 gap-4 ">{
        allTasks.map(task => (
          <div key={task.id} className="bg-white shadow-xl border p-4 rounded-lg flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={task.completed? true: false} onChange={()=>handleCompleted(task.id)} className='size-4 rounded-full accent-[#7273e6]' />
                <p>{task.completed ? "Completed": "In Progress"}</p>
              </div>
              <p className={`p-2 px-8 rounded-lg w-fit ${task.priority === "Urgent" ? "text-red-800 bg-red-200" : "text-yellow-700 bg-yellow-100"}`}>{task.priority}</p>
            </div>
            <p className="font-medium text-lg">{task.title}</p>
            <p>{task.description}</p>
            <p className="flex gap-1 items-center"><FcCalendar /> <span>{task.dueDate}</span></p>
          <div className="flex items-center gap-2 text-gray-500">
            {!task.completed && <FaRegPenToSquare className="cursor-pointer hover:text-blue-500" onClick={()=> handleEdit(task.id)} />}
            <FiTrash2 className="cursor-pointer hover:text-red-500" onClick={()=> handleDelete(task.id)} />
          </div>
          </div>
        ))
        }</div> : <p className="font-bold text-2xl ">No Task</p> }
             {allTasks.length > 0 ?  <table className="hidden lg:table min-w-full  text-left border border-gray-500 rounded text-gray-500">
                <thead className=" text-gray-600">
                  <tr className="border border-gray-500">
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
                      className="border border-gray-500 hover:bg-gray-50"
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
                  ))}
                </tbody>
              </table> :  <p className="font-bold text-2xl ">No Task</p>  }
            </div>
  )
}
export default TAskCard
// className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4