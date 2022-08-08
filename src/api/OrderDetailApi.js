import BaseApi from "./BaseApi";

export function getOrderDetail(orderId) {
  return BaseApi.get(`/OrderDetail/${orderId}`);
}
