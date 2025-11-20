import { useState } from "react";
import DateTimePickerField from "../datepicker/DateTimePickerField";

const NewTaskForm = ({ onAddTask, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setIsTitleEmpty(true);
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      date,
      completed: false,
      important: false,
    };

    onAddTask(newTask);

    setTitle("");
    setDescription("");
    setDate("");
    onClose();
  };

  const handleReceiveDate = (value) => {
    setDate(value);
  };

  return (
    <dialog className="modal modal-open transition duration-300">
      <div className="modal-box overflow-y-hidden">
        <h3 className="font-bold font-mulish text-lg mb-4">New Task</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label className="label">Task</label>
            <input
              type="text"
              placeholder="Code"
              value={title}
              maxLength={50}
              onChange={(e) => {
                setTitle(e.target.value);
                if (e.target.value.trim() !== "") {
                  setIsTitleEmpty(false);
                }
              }}
              className="input input-bordered outline-none! focus:outline-none! focus:ring-0!"
            />
            {isTitleEmpty && (
              <span className="font-mulish text-error">
                A task title is required.
              </span>
            )}
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
            <DateTimePickerField
              dateTimeValue={handleReceiveDate}
              btnDescription="Reset"
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
              onClose();
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
