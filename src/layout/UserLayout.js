import "./Layout.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
// add input
import { Layout, Menu, Avatar, Input, message } from "antd";
import Logo from "./assets/logo.svg";
const { Search } = Input;

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
const logout = () => {
  localStorage.removeItem("user_key");
  window.location.reload();
};

export default function BasicLayout() {
  const nav = useNavigate();
  const onSearch = searchMessage => {
    if (searchMessage.length === 0) {
      message.info("您输入的电影名为空！");
      return;
    }
    console.log(searchMessage);
    nav("/User/Search", { replace: true, state: { searchMessage } });
  };
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
            <Search
              placeholder="请输入电影名称"
              maxLength={10}
              onSearch={onSearch}
            />
          </div>
          <div className="right-bar">
            <div className="user">
              <Avatar src={avatarUrl} />
              <span className="user-name">{nickName}</span>
              <LogoutOutlined
                style={{
                  color: "white",
                  cursor: "pointer",
                  marginLeft: "25px"
                }}
                onClick={logout}
              />
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
