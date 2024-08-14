import { ReactNode } from "react";
import Sidebar from "@/components/SideBar";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* render sidebar */}
      <Sidebar />

      {/* render any contents inside baselayout */}
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}
