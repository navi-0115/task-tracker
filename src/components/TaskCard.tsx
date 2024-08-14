import React from "react";

interface TaskCardProps {
  title: string;
  dueDate: string;
  status: "Pending" | "In Progress" | "Completed";
}

const TaskCard: React.FC<TaskCardProps> = ({ title, dueDate, status }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500">Due: {dueDate}</p>
      <span
        className={`inline-block mt-2 px-2 py-1 rounded ${
          status === "Completed"
            ? "bg-green-100 text-green-600"
            : "bg-yellow-100 text-yellow-600"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default TaskCard;
