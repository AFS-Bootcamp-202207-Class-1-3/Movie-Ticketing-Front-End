import axios from "axios";
export function getMoviesInfo(pageInfo) {
  return axios.get("/api/movie", {
    params: {
        pageNumber: pageInfo.pageNumber,
        pageSize: pageInfo.pageSize,
        searchMessage: pageInfo.searchMessage
    }
});
}