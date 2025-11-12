import React from "react";
import { useState } from "react";

const NewTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      date,
    };

    onAddTask(newTask);

    setTitle("");
    setDescription("");
    setDate("");
    document.getElementById("new_task_modal").close();
  };

  return (
    <dialog id="new_task_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold font-mulish text-lg mb-4">New Task</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label className="label">Task</label>
            <input
              type="text"
              placeholder="Code"
              value={title}
              maxLength={50}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered outline-none! focus:outline-none! focus:ring-0!"
            />
          </div>
          <div className="flex flex-col">
            <label className="label">Description</label>
            <input
              type="text"
              placeholder="Complete the frontend design for the new project"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input input-bordered w-full outline-none! focus:outline-none! focus:ring-0!"
            />
          </div>
          <div className="flex flex-col">
            <label className="label">Deadline</label>
            <input
              type="text"
              placeholder="August 5, 2001, 10:00 AM"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input input-bordered w-full outline-none! focus:outline-none! focus:ring-0!"
            />
          </div>
        </div>

        <div className="modal-action">
          <button
            type="button"
            className="btn btn-error"
            onClick={() => {
              setTitle("");
              setDescription("");
              setDate("");
              document.getElementById("new_task_modal").close();
            }}
          >
            Cancel
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Add Task
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default NewTaskForm;
