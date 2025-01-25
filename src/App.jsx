import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./components/data/InitialTasks";

let nextId = 3;

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (text) => {
    if (text.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  };

  const handleEditTask = (task) => {
    const nextTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    console.log("edit task", nextTasks);

    setTasks(nextTasks);
  };

  const handleDeleteBtn = (id) => {
    const remainedTask = tasks.filter((task) => task.id !== id);
    setTasks(remainedTask);
  };

  return (
    <div className="">
      <h1 className="text-red-600 font-extrabold text-3xl">Prague itinerary</h1>
      <AddTask handleAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        handleDeleteBtn={handleDeleteBtn}
        handleEditTask={handleEditTask}
      />
    </div>
  );
}

export default App;
