import { Route, Routes } from "react-router"
import PageLayout from "./components/Layout/PageLayout"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import All from "./pages/All"
import Completed from "./pages/Completed"
import Pending from "./pages/Pending"
import AddNew from "./pages/AddNew"
import { useContext } from "react"
import { taskContext } from "./context/TasksContext"



function App() {
  const {tasks} = useContext(taskContext)
  console.log(tasks)
  return (
    <div>
      <Routes>
        
          <Route element={<PageLayout />}>
            <Route path="/"  element={<Home />}/>
            <Route path="/all"  element={< All />}/>
            <Route path="/completed"  element={< Completed />}/>
            <Route path="/pending"  element={<Pending />}/>
            <Route path="/addnew"  element={<AddNew />}/>
            <Route path="*" element={<PageNotFound />} />

          </Route>
      </Routes>
    </div>
      

  )
}

export default App
