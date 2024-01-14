import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import CartStore from "./redux/cartStore/cartStore";
import {store} from "./redux/cartSlice/cartReducer";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <CartStore>
          <App />
        </CartStore>

        <ToastContainer
          position="top-right"
          autoClose={4000}
          closeOnClick
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
