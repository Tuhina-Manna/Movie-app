import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3";

// ✅ Define Movie Type
export interface Movie {
    id: number;
    title?: string;
    name?: string;
    poster_path: string;
}

// ✅ Define State Type - Store movies by category
interface MovieState {
    movies: {
        trending?: Movie[];
        popular?: Movie[];
        upcoming?: Movie[];
        top_rated?: Movie[];
        [key: string]: Movie[] | undefined; // ✅ Allow dynamic key access
    };
}

// ✅ Define Initial State
const initialState: MovieState = {
    movies: {},
};

// ✅ Async Thunk to Fetch Movies for a Category
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async (category: string) => {
    const url = category === "trending"
        ? `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
        : `${BASE_URL}/movie/${category}?api_key=${API_KEY}`;

    const response = await axios.get(url);
    return { category, movies: response.data.results };
});

// ✅ Create Slice
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action: PayloadAction<{ category: string; movies: Movie[] }>) => {
            state.movies[action.payload.category] = action.payload.movies;
        });
    },
});

export default movieSlice.reducer;
