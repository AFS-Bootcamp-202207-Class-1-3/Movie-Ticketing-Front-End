import BaseApi from "./BaseApi";

export function getMovieDetail(movieId) {
  return BaseApi.get(`/movie/${movieId}`);
}

export function postOrder(movie){
  return BaseApi.post(`/order`,movie);
}