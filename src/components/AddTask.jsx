import { useState } from "react";

export default function AddTask({ handleAddTask }) {
  const [text, setText] = useState("");

  return (
    <div className="mt-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add New Task"
        className="p-3 border mt-3 rounded-md outline-none"
      />

      <button
        onClick={() => {
          setText("");
          handleAddTask(text);
        }}
        className="px-9 py-3 ml-2 rounded-md  border "
      >
        Add
      </button>
    </div>
  );
}
