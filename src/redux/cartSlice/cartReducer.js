import CartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

 export const store = configureStore({
    reducer: { 
      cart: CartSlice, 
    }
  });

//   export default store;


// jamie went to the store to buy a horse

// import  Nailah is my niece and my good firend whpwhen you live you spontaniously combust