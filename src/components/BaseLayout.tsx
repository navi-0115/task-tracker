import { ReactNode } from "react";
import Sidebar from "@/components/SideBar";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <div className="flex min-h-screen">
      {/* render sidebar */}
      <Sidebar />

      {/* render any contents inside baselayout */}
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
}
