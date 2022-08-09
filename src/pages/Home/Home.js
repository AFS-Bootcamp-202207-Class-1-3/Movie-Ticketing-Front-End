import MovieList from "./MovieList";
import MovieCarousel from "./MovieCarousel";
import MoviePagination from "./MoviePagination";
import "./Home.css"

export default function Home() {
    return (
        <div className="movie-home">
            <MovieCarousel />
            <MovieList />
            <MoviePagination />
        </div>
    );
}