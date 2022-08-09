import { Col, Row } from "antd";
import MovieCard from "./MovieCard";
<<<<<<< HEAD
import "../Home/Home.css"
export default function MovieList() {
  return (
    <div className="movie-list">
      <Row gutter={[48, 48]} justify="center">
        <Col span={8}><MovieCard /></Col>
        <Col span={8}><MovieCard /></Col>
        <Col span={8}><MovieCard /></Col>
        <Col span={8}><MovieCard /></Col>
        <Col span={8}><MovieCard /></Col>
        <Col span={8}><MovieCard /></Col>
      </Row>
    </div>
  );
};
=======
export default function MovieList(props) {
  return (
    <div className="movie-list">
      <Row gutter={[48, 48]} justify="start">
        {props.movieInfos.map((movieInfo) => {
          return (
            <Col key={movieInfo.id} span={8}>
              <MovieCard movieInfo={movieInfo} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
>>>>>>> ccb085996238d2637c4d2256e7ab303ca5e6a7c9
