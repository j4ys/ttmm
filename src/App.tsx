import { RouterProvider } from "react-router";
import router from "./app/router/router";
import { ThemeProvider } from "./app/theme/theming.provider";
import { ThemeToggle } from "./app/shared/theme-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-full flex-col">
        <div className="flex h-[80px] items-center justify-end px-2">
          <ThemeToggle />
        </div>
        <div className="grow">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
