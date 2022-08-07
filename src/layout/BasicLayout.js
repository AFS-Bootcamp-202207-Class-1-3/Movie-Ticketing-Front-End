import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./Layout.css";
const { Header, Content, Footer } = Layout;

export default function BasicLayout() {
  return (
    <Layout>
      <Header></Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Design By COOL Team</Footer>
    </Layout>
  );
}
