import { useState } from "react";

const TaskFilterDropDown = ({ selectedFilter, onFilterChange }) => {
  const options = ["Completed", "Important", "All Tasks"];

  return (
    <select
      value={selectedFilter}
      onChange={(e) => onFilterChange(e.target.value)}
      className="select select-bordered font-mulish font-bold w-30 outline-none! focus: border-transparent! focus:outline-none! focus:ring-0!"
    >
      <option disabled value="">
        Filter Tasks
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default TaskFilterDropDown;
