import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
    name: "categories",
    initialState:{
        isFetching : false,
        error : false,
        success: false,
        categories: {},
        currntCategory: {},
        parentCategories: {},
        subCategories: {}
    },
    reducers: {
        // common slices
        getWorkStart: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        getWorkSuccess: (state, action) => {
            state.isFetching = false;
            state.parentCategories = action.payload;
            state.success = true;
        },
        getWorkFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            console.log("Error: ",action.payload)
        },

        setAllCategories: (state, action) => {
            state.isFetching = false;
            state.categories = action.payload;
            state.success = true;
        },

        setSubCategories: (state, action) => {
            state.isFetching = false;
            state.subCategories = action.payload;
            state.success = true;
        },

        setCnrtCategory: (state, action) => {
            state.isFetching = false;
            state.currntCategory = action.payload;
            state.success = true;
        },

    }
});


export const {
    getWorkStart,
    getWorkSuccess,
    getWorkFailure,
    setAllCategories,
    setCnrtCategory,
    setSubCategories
} = categorySlice.actions;
export default categorySlice.reducer;