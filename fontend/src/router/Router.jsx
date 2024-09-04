import { createBrowserRouter } from "react-router-dom";
import Add from "../pages/Add";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
]);

export default router;
