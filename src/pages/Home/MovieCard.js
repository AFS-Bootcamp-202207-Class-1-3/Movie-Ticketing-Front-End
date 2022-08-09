import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card} from "antd";
import React from "react";
const { Meta } = Card;

export default function MovieCard() {
  /*   const [movieInfo, setMovieInfo] = useState({
    movieName: "",
  }); */

  return (
    <div className="site-card-wrapper">
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta title="Movie name" description="This is the description" />
      </Card>
    </div>
  );
}
