import ThemeSwitcher from "./components/themeSwitcher/ThemeSwitcher";
import TaskCard from "./components/task/TaskCard.jsx";
import NewTaskModal from "./components/modals/NewTaskModal.jsx";
import UpdateTaskModal from "./components/modals/UpdateTaskModal.jsx";
import DeleteTaskModal from "./components/modals/DeleteTaskModal.jsx";

function App() {
  return (
    <div className="min-h-screen bg-base-300 p-8">
      <div className="navbar bg-base-100 rounded-box shadow-lg mb-8 px-4">
        <div className="flex-1">
          <span className="inline-block text-xl font-semibold font-mulish">To-</span>
          <span className="inline-block line-through text-xl font-semibold font-mulish">Do</span>
          <span className="inline-block text-xl font-semibold font-mulish">Done List</span>
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

        <NewTaskModal />

        <div>
          <ThemeSwitcher />
        </div>
      </div>

      <div className="flex flex-col gap-2 hero bg-base-100 rounded-box shadow-lg p-8">
        <TaskCard
          taskDesc="Maglalaba ako"
          date="August 25, 2024, 10:00 AM"
          description="Complete the frontend design for the new project"
        />

      </div>
    </div>
  );
}

export default App;
