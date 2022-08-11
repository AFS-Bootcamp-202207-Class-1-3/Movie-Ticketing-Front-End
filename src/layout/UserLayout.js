import "./Layout.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

// add input
import { Layout, Menu, Avatar, Input, message } from "antd";
import Logo from "./assets/logo.svg";

const { Search } = Input;

const { Header, Content, Footer } = Layout;
const userLocalStroage = JSON.parse(localStorage.getItem("user_key"));
const nickName = userLocalStroage==null?"":userLocalStroage.userInfo.nickName;
const avatarUrl = userLocalStroage==null?"":userLocalStroage.userInfo.avatarUrl;
const generateLabel = (path, itemName) => {
  return <Link to={path}>{itemName}</Link>;
};


const items = [
  { key: "Home", title: "Home", label: generateLabel("/User/Home", "Home") },
  {
    key: "Orders",
    title: "Orders",
    label: generateLabel("/User/MyOrder", "Orders")
  }
];



export default function BasicLayout() {
  const nav = useNavigate();
  const onSearch = searchMessage => {
    if(searchMessage.length === 0){
      message.info("您输入的电影名为空！")
      return;
    }
    console.log(searchMessage)
    nav("/User/Search", { replace: true, state: { searchMessage }});
  }
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
                onSearch={onSearch} />
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
