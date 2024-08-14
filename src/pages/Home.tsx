import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";
import { ModeToggle } from "@/components/ModeToggle";

interface Task {
  id: number;
  title: string;
  dueDate: string;
  status: "Pending" | "In Progress" | "Completed";
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Get data from local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">My Tasks</h1>
        <div className="flex space-x-4">
          <Link
            to="/add-task"
            className="btn btn-primary border rounded-lg p-2 mb-2 shadow-sm"
          >
            <button type="button">+ Add Task</button>
          </Link>
          <ModeToggle />
        </div>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}
