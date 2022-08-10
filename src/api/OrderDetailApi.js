import axios from "axios";
export function getOrderDetail(orderId) {
  return axios.get(`/api/order/${orderId}`);
}

