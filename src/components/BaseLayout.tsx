import { ReactNode } from "react";
import Sidebar from "@/components/SideBar";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}
