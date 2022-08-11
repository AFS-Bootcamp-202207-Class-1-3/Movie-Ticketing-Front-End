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

export function postPairInfo(pairInfoRequest) {
  return axios.post("/api/order/", pairInfoRequest);
}

export function getMyPairInfo(userId, movieScheduleId) {
  return axios.get("/api/pair", {
    params: {
      userId,
      movieScheduleId,
    },
  });
}

export function postStartPairing(pairInfo) {
  return axios.post("/api/pair", pairInfo);
}
