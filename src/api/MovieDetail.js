import axios from "axios";

export function getMovieDetail(movieId) {
  return axios.get(`/api/movie/${movieId}`);
}

export function postOrder(movie){
  return axios.post(`/api/order`,movie);
}