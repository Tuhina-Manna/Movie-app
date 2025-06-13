import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchMovies } from "../redux/movieSlice";
import MovieList from "../components/MovieList";
import './Home.css';

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      dispatch(fetchMovies("trending"));
      dispatch(fetchMovies("popular"));
      dispatch(fetchMovies("upcoming"));
      dispatch(fetchMovies("top_rated"));
  }, [dispatch]);
  
    return (
        <div className="section">
            <h2>Trending Movies</h2>
            <MovieList category="trending" />
            <h2>Popular Movies</h2>
            <MovieList category="popular" />
            <h2>Upcoming Movies</h2>
            <MovieList category="upcoming" />
            <h2>Top Rated Movies</h2>
            <MovieList category="top_rated" />
        </div>
    );
};

export default Home;