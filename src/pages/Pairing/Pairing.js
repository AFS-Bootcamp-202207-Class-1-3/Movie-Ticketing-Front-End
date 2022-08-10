//import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPairInfo } from "../../api/PairingApi";
import { message } from "antd";
import NoPartner from "./NoPartner";
import HasPartner from "./HasPartner";

const PageNumber = 1;
const PageSize = 6;
export default function Pairing() {
  //const { state:{movieScheduleId,movieId,cinemaId}}=useLocation()

  const movieScheduleId = "1";
  const userId = "1";
  const [pairInfos, setPairInfos] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    pageNumber: PageNumber,
    pageSize: PageSize,
  });
  const [total, setTotal] = useState(0);

  const handlePairInfo = () => {
    getPairInfo(pageInfo, userId, movieScheduleId)
      .then((response) => {
        console.log(response.data);
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
    <div>
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
      />
    </div>
  );
}
