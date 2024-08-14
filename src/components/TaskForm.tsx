import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending");
  const [taskId, setTaskId] = useState(1); // ID
  const navigate = useNavigate();

  const handleAddTask = () => {
    const newTask = {
      id: taskId,
      title,
      dueDate,
      status,
    };

    // Storing data to local storage
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));

    // Incrementing ID
    setTaskId(taskId + 1);

    // Navigating to "/" after add task
    navigate("/");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Task Title</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            placeholder="Enter task title"
            required
          />
        </div>
        <div>
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDueDate(e.target.value)
            }
            required
          />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select
            value={status}
            onValueChange={(value: string) => setStatus(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleAddTask}>Add Task</Button>
      </div>
    </form>
  );
}
