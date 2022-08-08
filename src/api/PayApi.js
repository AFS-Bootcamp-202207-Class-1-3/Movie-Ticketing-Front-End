import BaseApi from "./BaseApi";
export const putPay = pay => {
  return BaseApi.put("/pay",  pay );
};
