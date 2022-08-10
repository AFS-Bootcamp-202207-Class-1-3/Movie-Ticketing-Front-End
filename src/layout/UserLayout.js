import { Link, Outlet } from "react-router-dom";
import { Input, Layout, Menu, Avatar } from "antd";
import "./Layout.css";
const { Search } = Input;

const { Header, Content, Footer } = Layout;

const generateLabel = (path, itemName) => {
  return <Link to={path}>{itemName}</Link>;
};

const items = [
  { key: "Home", title: "Home", label: generateLabel("/User/Home", "Home") },
];
// Todo search movie by name
const onSearch = value => console.log(value);
export default function BasicLayout() {
  return (
    <Layout className="user-layout">
      <Header>
        <div className="top-bar">
          <div className="left-bar">
            <div className="Logo">
              <img src="assets/logo.svg" alt="this is logo" />
              <span className="bussiness-name">TMovies</span>
            </div>
            <Menu theme="dark" mode="horizontal" items={items} />
          </div>

          <div className="searchBar">
            <Search placeholder="" onSearch={onSearch} />
          </div>
          <div className="right-bar">
            <div className="user">
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <span className="user-name">TMovies</span>
            </div>
          </div>
        </div>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Design By COOL Team</Footer>
    </Layout>
  );
}
