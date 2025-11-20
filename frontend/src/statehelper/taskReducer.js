import { getItem } from "../utils/localStorage.js";

export const initialState = {
  tasks: Array.isArray(getItem("tasks")) ? getItem("tasks") : [],
  filter: ""
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case "SET_FILTER":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
