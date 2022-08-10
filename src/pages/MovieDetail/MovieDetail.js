import { Button, message, Spin } from "antd";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getMovieDetail, postOrder } from "../../api/MovieDetail";
import "./MovieDetail.css";

function MovieDetail() {
  const pathToSelectCinemaAndViewingTime = "/User/SelectCinemaAndViewingTime";
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState({
    postUrl: "http://entpic.yue365.com/movie/202207/4725.jpg",
    name: "魔女2",
    introduction:
      "电影《魔女2》为动作、科幻题材，由朴勋政导演执导，他也是该影片的编剧，影片的时长为137分钟。影片定档于2022年6月15日在韩国上映，时长为137分钟。该影片主要讲述秘密实验室组织中的非法人员，一直秘密追踪着一个女孩的下落。影片的一开始，女孩在一家实验室中苏醒，她不知道自己身处何处，也不晓得这实验室背后躲着的人是好人还是坏人，所以她飞速地逃离了那家实验室。",
    releaseTime: "2022-08-02",
    duration: 123,
  });

  const nav = useNavigate();
  const {
    state: { movieId },
  } = useLocation();

  const movieIdRef = useRef(movieId);

  useEffect(() => {
    movieIdRef.current = movieId;
  }, [movieId]);

  useEffect(() => {
    getMovieDetail(movieId)
      .then((response) => {
        setMovieInfo(response.data);
        setLoading(false);
      })
      .catch((response) => {
        message.error("获取电影信息失败，请重试");
        setLoading(false);
      });
  }, [movieId]);

  const clickToBuy = () => {
    // // mvp的实现，之后不在这里生成CustomerOrder
    // postOrder({
    //   userId: "useId",
    //   movieId: "movieId",
    //   movieScheduleId: "movieScheduleId",
    //   cinemaId: "cinemaId",
    // })
    //   .then((response) => {
    nav(pathToSelectCinemaAndViewingTime, { replace: false, state: { orderId: "1", movieId: movieId } });
    // 此处先传1用于展示
    console.log("点击了");
    // })
    // .catch((response) => {
    //   message.error("购票失败，请重试");
    // });
    // nav(pathToOrderDeatail, { replace: false, state: { orderId: "1" } });
  };

  return (
    <div className="con">
      <Spin spinning={loading}>
        <div className="detail-con">
          <div className="upper-con">
            <div className="post-con">
              <img alt="post" src={movieInfo.postUrl} />
            </div>
            <div className="movie-attr">
              <div className="name movie-name">{movieInfo.name}</div>
              <div className="attr attr-time">
                release time:{movieInfo.releaseTime}
              </div>
              <div className="attr attr-duration">
                duration:{movieInfo.duration}
              </div>
              <div className="attr attr-types">{movieInfo.types}types:</div>
              <Button type="primary" danger onClick={clickToBuy}>
                click to buy
              </Button>
            </div>
          </div>
          <div className="detail-text-con">
            <div className="attr detail-text">{movieInfo.introduction}</div>
          </div>
        </div>
      </Spin>
    </div>
  );
}

export default MovieDetail;
