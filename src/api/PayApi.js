import axios from "axios";
export const putOrder = (orderId) => {
  return axios.put(`/api/order/${orderId}`);
};
