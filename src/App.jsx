import { useReducer } from 'react'
// import viteLogo from '/vite.svg'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Form from './components/Form'
import { taskReducer } from './util/taskReducer'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] })
  console.log(state)
  return (
    <>
      <Header/>
      <Form dispatch={dispatch}/>
      <TaskList tasks={state.tasks} dispatch={dispatch}/>
    </>
  )
}

export default App
