import TaskForm from "@/components/TaskForm";
import BaseLayout from "@/components/BaseLayout";

export default function AddTask() {
  return (
    <BaseLayout>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
        <TaskForm />
      </div>
    </BaseLayout>
  );
}
