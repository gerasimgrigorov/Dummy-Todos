import { useTasks } from "../store/TasksContext";
import Task from "./Task";

export default function TaskList() {
  const { tasks } = useTasks();

  let content = (
    <section>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );

  if (tasks.length === 0) {
    content = <h3>Still no tasks yet? Hurry up and add your first one!</h3>;
  }

  return <div className="todos">{content}</div>;
}
