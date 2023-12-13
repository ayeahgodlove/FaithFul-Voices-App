import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/error.page";
import IndexPage from "../pages/Index";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage key="dashboard" />,
    element: <IndexPage />,
  },

]);
