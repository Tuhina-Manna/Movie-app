import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import './Header.css';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search/${query}`);
        }
    };
     // Helper function to check if the current route matches the Nav.Link
     const isActive = (path: string) => {
        return location.pathname === path ? "active" : "";
    };
    return (
        // <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
             <Navbar expand="lg" className="navbar fixed-top">
                <Container>
                {/* App Brand - Clicking it navigates to Home */}
                <Navbar.Brand onClick={() => navigate("/")} className="app-name">CineDuniya</Navbar.Brand>              
                <Nav className="me-auto">
                <Nav.Link onClick={() => navigate("/")} className={isActive("/")}>Home</Nav.Link>
                    <Nav.Link onClick={() => navigate("/category/trending")} className={isActive("/category/trending")}>Trending</Nav.Link>
                    <Nav.Link onClick={() => navigate("/category/popular")} className={isActive("/category/popular")}>Popular</Nav.Link>
                    <Nav.Link onClick={() => navigate("/category/upcoming")} className={isActive("/category/upcoming")}>Upcoming</Nav.Link>
                    <Nav.Link onClick={() => navigate("/category/top_rated")} className={isActive("/category/top_rated")}>Top Rated</Nav.Link>
                </Nav>
                {/* Search Bar */}
                <Form className="search-bar" onSubmit={handleSearch}>
                    <FormControl
                        type="search"
                        placeholder="Search for movies..."                        
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button type="submit" className="search-button">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
};

export default Header;