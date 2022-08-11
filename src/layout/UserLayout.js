import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
// add input
import { Layout, Menu, Avatar } from "antd";
import Logo from "./assets/logo.svg";

// const { Search } = Input;

const { Header, Content, Footer } = Layout;

const userLocalStroage = JSON.parse(localStorage.getItem("user_key"));
const nickName =
  userLocalStroage == null ? "" : userLocalStroage.userInfo.nickName;
const avatarUrl =
  userLocalStroage == null ? "" : userLocalStroage.userInfo.avatarUrl;
const generateLabel = (path, itemName) => {
  return <Link to={path}>{itemName}</Link>;
};

const items = [
  { key: "首页", title: "首页", label: generateLabel("/User/Home", "首页") },
  {
    key: "我的订单",
    title: "我的订单",
    label: generateLabel("/User/MyOrder", "我的订单")
  }
];

// Todo search movie by name
// const onSearch = value => console.log(value);
export default function BasicLayout() {
  return (
    <Layout className="user-layout">
      <Header>
        <div className="top-bar">
          <div className="left-bar">
            <div className="Logo">
              <img src={Logo} alt="this is logo" />
              <span className="bussiness-name">TMovies</span>
            </div>
            <Menu theme="dark" mode="horizontal" items={items} />
          </div>

          <div className="searchBar">
            {/* <Search placeholder="" onSearch={onSearch} /> */}
          </div>
          <div className="right-bar">
            <div className="user">
              <Avatar src={avatarUrl} />
              <span className="user-name">{nickName}</span>
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
