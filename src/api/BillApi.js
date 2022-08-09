import axios from "axios";
export const getBill = (orderId) => {
  return axios.get(`/api/bills/${orderId}`);
};
