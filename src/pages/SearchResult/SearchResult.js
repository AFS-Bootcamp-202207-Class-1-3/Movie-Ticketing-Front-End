import MovieList from "../Home/MovieList";
import MoviePagination from "../Home/MoviePagination";
import {useEffect, useState} from "react";
import {getMoviesInfo} from "../../api/HomeApi";
import {useLocation} from "react-router-dom";
import NotSearchResult from "./NotSearchResult";

import "./Search.css"

export default function SearchResult() {
    const {
        state: {searchMessage},
    } = useLocation();
    const [movieInfos, setMovieInfos] = useState([]);
    const [pageInfo, setPageInfo] = useState({pageNumber: 1, pageSize: 9});
    const [totalMovies, setTotalMovies] = useState(0);
    useEffect(() => {
        getMoviesInfo({...pageInfo, searchMessage}).then(respsonse => {
            setMovieInfos(respsonse.data.movieResponses);
            setTotalMovies(respsonse.data.totalMovies);
        });
    }, [searchMessage, pageInfo]);

    return isNaN(totalMovies) || totalMovies <= 0 ? (
        <div className="no-result-box">
            <NotSearchResult searchMessage={searchMessage}/>
        </div>
    ) : (
        <div className="movie-home">
            <MovieList movieInfos={movieInfos}/>
            <MoviePagination
                pageInfo={pageInfo}
                setPageInfo={setPageInfo}
                totalMovies={totalMovies}
            />
        </div>
    );
}
