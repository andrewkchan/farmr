import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";
import croplist from "../reducers/croplist";
import entities from "../reducers/entities";
import scope from "../reducers/scope";

const initialState = {
    captured: false,
    image: null
};

const rootReducer = combineReducers({
    croplist,
    entities,
    scope
});

export default rootReducer;
