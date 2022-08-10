import { Pagination } from "antd";
import React from "react";

export default function PairingPagination(props) {
  const changePage = (page, pageSize) => {
    props.setPageInfo({ pageNumber: page, pageSize: pageSize });
  };
  return (
    <Pagination
      current={props.pageInfo.pageNumber}
      pageSize={props.pageInfo.pageSize}
      total={props.total}
      className="movie-pagination"
      onChange={changePage}
    />
  );
}
