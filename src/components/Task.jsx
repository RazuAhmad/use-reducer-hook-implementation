import { useState } from "react";

export default function Task({ taskDetails, handleDeleteBtn, handleEditTask }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex gap-2 justify-center mb-2">
      <label htmlFor={taskDetails.text}>
        <input
          type="checkbox"
          onChange={(e) =>
            handleEditTask({
              ...taskDetails,
              done: e.target.checked,
            })
          }
          id={taskDetails.text}
          checked={taskDetails.done}
        />
      </label>
      {!isEdit && taskDetails.text}

      {isEdit && (
        <input
          onChange={(e) =>
            handleEditTask({
              ...taskDetails,
              text: e.target.value,
            })
          }
          value={taskDetails.text}
          type="text"
          id=""
          className="border border-gray-500"
        />
      )}

      {isEdit ? (
        <button className="border px-2" onClick={() => setIsEdit(!isEdit)}>
          Save
        </button>
      ) : (
        <button className="border px-2" onClick={() => setIsEdit(!isEdit)}>
          Edit
        </button>
      )}
      <button
        onClick={() => handleDeleteBtn(taskDetails.id)}
        className="border px-2"
      >
        Delete
      </button>
    </div>
  );
}
