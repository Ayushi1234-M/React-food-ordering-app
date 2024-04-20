import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({

    name:"cart",
    initialState:{cart:[]},
    reducers:{
        addToCart:(state, action)=>{
            state.cart.push(action.payload);
        },
        removeFromCart:(state, action)=>{
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        editCartQty:(state, action)=>{
            const itemInd = state.cart.findIndex((item)=> item.id === action.payload.id);
            state.cart[itemInd].qty = action.payload.qty;
        }
    }

});


export const{addToCart, removeFromCart, editCartQty} = CartSlice.actions;
export default CartSlice.reducer;
