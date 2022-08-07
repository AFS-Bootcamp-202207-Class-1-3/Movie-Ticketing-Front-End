import axios from "axios";

const BaseApi = axios.create({
  baseURL: "http://localhost:8080",
});

export default BaseApi;
