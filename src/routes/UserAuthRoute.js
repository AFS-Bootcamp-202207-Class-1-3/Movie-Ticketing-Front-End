import { Navigate } from "react-router-dom";
export default function UserAuthRoute({ children }) {
  const isLogin = () => {
    //TODO
    //判断是否登录
    return true;
  };

  return isLogin() === true ? children : <Navigate to="/Login" replace />;
}
