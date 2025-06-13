// src/components/MovieDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap";
import './MovieDetails.css';

const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetails: React.FC = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`)
            .then((res) => setMovie(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    const director = movie.credits?.crew.find((person: any) => person.job === "Director")?.name || "N/A";
    const producers = movie.production_companies?.map((company: any) => company.name).join(", ") || "N/A";
    // Get the first 10 cast members and join them as a comma-separated string
    const castNames = movie.credits?.cast.slice(0, 10).map((actor: any) => actor.name).join(", ") || "N/A";

    return (
        <Container className="movie-details mt-4">
            <Row>
                <Col md={4}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        fluid
                        className="movie-poster"/>
                </Col>
                <Col md={8}>
                    <div className="movie-header">{movie.title}</div>
                    <div className="movie-overview">
                        <p><strong>Overview:</strong> {movie.overview}</p>
                    </div>
                    <div className="cast-list">
                        <p><strong>Cast:</strong> {castNames}</p>
                    </div>
                    <div className="movie-info">
                        <p><strong>Director:</strong> {director}</p>
                        <p><strong>Producers:</strong> {producers}</p>
                        <p><strong>Release Date:</strong> {movie.release_date}</p>
                        <p><strong>Runtime:</strong> {movie.runtime} min</p>                       
                    </div>                  
                </Col>
            </Row>
        </Container>
    );
};

export default MovieDetails;
