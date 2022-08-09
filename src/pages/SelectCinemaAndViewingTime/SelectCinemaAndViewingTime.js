import { useState, useEffect, useRef } from "react";
import { Select } from "antd";
import "../SelectCinemaAndViewingTime/SelectCinemaAndViewingTime.css"
export default function SelectCinemaAndViewingTime() {
    // const [loading, setLoading] = useState(true);
    const { Option } = Select;
    const cinemaData = ['Cinema-1', 'Cinema-2'];
    const roomData = {
        'Cinema-1': ['Time-1', 'Time-2', 'Time-3'],
        'Cinema-2': ['Time-4', 'Time-5', 'Time-6'],
    };
    const [rooms, setRooms] = useState(roomData[cinemaData[0]]);
    const [secondRoom, setSecondRoom] = useState(roomData[cinemaData[0]][0]);

    const handleCinemaChange = (value) => {
        setRooms(roomData[value]);
        setSecondRoom(roomData[value][0]);
    };

    const onSecondRoomChange = (value) => {
        setSecondRoom(value);
    };

    return (
        <div className="main">
            {/* <Spin spinning={loading}> */}
            <div className="cinema-select">
                <h1>Choose the cinema you like:</h1>
                <Select
                    defaultValue={cinemaData[0]}
                    style={{
                        width: 120,
                    }}
                    onChange={handleCinemaChange}
                >
                    {cinemaData.map((cinema) => (
                        <Option key={cinema}>{cinema}</Option>
                    ))}
                </Select>
            </div>
            <div className="viewtime-select">
                <h1>Choose your viewing time:</h1>
                <div>
                    <Select
                        style={{
                            width: 120,
                        }}
                        value={secondRoom}
                        onChange={onSecondRoomChange}
                    >
                        {rooms.map((room) => (
                            <Option key={room}>{room}</Option>
                        ))}
                    </Select>
                </div>
            </div>

            {/* </Spin> */}
        </div>
    )
}