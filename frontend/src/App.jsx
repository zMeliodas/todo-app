import ThemeSwitcher from "./components/themeSwitcher/ThemeSwitcher";
import TaskCard from "./components/task/TaskCard.jsx";
import NewTaskForm from "./components/modals/NewTaskForm.jsx";
import DeleteTaskModal from "./components/modals/DeleteTaskModal.jsx";
import { useReducer, useState, useEffect } from "react";
import { reducer, initialState } from "./statehelper/taskReducer.js";
import { setItem } from "./utils/localStorage.js";
import UpdateTaskForm from "./components/modals/UpdateTaskForm.jsx";
import TaskFilterDropDown from "./components/common/TaskFilterDropDown.jsx";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [deleteId, setDeleteId] = useState(null);
  const [updateTaskState, setUpdateTask] = useState(null);
  const [isNewTaskModalOpen, setNewTaskModalOpen] = useState(false);
  const [isDeleteTaskModalOpen, setDeleteTaskModalOpen] = useState(false);
  const [isUpdateTaskModalOpen, setUpdateTaskModalOpen] = useState(false);

  const getFilteredTasks = () => {
    switch (state.filter) {
      case "Completed":
        return state.tasks.filter((task) => task.completed);
      case "Important":
        return state.tasks.filter((task) => task.important);
      case "All Tasks":
      default:
        return state.tasks;
    }
  };

  const filteredTasks = getFilteredTasks();

  useEffect(() => {
    setItem("tasks", state.tasks);
  }, [state.tasks]);

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
    setNewTaskModalOpen(false);
  };

  const removeTask = (id) => {
    dispatch({ type: "REMOVE_TASK", payload: id });
    setDeleteTaskModalOpen(false);
  };

  const updateTask = (updatedTask) => {
    dispatch({ type: "UPDATE_TASK", payload: updatedTask });
    setUpdateTaskModalOpen(false);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDeleteTaskModalOpen(true);
  };

  const handleUpdateClick = (task) => {
    setUpdateTask(task);
    setUpdateTaskModalOpen(true);
  };

  const handleTaskChange = (updatedTask) => {
    dispatch({ type: "UPDATE_TASK", payload: updatedTask });
  };

  const handleFilterChange = (filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  return (
    <div className="h-screen bg-base-300 p-8 overflow-y-auto">
      <div className="navbar bg-base-100 rounded-box shadow-lg mb-2 px-4">
        <div className="flex-1">
          <span className="inline-block text-xl text-primary font-bold font-mulish">
            To-
          </span>
          <span className="inline-block line-through text-xl text-primary font-bold font-mulish">
            Do
          </span>
          <span className="inline-block text-xl text-primary font-bold font-mulish">
            Done List
          </span>
        </div>

        <div>
          <button
            className="btn btn-md btn-success mr-2 font-mulish"
            onClick={() => setNewTaskModalOpen(true)}
          >
            + New Task
          </button>
        </div>

        {isNewTaskModalOpen && (
          <NewTaskForm
            onAddTask={addTask}
            onClose={() => setNewTaskModalOpen(false)}
          />
        )}

        {isUpdateTaskModalOpen && (
          <UpdateTaskForm
            task={updateTaskState}
            onUpdateTask={updateTask}
            onClose={() => setUpdateTaskModalOpen(false)}
          />
        )}

        {isDeleteTaskModalOpen && (
          <DeleteTaskModal
            taskId={deleteId}
            onDelete={removeTask}
            onClose={() => setDeleteTaskModalOpen(false)}
          />
        )}

        <div>
          <div className="tooltip font-mulish font-medium tooltip-info tooltip-bottom" data-tip="Change your theme!">
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      <TaskFilterDropDown
        selectedFilter={state.filter}
        onFilterChange={handleFilterChange}
      />

      <div className="flex flex-col gap-2 hero bg-base-100 rounded-box shadow-lg p-8 mt-2">
        {filteredTasks.length === 0 ? (
          <span className="text-lg font-medium font-mulish text-primary">
            {state.filter === "All Tasks"
              ? "No tasks found."
              : `No ${state.filter.toLowerCase()} tasks found.`}
          </span>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              task={task}
              key={task.id}
              title={task.title}
              description={task.description}
              date={task.date}
              onUpdateClick={() => handleUpdateClick(task)}
              onDeleteClick={() => handleDeleteClick(task.id)}
              onTaskChange={handleTaskChange}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
