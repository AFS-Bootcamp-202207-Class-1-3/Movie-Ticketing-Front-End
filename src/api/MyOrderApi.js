import axios from "axios";
export function getMyOrderInfo(pageInfo,userId) {
  return axios.get("/api/order/getOrderList", {
    params: {
        pageNumber: pageInfo.pageNumber,
        pageSize: pageInfo.pageSize,
        userId:userId
    }
});
}