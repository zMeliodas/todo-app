import ThemeSwitcher from "./components/themeSwitcher/ThemeSwitcher";
import TaskCard from "./components/task/TaskCard.jsx";
import NewTaskForm from "./components/modals/NewTaskForm.jsx";
import DeleteTaskModal from "./components/modals/DeleteTaskModal.jsx";
import { useReducer, useState } from "react";
import { reducer, initialState } from "./statehelper/taskReducer.js";
import UpdateTaskForm from "./components/modals/UpdateTaskForm.jsx";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [deleteId, setDeleteId] = useState(null);
  const [updateTaskState, setUpdateTask] = useState(null);
 

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const removeTask = (id) => {
    dispatch({ type: "REMOVE_TASK", payload: id });
  };

  const updateTask = (updatedTask) => {
    dispatch({ type: "UPDATE_TASK", payload: updatedTask });
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    document.getElementById("delete_task_modal").showModal();
  };

  const handleUpdateClick = (task) => {
    setUpdateTask(task);
    document.getElementById("update_task_modal").showModal();
  };

  return (
    <div className="min-h-screen bg-base-300 p-8">
      <div className="navbar bg-base-100 rounded-box shadow-lg mb-8 px-4">
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
            className="btn btn-success mr-2 font-mulish"
            onClick={() =>
              document.getElementById("new_task_modal").showModal()
            }
          >
            + New Task
          </button>
        </div>

        <NewTaskForm onAddTask={addTask} />
        <DeleteTaskModal taskId={deleteId} onDelete={removeTask} />
        <UpdateTaskForm task={updateTaskState} onUpdateTask={updateTask} />

        <div>
          <ThemeSwitcher />
        </div>
      </div>

      <div className="flex flex-col gap-2 hero bg-base-100 rounded-box shadow-lg p-8">
        {state.tasks.length === 0 ? (
          <span className="text-lg font-medium font-mulish text-primary">
            No tasks found.
          </span>
        ) : (
          state.tasks.map((task) => (
            <TaskCard
              task={task}
              key={task.id}
              title={task.title}
              description={task.description}
              date={task.date}
              onUpdateClick={() => handleUpdateClick(task)}
              onDeleteClick={() => handleDeleteClick(task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
