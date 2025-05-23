import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateStudent from "../pages/Admin/CreateStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App></App>,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
