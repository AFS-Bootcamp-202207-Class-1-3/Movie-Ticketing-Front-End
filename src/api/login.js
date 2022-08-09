import axios from "axios";
export const login = (loginRequest) => {
  return axios.post("/api/user/login", loginRequest);
};
