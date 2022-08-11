import axios from "axios";
export function getMyOrderInfo(pageInfo) {
  return axios.get("/api/order/getOrderList", {
    params: {
        pageNumber: pageInfo.pageNumber,
        pageSize: pageInfo.pageSize,
        userId: pageInfo.userId
    }
});
}