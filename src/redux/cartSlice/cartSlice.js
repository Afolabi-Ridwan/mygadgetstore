import { createSlice } from "@reduxjs/toolkit";

const cartItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const counter =
  localStorage.getItem("counter") !== null
    ? JSON.parse(localStorage.getItem("counter"))
    : 0;

const setCartInfo = (cartItems, counter) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("counter", JSON.stringify(counter));
};

const initialState = { cartItems: cartItems, counter: counter };


const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      state.counter = state.counter + 1;

      const existingItems = state.cartItems.find(
        (eachItem) => eachItem.id === newItem.id
      );

      if (!existingItems) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          img: newItem.img,
          newPrice: newItem.newPrice,
          quantity: 1,
          totalPrice: newItem.newPrice,
        });
      }
      else{
            existingItems.quantity++;
            existingItems.totalPrice = Number(existingItems.totalPrice) + Number(existingItems.totalPrice)
      }

      setCartInfo(state.cartItems, state.counter);
    },
  },
});

export const CartActions = CartSlice.actions;

export default CartSlice.reducer;
