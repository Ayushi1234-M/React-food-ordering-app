import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";
import SearchSlice from "./Slice/SearchSlice";

const Store = configureStore({
    reducer : 
    {
        cart: CartSlice,
        search: SearchSlice
    }
});

export default Store;