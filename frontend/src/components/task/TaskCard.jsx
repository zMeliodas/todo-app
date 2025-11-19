import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TaskCard = ({
  task,
  title,
  date,
  description,
  onDeleteClick,
  onUpdateClick,
}) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div
      className={`flex hero rounded-lg shadow-lg p-4 gap-1 ${
        checked ? "bg-success" : "bg-primary"
      }`}
    >
      <div className="flex flex-1 flex-col wrap-break-word min-w-0">
        <span
          className={`text-xl font-bold font-mulish transition duration-300 ${
            checked ? "text-success-content" : "text-primary-content"
          }`}
        >
          {title}
        </span>
        <span
          className={`text-lg font-medium font-mulish wrap-break-word transition duration-300 ${
            checked ? "text-success-content" : "text-primary-content"
          }`}
        >
          {description}
        </span>
        <span
          className={`text-md font-light font-mulish transition duration-300 ${
            checked ? "text-success-content" : "text-primary-content"
          }`}
        >
          {date}
        </span>
      </div>

      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className="checkbox checkbox-xl border-neutral-content bg-neutral transition duration-300 checked:border-success-content checked:bg-success checked:text-success-content"
        />
        <button
          className="btn btn-sm btn-info"
          onClick={() => {
            if (checked) return;
            onUpdateClick(task);
          }}
        >
          <FaRegEdit className="w-4 h-4" />
        </button>

        <button className="btn btn-sm btn-error" onClick={onDeleteClick}>
          <MdDelete className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
