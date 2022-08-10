import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, Button } from "antd";
import { getCinemas, getStartTime, getSameViewingTime, saveOrder, savePay } from "../../api/SelectCinemaAndViewingTimeApi";
import "../SelectCinemaAndViewingTime/SelectCinemaAndViewingTime.css"
import { useLocation } from "react-router-dom";
export default function SelectCinemaAndViewingTime() {
    const { Option } = Select;
    const [cinemaData, setCinemaData] = useState([]);
    const [startTimeData, setStartTimeData] = useState([]);
    const [choseMovieSchedule, setChoseMovieSchedule] = useState(1);
    const [choseCinema, setChoseCinema] = useState(1);
    const {
        state: { movieId },
    } = useLocation();

    useEffect(() => {
        getCinemas()
            .then((response) => {
                setCinemaData(response.data)
            })
    }, []);
    const nav = useNavigate();
    const handleCinemaChange = (value) => {
        setChoseCinema(value);
        getStartTime(value)
            .then((response) => {
                setStartTimeData(response.data)
            })
    };

    const onSecondStartTimeChange = (value) => {
        setChoseMovieSchedule(value)
    };

    const ButtonTo = (path) => {
        if (choseCinema === "" || choseMovieSchedule === "") {
            alert("请先选择！");
            return;
        }
        //点击确定后判断是否已经存在相同场次订单，如果是则跳转到对应订单详情页
        const orderRequest = {
            userId: '1',
            cinemaId: choseCinema,
            movieScheduleId: choseMovieSchedule,
            movieId: movieId
        }
        getSameViewingTime(orderRequest).then((response) => {
            saveOrder(orderRequest)
            const requestPayBody = {
                ordersIds: response.data,
                //TODO 这里需要修改
                totalPrice: 1000.0,
                status: 0
            }
            savePay(requestPayBody)
            nav(path, { replace: true, state: { orderId: response.data } });
        })
    };

    return (
        <div className="movie-schedule-box">
            <div className="select-box">
                <div className="cinema-select">
                    <h1>Choose the cinema you like:</h1>
                    <Select
                        style={{
                            width: 200,
                        }}
                        onChange={handleCinemaChange}
                    >
                        {cinemaData.map((cinema) => (
                            <Option key={cinema.id}>{cinema.name}</Option>
                        ))}
                    </Select>
                </div>
                <div className="viewtime-select">
                    <h1>Choose your viewing time:</h1>
                    <div>
                        <Select
                            style={{
                                width: 200,
                            }}
                            onChange={onSecondStartTimeChange}
                        >
                            {startTimeData.map((startTime) => (
                                <Option key={startTime.id}>{startTime.startTime}</Option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
            <div className="my-button">
                <Button type="primary" onClick={() => {
                    ButtonTo("/User/OrderDetail");
                }}>Confirm</Button>
            </div>
        </div>
    )
}