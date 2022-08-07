import { Link, Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./Layout.css";
const { Header, Content, Footer } = Layout;

const generateLabel = (path, itemName) => {
  return <Link to={path}>{itemName}</Link>;
};

const items = [
  { key: "Home", title: "Home", label: generateLabel("/", "Home") },
];

export default function BasicLayout() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" items={items} />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Design By COOL Team</Footer>
    </Layout>
  );
}
