import { createBrowserRouter } from "react-router-dom";
import AllSuplies from "../pages/AllSuplies";
import SupplyDetails from "../pages/SupplyDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import App from "../App";
import Home from "../pages/Home";

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
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
