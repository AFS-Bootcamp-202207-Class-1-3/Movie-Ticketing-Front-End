import { Navigate } from "react-router-dom";
export default function UserAuthRoute(props) {
  const isLogin = () => {
    //TODO
    //判断是否登录
    return true;
  };

  const { component } = props;

  if (isLogin()) {
    //已登录，则渲染路由
    return component();
  } else {
    return <Navigate to="/Login" />;
  }
}
