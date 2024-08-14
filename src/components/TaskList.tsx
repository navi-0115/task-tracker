import React from "react";
import TaskCard from "./TaskCard";

interface Task {
  id: number;
  title: string;
  dueDate: string;
  status: "Pending" | "In Progress" | "Completed";
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          dueDate={task.dueDate}
          status={task.status}
        />
      ))}
    </div>
  );
};

export default TaskList;
