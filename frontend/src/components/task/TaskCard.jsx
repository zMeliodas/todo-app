import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import UpdateTaskModal from "../modals/UpdateTaskModal.jsx";
import DeleteTaskModal from "../modals/DeleteTaskModal.jsx";

const TaskCard = ({ taskDesc, date, description }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="flex hero bg-primary rounded-lg shadow-lg p-4">
      <div className="flex flex-1 flex-col">
        <span className="text-xl text-primary-content font-bold font-mulish">
          {taskDesc}
        </span>
        <span className="text-md text-primary-content font-medium font-mulish">
          {date}
        </span>
        <span className="text-md text-primary-content font-medium font-mulish">
          {description}
        </span>
      </div>

      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className="checkbox checkbox-xl border-warning-content bg-warning checked:border-success-content checked:bg-success checked:text-success-content"
        />
        <button
          className="btn btn-sm btn-info"
          onClick={() =>
            document.getElementById("update_task_modal").showModal()
          }
        >
          <FaRegEdit className="w-4 h-4" />
        </button>
        <UpdateTaskModal />
        <button
          className="btn btn-sm btn-error"
          onClick={() =>
            document.getElementById("delete_task_modal").showModal()
          }
        >
          <MdDelete className="w-4 h-4" />
        </button>
        <DeleteTaskModal />
      </div>
    </div>
  );
};

export default TaskCard;
