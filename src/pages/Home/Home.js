import MovieList from "./MovieList";
import MovieCarousel from "./MovieCarousel";
import MoviePagination from "./MoviePagination";
import "./Home.css";
import { useEffect, useState } from "react";
import { getMoviesInfo } from "../../api/HomeApi";

export default function Home() {
  const [movieInfos, setMovieInfos] = useState([]);
  const [pageInfo, setPageInfo] = useState({ pageNumber: 1, pageSize: 6 });
  const [totalMovies, setTotalMovies] = useState(0);

  useEffect(() => {
    getMoviesInfo(pageInfo).then(respsonse => {
      setMovieInfos(respsonse.data.movieResponses);
      setTotalMovies(respsonse.data.totalMovies);
    });
  }, [pageInfo]);
  
  return (
    <div className="movie-home">
      <MovieCarousel />
      <MovieList movieInfos={movieInfos} />
      <MoviePagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalMovies={totalMovies}
      />
    </div>
  );
}
