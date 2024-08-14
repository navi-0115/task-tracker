export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: "In Progress" | "Completed" | "Pending";
}
