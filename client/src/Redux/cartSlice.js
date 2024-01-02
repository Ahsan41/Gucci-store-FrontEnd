import { createSlice } from "@reduxjs/toolkit";

const cartSLice = createSlice({
    name:"cart",
    initialState:{
        product:[],
        quantity:0,
        total:0,
    },
    reducers: {
        addProduct:(state,action) => {
            state.quantity += 1;
            state.product.push(action.payload);
            state.total += action.payload.price *action.payload.quantity;
        }
    }
})

export default cartSLice.reducer
export const {addProduct} = cartSLice.actions