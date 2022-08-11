import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

export default function MovieCard({ movieInfo }) {
  const nav = useNavigate();

  return (
    <div className="movie-card">
      <Card
        cover={
          <img
            alt="moviephoto"
            src={movieInfo.postUrl}
            style={{ cursor: "pointer" }}
            onClick={() => {
              nav("/User/MovieDetail", {
                replace: true,
                state: { movieId: movieInfo.id }
              });
            }}
          />
        }
        actions={[
          <Button
            type="link"
            onClick={() => {
              nav("/User/MovieDetail", {
                replace: true,
                state: { movieId: movieInfo.id }
              });
            }}
          >
            More Detail
          </Button>
        ]}
      >
        <Meta title={movieInfo.name} description={movieInfo.introduction} />
      </Card>
    </div>
  );
}
