import { Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import Logo from "./assets/logo.svg";
import "./Pairing.css";
export default function NoPartner(props) {
  return (
    <div className="no-partner">
      <div className="no-partner-info">
        <Button
          type="text"
          icon={<ReloadOutlined />}
          onClick={props.handlePairInfo}
        >
          点击我刷新!
        </Button>
        <div>该场次尚未有同伴加入，请耐心等待！</div>
      </div>
      <div className="big-Logo">
        <img src={Logo} alt="this is logo" />
        <span className="bussiness-name">TMovies</span>
      </div>
    </div>
  );
}
