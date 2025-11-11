import React from "react";

const UpdateTaskModal = () => {
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
              className="input input-bordered outline-none! focus:outline-none! focus:ring-0!"
            />
          </div>
          <div className="flex flex-col">
            <label className="label">Description</label>
            <input
              type="text"
              placeholder="Complete the frontend design for the new project"
              className="input input-bordered w-full outline-none! focus:outline-none! focus:ring-0!"
            />
          </div>
          <div className="flex flex-col">
            <label className="label">Time & Date</label>
            <input
              type="text"
              placeholder="August 5, 2001, 10:00 AM"
              className="input input-bordered w-full outline-none! focus:outline-none! focus:ring-0!"
            />
          </div>
        </div>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateTaskModal;
