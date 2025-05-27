import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";

export const adminPaths = [
  {
    index: true,
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    path: "create-student",
    element: <CreateStudent></CreateStudent>,
  },
  {
    path: "create-admin",
    element: <CreateAdmin></CreateAdmin>,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty></CreateFaculty>,
  },
];
