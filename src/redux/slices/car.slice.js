import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../../services";


const initialState = {
    cars: [],
    error: null,
    loading: false,
    carForUpdate: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateById(id, car);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.deleteById(id)
            return id;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })

            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(create.pending, (state, action) => {
                state.loading = true;
            })

            .addCase(deleteById.fulfilled, (state, action) => {
                const index = state.cars.findIndex(value => value.id === action.payload);
                state.cars.splice(index, 1);
            })
            .addCase(deleteById.pending, (state, action) => {
                state.loading = true;
            })

            .addCase(updateById.fulfilled, (state, action) => {
                const find = state.cars.find(value => value.id === action.payload.id);
                Object.assign(find, action.payload);
                state.carForUpdate = null;
            })
            .addCase(updateById.pending, (state, action) => {
                state.loading = true;
            })

            .addDefaultCase((state, action) => {
                const [pathElement] = action.type.split('/').splice(-1);
                if (pathElement === 'rejected') {
                    state.error = action.payload;
                    state.loading = false;
                } else {
                    state.error = null;
                }
            })
});


const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carActions = {getAll, create, updateById, deleteById, setCarForUpdate};


export {carReducer, carActions};
