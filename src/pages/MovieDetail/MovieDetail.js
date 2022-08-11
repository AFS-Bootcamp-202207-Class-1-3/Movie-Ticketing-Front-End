import { Button, message, Spin } from "antd";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getMovieDetail } from "../../api/MovieDetail";
import MovieTypes from "./MovieTypes";
import "./MovieDetail.css";
function MovieDetail() {
  const pathToSelectCinemaAndViewingTime = "/User/SelectCinemaAndViewingTime";
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState({});
  const [movieTypeList, setMovieTypeList] = useState([]);
  const nav = useNavigate();
  const {
    state: { movieId }
  } = useLocation();

  const movieIdRef = useRef(movieId);

  useEffect(() => {
    movieIdRef.current = movieId;
  }, [movieId]);

  useEffect(() => {
    getMovieDetail(movieId)
      .then(response => {
        setMovieInfo(response.data);
        const movieTypes = response.data.types.split(" ");
        setMovieTypeList(movieTypes);
        setLoading(false);
      })
      .catch(response => {
        message.error("获取电影信息失败，请重试");
        setLoading(false);
      });
  }, [movieId]);

  const clickToBuy = () => {
    nav(pathToSelectCinemaAndViewingTime, {
      replace: false,
      state: { orderId: "1", movieId: movieId }
    });
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
              <div className="movie-message">
                <div className="name movie-name">{movieInfo.name}</div>
                <div className="attr attr-time">
                  开映时间 : {movieInfo.releaseTime}
                </div>
                <div className="attr attr-duration">
                  时长 : {movieInfo.duration} 分钟
                </div>
                <div className="attr attr-types">
                  <MovieTypes movieTypeList={movieTypeList} />
                </div>
                <div className="click-buy-box">
                  <Button type="primary" danger onClick={clickToBuy}>
                    点击购买
                  </Button>
                </div>
              </div>
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
