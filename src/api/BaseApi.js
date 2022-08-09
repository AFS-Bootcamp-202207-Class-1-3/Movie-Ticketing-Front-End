import axios from "axios";

const BaseApi = axios.create({
  baseURL: "https:/back-end-movie-qa.herokuapp.com",
});

export default BaseApi;
