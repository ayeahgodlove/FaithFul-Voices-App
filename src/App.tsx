import "./App.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes/app-routes.component";

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
