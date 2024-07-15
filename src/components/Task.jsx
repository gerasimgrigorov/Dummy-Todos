import { useState } from "react";
import { useTasksDispatch } from "../store/TasksContext";

export default function Task({ task }) {
  const [editText, setEditText] = useState(task.text);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch()

  function handleSave() {
    dispatch({ type: "EDIT_TASK", task: { ...task, text: editText } });
    setIsEditing(false);
  }

  return (
    <li key={task.id} className="task-element">
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
      {isEditing ? (
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
        className={`edit-button ${isEditing && "save-button"}`}
        onClick={() => {
          if (isEditing) {
            handleSave();
          } else {
            setIsEditing(true);
          }
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      {isEditing && <button className="delete-task" onClick={() => dispatch({type: 'DELETE_TASK', task})}>🗑️</button>}
    </li>
  );
}
