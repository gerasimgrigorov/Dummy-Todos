import { useContext, useState } from "react";
import { EditContext, useTasksDispatch } from "../store/TasksContext";

export default function Task({ task }) {
  const [editText, setEditText] = useState(task.text);
  // const [error, setError] = useState();
  const dispatch = useTasksDispatch();
  const { isEditing, setIsEditing } = useContext(EditContext)

  function handleSave() {
    dispatch({ type: "EDIT_TASK", task: { ...task, text: editText } });
    setIsEditing(null);
  }

  return (
    <li className="task-element">
      <input
        type="checkbox"
        className="checkbox-input"
        checked={task.checked}
        onChange={(e) =>
          dispatch({
            type: "TOGGLE_TASK",
            task: { ...task, checked: e.target.checked },
          })
        }
      />
      {isEditing && isEditing.id === task.id ? (
        <input
          type="text"
          className="text-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className="task-text">{editText}</span>
      )}{" "}
      <button
        className={`edit-button ${isEditing && isEditing.id === task.id && "save-button"}`}
        onClick={() => {
          if (isEditing) {
            if(isEditing.id === task.id){
              handleSave();
            }
          } else {
            setIsEditing(task);
          }
        }}
      >
        {isEditing && isEditing.id === task.id ? "Save" : "Edit"}
      </button>
      {isEditing && isEditing.id === task.id && (
        <button
          className="delete-task"
          onClick={() => {
            dispatch({ type: "DELETE_TASK", task })
            setIsEditing(null)
          }}
        >
          🗑️
        </button>
      )} <br />
      {/* {error && <p className="error-message">{error}</p>} */}
    </li>
  );
}
