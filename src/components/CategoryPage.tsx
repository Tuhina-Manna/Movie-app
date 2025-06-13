import React from "react";
import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";

// ✅ Define allowed categories
const allowedCategories = ["trending", "popular", "upcoming", "top_rated"] as const;
type CategoryType = typeof allowedCategories[number];

const CategoryPage: React.FC = () => {
    const { category } = useParams<{ category?: string }>(); // ✅ Make category optional

    // ✅ Check if category is valid
    if (!category || !allowedCategories.includes(category as CategoryType)) {
        return <p className="text-center mt-3">Invalid category</p>; // Handle undefined/invalid values
    }
    const toSentenceCase = (str: string) => {
        return str.split('_') // Split by underscores
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
        .join(' '); // Join the words back with a space
    };

    return (
        <div>
            <h2 className="category-heading">{toSentenceCase(category)} Movies</h2>
            <MovieList category={category as CategoryType} /> {/* ✅ Type-cast safely */}
        </div>
    );
};

export default CategoryPage;