import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/error.page";
import IndexPage from "../pages/Index";
import CallbackPage from "../pages/callback.page";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage key="dashboard" />,
    element: <IndexPage />,
  },
  {
    path: "/callback",
    errorElement: <ErrorPage key={"callback"} />,
    element: <CallbackPage />
  }

]);
