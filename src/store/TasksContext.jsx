import { createContext, useContext, useReducer } from "react"
import { taskReducer } from "../util/taskReducer"

const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)

export default function TasksProvider({children}) {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] })

  return (
    <TasksContext.Provider value={state}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export function useTasks(){
  return useContext(TasksContext)
}

export function useTasksDispatch(){
  return useContext(TasksDispatchContext)
}