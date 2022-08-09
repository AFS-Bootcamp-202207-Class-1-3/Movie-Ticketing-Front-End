<<<<<<< HEAD
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card} from "antd";
import React from "react";
const { Meta } = Card;

export default function MovieCard() {
  /*   const [movieInfo, setMovieInfo] = useState({
    movieName: "",
  }); */

  return (
    <div className="site-card-wrapper">
=======
import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

export default function MovieCard({ movieInfo }) {
  const nav = useNavigate();

  return (
    <div className="movie-card">
>>>>>>> ccb085996238d2637c4d2256e7ab303ca5e6a7c9
      <Card
        style={{
          width: 300,
        }}
<<<<<<< HEAD
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta title="Movie name" description="This is the description" />
=======
        cover={<img alt="moviephoto" src={movieInfo.postUrl} />}
        actions={[
          <Button
            type="link"
            onClick={() => {
              nav("/User/MovieDetail", {
                replace: true,
                state: { movieId: movieInfo.id },
              });
            }}
          >
            More Detail
          </Button>,
        ]}
      >
        <Meta title={movieInfo.name} description={movieInfo.introduction} />
>>>>>>> ccb085996238d2637c4d2256e7ab303ca5e6a7c9
      </Card>
    </div>
  );
}
