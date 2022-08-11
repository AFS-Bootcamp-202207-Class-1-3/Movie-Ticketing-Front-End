import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getMyPairInfo, getPairInfo } from "../../api/PairingApi";
import { message } from "antd";
import NoPartner from "./NoPartner";
import HasPartner from "./HasPartner";
// import { useSelector } from "react-redux";
import memoryUtils from "../../utils/memoryUtils";
const PageNumber = 1;
const PageSize = 6;
export default function Pairing() {
  const {
    state: { movieScheduleId, movieId, cinemaId },
  } = useLocation();

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
    pageSize: PageSize,
  });
  const [total, setTotal] = useState(0);
  const [myPairInfo, setMyPairInfo] = useState({
    status: 1,
  });

  const nav = useNavigate();

  const handlePairInfo = () => {
    getPairInfo(pageInfo, userIdRef.current, movieScheduleIdRef.current)
      .then((response) => {
        setPairInfos(response.data.customerResponses);
        setTotal(response.data.totalCustomers);
      })
      .catch(() => {
        message.error("获取信息失败，请重试");
        setPairInfos([]);
        setTotal(0);
      });

    getMyPairInfo(userIdRef.current, movieScheduleIdRef.current)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 3) {
          nav("/User/MyOrder", { replace: true });
        }
        setMyPairInfo(response.data);
      })
      .catch(() => {
        message.error("获取本人匹配信息失败，请重试");
      });
  };

  useEffect(handlePairInfo, [pageInfo, nav]);

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
