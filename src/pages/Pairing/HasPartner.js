import PairingPagination from "./PairingPagination";
import { Button, List, Avatar, Badge, Popconfirm, Affix } from "antd";
import {
  ManOutlined,
  WomanOutlined,
  PlusCircleTwoTone,
  ReloadOutlined,
} from "@ant-design/icons";
export default function HasPartner(props) {
  const confirm = (pairInfo) => {
    //Todo
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
