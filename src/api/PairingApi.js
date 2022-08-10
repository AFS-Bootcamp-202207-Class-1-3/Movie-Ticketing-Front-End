import axios from "axios";
export function getPairInfo(pageInfo, userId, movieScheduleId) {
  return axios.get("/api/user", {
    params: {
      pageNumber: pageInfo.pageNumber,
      pageSize: pageInfo.pageSize,
      userId,
      movieScheduleId,
    },
  });
}
