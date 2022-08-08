import axios from "axios";

const BaseApi = axios.create({
  baseURL: "https://front-end-movie-qa.herokuapp.com",
});

export default BaseApi;
