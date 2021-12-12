import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: "users",
    initialState:{
        isFetching : false,
        error : false,
        success: false,
        adminSuccess : false,
        adminError: false ,
        user: {},
        admin: {}
    },
    reducers: {
        // common slices
        getWorkStart: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        getWorkSuccess: (state, action) => {
            state.isFetching = false;
            state.adminSuccess = true;
        },
        getWorkFailure: (state, action) => {
            state.isFetching = false;
            state.adminError = true;
        },

        getSignInSuccess: (state, action) => {
            state.isFetching = false;
            state.adminSuccess = true;
            state.admin = action.payload
        },

        getUserSignInSuccess: (state, action) => {
            state.isFetching = false;
            state.user = true;
            state.admin = action.payload
        },

        // updating cart Item
        // updateCart: (state, action) => {
        //     const ItemIndex = state.products.findIndex(item => item.id === action.payload.product.id)

        //     if (action.payload.type === "inc") {
        //         state.products[ItemIndex].sentQty += 1;
        //         state.total += action.payload.product.price * action.payload.product.sentQty;
        //     }else{
        //         if (state.products[ItemIndex].sentQty > 1 ){
        //             state.products[ItemIndex].sentQty -= 1;
        //             state.total -= action.payload.product.price * ( action.payload.product.sentQty - 1 );
        //         } else if (state.products[ItemIndex].sentQty === 1) {
        //             state.products[ItemIndex].sentQty = 1;
        //         }
        //     }
        // },

        // deleting from cart
        // deleteProduct: (state, action) => {
        //     state.quantity -= 1;
        //     state.products.splice(
        //         state.products.findIndex((item) => item._id === action.payload.id) , 1
        //     );
        //     state.total -= action.payload.price;
        // },

        // adding shipping details
        // addShippingAddress: (state , action) => {
        //     state.shippingAddress = action.payload;
        // },

        // adding payment
        // addPayment: (state, action) => {
        //     state.payment = action.payload;
        // },

        // setting cart to null
        // setProductsInCart:(state , action) => {
        //     console.log("Reached in  Reducer : ")
        //     state.products = []
        // }
    }
});


export const {
    getWorkStart,
    getWorkSuccess,
    getWorkFailure,
    getSignInSuccess,
    getUserSignInSuccess
} = usersSlice.actions;
export default usersSlice.reducer;