import { createSlice } from "@reduxjs/toolkit";

const cartItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const counter =
  localStorage.getItem("counter") !== null
    ? JSON.parse(localStorage.getItem("counter"))
    : 0;


const setCartInfo = (cartItems, counter,) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("counter", JSON.stringify(counter));
};

const initialState = {
  cartItems: cartItems,
  counter: counter,
  wishList: [],
  wishListCounter: 0,
};

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
          newPrice: Number(newItem.newPrice),
          quantity: 1,
          totalPrice: Number(newItem.newPrice),
        });
      } else {
        state.totalCartPrice = existingItems.quantity++;
        existingItems.totalPrice =
          Number(existingItems.totalPrice) + Number(existingItems.totalPrice);
      }

      setCartInfo(state.cartItems, state.counter);
    },

    removeItem: (state, action) => {
      const existingItems = state.cartItems.find(
        (eachItem) => eachItem.id === action.payload
      );
      state.cartItems = state.cartItems.filter(
        (eachItem) => eachItem.id !== action.payload
      );
      state.counter = state.counter - existingItems.quantity;

      setCartInfo(state.cartItems, state.counter);
    },

    clearAllItems: (state, action) => {
      state.cartItems = [];
      state.counter = 0;

      setCartInfo(state.cartItems, state.counter);
    },

    addToWishlistHanlder: (state, action) => {
      const items = action.payload;

      const existingItems = state.wishList.find(
        (eachItem) => eachItem.id === items.id
      );

      if (!existingItems) {
        state.wishListCounter = state.wishListCounter + 1;
        state.wishList.push(items);
      }

    },
  },
});

export const CartActions = CartSlice.actions;

export default CartSlice.reducer;
