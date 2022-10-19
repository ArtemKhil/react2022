import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../services";


const initialState = {
    genres: [],
    loading: false,
    error: null,
    moviesByGenre: [],
    prev: null,
    next: null
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getMoviesByGenreId = createAsyncThunk(
    'genreSlice/getMoviesByGenreId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getMoviesByGenreId(id, page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

// state.prev = action.payload.prev; undefined
// state.next = action.payload.next; undefined

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
                state.loading = false;
                state.error = null;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            .addCase(getMoviesByGenreId.fulfilled, (state, action) => {
                state.moviesByGenre = action.payload.results;
                state.prev = action.payload.prev;
                state.next = action.payload.next;
                state.loading = false;
                state.error = null;
            })
            .addCase(getMoviesByGenreId.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMoviesByGenreId.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
});


const {reducer: genreReducer, actions: {}} = genreSlice;

const genreActions = {getMoviesByGenreId, getAll};

export {
    genreReducer,
    genreActions
};
