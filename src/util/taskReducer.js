export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK": {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Math.floor(Math.random() * 100) + 1,
            text: action.task,
            checked: false,
          },
        ],
      };
    }
    case "EDIT_TASK": {
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.task.id ? { ...task, ...action.task } : task
      );

      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case "TOGGLE_TASK": {
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.task.id
          ? { ...task, checked: action.task.checked }
          : task
      );

      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case "DELETE_TASK": {
      const updatedTasks = state.tasks.filter(task => 
        task.id !== action.task.id
      )

      return {
        ...state,
        tasks: updatedTasks
      }
    }
    default: {
      throw new Error("Something went wrong");
    }
  }
}
