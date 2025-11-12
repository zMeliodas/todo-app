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
    <div className="flex hero bg-primary rounded-lg shadow-lg p-4 gap-1">
      <div className="flex flex-1 flex-col wrap-break-word min-w-0">
        <span className="text-xl text-primary-content font-bold font-mulish">
          {title}
        </span>
        <span className="text-lg text-primary-content font-medium font-mulish wrap-break-word">
          {description}
        </span>
        <span className="text-md text-primary-content font-light font-mulish">
          {date}
        </span>
      </div>

      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className="checkbox checkbox-xl border-neutral-content bg-neutral checked:border-success-content checked:bg-success checked:text-success-content"
        />
        <button className="btn btn-sm btn-info" onClick={() => onUpdateClick(task)}>
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
