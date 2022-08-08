import BaseApi from "./BaseApi";
export const getBill = (orderId) => {
  return BaseApi.get(`/bills/${orderId}`);
};
