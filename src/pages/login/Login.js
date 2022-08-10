import { login } from "../../api/login";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLoginInfo } from "./LoginSlice";
import storageUtils from "../../utils/storageUtils";
import memoryUtils from "../../utils/memoryUtils";
import "./login.css";
import Logo from "./assets/logo-black.svg";
function Login() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const pathToHome = "/User/Home";

  const isLogin = () => {
    //判断是否登录
    const loginUser = memoryUtils.user;
    console.log(loginUser);
    const userEmpty = JSON.stringify(loginUser) === "{}";
    const currentTime = new Date();
    if (
      userEmpty ||
      parseInt(currentTime - loginUser.date) > loginUser.expire
    ) {
      return false;
    }
    return true;
  };
  const loginMaintainTime = 3 * 60 * 1000;

  const onFinish = values => {
    const request = {
      realName: values.username,
      password: values.password
    };
    login(request)
      .then(response => {
        if (response.data.code === 200) {
          const user = {
            userInfo: response.data,
            date: new Date().getTime(),
            expire: loginMaintainTime
          };
          storageUtils.saveUser(user);
          memoryUtils.user = user;
          dispatch(
            addLoginInfo({ userInfo: response.data, loginStatus: true })
          );
          nav(pathToHome, { replace: true });
        } else {
          message.info("用户名或密码错误");
        }
      })
      .catch(err => {
        message.info("登陆异常");
      });
  };
  if (isLogin()) {
    return <Navigate to="/User/Home" replace />;
  } else {
    return (
      <div className="login-box">
        <div className="my-login-form">
          <div className="logo">
            <img src={Logo} alt="this is logo" />
            <span className="bussiness-name">TMovies</span>
          </div>
          <h2 className="login-title">账户密码登录</h2>
          <Form
            name="normal_login"
            className="login-form"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "请输入用户名!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item className="last-item">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                block
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default Login;
