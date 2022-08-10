import { Pagination } from "antd";
import React from "react";

export default function MyOrderPagination() {
    return (
        <Pagination total={20} pageSize={10}/>
    )
}
