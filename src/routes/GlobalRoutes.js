import BasicLayout from "../layout/BasicLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import NotFound from "../pages/NotFound";
import UserAuthRoute from "./UserAuthRoute";
import userRoutes from "./userRoutes";
import UserLayout from "../layout/UserLayout";
export default function GlobalRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<BasicLayout />}>
          {publicRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
        <Route path={"/User"} element={<UserLayout />}>
          {userRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<UserAuthRoute>{element}</UserAuthRoute>}
            />
          ))}
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
