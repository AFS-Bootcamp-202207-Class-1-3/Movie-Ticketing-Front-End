import { login } from "../../api/login";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLoginInfo } from "./LoginSlice";
import "./login.css";
function Login() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const pathToHome = "/User/Home";
  const onFinish = (values) => {
    const request = {
      realName: values.username,
      password: values.password,
    };
    login(request).then((response) => {
      if (response.data.code === 200) {
        console.log(response.data);
        dispatch(addLoginInfo({ userInfo: response.data, loginStatus: true }));
        nav(pathToHome);
      } else {
        alert("用户密码错误");
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-box">
      <div className="login-form">
        <h2>账户密码登录</h2>
        <Form
          name="normal_login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名!" }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Login;
