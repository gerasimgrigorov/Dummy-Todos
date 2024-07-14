import Task from "./Task";

export default function TaskList({ tasks, dispatch }) {
  let content = (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} dispatch={dispatch} />
      ))}
    </ul>
  );

  if (tasks.length === 0) {
    content = <h3>Still no tasks yet? Hurry up and add your first one!</h3>;
  }

  return <div className="todos">{content}</div>;
}
