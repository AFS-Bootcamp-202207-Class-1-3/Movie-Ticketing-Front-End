import { Col, Row } from "antd";
import MovieCard from "./MovieCard";
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
