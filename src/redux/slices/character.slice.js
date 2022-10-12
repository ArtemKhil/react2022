import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {charactersService} from "../../services";


const initialState = {
    characters: [],
    loading: false,
    error: null,
    next: null,
    prev: null
};


const getAll = createAsyncThunk(
    'characterSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await charactersService.getAll(page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);


const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.characters = action.payload.results;
                state.prev = action.payload.prev;
                state.next = action.payload.next;
                state.loading = false;

            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loadind = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
});


const {reducer: characterReducer, actions: {}} = characterSlice;

const characterActions = {
    getAll
};


export {characterReducer, characterActions};