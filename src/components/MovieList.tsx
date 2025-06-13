import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { Movie } from "../redux/movieSlice";
import './MovieList.css';

interface MovieListProps {
    category: "trending" | "popular" | "upcoming" | "top_rated" | "home";  // Include "home" as category
}

const MovieList: React.FC<MovieListProps> = ({ category }) => {
    const movies = useSelector((state: RootState) => state.movies.movies[category] || []);
    const navigate = useNavigate();
    const movieListRef = useRef<HTMLDivElement>(null);

    // Scroll functions for Home category
    const scrollRight = () => {
        if (movieListRef.current) {
            movieListRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const scrollLeft = () => {
        if (movieListRef.current) {
            movieListRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const isHomeCategory = category === "home"; // Check if the current category is 'home'

    return (
        <Container className="mt-4">
            <div className="movie-list-container-wrapper">
                {isHomeCategory ? (
                    <>
                        {/* Show scroll arrows and horizontal layout for Home category */}
                        <button className="scroll-arrow left" onClick={scrollLeft}>
                            &#8592;
                        </button>
                        <div className="movie-list-container horizontal" ref={movieListRef}>
                            {movies.map((movie: Movie) => (
                                <div className="movie-card" key={movie.id}>
                                    <Card onClick={() => navigate(`/movie/${movie.id}`)} style={{ cursor: "pointer" }}>
                                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                        <Card.Body>
                                            <Card.Title>{movie.title || movie.name}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <button className="scroll-arrow right" onClick={scrollRight}>
                            &#8594;
                        </button>
                    </>
                ) : (
                    // For other categories, display in grid (4 columns) and no scrollbar
                    <div className="movie-list-container grid" ref={movieListRef}>
                        {movies.map((movie: Movie) => (
                            <div className="movie-card" key={movie.id}>
                                <Card onClick={() => navigate(`/movie/${movie.id}`)} style={{ cursor: "pointer" }}>
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                    <Card.Body>
                                        <Card.Title>{movie.title || movie.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default MovieList;
