import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getPairInfo } from "../../api/PairingApi";
import { message } from "antd";
import NoPartner from "./NoPartner";
import HasPartner from "./HasPartner";
// import { useSelector } from "react-redux";
import memoryUtils from "../../utils/memoryUtils";
const PageNumber = 1;
const PageSize = 6;
export default function Pairing() {
  const {
    state: { movieScheduleId, movieId, cinemaId }
  } = useLocation();

  // const { loginInfo } = useSelector(state => {
  //   return state.loginInfo;
  // });
  // const userId = loginInfo.userInfo.userId;
  // console.log(userId);
  const userId = memoryUtils.user.userInfo.userId;

  const movieScheduleIdRef = useRef(movieScheduleId);
  const userIdRef = useRef(userId);
  useEffect(() => {
    movieScheduleIdRef.current = movieScheduleId;
    userIdRef.current = userId;
  }, [movieScheduleId, userId]);

  const [pairInfos, setPairInfos] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    pageNumber: PageNumber,
    pageSize: PageSize
  });
  const [total, setTotal] = useState(0);

  const handlePairInfo = () => {
    getPairInfo(pageInfo, userIdRef.current, movieScheduleIdRef.current)
      .then(response => {
        setPairInfos(response.data.customerResponses);
        setTotal(response.data.totalCustomers);
      })
      .catch(() => {
        message.error("获取信息失败，请重试");
        setPairInfos([]);
        setTotal(0);
      });
  };

  useEffect(handlePairInfo, [pageInfo]);

  return isNaN(total) || total <= 0 ? (
    <div className="no-pair-box">
      <NoPartner handlePairInfo={handlePairInfo} />
    </div>
  ) : (
    <div style={{ width: "80vw" }}>
      <HasPartner
        handlePairInfo={handlePairInfo}
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        total={total}
        pairInfos={pairInfos}
        movieScheduleId={movieScheduleId}
        userId={userId}
        movieId={movieId}
        cinemaId={cinemaId}
      />
    </div>
  );
}
