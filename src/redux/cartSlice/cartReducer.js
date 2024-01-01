import CartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

 export const store = configureStore({
    reducer: { 
      cart: CartSlice, 
    }
  });

//   export default store;


