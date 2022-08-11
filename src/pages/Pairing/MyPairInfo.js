import {
  ReloadOutlined,
  ManOutlined,
  WomanOutlined,
  PlusOutlined
} from "@ant-design/icons";
import { Button, message, List, Badge, Avatar, Card } from "antd";
import { postStartPairing } from "../../api/PairingApi";

export default function MyPairInfo(props) {
  const handleStartPair = () => {
    postStartPairing({
      userId: props.userId,
      movieScheduleId: props.movieScheduleId
    })
      .then(() => {
        props.handlePairInfo();
      })
      .catch(() => {
        message.error("发起匹配失败，请重试");
      });
  };

  const refresh = () => {
    props.handlePairInfo();
    message.info("已刷新");
  };

  return (
    <div className="start-pair-box">
      <div className="fresh-button-box">
        <Button
          type="text"
          onClick={handleStartPair}
          disabled={props.myPairInfo.status !== 1}
          style={{ margin: "10px" }}
          icon={<PlusOutlined />}
        >
          发起匹配
        </Button>
        <Button type="text" icon={<ReloadOutlined />} onClick={refresh}>
          刷新列表
        </Button>
      </div>
      {props.myPairInfo.status === 2 ? (
        <div className="pair-list">
          <List
            itemLayout="vertical"
            dataSource={[props.myPairInfo]}
            bordered
            renderItem={pairInfo => (
              <List.Item>
                <List.Item.Meta
                  className="list-item-meta"
                  avatar={
                    <Badge
                      className="list-item-avatar-badge"
                      count={
                        pairInfo.gender === "male" ? (
                          <ManOutlined />
                        ) : (
                          <WomanOutlined />
                        )
                      }
                    >
                      <Avatar
                        src={pairInfo.avatarUrl}
                        className="list-item-avatar"
                      />
                    </Badge>
                  }
                  title={
                    <span className="list-item-meta-name">
                      {pairInfo.nickName}
                      <font style={{ fontSize: "10px", color: "blue" }}>
                        (本人)
                      </font>
                      <font
                        style={{
                          marginLeft: "10px",
                          fontSize: "15px",
                          fontWeight: "900",
                          color: "gray"
                        }}
                      >
                        {" "}
                        age: {pairInfo.age}
                      </font>
                    </span>
                  }
                  description={
                    <span className="list-item-description">
                      {pairInfo.introduction}
                    </span>
                  }
                />
              </List.Item>
            )}
          ></List>
        </div>
      ) : (
        <Card
          style={{
            background: "transparent",
            border: "none"
          }}
        >
          <p>没有心仪的同伴？快点击按钮发起匹配吧</p>
        </Card>
      )}
    </div>
  );
}
