import * as types from "../constants/ActionTypes";

const initialState = {
    crops: null //hashmap of crop entities indexed by ID
};

export default function crops(state = initialState, action) {
    switch(action.crops) {
        case types.RECEIVE_CROPSET:
            return { ...state, crops: { ...state.crops, ...action.crops } };
        case types.UPDATE_CROP:
            return { ...state, crops: { ...state.crops, [action.cropId]: action.crop } };
        default:
            return state;
    }
}