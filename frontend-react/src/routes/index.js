import { createBrowserRouter } from "react-router-dom";
import Divisions from "../pages/Divisions";
import Employees from "../pages/Employees";
import EmployeeProfile from "../pages/EmployeeProfile";
import Login from "../pages/Login";
import EditPage from "../pages/EditProfile";
import Header from "../components/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Header>
        <Divisions />
      </Header>
    ),
  },
  {
    path: "/employees",
    element: (
      <Header>
        <Employees />
      </Header>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/employees/:id",
    element: <EmployeeProfile />,
  },
  {
    path: "/employees/:id/edit",
    element: <EditPage />,
  },
]);
