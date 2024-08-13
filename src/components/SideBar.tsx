import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col border-r bg-card p-6 md:flex">
      <div className="mb-6 flex items-center gap-2">
        {/* <TimerIcon className="h-6 w-6" /> */}
        <h2 className="text-2xl font-bold">Task Manager</h2>
      </div>
      <nav className="flex flex-col gap-2">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
        >
          {/* <ListIcon className="h-5 w-5" /> */}
          My Tasks
        </Link>
        <Link
          to="/upcoming"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
        >
          {/* <CalendarIcon className="h-5 w-5" /> */}
          Upcoming
        </Link>
        <Link
          to="/completed"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
        >
          {/* <CheckIcon className="h-5 w-5" /> */}
          Completed
        </Link>
      </nav>
    </aside>
  );
}
