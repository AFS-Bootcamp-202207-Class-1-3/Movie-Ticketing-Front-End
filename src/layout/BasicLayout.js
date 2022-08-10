import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./Layout.css";
const { Content, Footer } = Layout;

export default function BasicLayout() {
  return (
    <Layout className="user-layout">
      <Content id="login-main">
        <Outlet />
      </Content>
      <Footer>Design By COOL Team</Footer>
    </Layout>
  );
}
