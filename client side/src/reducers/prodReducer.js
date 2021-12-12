import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
    name: "products",
    initialState:{
        isFetching : false,
        error : false,
        success: false,
        allProducts: [],
        singleProduct : [],
        under5k : [],
        under10k: [],
        under15k: [],
        under20k: [],
        under30k: [],
    },
    reducers: {
        // common slices
        getProductsStart: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductsSuccess: (state, action) => {
            state.isFetching = false;
            state.allProducts = action.payload;
            state.success = true;
        },
        getProductsFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            console.log("Error : ", action.payload)
        },

        // getting single product
        getSingleProdSuccess: (state, action) => {
            state.isFetching = false;
            state.singleProduct = action.payload;
            state.success = true;
        },

        // for sorting products according to price range
        addToUnder5KSuccess: (state, action) => {
            state.isFetching = false;
            state.under5k = [];
            //state.under5k.push([action.payload]);
            action.payload.map((item) => (
                item.price <= 5000 ? (
                    state.under5k.push([action.payload])
                ) : (
                    item.price <= 10000 ? (
                        state.under10k.push([action.payload])
                    ): (
                        item.price <= 15000 ? (
                            state.under15k.push([action.payload])
                        ): (
                            item.price >= 20000 && (
                                state.under20k.push([action.payload])
                            )
                        )
                    )
                )
            ))
            state.success = true;
        },

    }
});


export const {
    getProductsStart,
    getProductsSuccess,
    getProductsFailure,
    getSingleProdSuccess,
    addToUnder5KSuccess
} = categorySlice.actions;
export default categorySlice.reducer;