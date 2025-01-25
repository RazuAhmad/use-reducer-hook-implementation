import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, handleDeleteBtn, handleEditTask }) {
  return (
    <div className="mt-3">
      {tasks.map((task) => (
        <Task
          key={task.id}
          taskDetails={task}
          handleEditTask={handleEditTask}
          handleDeleteBtn={handleDeleteBtn}
        />
      ))}
    </div>
  );
}
