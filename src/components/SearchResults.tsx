import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3";

const SearchResults: React.FC = () => {
    const { query } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.error(err));
    }, [query]);

    return (
        <Container className="mt-4">
            <h2>Search Results for "{query}"</h2>
            <Row>
                {movies.map((movie: any) => (
                    <Col md={3} key={movie.id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default SearchResults;