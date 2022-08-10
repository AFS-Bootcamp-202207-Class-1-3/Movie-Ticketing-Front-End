import { useNavigate } from "react-router-dom";
import { Table, Tag } from "antd";
import React from "react";
import MyOrderPagination from "./MyOrderPagination";
import "./MyOrder.css";

export default function MyOrder() {
  // const [myOrderInfos, setMyOrderInfos] = useState([]);
  const pathToOrderDetail="/User/OrderDetail"
  const originData = [];

  const nav = useNavigate();

  const clickToDetail=(item)=>{
    //  跳转已实现，把1改成orderId可以跳转
    nav(pathToOrderDetail, { replace: false, state: { orderId: "1"} });
  }

  for (let i = 0; i < 5; i++) {
    originData.push({
      key: i.toString(),
      user_id: i,
      movie_name: `movie ${i}`,
      order_id: `000000000000${i}`,
      start_time: "2022/01/01",
      price: "$200",
      payment_status: "paid",
      action: "order detail",
    });
  }

  for (let i = 5; i < 10; i++) {
    originData.push({
      key: i.toString(),
      user_id: i,
      movie_name: `movie ${i}`,
      order_id: `00${i}`,
      start_time: "2022/01/01",
      price: "$200",
      payment_status: "unpaid",
      action: "order detail",
    });
  }

  const columns = [
    {
      title: "Movie Name",
      dataIndex: "movie_name",
    },
    {
      title: "Order Id",
      dataIndex: "order_id",
      ellipsis: true,
    },
    {
      title: "Start Time",
      dataIndex: "start_time",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Payment Status",
      dataIndex: "payment_status",
      render: (payment_status) => (
        <span>
          {
            <Tag
              color={payment_status === "paid" ? "geekblue" : "green"}
              key={payment_status}
            >
              {payment_status}
            </Tag>
          }
        </span>
      ),
    },
    {
      action: "Action",
      dataIndex: "action",
      render: (text,item) => <a onClick={()=>clickToDetail(item)}>{text}</a>,
    },
  ];

  return (
    <div className="my-order-table">
      <h1>My Orders</h1>
      <Table pagination={false} columns={columns} dataSource={originData} />
      <MyOrderPagination />
    </div>
  );
}
