import PairingPagination from "./PairingPagination";
import { Button, List, Avatar, Badge, Popconfirm, message } from "antd";
import {
  ManOutlined,
  WomanOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import { postPairInfo } from "../../api/PairingApi";
import { useNavigate } from "react-router-dom";
import "./Pairing.css";
export default function HasPartner(props) {
  const { movieScheduleId, movieId, cinemaId, userId } = props;
  const nav = useNavigate();
  const confirm = (pairInfo) => {
    postPairInfo({
      userId,
      partnerId: pairInfo.id,
      movieScheduleId,
      movieId,
      cinemaId,
    })
      .then((response) => {
        const orderInfo = response.data;
        nav("/User/OrderDetail", { state: { orderId: orderInfo.id } });
      })
      .catch(() => {
        message.error("配对失败，请重试");
      });
  };
  return (
    <div className="has-partner">
      <List
        itemLayout="vertical"
        dataSource={props.pairInfos}
        renderItem={(pairInfo) => (
          <List.Item
            className="list-item"
            extra={
              <Popconfirm
                title="确定选择这个同伴吗?"
                onConfirm={() => {
                  confirm(pairInfo);
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  type="text"
                  shape="circle"
                  icon={<PlusCircleTwoTone twoToneColor="gray" />}
                ></Button>
              </Popconfirm>
            }
          >
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
                  <font
                    style={{
                      marginLeft: "10px",
                      fontSize: "15px",
                      fontWeight: "900",
                      color: "gray",
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
      <PairingPagination
        pageInfo={props.pageInfo}
        setPageInfo={props.setPageInfo}
        total={props.total}
      />
    </div>
  );
}
