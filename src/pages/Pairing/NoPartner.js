import { Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
export default function NoPartner(props) {
  return (
    <div>
      <Button
        type="text"
        icon={<ReloadOutlined />}
        onClick={props.handlePairInfo}
      >
        点击我刷新!
      </Button>
      <div>该场次尚未有同伴加入，请耐心等待！</div>
    </div>
  );
}
