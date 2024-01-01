import { useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import { Context } from "./storeContext";

const cartItems =
  localStorage.getItem("cartInfo") !== null
    ? JSON.parse(localStorage.getItem("cartInfo"))
    : [];
const counter =
  localStorage.getItem("counter") !== null
    ? JSON.parse(localStorage.getItem("counter"))
    : 0;

const setCartInfo = (cartInfo, counter) => {
  localStorage.setItem("cartInfo", JSON.stringify(cartInfo));
  localStorage.setItem("counter", JSON.stringify(counter));
};


function cartNoDispatchHandler(state, action) {
  if (action.type === "ADD_TO_CART") {
    const newCounter = state.counter + 1;
    const cartItemsInfo = state.cartItems;

    const cartInfo = action.payload;

    const filteredInfo = cartItemsInfo.find(
      (eachID) => eachID.id === cartInfo.id
    );

    if (!filteredInfo) {
      cartItemsInfo.push({
        id: cartInfo.id,
        name: cartInfo.itemInfo.name,
        img: cartInfo.itemInfo.itemImg[0],
        newPrice: cartInfo.itemInfo.newItemPrice,
        oldPrice: cartInfo.itemInfo.oldItemPrice,
        description: cartInfo.itemInfo.description1,
        quantity: 1,
        totalprice: cartInfo.itemInfo.newItemPrice,
      });
    } else {
      filteredInfo.quantity += 1

      filteredInfo.totalprice =
        Number(filteredInfo.totalprice) +
        Number(cartInfo.itemInfo.newItemPrice);
    }
    setCartInfo([], 0);

    return { counter: newCounter, cartItems: cartItemsInfo };
  }

  return state;
}
const CartStore = ({ children }) => {
  // const { counter, cartItems } = useContext(Context);

  const cartInfo = { counter, cartItems };

  const [cartNoState, cartNoDispatch] = useReducer(
    cartNoDispatchHandler,
    cartInfo
  );

  function cartAmountDispatch(itemInfo) {
    cartNoDispatch({
      type: "ADD_TO_CART",
      payload: itemInfo,
    });
  }

  const newCartAmount = {
    counter: cartNoState.counter,
    cartAmountDispatch: cartAmountDispatch,
    cartItems: cartNoState.cartItems,
  };

  return (
    <Context.Provider value={newCartAmount}> {children} </Context.Provider>
  );
};

export default CartStore;
