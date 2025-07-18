import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import TasksContext from './context/TasksContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <TasksContext>
         <App />
      </TasksContext>
      </BrowserRouter>
  </StrictMode>,
)
