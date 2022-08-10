import { Navigate } from "react-router-dom";
//import { useSelector } from "react-redux";
export default function UserAuthRoute({ children }) {
  /*const { loginInfo } = useSelector((state) => {
    return state.loginInfo;
  });*/
  const isLogin = () => {
    //判断是否登录
    //return loginInfo.loginStatus;
    return true;
  };

  return isLogin() === true ? children : <Navigate to="/Login" replace />;
}
