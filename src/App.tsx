import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";
import SearchResults from "./components/SearchResults";
import CategoryPage from "./components/CategoryPage"; // ✅ Add this import
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <div className="app">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="/search/:query" element={<SearchResults />} />
                    <Route path="/category/:category" element={<CategoryPage />} /> {/* ✅ Add CategoryPage route */}
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
};

export default App;