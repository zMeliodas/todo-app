import { useState, useEffect } from "react";

const UpdateTaskForm = ({ task, onUpdateTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDate(task.date);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const updatedTask = {
      id: task.id,
      title,
      description,
      date,
    };

    onUpdateTask(updatedTask);

    document.getElementById("update_task_modal").close();
  };

  return (
    <dialog id="update_task_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold font-mulish text-lg mb-4">Update Task</h3>
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Complete the frontend design for the new project"
              className="input input-bordered w-full outline-none! focus:outline-none! focus:ring-0!"
            />
          </div>
          <div className="flex flex-col">
            <label className="label">Deadline</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="August 5, 2001, 10:00 AM"
              className="input input-bordered w-full outline-none! focus:outline-none! focus:ring-0!"
            />
          </div>
        </div>

        <div className="modal-action">
          <button
            type="button"
            className="btn btn-error"
            onClick={() => document.getElementById("update_task_modal").close()}
          >
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateTaskForm;
