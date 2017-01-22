import * as types from "../constants/ActionTypes";

const initialState = {
    crops: null //hashmap of crop entities indexed by ID
};

export default function entities(state = initialState, action) {
    switch(action.crops) {
        case 
    }
    if (action.crops) {
        return { ...state, crops: { ...state.crops, ...action.crops } };
    } else {
        return state;
    }
}