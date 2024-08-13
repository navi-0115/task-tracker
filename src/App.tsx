import "./App.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./components/ModeToggle";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
        <div className="flex-grow max-w-7xl w-full p-4 mx-auto">
          <ModeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
