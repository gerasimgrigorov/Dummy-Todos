import Header from './components/Header'
import TaskList from './components/TaskList'
import Form from './components/Form'
import TasksProvider from './store/TasksContext'
import './App.css'

function App() {
  // const [state, dispatch] = useReducer(taskReducer, { tasks: [] })
  // const [isEditing, setIsEditing] = useState()

  return (
    <TasksProvider>
      <Header/>
      <Form />
      <TaskList />
      {/* isEditing={isEditing} setIsEditing={setIsEditing} */}
    </TasksProvider>
  )
}

export default App
