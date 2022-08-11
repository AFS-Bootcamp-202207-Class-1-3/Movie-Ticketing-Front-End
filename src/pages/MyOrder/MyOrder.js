import { useNavigate } from "react-router-dom";
import { Table, Tag, Button } from "antd";
import React, { useState, useEffect } from "react";
import MyOrderPagination from "./MyOrderPagination";
import { getMyOrderInfo } from "../../api/MyOrderApi";
import "./MyOrder.css";
import memoryUtils from "../../utils/memoryUtils";
export default function MyOrder() {
  const userId = memoryUtils.user.userInfo.userId;
  const [myOrderInfos, setMyOrderInfos] = useState([]);
  const [orderPageInfos, setOrderPageInfos] = useState({
    pageNumber: 1,
    pageSize: 10,
    userId: userId
  });
  const [totalOrders, setTotalOrders] = useState(0);
  const pathToOrderDetail = "/User/OrderDetail";

  const nav = useNavigate();

  const clickToDetail = (orderId) => {
    //  跳转已实现，把1改成orderId可以跳转
    nav(pathToOrderDetail, { replace: false, state: { orderId: orderId } });
  };

  useEffect(() => {
    getMyOrderInfo(orderPageInfos).then((response) => {
      setMyOrderInfos(
        response.data.orderListResponses.map(order => ({
          ...order,
          key: order.id
        }))
      );
      setTotalOrders(response.data.totalOrders);
    });
  }, [orderPageInfos]);

  const columns = [
    {
      title: "电影名",
      dataIndex: "name"
    },
    {
      title: "订单号",
      dataIndex: "id",
      ellipsis: true
    },
    {
      title: "电影播放时间",
      dataIndex: "startTime"
    },
    {
      title: "价格",
      dataIndex: "price"
    },
    {
      title: "支付状态",
      dataIndex: "isPay",
      render: isPay => (
        <span>
          {
            <Tag color={isPay ? "geekblue" : "green"} key={isPay}>
              {isPay ? "已支付" : "未支付"}
            </Tag>
          }
        </span>
      )
    },
    {
      action: "Action",
      dataIndex: "action",
      render: (_,orderInfo) => (
        <Button type="link" onClick={() => clickToDetail(orderInfo.id)}>Order Detail</Button>
      ),
    },
  ];

  return (
    <div className="my-order-table">
      <h1>我的订单</h1>
      <Table pagination={false} columns={columns} dataSource={myOrderInfos} />
      <MyOrderPagination
        totalOrders={totalOrders}
        orderPageInfos={orderPageInfos}
        setOrderPageInfos={setOrderPageInfos}
      />
    </div>
  );
}
