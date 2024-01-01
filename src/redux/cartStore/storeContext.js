import { createContext } from "react";


export const Context = createContext(
    {
        counter: 0,
        cartAmountDispatch: () => {},
        cartItems: [
           
        ],
    }
);


