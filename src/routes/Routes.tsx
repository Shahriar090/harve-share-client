import { createBrowserRouter } from "react-router-dom";
import AllSuplies from "../pages/AllSuplies";
import SupplyDetails from "../pages/SupplyDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";

import App from "../App";
import Home from "../pages/Home";
import Dashboard from "../components/layouts/Dashboard/Dashboard";
import Supplies from "../components/layouts/Dashboard/DashboardPages/Supplies";
import CreateSupply from "../components/layouts/Dashboard/DashboardPages/CreateSupply";
import DashHome from "../components/layouts/Dashboard/DashboardPages/DashHome";
import UpdateSupply from "../components/layouts/Dashboard/DashboardPages/UpdateSupply";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "supplies",
        element: <AllSuplies />,
      },
      {
        path: "supply-details/:id",
        element: <SupplyDetails />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  // different layout for dashboard
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashHome />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
      {
        path: "supplies",
        element: <Supplies />,
      },
    ],
  },
  {
    path: "update-supply/:id",
    element: <UpdateSupply />,
  },
]);
