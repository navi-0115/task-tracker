import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-gray-100 p-6 border-r">
      <div className="flex m-2">
        <h1 className="text-2xl font-bold mb-6 mr-4">Task Tracker</h1>
      </div>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="text-lg">
          My Tasks
        </Link>
        <Link to="/upcoming" className="text-lg">
          Upcoming
        </Link>
        <Link to="/completed" className="text-lg">
          Completed
        </Link>
      </nav>
    </aside>
  );
}
