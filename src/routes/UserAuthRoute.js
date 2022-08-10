import { Navigate } from "react-router-dom";
import memoryUtils from "../utils/memoryUtils";
export default function UserAuthRoute({ children }) {
  const isLogin = () => {
    //判断是否登录
    const loginUser = memoryUtils.user
    const currentTime = new Date()
    if (parseInt(currentTime - loginUser.date) > loginUser.expire) {
      return false
    }
    return true;
  };
  return isLogin() === true ? children : <Navigate to="/login" replace />;
}