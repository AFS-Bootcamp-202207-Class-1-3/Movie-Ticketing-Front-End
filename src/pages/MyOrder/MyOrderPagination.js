import { Pagination } from "antd";
import React from "react";

export default function MyOrderPagination(props) {
  return (
    <Pagination
      style={{ margin: "20px" }}
      total={props.totalOrders}
      pageSize={props.orderPageInfos.pageSize}
      current={props.orderPageInfos.startPage}
      onChange={(page, pageSize) => {
        props.setOrderPageInfos({ pageNumber: page, pageSize: pageSize });
      }}
    />
  );
}
