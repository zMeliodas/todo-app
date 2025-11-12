import React from "react";

const NewTaskModal = ({ taskId, onDelete }) => {
  return (
    <dialog
      id="delete_task_modal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg font-mulish">Delete Task</h3>
        <p className="py-4 font-mulish">
          Are you sure you want to delete this task? This action cannot be
          undone.
        </p>
        <div className="modal-action">
          <div method="dialog" className="flex gap-2">
            <button
              className="btn btn-success"
              onClick={() =>
                document.getElementById("delete_task_modal").close()
              }
            >
              Cancel
            </button>
            <button
              className="btn btn-error"
              onClick={() => {
                onDelete(taskId);
                document.getElementById("delete_task_modal").close();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default NewTaskModal;
