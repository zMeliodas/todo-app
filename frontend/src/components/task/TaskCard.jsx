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
  onTaskChange,
}) => {
  return (
    <div
      className={`flex hero rounded-lg shadow-lg p-4 gap-1 ${
        task.completed ? "bg-success" : "bg-primary"
      }`}
    >
      <div className="flex flex-1 flex-col min-w-0">
        <span
          className={`text-md sm:text-xl font-bold font-mulish transition wrap-break-word duration-300 ${
            task.completed ? "text-success-content" : "text-primary-content"
          }`}
        >
          {title}
        </span>
        <span
          className={`text-xs sm:text-lg font-medium font-mulish wrap-break-word transition text-justify duration-300 ${
            task.completed ? "text-success-content" : "text-primary-content"
          }`}
        >
          {description}
        </span>
        <span
          className={`text-xs sm:text-lg font-light font-mulish transition pt-2 duration-300 ${
            task.completed ? "text-success-content" : "text-primary-content"
          }`}
        >
          Deadline: {date}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 ml-2">
        <div className="tooltip font-mulish font-medium tooltip-info ml-1" data-tip="Set task as Completed">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => {
              e.stopPropagation();
              onTaskChange({ ...task, completed: !task.completed });
            }}
            className="checkbox checkbox-sm sm:checkbox-xl border-neutral-content bg-neutral transition duration-300 checked:border-success-content checked:bg-success checked:text-success-content"
          />
        </div>

        <div className="tooltip font-mulish font-medium tooltip-info ml-1" data-tip="Set task as Important">
          <input
            type="checkbox"
            checked={task.important}
            onChange={(e) => {
              e.stopPropagation;
              onTaskChange({ ...task, important: !task.important });
            }}
            className="checkbox checkbox-sm sm:checkbox-xl mask mask-star-2 border-neutral-content bg-neutral transition duration-300 text-transparent checked:border-[#ffff00] checked:bg-[#ffff00] checked:text-transparent"
          />
        </div>

        <button
          className="btn btn-xs sm:btn-sm btn-info"
          onClick={() => {
            onUpdateClick(task);
          }}
        >
          <FaRegEdit className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>

        <button className="btn btn-xs sm:btn-sm btn-error" onClick={onDeleteClick}>
          <MdDelete className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
