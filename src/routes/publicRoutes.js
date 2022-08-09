import { Navigate } from "react-router-dom";
import Login from "../pages/login/Login";

const publicRoutes = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Navigate to="/login"/>,
  },
];

export default publicRoutes;
