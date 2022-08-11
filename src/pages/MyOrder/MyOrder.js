import { useNavigate } from "react-router-dom";
import { Table, Tag, Button } from "antd";
import React, { useState, useEffect } from "react";
import MyOrderPagination from "./MyOrderPagination";
import { getMyOrderInfo } from "../../api/MyOrderApi";
import "./MyOrder.css";

export default function MyOrder() {
  const [myOrderInfos, setMyOrderInfos] = useState([]);
  const [orderPageInfos, setOrderPageInfos] = useState({
    pageNumber: 1,
    pageSize: 10,
  });
  const [totalOrders, setTotalOrders] = useState(0);
  const pathToOrderDetail = "/User/OrderDetail";

  const nav = useNavigate();

  const clickToDetail = (orderId) => {
    //  跳转已实现，把1改成orderId可以跳转
    nav(pathToOrderDetail, { replace: false, state: { orderId: orderId } });
  };

  useEffect(() => {
    getMyOrderInfo(orderPageInfos, "1").then((response) => {
      setMyOrderInfos(
        response.data.orderListResponses.map((order) => ({
          ...order,
          key: order.id,
        }))
      );
      setTotalOrders(response.data.totalOrders);
    });
  }, [orderPageInfos]);

  const columns = [
    {
      title: "Movie Name",
      dataIndex: "name",
    },
    {
      title: "Order Id",
      dataIndex: "id",
      ellipsis: true,
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Payment Status",
      dataIndex: "isPay",
      render: (isPay) => (
        <span>
          {
            <Tag color={isPay ? "geekblue" : "green"} key={isPay}>
              {isPay ? "paid" : "unpaid"}
            </Tag>
          }
        </span>
      ),
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
      <h1>My Orders</h1>
      <Table pagination={false} columns={columns} dataSource={myOrderInfos} />
      <MyOrderPagination
        totalOrders={totalOrders}
        orderPageInfos={orderPageInfos}
        setOrderPageInfos={setOrderPageInfos}
      />
    </div>
  );
}
