import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}



const RootReducer = (state = initialState, action) => {

    switch(action.type){

        case "INCREMENT" :
            return ({counter: state.counter + 1});
        
        case "DECREMENT" :
            return ({counter: state.counter - 1})

        default: return state
    }
}

export default RootReducer;