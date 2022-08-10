import { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import React from "react";
import MyOrderPagination from "./MyOrderPagination";
import "./MyOrder.css";
import { getMyOrderInfo } from "../../api/MyOrderApi";

export default function MyOrder() {
  const [myOrderInfos, setMyOrderInfos] = useState([]);
  const [orderPageInfos, setOrderPageInfos] = useState({
    pageNumber: 1,
    pageSize: 10,
  });
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    getMyOrderInfo(orderPageInfos,"1").then((response) => {
        console.log(response.data)
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
            <Tag
              color={isPay ? "geekblue" : "green"}
              key={isPay}
            >
              {isPay ? "paid" : "unpaid"}
            </Tag>
          }
        </span>
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
