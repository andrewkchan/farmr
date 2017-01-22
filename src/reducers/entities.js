import * as types from "../constants/ActionTypes";

const initialState = {
    crops: {} //hashmap of crop entities indexed by ID
};

export default function entities(state = initialState, action) {
    switch(action.crops) {
        case types.RECEIVE_CROPSET:
            return { ...state, crops: { ...state.crops, ...action.crops } };
        case types.UPDATE_CROP:
            return { ...state, crops: { ...state.crops, [action.cropId]: action.crop } };
        default:
            return state;
    }
}