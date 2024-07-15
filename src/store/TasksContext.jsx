import { createContext, useContext, useReducer, useState } from "react";
import { taskReducer } from "../util/taskReducer";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);
export const EditContext = createContext(null);

export default function TasksProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] });
  const [isEditing, setIsEditing] = useState();

  return (
    <TasksContext.Provider value={state}>
      <TasksDispatchContext.Provider value={dispatch}>
        <EditContext.Provider value={{isEditing, setIsEditing}}>
          {children}
        </EditContext.Provider>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
