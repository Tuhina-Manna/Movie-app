import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice"; // ✅ Ensure correct import

export const store = configureStore({
    reducer: {
        movies: movieReducer,
    },
});

// ✅ Correctly type RootState & Dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
