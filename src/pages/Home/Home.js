import MovieList from "./MovieList";
import MovieCarousel from "./MovieCarousel";
import MoviePagination from "./MoviePagination";
<<<<<<< HEAD
import "../Home/Home.css"
export default function Home() {
    return (
        <div className="container">
            <MovieCarousel className="tags-panel" />
            <div className="movies-list">
                <MovieList className="movie-list" />
                <div className="movies-pager">
                    <MoviePagination className="list-pager" />
                </div>
            </div>
        </div>
    );
}
=======
import "./Home.css";
import { useEffect, useState } from "react";
import { getMoviesInfo } from "../../api/HomeApi";

export default function Home() {
  const [movieInfos, setMovieInfos] = useState([]);
  const [pageInfo, setPageInfo] = useState({ pageNumber: 1, pageSize: 6 });
  const [totalMovies, setTotalMovies] = useState(0);

  useEffect(() => {
    getMoviesInfo(pageInfo).then((respsonse) => {
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
>>>>>>> ccb085996238d2637c4d2256e7ab303ca5e6a7c9
