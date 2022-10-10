import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../../services";

const initialState = {
    posts: [],
    loading: false,
    error: null,
    getCommentsByPostId: []
};


const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getAll();
            return data

        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getCommentsByPostId = createAsyncThunk(
    'postSlice/getCommentsByPostId',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getCommentsByPostId(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        deleteById: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload);
            state.posts.splice(index, 1);
        }
    },

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getCommentsByPostId.fulfilled, (state, action) => {
                state.getCommentsByPostId = action.payload;
            })
});


const {reducer: postReducer, actions: {deleteById}} = postSlice;

const postActions = {
    getAll,
    getCommentsByPostId,
    deleteById
};


export {postReducer, postActions};
