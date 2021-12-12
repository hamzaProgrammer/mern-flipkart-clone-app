import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
    name: "brands",
    initialState:{
        isFetching : false,
        error : false,
        success: false,
        allBrands: {},
    },
    reducers: {
        // common slices
        getBrandsWorkStart: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        getBrandsSuccess: (state, action) => {
            state.isFetching = false;
            state.allBrands = action.payload;
            state.success = true;
        },
        getBrandsWorkFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            console.log("Error: ",action.payload)
        },


    }
});


export const {
    getBrandsWorkStart,
    getBrandsSuccess,
    getBrandsWorkFailure,
} = categorySlice.actions;
export default categorySlice.reducer;