import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Form from "./components/Form";
import TasksProvider from "./store/TasksContext";
import "./App.css";

function App() {
  return (
    <TasksProvider>
      <Header />
      <Form />
      <TaskList />
    </TasksProvider>
  );
}

export default App;
