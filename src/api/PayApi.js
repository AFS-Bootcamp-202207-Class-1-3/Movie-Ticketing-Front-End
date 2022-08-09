import axios from "axios";
export const putPay = pay => {
  return axios.put("/api/pay", pay);
};
