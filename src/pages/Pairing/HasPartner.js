import PairingPagination from "./PairingPagination";
import { Button, List, Avatar, Badge, Popconfirm, Affix, message } from "antd";
import {
  ManOutlined,
  WomanOutlined,
  PlusCircleTwoTone,
  ReloadOutlined,
} from "@ant-design/icons";
import { postPairInfo } from "../../api/PairingApi";
import { useNavigate } from "react-router-dom";
export default function HasPartner(props) {
  const { movieScheduleId, movieId, cinemaId, userId } = props;
  const nav = useNavigate();
  const confirm = (pairInfo) => {
    //Todo
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
    <div>
      <Affix offsetTop={10}>
        <Button
          type="text"
          icon={<ReloadOutlined />}
          onClick={props.handlePairInfo}
        />
      </Affix>
      <List
        itemLayout="vertical"
        dataSource={props.pairInfos}
        renderItem={(pairInfo) => (
          <List.Item
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
                  icon={<PlusCircleTwoTone twoToneColor="pink" />}
                ></Button>
              </Popconfirm>
            }
          >
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
                  <font style={{ marginLeft: "10px" }}>
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
      <PairingPagination
        pageInfo={props.pageInfo}
        setPageInfo={props.setPageInfo}
        total={props.total}
      />
    </div>
  );
}
