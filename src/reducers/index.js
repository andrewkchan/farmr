import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";
import croplist from "../reducers/croplist";
import crops from "../reducers/crops";
import scope from "../reducers/scope";

const initialState = {
    captured: false,
    image: null
};

const rootReducer = combineReducers({
    croplist,
    crops,
    scope
});

export default rootReducer;
