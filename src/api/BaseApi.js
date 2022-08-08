import axios from "axios";

const BaseApi = axios.create({
  baseURL: "https://front-end-movie.herokuapp.com",
});

export default BaseApi;
