import axios from "axios";

const BaseApi = axios.create({
  baseURL: "https://back-end-movie.herokuapp.com",
});

export default BaseApi;
