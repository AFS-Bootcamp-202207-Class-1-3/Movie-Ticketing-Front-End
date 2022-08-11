import { ReloadOutlined, ManOutlined, WomanOutlined } from "@ant-design/icons";
import { Button, message, List, Badge, Avatar, Card } from "antd";
import { postStartPairing } from "../../api/PairingApi";

export default function MyPairInfo(props) {
  const handleStartPair = () => {
    postStartPairing({
      userId: props.userId,
      movieScheduleId: props.movieScheduleId,
    })
      .then((response) => {
        console.log(response.data);
        props.handlePairInfo();
      })
      .catch(() => {
        message.error("发起匹配失败，请重试");
      });
  };

  return (
    <div>
      {props.myPairInfo.status === 2 ? (
        <List
          itemLayout="vertical"
          dataSource={[props.myPairInfo]}
          bordered
          renderItem={(pairInfo) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Badge
                    count={
                      pairInfo.gender === "male" ? (
                        <ManOutlined />
                      ) : (
                        <WomanOutlined />
                      )
                    }
                  >
                    <Avatar src={pairInfo.avatarUrl} />
                  </Badge>
                }
                title={
                  <span>
                    {pairInfo.nickName}
                    <font style={{ fontSize: "5px", color: "blue" }}>
                      (本人)
                    </font>
                    <font style={{ marginLeft: "10px", fontSize: "8px" }}>
                      {" "}
                      age:{pairInfo.age}
                    </font>
                  </span>
                }
                description={<span>{pairInfo.introduction}</span>}
              />
            </List.Item>
          )}
        ></List>
      ) : (
        <Card>
          <p>没有心仪的同伴？快点击按钮发起匹配吧</p>
        </Card>
      )}
      <Button
        type="text"
        icon={<ReloadOutlined />}
        onClick={props.handlePairInfo}
      />
      <Button
        type="primary"
        onClick={handleStartPair}
        disabled={props.myPairInfo.status !== 1}
      >
        发起匹配
      </Button>
    </div>
  );
}
