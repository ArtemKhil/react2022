import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {usersService} from "../../services";


const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
    getAsyncUser: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await usersService.getAll();
            return data

        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const deleteById = createAsyncThunk(
    'userSlice/deleteById',
    async ({id}, {rejectWithValue}) => {
        try {
            await usersService.deleteById(id);
            return id;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await usersService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })


            .addCase(getById.fulfilled, (state, action) => {
                state.getAsyncUser = action.payload;
                state.loading = false;
            })
            .addCase(getById.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            .addCase(deleteById.fulfilled, (state, action) => {
                const userIndex = state.users.findIndex(value => value.id === action.payload);
                state.users.splice(userIndex, 1);
            })
            .addCase(deleteById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
});

const {reducer: userReducer, actions: {setCurrentUser}} = userSlice;

const userActions = {
    getAll,
    setCurrentUser,
    getById,
    deleteById
};


export {userReducer, userActions};