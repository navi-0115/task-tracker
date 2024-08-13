import "./App.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./components/ModeToggle";
import { Sidebar } from "./components/SideBar";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div>
        <div className="flex-grow max-w-7xl w-full p-4 mx-auto">
          <Sidebar />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
