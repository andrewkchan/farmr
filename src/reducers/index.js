import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

const initialState = {
    captured: false,
    image: null
};

const rootReducer = function(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN:
            return { ...state };

        case types.CAPTURE:
            return { ...state, captured: true };

        case types.CLOSE:
            return { ...state, captured: false };

        case types.RECEIVE_CAPTURED_IMAGE:
            return { ...state, image: action.image };

        default:
            return state;
    }
}

export default rootReducer;
