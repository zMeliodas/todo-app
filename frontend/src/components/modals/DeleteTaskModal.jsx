import React from "react";

const DeleteTaskModal = ({ taskId, onDelete, onClose }) => {
  return (
    <dialog id="delete_task_modal" className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg font-mulish">Delete Task</h3>
        <p className="py-4 font-mulish">
          Are you sure you want to delete this task? This action cannot be
          undone.
        </p>
        <div className="modal-action">
          <div method="dialog" className="flex gap-2">
            <button className="btn btn-success" onClick={() => onClose()}>
              Cancel
            </button>
            <button
              className="btn btn-error"
              onClick={() => {
                onDelete(taskId);
                onClose();
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

export default DeleteTaskModal;
