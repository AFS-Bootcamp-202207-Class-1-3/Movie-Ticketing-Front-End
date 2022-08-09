import MovieList from "./MovieList";
import MovieCarousel from "./MovieCarousel";
import MoviePagination from "./MoviePagination";
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