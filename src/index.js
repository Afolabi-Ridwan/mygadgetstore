import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { store } from "./redux/store/store";
import { configureStore } from "@reduxjs/toolkit";

import RootReducer from "./redux/reducers/rootReducer";

const stor = configureStore( {reducer: {
  
}})
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
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