import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, Button, message } from "antd";
import {
  getCinemas,
  getStartTime,
  getSameViewingTime
} from "../../api/SelectCinemaAndViewingTimeApi";
import "../SelectCinemaAndViewingTime/SelectCinemaAndViewingTime.css";
import { useLocation } from "react-router-dom";
import memoryUtils from "../../utils/memoryUtils";
export default function SelectCinemaAndViewingTime() {
  const { Option } = Select;
  const [cinemaData, setCinemaData] = useState([]);
  const [startTimeData, setStartTimeData] = useState([]);
  const [choseMovieSchedule, setChoseMovieSchedule] = useState("");
  const [choseCinema, setChoseCinema] = useState("");
  const {
    state: { movieId }
  } = useLocation();
  const userId = memoryUtils.user.userInfo.userId;
  useEffect(() => {
    getCinemas().then(response => {
      setCinemaData(response.data);
    });
  }, []);
  const nav = useNavigate();
  const handleCinemaChange = cinemaID => {
    setChoseCinema(cinemaID);
    setChoseMovieSchedule("");
    setStartTimeData([]);
    getStartTime(cinemaID, movieId).then(response => {
      setStartTimeData(response.data);
    });
  };

  const onSecondStartTimeChange = value => {
    setChoseMovieSchedule(value);
  };

  const ButtonTo = path => {
    if (choseCinema === "" || choseMovieSchedule === "") {
      message.info("请选择电影院和场次！")
      return;
    }
    //点击确定后判断是否已经存在相同场次订单，如果是则跳转到对应订单详情页
    const orderRequest = {
      userId: userId,
      cinemaId: choseCinema,
      movieScheduleId: choseMovieSchedule,
      movieId: movieId
    };
    getSameViewingTime(orderRequest).then(response => {
      if (response.data === true) {
        message.warn("你已选择过该场次，具体订单可在个人订单页面查询");
        return;
      }
      nav(path, {
        replace: true,
        state: {
          movieScheduleId: choseMovieSchedule,
          movieId: movieId,
          cinemaId: choseCinema
        }
      });
    });
  };

  return (
    <div className="movie-schedule-box">
      <div className="select-box">
        <div className="cinema-select">
          <h1>选择影院</h1>
          <Select
            style={{
              width: 200
            }}
            onChange={handleCinemaChange}
          >
            {cinemaData.map(cinema => (
              <Option key={cinema.id}>{cinema.name}</Option>
            ))}
          </Select>
        </div>
        <div className="viewtime-select">
          <h1>选择场次</h1>
          <div>
            <Select
              style={{
                width: 200
              }}
              onChange={onSecondStartTimeChange}
            >
              {startTimeData.map(startTime => (
                <Option key={startTime.id}>{startTime.startTime}</Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className="my-button">
        <Button
          type="primary"
          onClick={() => {
            ButtonTo("/User/Pairing");
          }}
        >
          确认
        </Button>
      </div>
    </div>
  );
}
