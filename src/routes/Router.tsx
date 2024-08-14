import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import AddTask from "@/pages/AddTask";
import BaseLayout from "@/components/BaseLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BaseLayout>
        <Home />
      </BaseLayout>
    ),
  },
  {
    path: "/add-task",
    element: <AddTask />,
  },
]);
