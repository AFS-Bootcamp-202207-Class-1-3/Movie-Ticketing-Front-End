import { Col, Row } from "antd";
import MovieCard from "./MovieCard";
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
